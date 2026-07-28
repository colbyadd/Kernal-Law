import { existsSync } from 'node:fs'
import { mkdtemp, rm } from 'node:fs/promises'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { setTimeout as delay } from 'node:timers/promises'
import { chromium } from '@playwright/test'
import lighthouse from 'lighthouse'

const HOST = '127.0.0.1'
const STARTUP_TIMEOUT_MS = 30_000
const LIGHTHOUSE_ROUTES = [
  { label: 'Home', path: '/' },
  { label: 'Criminal defense', path: '/criminal-defense' },
  { label: 'Personal injury', path: '/personal-injury' },
  { label: 'Attorney', path: '/attorney' },
  { label: 'Contact', path: '/contact' },
]
const RESPONSIVE_ROUTES = [
  { label: 'Home', path: '/' },
  { label: 'Criminal defense', path: '/criminal-defense' },
  { label: 'Personal injury', path: '/personal-injury' },
  { label: 'Attorney', path: '/attorney' },
  { label: 'Contact', path: '/contact?case=criminal-defense' },
]
const RESPONSIVE_VIEWPORTS = [
  { label: 'phone', width: 390, height: 844 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'laptop', width: 1024, height: 768 },
  { label: 'desktop', width: 1440, height: 1000 },
]
const MINIMUM_CATEGORY_SCORES = {
  performance: 0.85,
  accessibility: 0.95,
  'best-practices': 0.95,
  seo: 0.95,
}
const MAXIMUM_METRICS = {
  'largest-contentful-paint': { label: 'LCP', value: 4_000 },
  'total-blocking-time': { label: 'TBT', value: 300 },
  'cumulative-layout-shift': { label: 'CLS', value: 0.1 },
}

const rootDir = process.cwd()
const buildIdPath = path.join(rootDir, '.next', 'BUILD_ID')
const browserExecutable = chromium.executablePath()
const errors = []
const results = []
let nextProcess
let chromeProcess
let browser
let temporaryDir
let nextOutput = ''
let chromeOutput = ''

function recordProcessOutput(processHandle, target) {
  for (const stream of [processHandle.stdout, processHandle.stderr]) {
    stream?.on('data', (chunk) => {
      const updated = `${target()}${chunk.toString()}`
      target(updated.slice(-8_000))
    })
  }
}

async function getOpenPort() {
  return new Promise((resolve, reject) => {
    const server = createServer()
    server.once('error', reject)
    server.listen(0, HOST, () => {
      const address = server.address()
      if (!address || typeof address === 'string') {
        server.close()
        reject(new Error('Could not allocate a local port.'))
        return
      }

      server.close((closeError) => {
        if (closeError) {
          reject(closeError)
          return
        }
        resolve(address.port)
      })
    })
  })
}

async function waitForUrl(url, label) {
  const deadline = Date.now() + STARTUP_TIMEOUT_MS
  let lastError

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(2_000) })
      if (response.ok) {
        return
      }
      lastError = new Error(`${label} returned HTTP ${response.status}.`)
    } catch (error) {
      lastError = error
    }

    await delay(250)
  }

  throw new Error(`${label} did not become ready: ${lastError?.message ?? 'timed out'}`)
}

function assertCondition(condition, message) {
  if (!condition) {
    errors.push(message)
  }
}

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim()
}

function rectanglesOverlap(first, second) {
  return first.left < second.right
    && first.right > second.left
    && first.top < second.bottom
    && first.bottom > second.top
}

async function validateResponsiveLayouts(page, baseUrl) {
  for (const viewport of RESPONSIVE_VIEWPORTS) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height })

    for (const route of RESPONSIVE_ROUTES) {
      const url = new URL(route.path, baseUrl).toString()
      await page.goto(url, { waitUntil: 'networkidle' })

      const layout = await page.evaluate(() => {
        const root = document.documentElement
        const heading = document.querySelector('h1')
        const headingRect = heading?.getBoundingClientRect() ?? null
        const toddPhotoRects = [...document.querySelectorAll('img[alt="Todd Kernal"]')]
          .filter((image) => {
            const style = window.getComputedStyle(image)
            const rect = image.getBoundingClientRect()
            return style.display !== 'none'
              && style.visibility !== 'hidden'
              && rect.width > 0
              && rect.height > 0
          })
          .map((image) => image.getBoundingClientRect().toJSON())
        const contactFabTargets = [...document.querySelectorAll('.mobile-contact-fab a')]
          .filter((link) => {
            const style = window.getComputedStyle(link)
            const rect = link.getBoundingClientRect()
            return style.display !== 'none'
              && style.visibility !== 'hidden'
              && rect.width > 0
              && rect.height > 0
          })
          .map((link) => link.getBoundingClientRect().toJSON())

        return {
          clientWidth: root.clientWidth,
          scrollWidth: root.scrollWidth,
          heading: headingRect?.toJSON() ?? null,
          toddPhotoRects,
          contactFabTargets,
          contactFabAriaHidden: document.querySelector('.mobile-contact-fab')?.getAttribute('aria-hidden') ?? null,
          mobileConversionBars: document.querySelectorAll('.mobile-conversion-bar').length,
          selectedCase: document.querySelector('#case_type')?.value ?? null,
        }
      })

      const context = `${route.label} at ${viewport.label} (${viewport.width}px)`
      assertCondition(
        layout.scrollWidth <= layout.clientWidth + 1,
        `Responsive gate: ${context} has horizontal overflow (${layout.scrollWidth}px document in a ${layout.clientWidth}px viewport).`,
      )
      assertCondition(
        Boolean(layout.heading)
          && layout.heading.left >= -1
          && layout.heading.right <= layout.clientWidth + 1,
        `Responsive gate: ${context} has a clipped or missing H1.`,
      )

      if (route.path === '/' && viewport.width < 1024) {
        assertCondition(
          layout.toddPhotoRects.length === 1,
          `Responsive gate: ${context} should show one separate Todd Kernal portrait.`,
        )
        if (layout.heading && layout.toddPhotoRects[0]) {
          assertCondition(
            !rectanglesOverlap(layout.heading, layout.toddPhotoRects[0]),
            `Responsive gate: ${context} places Todd Kernal's portrait behind the headline.`,
          )
        }
      }

      if (viewport.width < 768) {
        assertCondition(
          layout.contactFabAriaHidden === 'true',
          `Responsive gate: ${context} exposes the fixed Call/Text bar before the visitor reaches the first content block.`,
        )
      }

      if (route.path === '/') {
        assertCondition(
          layout.mobileConversionBars === 0,
          `Responsive gate: ${context} repeats the homepage consultation action below the hero.`,
        )
      }

      if (route.path === '/attorney' && viewport.width === 768 && layout.toddPhotoRects[0]) {
        assertCondition(
          layout.toddPhotoRects[0].width <= layout.clientWidth * 0.45,
          'Responsive gate: the attorney portrait is oversized at the tablet breakpoint.',
        )
      }

      if (route.path.startsWith('/contact')) {
        assertCondition(
          layout.selectedCase === 'criminal-defense',
          `Responsive gate: ${context} did not preserve the criminal-defense form prefill.`,
        )
      }

      for (const target of layout.contactFabTargets) {
        assertCondition(
          target.width >= 44 && target.height >= 44,
          `Responsive gate: ${context} has a mobile call/text target smaller than 44px.`,
        )
      }
    }
  }

  if (!errors.some((message) => message.startsWith('Responsive gate:'))) {
    console.log('Responsive layout matrix: PASS')
  }
}

async function validateMobileMenuAndFormFocus(page, baseUrl) {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(new URL('/contact', baseUrl).toString(), { waitUntil: 'networkidle' })

  const menuButton = page.getByRole('button', { name: 'Open menu' })
  await menuButton.click()
  const closeButton = page.getByRole('button', { name: 'Close menu' })
  await closeButton.waitFor({ state: 'visible' })

  const openMenuState = await page.evaluate(() => ({
    mainInert: document.querySelector('#main-content')?.hasAttribute('inert') ?? false,
    footerInert: document.querySelector('footer')?.hasAttribute('inert') ?? false,
    fabInert: document.querySelector('.mobile-contact-fab')?.hasAttribute('inert') ?? false,
  }))
  assertCondition(
    openMenuState.mainInert && openMenuState.footerInert && openMenuState.fabInert,
    'Mobile menu gate: background content is not inert while the modal navigation is open.',
  )

  await page.locator('#mobile-menu').evaluate((element) => {
    element.scrollTop = element.scrollHeight
  })
  const closeButtonRect = await closeButton.boundingBox()
  assertCondition(
    Boolean(closeButtonRect)
      && closeButtonRect.y >= 0
      && closeButtonRect.y + closeButtonRect.height <= 844
      && closeButtonRect.width >= 44
      && closeButtonRect.height >= 44,
    'Mobile menu gate: the close control scrolls away or is smaller than 44px.',
  )

  await closeButton.click()
  await page.locator('#mobile-menu').waitFor({ state: 'hidden' })
  const closedMenuState = await page.evaluate(() => ({
    mainInert: document.querySelector('#main-content')?.hasAttribute('inert') ?? false,
    focusedLabel: document.activeElement?.getAttribute('aria-label') ?? '',
  }))
  assertCondition(
    !closedMenuState.mainInert && closedMenuState.focusedLabel === 'Open menu',
    'Mobile menu gate: closing the menu did not restore background access and focus.',
  )

  const submitButton = page.locator('[data-cta="contact_form_submit"]')
  await submitButton.click()
  await page.locator('#case_type_error').waitFor({ state: 'visible' })

  const formFocusState = await page.evaluate(() => {
    const caseType = document.querySelector('#case_type')
    const style = caseType ? window.getComputedStyle(caseType) : null
    return {
      focusedId: document.activeElement?.id ?? '',
      outlineStyle: style?.outlineStyle ?? 'none',
      outlineWidth: style?.outlineWidth ?? '0px',
    }
  })
  assertCondition(
    formFocusState.focusedId === 'case_type',
    'Contact form gate: empty-form validation did not focus the first invalid field in DOM order.',
  )
  assertCondition(
    formFocusState.outlineStyle !== 'none' && Number.parseFloat(formFocusState.outlineWidth) >= 2,
    'Contact form gate: the focused field does not have a visible 2px keyboard outline.',
  )

  if (!errors.some((message) => (
    message.startsWith('Mobile menu gate:')
    || message.startsWith('Contact form gate:')
  ))) {
    console.log('Mobile menu and form focus accessibility: PASS')
  }
}

async function validateFaqInteraction(page, baseUrl) {
  await page.goto(baseUrl, { waitUntil: 'networkidle' })

  const items = page.locator('details[name^="faq-"]')
  assertCondition(await items.count() >= 2, 'FAQ gate: expected at least two native disclosure items.')
  if (await items.count() < 2) {
    return
  }

  const first = items.nth(0)
  const second = items.nth(1)
  const firstAnswer = first.locator('p').first()
  const firstAnswerText = normalizeWhitespace((await firstAnswer.textContent()) ?? '')
  const answerExcerpt = firstAnswerText.slice(0, 48)
  const closedSnapshot = normalizeWhitespace(await first.ariaSnapshot())

  assertCondition(
    !(await first.evaluate((element) => element.open)),
    'FAQ gate: the first answer should be collapsed initially.',
  )
  assertCondition(
    !(await firstAnswer.isVisible()),
    'FAQ gate: a collapsed answer remains visually exposed.',
  )
  assertCondition(
    Boolean(answerExcerpt) && !closedSnapshot.includes(answerExcerpt),
    'FAQ gate: a collapsed answer remains in the accessibility tree.',
  )

  await first.locator('summary').focus()
  await first.locator('summary').press('Enter')

  const openSnapshot = normalizeWhitespace(await first.ariaSnapshot())
  assertCondition(
    await first.evaluate((element) => element.open),
    'FAQ gate: Enter did not open the focused disclosure.',
  )
  assertCondition(
    await firstAnswer.isVisible(),
    'FAQ gate: the answer is not visible after keyboard activation.',
  )
  assertCondition(
    Boolean(answerExcerpt) && openSnapshot.includes(answerExcerpt),
    'FAQ gate: the open answer is missing from the accessibility tree.',
  )

  await second.locator('summary').focus()
  await second.locator('summary').press('Enter')
  assertCondition(
    !(await first.evaluate((element) => element.open))
      && await second.evaluate((element) => element.open),
    'FAQ gate: opening another item did not preserve accordion behavior.',
  )

  if (!errors.some((message) => message.startsWith('FAQ gate:'))) {
    console.log('FAQ interaction accessibility: PASS')
  }
}

function categoryScore(lhr, categoryId) {
  return lhr.categories[categoryId]?.score ?? 0
}

async function runLighthouseBudget(baseUrl, debugPort) {
  for (const route of LIGHTHOUSE_ROUTES) {
    const url = new URL(route.path, baseUrl).toString()
    const runnerResult = await lighthouse(url, {
      hostname: HOST,
      port: debugPort,
      logLevel: 'error',
      output: 'json',
      onlyCategories: Object.keys(MINIMUM_CATEGORY_SCORES),
      maxWaitForLoad: 45_000,
    })

    if (!runnerResult) {
      errors.push(`Lighthouse budget: ${route.label} produced no result.`)
      continue
    }

    const { lhr } = runnerResult
    const routeResult = {
      Route: route.path,
      Performance: Math.round(categoryScore(lhr, 'performance') * 100),
      Accessibility: Math.round(categoryScore(lhr, 'accessibility') * 100),
      'Best practices': Math.round(categoryScore(lhr, 'best-practices') * 100),
      SEO: Math.round(categoryScore(lhr, 'seo') * 100),
      'LCP (ms)': Math.round(lhr.audits['largest-contentful-paint']?.numericValue ?? 0),
      'TBT (ms)': Math.round(lhr.audits['total-blocking-time']?.numericValue ?? 0),
      CLS: Number((lhr.audits['cumulative-layout-shift']?.numericValue ?? 0).toFixed(3)),
    }
    results.push(routeResult)

    for (const [categoryId, minimumScore] of Object.entries(MINIMUM_CATEGORY_SCORES)) {
      const actualScore = categoryScore(lhr, categoryId)
      if (actualScore < minimumScore) {
        errors.push(
          `Lighthouse budget: ${route.path} ${categoryId} scored ${Math.round(actualScore * 100)}; minimum is ${Math.round(minimumScore * 100)}.`,
        )
      }
    }

    for (const [auditId, budget] of Object.entries(MAXIMUM_METRICS)) {
      const actualValue = lhr.audits[auditId]?.numericValue
      if (typeof actualValue !== 'number') {
        errors.push(`Lighthouse budget: ${route.path} is missing the ${budget.label} audit.`)
      } else if (actualValue > budget.value) {
        const displayValue = auditId === 'cumulative-layout-shift'
          ? actualValue.toFixed(3)
          : `${Math.round(actualValue)} ms`
        const displayBudget = auditId === 'cumulative-layout-shift'
          ? budget.value.toFixed(3)
          : `${budget.value} ms`
        errors.push(
          `Lighthouse budget: ${route.path} ${budget.label} is ${displayValue}; maximum is ${displayBudget}.`,
        )
      }
    }
  }

  if (results.length > 0) {
    console.table(results)
  }
}

async function stopProcess(processHandle) {
  if (!processHandle || processHandle.exitCode !== null) {
    return
  }

  processHandle.kill('SIGTERM')
  await Promise.race([
    new Promise((resolve) => processHandle.once('exit', resolve)),
    delay(2_000),
  ])

  if (processHandle.exitCode === null) {
    processHandle.kill('SIGKILL')
  }
}

async function main() {
  if (!existsSync(buildIdPath)) {
    throw new Error('Production build not found. Run `npm run build` before `npm run qa:browser`.')
  }
  if (!existsSync(browserExecutable)) {
    throw new Error('Playwright Chromium not found. Run `npm run browser:install` once, then retry.')
  }

  const [sitePort, debugPort] = await Promise.all([getOpenPort(), getOpenPort()])
  const baseUrl = `http://${HOST}:${sitePort}`
  temporaryDir = await mkdtemp(path.join(tmpdir(), 'kernal-browser-qa-'))

  nextProcess = spawn(
    process.execPath,
    [path.join(rootDir, 'node_modules', 'next', 'dist', 'bin', 'next'), 'start', '-H', HOST, '-p', String(sitePort)],
    { cwd: rootDir, env: { ...process.env, NODE_ENV: 'production' }, stdio: ['ignore', 'pipe', 'pipe'] },
  )
  recordProcessOutput(nextProcess, (value) => {
    if (value === undefined) return nextOutput
    nextOutput = value
  })
  await waitForUrl(baseUrl, 'Next.js server')

  chromeProcess = spawn(
    browserExecutable,
    [
      '--headless=new',
      `--remote-debugging-address=${HOST}`,
      `--remote-debugging-port=${debugPort}`,
      `--user-data-dir=${temporaryDir}`,
      '--disable-background-networking',
      '--disable-component-update',
      '--disable-default-apps',
      '--disable-dev-shm-usage',
      '--disable-extensions',
      '--disable-sync',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-default-browser-check',
      '--no-first-run',
      '--no-sandbox',
      'about:blank',
    ],
    { stdio: ['ignore', 'pipe', 'pipe'] },
  )
  recordProcessOutput(chromeProcess, (value) => {
    if (value === undefined) return chromeOutput
    chromeOutput = value
  })
  await waitForUrl(`http://${HOST}:${debugPort}/json/version`, 'Chromium debugging endpoint')

  browser = await chromium.connectOverCDP(`http://${HOST}:${debugPort}`)
  const context = browser.contexts()[0]
  const page = await context.newPage()

  await validateResponsiveLayouts(page, baseUrl)
  await validateMobileMenuAndFormFocus(page, baseUrl)
  await validateFaqInteraction(page, baseUrl)
  await page.close()
  await runLighthouseBudget(baseUrl, debugPort)

  if (errors.length > 0) {
    throw new Error(errors.join('\n'))
  }

  console.log('Browser quality gates: PASS')
}

try {
  await main()
} catch (error) {
  console.error(`Browser quality gates: FAIL\n${error.message}`)
  if (nextOutput) {
    console.error(`\nNext.js output:\n${nextOutput.trim()}`)
  }
  if (chromeOutput) {
    console.error(`\nChromium output:\n${chromeOutput.trim()}`)
  }
  process.exitCode = 1
} finally {
  await browser?.close().catch(() => {})
  await stopProcess(chromeProcess)
  await stopProcess(nextProcess)
  if (temporaryDir) {
    await rm(temporaryDir, { recursive: true, force: true })
  }
}

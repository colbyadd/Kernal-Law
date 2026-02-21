import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const errors = []
const warnings = []

const BASE_URL = 'https://kernallaw.com'
const NOINDEX_ROUTES = new Set(['/privacy', '/terms', '/success', '/locations'])
const OG_UNIQUENESS_ROUTES = ['/practice', '/attorney', '/contact', '/case-results', '/client-reviews', '/fees']
const MARKET_SERVICE_REGEX = /^\/([^/]+)\/(criminal-defense|personal-injury)$/

const DUPLICATE_TOKEN_STOP_WORDS = new Set([
  'the', 'and', 'for', 'with', 'that', 'from', 'this', 'are', 'you', 'your', 'our', 'can', 'not', 'all', 'but',
  'was', 'will', 'have', 'has', 'into', 'their', 'they', 'its', 'how', 'lawyer', 'attorney', 'kernal', 'associates',
  'criminal', 'defense', 'personal', 'injury', 'oklahoma',
])

function readFile(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), 'utf8')
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(rootDir, relativePath))
}

function parseLocUrls(sitemapXml) {
  return Array.from(sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1])
}

function routeToHtmlPath(route) {
  if (route === '/') {
    return '.next/server/app/index.html'
  }
  return `.next/server/app${route}.html`
}

function extractMeta(html, pattern) {
  const match = html.match(pattern)
  return match?.[1] ?? ''
}

function normalizeCanonical(value) {
  if (!value) {
    return ''
  }
  return value.endsWith('/') && value !== `${BASE_URL}/` ? value.slice(0, -1) : value
}

function htmlToWords(html) {
  const mainHtml = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html

  return mainHtml
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/[^a-z0-9 ]/gi, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

function htmlToDuplicationTokens(html) {
  return htmlToWords(html)
    .map((word) => word.toLowerCase())
    .filter((word) => word.length > 2 && !DUPLICATE_TOKEN_STOP_WORDS.has(word))
}

function validateSitemapIntegrity() {
  const sitemapPath = '.next/server/app/sitemap.xml.body'
  if (!fileExists(sitemapPath)) {
    errors.push('Rendered sitemap not found. Run `npm run build` before `npm run qa:rendered`.')
    return
  }

  const sitemapXml = readFile(sitemapPath)
  const locUrls = parseLocUrls(sitemapXml)

  if (locUrls.length === 0) {
    errors.push('Rendered sitemap has zero URLs.')
    return
  }

  const uniqueUrls = new Set(locUrls)
  if (uniqueUrls.size !== locUrls.length) {
    const duplicates = [...new Set(locUrls.filter((url, index, list) => list.indexOf(url) !== index))]
    errors.push(`Sitemap contains duplicate URLs: ${duplicates.join(', ')}`)
  }

  const routes = [...uniqueUrls].map((url) => new URL(url).pathname)

  for (const route of routes) {
    if (NOINDEX_ROUTES.has(route)) {
      errors.push(`Noindex route must not appear in sitemap: ${route}`)
    }

    const htmlPath = routeToHtmlPath(route)
    if (!fileExists(htmlPath)) {
      errors.push(`Missing rendered HTML for sitemap route ${route}: ${htmlPath}`)
      continue
    }

    const html = readFile(htmlPath)
    const canonical = normalizeCanonical(
      extractMeta(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i),
    )
    const expectedCanonical = route === '/' ? BASE_URL : `${BASE_URL}${route}`

    if (!canonical) {
      errors.push(`Missing canonical tag in rendered HTML for ${route}`)
    } else if (canonical !== expectedCanonical) {
      errors.push(`Canonical mismatch for ${route}. Expected ${expectedCanonical} but found ${canonical}.`)
    }

    const robots = extractMeta(html, /<meta[^>]+name="robots"[^>]+content="([^"]+)"/i)
    if (/noindex/i.test(robots)) {
      errors.push(`Sitemap route unexpectedly rendered as noindex: ${route} (${robots})`)
    }
  }

  validateOpenGraphUniqueness(routes)
  validateMarketSubpillarUniqueness(routes)
}

function validateOpenGraphUniqueness(sitemapRoutes) {
  const candidateRoutes = OG_UNIQUENESS_ROUTES.filter((route) => sitemapRoutes.includes(route))
  const ogTitleMap = new Map()
  const ogDescriptionMap = new Map()

  for (const route of candidateRoutes) {
    const htmlPath = routeToHtmlPath(route)
    if (!fileExists(htmlPath)) {
      continue
    }
    const html = readFile(htmlPath)
    const ogTitle = extractMeta(html, /<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i)
    const ogDescription = extractMeta(html, /<meta[^>]+property="og:description"[^>]+content="([^"]+)"/i)

    if (!ogTitle) {
      warnings.push(`Missing og:title on route expected to have unique OG metadata: ${route}`)
    } else {
      const routes = ogTitleMap.get(ogTitle) ?? []
      routes.push(route)
      ogTitleMap.set(ogTitle, routes)
    }

    if (!ogDescription) {
      warnings.push(`Missing og:description on route expected to have unique OG metadata: ${route}`)
    } else {
      const routes = ogDescriptionMap.get(ogDescription) ?? []
      routes.push(route)
      ogDescriptionMap.set(ogDescription, routes)
    }
  }

  for (const [value, routes] of ogTitleMap.entries()) {
    if (routes.length > 1) {
      errors.push(`Duplicate og:title across key routes (${routes.join(', ')}): ${value}`)
    }
  }

  for (const [value, routes] of ogDescriptionMap.entries()) {
    if (routes.length > 1) {
      errors.push(`Duplicate og:description across key routes (${routes.join(', ')}): ${value}`)
    }
  }
}

function validateMarketSubpillarUniqueness(sitemapRoutes) {
  const marketRoutes = sitemapRoutes.filter((route) => MARKET_SERVICE_REGEX.test(route))
  const serviceBuckets = {
    'criminal-defense': [],
    'personal-injury': [],
  }

  for (const route of marketRoutes) {
    const match = route.match(MARKET_SERVICE_REGEX)
    if (!match) {
      continue
    }

    const service = match[2]
    const htmlPath = routeToHtmlPath(route)
    if (!fileExists(htmlPath)) {
      continue
    }

    const html = readFile(htmlPath)
    const words = htmlToWords(html).length
    const duplicationTokens = htmlToDuplicationTokens(html)

    if (words < 1000) {
      errors.push(`Market service route is too thin (${words} words): ${route}`)
    }

    serviceBuckets[service].push({
      route,
      words,
      duplicationTokens,
    })
  }

  for (const [service, entries] of Object.entries(serviceBuckets)) {
    if (entries.length < 2) {
      continue
    }

    const commonTokens = new Set(entries[0].duplicationTokens)
    for (const entry of entries.slice(1)) {
      for (const token of [...commonTokens]) {
        if (!entry.duplicationTokens.includes(token)) {
          commonTokens.delete(token)
        }
      }
    }

    let uniqueRatioSum = 0
    let minUniqueRatio = Number.POSITIVE_INFINITY
    let minUniqueRoute = ''
    for (const entry of entries) {
      let uniqueTokenCount = 0
      for (const token of entry.duplicationTokens) {
        if (!commonTokens.has(token)) {
          uniqueTokenCount += 1
        }
      }

      const uniqueRatio =
        entry.duplicationTokens.length === 0 ? 0 : uniqueTokenCount / entry.duplicationTokens.length
      uniqueRatioSum += uniqueRatio
      if (uniqueRatio < minUniqueRatio) {
        minUniqueRatio = uniqueRatio
        minUniqueRoute = entry.route
      }
    }

    const averageUniqueRatio = uniqueRatioSum / entries.length

    if (averageUniqueRatio < 0.1) {
      errors.push(
        `Average uniqueness ratio is too low for ${service} market pages (${averageUniqueRatio.toFixed(3)}).`,
      )
    } else if (averageUniqueRatio < 0.12) {
      warnings.push(
        `Average uniqueness ratio is still tight for ${service} market pages (${averageUniqueRatio.toFixed(3)}).`,
      )
    }

    if (minUniqueRatio < 0.08) {
      errors.push(
        `At least one ${service} market page has very low uniqueness ratio (${minUniqueRatio.toFixed(3)}): ${minUniqueRoute}`,
      )
    }
  }
}

validateSitemapIntegrity()

if (warnings.length > 0) {
  console.log('Warnings:')
  for (const warning of warnings) {
    console.log(`- ${warning}`)
  }
}

if (errors.length > 0) {
  console.error('Rendered integrity QA failed:')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Rendered integrity QA passed.')

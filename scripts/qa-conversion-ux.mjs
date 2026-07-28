import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const errors = []

function readFile(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), 'utf8')
}

function validateContactFormFrictionControls() {
  const source = readFile('app/components/ContactForm.tsx')
  const requiredSnippets = [
    "name=\"case_type\"",
    "name=\"preferred_contact_method\"",
    "name=\"cta_variant\"",
    'netlify-honeypot="bot-field"',
    'name="form_started_at"',
    "params.set('js_enabled', 'true')",
    'name="consent_version"',
    'action="/api/contact"',
    'noValidate',
    "fetch('/api/contact'",
    'not create an attorney-client relationship.',
    'Do not send confidential details, medical records, or documents.',
    'id="form-error"',
    'target:block',
    'contact_form_submit',
    'case_type:',
    'preferred_contact_method:',
    "preferredContactMethod === 'email'",
    'normalizeContactCaseType',
    'inferContactCaseType',
    '<details',
    '<summary',
  ]

  for (const snippet of requiredSnippets) {
    if (!source.includes(snippet)) {
      errors.push(`Contact form missing conversion-control snippet: ${snippet}`)
    }
  }

  if (source.includes('name="urgency"')) {
    errors.push('Contact form should not require a client-facing urgency field.')
  }
}

function validateServerSideContactControls() {
  const source = readFile('netlify/functions/contact.ts')
  const requiredSnippets = [
    'validateContactSubmission',
    "path: '/api/contact'",
    'rateLimit:',
    'windowLimit: 6',
    "aggregateBy: ['ip', 'domain']",
    "new URL('/__forms.html', request.url)",
    "consentVersion !== CONTACT_CONSENT_VERSION",
    "contentType.includes('application/x-www-form-urlencoded')",
    'origin !== requestUrl.origin',
    "new URL('/contact#form-error', request.url)",
  ]

  for (const snippet of requiredSnippets) {
    if (!source.includes(snippet)) {
      errors.push(`Contact function missing server-side control: ${snippet}`)
    }
  }

  if (source.includes('URGENCY_LEVELS') || source.includes("value(params, 'urgency'")) {
    errors.push('Contact function should not require or forward the removed urgency field.')
  }

  const deployableFunctionFiles = fs
    .readdirSync(path.join(rootDir, 'netlify/functions'))
    .filter((file) => file.endsWith('.ts'))
  if (deployableFunctionFiles.length !== 1 || deployableFunctionFiles[0] !== 'contact.ts') {
    errors.push(`Only contact.ts should be deployable from netlify/functions; found: ${deployableFunctionFiles.join(', ')}`)
  }
}

function listFieldNames(source) {
  const formMarkup = source.match(/<form[\s\S]*?<\/form>/)?.[0] ?? source
  return new Set(Array.from(formMarkup.matchAll(/name=["']([^"']+)["']/g), (match) => match[1]))
}

function validateNetlifyFormBlueprint() {
  const componentSource = readFile('app/components/ContactForm.tsx')
  const blueprintSource = readFile('public/__forms.html')
  const componentFields = listFieldNames(componentSource)
  const blueprintFields = listFieldNames(blueprintSource)
  const functionManagedFields = new Set(['js_enabled'])

  for (const field of componentFields) {
    if (!blueprintFields.has(field)) {
      errors.push(`Netlify form blueprint is missing contact field: ${field}`)
    }
  }

  for (const field of blueprintFields) {
    if (!componentFields.has(field) && !functionManagedFields.has(field)) {
      errors.push(`Netlify form blueprint has an unmanaged extra field: ${field}`)
    }
  }

  if (!blueprintSource.includes('name="contact"') || !blueprintSource.includes('netlify-honeypot="bot-field"')) {
    errors.push('Netlify form blueprint must keep the canonical contact form and honeypot declaration.')
  }

  if (fs.existsSync(path.join(rootDir, 'public/form-setup.html'))) {
    errors.push('Duplicate public/form-setup.html form blueprint should remain removed.')
  }
}

function validateMobileContactFlowOrdering() {
  const source = readFile('app/contact/page.tsx')
  const requiredSnippets = [
    'grid grid-cols-1 lg:grid-cols-2',
    'id="contact-form"',
    'scroll-mt-28',
  ]

  for (const snippet of requiredSnippets) {
    if (!source.includes(snippet)) {
      errors.push(`Contact page missing mobile-ordering snippet: ${snippet}`)
    }
  }
}

function validateThankYouAttributionGuard() {
  const source = readFile('app/components/SuccessAttribution.tsx')
  const requiredSnippets = [
    'consumeConfirmedFormSubmission',
  ]

  for (const snippet of requiredSnippets) {
    if (!source.includes(snippet)) {
      errors.push(`Success attribution missing direct-visit guard: ${snippet}`)
    }
  }

  const analyticsSource = readFile('lib/analytics.ts')
  const layoutSource = readFile('app/layout.tsx')
  const queueSnippets = [
    [analyticsSource, 'window.dataLayer?.push(arguments)'],
    [layoutSource, 'id="ga4-queue"'],
    [layoutSource, 'strategy="beforeInteractive"'],
    [layoutSource, 'window.gtag = window.gtag || function(){dataLayer.push(arguments);};'],
  ]

  for (const [sourceText, snippet] of queueSnippets) {
    if (!sourceText.includes(snippet)) {
      errors.push(`Analytics queue missing confirmed-event protection: ${snippet}`)
    }
  }
}

function validateMobileQuickActions() {
  const fabSource = readFile('app/components/ContactFab.tsx')
  const requiredFabSnippets = [
    'mobile_text_fab',
    'mobile_call_fab',
    'mobile-contact-fab',
    'pageScrolled',
    'revealPoint',
    'PRIMARY_PHONE_SMS_HREF',
    'PRIMARY_PHONE_TEL_HREF',
    "'#contact-form, footer'",
    'safe-area-inset-bottom',
  ]

  for (const snippet of requiredFabSnippets) {
    if (!fabSource.includes(snippet)) {
      errors.push(`Contact FAB missing quick-action snippet: ${snippet}`)
    }
  }

  const mobileBarSource = readFile('app/components/MobileConversionBar.tsx')
  const requiredBarSnippets = ['Request Review', 'md:hidden', 'getContactHref', 'withCasePrefill']
  for (const snippet of requiredBarSnippets) {
    if (!mobileBarSource.includes(snippet)) {
      errors.push(`Mobile conversion bar missing snippet: ${snippet}`)
    }
  }

  const navSource = readFile('app/components/CinematicNav.tsx')
  const requiredNavSnippets = [
    "document.documentElement.dataset.mobileMenu",
    'aria-label="Open menu"',
    'aria-label="Close menu"',
    'role="dialog"',
    'aria-modal="true"',
    'PRIMARY_PHONE_SMS_HREF',
    'PRIMARY_PHONE_TEL_HREF',
    'nav_mobile_call',
    'nav_mobile_text',
  ]

  for (const snippet of requiredNavSnippets) {
    if (!navSource.includes(snippet)) {
      errors.push(`Mobile navigation missing state-aware conversion/accessibility snippet: ${snippet}`)
    }
  }
}

function validateMobileBarIntegration() {
  const files = [
    'app/criminal-defense/page.tsx',
    'app/personal-injury/page.tsx',
    'app/components/ServiceDetailPage.tsx',
    'app/components/LocationServicePage.tsx',
    'app/components/ResourceGuidePage.tsx',
  ]

  for (const file of files) {
    const source = readFile(file)
    if (!source.includes('MobileConversionBar')) {
      errors.push(`${file} missing MobileConversionBar integration.`)
    }
  }

  const homeSource = readFile('app/page.tsx')
  if (homeSource.includes('MobileConversionBar')) {
    errors.push('Homepage should not repeat its hero consultation action in a second mobile conversion bar.')
  }
}

validateContactFormFrictionControls()
validateServerSideContactControls()
validateNetlifyFormBlueprint()
validateMobileContactFlowOrdering()
validateMobileQuickActions()
validateMobileBarIntegration()
validateThankYouAttributionGuard()

if (errors.length > 0) {
  console.error('Conversion UX QA failed:')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Conversion UX QA passed.')

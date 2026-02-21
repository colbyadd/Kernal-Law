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
    "name=\"urgency\"",
    "name=\"preferred_contact_method\"",
    "name=\"cta_variant\"",
    'contact_form_submit_',
    'case_type:',
    'urgency:',
    'preferred_contact_method:',
  ]

  for (const snippet of requiredSnippets) {
    if (!source.includes(snippet)) {
      errors.push(`Contact form missing conversion-control snippet: ${snippet}`)
    }
  }
}

function validateMobileContactFlowOrdering() {
  const source = readFile('app/contact/page.tsx')
  const requiredSnippets = [
    'order-2 lg:order-1',
    'order-1 lg:order-2',
    'id="contact-form"',
    'scroll-mt-32',
  ]

  for (const snippet of requiredSnippets) {
    if (!source.includes(snippet)) {
      errors.push(`Contact page missing mobile-ordering snippet: ${snippet}`)
    }
  }
}

function validateMobileQuickActions() {
  const fabSource = readFile('app/components/ContactFab.tsx')
  const requiredFabSnippets = [
    'mobile_text_fab',
    'mobile_call_fab',
    'sms:+14053640601',
    'tel:4053640601',
  ]

  for (const snippet of requiredFabSnippets) {
    if (!fabSource.includes(snippet)) {
      errors.push(`Contact FAB missing quick-action snippet: ${snippet}`)
    }
  }

  const mobileBarSource = readFile('app/components/MobileConversionBar.tsx')
  const requiredBarSnippets = ['Call Now', 'Request Review', 'md:hidden']
  for (const snippet of requiredBarSnippets) {
    if (!mobileBarSource.includes(snippet)) {
      errors.push(`Mobile conversion bar missing snippet: ${snippet}`)
    }
  }
}

function validateMobileBarIntegration() {
  const files = [
    'app/page.tsx',
    'app/contact/page.tsx',
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
}

validateContactFormFrictionControls()
validateMobileContactFlowOrdering()
validateMobileQuickActions()
validateMobileBarIntegration()

if (errors.length > 0) {
  console.error('Conversion UX QA failed:')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Conversion UX QA passed.')

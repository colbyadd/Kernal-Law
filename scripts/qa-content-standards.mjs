import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const errors = []
const warnings = []

function readFile(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), 'utf8')
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(rootDir, relativePath))
}

function toLineNumber(source, index) {
  return source.slice(0, index).split('\n').length
}

function parseStringArrayFromConst(source, constName) {
  const arrayPattern = new RegExp(`export const ${constName} = \\[(.*?)\\] as const`, 's')
  const match = source.match(arrayPattern)

  if (!match) {
    errors.push(`Could not parse ${constName} in lib/content/city-subpillars.ts.`)
    return []
  }

  return Array.from(match[1].matchAll(/'([^']+)'/g), (value) => value[1])
}

function validateMarketTemplateContracts() {
  const citySubpillarsSource = readFile('lib/content/city-subpillars.ts')
  const marketSlugs = [
    ...parseStringArrayFromConst(citySubpillarsSource, 'CORE_CITY_SUBPILLAR_MARKETS'),
    ...parseStringArrayFromConst(citySubpillarsSource, 'REGIONAL_CITY_SUBPILLAR_MARKETS'),
    ...parseStringArrayFromConst(citySubpillarsSource, 'COUNTY_SUBPILLAR_MARKETS'),
  ]

  const uniqueMarketSlugs = [...new Set(marketSlugs)]
  if (uniqueMarketSlugs.length !== marketSlugs.length) {
    errors.push('Duplicate market slug detected across city/county subpillar arrays.')
  }

  const services = ['criminal-defense', 'personal-injury']

  for (const slug of uniqueMarketSlugs) {
    for (const service of services) {
      const pagePath = `app/${slug}/${service}/page.tsx`
      if (!fileExists(pagePath)) {
        errors.push(`Missing market page: ${pagePath}`)
        continue
      }

      const source = readFile(pagePath)
      if (!source.includes(`getCitySubpillarSpec('${slug}', '${service}')`)) {
        errors.push(`${pagePath} must reference getCitySubpillarSpec('${slug}', '${service}').`)
      }
      if (!source.includes('ServiceDetailPage')) {
        errors.push(`${pagePath} must render ServiceDetailPage.`)
      }
    }
  }

  if (uniqueMarketSlugs.length < 20) {
    warnings.push(`Expected broad city/county coverage. Detected ${uniqueMarketSlugs.length} markets.`)
  }

  const requiredMarketSpecSnippets = ['localContextTitle', 'localContextNarrative', 'localContextPoints', 'actionChecklist']
  for (const snippet of requiredMarketSpecSnippets) {
    if (!citySubpillarsSource.includes(snippet)) {
      errors.push(`Market subpillar spec should include richer-local-content snippet: ${snippet}`)
    }
  }
}

function validateServiceTemplateContract() {
  const source = readFile('app/components/ServiceDetailPage.tsx')
  const requiredSnippets = [
    'TrustProofSection',
    '#service-overview',
    '#service-process',
    '#service-faq',
    '#service-contact',
    'Critical Next Steps',
    'withRelatedFallbacks',
  ]

  for (const snippet of requiredSnippets) {
    if (!source.includes(snippet)) {
      errors.push(`ServiceDetailPage contract missing required snippet: ${snippet}`)
    }
  }
}

function collectSourceFiles(relativeDir) {
  const absoluteDir = path.join(rootDir, relativeDir)
  const files = []
  const stack = [absoluteDir]

  while (stack.length > 0) {
    const currentDir = stack.pop()
    if (!currentDir) {
      continue
    }

    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const fullPath = path.join(currentDir, entry.name)
      if (entry.isDirectory()) {
        stack.push(fullPath)
        continue
      }
      if (!entry.name.endsWith('.ts') && !entry.name.endsWith('.tsx')) {
        continue
      }
      files.push(path.relative(rootDir, fullPath))
    }
  }

  return files
}

function validateLegalSafetyCopy() {
  const bannedPatterns = [
    /\bwe guarantee\b/i,
    /\bguaranteed outcome\b/i,
    /\bcertain result\b/i,
    /\byou will win\b/i,
    /\bno-risk case\b/i,
  ]
  const sourceFiles = [...collectSourceFiles('app'), ...collectSourceFiles('lib/content')]

  for (const file of sourceFiles) {
    const source = readFile(file)
    for (const pattern of bannedPatterns) {
      const match = source.match(pattern)
      if (!match || typeof match.index !== 'number') {
        continue
      }
      const lineNumber = toLineNumber(source, match.index)
      errors.push(`Banned promise-style copy in ${file}:${lineNumber} (${pattern}).`)
    }
  }
}

function validateTopPageStructure() {
  const pageRequirements = [
    {
      file: 'app/page.tsx',
      snippets: ['QuickPathSection', 'TrustProofSection', 'CinematicHero'],
    },
    {
      file: 'app/criminal-defense/page.tsx',
      snippets: ['QuickPathSection', 'TrustProofSection', 'FaqSection'],
    },
    {
      file: 'app/personal-injury/page.tsx',
      snippets: ['QuickPathSection', 'TrustProofSection', 'FaqSection'],
    },
    {
      file: 'app/contact/page.tsx',
      snippets: ['ContactForm', 'Fastest Ways to Reach the Firm'],
    },
  ]

  for (const requirement of pageRequirements) {
    const source = readFile(requirement.file)
    for (const snippet of requirement.snippets) {
      if (!source.includes(snippet)) {
        errors.push(`${requirement.file} missing required UX/conversion block: ${snippet}`)
      }
    }
  }
}

validateMarketTemplateContracts()
validateServiceTemplateContract()
validateLegalSafetyCopy()
validateTopPageStructure()

if (warnings.length > 0) {
  console.log('Warnings:')
  for (const warning of warnings) {
    console.log(`- ${warning}`)
  }
}

if (errors.length > 0) {
  console.error('Content standards QA failed:')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Content standards QA passed.')

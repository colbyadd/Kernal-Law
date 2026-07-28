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

function toWordShingles(value, size = 2) {
  const words = value
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  const shingles = new Set()

  for (let index = 0; index <= words.length - size; index += 1) {
    shingles.add(words.slice(index, index + size).join(' '))
  }

  return shingles
}

function getJaccardSimilarity(left, right) {
  let intersectionSize = 0
  for (const value of left) {
    if (right.has(value)) {
      intersectionSize += 1
    }
  }

  const unionSize = left.size + right.size - intersectionSize
  return unionSize === 0 ? 0 : intersectionSize / unionSize
}

function validateMarketCopyQuality() {
  const citySource = readFile('lib/content/city-subpillars.ts')
  const overviewSource = readFile('lib/content/location-market-page-specs.ts')
  const marketSlugs = [
    ...parseStringArrayFromConst(citySource, 'CORE_CITY_SUBPILLAR_MARKETS'),
    ...parseStringArrayFromConst(citySource, 'REGIONAL_CITY_SUBPILLAR_MARKETS'),
    ...parseStringArrayFromConst(citySource, 'COUNTY_SUBPILLAR_MARKETS'),
  ]
  const contextNames = ['countyContext', 'criminalCourtContext', 'injuryContext', 'corridorContext']
  const contextValues = new Map(contextNames.map((name) => [name, []]))
  const contextPattern = /\n\s{4}(countyContext|criminalCourtContext|injuryContext|corridorContext): '([^']+)'/g

  for (const match of citySource.matchAll(contextPattern)) {
    contextValues.get(match[1])?.push(match[2])
  }

  for (const contextName of contextNames) {
    const values = contextValues.get(contextName) ?? []
    if (values.length !== marketSlugs.length) {
      errors.push(
        `${contextName} should provide one local fact for every market. Expected ${marketSlugs.length}; received ${values.length}.`,
      )
      continue
    }

    if (new Set(values).size !== values.length) {
      errors.push(`${contextName} contains duplicated market copy. Each market needs its own local fact.`)
    }
  }

  const profiles = marketSlugs.map((slug, index) => ({
    slug,
    text: contextNames.map((name) => contextValues.get(name)?.[index] ?? '').join(' '),
  }))
  let closestPair = { left: '', right: '', similarity: 0 }

  for (let leftIndex = 0; leftIndex < profiles.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < profiles.length; rightIndex += 1) {
      const similarity = getJaccardSimilarity(
        toWordShingles(profiles[leftIndex].text),
        toWordShingles(profiles[rightIndex].text),
      )
      if (similarity > closestPair.similarity) {
        closestPair = {
          left: profiles[leftIndex].slug,
          right: profiles[rightIndex].slug,
          similarity,
        }
      }
    }
  }

  if (closestPair.similarity > 0.42) {
    errors.push(
      `Market fact bundles are too similar: ${closestPair.left} and ${closestPair.right} share ${(closestPair.similarity * 100).toFixed(1)}% normalized bigram overlap.`,
    )
  }

  const artificialCopyPatterns = [
    /\bstrategy\b/i,
    /\bstrategic\b/i,
    /\bposture\b/i,
    /\bleverage\b/i,
    /\bpressure\b/i,
    /\bexecution\b/i,
    /\bframework\b/i,
    /\bframing\b/i,
    /\barchitecture\b/i,
  ]

  for (const [file, source] of [
    ['lib/content/city-subpillars.ts', citySource],
    ['lib/content/location-market-page-specs.ts', overviewSource],
  ]) {
    for (const pattern of artificialCopyPatterns) {
      const match = source.match(pattern)
      if (match && typeof match.index === 'number') {
        errors.push(`Artificial marketing phrase in ${file}:${toLineNumber(source, match.index)} (${pattern}).`)
      }
    }
  }

  const serviceLinksSource = overviewSource.slice(
    overviewSource.indexOf('function buildServiceLinks'),
    overviewSource.indexOf('function buildRelatedLocationLinks'),
  )
  if (/href:\s*['\"]\/resources\//.test(serviceLinksSource)) {
    errors.push('Location serviceLinks must not include resource guides that structured data will describe as services.')
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

function validateAudienceFacingCopy() {
  const bannedPatterns = [
    /rankings and conversions/i,
    /\bsearch intent\b/i,
    /conversion to counsel/i,
    /legal-safe framing/i,
    /ongoing qa governance/i,
    /content governance/i,
    /conversion architecture/i,
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
      errors.push(`Audience-facing SEO/production language in ${file}:${lineNumber} (${match[0]}).`)
    }
  }
}

function validateTopPageVoice() {
  const files = [
    'app/page.tsx',
    'app/components/CinematicHero.tsx',
    'app/components/TestimonialsSection.tsx',
    'app/criminal-defense/page.tsx',
    'app/personal-injury/page.tsx',
    'app/attorney/page.tsx',
    'app/contact/page.tsx',
  ]
  const staleMarketingPatterns = [
    /criminal defense when your future is on the line/i,
    /experienced representation for Oklahoma misdemeanors and felonies/i,
    /choose the option closest to your situation/i,
    /start with the right information/i,
    /schedule your free consultation/i,
    /what our clients say/i,
  ]

  for (const file of files) {
    const source = readFile(file)
    for (const pattern of staleMarketingPatterns) {
      const match = source.match(pattern)
      if (!match || typeof match.index !== 'number') {
        continue
      }
      errors.push(`Generic marketing copy returned in ${file}:${toLineNumber(source, match.index)} (${match[0]}).`)
    }
  }
}

function validateTopPageStructure() {
  const pageRequirements = [
    {
      file: 'app/page.tsx',
      snippets: [
        'CinematicHero',
        'home_path_criminal_overview',
        'home_path_injury_overview',
        'TrustProofSection',
      ],
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
      snippets: ['ContactForm', 'After You Reach Out'],
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
validateMarketCopyQuality()
validateServiceTemplateContract()
validateLegalSafetyCopy()
validateAudienceFacingCopy()
validateTopPageVoice()
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

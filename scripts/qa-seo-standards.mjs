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

function listResourceSlugs() {
  const resourcesDir = path.join(rootDir, 'app/resources')
  if (!fs.existsSync(resourcesDir)) {
    errors.push('Missing app/resources directory.')
    return []
  }

  return fs
    .readdirSync(resourcesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fileExists(path.join('app/resources', entry.name, 'page.tsx')))
    .map((entry) => entry.name)
}

function validateSitemapMarketCoverage() {
  const sitemapSource = readFile('app/sitemap.ts')

  const requiredSnippets = [
    'getAllMarketSlugs',
    'const dynamicMarketOverviewRoutes = getAllMarketSlugs()',
    'path: `/${market}`',
    '...dynamicMarketOverviewRoutes',
    'path: `/${market}/criminal-defense`',
    'path: `/${market}/personal-injury`',
  ]

  for (const snippet of requiredSnippets) {
    if (!sitemapSource.includes(snippet)) {
      errors.push(`Sitemap missing market coverage snippet: ${snippet}`)
    }
  }

  if (sitemapSource.includes("/practice/criminal-defense") || sitemapSource.includes("/practice/personal-injury")) {
    errors.push('Sitemap should not include legacy /practice service routes because they permanently redirect.')
  }

  const disallowedNoindexRoutes = ['/privacy', '/terms', '/success', '/locations']
  for (const route of disallowedNoindexRoutes) {
    if (sitemapSource.includes(`'${route}'`) || sitemapSource.includes(`"${route}"`)) {
      errors.push(`Sitemap should not include noindex route: ${route}`)
    }
  }
}

function validateResourceRoutesInSitemapAndSchema() {
  const sitemapSource = readFile('app/sitemap.ts')
  const schemaSource = readFile('lib/schema/builders.ts')
  const slugs = listResourceSlugs()

  if (slugs.length < 7) {
    warnings.push(`Expected expanded resources cluster. Found ${slugs.length} resource guides.`)
  }

  for (const slug of slugs) {
    const route = `/resources/${slug}`

    if (!sitemapSource.includes(`'${route}'`)) {
      errors.push(`Missing resource route in sitemap: ${route}`)
    }

    if (!schemaSource.includes(`'${route}':`)) {
      errors.push(`Missing resource PAGE_NAMES entry in schema builder: ${route}`)
    }

    if (!schemaSource.includes(`'${slug}':`)) {
      errors.push(`Missing resource breadcrumb label entry for slug: ${slug}`)
    }
  }
}

function validateResourceMetadataCanonicalAndOg() {
  const slugs = listResourceSlugs()

  for (const slug of slugs) {
    const route = `/resources/${slug}`
    const filePath = path.join('app/resources', slug, 'page.tsx')
    const source = readFile(filePath)

    if (!source.includes(`alternates: { canonical: '${route}' }`)) {
      errors.push(`${filePath} missing canonical metadata for ${route}.`)
    }

    if (!source.includes(`url: 'https://kernallaw.com${route}'`)) {
      errors.push(`${filePath} missing Open Graph URL for ${route}.`)
    }
  }
}

function validateMoneyPageResourceLinks() {
  const moneyPages = [
    'app/criminal-defense/page.tsx',
    'app/personal-injury/page.tsx',
    'app/criminal-defense/dui-dwi/page.tsx',
    'app/personal-injury/truck-accidents/page.tsx',
    'app/personal-injury/uninsured-motorist/page.tsx',
  ]

  for (const page of moneyPages) {
    const source = readFile(page)
    if (!source.includes('/resources/')) {
      errors.push(`${page} should include at least one internal resource guide link.`)
    }
  }
}

function validateDynamicMarketSchemaNaming() {
  const schemaSource = readFile('lib/schema/builders.ts')
  const requiredSnippets = [
    'const marketOverviewMatch = pathname.match(/^\\/([^/]+)$/)',
    'return `${marketName} Criminal Defense and Personal Injury Attorney`',
  ]

  for (const snippet of requiredSnippets) {
    if (!schemaSource.includes(snippet)) {
      errors.push(`Schema naming missing dynamic market overview support: ${snippet}`)
    }
  }
}

function getMetadataTitle(source) {
  const singleQuoted = source.match(/title:\s*'([^']+)'/)
  if (singleQuoted) {
    return singleQuoted[1]
  }

  const doubleQuoted = source.match(/title:\s*"([^"]+)"/)
  if (doubleQuoted) {
    return doubleQuoted[1]
  }

  return null
}

function validateIntentDisambiguation() {
  const intentPairs = [
    {
      serviceFile: 'app/criminal-defense/dui-dwi/page.tsx',
      serviceTokens: ['DUI', 'Defense'],
      resourceFile: 'app/resources/oklahoma-dui-process/page.tsx',
      resourceTokens: ['DUI', 'Guide', 'Process'],
    },
    {
      serviceFile: 'app/personal-injury/car-accidents/page.tsx',
      serviceTokens: ['Car', 'Accident', 'Lawyer'],
      resourceFile: 'app/resources/what-to-do-after-car-accident-oklahoma/page.tsx',
      resourceTokens: ['What to Do', 'Car Accident'],
    },
    {
      serviceFile: 'app/personal-injury/uninsured-motorist/page.tsx',
      serviceTokens: ['Uninsured', 'Motorist'],
      resourceFile: 'app/resources/oklahoma-uninsured-motorist-claim-guide/page.tsx',
      resourceTokens: ['Uninsured', 'Motorist', 'Guide'],
    },
    {
      serviceFile: 'app/personal-injury/truck-accidents/page.tsx',
      serviceTokens: ['Truck', 'Accident'],
      resourceFile: 'app/resources/oklahoma-truck-accident-evidence-guide/page.tsx',
      resourceTokens: ['Truck', 'Evidence', 'Guide'],
    },
  ]

  for (const pair of intentPairs) {
    const serviceSource = readFile(pair.serviceFile)
    const resourceSource = readFile(pair.resourceFile)

    const serviceTitle = getMetadataTitle(serviceSource)
    const resourceTitle = getMetadataTitle(resourceSource)

    if (!serviceTitle) {
      errors.push(`Missing parseable metadata title in ${pair.serviceFile}`)
      continue
    }
    if (!resourceTitle) {
      errors.push(`Missing parseable metadata title in ${pair.resourceFile}`)
      continue
    }

    if (serviceTitle.trim().toLowerCase() === resourceTitle.trim().toLowerCase()) {
      errors.push(`Intent collision: ${pair.serviceFile} and ${pair.resourceFile} share the same title.`)
    }

    for (const token of pair.serviceTokens) {
      if (!serviceTitle.includes(token)) {
        errors.push(`${pair.serviceFile} title should include "${token}" for intent clarity.`)
      }
    }

    for (const token of pair.resourceTokens) {
      if (!resourceTitle.includes(token)) {
        errors.push(`${pair.resourceFile} title should include "${token}" for intent clarity.`)
      }
    }
  }
}

function validateMarketTemplateResourceLinks() {
  const citySubpillarsSource = readFile('lib/content/city-subpillars.ts')
  const marketOverviewSource = readFile('lib/content/location-market-page-specs.ts')

  const requiredCriminalResourceLinks = [
    '/resources/what-to-do-after-arrest-oklahoma',
    '/resources/oklahoma-felony-case-timeline',
  ]

  const requiredInjuryResourceLinks = [
    '/resources/what-to-do-after-car-accident-oklahoma',
    '/resources/oklahoma-uninsured-motorist-claim-guide',
  ]

  for (const link of requiredCriminalResourceLinks) {
    if (!citySubpillarsSource.includes(link)) {
      errors.push(`Missing criminal market-template resource link: ${link}`)
    }
  }

  for (const link of requiredInjuryResourceLinks) {
    if (!citySubpillarsSource.includes(link)) {
      errors.push(`Missing injury market-template resource link: ${link}`)
    }
  }

  if (!marketOverviewSource.includes('/resources/')) {
    errors.push('Market overview template should include at least one /resources/ link.')
  }
}

function hasPngSignature(relativePath) {
  if (!fileExists(relativePath)) {
    return false
  }

  const signature = fs.readFileSync(path.join(rootDir, relativePath)).subarray(0, 8)
  return signature.equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
}

function validateEnvVerificationControls() {
  const envExample = readFile('.env.example')
  const requiredSnippets = [
    'NEXT_PUBLIC_SITE_URL=https://kernallaw.com',
    'NEXT_PUBLIC_GA_MEASUREMENT_ID=',
    'NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=',
    'NEXT_PUBLIC_BING_SITE_VERIFICATION=',
  ]

  for (const snippet of requiredSnippets) {
    if (!envExample.includes(snippet)) {
      errors.push(`.env.example missing public verification/analytics control: ${snippet}`)
    }
  }
}

function validateAssetHygiene() {
  const manifestSource = readFile('app/manifest.ts')
  const requiredManifestSnippets = [
    "src: '/icon-192.png'",
    "sizes: '192x192'",
    "src: '/icon-512.png'",
    "sizes: '512x512'",
  ]

  for (const snippet of requiredManifestSnippets) {
    if (!manifestSource.includes(snippet)) {
      errors.push(`Manifest missing icon hygiene snippet: ${snippet}`)
    }
  }

  const pngIconFiles = ['app/icon.png', 'app/apple-icon.png', 'public/icon-192.png', 'public/icon-512.png']
  for (const filePath of pngIconFiles) {
    if (!hasPngSignature(filePath)) {
      errors.push(`${filePath} must be a real PNG file, not a mislabeled image.`)
    }
  }

  const obsoleteAssets = [
    'public/icon.png',
    'public/images/hero-abstract.png',
    'public/images/hero-criminal.png',
    'public/images/hero-injury.png',
  ]

  for (const filePath of obsoleteAssets) {
    if (fileExists(filePath)) {
      errors.push(`Obsolete heavyweight asset should stay removed: ${filePath}`)
    }
  }
}

validateSitemapMarketCoverage()
validateResourceRoutesInSitemapAndSchema()
validateResourceMetadataCanonicalAndOg()
validateMoneyPageResourceLinks()
validateDynamicMarketSchemaNaming()
validateIntentDisambiguation()
validateMarketTemplateResourceLinks()
validateEnvVerificationControls()
validateAssetHygiene()

if (warnings.length > 0) {
  console.log('Warnings:')
  for (const warning of warnings) {
    console.log(`- ${warning}`)
  }
}

if (errors.length > 0) {
  console.error('SEO standards QA failed:')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('SEO standards QA passed.')

import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const globalLayoutSource = fs.existsSync(path.join(rootDir, 'app/layout.tsx'))
  ? fs.readFileSync(path.join(rootDir, 'app/layout.tsx'), 'utf8')
  : ''

const top20Routes = [
  '/',
  '/criminal-defense',
  '/criminal-defense/dui-dwi',
  '/criminal-defense/drug-charges',
  '/criminal-defense/warrants',
  '/criminal-defense/domestic-violence',
  '/personal-injury',
  '/personal-injury/car-accidents',
  '/personal-injury/truck-accidents',
  '/personal-injury/wrongful-death',
  '/personal-injury/catastrophic-injury',
  '/personal-injury/uninsured-motorist',
  '/oklahoma-city',
  '/oklahoma-city/criminal-defense',
  '/oklahoma-city/personal-injury',
  '/norman',
  '/contact',
  '/case-results',
  '/client-reviews',
  '/resources',
]

function routeToFile(route) {
  if (route === '/') {
    return 'app/page.tsx'
  }
  return `app${route}/page.tsx`
}

function readFile(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), 'utf8')
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(rootDir, relativePath))
}

function countWords(source) {
  return source
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^a-z0-9 ]/gi, ' ')
    .split(/\s+/)
    .filter(Boolean).length
}

function inferTemplate(source) {
  if (source.includes('ResourceGuidePage')) {
    return 'resource'
  }
  if (source.includes('LocationServicePage') || source.includes('getLocationMarketPageSpec')) {
    return 'location'
  }
  if (source.includes('ServiceDetailPage') || source.includes('getCitySubpillarSpec')) {
    return 'service'
  }
  return 'custom'
}

function loadTemplateSource(template) {
  if (template === 'service' && fileExists('app/components/ServiceDetailPage.tsx')) {
    return readFile('app/components/ServiceDetailPage.tsx')
  }
  if (template === 'location' && fileExists('app/components/LocationServicePage.tsx')) {
    return readFile('app/components/LocationServicePage.tsx')
  }
  if (template === 'resource' && fileExists('app/components/ResourceGuidePage.tsx')) {
    return readFile('app/components/ResourceGuidePage.tsx')
  }
  return ''
}

function buildEffectiveSource(routeSource) {
  const template = inferTemplate(routeSource)
  const templateSource = loadTemplateSource(template)
  return {
    template,
    source: [routeSource, templateSource, globalLayoutSource].filter(Boolean).join('\n'),
  }
}

function scoreContent(source, template) {
  const words = countWords(source)
  let score = template === 'custom' ? 5 : template === 'location' ? 8.2 : 8.4

  if (template === 'custom') {
    score += Math.min(words / 700, 2.6)
  } else {
    score += Math.min(words / 2500, 0.5)
  }

  const contentSignals = [
    'FaqSection',
    'LinkGridSection',
    'TrustProofSection',
    'relatedLinks',
    'processSteps',
    'takeaways',
  ]

  for (const signal of contentSignals) {
    if (source.includes(signal)) {
      score += 0.4
    }
  }

  return Math.min(10, Number(score.toFixed(1)))
}

function scoreUx(source, template) {
  let score = template === 'custom' ? 5 : template === 'location' ? 8.2 : 8.4

  const uxSignals = [
    'PageHero',
    'CinematicHero',
    'QuickPathSection',
    'MobileConversionBar',
    'ContactFab',
    'scroll-mt',
    'Call (405)',
    'data-cta',
  ]

  for (const signal of uxSignals) {
    if (source.includes(signal)) {
      score += 0.6
    }
  }

  return Math.min(10, Number(score.toFixed(1)))
}

function formatDate(date = new Date()) {
  return date.toISOString().slice(0, 10)
}

const rows = []
let totalContent = 0
let totalUx = 0
let measured = 0

for (const route of top20Routes) {
  const file = routeToFile(route)

  if (!fileExists(file)) {
    rows.push({ route, file, content: 'n/a', ux: 'n/a', notes: 'Missing source file' })
    continue
  }

  const source = readFile(file)
  const { template, source: effectiveSource } = buildEffectiveSource(source)
  const content = scoreContent(effectiveSource, template)
  const ux = scoreUx(effectiveSource, template)

  totalContent += content
  totalUx += ux
  measured += 1

  const notes = []
  if (template === 'custom') {
    if (!source.includes('FaqSection')) notes.push('No FAQ block')
    if (!source.includes('TrustProofSection')) notes.push('No trust block')
    if (!source.includes('MobileConversionBar') && !source.includes('ContactFab')) notes.push('No mobile conversion control')
  } else {
    notes.push(`Template: ${template}`)
  }

  rows.push({
    route,
    file,
    content: content.toFixed(1),
    ux: ux.toFixed(1),
    notes: notes.length ? notes.join('; ') : 'Pass',
  })
}

const avgContent = measured ? (totalContent / measured).toFixed(1) : '0.0'
const avgUx = measured ? (totalUx / measured).toFixed(1) : '0.0'

let markdown = ''
markdown += '# Top-20 Audit (Automated Heuristic)\n\n'
markdown += `Updated: ${formatDate()}\n\n`
markdown += 'Method: template-aware heuristic using route + shared component signals for content-depth and UX patterns.\n\n'
markdown += `Average Content Score: **${avgContent}**\n\n`
markdown += `Average UX Score: **${avgUx}**\n\n`
markdown += '| Route | File | Content | UX | Notes |\n'
markdown += '|---|---|---:|---:|---|\n'
for (const row of rows) {
  markdown += `| \`${row.route}\` | \`${row.file}\` | ${row.content} | ${row.ux} | ${row.notes} |\n`
}
markdown += '\n'
markdown += '## Follow-Up\n\n'
markdown += '1. Improve routes scoring below 8.5 in either dimension.\n'
markdown += '2. Re-run this audit weekly after major content or UX changes.\n'
markdown += '3. Pair this heuristic with human editorial review before final publication decisions.\n'

const outPath = path.join(rootDir, 'docs/sprint-11/top-20-audit.md')
fs.writeFileSync(outPath, markdown)

console.log(`Wrote ${outPath}`)
console.log(`Average Content: ${avgContent}`)
console.log(`Average UX: ${avgUx}`)

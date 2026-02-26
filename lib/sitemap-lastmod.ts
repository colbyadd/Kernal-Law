import fs from 'node:fs'
import path from 'node:path'

function routeToAppPageFile(routePath: string): string {
  return routePath === '' ? 'app/page.tsx' : `app${routePath}/page.tsx`
}

function getRouteSourceFiles(routePath: string): string[] {
  const normalizedRoute = routePath === '' ? '/' : routePath
  const sources = new Set<string>([routeToAppPageFile(routePath)])

  if (/^\/[^/]+$/.test(normalizedRoute)) {
    sources.add('app/[market]/page.tsx')
    sources.add('lib/content/location-market-page-specs.ts')
  }

  if (/^\/[^/]+\/(criminal-defense|personal-injury)$/.test(normalizedRoute)) {
    sources.add('lib/content/city-subpillars.ts')
    sources.add('lib/content/subpillar-standards.ts')
  }

  return [...sources]
}

function getMtime(filePath: string): Date | null {
  try {
    return fs.statSync(path.join(process.cwd(), filePath)).mtime
  } catch {
    return null
  }
}

export function resolveSitemapLastModified(routePath: string, fallbackDate: Date): Date {
  const sourceDates = getRouteSourceFiles(routePath)
    .map(getMtime)
    .filter((value): value is Date => value !== null)

  return sourceDates.reduce((latestDate, currentDate) => {
    return currentDate > latestDate ? currentDate : latestDate
  }, fallbackDate)
}

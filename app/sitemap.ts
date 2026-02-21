import { MetadataRoute } from 'next'
import { BASE_URL, DEFAULT_LAST_MODIFIED } from '@/lib/constants'
import { ALL_STANDARD_SUBPILLAR_MARKETS, getAllMarketSlugs } from '@/lib/content/city-subpillars'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = BASE_URL
    const defaultLastModified = new Date(DEFAULT_LAST_MODIFIED)
    const dedicatedMarketPages = new Set([
        'oklahoma-city',
        'norman',
        'moore',
        'edmond',
        'midwest-city',
        'del-city',
        'yukon',
        'mustang',
    ])
    const dedicatedHighPriorityServiceMarkets = new Set(['oklahoma-city', 'norman'])
    const marketSubpillarRoutes = ALL_STANDARD_SUBPILLAR_MARKETS
        .filter((market) => !dedicatedHighPriorityServiceMarkets.has(market))
        .flatMap((market) => {
            const isCounty = market.endsWith('-county')
            const priority = isCounty ? 0.76 : 0.78

            return [
                { path: `/${market}/criminal-defense`, priority, changeFrequency: 'monthly' as const, lastModified: '2026-02-18' },
                { path: `/${market}/personal-injury`, priority, changeFrequency: 'monthly' as const, lastModified: '2026-02-18' },
            ]
        })
    const dynamicMarketOverviewRoutes = getAllMarketSlugs()
        .filter((market) => !dedicatedMarketPages.has(market))
        .map((market) => ({
            path: `/${market}`,
            priority: market.endsWith('-county') ? 0.74 : 0.76,
            changeFrequency: 'monthly' as const,
            lastModified: '2026-02-18',
        }))

    // Route configuration with priority and change frequency tuning
    const routes: Array<{
        path: string
        priority: number
        changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
        lastModified?: string
    }> = [
            // Homepage - highest priority
            { path: '', priority: 1.0, changeFrequency: 'weekly', lastModified: '2026-02-17' },

            // Transitional practice hub (de-emphasized vs primary pillar pages)
            { path: '/practice', priority: 0.55, changeFrequency: 'monthly', lastModified: '2026-02-18' },
            { path: '/criminal-defense', priority: 0.95, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/personal-injury', priority: 0.95, changeFrequency: 'monthly', lastModified: '2026-02-17' },

            // Practice area pages - high priority (money pages)
            { path: '/criminal-defense/dui-dwi', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/criminal-defense/drug-charges', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/criminal-defense/domestic-violence', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/criminal-defense/assault-battery', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/criminal-defense/sex-crimes', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/criminal-defense/theft-fraud', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/criminal-defense/expungement', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/criminal-defense/probation-violation', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/criminal-defense/warrants', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/personal-injury/car-accidents', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/personal-injury/truck-accidents', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/personal-injury/oil-field-injuries', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/personal-injury/wrongful-death', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/personal-injury/motorcycle-accidents', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/personal-injury/catastrophic-injury', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/personal-injury/slip-and-fall', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/personal-injury/uninsured-motorist', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-02-17' },

            // Resource pages
            { path: '/resources', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-18' },
            { path: '/resources/what-to-do-after-arrest-oklahoma', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-18' },
            { path: '/resources/oklahoma-dui-process', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-18' },
            { path: '/resources/what-to-do-after-car-accident-oklahoma', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-18' },
            { path: '/resources/oklahoma-felony-case-timeline', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-18' },
            { path: '/resources/oklahoma-bond-and-release-conditions', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-18' },
            { path: '/resources/oklahoma-uninsured-motorist-claim-guide', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-18' },
            { path: '/resources/oklahoma-truck-accident-evidence-guide', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-18' },

            // Location pages - high priority (geo targeting)
            { path: '/oklahoma-city', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-02-08' },
            { path: '/oklahoma-city/criminal-defense', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/oklahoma-city/personal-injury', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/norman', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-08' },
            { path: '/norman/criminal-defense', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/norman/personal-injury', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/moore', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/edmond', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/midwest-city', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/del-city', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/yukon', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/mustang', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            ...dynamicMarketOverviewRoutes,
            ...marketSubpillarRoutes,

            // Attorney bio - high priority (trust signal)
            { path: '/attorney', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-08' },

            // Contact - high priority (conversion page)
            { path: '/contact', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-02-08' },
            { path: '/case-results', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/client-reviews', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-17' },
            { path: '/fees', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-02-17' },

            // Policy pages are intentionally excluded from sitemap because they are noindex,follow.
        ]

    // Deduplicate by path so mixed static/dynamic route sources cannot emit duplicates.
    const dedupedRoutes = Array.from(
        routes.reduce((acc, route) => {
            if (!acc.has(route.path)) {
                acc.set(route.path, route)
            }
            return acc
        }, new Map<string, (typeof routes)[number]>()).values(),
    )

    return dedupedRoutes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: route.lastModified ? new Date(route.lastModified) : defaultLastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}

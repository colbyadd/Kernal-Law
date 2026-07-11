import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/constants'
import { ALL_STANDARD_SUBPILLAR_MARKETS, getAllMarketSlugs } from '@/lib/content/city-subpillars'
import { resolveSitemapLastModified } from '@/lib/sitemap-lastmod'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = BASE_URL
    const currentEditorialUpdate = '2026-07-11'
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
                { path: `/${market}/criminal-defense`, priority, changeFrequency: 'monthly' as const, lastModified: currentEditorialUpdate },
                { path: `/${market}/personal-injury`, priority, changeFrequency: 'monthly' as const, lastModified: currentEditorialUpdate },
            ]
        })
    const dynamicMarketOverviewRoutes = getAllMarketSlugs()
        .filter((market) => !dedicatedMarketPages.has(market))
        .map((market) => ({
            path: `/${market}`,
            priority: market.endsWith('-county') ? 0.74 : 0.76,
            changeFrequency: 'monthly' as const,
            lastModified: currentEditorialUpdate,
        }))

    // Route configuration with priority and change frequency tuning
    const routes: Array<{
        path: string
        priority: number
        changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
        lastModified: string
    }> = [
            // Homepage - highest priority
            { path: '', priority: 1.0, changeFrequency: 'weekly', lastModified: currentEditorialUpdate },

            // Transitional practice hub (de-emphasized vs primary pillar pages)
            { path: '/practice', priority: 0.55, changeFrequency: 'monthly', lastModified: '2026-02-18' },
            { path: '/criminal-defense', priority: 0.95, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/personal-injury', priority: 0.95, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },

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
            { path: '/resources', priority: 0.75, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/resources/what-to-do-after-arrest-oklahoma', priority: 0.75, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/resources/oklahoma-dui-process', priority: 0.75, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/resources/what-to-do-after-car-accident-oklahoma', priority: 0.75, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/resources/oklahoma-felony-case-timeline', priority: 0.75, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/resources/oklahoma-bond-and-release-conditions', priority: 0.75, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/resources/oklahoma-uninsured-motorist-claim-guide', priority: 0.75, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/resources/oklahoma-truck-accident-evidence-guide', priority: 0.75, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },

            // Location pages - high priority (geo targeting)
            { path: '/locations', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/oklahoma-city', priority: 0.9, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/oklahoma-city/criminal-defense', priority: 0.85, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/oklahoma-city/personal-injury', priority: 0.85, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/norman', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/norman/criminal-defense', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/norman/personal-injury', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/moore', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/edmond', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/midwest-city', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/del-city', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/yukon', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/mustang', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            ...dynamicMarketOverviewRoutes,
            ...marketSubpillarRoutes,

            // Attorney bio - high priority (trust signal)
            { path: '/attorney', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },

            // Contact - high priority (conversion page)
            { path: '/contact', priority: 0.8, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/case-results', priority: 0.75, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
            { path: '/client-reviews', priority: 0.75, changeFrequency: 'monthly', lastModified: currentEditorialUpdate },
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
        lastModified: resolveSitemapLastModified(route.lastModified),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}

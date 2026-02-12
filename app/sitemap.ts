import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = BASE_URL

    // Route configuration with priority and change frequency tuning
    const routes: Array<{
        path: string
        priority: number
        changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    }> = [
            // Homepage - highest priority
            { path: '', priority: 1.0, changeFrequency: 'weekly' },

            // Practice area hub - very high priority
            { path: '/practice', priority: 0.9, changeFrequency: 'monthly' },

            // Practice area pages - high priority (money pages)
            { path: '/practice/criminal-defense', priority: 0.9, changeFrequency: 'monthly' },
            { path: '/practice/personal-injury', priority: 0.9, changeFrequency: 'monthly' },

            // Location pages - high priority (geo targeting)
            { path: '/oklahoma-city', priority: 0.9, changeFrequency: 'monthly' },
            { path: '/norman', priority: 0.8, changeFrequency: 'monthly' },

            // Attorney bio - high priority (trust signal)
            { path: '/attorney', priority: 0.8, changeFrequency: 'monthly' },

            // Contact - high priority (conversion page)
            { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },

            // Legal pages - lower priority
            { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
            { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
        ]

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}

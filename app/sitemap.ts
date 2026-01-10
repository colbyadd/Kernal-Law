import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kernallaw.com'

    // Core routes for a simple, high-impact site
    const routes = [
        '',
        '/attorney',
        '/practice',
        '/practice/criminal-defense',
        '/practice/personal-injury',
        '/contact',
        '/privacy',
        '/terms',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))
}

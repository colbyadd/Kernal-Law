'use client'

import { usePathname } from 'next/navigation'

export function BreadcrumbSchema() {
    const pathname = usePathname()

    // Don't render on homepage
    if (pathname === '/') return null

    const baseUrl = 'https://kernallaw.com'

    // Split path into segments and filter empty strings
    const pathSegments = pathname.split('/').filter(segment => segment)

    // Generate breadcrumb items
    const breadcrumbItems = pathSegments.map((segment, index) => {
        const url = `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`

        // Format label: "criminal-defense" -> "Criminal Defense"
        const name = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

        return {
            "@type": "ListItem",
            "position": index + 2, // 1 is Homepage
            "name": name,
            "item": url
        }
    })

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            ...breadcrumbItems
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

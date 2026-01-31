'use client'

import { usePathname } from 'next/navigation'

export function JsonLd() {
    const pathname = usePathname()
    const baseUrl = 'https://kernallaw.com'
    const currentUrl = `${baseUrl}${pathname}`

    // Primary Organization/Attorney Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": ["Attorney", "LegalService"],
        "@id": `${baseUrl}/#organization`,
        "name": "Kernal & Associates",
        "legalName": "Kernal & Associates",
        "description": "Oklahoma criminal defense and personal injury law firm with 25+ years of trial experience. Aggressive representation for felonies, DUI, drug charges, car accidents, and oil field injuries.",
        "image": `${baseUrl}/images/todd-kernal-lhl.jpg`,
        "url": baseUrl,
        "telephone": "+1-405-364-0601",
        "email": "todd@kernallaw.com",
        "foundingDate": "1999",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1332 SW 89th Street",
            "addressLocality": "Oklahoma City",
            "addressRegion": "OK",
            "postalCode": "73159",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 35.37153,
            "longitude": -97.62229
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Oklahoma City",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Oklahoma"
                }
            },
            {
                "@type": "City",
                "name": "Norman",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Oklahoma"
                }
            },
            {
                "@type": "City",
                "name": "Edmond",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Oklahoma"
                }
            },
            {
                "@type": "State",
                "name": "Oklahoma"
            }
        ],
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Cash, Check, Credit Card",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:30",
                "closes": "17:30"
            }
        ],
        "founder": {
            "@type": "Person",
            "@id": `${baseUrl}/#founder`,
            "name": "Todd Kernal",
            "jobTitle": "Attorney at Law",
            "description": "25+ year veteran criminal defense and personal injury attorney in Oklahoma City",
            "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Oklahoma City University School of Law"
            }
        },
        "knowsAbout": [
            "Criminal Defense",
            "Personal Injury",
            "DUI Defense",
            "Drug Charges",
            "Violent Crimes",
            "Oil Field Injuries",
            "Car Accidents",
            "Wrongful Death",
            "Felony Defense",
            "Expungements"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Legal Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "@id": `${baseUrl}/practice/criminal-defense/#service`,
                        "name": "Criminal Defense",
                        "description": "Aggressive defense against felonies, DUI, drug charges, violent crimes, and property offenses in Oklahoma. Trial-ready representation.",
                        "provider": { "@id": `${baseUrl}/#organization` },
                        "areaServed": { "@type": "State", "name": "Oklahoma" },
                        "serviceType": "Criminal Defense Law"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "@id": `${baseUrl}/practice/personal-injury/#service`,
                        "name": "Personal Injury",
                        "description": "Maximum compensation for car accidents, oil field injuries, wrongful death, and catastrophic injury claims. No fee unless we win.",
                        "provider": { "@id": `${baseUrl}/#organization` },
                        "areaServed": { "@type": "State", "name": "Oklahoma" },
                        "serviceType": "Personal Injury Law"
                    }
                }
            ]
        },
        "sameAs": [
            "https://www.facebook.com/kernallaw",
            "https://maps.app.goo.gl/2mfQkJVZkpGrdVXP6"
        ]
    }

    // WebSite Schema with SearchAction for Sitelinks Searchbox
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "name": "Kernal & Associates",
        "alternateName": "Kernal Law",
        "url": baseUrl,
        "description": "Oklahoma criminal defense and personal injury law firm",
        "publisher": { "@id": `${baseUrl}/#organization` },
        "inLanguage": "en-US",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}/?s={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    }

    // WebPage Schema (dynamic per page)
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${currentUrl}/#webpage`,
        "url": currentUrl,
        "name": getPageName(pathname),
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "about": { "@id": `${baseUrl}/#organization` },
        "inLanguage": "en-US"
    }

    // BreadcrumbList Schema
    const breadcrumbSchema = generateBreadcrumbs(pathname, baseUrl)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            )}
        </>
    )
}

function getPageName(pathname: string): string {
    const pageNames: Record<string, string> = {
        '/': 'Kernal & Associates | Oklahoma Criminal Defense & Personal Injury',
        '/attorney': 'About Todd Kernal | Attorney Profile',
        '/practice': 'Practice Areas | Criminal Defense & Personal Injury',
        '/practice/criminal-defense': 'Criminal Defense | Kernal & Associates',
        '/practice/personal-injury': 'Personal Injury | Kernal & Associates',
        '/contact': 'Contact Us | Free Consultation',
        '/privacy': 'Privacy Policy',
        '/terms': 'Terms of Service'
    }
    return pageNames[pathname] || 'Kernal & Associates'
}

function generateBreadcrumbs(pathname: string, baseUrl: string) {
    if (pathname === '/') return null

    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbNames: Record<string, string> = {
        'attorney': 'Attorney',
        'practice': 'Practice Areas',
        'criminal-defense': 'Criminal Defense',
        'personal-injury': 'Personal Injury',
        'contact': 'Contact',
        'privacy': 'Privacy Policy',
        'terms': 'Terms of Service'
    }

    const items = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
        }
    ]

    let currentPath = ''
    segments.forEach((segment, index) => {
        currentPath += `/${segment}`
        items.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": breadcrumbNames[segment] || segment,
            "item": `${baseUrl}${currentPath}`
        })
    })

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items
    }
}

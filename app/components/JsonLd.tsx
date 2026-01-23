export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["Attorney", "LegalService"],
        "name": "Kernal & Associates",
        "image": "https://kernallaw.com/images/todd-kernal-lhl.jpg",
        "url": "https://kernallaw.com",
        "telephone": "+1-405-364-0601",
        "email": "todd@kernallaw.com",
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
                "@type": "State",
                "name": "Oklahoma"
            }
        ],
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:30",
            "closes": "17:30"
        },
        "founder": {
            "@type": "Person",
            "name": "Todd Kernal",
            "jobTitle": "Attorney at Law"
        },
        "knowsAbout": [
            "Criminal Defense",
            "Personal Injury",
            "DUI Defense",
            "Drug Charges",
            "Violent Crimes",
            "Oil Field Injuries"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Legal Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Criminal Defense",
                        "description": "Defense against felonies, DUI, drug charges, and violent crimes in Oklahoma."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Personal Injury",
                        "description": "Representation for car accidents, oil field injuries, and wrongful death claims."
                    }
                }
            ]
        },
        "sameAs": [
            "https://www.facebook.com/kernallaw"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

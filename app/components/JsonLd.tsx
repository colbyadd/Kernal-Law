export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Attorney",
        "name": "Kernal & Associates",
        "image": "https://kernallaw.com/images/todd-kernal-lhl.jpg",
        "username": "KernalLaw",
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
        "sameAs": [
            "https://www.facebook.com/kernallaw",
            "https://www.linkedin.com/in/todd-kernal-123456789/"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

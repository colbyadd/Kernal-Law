import { PageHero } from "../components/PageHero"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Oklahoma City Criminal Defense & Personal Injury Attorney",
    description: "Kernal & Associates serves Oklahoma City with aggressive criminal defense and personal injury representation. 25+ years of experience. Free consultation. Located in SW OKC.",
    openGraph: {
        title: "Oklahoma City Criminal Defense & Personal Injury | Kernal & Associates",
        description: "Local Oklahoma City attorney with 25+ years experience. Criminal defense, DUI, personal injury, oil field accidents. Free consultations.",
    }
}

// LocalBusiness Schema for OKC
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://kernallaw.com/oklahoma-city/#localbusiness",
    "name": "Kernal & Associates - Oklahoma City",
    "image": "https://kernallaw.com/images/todd-kernal-lhl.jpg",
    "url": "https://kernallaw.com/oklahoma-city",
    "telephone": "+1-405-364-0601",
    "email": "todd@kernallaw.com",
    "priceRange": "$$",
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
        { "@type": "City", "name": "Oklahoma City" },
        { "@type": "City", "name": "Moore" },
        { "@type": "City", "name": "Norman" },
        { "@type": "City", "name": "Edmond" },
        { "@type": "City", "name": "Midwest City" },
        { "@type": "City", "name": "Del City" },
        { "@type": "City", "name": "Yukon" },
        { "@type": "City", "name": "Mustang" }
    ],
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:30",
            "closes": "17:30"
        }
    ],
    "sameAs": [
        "https://www.facebook.com/kernallaw",
        "https://maps.app.goo.gl/2mfQkJVZkpGrdVXP6"
    ],
    "hasMap": "https://maps.app.goo.gl/2mfQkJVZkpGrdVXP6"
}

const areasServed = [
    { name: "Downtown OKC", description: "Oklahoma County Courthouse cases" },
    { name: "Moore", description: "Cleveland County representation" },
    { name: "Norman", description: "Cleveland County & OU area" },
    { name: "Edmond", description: "Oklahoma County north" },
    { name: "Midwest City", description: "Tinker AFB area" },
    { name: "Del City", description: "Southeast metro" },
    { name: "Yukon", description: "Canadian County west" },
    { name: "Mustang", description: "Southwest metro" }
]

export default function OklahomaCityPage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <PageHero
                title="Oklahoma City Attorney"
                subtitle="Criminal Defense & Personal Injury Serving the OKC Metro"
            />

            <div className="container mx-auto px-6 py-12 md:py-24">

                {/* Intro Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 text-center">
                        Local Representation. <span className="text-silver-500">Relentless Advocacy.</span>
                    </h2>
                    <p className="text-silver-400 text-lg leading-relaxed text-center mb-8">
                        For over 25 years, Kernal & Associates has defended Oklahoma City residents facing criminal charges and
                        fought for injury victims across the metro. When your freedom or financial future is on the line,
                        you need an attorney who knows the local courts, prosecutors, and insurance adjusters.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors text-center"
                        >
                            Free Consultation
                        </Link>
                        <a
                            href="tel:+14053640601"
                            className="inline-block px-8 py-4 border border-silver-500/30 text-white font-bold uppercase tracking-widest hover:border-accent-gold transition-colors text-center"
                        >
                            Call (405) 364-0601
                        </a>
                    </div>
                </div>

                {/* Office Location */}
                <div className="max-w-4xl mx-auto mb-16 bg-iron-900 border border-silver-500/10 p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="font-serif text-2xl text-white mb-4">Our Office</h3>
                            <div className="text-silver-400 space-y-2 mb-6">
                                <p className="font-semibold text-white">Kernal & Associates</p>
                                <p>1332 SW 89th Street</p>
                                <p>Oklahoma City, OK 73159</p>
                                <p className="pt-2">
                                    <a href="tel:+14053640601" className="text-accent-gold hover:text-white transition-colors">
                                        (405) 364-0601
                                    </a>
                                </p>
                            </div>
                            <p className="text-silver-500 text-sm">
                                <strong>Hours:</strong> Monday–Friday, 8:30 AM – 5:30 PM<br />
                                <em>After-hours consultations available for urgent matters</em>
                            </p>
                        </div>
                        <div>
                            <a
                                href="https://maps.app.goo.gl/2mfQkJVZkpGrdVXP6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-iron-950 border border-silver-500/20 p-6 hover:border-accent-gold/50 transition-colors group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-semibold mb-1">View on Google Maps</p>
                                        <p className="text-silver-500 text-sm">Get directions to our office</p>
                                    </div>
                                    <svg className="w-6 h-6 text-silver-500 group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Practice Areas */}
                <div className="max-w-5xl mx-auto mb-16">
                    <h3 className="font-serif text-2xl text-white mb-8 text-center">Legal Services in Oklahoma City</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link href="/practice/criminal-defense" className="group bg-iron-900 border border-silver-500/10 hover:border-accent-gold/50 transition-colors p-8">
                            <h4 className="font-serif text-xl text-white mb-3 group-hover:text-accent-gold transition-colors">Criminal Defense</h4>
                            <p className="text-silver-400 text-sm mb-4">
                                Aggressive defense in Oklahoma County District Court for felonies, DUI, drug charges,
                                violent crimes, and expungements.
                            </p>
                            <span className="text-accent-gold text-xs uppercase tracking-widest">Learn More →</span>
                        </Link>
                        <Link href="/practice/personal-injury" className="group bg-iron-900 border border-silver-500/10 hover:border-accent-gold/50 transition-colors p-8">
                            <h4 className="font-serif text-xl text-white mb-3 group-hover:text-accent-gold transition-colors">Personal Injury</h4>
                            <p className="text-silver-400 text-sm mb-4">
                                Maximum compensation for car accidents on I-35, I-40, and I-44, oil field injuries,
                                wrongful death, and catastrophic injuries.
                            </p>
                            <span className="text-accent-gold text-xs uppercase tracking-widest">Learn More →</span>
                        </Link>
                    </div>
                </div>

                {/* Areas Served Grid */}
                <div className="max-w-5xl mx-auto mb-16">
                    <h3 className="font-serif text-2xl text-white mb-8 text-center">Serving the Entire OKC Metro</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {areasServed.map((area, i) => (
                            <div key={i} className="bg-iron-900/50 border border-silver-500/10 p-4 text-center">
                                <p className="text-white font-semibold text-sm">{area.name}</p>
                                <p className="text-silver-500 text-xs">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Local Matters */}
                <div className="max-w-4xl mx-auto mb-16 bg-iron-900 border border-silver-500/10 p-8 md:p-12">
                    <h3 className="font-serif text-2xl text-white mb-6 text-center">Why Choose a Local Oklahoma City Attorney?</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-accent-gold font-serif text-xl">25+</span>
                            </div>
                            <h4 className="text-white font-semibold mb-2">Years of Experience</h4>
                            <p className="text-silver-400 text-sm">Practicing in Oklahoma County courts since the 1990s</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-semibold mb-2">Local Knowledge</h4>
                            <p className="text-silver-400 text-sm">Familiar with local judges, prosecutors, and procedures</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-semibold mb-2">Accessible</h4>
                            <p className="text-silver-400 text-sm">Same-day appointments and quick response times</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-12 text-center">
                    <h3 className="font-serif text-3xl text-accent-gold mb-4">Free Oklahoma City Consultation</h3>
                    <p className="text-silver-400 mb-8 max-w-2xl mx-auto">
                        Whether you&apos;re facing criminal charges or recovering from an injury, get experienced local representation.
                        Call today or fill out our form for a free case evaluation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-block px-12 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors">
                            Request Consultation
                        </Link>
                        <a href="tel:+14053640601" className="inline-block px-12 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                            (405) 364-0601
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

import { PageHero } from "../components/PageHero"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Norman Criminal Defense & Personal Injury Attorney",
    description: "Kernal & Associates serves Norman, OK with aggressive criminal defense and personal injury representation. Cleveland County courts. Free consultation.",
    alternates: { canonical: '/norman' },
    openGraph: {
        title: "Norman Criminal Defense & Personal Injury | Kernal & Associates",
        description: "Oklahoma City attorney serving Norman and Cleveland County. Criminal defense, DUI, personal injury. Free consultations.",
        url: 'https://kernallaw.com/norman',
    }
}

// LocalBusiness Schema for Norman
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://kernallaw.com/norman/#localbusiness",
    "name": "Kernal & Associates - Norman",
    "image": "https://kernallaw.com/images/todd-kernal-lhl.jpg",
    "url": "https://kernallaw.com/norman",
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
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:30",
            "closes": "17:30"
        }
    ],
    "areaServed": [
        { "@type": "City", "name": "Norman" },
        { "@type": "City", "name": "Moore" },
        { "@type": "City", "name": "Noble" },
        { "@type": "City", "name": "Goldsby" }
    ],
    "sameAs": [
        "https://www.facebook.com/kernallaw",
        "https://maps.app.goo.gl/2mfQkJVZkpGrdVXP6"
    ]
}

export default function NormanPage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <PageHero
                title="Norman Attorney"
                subtitle="Criminal Defense & Personal Injury in Cleveland County"
            />

            <div className="container mx-auto px-6 py-12 md:py-24">

                {/* Intro Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 text-center">
                        Defending Norman Residents. <span className="text-silver-500">Fighting for Your Rights.</span>
                    </h2>
                    <p className="text-silver-400 text-lg leading-relaxed text-center mb-8">
                        Kernal & Associates provides aggressive legal representation to Norman residents facing criminal charges
                        in Cleveland County District Court or recovering from serious injuries. Whether you&apos;re a University of Oklahoma
                        student, a local professional, or a longtime resident, you deserve an attorney who will fight for you.
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

                {/* Cleveland County Focus */}
                <div className="max-w-4xl mx-auto mb-16 bg-iron-900 border border-silver-500/10 p-8 md:p-12">
                    <h3 className="font-serif text-2xl text-white mb-6">Cleveland County Court Experience</h3>
                    <p className="text-silver-400 mb-6">
                        Cleveland County has its own unique court system, prosecutors, and procedures. With over 25 years of
                        experience practicing in Oklahoma courts, Todd Kernal understands how to navigate the Cleveland County
                        District Court effectively—from arraignment through trial.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-iron-950/50 p-4 border border-silver-500/10">
                            <h4 className="text-white font-semibold mb-2">Criminal Cases</h4>
                            <p className="text-silver-400 text-sm">DUI, drug charges, assault, theft, and felony defense in Cleveland County District Court</p>
                        </div>
                        <div className="bg-iron-950/50 p-4 border border-silver-500/10">
                            <h4 className="text-white font-semibold mb-2">Injury Claims</h4>
                            <p className="text-silver-400 text-sm">Car accidents on I-35, SH-9, and local roads. Workplace injuries and premises liability.</p>
                        </div>
                    </div>
                </div>

                {/* Practice Areas */}
                <div className="max-w-5xl mx-auto mb-16">
                    <h3 className="font-serif text-2xl text-white mb-8 text-center">Legal Services for Norman Residents</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link href="/practice/criminal-defense" className="group bg-iron-900 border border-silver-500/10 hover:border-accent-gold/50 transition-colors p-8">
                            <h4 className="font-serif text-xl text-white mb-3 group-hover:text-accent-gold transition-colors">Criminal Defense</h4>
                            <p className="text-silver-400 text-sm mb-4">
                                Aggressive defense in Cleveland County courts for DUI, MIP, drug possession, assault,
                                and other charges. We also handle OU student disciplinary matters.
                            </p>
                            <span className="text-accent-gold text-xs uppercase tracking-widest">Learn More →</span>
                        </Link>
                        <Link href="/practice/personal-injury" className="group bg-iron-900 border border-silver-500/10 hover:border-accent-gold/50 transition-colors p-8">
                            <h4 className="font-serif text-xl text-white mb-3 group-hover:text-accent-gold transition-colors">Personal Injury</h4>
                            <p className="text-silver-400 text-sm mb-4">
                                Maximum compensation for car accidents, motorcycle crashes, slip and falls,
                                and workplace injuries throughout Norman and Cleveland County.
                            </p>
                            <span className="text-accent-gold text-xs uppercase tracking-widest">Learn More →</span>
                        </Link>
                    </div>
                </div>

                {/* Areas Served */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h3 className="font-serif text-2xl text-white mb-8 text-center">Serving Norman & Surrounding Areas</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Norman", desc: "Cleveland County seat" },
                            { name: "Moore", desc: "Cleveland County" },
                            { name: "Noble", desc: "Cleveland County" },
                            { name: "Goldsby", desc: "South Cleveland County" }
                        ].map((area, i) => (
                            <div key={i} className="bg-iron-900/50 border border-silver-500/10 p-4 text-center">
                                <p className="text-white font-semibold text-sm">{area.name}</p>
                                <p className="text-silver-500 text-xs">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-6">
                        <Link href="/oklahoma-city" className="text-accent-gold hover:text-white transition-colors text-sm">
                            Also serving Oklahoma City Metro →
                        </Link>
                    </p>
                </div>

                {/* Why Choose a Norman Attorney */}
                <div className="max-w-4xl mx-auto mb-16 bg-iron-900 border border-silver-500/10 p-8 md:p-12">
                    <h3 className="font-serif text-2xl text-white mb-6 text-center">Why Choose a Norman Attorney?</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-accent-gold font-serif text-xl">25+</span>
                            </div>
                            <h4 className="text-white font-semibold mb-2">Years of Experience</h4>
                            <p className="text-silver-400 text-sm">Practicing in Cleveland County courts for over two decades</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h4 className="text-white font-semibold mb-2">OU Community</h4>
                            <p className="text-silver-400 text-sm">Experienced with student cases and university procedures</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <h4 className="text-white font-semibold mb-2">Cleveland County Knowledge</h4>
                            <p className="text-silver-400 text-sm">Familiar with local judges, prosecutors, and court procedures</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-12 text-center">
                    <h3 className="font-serif text-3xl text-accent-gold mb-4">Free Norman Consultation</h3>
                    <p className="text-silver-400 mb-8 max-w-2xl mx-auto">
                        Facing charges in Cleveland County or injured in Norman? Get experienced representation from an attorney
                        who knows the local courts. Call today for a free case evaluation.
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

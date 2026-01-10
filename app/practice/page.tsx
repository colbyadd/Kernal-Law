import { PageHero } from "../components/PageHero"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
    title: "Practice Areas | Kernal & Associates",
    description: "Criminal Defense and Personal Injury representation in Oklahoma. Protecting your rights and your future.",
}

export default function PracticeHub() {
    return (
        <main className="bg-iron-950 min-h-screen">
            <PageHero
                title="Practice Areas"
                subtitle="Comprehensive legal defense and injury representation."
            />

            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

                    {/* Criminal Defense Card */}
                    <Link href="/practice/criminal-defense" className="group relative block overflow-hidden bg-iron-900 border border-silver-500/10 hover:border-accent-gold transition-colors duration-500">
                        <div className="aspect-video relative">
                            <Image
                                src="/images/hero-criminal.png"
                                alt="Criminal Defense"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-iron-900 via-transparent to-transparent opacity-90" />
                        </div>
                        <div className="p-8 md:p-12 relative z-10">
                            <h2 className="font-serif text-3xl text-white mb-4 group-hover:text-accent-gold transition-colors">Criminal Defense</h2>
                            <p className="text-silver-400 mb-6">
                                Aggressive protection of your constitutional rights against felonies, DUIs, and serious charges.
                            </p>
                            <span className="text-xs uppercase tracking-widest text-white border-b border-white/30 pb-1 group-hover:border-accent-gold transition-colors">View Defense Services</span>
                        </div>
                    </Link>

                    {/* Personal Injury Card */}
                    <Link href="/practice/personal-injury" className="group relative block overflow-hidden bg-iron-900 border border-silver-500/10 hover:border-accent-gold transition-colors duration-500">
                        <div className="aspect-video relative">
                            <Image
                                src="/images/hero-injury.png"
                                alt="Personal Injury"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-iron-900 via-transparent to-transparent opacity-90" />
                        </div>
                        <div className="p-8 md:p-12 relative z-10">
                            <h2 className="font-serif text-3xl text-white mb-4 group-hover:text-accent-gold transition-colors">Personal Injury</h2>
                            <p className="text-silver-400 mb-6">
                                Justice for victims of negligence. Car accidents, oil field injuries, and wrongful death claims.
                            </p>
                            <span className="text-xs uppercase tracking-widest text-white border-b border-white/30 pb-1 group-hover:border-accent-gold transition-colors">View Injury Services</span>
                        </div>
                    </Link>

                </div>
            </div>
        </main>
    )
}

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function CinematicHero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-iron-950 flex flex-col justify-end pb-24 md:justify-center md:pb-0">

            {/* Background/Portrait Layer */}
            <div className="absolute inset-0 z-0">
                {/* Image Layer - Now Z-10 and Normal Blend for Visibility */}
                <div className="absolute inset-0 z-10">
                    <Image
                        src="/images/hero-abstract.png"
                        alt="Iron justice abstract"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>

                {/* Gradient Overlays - Z-20 */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-iron-950 via-iron-950/50 to-transparent" />
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-iron-950 via-iron-950/20 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="container relative z-30 mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-8 lg:col-span-7 space-y-8">

                    <div className="space-y-2 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <span className="inline-block px-4 py-1 border border-silver-500/30 text-silver-400 text-xs uppercase tracking-[0.2em] bg-iron-950/50 backdrop-blur-sm">
                            Criminal Defense & Personal Injury
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white tracking-tight opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        When Your <br />
                        <span className="text-silver-500">Freedom</span> is <br />
                        on the Line.
                    </h1>

                    <p className="max-w-xl text-lg md:text-xl text-silver-400 font-light leading-relaxed border-l-2 border-silver-500 pl-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        Todd Kernal. 26 years of defending Oklahomans against the most serious charges.
                        Unrelenting advocacy when it matters most.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-iron-950 text-sm uppercase tracking-widest font-bold overflow-hidden transition-all hover:bg-silver-100"
                        >
                            <span className="relative z-10 group-hover:tracking-[0.25em] transition-all">Start Your Defense</span>
                        </Link>
                        <a
                            href="tel:4053640601"
                            className="inline-flex items-center justify-center px-8 py-4 border border-silver-500/30 text-silver-100 text-sm uppercase tracking-widest hover:bg-white/5 transition-colors"
                        >
                            405.364.0601
                        </a>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-pulse">
                <span className="text-[10px] uppercase tracking-[0.3em] text-silver-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-silver-500 to-transparent"></div>
            </div>

        </section>
    )
}

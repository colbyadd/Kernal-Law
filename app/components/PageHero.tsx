'use client'

import React from 'react'
import Image from 'next/image'

interface PageHeroProps {
    title: string
    subtitle?: string
    variant?: 'default' | 'criminal' | 'injury' | 'bio'
}

export function PageHero({ title, subtitle, variant = 'default' }: PageHeroProps) {
    const getBackground = () => {
        switch (variant) {
            case 'criminal':
                return (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/hero-criminal.png"
                            alt="Gavel in courtroom shadow"
                            fill
                            className="object-cover opacity-50"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-iron-950 via-iron-950/60 to-iron-950/30" />
                    </div>
                )
            case 'injury':
                return (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/hero-injury.png"
                            alt="Rainy highway at night"
                            fill
                            className="object-cover opacity-50"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-iron-950 via-iron-950/60 to-iron-950/30" />
                    </div>
                )
            case 'bio':
            default:
                return (
                    <div className="absolute inset-0 z-0 bg-iron-900">
                        <Image
                            src="/images/hero-abstract.png"
                            alt="Iron texture"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-iron-950/50 to-iron-950" />
                    </div>
                )
        }
    }

    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 bg-iron-950 border-b border-silver-500/10 overflow-hidden">
            {getBackground()}
            <div className="container mx-auto relative z-10">
                <h1 className="font-serif text-5xl md:text-7xl text-white tracking-tight mb-6 animate-fade-in">{title}</h1>
                {subtitle && (
                    <p className="max-w-2xl text-lg md:text-xl text-silver-400 font-light border-l border-accent-gold pl-6 animate-slide-up">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}

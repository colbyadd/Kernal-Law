import Image from 'next/image'

interface PageHeroProps {
    title: string
    subtitle?: string
    variant?: 'default' | 'criminal' | 'injury' | 'bio'
    compact?: boolean
}

export function PageHero({ title, subtitle, variant = 'default', compact = false }: PageHeroProps) {
    const getBackground = () => {
        switch (variant) {
            case 'criminal':
                return (
                    <div className="absolute inset-0 z-0" aria-hidden="true">
                        <Image
                            src="/images/hero-criminal.webp"
                            alt=""
                            fill
                            sizes="100vw"
                            className="object-cover opacity-50"
                            priority
                            fetchPriority="high"
                            quality={70}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-iron-950 via-iron-950/60 to-iron-950/30" />
                    </div>
                )
            case 'injury':
                return (
                    <div className="absolute inset-0 z-0" aria-hidden="true">
                        <Image
                            src="/images/hero-injury.webp"
                            alt=""
                            fill
                            sizes="100vw"
                            className="object-cover opacity-50"
                            priority
                            fetchPriority="high"
                            quality={70}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-iron-950 via-iron-950/60 to-iron-950/30" />
                    </div>
                )
            case 'bio':
            default:
                return (
                    <div className="absolute inset-0 z-0 bg-iron-900" aria-hidden="true">
                        <Image
                            src="/images/hero-abstract.webp"
                            alt=""
                            fill
                            sizes="100vw"
                            className="object-cover opacity-30"
                            priority
                            fetchPriority="high"
                            quality={65}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-iron-950/50 to-iron-950" />
                    </div>
                )
        }
    }

    return (
        <section className={`relative px-6 bg-iron-950 border-b border-silver-500/10 overflow-hidden ${compact ? 'pt-28 pb-10 md:pt-36 md:pb-14' : 'pt-32 pb-16 md:pt-48 md:pb-24'}`}>
            {getBackground()}
            <div className="container mx-auto relative z-10">
                <h1 className={`font-serif text-white tracking-tight animate-fade-in ${compact ? 'text-4xl md:text-6xl mb-4' : 'text-5xl md:text-7xl mb-6'}`}>{title}</h1>
                {subtitle && (
                    <p className={`max-w-2xl border-l border-accent-gold pl-6 text-silver-100/80 animate-slide-up ${compact ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}

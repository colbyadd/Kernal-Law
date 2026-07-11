'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function ContactFab() {
    const pathname = usePathname()
    const isHome = pathname === '/'
    const [homeScrolled, setHomeScrolled] = useState(false)

    useEffect(() => {
        if (!isHome) {
            return
        }

        const updateVisibility = () => {
            setHomeScrolled(window.scrollY > Math.min(window.innerHeight * 0.72, 620))
        }

        const frameId = window.requestAnimationFrame(updateVisibility)
        window.addEventListener('scroll', updateVisibility, { passive: true })
        window.addEventListener('resize', updateVisibility)

        return () => {
            window.cancelAnimationFrame(frameId)
            window.removeEventListener('scroll', updateVisibility)
            window.removeEventListener('resize', updateVisibility)
        }
    }, [isHome])

    if (pathname === '/contact') {
        return null
    }

    const isVisible = !isHome || homeScrolled

    return (
        <div
            className={`mobile-contact-fab fixed bottom-4 right-4 z-50 flex gap-2 md:hidden transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
        >
            <a
                href="sms:+14053640601"
                data-cta="mobile_text_fab"
                className="h-12 min-w-24 px-4 rounded-full bg-iron-900 border border-silver-500/30 text-silver-100 text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center shadow-lg shadow-black/40 hover:border-accent-gold/50 hover:text-white transition-colors"
                aria-label="Text the office"
            >
                Text
            </a>
            <a
                href="tel:4053640601"
                data-cta="mobile_call_fab"
                className="h-12 min-w-28 px-5 rounded-full bg-accent-gold text-iron-950 text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center shadow-lg shadow-black/50 hover:bg-white transition-colors"
                aria-label="Call now"
            >
                Call Now
            </a>
        </div>
    )
}

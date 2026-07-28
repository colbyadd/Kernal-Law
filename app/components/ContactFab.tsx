'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
    PRIMARY_PHONE_DISPLAY,
    PRIMARY_PHONE_SMS_HREF,
    PRIMARY_PHONE_TEL_HREF,
} from '@/lib/contact'

export function ContactFab() {
    const pathname = usePathname()
    const [pageScrolled, setPageScrolled] = useState(false)
    const [nearContactStop, setNearContactStop] = useState(false)

    useEffect(() => {
        const updateVisibility = () => {
            const revealPoint = Math.min(Math.max(window.innerHeight * 0.9, 720), 900)
            setPageScrolled(window.scrollY > revealPoint)
        }

        const frameId = window.requestAnimationFrame(updateVisibility)
        window.addEventListener('scroll', updateVisibility, { passive: true })
        window.addEventListener('resize', updateVisibility)

        return () => {
            window.cancelAnimationFrame(frameId)
            window.removeEventListener('scroll', updateVisibility)
            window.removeEventListener('resize', updateVisibility)
        }
    }, [pathname])

    useEffect(() => {
        const intersectingStops = new Set<Element>()
        const frameId = window.requestAnimationFrame(() => setNearContactStop(false))
        const stops = document.querySelectorAll<HTMLElement>('#contact-form, footer')

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        intersectingStops.add(entry.target)
                    } else {
                        intersectingStops.delete(entry.target)
                    }
                }
                setNearContactStop(intersectingStops.size > 0)
            },
            { threshold: 0.01 },
        )

        stops.forEach((stop) => observer.observe(stop))

        return () => {
            window.cancelAnimationFrame(frameId)
            observer.disconnect()
        }
    }, [pathname])

    const isVisible = pageScrolled && !nearContactStop

    return (
        <div
            className={`mobile-contact-fab fixed inset-x-0 bottom-0 z-40 border-t border-silver-500/20 bg-iron-950/95 px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}
            aria-hidden={!isVisible}
        >
            <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
                <a
                    href={PRIMARY_PHONE_SMS_HREF}
                    data-cta="mobile_text_fab"
                    tabIndex={isVisible ? undefined : -1}
                    className="flex h-11 items-center justify-center rounded-full border border-silver-500/35 bg-iron-900 text-xs font-semibold uppercase tracking-[0.16em] text-silver-100 transition-colors hover:border-accent-gold/60 hover:text-white"
                    aria-label={`Text the office at ${PRIMARY_PHONE_DISPLAY}`}
                >
                    Text
                </a>
                <a
                    href={PRIMARY_PHONE_TEL_HREF}
                    data-cta="mobile_call_fab"
                    tabIndex={isVisible ? undefined : -1}
                    className="flex h-11 items-center justify-center rounded-full bg-accent-gold text-xs font-bold uppercase tracking-[0.16em] text-iron-950 transition-colors hover:bg-white"
                    aria-label={`Call the office at ${PRIMARY_PHONE_DISPLAY}`}
                >
                    Call Now
                </a>
            </div>
        </div>
    )
}

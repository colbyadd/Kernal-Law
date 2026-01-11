'use client'

import React from 'react'

export function ContactFab() {
    return (
        <a
            href="tel:4053640601"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-accent-gold text-iron-950 px-6 py-3 rounded-full shadow-lg shadow-black/50 hover:bg-white transition-all transform hover:scale-105 group md:hidden"
            aria-label="Call Now"
        >
            <span className="font-bold uppercase tracking-widest text-sm">Call Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:rotate-12 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
        </a>
    )
}

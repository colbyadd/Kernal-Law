'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function CinematicNav() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'The Attorney', href: '/attorney' },
        { name: 'Practice Areas', href: '/practice' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-iron-950/95 backdrop-blur-md py-4 shadow-2xl border-b border-silver-500/10' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Brand */}
                <Link href="/" className="group relative z-50 max-w-[70%]">
                    <h1 className={`font-serif text-lg md:text-2xl tracking-tighter transition-colors duration-300 leading-tight ${scrolled ? 'text-silver-100' : 'text-white'}`}>
                        KERNAL <span className="text-silver-500 text-xs md:text-sm align-middle italic">&</span> ASSOCIATES
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm uppercase tracking-widest font-medium hover:text-silver-400 transition-colors ${pathname === link.href ? 'text-white border-b border-silver-500' : 'text-silver-400'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="ml-4 border border-silver-100/30 px-6 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-iron-950 transition-all duration-500">
                        Free Consultation
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden z-50 p-2 space-y-1.5 group"
                    aria-label="Toggle Menu"
                >
                    <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-silver-400 ml-auto transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Mobile Overlay */}
                <div className={`fixed inset-0 bg-iron-950 flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${mobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-serif text-4xl text-silver-100 hover:text-silver-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

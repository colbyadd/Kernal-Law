'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    PRIMARY_PHONE_DISPLAY,
    PRIMARY_PHONE_SMS_HREF,
    PRIMARY_PHONE_TEL_HREF,
} from '@/lib/contact'

interface NavLinkItem {
    kind: 'link'
    name: string
    href: string
    cta: string
}

interface NavDropdownItem {
    kind: 'dropdown'
    name: string
    cta: string
    href?: string
    children: Array<{
        name: string
        href: string
        cta: string
    }>
}

type DesktopNavItem = NavLinkItem | NavDropdownItem

const DESKTOP_DROPDOWN_CLOSE_DELAY_MS = 420

export function CinematicNav() {
    const pathname = usePathname()

    return <CinematicNavContent key={pathname} pathname={pathname} />
}

function CinematicNavContent({ pathname }: { pathname: string }) {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const navRef = useRef<HTMLElement | null>(null)
    const mobileMenuDialogRef = useRef<HTMLDivElement | null>(null)
    const mobileMenuOpenButtonRef = useRef<HTMLButtonElement | null>(null)
    const mobileMenuCloseButtonRef = useRef<HTMLButtonElement | null>(null)
    const previouslyFocusedElementRef = useRef<HTMLElement | null>(null)
    const dropdownCloseTimeoutRef = useRef<number | null>(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && !mobileMenuOpen) {
                setActiveDropdown(null)
            }
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [mobileMenuOpen])

    useEffect(() => {
        if (!mobileMenuOpen) {
            return
        }

        const dialog = mobileMenuDialogRef.current
        const menuOpenButton = mobileMenuOpenButtonRef.current
        const focusTimer = window.setTimeout(() => {
            mobileMenuCloseButtonRef.current?.focus()
        }, 0)

        const handleDialogKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault()
                setMobileMenuOpen(false)
                return
            }

            if (event.key !== 'Tab' || !dialog) {
                return
            }

            const focusableElements = Array.from(
                dialog.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
                ),
            ).filter((element) => !element.hasAttribute('hidden'))

            if (focusableElements.length === 0) {
                event.preventDefault()
                return
            }

            const firstElement = focusableElements[0]
            const lastElement = focusableElements[focusableElements.length - 1]

            if (!(document.activeElement instanceof Node) || !dialog.contains(document.activeElement)) {
                event.preventDefault()
                firstElement.focus()
                return
            }

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault()
                lastElement.focus()
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault()
                firstElement.focus()
            }
        }

        document.addEventListener('keydown', handleDialogKeyDown)

        return () => {
            window.clearTimeout(focusTimer)
            document.removeEventListener('keydown', handleDialogKeyDown)
            const focusTarget = previouslyFocusedElementRef.current ?? menuOpenButton
            if (focusTarget?.isConnected) {
                focusTarget.focus()
            }
        }
    }, [mobileMenuOpen])

    useEffect(() => {
        const desktopMediaQuery = window.matchMedia('(min-width: 1024px)')
        const closeMobileMenuAtDesktopWidth = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setMobileMenuOpen(false)
            }
        }

        desktopMediaQuery.addEventListener('change', closeMobileMenuAtDesktopWidth)
        return () => desktopMediaQuery.removeEventListener('change', closeMobileMenuAtDesktopWidth)
    }, [])

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => document.removeEventListener('mousedown', handleOutsideClick)
    }, [])

    useEffect(() => {
        return () => {
            if (dropdownCloseTimeoutRef.current !== null) {
                window.clearTimeout(dropdownCloseTimeoutRef.current)
            }
        }
    }, [])

    useEffect(() => {
        document.documentElement.dataset.mobileMenu = mobileMenuOpen ? 'open' : 'closed'

        if (!mobileMenuOpen) {
            return
        }

        const previousOverflow = document.body.style.overflow
        const backgroundElements = Array.from(
            document.querySelectorAll<HTMLElement>(
                'a[href="#main-content"], #main-content, footer, .mobile-contact-fab',
            ),
        )
        const previousBackgroundStates = backgroundElements.map((element) => ({
            element,
            inert: element.inert,
            ariaHidden: element.getAttribute('aria-hidden'),
        }))

        document.body.style.overflow = 'hidden'
        for (const element of backgroundElements) {
            element.inert = true
            element.setAttribute('aria-hidden', 'true')
        }

        return () => {
            document.body.style.overflow = previousOverflow
            document.documentElement.dataset.mobileMenu = 'closed'
            for (const state of previousBackgroundStates) {
                state.element.inert = state.inert
                if (state.ariaHidden === null) {
                    state.element.removeAttribute('aria-hidden')
                } else {
                    state.element.setAttribute('aria-hidden', state.ariaHidden)
                }
            }
        }
    }, [mobileMenuOpen])

    const desktopNav: DesktopNavItem[] = [
        { kind: 'link', name: 'Home', href: '/', cta: 'nav_home' },
        {
            kind: 'dropdown',
            name: 'Practice Areas',
            cta: 'nav_practice_menu',
            children: [
                { name: 'Criminal Defense', href: '/criminal-defense', cta: 'nav_practice_criminal_defense' },
                { name: 'Personal Injury', href: '/personal-injury', cta: 'nav_practice_personal_injury' },
                { name: 'DUI / DWI Defense', href: '/criminal-defense/dui-dwi', cta: 'nav_practice_dui' },
                { name: 'Car Accident Claims', href: '/personal-injury/car-accidents', cta: 'nav_practice_car_accidents' },
            ],
        },
        {
            kind: 'dropdown',
            name: 'The Firm',
            cta: 'nav_firm_menu',
            children: [
                { name: 'Attorney', href: '/attorney', cta: 'nav_firm_attorney' },
                { name: 'Case Results', href: '/case-results', cta: 'nav_firm_case_results' },
                { name: 'Client Reviews', href: '/client-reviews', cta: 'nav_firm_client_reviews' },
                { name: 'Resources', href: '/resources', cta: 'nav_firm_resources' },
                { name: 'Locations', href: '/locations', cta: 'nav_firm_locations' },
                { name: 'Fees & Billing', href: '/fees', cta: 'nav_firm_fees' },
            ],
        },
    ]

    const mobileSections = [
        {
            heading: 'Primary',
            links: [
                { name: 'Home', href: '/', cta: 'nav_mobile_home' },
                { name: 'Contact', href: '/contact', cta: 'nav_mobile_contact' },
            ],
        },
        {
            heading: 'Practice',
            links: [
                { name: 'Criminal Defense', href: '/criminal-defense', cta: 'nav_mobile_practice_criminal' },
                { name: 'Personal Injury', href: '/personal-injury', cta: 'nav_mobile_practice_injury' },
                { name: 'DUI / DWI', href: '/criminal-defense/dui-dwi', cta: 'nav_mobile_practice_dui' },
                { name: 'Car Accidents', href: '/personal-injury/car-accidents', cta: 'nav_mobile_practice_car' },
            ],
        },
        {
            heading: 'The Firm',
            links: [
                { name: 'Attorney', href: '/attorney', cta: 'nav_mobile_firm_attorney' },
                { name: 'Case Results', href: '/case-results', cta: 'nav_mobile_firm_results' },
                { name: 'Client Reviews', href: '/client-reviews', cta: 'nav_mobile_firm_reviews' },
                { name: 'Resources', href: '/resources', cta: 'nav_mobile_firm_resources' },
                { name: 'Locations', href: '/locations', cta: 'nav_mobile_firm_locations' },
                { name: 'Fees & Billing', href: '/fees', cta: 'nav_mobile_firm_fees' },
            ],
        },
    ]

    const isActiveLink = (href: string) => {
        if (href === '/') {
            return pathname === '/'
        }

        return pathname === href || pathname.startsWith(`${href}/`)
    }

    const isDropdownActive = (item: NavDropdownItem) => {
        if (item.href && isActiveLink(item.href)) {
            return true
        }
        return item.children.some((child) => isActiveLink(child.href))
    }

    const clearDropdownTimeouts = () => {
        if (dropdownCloseTimeoutRef.current !== null) {
            window.clearTimeout(dropdownCloseTimeoutRef.current)
            dropdownCloseTimeoutRef.current = null
        }
    }

    const openDropdown = (name: string) => {
        clearDropdownTimeouts()
        setActiveDropdown(name)
    }

    const queueCloseDropdown = () => {
        clearDropdownTimeouts()
        dropdownCloseTimeoutRef.current = window.setTimeout(() => {
            setActiveDropdown(null)
            dropdownCloseTimeoutRef.current = null
        }, DESKTOP_DROPDOWN_CLOSE_DELAY_MS)
    }

    const toggleDropdown = (name: string) => {
        clearDropdownTimeouts()
        setActiveDropdown((prev) => (prev === name ? null : name))
    }

    const openMobileMenu = () => {
        previouslyFocusedElementRef.current =
            document.activeElement instanceof HTMLElement && document.activeElement !== document.body
                ? document.activeElement
                : mobileMenuOpenButtonRef.current
        setMobileMenuOpen(true)
    }

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-iron-950/95 backdrop-blur-md py-4 shadow-2xl border-b border-silver-500/10' : 'bg-transparent py-8'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Brand */}
                <Link
                    href="/"
                    prefetch={false}
                    className={`group relative z-50 max-w-[70%] ${mobileMenuOpen ? 'invisible pointer-events-none lg:visible lg:pointer-events-auto' : ''}`}
                >
                    <span className={`font-serif text-lg md:text-2xl tracking-tighter transition-colors duration-300 leading-tight block ${scrolled ? 'text-silver-100' : 'text-white'}`}>
                        KERNAL <span className="text-silver-500 text-xs md:text-sm align-middle italic">&</span> ASSOCIATES
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div
                    className="hidden lg:flex gap-2 items-center"
                    onMouseEnter={clearDropdownTimeouts}
                    onMouseLeave={queueCloseDropdown}
                >
                    {desktopNav.map((item) => {
                        if (item.kind === 'link') {
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    prefetch={false}
                                    data-cta={item.cta}
                                    aria-current={isActiveLink(item.href) ? 'page' : undefined}
                                    onClick={() => {
                                        setActiveDropdown(null)
                                        setMobileMenuOpen(false)
                                    }}
                                    className={`px-3 py-2 text-xs uppercase tracking-wider font-medium rounded-md transition-colors ${isActiveLink(item.href) ? 'text-white bg-white/10' : 'text-silver-400 hover:text-silver-100 hover:bg-white/5'}`}
                                >
                                    {item.name}
                                </Link>
                            )
                        }

                        const open = activeDropdown === item.name
                        const active = isDropdownActive(item)

                        return (
                            <div
                                key={item.name}
                                className="relative pb-2 -mb-2"
                                onMouseEnter={() => openDropdown(item.name)}
                            >
                                <button
                                    type="button"
                                    data-cta={item.cta}
                                    onClick={() => toggleDropdown(item.name)}
                                    onFocus={() => openDropdown(item.name)}
                                    className={`inline-flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider font-medium rounded-md transition-colors ${active ? 'text-white bg-white/10' : 'text-silver-400 hover:text-silver-100 hover:bg-white/5'}`}
                                    aria-expanded={open}
                                    aria-controls={`desktop-nav-panel-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                    {item.name}
                                    <svg
                                        className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                <div
                                    id={`desktop-nav-panel-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
                                    aria-label={`${item.name} submenu`}
                                    aria-hidden={!open}
                                    onMouseEnter={() => openDropdown(item.name)}
                                >
                                    <div className="border border-silver-500/20 bg-iron-900/95 backdrop-blur-md shadow-2xl p-2">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                prefetch={false}
                                                data-cta={child.cta}
                                                aria-current={isActiveLink(child.href) ? 'page' : undefined}
                                                tabIndex={open ? undefined : -1}
                                                onClick={() => {
                                                    setActiveDropdown(null)
                                                    setMobileMenuOpen(false)
                                                }}
                                                className={`block px-3 py-3 text-sm transition-colors rounded-sm ${isActiveLink(child.href) ? 'text-white bg-white/10' : 'text-silver-300 hover:text-white hover:bg-white/5'}`}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <Link
                        href="/contact"
                        data-cta="nav_free_consultation"
                        onClick={() => {
                            setActiveDropdown(null)
                            setMobileMenuOpen(false)
                        }}
                        className="ml-4 border border-silver-100/30 px-6 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-iron-950 transition-all duration-500"
                    >
                        Free Consultation
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    ref={mobileMenuOpenButtonRef}
                    type="button"
                    onClick={openMobileMenu}
                    className={`z-50 flex h-11 w-11 flex-col items-end justify-center gap-1.5 lg:hidden ${mobileMenuOpen ? 'invisible pointer-events-none' : ''}`}
                    aria-label="Open menu"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="block w-8 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-silver-400 ml-auto"></span>
                    <span className="block w-8 h-0.5 bg-white"></span>
                </button>

                {/* Mobile Overlay */}
                <div
                    ref={mobileMenuDialogRef}
                    id="mobile-menu"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                    aria-hidden={!mobileMenuOpen}
                    className={`fixed top-0 left-0 w-full h-[100dvh] z-40 bg-iron-950 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden overflow-y-auto overscroll-contain ${mobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}
                >
                    <div className="sticky top-0 z-50 flex justify-end bg-iron-950 px-4 pb-2 pt-[calc(0.75rem+env(safe-area-inset-top))]">
                        {mobileMenuOpen ? (
                            <button
                                ref={mobileMenuCloseButtonRef}
                                type="button"
                                autoFocus
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex h-11 w-11 items-center justify-center border border-accent-gold/70"
                                aria-label="Close menu"
                            >
                                <span className="absolute block h-0.5 w-7 rotate-45 bg-white"></span>
                                <span className="absolute block h-0.5 w-7 -rotate-45 bg-white"></span>
                            </button>
                        ) : null}
                    </div>
                    <div className="container mx-auto space-y-8 px-6 pb-[calc(4rem+env(safe-area-inset-bottom))] pt-2">
                        <div>
                            <p className="text-silver-500 text-xs uppercase tracking-[0.22em] mb-4">Contact the Office</p>
                            <div className="grid grid-cols-2 gap-3">
                                <a
                                    href={PRIMARY_PHONE_TEL_HREF}
                                    data-cta="nav_mobile_call"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex h-12 items-center justify-center rounded-full bg-accent-gold text-xs font-bold uppercase tracking-[0.16em] text-iron-950"
                                    aria-label={`Call the office at ${PRIMARY_PHONE_DISPLAY}`}
                                >
                                    Call
                                </a>
                                <a
                                    href={PRIMARY_PHONE_SMS_HREF}
                                    data-cta="nav_mobile_text"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex h-12 items-center justify-center rounded-full border border-silver-500/35 text-xs font-semibold uppercase tracking-[0.16em] text-silver-100"
                                    aria-label={`Text the office at ${PRIMARY_PHONE_DISPLAY}`}
                                >
                                    Text
                                </a>
                            </div>
                        </div>
                        {mobileSections.map((section) => (
                            <div key={section.heading}>
                                <p className="text-silver-500 text-xs uppercase tracking-[0.22em] mb-4">{section.heading}</p>
                                <div className="grid grid-cols-1 gap-3">
                                    {section.links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            prefetch={link.href === '/contact'}
                                            data-cta={link.cta}
                                            aria-current={isActiveLink(link.href) ? 'page' : undefined}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`block font-serif text-3xl leading-tight transition-colors ${isActiveLink(link.href) ? 'text-white' : 'text-silver-300 hover:text-white'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

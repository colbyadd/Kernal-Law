import Link from 'next/link'
import {
  ContactCaseType,
  getContactHref,
  inferContactCaseType,
} from '@/lib/contact'

interface MobileConversionBarProps {
  context: string
  primaryHref?: string
  primaryLabel?: string
}

function inferCaseTypeFromContext(context: string): ContactCaseType | '' {
  const normalizedContext = context.toLowerCase().replaceAll('_', '-')
  const pathMatch = inferContactCaseType(`/${normalizedContext}`)
  if (pathMatch) return pathMatch

  const injurySignals = ['injury', 'accident', 'crash', 'wrongful-death', 'uninsured', 'truck', 'car-']
  if (injurySignals.some((signal) => normalizedContext.includes(signal))) {
    return 'personal-injury'
  }

  const criminalSignals = [
    'criminal',
    'defense',
    'arrest',
    'dui',
    'dwi',
    'warrant',
    'drug',
    'assault',
    'theft',
    'fraud',
    'probation',
    'expungement',
    'felony',
    'bond',
  ]
  if (criminalSignals.some((signal) => normalizedContext.includes(signal))) {
    return 'criminal-defense'
  }

  return ''
}

function withCasePrefill(href: string, context: string) {
  if (!href.startsWith('/contact')) return href

  const existingCase = new URL(href, 'https://kernallaw.com').searchParams.get('case')
  if (existingCase) return href

  const caseType = inferCaseTypeFromContext(context)
  if (!caseType) return href

  const hashIndex = href.indexOf('#')
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : ''
  return `${getContactHref(caseType)}${hash}`
}

export function MobileConversionBar({
  context,
  primaryHref = '/contact',
  primaryLabel = 'Request Review',
}: MobileConversionBarProps) {
  const resolvedPrimaryHref = withCasePrefill(primaryHref, context)

  return (
    <section className="mobile-conversion-bar md:hidden py-3 border-b border-silver-500/10 bg-iron-900/80">
      <div className="container mx-auto px-4">
        <Link
          href={resolvedPrimaryHref}
          data-cta={`${context}_mobile_primary`}
          className="flex h-11 w-full items-center justify-center rounded-full border border-silver-500/35 text-[11px] font-semibold uppercase tracking-[0.18em] text-silver-100 transition-colors hover:border-accent-gold/60 hover:text-white"
        >
          {primaryLabel}
        </Link>
      </div>
    </section>
  )
}

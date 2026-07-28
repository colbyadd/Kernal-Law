import Link from 'next/link'
import {
  getContactHref,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_TEL_HREF,
} from '@/lib/contact'
import { BreadcrumbTrail } from './BreadcrumbTrail'
import { PageHero } from './PageHero'
import { FaqSection } from './FaqSection'
import { LinkGridItem, LinkGridSection } from './LinkGridSection'
import { MobileConversionBar } from './MobileConversionBar'
import { ServicePageJsonLd } from './ServicePageJsonLd'
import { TrustProofSection } from './TrustProofSection'

export interface FocusItem {
  title: string
  description: string
  bullets: string[]
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ServiceDetailPageProps {
  heroTitle: string
  heroSubtitle: string
  heroVariant: 'criminal' | 'injury'
  introTitle: string
  introParagraphs: string[]
  focusTitle: string
  focusItems: FocusItem[]
  processTitle: string
  processSubtitle: string
  processSteps: ProcessStep[]
  relatedTitle: string
  relatedSubtitle: string
  relatedLinks: LinkGridItem[]
  faqTitle?: string
  faqSubtitle: string
  faqs: FaqItem[]
  practiceArea: string
  ctaTitle: string
  ctaDescription: string
  ctaLabel: string
  ctaHref?: string
  ctaName: string
  actionChecklist?: [string, string, string, string]
  localContextTitle?: string
  localContextSubtitle?: string
  localContextNarrative?: string[]
  localContextPoints?: string[]
}

const relatedLinkFallbacks: Record<ServiceDetailPageProps['heroVariant'], LinkGridItem[]> = {
  criminal: [
    {
      href: '/criminal-defense',
      title: 'Criminal Defense Hub',
      description: 'Review charge categories, court process, and common defense issues.',
      ctaName: 'related_fallback_criminal_hub',
    },
    {
      href: '/criminal-defense/dui-dwi',
      title: 'DUI / DWI Defense',
      description: 'DUI court proceedings and related driver-license issues.',
      ctaName: 'related_fallback_criminal_dui',
    },
    {
      href: '/resources/oklahoma-felony-case-timeline',
      title: 'Felony Case Timeline Guide',
      description: 'Stage-by-stage felony workflow from filing through resolution.',
      ctaName: 'related_fallback_criminal_felony_timeline',
    },
    {
      href: '/resources/what-to-do-after-arrest-oklahoma',
      title: 'Post-Arrest Guide',
      description: 'Immediate steps to reduce avoidable criminal-case damage.',
      ctaName: 'related_fallback_criminal_guide',
    },
    {
      href: '/case-results',
      title: 'Case Results',
      description: 'Review representative outcomes and litigation context.',
      ctaName: 'related_fallback_case_results',
    },
    {
      href: getContactHref('criminal-defense'),
      title: 'Request Consultation',
      description: 'Talk with an attorney about the facts, documents, and next deadline.',
      ctaName: 'related_fallback_contact',
    },
  ],
  injury: [
    {
      href: '/personal-injury',
      title: 'Personal Injury Hub',
      description: 'Review injury claim categories, records, damages, and the usual process.',
      ctaName: 'related_fallback_injury_hub',
    },
    {
      href: '/personal-injury/car-accidents',
      title: 'Car Accident Claims',
      description: 'Fault, insurance, medical records, and damages after a serious collision.',
      ctaName: 'related_fallback_injury_car',
    },
    {
      href: '/resources/oklahoma-uninsured-motorist-claim-guide',
      title: 'Uninsured Motorist Claim Guide',
      description: 'Coverage and damages issues in uninsured and underinsured motorist claims.',
      ctaName: 'related_fallback_injury_um_uim_guide',
    },
    {
      href: '/resources/what-to-do-after-car-accident-oklahoma',
      title: 'Post-Accident Guide',
      description: 'Immediate steps to protect evidence and claim value.',
      ctaName: 'related_fallback_injury_guide',
    },
    {
      href: '/case-results',
      title: 'Case Results',
      description: 'Review representative outcomes and recovery context.',
      ctaName: 'related_fallback_case_results',
    },
    {
      href: getContactHref('personal-injury'),
      title: 'Request Consultation',
      description: 'Talk with an attorney before signing a release or missing a deadline.',
      ctaName: 'related_fallback_contact',
    },
  ],
}

function withRelatedFallbacks(
  links: LinkGridItem[],
  variant: ServiceDetailPageProps['heroVariant'],
): LinkGridItem[] {
  const merged = [...links, ...relatedLinkFallbacks[variant]]
  const unique: LinkGridItem[] = []
  const seen = new Set<string>()

  for (const link of merged) {
    if (seen.has(link.href)) {
      continue
    }
    unique.push(link)
    seen.add(link.href)
    if (unique.length >= 6) {
      break
    }
  }

  return unique
}

function toStepNumber(value: number) {
  return value.toString().padStart(2, '0')
}

export function ServiceDetailPage({
  heroTitle,
  heroSubtitle,
  heroVariant,
  introTitle,
  introParagraphs,
  focusTitle,
  focusItems,
  processTitle,
  processSubtitle,
  processSteps,
  relatedTitle,
  relatedSubtitle,
  relatedLinks,
  faqTitle,
  faqSubtitle,
  faqs,
  practiceArea,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref,
  ctaName,
  actionChecklist,
  localContextTitle,
  localContextSubtitle,
  localContextNarrative,
  localContextPoints,
}: ServiceDetailPageProps) {
  const hasLocalContext =
    Boolean(localContextTitle) ||
    (localContextNarrative?.length ?? 0) > 0 ||
    (localContextPoints?.length ?? 0) > 0

  const jumpLinks = [
    { href: '#service-overview', label: 'Overview' },
    { href: '#service-focus', label: 'Focus Areas' },
    ...(hasLocalContext ? [{ href: '#service-local-context', label: 'Local Information' }] : []),
    { href: '#service-process', label: 'Process' },
    { href: '#service-faq', label: 'FAQ' },
    { href: '#service-contact', label: 'Contact' },
  ]

  const defaultChecklist: [string, string, string, string] =
    heroVariant === 'criminal'
      ? [
        'Do not discuss facts of your case with anyone except your lawyer.',
        'Gather all citations, bond paperwork, and court notices in one place.',
        'Follow release conditions exactly to avoid compounding exposure.',
        'Have the charge, documents, and deadlines reviewed before your next hearing.',
      ]
      : [
        'Preserve photos, records, and witness information from the incident.',
        'Track treatment, symptoms, and expenses in a single chronology.',
        'Avoid recorded insurer statements before you understand their purpose and effect.',
        'Have the claim and applicable deadlines reviewed before signing a release.',
      ]

  const checklistItems = actionChecklist ?? defaultChecklist
  const relatedItems = withRelatedFallbacks(relatedLinks, heroVariant)
  const resolvedCtaHref = ctaHref ?? getContactHref(
    heroVariant === 'criminal' ? 'criminal-defense' : 'personal-injury',
  )

  return (
    <main className="bg-iron-950 min-h-screen">
      <ServicePageJsonLd description={heroSubtitle} variant={heroVariant} />
      <PageHero title={heroTitle} subtitle={heroSubtitle} variant={heroVariant} />
      <MobileConversionBar
        context={practiceArea}
        primaryHref={resolvedCtaHref}
        primaryLabel={ctaLabel}
      />
      <BreadcrumbTrail
        items={[
          { label: 'Home', href: '/' },
          {
            label: heroVariant === 'criminal' ? 'Criminal Defense' : 'Personal Injury',
            href: heroVariant === 'criminal' ? '/criminal-defense' : '/personal-injury',
          },
          { label: heroTitle },
        ]}
      />

      <section className="py-12 md:py-16 border-y border-silver-500/10 bg-iron-900/25">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            <div className="min-w-0 space-y-6 md:space-y-8">
              <div className="lg:hidden border border-silver-500/20 bg-iron-900/75 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">On This Page</p>
                <nav aria-label="On this page" className="mt-3">
                  <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {jumpLinks.map((item, index) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="flex items-start gap-3 border border-silver-500/20 bg-iron-950/70 px-3 py-3 text-silver-300 hover:text-white hover:border-accent-gold/45 transition-colors"
                        >
                          <span className="text-[10px] uppercase tracking-[0.16em] text-silver-500 pt-0.5">
                            {toStepNumber(index + 1)}
                          </span>
                          <span className="text-sm leading-snug">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>

              <section id="service-overview" className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{introTitle}</h2>
                <div className="space-y-5 text-silver-400 text-lg leading-relaxed">
                  {introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href={resolvedCtaHref}
                    data-cta={`${practiceArea}_intro_contact`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
                  >
                    Free Consultation
                  </Link>
                  <a
                    href={PRIMARY_PHONE_TEL_HREF}
                    data-cta={`${practiceArea}_intro_call`}
                    className="inline-flex items-center justify-center px-8 py-4 border border-silver-500/30 text-white font-bold uppercase tracking-widest hover:border-accent-gold transition-colors"
                  >
                    Call {PRIMARY_PHONE_DISPLAY}
                  </a>
                </div>
              </section>

              <section id="service-focus" className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-10">{focusTitle}</h2>
                <div className="grid grid-cols-1 gap-8">
                  {focusItems.map((item) => (
                    <article
                      key={item.title}
                      className="bg-iron-950/60 border border-silver-500/10 p-8 md:p-10 hover:border-accent-gold/40 transition-colors"
                    >
                      <h3 className="font-serif text-2xl text-white mb-4">{item.title}</h3>
                      <p className="text-silver-400 leading-relaxed mb-5">{item.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-silver-400 text-sm">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="bg-iron-950/60 border border-white/5 p-3 rounded-sm">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              {hasLocalContext ? (
                <section id="service-local-context" className="scroll-mt-28 bg-iron-900/85 border border-silver-500/10 p-6 md:p-8">
                  <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                    {localContextTitle ?? 'Local Case Information'}
                  </h2>
                  {localContextSubtitle ? (
                    <p className="text-silver-400 mb-8 max-w-4xl">{localContextSubtitle}</p>
                  ) : null}
                  {localContextNarrative?.length ? (
                    <div className="space-y-5 text-silver-300 leading-relaxed mb-10">
                      {localContextNarrative.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                  {localContextPoints?.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {localContextPoints.map((item) => (
                        <article
                          key={item}
                          className="bg-iron-900/80 border border-silver-500/10 p-5 text-silver-300 leading-relaxed"
                        >
                          {item}
                        </article>
                      ))}
                    </div>
                  ) : null}
                </section>
              ) : null}

              <section className="bg-iron-900 border border-silver-500/10 p-6 md:p-8">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Critical Next Steps</h2>
                <p className="text-silver-400 mb-7">
                  Early choices can affect deadlines, evidence, release conditions, and insurance rights.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {checklistItems.map((item) => (
                    <li
                      key={item}
                      className="bg-iron-950/70 border border-silver-500/10 p-5 text-silver-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="service-process" className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{processTitle}</h2>
                <p className="text-silver-400 mb-10">{processSubtitle}</p>
                <div className="space-y-5">
                  {processSteps.map((step) => (
                    <article
                      key={step.step}
                      className="flex gap-5 bg-iron-950/70 border border-silver-500/10 p-6 hover:border-accent-gold/30 transition-colors"
                    >
                      <span className="text-accent-gold font-serif text-2xl">{step.step}</span>
                      <div>
                        <h3 className="font-serif text-xl text-white mb-2">{step.title}</h3>
                        <p className="text-silver-400 leading-relaxed">{step.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="hidden lg:block">
              <nav
                aria-label="On this page"
                className="sticky top-28 border border-silver-500/20 bg-iron-900/95 backdrop-blur-md p-4"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">On This Page</p>
                <ol className="mt-3 space-y-1">
                  {jumpLinks.map((item, index) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="flex items-start gap-3 border-l border-silver-500/20 px-3 py-2 text-silver-300 hover:text-white hover:border-accent-gold/45 transition-colors"
                      >
                        <span className="text-[10px] uppercase tracking-[0.14em] text-silver-500 pt-1">
                          {toStepNumber(index + 1)}
                        </span>
                        <span className="text-sm leading-snug">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <TrustProofSection
        ctaPrefix={practiceArea}
        context={heroVariant === 'criminal' ? 'criminal' : 'injury'}
      />

      <LinkGridSection title={relatedTitle} subtitle={relatedSubtitle} items={relatedItems} columns="three" />

      <div id="service-faq" className="scroll-mt-28">
        <FaqSection
          title={faqTitle}
          subtitle={faqSubtitle}
          faqs={faqs}
          practiceArea={practiceArea}
        />
      </div>

      <section id="service-contact" className="py-16 md:py-24 scroll-mt-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">{ctaTitle}</h2>
            <p className="text-silver-400 mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
            <Link
              href={resolvedCtaHref}
              data-cta={ctaName}
              className="inline-block px-12 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import { BASE_URL } from '@/lib/constants'
import { buildContactPointSchema } from '@/lib/schema/builders'
import { BreadcrumbTrail } from './BreadcrumbTrail'
import { PageHero } from './PageHero'
import { FaqSection } from './FaqSection'
import { LinkGridItem, LinkGridSection } from './LinkGridSection'
import { MobileConversionBar } from './MobileConversionBar'
import { TrustProofSection } from './TrustProofSection'

export interface LocationServicePageProps {
  canonicalPath: string
  locationName: string
  subtitle: string
  introTitle: string
  introParagraphs: string[]
  countyFocus: string
  localHighlights: string[]
  serviceLinks: LinkGridItem[]
  relatedLocationLinks: LinkGridItem[]
  faqSubtitle: string
  faqs: {
    question: string
    answer: string
  }[]
  ctaTitle: string
  ctaDescription: string
  ctaName: string
}

function toStepNumber(value: number) {
  return value.toString().padStart(2, '0')
}

function toCtaName(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

export function LocationServicePage({
  canonicalPath,
  locationName,
  subtitle,
  introTitle,
  introParagraphs,
  countyFocus,
  localHighlights,
  serviceLinks,
  relatedLocationLinks,
  faqSubtitle,
  faqs,
  ctaTitle,
  ctaDescription,
  ctaName,
}: LocationServicePageProps) {
  const jumpLinks = [
    { href: '#location-overview', label: 'Overview' },
    { href: '#location-highlights', label: 'Local Context' },
    { href: '#location-services', label: 'Services' },
    { href: '#location-faq', label: 'FAQ' },
    { href: '#location-contact', label: 'Contact' },
  ] as const

  const isCountyPage = locationName.includes('County')
  const contactPoint = buildContactPointSchema()
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${BASE_URL}${canonicalPath}#legal-service`,
    name: `${locationName} Criminal Defense and Personal Injury Attorney`,
    description: subtitle,
    url: `${BASE_URL}${canonicalPath}`,
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: [
      {
        '@type': isCountyPage ? 'AdministrativeArea' : 'City',
        name: locationName,
        containedInPlace: { '@type': 'State', name: 'Oklahoma' },
      },
      { '@type': 'State', name: 'Oklahoma' },
    ],
    serviceType: 'Criminal Defense and Personal Injury',
    knowsAbout: [
      'Criminal Defense',
      'Personal Injury',
      ...serviceLinks.slice(0, 6).map((service) => service.title),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${locationName} Legal Services`,
      itemListElement: serviceLinks.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${BASE_URL}${service.href}#service`,
          name: service.title,
          description: service.description,
          serviceType: service.title,
          url: `${BASE_URL}${service.href}`,
          provider: { '@id': `${BASE_URL}/#organization` },
          areaServed: [
            {
              '@type': isCountyPage ? 'AdministrativeArea' : 'City',
              name: locationName,
              containedInPlace: { '@type': 'State', name: 'Oklahoma' },
            },
            { '@type': 'State', name: 'Oklahoma' },
          ],
        },
      })),
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${BASE_URL}/contact`,
      availableLanguage: ['English'],
    },
    contactPoint,
  }

  return (
    <main className="bg-iron-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <PageHero
        title={`${locationName} Criminal Defense & Personal Injury Attorney`}
        subtitle={subtitle}
      />
      <MobileConversionBar
        context={ctaName}
        primaryHref="/contact"
        primaryLabel="Request Consultation"
      />
      <BreadcrumbTrail
        items={[
          { label: 'Home', href: '/' },
          { label: locationName },
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

              <section id="location-overview" className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{introTitle}</h2>
                <div className="space-y-5 text-silver-400 text-lg leading-relaxed">
                  {introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    data-cta={`${ctaName}_intro_contact`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
                  >
                    Free Consultation
                  </Link>
                  <a
                    href="tel:+14053640601"
                    data-cta={`${ctaName}_intro_call`}
                    className="inline-flex items-center justify-center px-8 py-4 border border-silver-500/30 text-white font-bold uppercase tracking-widest hover:border-accent-gold transition-colors"
                  >
                    Call (405) 364-0601
                  </a>
                </div>
              </section>

              <section id="location-highlights" className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8">
                <div className="mb-8">
                  <p className="text-accent-gold text-xs uppercase tracking-widest mb-2">County Focus</p>
                  <h2 className="font-serif text-3xl text-white">{countyFocus}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {localHighlights.map((highlight) => (
                    <article
                      key={highlight}
                      className="bg-iron-950/70 border border-silver-500/10 p-5 text-silver-400 hover:border-accent-gold/40 transition-colors"
                    >
                      {highlight}
                    </article>
                  ))}
                </div>
              </section>

              <section id="location-services" className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{`Legal Services for ${locationName}`}</h2>
                <p className="text-silver-400 text-lg mb-8">
                  Start with the service category that matches your current legal issue.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      data-cta={item.ctaName ?? `location_service_link_${toCtaName(item.title)}`}
                      className="group border border-silver-500/10 bg-iron-950 p-7 hover:border-accent-gold/50 transition-colors"
                    >
                      <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-accent-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-silver-400 text-sm leading-relaxed mb-5">{item.description}</p>
                      <span className="text-accent-gold text-xs uppercase tracking-widest">
                        {item.ctaLabel ?? 'Learn More'}
                      </span>
                    </Link>
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

      <TrustProofSection ctaPrefix={`${ctaName}_location`} />

      <div id="location-nearby">
        <LinkGridSection
          title="Related Service Areas and Oklahoma Guides"
          subtitle="Compare nearby market pages and action-focused legal resources."
          items={relatedLocationLinks}
          columns="three"
        />
      </div>

      <div id="location-faq" className="scroll-mt-28">
        <FaqSection
          title={`Frequently Asked Questions in ${locationName}`}
          subtitle={faqSubtitle}
          faqs={faqs}
          practiceArea={`${ctaName}_location`}
        />
      </div>

      <section id="location-contact" className="py-16 md:py-24 scroll-mt-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">{ctaTitle}</h2>
            <p className="text-silver-400 mb-8">{ctaDescription}</p>
            <Link
              href="/contact"
              data-cta={`${ctaName}_bottom_contact`}
              className="inline-block px-12 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

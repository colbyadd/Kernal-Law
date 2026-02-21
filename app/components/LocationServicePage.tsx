import Link from 'next/link'
import { BASE_URL } from '@/lib/constants'
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

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${BASE_URL}${canonicalPath}#legal-service`,
    name: `Kernal & Associates ${locationName} Legal Services`,
    description: subtitle,
    url: `${BASE_URL}${canonicalPath}`,
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: [
      { '@type': 'City', name: locationName },
      { '@type': 'AdministrativeArea', name: countyFocus },
    ],
    serviceType: serviceLinks.map((service) => service.title),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${BASE_URL}/contact`,
      servicePhone: '+1-405-364-0601',
    },
  }

  return (
    <main className="bg-iron-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <PageHero title={`${locationName} Attorney`} subtitle={subtitle} />
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

      <section className="py-6 border-b border-silver-500/10 bg-iron-900/40">
        <div className="container mx-auto px-6">
          <nav aria-label="On this page" className="max-w-5xl mx-auto flex flex-wrap gap-2 md:gap-3">
            {jumpLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center border border-silver-500/20 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-silver-300 hover:text-white hover:border-accent-gold/45 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="location-overview" className="py-12 md:py-20 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>

      <section id="location-highlights" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-accent-gold text-xs uppercase tracking-widest mb-2">County Focus</p>
              <h2 className="font-serif text-3xl text-white">{countyFocus}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {localHighlights.map((highlight) => (
                <article
                  key={highlight}
                  className="bg-iron-900 border border-silver-500/10 p-5 text-silver-400 hover:border-accent-gold/40 transition-colors"
                >
                  {highlight}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="location-services">
        <LinkGridSection
          title={`Legal Services for ${locationName}`}
          subtitle="Start with the service category that matches your current legal issue."
          items={serviceLinks}
          columns="three"
        />
      </div>

      <TrustProofSection ctaPrefix={`${ctaName}_location`} />

      <div id="location-nearby">
        <LinkGridSection
          title="Nearby Service Areas"
          subtitle="Review nearby location pages and related legal resources."
          items={relatedLocationLinks}
          columns="three"
        />
      </div>

      <div id="location-faq">
        <FaqSection
          title={`Frequently Asked Questions in ${locationName}`}
          subtitle={faqSubtitle}
          faqs={faqs}
          practiceArea={`${ctaName}_location`}
        />
      </div>

      <section id="location-contact" className="py-16 md:py-24">
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

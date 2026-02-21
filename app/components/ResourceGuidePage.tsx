import Link from 'next/link'
import { BASE_URL } from '@/lib/constants'
import { BreadcrumbTrail } from './BreadcrumbTrail'
import { FaqSection } from './FaqSection'
import { MobileConversionBar } from './MobileConversionBar'
import { PageHero } from './PageHero'
import { LinkGridItem, LinkGridSection } from './LinkGridSection'

interface GuideSection {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

interface GuideStep {
  label: string
  title: string
  detail: string
}

interface ResourceGuidePageProps {
  canonicalPath: string
  title: string
  subtitle: string
  intro: string[]
  authorName: string
  reviewedBy: string
  reviewedTitle: string
  lastUpdated: string
  immediateActionsTitle: string
  immediateActions: GuideStep[]
  takeaways: string[]
  sections: GuideSection[]
  faqSubtitle: string
  faqs: {
    question: string
    answer: string
  }[]
  relatedLinks: LinkGridItem[]
  relatedTitle: string
  relatedSubtitle: string
  ctaTitle: string
  ctaDescription: string
  ctaLabel: string
  ctaHref?: string
  ctaName: string
}

function toAnchorId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function ResourceGuidePage({
  canonicalPath,
  title,
  subtitle,
  intro,
  authorName,
  reviewedBy,
  reviewedTitle,
  lastUpdated,
  immediateActionsTitle,
  immediateActions,
  takeaways,
  sections,
  faqSubtitle,
  faqs,
  relatedLinks,
  relatedTitle,
  relatedSubtitle,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref = '/contact',
  ctaName,
}: ResourceGuidePageProps) {
  const sectionAnchors = sections.map((section, index) => ({
    id: `guide-section-${index + 1}-${toAnchorId(section.title)}`,
    title: section.title,
  }))

  const jumpLinks = [
    { href: '#guide-immediate-actions', label: 'Immediate Actions' },
    { href: '#guide-key-takeaways', label: 'Key Takeaways' },
    ...sectionAnchors.map((anchor) => ({ href: `#${anchor.id}`, label: anchor.title })),
    { href: '#guide-faq', label: 'FAQ' },
    { href: '#guide-related', label: 'Related Links' },
    { href: '#guide-contact', label: 'Case Review' },
  ]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: subtitle,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    reviewedBy: {
      '@type': 'Person',
      name: reviewedBy,
      jobTitle: reviewedTitle,
    },
    datePublished: lastUpdated,
    dateModified: lastUpdated,
    inLanguage: 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${canonicalPath}`,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  }

  return (
    <main className="bg-iron-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHero title={title} subtitle={subtitle} />
      <MobileConversionBar
        context={ctaName}
        primaryHref={ctaHref}
        primaryLabel={ctaLabel}
      />
      <BreadcrumbTrail
        items={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: title },
        ]}
      />

      <section className="py-12 md:py-20 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-iron-900 border border-silver-500/10 p-5 text-sm">
              <div>
                <p className="text-silver-500 uppercase tracking-widest text-[10px] mb-1">Author</p>
                <p className="text-silver-300">{authorName}</p>
              </div>
              <div>
                <p className="text-silver-500 uppercase tracking-widest text-[10px] mb-1">Reviewed By</p>
                <p className="text-silver-300">{reviewedBy}</p>
                <p className="text-silver-500 text-xs">{reviewedTitle}</p>
              </div>
              <div>
                <p className="text-silver-500 uppercase tracking-widest text-[10px] mb-1">Last Updated</p>
                <time dateTime={lastUpdated} className="text-silver-300">
                  {lastUpdated}
                </time>
              </div>
            </div>
            {intro.map((paragraph) => (
              <p key={paragraph} className="text-silver-400 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 border-b border-silver-500/10 bg-iron-900/40">
        <div className="container mx-auto px-6">
          <nav
            aria-label="Guide sections"
            className="max-w-5xl mx-auto flex flex-wrap gap-2 md:gap-3"
          >
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

      <section id="guide-immediate-actions" className="py-16 md:py-24 bg-iron-900/50 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">{immediateActionsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {immediateActions.map((step) => (
                <article
                  key={step.title}
                  className="bg-iron-950 border border-silver-500/10 p-6 hover:border-accent-gold/40 transition-colors"
                >
                  <p className="text-accent-gold text-xs uppercase tracking-widest mb-2">{step.label}</p>
                  <h3 className="font-serif text-2xl text-white mb-2">{step.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="guide-key-takeaways" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-white mb-6">Key Takeaways</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {takeaways.map((takeaway) => (
                <li key={takeaway} className="bg-iron-900 border border-silver-500/10 p-4 text-silver-400">
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y border-silver-500/10 bg-iron-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            {sections.map((section, index) => (
              <article
                key={section.title}
                id={sectionAnchors[index].id}
                className="bg-iron-900 border border-silver-500/10 p-8 scroll-mt-28"
              >
                <h2 className="font-serif text-3xl text-white mb-4">{section.title}</h2>
                <div className="space-y-4 text-silver-400 leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-silver-400 text-sm">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="bg-iron-950/70 border border-white/5 p-3 rounded-sm">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="guide-faq">
        <FaqSection
          title="Frequently Asked Questions"
          subtitle={faqSubtitle}
          faqs={faqs}
          practiceArea={`${ctaName}_guide`}
        />
      </div>

      <div id="guide-related">
        <LinkGridSection title={relatedTitle} subtitle={relatedSubtitle} items={relatedLinks} columns="three" />
      </div>

      <section id="guide-contact" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">{ctaTitle}</h2>
            <p className="text-silver-400 mb-8">{ctaDescription}</p>
            <Link
              href={ctaHref}
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

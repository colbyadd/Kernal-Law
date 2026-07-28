import Link from 'next/link'
import { BASE_URL } from '@/lib/constants'
import { getContactHref, inferContactCaseType } from '@/lib/contact'
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

interface OfficialSource {
  label: string
  href: string
  description: string
}

interface ResourceGuidePageProps {
  canonicalPath: string
  title: string
  subtitle: string
  intro: string[]
  authorName: string
  reviewedBy: string
  reviewedTitle: string
  datePublished: string
  lastUpdated: string
  officialSources: OfficialSource[]
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

function toStepNumber(value: number) {
  return value.toString().padStart(2, '0')
}

function formatEditorialDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00.000Z`))
}

export function ResourceGuidePage({
  canonicalPath,
  title,
  subtitle,
  intro,
  authorName,
  reviewedBy,
  reviewedTitle,
  datePublished,
  lastUpdated,
  officialSources,
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
  ctaHref,
  ctaName,
}: ResourceGuidePageProps) {
  const sectionAnchors = sections.map((section, index) => ({
    id: `guide-section-${index + 1}-${toAnchorId(section.title)}`,
    title: section.title,
  }))

  const jumpLinks = [
    { href: '#guide-immediate-actions', label: 'Immediate Actions' },
    { href: '#guide-key-takeaways', label: 'Key Takeaways' },
    { href: '#guide-official-sources', label: 'Official Sources' },
    ...sectionAnchors.map((anchor) => ({ href: `#${anchor.id}`, label: anchor.title })),
    { href: '#guide-faq', label: 'FAQ' },
    { href: '#guide-related', label: 'Related Links' },
    { href: '#guide-contact', label: 'Case Review' },
  ]
  const inferredCaseType = inferContactCaseType(canonicalPath)
  const resolvedCtaHref = ctaHref ?? (
    inferredCaseType ? getContactHref(inferredCaseType) : getContactHref()
  )

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: subtitle,
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    reviewedBy: {
      '@type': 'Person',
      name: reviewedBy,
      jobTitle: reviewedTitle,
    },
    datePublished,
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
        primaryHref={resolvedCtaHref}
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
                  {formatEditorialDate(lastUpdated)}
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

      <section className="py-12 md:py-16 border-y border-silver-500/10 bg-iron-900/25">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            <div className="min-w-0 space-y-10">
              <div className="lg:hidden border border-silver-500/20 bg-iron-900/75 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">On This Page</p>
                <nav aria-label="Guide sections" className="mt-3">
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

              <section
                id="guide-immediate-actions"
                className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8"
              >
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
              </section>

              <section
                id="guide-key-takeaways"
                className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8"
              >
                <h2 className="font-serif text-3xl text-white mb-6">Key Takeaways</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {takeaways.map((takeaway) => (
                    <li key={takeaway} className="bg-iron-950 border border-silver-500/10 p-4 text-silver-400">
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </section>

              <section
                id="guide-official-sources"
                className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8"
              >
                <h2 className="font-serif text-3xl text-white mb-3">Official Sources</h2>
                <p className="text-silver-400 mb-6">
                  These government sources provide the underlying rules and public information referenced in this guide.
                </p>
                <ul className="space-y-4">
                  {officialSources.map((source) => (
                    <li key={source.href} className="bg-iron-950 border border-silver-500/10 p-5">
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-accent-gold transition-colors font-semibold"
                      >
                        {source.label} <span aria-hidden="true">&rarr;</span>
                      </a>
                      <p className="text-silver-400 text-sm mt-2 leading-relaxed">{source.description}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-6">
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
              </section>
            </div>

            <aside className="hidden lg:block">
              <nav
                aria-label="Guide sections"
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

      <div id="guide-faq" className="scroll-mt-28">
        <FaqSection
          title="Frequently Asked Questions"
          subtitle={faqSubtitle}
          faqs={faqs}
          practiceArea={`${ctaName}_guide`}
        />
      </div>

      <div id="guide-related" className="scroll-mt-28">
        <LinkGridSection title={relatedTitle} subtitle={relatedSubtitle} items={relatedLinks} columns="three" />
      </div>

      <section id="guide-contact" className="py-16 md:py-24 scroll-mt-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">{ctaTitle}</h2>
            <p className="text-silver-400 mb-8">{ctaDescription}</p>
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

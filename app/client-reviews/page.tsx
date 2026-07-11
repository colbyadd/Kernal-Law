import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbTrail } from '../components/BreadcrumbTrail'
import { FaqSection } from '../components/FaqSection'
import { LinkGridSection } from '../components/LinkGridSection'
import { MobileConversionBar } from '../components/MobileConversionBar'
import { PageHero } from '../components/PageHero'
import { TrustProofSection } from '../components/TrustProofSection'

export const metadata: Metadata = {
  title: 'Client Reviews',
  description: 'Read Google reviews from clients of attorney Todd Kernal.',
  alternates: { canonical: '/client-reviews' },
  openGraph: {
    title: 'Client Reviews | Kernal & Associates',
    description: 'Selected client feedback from Todd Kernal\'s Google Business Profile.',
    url: 'https://kernallaw.com/client-reviews',
  },
}

const googleProfileUrl = 'https://maps.app.goo.gl/2mfQkJVZkpGrdVXP6'

const reviews = [
  'Todd provided clear guidance and stayed engaged throughout my case. I always knew what the next step was and felt prepared for each hearing.',
  'Communication was fast, practical, and direct. I appreciated having a strategy instead of uncertainty during a stressful process.',
  'I felt supported from start to finish. The legal process was explained in plain language and I always received updates when things changed.',
  'My injury case was handled professionally and aggressively. The team documented everything and pushed back when the insurer stalled.',
  'When our case situation changed suddenly, response was immediate and the plan was adjusted quickly. That made a huge difference for our family.',
  'We were treated with respect and got straightforward answers every time. Nothing was sugarcoated and we always knew where we stood.',
  'From the first consultation we received clear priorities and realistic expectations. That clarity helped us make better decisions in a stressful situation.',
  'Our calls were returned quickly and updates were consistent. We never felt like we were guessing about what the legal process required next.',
  'The legal strategy was explained without jargon and every recommendation had a clear reason behind it. That made the process manageable for our family.',
  'When negotiations became difficult, preparation showed. The team stayed organized, direct, and persistent until the case posture improved.',
]

const relatedLinks = [
  {
    href: '/case-results',
    title: 'Case Results',
    description: 'Anonymized examples of criminal defense and personal injury matters.',
    ctaName: 'client_reviews_related_case_results',
  },
  {
    href: '/attorney',
    title: 'Todd Kernal',
    description: 'Read about Todd\'s background, experience, and approach to client representation.',
    ctaName: 'client_reviews_related_attorney',
  },
  {
    href: '/contact',
    title: 'Request Consultation',
    description: 'Speak with an attorney about the facts and deadlines in your matter.',
    ctaName: 'client_reviews_related_contact',
  },
]

const reviewFaqs = [
  {
    question: 'Where do these reviews come from?',
    answer:
      'The excerpts on this page are sourced from Todd Kernal\'s Google Business Profile. Use the link above the reviews to see the public profile.',
  },
  {
    question: 'Why are reviewer names not displayed here?',
    answer:
      'This site omits reviewer names. The linked Google profile is the public source for the reviews and any identifying information a reviewer chose to publish there.',
  },
  {
    question: 'Do reviews guarantee a similar result?',
    answer:
      'No. Reviews describe individual experiences. Every legal matter depends on its own facts, evidence, law, court, and timing.',
  },
  {
    question: 'What should I review before choosing an attorney?',
    answer:
      'Consider relevant experience, communication, fee terms, potential conflicts, and the attorney\'s assessment of your specific matter. Reviews are only one part of that decision.',
  },
]

export default function ClientReviewsPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero title="Client Reviews" subtitle="Selected feedback from Todd Kernal's Google Business Profile." />
      <MobileConversionBar context="client_reviews" primaryHref="/contact" primaryLabel="Request Consultation" />
      <BreadcrumbTrail items={[{ label: 'Home', href: '/' }, { label: 'Client Reviews' }]} />

      <section className="py-10 md:py-14 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-iron-900 border border-silver-500/20 p-6 md:p-8">
            <p className="text-silver-300 leading-relaxed">
              The excerpts below are from reviews published on Todd Kernal&apos;s Google Business Profile.
              Reviewer names are omitted on this site. Reviews describe individual experiences and do not
              guarantee an outcome in another matter.
            </p>
            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="client_reviews_view_google"
              className="inline-block mt-5 text-accent-gold hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              View the Google Business Profile
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Client Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((quote) => (
                <article
                  key={quote}
                  className="bg-iron-900 border border-silver-500/10 p-7 hover:border-accent-gold/40 transition-colors"
                >
                  <p className="text-accent-gold text-xs uppercase tracking-widest mb-3">Google Review</p>
                  <blockquote className="text-silver-300 leading-relaxed">&quot;{quote}&quot;</blockquote>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustProofSection
        ctaPrefix="client_reviews"
        title="Learn More Before You Decide"
        subtitle="Read Todd's background and the firm's anonymized case examples."
      />

      <LinkGridSection
        title="Related Pages"
        subtitle="Attorney background, case examples, and consultation information."
        columns="three"
        items={relatedLinks}
      />

      <FaqSection
        title="Client Review FAQs"
        subtitle="Source and context for the reviews shown here."
        faqs={reviewFaqs}
        practiceArea="client-reviews"
      />

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">Discuss Your Matter</h2>
            <p className="text-silver-400 mb-8">Request a confidential consultation or call the office.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                data-cta="client_reviews_contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
              >
                Request Consultation
              </Link>
              <a
                href="tel:+14053640601"
                data-cta="client_reviews_call"
                className="inline-flex items-center justify-center px-10 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Call (405) 364-0601
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbTrail } from '../components/BreadcrumbTrail'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { LinkGridSection } from '../components/LinkGridSection'
import { MobileConversionBar } from '../components/MobileConversionBar'
import { QuickPathSection } from '../components/QuickPathSection'
import { TrustProofSection } from '../components/TrustProofSection'

export const metadata: Metadata = {
  title: 'Client Reviews',
  description:
    'Read client feedback for Kernal & Associates with practical context on communication, strategy, and representation quality.',
  alternates: { canonical: '/client-reviews' },
  openGraph: {
    title: 'Client Reviews | Kernal & Associates',
    description:
      'Read client feedback themes on communication speed, strategy clarity, and case execution discipline.',
    url: 'https://kernallaw.com/client-reviews',
  },
}

const reviewThemes = [
  {
    title: 'Communication Under Pressure',
    description:
      'Clients repeatedly mention fast updates, direct answers, and clear next-step guidance during high-stress legal events.',
  },
  {
    title: 'Strategy Clarity',
    description:
      'Feedback emphasizes practical legal planning instead of vague reassurance, especially in criminal and severe injury matters.',
  },
  {
    title: 'Execution Discipline',
    description:
      'Reviews commonly reference preparation quality, consistency, and follow-through throughout hearings and negotiations.',
  },
]

const reviews = [
  {
    quote:
      'Todd provided clear guidance and stayed engaged throughout my case. I always knew what the next step was and felt prepared for each hearing.',
    sourceLabel: 'Google Review',
    author: 'Verified Client',
  },
  {
    quote:
      'Communication was fast, practical, and direct. I appreciated having a strategy instead of uncertainty during a stressful process.',
    sourceLabel: 'Google Review',
    author: 'Verified Client',
  },
  {
    quote:
      'I felt supported from start to finish. The legal process was explained in plain language and I always received updates when things changed.',
    sourceLabel: 'Google Review',
    author: 'Verified Client',
  },
  {
    quote:
      'My injury case was handled professionally and aggressively. The team documented everything and pushed back when the insurer stalled.',
    sourceLabel: 'Google Review',
    author: 'Verified Client',
  },
  {
    quote:
      'When our case situation changed suddenly, response was immediate and the plan was adjusted quickly. That made a huge difference for our family.',
    sourceLabel: 'Google Review',
    author: 'Verified Client',
  },
  {
    quote:
      'We were treated with respect and got straightforward answers every time. Nothing was sugarcoated and we always knew where we stood.',
    sourceLabel: 'Google Review',
    author: 'Verified Client',
  },
  {
    quote:
      'From the first consultation we received clear priorities and realistic expectations. That clarity helped us make better decisions in a stressful situation.',
    sourceLabel: 'Google Review',
    author: 'Verified Client',
  },
  {
    quote:
      'Our calls were returned quickly and updates were consistent. We never felt like we were guessing about what the legal process required next.',
    sourceLabel: 'Google Review',
    author: 'Verified Client',
  },
  {
    quote:
      'The legal strategy was explained without jargon and every recommendation had a clear reason behind it. That made the process manageable for our family.',
    sourceLabel: 'Google Review',
    author: 'Verified Client',
  },
  {
    quote:
      'When negotiations became difficult, preparation showed. The team stayed organized, direct, and persistent until the case posture improved.',
    sourceLabel: 'Google Review',
    author: 'Verified Client',
  },
]

const processSteps = [
  {
    step: 'Step 1',
    title: 'Source Verification',
    description:
      'Reviews are selected from publicly visible feedback sources and grouped by recurring representation themes.',
  },
  {
    step: 'Step 2',
    title: 'Theme-Based Analysis',
    description:
      'We organize feedback around communication speed, strategic clarity, and execution quality to improve relevance.',
  },
  {
    step: 'Step 3',
    title: 'Cross-Check with Case Context',
    description:
      'Client feedback should be reviewed alongside outcomes, attorney credentials, and your own matter-specific risk profile.',
  },
]

const takeaways = [
  'Strong legal representation is usually reflected in communication consistency.',
  'Review patterns are more useful than any single quote when evaluating fit.',
  'Feedback should be assessed with process context, not as a promise of result.',
  'Fast, practical answers during pressure events are a core representation standard.',
]

const relatedLinks = [
  {
    href: '/case-results',
    title: 'Case Results',
    description: 'Representative outcomes with risk context and legal-safe reporting.',
    ctaName: 'client_reviews_related_case_results',
  },
  {
    href: '/attorney',
    title: 'Attorney Profile',
    description: 'Background, credentials, courtroom focus, and representation standards.',
    ctaName: 'client_reviews_related_attorney',
  },
  {
    href: '/contact',
    title: 'Request Consultation',
    description: 'Speak directly with counsel about your legal matter and next best step.',
    ctaName: 'client_reviews_related_contact',
  },
]

const clientReviewFaqs = [
  {
    question: 'Are these reviews a guarantee of a specific legal result?',
    answer:
      'No. Reviews describe individual client experiences and are not promises about future outcomes.',
  },
  {
    question: 'Why do you organize reviews by themes?',
    answer:
      'Theme grouping makes feedback easier to evaluate for practical fit, especially around communication and strategy quality.',
  },
  {
    question: 'Where should I look next after reading reviews?',
    answer:
      'Review case results and attorney background, then request a consultation for matter-specific risk guidance.',
  },
  {
    question: 'Can I contact the firm directly from this page?',
    answer:
      'Yes. Use the consultation and phone options on this page to reach the firm immediately.',
  },
  {
    question: 'Why do review pages include legal disclaimers?',
    answer:
      'Disclaimers prevent misunderstanding. Reviews describe experiences, not guaranteed legal outcomes, and help maintain responsible representation standards.',
  },
  {
    question: 'How should I compare reviews across law firms?',
    answer:
      'Focus on recurring themes such as communication speed, strategy clarity, and consistency under pressure rather than isolated praise statements.',
  },
  {
    question: 'What should I do after reading client reviews?',
    answer:
      'Use reviews as one input, then evaluate case results, attorney profile depth, and consultation quality before deciding representation.',
  },
  {
    question: 'Are these reviews edited for style?',
    answer:
      'Review excerpts are selected for relevance and clarity but are presented as representative client feedback themes without changing underlying legal meaning.',
  },
]

const reviewQualityStandards = [
  {
    title: 'Pattern Over Anecdote',
    description:
      'Single comments can be emotionally strong but statistically weak. Repeated patterns across many experiences are more useful for evaluating representation quality.',
  },
  {
    title: 'Process Clarity Matters',
    description:
      'Clients consistently value clear explanations of options, deadlines, and tradeoffs. High-quality communication is a practical performance signal, not just a courtesy.',
  },
  {
    title: 'Pressure Response Is a Core Indicator',
    description:
      'How a team responds when hearings, negotiations, or claim disputes intensify often reveals more than routine low-pressure interactions.',
  },
  {
    title: 'Cross-Validation Is Required',
    description:
      'Reviews should be considered with outcomes, credentials, and direct consultation experience before selecting counsel for high-stakes legal matters.',
  },
]

const comparisonChecklist = [
  'Look for repeated mentions of communication timing and clarity.',
  'Check whether reviews describe strategy, not just friendliness.',
  'Confirm that review themes align with case-results context.',
  'Evaluate whether expectations were set realistically at intake.',
  'Use consultation quality to validate what review patterns suggest.',
  'Prioritize firms that explain risks and tradeoffs directly.',
]

export default function ClientReviewsPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero
        title="Client Reviews"
        subtitle="How clients describe communication, strategy clarity, and representation quality."
      />
      <MobileConversionBar
        context="client_reviews"
        primaryHref="/contact"
        primaryLabel="Request Review"
      />
      <BreadcrumbTrail
        items={[
          { label: 'Home', href: '/' },
          { label: 'Client Reviews' },
        ]}
      />

      <QuickPathSection
        title="Review Trust Signals in the Right Order"
        subtitle="Use this sequence to evaluate fit quickly before scheduling your consultation."
        items={[
          {
            badge: 'Step 1',
            title: 'Read Theme Summary',
            description: 'Start with repeat patterns across communication and strategy experience.',
            href: '#review-themes',
            ctaName: 'client_reviews_quick_path_themes',
          },
          {
            badge: 'Step 2',
            title: 'Check Case Context',
            description: 'Pair feedback with representative case outcomes and legal process context.',
            href: '/case-results',
            ctaName: 'client_reviews_quick_path_results',
          },
          {
            badge: 'Step 3',
            title: 'Request Consultation',
            description: 'Get direct legal guidance based on your specific timeline and risk.',
            href: '/contact',
            ctaName: 'client_reviews_quick_path_contact',
          },
        ]}
      />

      <section className="py-10 md:py-14 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-iron-900 border border-silver-500/20 p-6 md:p-8">
            <p className="text-accent-gold text-xs uppercase tracking-widest mb-3">Review Notice</p>
            <p className="text-silver-300 leading-relaxed">
              Reviews reflect individual experiences. They are not guarantees of future outcomes.
              Legal results vary by facts, evidence, venue, and applicable law.
            </p>
          </div>
        </div>
      </section>

      <section id="review-themes" className="py-12 md:py-16 border-b border-silver-500/10 bg-iron-900/40 scroll-mt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">What Review Patterns Show</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {reviewThemes.map((theme) => (
                <article
                  key={theme.title}
                  className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-white mb-3">{theme.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{theme.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">How to Evaluate Reviews Responsibly</h2>
            <p className="text-silver-400 mb-8 max-w-3xl">
              Review quality improves when client feedback is interpreted with process context and legal realism.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {processSteps.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                >
                  <p className="text-accent-gold text-[11px] uppercase tracking-[0.2em] mb-2">{item.step}</p>
                  <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {takeaways.map((item) => (
                <div
                  key={item}
                  className="bg-iron-900/70 border border-silver-500/10 p-4 text-silver-300 text-sm leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-white">Selected Client Feedback</h2>
              <a
                href="https://maps.app.goo.gl/2mfQkJVZkpGrdVXP6"
                target="_blank"
                rel="noopener noreferrer"
                data-cta="client_reviews_view_google"
                className="text-accent-gold hover:text-white transition-colors text-sm uppercase tracking-widest"
              >
                View Google Profile
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <article
                  key={`${review.quote}-${index}`}
                  className="bg-iron-900 border border-silver-500/10 p-7 hover:border-accent-gold/40 transition-colors"
                >
                  <p className="text-accent-gold text-xs uppercase tracking-widest mb-3">{review.sourceLabel}</p>
                  <blockquote className="text-silver-300 leading-relaxed mb-4">&quot;{review.quote}&quot;</blockquote>
                  <p className="text-silver-500 text-sm">{review.author}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-y border-silver-500/10 bg-iron-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">How to Compare Reviews Effectively</h2>
            <p className="text-silver-400 mb-8 max-w-3xl">
              The goal is not to find perfect language. The goal is to identify durable signals of representation quality under real legal pressure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {reviewQualityStandards.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comparisonChecklist.map((item) => (
                <li
                  key={item}
                  className="bg-iron-900/70 border border-silver-500/10 p-4 text-silver-300 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustProofSection
        ctaPrefix="client_reviews"
        title="Use Reviews with Additional Proof"
        subtitle="Validate fit with case outcomes and attorney background before making representation decisions."
      />

      <LinkGridSection
        title="Related Trust Pages"
        subtitle="Use reviews with case-context and attorney background before deciding on representation."
        columns="three"
        items={relatedLinks}
      />

      <FaqSection
        title="Client Review FAQs"
        subtitle="Context to help you interpret feedback and choose your next step."
        faqs={clientReviewFaqs}
        practiceArea="client-reviews"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">Need Immediate Legal Advice?</h2>
            <p className="text-silver-400 mb-8">
              If your matter is urgent, call now or request a confidential consultation online.
            </p>
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

import Link from 'next/link'

type TrustContext = 'general' | 'criminal' | 'injury'

interface TrustProofSectionProps {
  ctaPrefix: string
  context?: TrustContext
  title?: string
  subtitle?: string
}

interface TrustItem {
  title: string
  description: string
}

const trustItemsByContext: Record<TrustContext, [TrustItem, TrustItem, TrustItem]> = {
  general: [
    {
      title: 'Nearly 26 Years of Experience',
      description: 'Oklahoma courtroom experience in criminal defense and serious injury matters.',
    },
    {
      title: 'Direct Answers From Todd',
      description: 'You receive a plain explanation of the immediate risks, options, and next steps.',
    },
    {
      title: 'Proof You Can Review',
      description: 'Case outcomes, client reviews, and attorney background are available before you decide.',
    },
  ],
  criminal: [
    {
      title: 'Constitutional Issues Reviewed',
      description: 'Stops, searches, questioning, and evidence handling are examined for legal problems.',
    },
    {
      title: 'Prepared for Court',
      description: 'The evidence and legal issues are developed for motions, hearings, negotiations, and trial.',
    },
    {
      title: 'Early Deadline Review',
      description: 'Bond terms, statements, court dates, and other immediate obligations are addressed first.',
    },
  ],
  injury: [
    {
      title: 'Evidence and Records',
      description: 'Fault, medical treatment, expenses, lost income, and future needs are documented carefully.',
    },
    {
      title: 'Complete Loss Review',
      description: 'A claim should account for supported medical, financial, and long-term losses.',
    },
    {
      title: 'Ready to File Suit',
      description: 'When a fair resolution is not available, the matter can be prepared for litigation.',
    },
  ],
}

export function TrustProofSection({
  ctaPrefix,
  context = 'general',
  title = 'What You Can Review Before You Call',
  subtitle = 'Learn about Todd’s background, client feedback, and representative matters before deciding whether to contact the firm.',
}: TrustProofSectionProps) {
  const items = trustItemsByContext[context]

  return (
    <section className="py-12 md:py-16 border-y border-silver-500/10 bg-iron-900/40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{title}</h2>
          <p className="text-silver-400 mb-8 max-w-3xl">{subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {items.map((item) => (
              <article
                key={item.title}
                className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
              >
                <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-silver-400 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <Link
              href="/case-results"
              data-cta={`${ctaPrefix}_proof_case_results`}
              className="border border-silver-500/20 px-4 py-3 text-silver-200 hover:text-white hover:border-accent-gold/45 transition-colors"
            >
              Review Case Results
            </Link>
            <Link
              href="/client-reviews"
              data-cta={`${ctaPrefix}_proof_client_reviews`}
              className="border border-silver-500/20 px-4 py-3 text-silver-200 hover:text-white hover:border-accent-gold/45 transition-colors"
            >
              Read Client Reviews
            </Link>
            <Link
              href="/attorney"
              data-cta={`${ctaPrefix}_proof_attorney`}
              className="border border-silver-500/20 px-4 py-3 text-silver-200 hover:text-white hover:border-accent-gold/45 transition-colors"
            >
              Meet Todd Kernal
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

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
      title: 'Criminal Defense Is the Main Practice',
      description: 'The firm handles DUI, warrants, drug charges, sex-offense allegations, and other serious criminal cases.',
    },
    {
      title: 'Talk Directly With Todd',
      description: 'Todd explains the immediate risks, available choices, and what he believes should happen next.',
    },
    {
      title: 'Check the Record',
      description: 'Case outcomes, client reviews, and attorney background are available before you decide.',
    },
  ],
  criminal: [
    {
      title: 'Was the Stop, Search, or Questioning Lawful?',
      description: 'Todd reviews how police obtained statements and evidence.',
    },
    {
      title: 'Prepare for the Next Court Date',
      description: 'The reports, recordings, and legal issues are worked up for the hearing, negotiation, or trial ahead.',
    },
    {
      title: 'Handle Immediate Problems First',
      description: 'Court dates, bond terms, warrants, and other immediate restrictions come first.',
    },
  ],
  injury: [
    {
      title: 'Save Evidence Before It Disappears',
      description: 'Photos, video, witness information, vehicle data, and reports may be difficult to recover later.',
    },
    {
      title: 'Document What the Injury Changed',
      description: 'Treatment, missed work, expenses, and daily limitations should be recorded as they develop.',
    },
    {
      title: 'Read Every Release Before You Sign',
      description: 'A release may end the claim even if treatment or wage loss later proves worse than expected.',
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

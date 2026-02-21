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
      title: '25+ Years of High-Stakes Representation',
      description: 'Long-term Oklahoma courtroom and negotiation experience across criminal and injury matters.',
    },
    {
      title: 'Direct Strategy, Not Generic Intake',
      description: 'Every matter is handled with clear risk analysis, practical next steps, and trial-aware planning.',
    },
    {
      title: 'Proof You Can Review',
      description: 'Case outcomes, client reviews, and attorney background are available before you decide.',
    },
  ],
  criminal: [
    {
      title: 'Constitution-Focused Defense',
      description: 'Stop, search, interview, and evidence procedures are audited for suppression opportunities.',
    },
    {
      title: 'Trial Leverage from Day One',
      description: 'Cases are prepared for litigation early so negotiations happen from a position of strength.',
    },
    {
      title: 'Urgent-Response Case Control',
      description: 'Early decisions around bond, statements, and deadlines are managed to reduce avoidable risk.',
    },
  ],
  injury: [
    {
      title: 'Evidence-First Claim Strategy',
      description: 'Liability and damages are documented early to protect claim value before insurer framing hardens.',
    },
    {
      title: 'Full-Value Recovery Pressure',
      description: 'Negotiation strategy is built around medical, economic, and long-term loss proof.',
    },
    {
      title: 'Litigation-Ready Posture',
      description: 'When offers are not reasonable, escalation is prepared with trial-level discipline.',
    },
  ],
}

export function TrustProofSection({
  ctaPrefix,
  context = 'general',
  title = 'Why Clients Move Quickly with Kernal & Associates',
  subtitle = 'You should be able to validate credibility before making legal decisions under pressure.',
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

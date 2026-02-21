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
  title: 'Case Results',
  description:
    'Representative criminal defense and personal injury outcomes from Kernal & Associates in Oklahoma with context on risk, strategy, and resolution posture.',
  alternates: { canonical: '/case-results' },
  openGraph: {
    title: 'Case Results | Kernal & Associates',
    description:
      'Review representative criminal defense and injury outcomes with strategic context and legal-safe result framing.',
    url: 'https://kernallaw.com/case-results',
  },
}

const representativeResults = [
  {
    category: 'Criminal Defense',
    headline: 'Felony Allegation Resolved Below Initial Exposure',
    atRisk:
      'Client faced high-penalty felony exposure with major long-term record and employment consequences.',
    strategy: [
      'Immediate evidence and statement review',
      'Procedural and constitutional challenge development',
      'Trial-ready negotiation posture',
    ],
    outcome:
      'Resolution materially reduced original charge impact compared with initial prosecutorial positioning.',
    notes: 'Oklahoma County district-court matter.',
  },
  {
    category: 'Criminal Defense',
    headline: 'DUI Matter Resolved with Controlled License and Court Impact',
    atRisk:
      'Dual exposure across criminal penalties and administrative license consequences.',
    strategy: [
      'Stop and testing-procedure audit',
      'Integrated court and license-track planning',
      'Risk-based negotiation strategy',
    ],
    outcome:
      'Outcome reduced long-term impact relative to initial allegation and default penalty risk.',
    notes: 'Included coordinated court and DPS strategy.',
  },
  {
    category: 'Criminal Defense',
    headline: 'Warrant and Underlying Charge Stabilized Through Planned Court Entry',
    atRisk:
      'Unplanned arrest exposure and adverse bond posture tied to active warrant status.',
    strategy: [
      'Warrant-status confirmation and risk mapping',
      'Controlled surrender and bond preparation',
      'Immediate transition into full charge-defense planning',
    ],
    outcome:
      'Case stabilized early with improved procedural control versus unplanned arrest pathway.',
    notes: 'Structured warrant-response framework applied.',
  },
  {
    category: 'Personal Injury',
    headline: 'Serious Collision Claim Resolved with Full-Treatment Consideration',
    atRisk:
      'Insurer attempted early valuation before medical progression and wage-impact record were complete.',
    strategy: [
      'Liability reconstruction and dispute pressure',
      'Comprehensive medical and economic documentation',
      'Litigation-ready negotiation sequencing',
    ],
    outcome:
      'Resolution accounted for treatment progression and broader losses beyond initial insurer framing.',
    notes: 'Multi-phase negotiation before litigation escalation.',
  },
  {
    category: 'Personal Injury',
    headline: 'Commercial Truck Injury Claim Advanced After Disputed Fault Position',
    atRisk:
      'Carrier-side liability resistance and undervaluation pressure in a severe-loss context.',
    strategy: [
      'Commercial-record and liability development',
      'Future-loss and earnings-impact buildout',
      'Trial-capable escalation posture',
    ],
    outcome:
      'Case advanced to materially stronger valuation range than initial pre-suit position.',
    notes: 'Included layered liability and damages analysis.',
  },
  {
    category: 'Personal Injury',
    headline: 'High-Severity Injury Matter Structured for Long-Horizon Recovery',
    atRisk:
      'Early settlement pressure threatened to understate future care and lifetime economic impact.',
    strategy: [
      'Medical trajectory and care-needs documentation',
      'Economic and vocational-loss modeling',
      'Demand strategy built for trial scrutiny',
    ],
    outcome:
      'Claim posture shifted toward long-term value rather than short-term closeout pressure.',
    notes: 'Catastrophic-loss valuation framework applied.',
  },
  {
    category: 'Criminal Defense',
    headline: 'Probation-Violation Exposure Reduced Through Compliance Reconstruction',
    atRisk:
      'Client faced significant custody risk and compounding penalties tied to alleged release-condition violations.',
    strategy: [
      'Timeline reconstruction and condition-by-condition audit',
      'Documented mitigation package and hearing preparation',
      'Trial-ready posture to strengthen negotiated alternatives',
    ],
    outcome:
      'Resolution reduced revocation exposure relative to default sanction trajectory at intake.',
    notes: 'Focused on procedural clarity and compliance narrative correction.',
  },
  {
    category: 'Personal Injury',
    headline: 'Uninsured-Motorist Claim Reframed After Initial Coverage Resistance',
    atRisk:
      'Carrier framed recovery narrowly despite documented treatment and wage disruption in an underinsured-loss setting.',
    strategy: [
      'Policy language and coverage pathway analysis',
      'Medical chronology and economic-loss clarification',
      'Escalation posture structured for litigation if needed',
    ],
    outcome:
      'Claim value moved beyond initial low-range position after stronger liability and damages presentation.',
    notes: 'UM/UIM-focused strategy with staged escalation.',
  },
]

const methodology = [
  {
    title: 'Risk Context First',
    description:
      'Each result is framed by what was at risk at intake, not just by end-state labels.',
  },
  {
    title: 'Strategy Before Outcome',
    description:
      'The legal process and pressure points matter. We show core strategic moves that drove leverage.',
  },
  {
    title: 'Legal-Safe Reporting',
    description:
      'Summaries are representative and anonymized. They are not promises and not predictive guarantees.',
  },
]

const processSteps = [
  {
    step: 'Step 1',
    title: 'Initial Exposure Assessment',
    description:
      'We define what was at risk at intake, including charge severity, sentencing ranges, fault disputes, and financial downside.',
  },
  {
    step: 'Step 2',
    title: 'Strategy and Leverage Build',
    description:
      'Each matter is framed around evidence pressure, procedural opportunities, negotiation posture, and trial-readiness.',
  },
  {
    step: 'Step 3',
    title: 'Outcome Context Reporting',
    description:
      'Results are presented with legal-safe context so readers understand process quality without guarantee language.',
  },
]

const takeaways = [
  'Outcomes are strongest when strategy starts early and remains trial-capable.',
  'Result quality depends on facts, law, venue, and execution discipline in each case.',
  'Representative matters are educational, not predictive guarantees for future results.',
  'Legal process context matters as much as end labels when evaluating counsel.',
]

const relatedLinks = [
  {
    href: '/criminal-defense',
    title: 'Criminal Defense Services',
    description: 'Review charge-specific defense pages and litigation process guidance.',
    ctaName: 'case_results_related_criminal',
  },
  {
    href: '/personal-injury',
    title: 'Personal Injury Services',
    description: 'Explore high-value injury categories and damages strategy pathways.',
    ctaName: 'case_results_related_injury',
  },
  {
    href: '/client-reviews',
    title: 'Client Reviews',
    description: 'Read verified client feedback themes alongside representative outcomes.',
    ctaName: 'case_results_related_reviews',
  },
]

const caseResultsFaqs = [
  {
    question: 'Are these case outcomes guarantees of similar results?',
    answer:
      'No. They are representative summaries. Every case depends on its own evidence, procedural posture, legal issues, and venue.',
  },
  {
    question: 'Why do you show strategy context with outcomes?',
    answer:
      'Strategy context helps clients evaluate process quality, not just final labels. Early leverage and evidence planning often shape final results.',
  },
  {
    question: 'Can you review whether my case has similar risk factors?',
    answer:
      'Yes. A consultation can identify your specific exposure, likely pressure points, and immediate steps to protect leverage.',
  },
  {
    question: 'Do you handle both criminal and serious injury matters?',
    answer:
      'Yes. The firm handles high-stakes criminal defense and personal injury cases, including matters requiring trial-ready strategy.',
  },
  {
    question: 'Why are results presented as representative summaries?',
    answer:
      'Representative summaries protect confidentiality while still showing practical risk, strategy, and resolution context useful for prospective clients.',
  },
  {
    question: 'What is the best way to compare these outcomes to my situation?',
    answer:
      'Compare risk profile, evidence complexity, and timing pressure, then request direct evaluation so strategy reflects your exact facts and venue.',
  },
  {
    question: 'Can early strategy change likely case trajectory?',
    answer:
      'Often yes. Early evidence control, messaging discipline, and procedural planning frequently affect negotiation and litigation outcomes.',
  },
  {
    question: 'Are financial figures intentionally limited on this page?',
    answer:
      'Yes. The emphasis is on decision quality and process leverage rather than isolated numbers without legal and factual context.',
  },
]

const selectionCriteria = [
  {
    title: 'Material Risk at Intake',
    description:
      'Only matters with meaningful legal or financial exposure are included so examples remain relevant for high-stakes decision-making.',
  },
  {
    title: 'Strategy Visibility',
    description:
      'Each summary highlights pressure points and strategic actions, not just outcomes, because process quality is a key predictor of representation value.',
  },
  {
    title: 'Legal-Safe Context',
    description:
      'Language is intentionally structured to avoid guarantee implications and preserve realistic understanding of case-by-case variability.',
  },
  {
    title: 'Client Decision Utility',
    description:
      'Examples are selected to help prospective clients evaluate fit, urgency, and likely strategy pathways before consultation.',
  },
]

const resultReviewChecklist = [
  'Identify what was at risk before legal strategy began.',
  'Compare strategy moves to your current pressure points.',
  'Assess whether timeline control changed negotiation posture.',
  'Use consultation to validate whether your facts match similar contexts.',
]

const criminalResults = representativeResults.filter((result) => result.category === 'Criminal Defense')
const injuryResults = representativeResults.filter((result) => result.category === 'Personal Injury')

function renderResults(items: typeof representativeResults) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((result) => (
        <article
          key={result.headline}
          className="bg-iron-900 border border-silver-500/10 p-7 hover:border-accent-gold/40 transition-colors"
        >
          <p className="text-accent-gold text-xs uppercase tracking-widest mb-3">{result.category}</p>
          <h3 className="font-serif text-2xl text-white mb-4">{result.headline}</h3>
          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <p className="text-silver-500 uppercase tracking-[0.18em] text-[11px] mb-2">What Was At Risk</p>
              <p className="text-silver-300">{result.atRisk}</p>
            </div>
            <div>
              <p className="text-silver-500 uppercase tracking-[0.18em] text-[11px] mb-2">Key Strategy Moves</p>
              <ul className="space-y-2">
                {result.strategy.map((step) => (
                  <li key={step} className="text-silver-400">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-silver-500 uppercase tracking-[0.18em] text-[11px] mb-2">Outcome Context</p>
              <p className="text-silver-300">{result.outcome}</p>
            </div>
          </div>
          <p className="text-silver-500 text-sm mt-5">{result.notes}</p>
        </article>
      ))}
    </div>
  )
}

export default function CaseResultsPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero
        title="Case Results"
        subtitle="Representative criminal defense and personal injury outcomes with strategic context."
      />
      <MobileConversionBar
        context="case_results"
        primaryHref="/contact"
        primaryLabel="Request Review"
      />
      <BreadcrumbTrail
        items={[
          { label: 'Home', href: '/' },
          { label: 'Case Results' },
        ]}
      />

      <QuickPathSection
        title="Choose Your Review Path"
        subtitle="Start with the category that matches your legal issue, then request a case-specific strategy consultation."
        items={[
          {
            badge: 'Defense',
            title: 'Criminal Results',
            description: 'Review representative defense outcomes and context.',
            href: '#criminal-outcomes',
            ctaName: 'case_results_quick_path_criminal',
          },
          {
            badge: 'Injury',
            title: 'Injury Results',
            description: 'Review severe-loss claim outcomes and strategic framing.',
            href: '#injury-outcomes',
            ctaName: 'case_results_quick_path_injury',
          },
          {
            badge: 'Action',
            title: 'Request Case Review',
            description: 'Get immediate guidance tailored to your current legal exposure.',
            href: '/contact',
            ctaName: 'case_results_quick_path_contact',
          },
        ]}
      />

      <section className="py-10 md:py-14 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-iron-900 border border-silver-500/20 p-6 md:p-8">
            <p className="text-accent-gold text-xs uppercase tracking-widest mb-3">Important Disclaimer</p>
            <p className="text-silver-300 leading-relaxed">
              These are representative summaries, not guarantees. Every case depends on its own facts,
              evidence, venue, and applicable law. <strong>Past outcomes do not predict future results.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b border-silver-500/10 bg-iron-900/40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">How to Read These Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {methodology.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Outcome Evaluation Process</h2>
            <p className="text-silver-400 mb-8 max-w-3xl">
              This framework explains how representative results are curated for legal-safe, useful comparison.
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

      <section className="py-12 md:py-16 border-b border-silver-500/10 bg-iron-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">How Matters Are Selected for Publication</h2>
            <p className="text-silver-400 mb-8 max-w-3xl">
              Selection criteria are designed to provide useful decision context while preserving confidentiality and legal-safe communication standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {selectionCriteria.map((item) => (
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
              {resultReviewChecklist.map((item) => (
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

      <section id="criminal-outcomes" className="py-16 md:py-24 scroll-mt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Criminal Defense Outcomes</h2>
            {renderResults(criminalResults)}
          </div>
        </div>
      </section>

      <section id="injury-outcomes" className="py-16 md:py-24 border-y border-silver-500/10 bg-iron-900/40 scroll-mt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Personal Injury Outcomes</h2>
            {renderResults(injuryResults)}
          </div>
        </div>
      </section>

      <TrustProofSection
        ctaPrefix="case_results"
        title="Use Outcomes Alongside Trust Signals"
        subtitle="Case context is strongest when reviewed together with client feedback and attorney background."
      />

      <LinkGridSection
        title="Related Pages"
        subtitle="Use these pages to review strategy, trust proof, and request case-specific guidance."
        columns="three"
        items={relatedLinks}
      />

      <FaqSection
        title="Case Results FAQs"
        subtitle="Important context before using representative outcomes to evaluate your own matter."
        faqs={caseResultsFaqs}
        practiceArea="case-results"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">Need Case-Specific Guidance?</h2>
            <p className="text-silver-400 mb-8">
              We can assess your legal exposure, evidence posture, and likely next steps in a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                data-cta="case_results_contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
              >
                Request Consultation
              </Link>
              <a
                href="tel:+14053640601"
                data-cta="case_results_call"
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

import type { Metadata } from 'next'
import Link from 'next/link'
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_TEL_HREF } from '@/lib/contact'
import { BreadcrumbTrail } from '../components/BreadcrumbTrail'
import { FaqSection } from '../components/FaqSection'
import { LinkGridSection } from '../components/LinkGridSection'
import { MobileConversionBar } from '../components/MobileConversionBar'
import { PageHero } from '../components/PageHero'

export const metadata: Metadata = {
  title: 'Case Results',
  description: 'Anonymized examples of criminal defense and personal injury matters handled by Kernal & Associates.',
  alternates: { canonical: '/case-results' },
  openGraph: {
    title: 'Case Results | Kernal & Associates',
    description: 'Anonymized examples of Oklahoma criminal defense and personal injury matters.',
    url: 'https://kernallaw.com/case-results',
  },
}

const representativeResults = [
  {
    category: 'Criminal Defense',
    headline: 'Felony Charge Resolved With Reduced Consequences',
    atRisk: 'The client faced a felony charge with possible long-term record and employment consequences.',
    work: [
      'Reviewed statements and available evidence',
      'Identified procedural and constitutional issues',
      'Prepared the case for negotiation and court',
    ],
    outcome: 'The final resolution reduced the consequences associated with the original felony allegation.',
    notes: 'Oklahoma County district-court matter.',
  },
  {
    category: 'Criminal Defense',
    headline: 'DUI Matter Addressed in Court and License Proceedings',
    atRisk: 'The arrest created both criminal-court and driver-license consequences.',
    work: [
      'Reviewed the stop and testing procedures',
      'Tracked the court case and separate license matter',
      'Prepared for a negotiated or contested resolution',
    ],
    outcome: 'The resolution reduced the combined long-term effect described when the matter began.',
    notes: 'Included both court and Department of Public Safety proceedings.',
  },
  {
    category: 'Criminal Defense',
    headline: 'Active Warrant Addressed Through a Planned Court Appearance',
    atRisk: 'The client faced an unexpected arrest and possible bond consequences from an active warrant.',
    work: [
      'Confirmed the warrant and underlying case',
      'Prepared for surrender and bond',
      'Began work on the underlying charge',
    ],
    outcome: 'The warrant was addressed through a planned appearance instead of an unplanned arrest.',
    notes: 'The underlying criminal matter continued after the warrant was addressed.',
  },
  {
    category: 'Personal Injury',
    headline: 'Collision Claim Resolved After Treatment Records Were Complete',
    atRisk: 'The insurer evaluated the claim before treatment and wage-loss records were complete.',
    work: [
      'Developed the evidence concerning fault',
      'Collected medical and wage-loss records',
      'Evaluated the claim after the losses were documented',
    ],
    outcome: 'The resolution considered the completed treatment record and losses not included in the early evaluation.',
    notes: 'Resolved after more than one round of negotiations.',
  },
  {
    category: 'Personal Injury',
    headline: 'Commercial Truck Claim Developed After Fault Was Disputed',
    atRisk: 'The carrier disputed fault and challenged the extent of the claimed losses.',
    work: [
      'Obtained commercial records bearing on fault',
      'Documented future losses and reduced earnings',
      'Prepared the disputed issues for litigation if needed',
    ],
    outcome: 'The documented claim was valued above the carrier’s initial pre-suit position.',
    notes: 'Included layered liability and damages analysis.',
  },
  {
    category: 'Personal Injury',
    headline: 'Serious Injury Claim Documented for Future Care and Losses',
    atRisk: 'An early settlement would not have addressed the claimed future care and economic losses.',
    work: [
      'Documented the expected medical course and care needs',
      'Evaluated economic and vocational losses',
      'Prepared a demand supported by the available records',
    ],
    outcome: 'The claim evaluation included future needs rather than only the losses known at the outset.',
    notes: 'Serious-injury matter involving claimed long-term losses.',
  },
  {
    category: 'Criminal Defense',
    headline: 'Probation Violation Matter Resolved With Reduced Revocation Risk',
    atRisk: 'The client faced possible custody and additional penalties for alleged violations.',
    work: [
      'Reconstructed the timeline and reviewed each condition',
      'Collected compliance and mitigation records',
      'Prepared for the violation hearing',
    ],
    outcome: 'The resolution reduced the revocation consequences the client initially faced.',
    notes: 'Focused on the actual conditions, timeline, and compliance records.',
  },
  {
    category: 'Personal Injury',
    headline: 'Uninsured Motorist Claim Reconsidered After an Initial Dispute',
    atRisk:
      'Carrier framed recovery narrowly despite documented treatment and wage disruption in an underinsured-loss setting.',
    work: [
      'Reviewed the policy and available coverage',
      'Organized the medical and wage-loss timeline',
      'Prepared disputed coverage and damages issues for litigation if needed',
    ],
    outcome:
      'Claim value moved beyond initial low-range position after stronger liability and damages presentation.',
    notes: 'Uninsured and underinsured motorist coverage matter.',
  },
]

const relatedLinks = [
  {
    href: '/criminal-defense',
    title: 'Criminal Defense',
    description: 'Oklahoma criminal defense services and charge-specific information.',
    ctaName: 'case_results_related_criminal',
  },
  {
    href: '/personal-injury',
    title: 'Personal Injury',
    description: 'Oklahoma personal injury services and practical claim information.',
    ctaName: 'case_results_related_injury',
  },
  {
    href: '/client-reviews',
    title: 'Client Reviews',
    description: 'Selected feedback sourced from Todd Kernal\'s Google Business Profile.',
    ctaName: 'case_results_related_reviews',
  },
]

const caseResultsFaqs = [
  {
    question: 'Do these results guarantee a similar outcome?',
    answer:
      'No. Every matter depends on its own facts, evidence, parties, insurance, law, court, and timing. Past results do not predict future results.',
  },
  {
    question: 'Why are names and case numbers not included?',
    answer:
      'The summaries are anonymized to protect client confidentiality. They provide a general description rather than a public case file.',
  },
  {
    question: 'Why are dollar amounts not listed?',
    answer:
      'A number without the injuries, insurance limits, expenses, fault evidence, and other facts can be misleading. The summaries focus on the issue presented and the reported resolution.',
  },
  {
    question: 'Can the firm tell me whether my matter is similar?',
    answer:
      'A consultation can compare your facts and documents with the issues described here, but it cannot guarantee the same outcome.',
  },
]

const criminalResults = representativeResults.filter((result) => result.category === 'Criminal Defense')
const injuryResults = representativeResults.filter((result) => result.category === 'Personal Injury')

function ResultsGrid({ items }: { items: typeof representativeResults }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((result) => (
        <article
          key={result.headline}
          className="bg-iron-900 border border-silver-500/10 p-7 hover:border-accent-gold/40 transition-colors"
        >
          <p className="text-accent-gold text-xs uppercase tracking-widest mb-3">{result.category}</p>
          <h3 className="font-serif text-2xl text-white mb-5">{result.headline}</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <div>
              <p className="text-silver-500 uppercase tracking-[0.18em] text-[11px] mb-2">Issue Presented</p>
              <p className="text-silver-300">{result.atRisk}</p>
            </div>
            <div>
              <p className="text-silver-500 uppercase tracking-[0.18em] text-[11px] mb-2">Work Described</p>
              <ul className="list-disc pl-5 space-y-2 text-silver-400">
                {result.work.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-silver-500 uppercase tracking-[0.18em] text-[11px] mb-2">Reported Result</p>
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
      <PageHero title="Case Results" subtitle="Anonymized examples from criminal defense and personal injury matters." />
      <MobileConversionBar context="case_results" primaryHref="/contact" primaryLabel="Request Consultation" />
      <BreadcrumbTrail items={[{ label: 'Home', href: '/' }, { label: 'Case Results' }]} />

      <section className="py-10 md:py-14 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-iron-900 border border-silver-500/20 p-6 md:p-8">
            <p className="text-accent-gold text-xs uppercase tracking-widest mb-3">Important Context</p>
            <p className="text-silver-300 leading-relaxed">
              These summaries are anonymized and do not include every fact or legal issue. Every case is different.
              Past results do not guarantee or predict a future result.
            </p>
          </div>
        </div>
      </section>

      <section id="criminal-outcomes" className="py-14 md:py-20 scroll-mt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Criminal Defense Matters</h2>
            <ResultsGrid items={criminalResults} />
          </div>
        </div>
      </section>

      <section id="injury-outcomes" className="py-14 md:py-20 border-y border-silver-500/10 bg-iron-900/40 scroll-mt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Personal Injury Matters</h2>
            <ResultsGrid items={injuryResults} />
          </div>
        </div>
      </section>

      <LinkGridSection
        title="Related Pages"
        subtitle="Practice information, verified Google reviews, and consultation options."
        columns="three"
        items={relatedLinks}
      />

      <FaqSection
        title="Case Results FAQs"
        subtitle="How to understand the anonymized summaries on this page."
        faqs={caseResultsFaqs}
        practiceArea="case-results"
      />

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">Discuss Your Matter</h2>
            <p className="text-silver-400 mb-8">A consultation can address the facts, documents, and deadlines in your case.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                data-cta="case_results_contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
              >
                Request Consultation
              </Link>
              <a
                href={PRIMARY_PHONE_TEL_HREF}
                data-cta="case_results_call"
                className="inline-flex items-center justify-center px-10 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Call {PRIMARY_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

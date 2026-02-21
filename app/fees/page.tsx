import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '../components/PageHero'
import { LinkGridSection } from '../components/LinkGridSection'

export const metadata: Metadata = {
  title: 'Legal Fees and Billing',
  description:
    'Understand how criminal defense and personal injury fee structures work at Kernal & Associates, including contingency model details for injury cases.',
  alternates: { canonical: '/fees' },
}

export default function FeesPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero
        title="Fees and Billing"
        subtitle="Clear fee structure guidance for criminal defense and injury representation."
      />

      <section className="py-12 md:py-20 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6 text-silver-400 text-lg leading-relaxed">
            <p>
              Fee structure depends on case type, complexity, timeline, and expected litigation intensity.
              During consultation, we explain scope, strategic workload, and how billing aligns with your matter.
            </p>
            <p>
              Our objective is to provide clarity before representation begins so you can make an informed decision
              without uncertainty around basic cost structure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-iron-900 border border-silver-500/10 p-8">
              <p className="text-accent-gold text-xs uppercase tracking-widest mb-3">Criminal Defense</p>
              <h2 className="font-serif text-3xl text-white mb-4">Case-Based Defense Fee Structure</h2>
              <p className="text-silver-400 leading-relaxed mb-5">
                Criminal defense fees are typically set based on charge level, procedural complexity,
                and expected motion/trial workload. We explain scope and expected phases before engagement.
              </p>
              <ul className="space-y-3 text-silver-400 text-sm">
                <li>Charge severity and exposure level</li>
                <li>Expected hearings and motion complexity</li>
                <li>Investigation and expert support needs</li>
                <li>Trial-readiness and timeline demands</li>
              </ul>
            </article>

            <article className="bg-iron-900 border border-silver-500/10 p-8">
              <p className="text-accent-gold text-xs uppercase tracking-widest mb-3">Personal Injury</p>
              <h2 className="font-serif text-3xl text-white mb-4">Contingency Fee Model</h2>
              <p className="text-silver-400 leading-relaxed mb-5">
                Most personal injury matters are handled on contingency: attorney fees are paid only when
                recovery is obtained. Terms and expense handling are reviewed clearly at intake.
              </p>
              <ul className="space-y-3 text-silver-400 text-sm">
                <li>No upfront attorney fee in qualifying injury matters</li>
                <li>Fee paid from settlement or verdict recovery</li>
                <li>Case expense treatment explained before engagement</li>
                <li>Full written agreement before representation begins</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y border-silver-500/10 bg-iron-900/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-white mb-6">What We Cover in a Fee Consultation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Case scope and expected legal phases',
                'Strategic priorities and timeline pressure points',
                'Likely motion, hearing, or trial workload',
                'Billing model and agreement terms',
                'Communication expectations and next steps',
                'Immediate actions to protect your legal position',
              ].map((item) => (
                <div key={item} className="bg-iron-900 border border-silver-500/10 p-4 text-silver-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LinkGridSection
        title="Related Pages"
        subtitle="Review services and trust assets before your consultation."
        columns="three"
        items={[
          {
            href: '/criminal-defense',
            title: 'Criminal Defense Services',
            description: 'Charge-specific defense services and process overview.',
            ctaName: 'fees_related_criminal',
          },
          {
            href: '/personal-injury',
            title: 'Personal Injury Services',
            description: 'Injury case categories and claim strategy pages.',
            ctaName: 'fees_related_injury',
          },
          {
            href: '/case-results',
            title: 'Case Results',
            description: 'Representative outcomes and required legal disclaimers.',
            ctaName: 'fees_related_case_results',
          },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">Want a Case-Specific Fee Review?</h2>
            <p className="text-silver-400 mb-8">
              We can explain likely fee structure and scope based on your specific legal matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                data-cta="fees_contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
              >
                Request Consultation
              </Link>
              <a
                href="tel:+14053640601"
                data-cta="fees_call"
                className="inline-flex items-center justify-center px-10 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                (405) 364-0601
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

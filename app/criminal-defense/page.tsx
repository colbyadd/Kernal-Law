import { Metadata } from 'next'
import { BreadcrumbTrail } from '../components/BreadcrumbTrail'
import { PageHero } from '../components/PageHero'
import { FaqSection } from '../components/FaqSection'
import { LinkGridSection } from '../components/LinkGridSection'
import { MobileConversionBar } from '../components/MobileConversionBar'
import { PrimaryConsultationCta } from '../components/PrimaryConsultationCta'
import { QuickPathSection } from '../components/QuickPathSection'
import { TrustProofSection } from '../components/TrustProofSection'

export const metadata: Metadata = {
  title: 'Criminal Defense Attorney in Oklahoma',
  description:
    'Aggressive Oklahoma criminal defense for DUI, drug charges, violent crimes, and felony cases. Free consultation with Kernal & Associates.',
  alternates: { canonical: '/criminal-defense' },
  openGraph: {
    title: 'Oklahoma Criminal Defense Attorney | Kernal & Associates',
    description:
      'Courtroom-ready defense for serious criminal charges in Oklahoma. DUI, drug charges, felonies, and trial representation.',
    url: 'https://kernallaw.com/criminal-defense',
  },
}

const criminalDefenseFaqs = [
  {
    question: 'When should I hire a criminal defense lawyer in Oklahoma?',
    answer:
      'Immediately. The first 24-72 hours after arrest are often the most important for protecting your rights, preserving evidence, and avoiding statements that can hurt your case. Early representation can change the direction of your case before formal charging decisions are finalized.',
  },
  {
    question: 'Can charges be reduced before trial?',
    answer:
      'Yes. Many cases are reduced or dismissed before trial through pretrial investigation, suppression motions, and strategic negotiations. Outcomes depend on the evidence, prior record, and the legal issues in your specific case.',
  },
  {
    question: 'Do I need a lawyer for a first offense?',
    answer:
      'Yes. Even a first offense can create long-term consequences for employment, licensing, immigration, and insurance. A defense attorney can evaluate diversion options, challenge weak evidence, and protect your record.',
  },
  {
    question: 'What if law enforcement violated my rights?',
    answer:
      'Constitutional violations can lead to suppressed evidence or case dismissal. We analyze stop legality, warrant validity, search scope, interrogation methods, and chain-of-custody issues to identify suppression opportunities.',
  },
  {
    question: 'How much does criminal defense cost?',
    answer:
      'Fees vary by charge level, case complexity, and whether trial is required. We discuss scope, strategy, and fee structure during consultation so you know exactly what representation includes before moving forward.',
  },
  {
    question: 'Can a conviction be removed later?',
    answer:
      'Some Oklahoma cases may be eligible for expungement after specific waiting periods and conditions. We review your record and eligibility to determine whether sealing or record-clearing options are available.',
  },
]

const processSteps = [
  {
    step: 'Step 1',
    title: 'Early Intervention',
    description:
      'Immediate case review, bond strategy, and pre-charge advocacy where available.',
  },
  {
    step: 'Step 2',
    title: 'Evidence Challenges',
    description:
      'Suppress unlawful searches, attack weak forensic procedures, and test witness reliability.',
  },
  {
    step: 'Step 3',
    title: 'Trial Readiness',
    description:
      'Negotiate from strength and prepare for jury trial when prosecutors refuse reasonable terms.',
  },
]

const takeaways = [
  'Criminal cases are often decided by early process control, not late-stage scrambling.',
  'Constitutional and evidentiary pressure creates leverage before plea conversations mature.',
  'Record, licensing, and employment exposure should be built into strategy from day one.',
  'Trial-ready preparation improves negotiation outcomes even when a case resolves pretrial.',
]

const relatedLinks = [
  {
    href: '/criminal-defense/sex-crimes',
    title: 'Sex Crimes Defense',
    description:
      'Confidential defense strategy for high-stakes allegation-driven prosecutions.',
    ctaName: 'criminal_hub_link_sex_crimes',
  },
  {
    href: '/criminal-defense/theft-fraud',
    title: 'Theft and Fraud Defense',
    description:
      'Intent-focused defense for property and financial allegations.',
    ctaName: 'criminal_hub_link_theft_fraud',
  },
  {
    href: '/criminal-defense/expungement',
    title: 'Expungement Services',
    description:
      'Eligibility review and record-sealing strategy under Oklahoma law.',
    ctaName: 'criminal_hub_link_expungement',
  },
  {
    href: '/criminal-defense/probation-violation',
    title: 'Probation Violation Defense',
    description:
      'Defense strategy for revocation risk, sanctions, and compliance disputes.',
    ctaName: 'criminal_hub_link_probation_violation',
  },
  {
    href: '/criminal-defense/warrants',
    title: 'Warrants Defense',
    description:
      'Controlled safe-surrender and warrant-resolution planning.',
    ctaName: 'criminal_hub_link_warrants',
  },
  {
    href: '/resources/what-to-do-after-arrest-oklahoma',
    title: 'Post-Arrest Guide',
    description:
      'Immediate rights-protection checklist for the first 48 hours after arrest.',
    ctaName: 'criminal_hub_link_post_arrest_guide',
  },
  {
    href: '/resources/oklahoma-felony-case-timeline',
    title: 'Felony Case Timeline Guide',
    description:
      'Stage-by-stage felony process map from filing through trial-readiness decisions.',
    ctaName: 'criminal_hub_link_felony_timeline_guide',
  },
  {
    href: '/resources/oklahoma-bond-and-release-conditions',
    title: 'Bond and Release Conditions Guide',
    description:
      'Practical checklist for bond compliance and condition-modification strategy.',
    ctaName: 'criminal_hub_link_bond_conditions_guide',
  },
]

export default function CriminalDefenseHubPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero
        title="Criminal Defense"
        subtitle="Trial-ready defense for Oklahoma misdemeanors and felonies."
        variant="criminal"
      />
      <MobileConversionBar
        context="criminal_hub"
        primaryHref="/contact"
        primaryLabel="Start Defense Review"
      />
      <BreadcrumbTrail
        items={[
          { label: 'Home', href: '/' },
          { label: 'Criminal Defense' },
        ]}
      />

      <QuickPathSection
        title="Start in the Right Place"
        subtitle="Early decisions control leverage. Choose the path that best matches your current criminal case pressure."
        items={[
          {
            badge: 'Urgent',
            title: 'Arrested in the Last 72 Hours',
            description: 'Protect rights, avoid harmful statements, and establish immediate defense posture.',
            href: '/resources/what-to-do-after-arrest-oklahoma',
            ctaName: 'criminal_hub_quick_path_arrest',
          },
          {
            badge: 'Charge Specific',
            title: 'DUI / DWI Exposure',
            description: 'Address criminal and license-risk timelines before avoidable deadlines close.',
            href: '/criminal-defense/dui-dwi',
            ctaName: 'criminal_hub_quick_path_dui',
          },
          {
            badge: 'Immediate Action',
            title: 'Talk to Defense Counsel',
            description: 'Get a confidential strategy consultation focused on your next high-impact decisions.',
            href: '/contact',
            ctaName: 'criminal_hub_quick_path_contact',
          },
        ]}
      />

      <section className="py-12 md:py-20 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Your case is not a file number. It is your future.
            </h2>
            <div className="space-y-5 text-silver-400 text-lg leading-relaxed">
              <p>
                Criminal charges move fast. Prosecutors begin building their case immediately, and every
                decision you make early can affect the final outcome. Kernal &amp; Associates treats
                criminal defense as a high-stakes litigation process from day one.
              </p>
              <p>
                Our strategy is straightforward: investigate aggressively, challenge unlawful evidence,
                pressure weak prosecutions, and prepare every case as if it is going to trial. That is how
                leverage is created and how better outcomes are earned.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <article className="bg-iron-900 border border-silver-500/15 p-4">
                <h3 className="text-white font-semibold mb-2">Arrest-Stage Risk Control</h3>
                <p className="text-silver-400">Early statement and bond decisions are managed to avoid avoidable case damage.</p>
              </article>
              <article className="bg-iron-900 border border-silver-500/15 p-4">
                <h3 className="text-white font-semibold mb-2">Evidence Suppression Opportunities</h3>
                <p className="text-silver-400">Stop, search, interview, and testing procedures are audited for constitutional defects.</p>
              </article>
              <article className="bg-iron-900 border border-silver-500/15 p-4">
                <h3 className="text-white font-semibold mb-2">Long-Term Impact Protection</h3>
                <p className="text-silver-400">Record, licensing, and career consequences are factored into every strategy decision.</p>
              </article>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <PrimaryConsultationCta
                context="criminal_hub"
                controlLabel="Free Defense Consultation"
                challengerLabel="Get Defense Strategy Session"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
              />
              <a
                href="tel:+14053640601"
                data-cta="criminal_hub_call_now"
                className="inline-flex items-center justify-center px-8 py-4 border border-silver-500/30 text-white font-bold uppercase tracking-widest hover:border-accent-gold transition-colors"
              >
                Call (405) 364-0601
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustProofSection
        ctaPrefix="criminal_hub"
        context="criminal"
      />

      <LinkGridSection
        title="Criminal Defense Services"
        subtitle="Start with the charge category closest to your situation."
        columns="three"
        items={[
          {
            href: '/criminal-defense/dui-dwi',
            title: 'DUI / DWI Defense',
            description:
              'Protect your license, challenge roadside evidence, and defend against jail, fines, and interlock penalties.',
            ctaName: 'criminal_hub_link_dui_dwi',
          },
          {
            href: '/criminal-defense/drug-charges',
            title: 'Drug Charges',
            description:
              'Defense for possession, intent, trafficking, and search-and-seizure violations in Oklahoma courts.',
            ctaName: 'criminal_hub_link_drug_charges',
          },
          {
            href: '/criminal-defense/domestic-violence',
            title: 'Domestic Violence Defense',
            description:
              'Defense for domestic violence allegations, no-contact conditions, and overlapping protective-order risk.',
            ctaName: 'criminal_hub_link_domestic_violence',
          },
          {
            href: '/criminal-defense/assault-battery',
            title: 'Assault and Battery Defense',
            description:
              'Defense strategy for misdemeanor and felony assault charges, including self-defense claims.',
            ctaName: 'criminal_hub_link_assault_battery',
          },
          {
            href: '/oklahoma-city',
            title: 'Oklahoma City Criminal Defense',
            description:
              'Local representation across Oklahoma County and metro court systems.',
            ctaName: 'criminal_hub_link_okc_location',
          },
          {
            href: '/norman',
            title: 'Norman Criminal Defense',
            description:
              'Criminal defense representation for Cleveland County courts and surrounding communities.',
            ctaName: 'criminal_hub_link_norman_location',
          },
        ]}
      />

      <LinkGridSection
        title="Additional Criminal Defense Topics"
        subtitle="Explore related charge and post-charge strategy pages."
        columns="three"
        items={relatedLinks}
      />

      <section className="py-16 md:py-24 scroll-mt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">How We Build Leverage</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/10 p-7 hover:border-accent-gold/40 transition-colors"
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

      <FaqSection
        faqs={criminalDefenseFaqs}
        practiceArea="criminal-defense-hub"
        subtitle="Answers to the questions we hear most before and after an arrest."
      />
    </main>
  )
}

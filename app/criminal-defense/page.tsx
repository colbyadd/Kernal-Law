import type { Metadata } from 'next'
import { BreadcrumbTrail } from '../components/BreadcrumbTrail'
import { FaqSection } from '../components/FaqSection'
import { LinkGridSection } from '../components/LinkGridSection'
import { MobileConversionBar } from '../components/MobileConversionBar'
import { PageHero } from '../components/PageHero'
import { PrimaryConsultationCta } from '../components/PrimaryConsultationCta'
import { QuickPathSection } from '../components/QuickPathSection'
import { ServicePageJsonLd } from '../components/ServicePageJsonLd'
import { TrustProofSection } from '../components/TrustProofSection'

export const metadata: Metadata = {
  title: 'Oklahoma Criminal Defense Lawyer',
  description:
    'Kernal & Associates represents Oklahoma clients facing DUI, felony, drug, domestic violence, warrant, and probation matters.',
  alternates: { canonical: '/criminal-defense' },
  openGraph: {
    title: 'Oklahoma Criminal Defense Lawyer | Kernal & Associates',
    description:
      'Oklahoma criminal defense for DUI, felony, drug, warrant, domestic violence, and probation matters.',
    url: 'https://kernallaw.com/criminal-defense',
  },
}

const criminalDefenseFaqs = [
  {
    question: 'When should I hire a criminal defense lawyer?',
    answer:
      'As soon as possible after an arrest or when you learn you are under investigation. Early review can identify release conditions, court dates, evidence to preserve, and statements to avoid.',
  },
  {
    question: 'Can charges be reduced or dismissed before trial?',
    answer:
      'Sometimes. The result depends on the evidence, applicable law, charging decisions, criminal history, motion rulings, and prosecutor. No outcome can be promised before those facts are reviewed.',
  },
  {
    question: 'Do I need a lawyer for a first offense?',
    answer:
      'A first case can still affect employment, driving privileges, professional licenses, immigration status, and a criminal record. It should be evaluated before any plea or waiver of rights.',
  },
  {
    question: 'What if police violated my rights?',
    answer:
      'Counsel can review the stop, warrant, search, questioning, identification procedure, and handling of evidence. A remedy depends on the facts and the law governing the violation.',
  },
  {
    question: 'How much does criminal defense cost?',
    answer:
      'Fees depend on the charge, complexity, expected hearings, and whether the case is tried. The scope and fee should be explained before representation begins.',
  },
  {
    question: 'Can a conviction be removed later?',
    answer:
      'Some Oklahoma records may qualify for expungement after required conditions and waiting periods. Eligibility depends on the disposition, criminal history, and current law.',
  },
]

const services = [
  {
    href: '/criminal-defense/dui-dwi',
    title: 'DUI / DWI Defense',
    description: 'Court charges, testing issues, and related driver-license concerns after an Oklahoma DUI arrest.',
    ctaName: 'criminal_hub_link_dui_dwi',
  },
  {
    href: '/criminal-defense/drug-charges',
    title: 'Drug Charges',
    description: 'Defense of possession, distribution, trafficking, and cases involving searches or warrants.',
    ctaName: 'criminal_hub_link_drug_charges',
  },
  {
    href: '/criminal-defense/domestic-violence',
    title: 'Domestic Violence Defense',
    description: 'Criminal allegations, no-contact conditions, and related protective-order issues.',
    ctaName: 'criminal_hub_link_domestic_violence',
  },
  {
    href: '/criminal-defense/assault-battery',
    title: 'Assault and Battery Defense',
    description: 'Misdemeanor and felony assault charges, including matters involving self-defense claims.',
    ctaName: 'criminal_hub_link_assault_battery',
  },
  {
    href: '/criminal-defense/sex-crimes',
    title: 'Sex Crimes Defense',
    description: 'Confidential representation in cases involving serious allegations and lasting consequences.',
    ctaName: 'criminal_hub_link_sex_crimes',
  },
  {
    href: '/criminal-defense/theft-fraud',
    title: 'Theft and Fraud Defense',
    description: 'Defense of property, financial, and intent-based criminal allegations.',
    ctaName: 'criminal_hub_link_theft_fraud',
  },
  {
    href: '/criminal-defense/warrants',
    title: 'Warrants',
    description: 'Review of warrant status, surrender options, release concerns, and the underlying charge.',
    ctaName: 'criminal_hub_link_warrants',
  },
  {
    href: '/criminal-defense/probation-violation',
    title: 'Probation Violations',
    description: 'Representation in alleged violations involving reporting, treatment, testing, or new charges.',
    ctaName: 'criminal_hub_link_probation_violation',
  },
  {
    href: '/criminal-defense/expungement',
    title: 'Expungement',
    description: 'Review of Oklahoma record-sealing eligibility and the filing process.',
    ctaName: 'criminal_hub_link_expungement',
  },
]

const guideLinks = [
  {
    href: '/resources/what-to-do-after-arrest-oklahoma',
    title: 'What to Do After an Arrest',
    description: 'A practical checklist for the first 48 hours after an Oklahoma arrest.',
    ctaName: 'criminal_hub_link_post_arrest_guide',
  },
  {
    href: '/resources/oklahoma-felony-case-timeline',
    title: 'Oklahoma Felony Case Timeline',
    description: 'The usual stages from arrest and filing through motions, resolution, or trial.',
    ctaName: 'criminal_hub_link_felony_timeline_guide',
  },
  {
    href: '/resources/oklahoma-bond-and-release-conditions',
    title: 'Bond and Release Conditions',
    description: 'How to understand release terms, avoid violations, and document a need for modification.',
    ctaName: 'criminal_hub_link_bond_conditions_guide',
  },
]

export default function CriminalDefenseHubPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <ServicePageJsonLd
        description="Oklahoma criminal defense for DUI, felony, drug, warrant, domestic violence, and probation matters."
        variant="criminal"
      />
      <PageHero
        title="Criminal Defense"
        subtitle="Experienced representation for Oklahoma misdemeanors and felonies."
        variant="criminal"
      />
      <MobileConversionBar context="criminal_hub" primaryHref="/contact" primaryLabel="Request Consultation" />
      <BreadcrumbTrail items={[{ label: 'Home', href: '/' }, { label: 'Criminal Defense' }]} />

      <QuickPathSection
        title="Start Here"
        subtitle="Choose the option closest to your situation."
        items={[
          {
            badge: 'Recent Arrest',
            title: 'What to Do in the First 48 Hours',
            description: 'Protect your right to remain silent, follow release terms, and preserve documents.',
            href: '/resources/what-to-do-after-arrest-oklahoma',
            ctaName: 'criminal_hub_quick_path_arrest',
          },
          {
            badge: 'DUI',
            title: 'Court and Driver-License Issues',
            description: 'Understand the two proceedings that may follow an Oklahoma DUI arrest.',
            href: '/criminal-defense/dui-dwi',
            ctaName: 'criminal_hub_quick_path_dui',
          },
          {
            badge: 'Contact',
            title: 'Speak With Defense Counsel',
            description: 'Request a confidential consultation about the charge, court date, or investigation.',
            href: '/contact',
            ctaName: 'criminal_hub_quick_path_contact',
          },
        ]}
      />

      <section className="py-14 md:py-20 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Your case deserves a careful, honest review</h2>
            <div className="space-y-5 text-silver-400 text-lg leading-relaxed">
              <p>
                Todd Kernal has worked as a criminal defense lawyer for nearly 26 years. His practice includes
                DUI, drug charges, sex offenses, and other felony and misdemeanor cases.
              </p>
              <p>
                The work begins with the record: what was said, what was searched or seized, what the reports and
                recordings show, and what deadlines are approaching. Todd prepares cases for court while giving
                clients plain answers about their options and risks.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-accent-gold pl-6 text-xl text-white font-serif leading-relaxed">
              &quot;All defendants deserve the full protection of the United States and Oklahoma Constitutions.&quot;
            </blockquote>
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <PrimaryConsultationCta
                context="criminal_hub"
                controlLabel="Request Consultation"
                challengerLabel="Discuss Your Case"
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

      <TrustProofSection ctaPrefix="criminal_hub" context="criminal" />

      <LinkGridSection
        title="Criminal Defense Services"
        subtitle="Choose the charge or court issue closest to your case."
        columns="three"
        items={services}
      />

      <LinkGridSection
        title="Criminal Defense Guides"
        subtitle="Plain-language information about arrest, release, and the felony process."
        columns="three"
        items={guideLinks}
      />

      <FaqSection
        faqs={criminalDefenseFaqs}
        practiceArea="criminal-defense-hub"
        subtitle="Answers to common questions before and after an arrest."
      />
    </main>
  )
}

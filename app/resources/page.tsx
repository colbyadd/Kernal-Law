import type { Metadata } from 'next'
import { BreadcrumbTrail } from '../components/BreadcrumbTrail'
import { FaqSection } from '../components/FaqSection'
import { LinkGridSection } from '../components/LinkGridSection'
import { MobileConversionBar } from '../components/MobileConversionBar'
import { PageHero } from '../components/PageHero'
import { QuickPathSection } from '../components/QuickPathSection'

export const metadata: Metadata = {
  title: 'Oklahoma Legal Guides',
  description:
    'Plain-language Oklahoma guides about arrest, DUI, felony cases, release conditions, car accidents, truck-crash evidence, and uninsured motorist claims.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Oklahoma Legal Guides | Kernal & Associates',
    description:
      'Practical Oklahoma guides about arrests, DUI cases, release conditions, car crashes, truck evidence, and uninsured motorist claims.',
    url: 'https://kernallaw.com/resources',
  },
}

const criminalGuides = [
  {
    href: '/resources/what-to-do-after-arrest-oklahoma',
    title: 'What to Do After an Arrest in Oklahoma',
    description: 'A first-48-hours checklist for silence rights, release terms, documents, and digital communications.',
    ctaName: 'resources_link_after_arrest',
  },
  {
    href: '/resources/oklahoma-dui-process',
    title: 'Oklahoma DUI Process',
    description: 'An overview of the criminal case and separate driver-license process after a DUI arrest.',
    ctaName: 'resources_link_dui_process',
  },
  {
    href: '/resources/oklahoma-felony-case-timeline',
    title: 'Oklahoma Felony Case Timeline',
    description: 'The usual stages from arrest and filing through preliminary proceedings, motions, resolution, or trial.',
    ctaName: 'resources_link_felony_timeline',
  },
  {
    href: '/resources/oklahoma-bond-and-release-conditions',
    title: 'Bond and Release Conditions',
    description: 'How to understand release terms, avoid violations, and document a need for modification.',
    ctaName: 'resources_link_bond_release',
  },
]

const injuryGuides = [
  {
    href: '/resources/what-to-do-after-car-accident-oklahoma',
    title: 'What to Do After a Car Accident in Oklahoma',
    description: 'A checklist for medical care, photographs, reports, expenses, and insurance calls.',
    ctaName: 'resources_link_after_accident',
  },
  {
    href: '/resources/oklahoma-uninsured-motorist-claim-guide',
    title: 'Oklahoma Uninsured Motorist Claims',
    description: 'How policy language, notices, proof of loss, and releases may affect a claim.',
    ctaName: 'resources_link_um_uim_guide',
  },
  {
    href: '/resources/oklahoma-truck-accident-evidence-guide',
    title: 'Oklahoma Truck Accident Evidence',
    description: 'Commercial-carrier, electronic, maintenance, scene, and medical records to identify early.',
    ctaName: 'resources_link_truck_evidence_guide',
  },
]

const resourceFaqs = [
  {
    question: 'Are these guides legal advice for my case?',
    answer:
      'No. They provide general Oklahoma information. Advice depends on the facts, documents, court, policy language, and deadlines in your matter.',
  },
  {
    question: 'Which guide should I read first?',
    answer:
      'Start with the event that just occurred: an arrest, DUI, release from custody, car crash, commercial truck crash, or notice that the other driver lacks insurance.',
  },
  {
    question: 'How current are the guides?',
    answer:
      'Each guide displays its last-updated date and links to government sources. Laws, forms, and agency procedures can change, so verify current requirements before acting.',
  },
  {
    question: 'Should I wait until I have every document before calling?',
    answer:
      'No. Bring what you have. An attorney can identify missing records and any deadlines that should not wait.',
  },
  {
    question: 'What if my matter involves both criminal and injury issues?',
    answer:
      'Explain both when you call. A statement or decision in one matter can affect the other, and the two should be evaluated together.',
  },
]

export default function ResourcesPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero
        title="Legal Guides"
        subtitle="Plain-language information for common Oklahoma criminal and injury matters."
      />
      <MobileConversionBar context="resources_hub" primaryHref="/contact" primaryLabel="Request Consultation" />
      <BreadcrumbTrail items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />

      <QuickPathSection
        title="What Happened?"
        subtitle="Choose the guide that matches your immediate situation."
        items={[
          {
            badge: 'Arrest',
            title: 'Recently Arrested',
            description: 'Use your right to remain silent, follow release terms, and preserve your paperwork.',
            href: '/resources/what-to-do-after-arrest-oklahoma',
            ctaName: 'resources_quick_path_after_arrest',
          },
          {
            badge: 'DUI',
            title: 'Facing Court and License Issues',
            description: 'Track both proceedings and keep every notice received after the arrest.',
            href: '/resources/oklahoma-dui-process',
            ctaName: 'resources_quick_path_dui_process',
          },
          {
            badge: 'Crash',
            title: 'Injured in a Vehicle Collision',
            description: 'Get medical care and preserve scene, insurance, and expense records.',
            href: '/resources/what-to-do-after-car-accident-oklahoma',
            ctaName: 'resources_quick_path_after_crash',
          },
        ]}
      />

      <section className="py-12 md:py-16 border-y border-silver-500/10 bg-iron-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-5">Use these guides as a starting point</h2>
            <div className="space-y-4 text-silver-400 text-lg leading-relaxed">
              <p>
                Each guide begins with immediate steps, explains the usual process, and links to current government sources.
                It also shows the date the page was last updated.
              </p>
              <p>
                A public guide cannot account for your evidence, court orders, criminal history, medical condition, or insurance policy.
                If a deadline is close or the consequences are serious, speak with an attorney rather than relying on general information alone.
              </p>
            </div>
            <a
              href="tel:+14053640601"
              data-cta="resources_call_now"
              className="inline-flex mt-8 items-center justify-center px-8 py-4 border border-silver-500/30 text-white font-bold uppercase tracking-widest hover:border-accent-gold transition-colors"
            >
              Call (405) 364-0601
            </a>
          </div>
        </div>
      </section>

      <LinkGridSection
        title="Criminal Defense Guides"
        subtitle="Arrest, DUI, felony-process, and release-condition information."
        columns="three"
        items={criminalGuides}
      />

      <LinkGridSection
        title="Personal Injury Guides"
        subtitle="Car-crash, commercial-truck, and uninsured motorist information."
        columns="three"
        items={injuryGuides}
      />

      <FaqSection
        title="Legal Guide FAQs"
        subtitle="What these resources can and cannot do."
        faqs={resourceFaqs}
        practiceArea="resources"
      />
    </main>
  )
}

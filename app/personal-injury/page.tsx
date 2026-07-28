import type { Metadata } from 'next'
import {
  getContactHref,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_TEL_HREF,
} from '@/lib/contact'
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
  title: 'Oklahoma Personal Injury Lawyer',
  description:
    'Oklahoma injury representation for car and truck crashes, oil field injuries, catastrophic injuries, wrongful death, and uninsured motorist disputes.',
  alternates: { canonical: '/personal-injury' },
  openGraph: {
    title: 'Oklahoma Personal Injury Lawyer | Kernal & Associates',
    description:
      'Oklahoma personal injury representation for car accidents, truck wrecks, serious injuries, wrongful death, and uninsured motorist claims.',
    url: 'https://kernallaw.com/personal-injury',
  },
}

const personalInjuryFaqs = [
  {
    question: 'How long do I have to file an injury claim in Oklahoma?',
    answer:
      'Many Oklahoma injury claims have a two-year limitations period, but important exceptions and shorter notice deadlines can apply, including claims involving government entities. Have the date and responsible parties reviewed promptly.',
  },
  {
    question: 'Should I accept an early insurance offer?',
    answer:
      'Understand your injuries, losses, available coverage, and the release language first. Once a claim is released, it generally cannot be reopened because treatment or wage loss turned out to be greater than expected.',
  },
  {
    question: 'What losses may be included in an injury claim?',
    answer:
      'Depending on the facts, a claim may include medical expenses, future care, lost wages, reduced earning capacity, pain, and other losses allowed by Oklahoma law.',
  },
  {
    question: 'What if I may be partly at fault?',
    answer:
      'Oklahoma uses modified comparative fault. Your percentage of fault can reduce or bar recovery, so preserve the photographs, video, witness information, and vehicle evidence needed to evaluate what happened.',
  },
  {
    question: 'How long does a personal injury case take?',
    answer:
      'It depends on the injuries, treatment, fault dispute, available insurance, and whether a lawsuit is necessary. A serious case should not be closed before the likely future losses can be reasonably evaluated.',
  },
  {
    question: 'How are attorney fees handled?',
    answer:
      'Many personal injury matters are handled on a contingency fee. The written agreement should explain the percentage, expenses, and how costs are handled before representation begins.',
  },
]

const services = [
  {
    href: '/personal-injury/car-accidents',
    title: 'Car Accidents',
    description: 'Claims involving serious injuries, disputed fault, medical expenses, and insurance coverage.',
    ctaName: 'injury_hub_link_car_accidents',
  },
  {
    href: '/personal-injury/truck-accidents',
    title: 'Truck Accidents',
    description: 'Commercial vehicle cases involving carrier records, electronic data, and severe injuries.',
    ctaName: 'injury_hub_link_truck_accidents',
  },
  {
    href: '/personal-injury/oil-field-injuries',
    title: 'Oil Field Injuries',
    description: 'Claims involving worksite hazards, contractors, equipment, and serious physical injury.',
    ctaName: 'injury_hub_link_oil_field_injuries',
  },
  {
    href: '/personal-injury/wrongful-death',
    title: 'Wrongful Death',
    description: 'Representation for families after a death caused by negligence or wrongful conduct.',
    ctaName: 'injury_hub_link_wrongful_death',
  },
  {
    href: '/personal-injury/motorcycle-accidents',
    title: 'Motorcycle Accidents',
    description: 'Serious-injury claims involving roadway evidence, visibility, and disputed fault.',
    ctaName: 'injury_hub_link_motorcycle',
  },
  {
    href: '/personal-injury/catastrophic-injury',
    title: 'Catastrophic Injuries',
    description: 'Claims involving future medical care, lost earning capacity, and lasting limitations.',
    ctaName: 'injury_hub_link_catastrophic',
  },
  {
    href: '/personal-injury/slip-and-fall',
    title: 'Unsafe Property Injuries',
    description: 'Premises cases involving dangerous conditions, notice, and injury evidence.',
    ctaName: 'injury_hub_link_slip_fall',
  },
  {
    href: '/personal-injury/uninsured-motorist',
    title: 'Uninsured Motorist Claims',
    description: 'Claims under uninsured or underinsured motorist coverage after a serious crash.',
    ctaName: 'injury_hub_link_uninsured_motorist',
  },
]

const guideLinks = [
  {
    href: '/resources/what-to-do-after-car-accident-oklahoma',
    title: 'What to Do After a Car Accident',
    description: 'A checklist for medical care, photographs, reports, expenses, and insurance calls.',
    ctaName: 'injury_hub_link_post_accident_guide',
  },
  {
    href: '/resources/oklahoma-uninsured-motorist-claim-guide',
    title: 'Uninsured Motorist Claim Guide',
    description: 'How policy language, notices, proof of loss, and releases may affect a claim.',
    ctaName: 'injury_hub_link_um_uim_guide',
  },
  {
    href: '/resources/oklahoma-truck-accident-evidence-guide',
    title: 'Truck Accident Evidence Guide',
    description: 'Commercial-carrier, electronic, maintenance, scene, and medical records to identify early.',
    ctaName: 'injury_hub_link_truck_evidence_guide',
  },
]

export default function PersonalInjuryHubPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <ServicePageJsonLd
        description="Oklahoma personal injury representation for car accidents, truck wrecks, serious injuries, wrongful death, and uninsured motorist claims."
        variant="injury"
      />
      <PageHero
        title="Personal Injury"
        subtitle="Selected Oklahoma cases involving serious crashes, life-changing injuries, and wrongful death."
        variant="injury"
      />
      <MobileConversionBar
        context="injury_hub"
        primaryHref={getContactHref('personal-injury')}
        primaryLabel="Request a Free Consultation"
      />
      <BreadcrumbTrail items={[{ label: 'Home', href: '/' }, { label: 'Personal Injury' }]} />

      <QuickPathSection
        title="What Happened?"
        subtitle="Start with the step that best fits the crash or injury."
        items={[
          {
            badge: 'Recent Crash',
            title: 'What to Do First',
            description: 'Get medical care, preserve scene evidence, and keep insurance communications accurate.',
            href: '/resources/what-to-do-after-car-accident-oklahoma',
            ctaName: 'injury_hub_quick_path_recent_crash',
            ctaLabel: 'Read the Crash Guide',
          },
          {
            badge: 'Commercial Vehicle',
            title: 'Truck Crash Evidence',
            description: 'Identify the carrier, vehicles, witnesses, and records that may not be kept indefinitely.',
            href: '/personal-injury/truck-accidents',
            ctaName: 'injury_hub_quick_path_truck',
            ctaLabel: 'View Truck Cases',
          },
          {
            badge: 'Contact',
            title: 'Request a Case Review',
            description: 'Discuss the crash, injuries, insurance, and any proposed release with an attorney.',
            href: getContactHref('personal-injury'),
            ctaName: 'injury_hub_quick_path_contact',
            ctaLabel: 'Contact Todd',
          },
        ]}
      />

      <section className="py-14 md:py-20 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              A serious injury is bigger than the first hospital bill.
            </h2>
            <div className="space-y-5 text-silver-400 text-lg leading-relaxed">
              <p>
                Treatment may continue for months. Work may be interrupted. The available insurance may not be
                clear at first.
              </p>
              <p>
                After an oil field accident, Todd saw firsthand how an injury can disrupt work and daily life. He
                starts by saving the evidence and identifying the available insurance, then builds the medical and
                wage-loss record over time.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {[
                ['Medical records', 'Keep records of treatment, restrictions, expenses, and future recommendations.'],
                ['Fault evidence', 'Preserve photographs, video, witness information, reports, and vehicle evidence.'],
                ['Insurance documents', 'Collect declarations pages, claim correspondence, offers, and proposed releases.'],
              ].map(([title, description]) => (
                <article key={title} className="bg-iron-900 border border-silver-500/15 p-5">
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-silver-400 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <PrimaryConsultationCta
                context="injury_hub"
                label="Discuss Your Injury Claim"
                href={getContactHref('personal-injury')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
              />
              <a
                href={PRIMARY_PHONE_TEL_HREF}
                data-cta="injury_hub_call_now"
                className="inline-flex items-center justify-center px-8 py-4 border border-silver-500/30 text-white font-bold uppercase tracking-widest hover:border-accent-gold transition-colors"
              >
                Call {PRIMARY_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustProofSection ctaPrefix="injury_hub" context="injury" />

      <LinkGridSection
        title="Personal Injury Services"
        subtitle="Choose the accident or injury category closest to your matter."
        columns="four"
        items={services}
      />

      <LinkGridSection
        title="Personal Injury Guides"
        subtitle="Practical information about crashes, commercial vehicles, and uninsured motorist coverage."
        columns="three"
        items={guideLinks}
      />

      <FaqSection
        faqs={personalInjuryFaqs}
        practiceArea="personal-injury-hub"
        subtitle="Answers to common questions before an injury claim is resolved."
      />
    </main>
  )
}

import { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Midwest City Criminal Defense and Personal Injury Attorney',
  description:
    'Kernal & Associates serves Midwest City with criminal defense and personal injury representation for Oklahoma County and east metro legal matters.',
  alternates: { canonical: '/midwest-city' },
  openGraph: {
    title: 'Midwest City Criminal Defense and Injury Attorney | Kernal & Associates',
    description:
      'Local representation for Midwest City criminal charges and serious injury claims.',
    url: 'https://kernallaw.com/midwest-city',
  },
}

export default function MidwestCityPage() {
  return (
    <LocationServicePage
      canonicalPath="/midwest-city"
      locationName="Midwest City"
      subtitle="Criminal defense and injury representation for east metro Oklahoma County cases."
      introTitle="When legal risk escalates in Midwest City, early counsel matters."
      introParagraphs={[
        'Midwest City clients often face high-pressure legal timelines where court exposure and insurance strategy overlap. Acting early can materially improve defense and claim outcomes.',
        'Kernal & Associates provides structured representation for criminal and personal injury matters with a focus on evidence control, courtroom leverage, and long-term protection.',
      ]}
      countyFocus="Oklahoma County East Metro Coverage"
      localHighlights={[
        'Office consultations available at 1332 SW 89th Street in south Oklahoma City, with phone and text intake for urgent matters.',
        'Defense support for arrest, warrant, and probation-related exposure.',
        'Injury case development for highway and multi-vehicle crash scenarios.',
        'Strategic handling of allegation-driven prosecutions and contested evidence.',
        'Focused UM/UIM and coverage dispute planning in underinsured crash claims.',
        'Trial-ready preparation where settlement posture is unreasonable.',
        'Direct attorney-led communication through key hearing and filing stages.',
      ]}
      serviceLinks={[
        {
          href: '/midwest-city/criminal-defense',
          title: 'Midwest City Criminal Defense',
          description: 'Local defense strategy for east-metro criminal allegations.',
          ctaName: 'midwest_service_criminal_defense',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Active warrant resolution and safe-surrender strategy.',
          ctaName: 'midwest_service_warrants',
        },
        {
          href: '/criminal-defense/probation-violation',
          title: 'Probation Violation Defense',
          description: 'Revocation-risk defense and compliance-hearing strategy.',
          ctaName: 'midwest_service_probation',
        },
        {
          href: '/midwest-city/personal-injury',
          title: 'Midwest City Personal Injury',
          description: 'Local claim strategy for severe-loss and liability disputes.',
          ctaName: 'midwest_service_injury',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'UM/UIM strategy for first-party coverage recovery.',
          ctaName: 'midwest_service_um',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Evidence-driven crash claim strategy and damages development.',
          ctaName: 'midwest_service_car',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/oklahoma-city',
          title: 'Oklahoma City',
          description: 'Primary metro page for county-wide criminal and injury support.',
          ctaName: 'midwest_related_oklahoma_city',
        },
        {
          href: '/edmond',
          title: 'Edmond',
          description: 'North metro service area page for additional local context.',
          ctaName: 'midwest_related_edmond',
        },
        {
          href: '/resources/oklahoma-dui-process',
          title: 'Oklahoma DUI Process Guide',
          description: 'Timeline and hearing guide for DUI-related cases.',
          ctaName: 'midwest_related_dui_guide',
        },
      ]}
      faqSubtitle="Frequent questions from Midwest City criminal defense and injury clients."
      faqs={[
        {
          question: 'Do I need a lawyer before my first court date in Midwest City?',
          answer:
            'Yes, if possible. Early legal strategy can affect plea posture, evidentiary planning, and conditions that impact your day-to-day life.',
        },
        {
          question: 'Can you handle probation violation cases in Midwest City?',
          answer:
            'Yes. We defend probation-related allegations and build mitigation and compliance strategy before revocation risk escalates.',
        },
        {
          question: 'What if the at-fault driver has little or no insurance?',
          answer:
            'We evaluate uninsured and underinsured motorist options and build a first-party recovery strategy based on available coverage.',
        },
        {
          question: 'How fast can we start on my case?',
          answer:
            'Immediately after intake. We prioritize urgent deadlines, evidence preservation, and communication controls from day one.',
        },
      ]}
      ctaTitle="Need a Midwest City Case Strategy?"
      ctaDescription="Request immediate legal guidance for criminal defense or injury claim planning."
      ctaName="midwest_city"
    />
  )
}

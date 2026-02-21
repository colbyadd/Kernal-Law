import { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Yukon Criminal Defense and Personal Injury Attorney',
  description:
    'Kernal & Associates serves Yukon with criminal defense and personal injury representation for Canadian County and surrounding metro matters.',
  alternates: { canonical: '/yukon' },
  openGraph: {
    title: 'Yukon Criminal Defense and Injury Attorney | Kernal & Associates',
    description:
      'Strategic legal representation for Yukon residents facing criminal or injury cases.',
    url: 'https://kernallaw.com/yukon',
  },
}

export default function YukonPage() {
  return (
    <LocationServicePage
      canonicalPath="/yukon"
      locationName="Yukon"
      subtitle="Criminal defense and injury representation for Yukon and west metro communities."
      introTitle="West metro legal issues need rapid, trial-ready strategy."
      introParagraphs={[
        'Yukon clients frequently face cross-jurisdiction legal issues involving both Canadian County and metro-area case dynamics. Immediate strategy helps avoid procedural and evidentiary mistakes.',
        'Kernal & Associates provides aggressive criminal defense and full-value injury claim representation with clear planning from intake through courtroom pressure.',
      ]}
      countyFocus="Canadian County and West Metro Court Coordination"
      localHighlights={[
        'Rapid response for arrest events, active warrants, and hearing-risk exposure.',
        'Injury claim support for high-speed corridor and commercial vehicle incidents.',
        'Coordinated legal planning where insurance and criminal concerns overlap.',
        'Litigation-focused preparation for contested liability and evidence disputes.',
        'Long-term record and licensing risk analysis for criminal matters.',
        'Direct legal communication and deadline control from first consultation onward.',
      ]}
      serviceLinks={[
        {
          href: '/yukon/criminal-defense',
          title: 'Yukon Criminal Defense',
          description: 'Local defense planning for Yukon criminal allegations.',
          ctaName: 'yukon_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Court and license-track strategy for DUI allegations.',
          ctaName: 'yukon_service_dui',
        },
        {
          href: '/criminal-defense/theft-fraud',
          title: 'Theft and Fraud Defense',
          description: 'Intent and records-focused strategy in financial allegations.',
          ctaName: 'yukon_service_theft',
        },
        {
          href: '/yukon/personal-injury',
          title: 'Yukon Personal Injury',
          description: 'Local claim strategy for serious crash and negligence losses.',
          ctaName: 'yukon_service_injury',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Litigation',
          description: 'Commercial collision strategy and layered liability analysis.',
          ctaName: 'yukon_service_truck',
        },
        {
          href: '/personal-injury/oil-field-injuries',
          title: 'Oil Field Injury Claims',
          description: 'Technical industrial injury strategy for high-severity losses.',
          ctaName: 'yukon_service_oil_field',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/mustang',
          title: 'Mustang',
          description: 'Nearby west metro service page for additional local context.',
          ctaName: 'yukon_related_mustang',
        },
        {
          href: '/oklahoma-city',
          title: 'Oklahoma City',
          description: 'Metro-area criminal defense and injury representation hub.',
          ctaName: 'yukon_related_oklahoma_city',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Guide',
          description: 'Immediate claim-protection checklist after serious crashes.',
          ctaName: 'yukon_related_accident_guide',
        },
      ]}
      faqSubtitle="Key legal questions from Yukon clients facing urgent criminal or injury exposure."
      faqs={[
        {
          question: 'Can you represent Yukon clients in Canadian County and metro courts?',
          answer:
            'Yes. We coordinate strategy across jurisdictions when cases involve Canadian County and surrounding metro venues.',
        },
        {
          question: 'How do you approach DUI cases from Yukon arrests?',
          answer:
            'We build a unified strategy for both criminal allegations and administrative license risk so one process does not undermine the other.',
        },
        {
          question: 'Do you take serious commercial truck injury cases near Yukon?',
          answer:
            'Yes. We handle commercial collision claims with evidence preservation, liability mapping, and long-term damages planning.',
        },
        {
          question: 'What should I avoid doing before speaking with counsel?',
          answer:
            'Avoid detailed case discussions on calls, texts, or social media, and avoid recorded insurer statements without legal guidance.',
        },
      ]}
      ctaTitle="Need Immediate Counsel in Yukon?"
      ctaDescription="Request a confidential review to map risk, preserve evidence, and set case strategy."
      ctaName="yukon"
    />
  )
}

import { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Edmond Criminal Defense and Personal Injury Attorney',
  description:
    'Kernal & Associates serves Edmond, Oklahoma with criminal defense and personal injury representation across Oklahoma County and metro courts.',
  alternates: { canonical: '/edmond' },
  openGraph: {
    title: 'Edmond Criminal Defense and Injury Attorney | Kernal & Associates',
    description:
      'Local legal representation for Edmond residents facing criminal charges and serious injury claims.',
    url: 'https://kernallaw.com/edmond',
  },
}

export default function EdmondPage() {
  return (
    <LocationServicePage
      canonicalPath="/edmond"
      locationName="Edmond"
      subtitle="Strategic criminal defense and injury representation for Edmond and north Oklahoma County."
      introTitle="High-stakes legal issues in Edmond need immediate strategy."
      introParagraphs={[
        'Edmond cases often involve fast-moving criminal and insurance processes where early legal mistakes can shape long-term outcomes. Prompt counsel helps stabilize both courtroom and claim strategy.',
        'Kernal & Associates represents Edmond clients with trial-ready criminal defense and evidence-driven injury advocacy focused on full-value outcomes.',
      ]}
      countyFocus="Oklahoma County and North Metro Court Strategy"
      localHighlights={[
        'Rapid legal response for arrest, warrant, and bond-related risk events.',
        'Serious injury claim representation for major roadway and multi-vehicle collisions.',
        'Discipline-driven defense strategy for DUI, violent, and allegation-heavy cases.',
        'Long-horizon valuation approach for catastrophic and high-loss injury claims.',
        'Coordinated planning where licensing, employment, and record consequences overlap.',
        'Direct attorney-guided case sequencing from intake through trial posture.',
      ]}
      serviceLinks={[
        {
          href: '/edmond/criminal-defense',
          title: 'Edmond Criminal Defense',
          description: 'Local defense strategy for Edmond criminal allegations.',
          ctaName: 'edmond_service_criminal_defense',
        },
        {
          href: '/criminal-defense/sex-crimes',
          title: 'Sex Crimes Defense',
          description: 'Confidential defense for high-exposure allegation-driven cases.',
          ctaName: 'edmond_service_sex_crimes',
        },
        {
          href: '/criminal-defense/theft-fraud',
          title: 'Theft and Fraud Defense',
          description: 'Intent-focused strategy for property and financial allegations.',
          ctaName: 'edmond_service_theft_fraud',
        },
        {
          href: '/edmond/personal-injury',
          title: 'Edmond Personal Injury',
          description: 'Local claim strategy for serious injury and liability disputes.',
          ctaName: 'edmond_service_injury',
        },
        {
          href: '/personal-injury/catastrophic-injury',
          title: 'Catastrophic Injury Claims',
          description: 'Long-term damages planning for life-changing injuries.',
          ctaName: 'edmond_service_catastrophic',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Litigation',
          description: 'Commercial collision claims with layered liability strategy.',
          ctaName: 'edmond_service_truck',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/oklahoma-city',
          title: 'Oklahoma City',
          description: 'Metro hub for broader Oklahoma County representation.',
          ctaName: 'edmond_related_oklahoma_city',
        },
        {
          href: '/midwest-city',
          title: 'Midwest City',
          description: 'Nearby local page for east metro court and injury issues.',
          ctaName: 'edmond_related_midwest_city',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Guide',
          description: 'Claim-protection checklist after serious collisions.',
          ctaName: 'edmond_related_accident_guide',
        },
      ]}
      faqSubtitle="Common legal questions we hear from Edmond clients and families."
      faqs={[
        {
          question: 'How soon should I get legal help after a DUI or felony arrest in Edmond?',
          answer:
            'As soon as possible. Early legal action helps protect procedural rights, preserve evidence, and reduce avoidable case damage.',
        },
        {
          question: 'Do you handle high-value injury claims in Edmond?',
          answer:
            'Yes. We handle serious injury matters, including catastrophic losses and truck collisions, with a litigation-ready damages strategy.',
        },
        {
          question: 'Will I work directly with an attorney on my Edmond case?',
          answer:
            'Yes. Your strategy is attorney-led, with direct guidance on hearings, deadlines, insurer communications, and evidence decisions.',
        },
        {
          question: 'Can you represent me if my matter spans multiple counties?',
          answer:
            'Yes. We regularly coordinate strategy for cases that involve Oklahoma County plus neighboring jurisdictions.',
        },
      ]}
      ctaTitle="Need Representation in Edmond?"
      ctaDescription="Get immediate case guidance on criminal exposure, injury recovery, and next legal steps."
      ctaName="edmond"
    />
  )
}

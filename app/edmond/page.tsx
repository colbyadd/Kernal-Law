import type { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Edmond Criminal & Injury Lawyer',
  description:
    'Criminal defense and personal injury help for Edmond matters in north Oklahoma County and along I-35, Broadway Extension, and Memorial.',
  alternates: { canonical: '/edmond' },
  openGraph: {
    title: 'Edmond Criminal & Injury Lawyer',
    description: 'Help with north Oklahoma County charges and serious Edmond-area injury claims.',
    url: 'https://kernallaw.com/edmond',
  },
}

export default function EdmondPage() {
  return (
    <LocationServicePage
      canonicalPath="/edmond"
      locationName="Edmond"
      subtitle="Legal help for north Oklahoma County criminal filings and serious losses on Edmond-area routes."
      introTitle="Test an allegation or claim against its records"
      introParagraphs={[
        'An allegation-heavy criminal filing can read as though every disputed fact has already been decided. It has not. The charging paper should be compared with reports, recordings, witness accounts, and any documents that place the event in time.',
        'For an Edmond injury matter, early medical records and the way a crash was documented can shape later insurance questions. Preserve the original photographs, report information, care instructions, bills, and wage material instead of relying on a later summary.',
        'I-35, Broadway Extension, and Memorial carry different traffic patterns, but the same basic task applies: identify who created each record and obtain a complete copy while the event is still recent.',
      ]}
      countyFocus="North Oklahoma County facts, files, and roadways"
      localHighlights={[
        'A filed charge should be checked against the underlying reports and recordings.',
        'Release papers can contain instructions that apply outside the courtroom.',
        'Witness accounts are easier to evaluate when time and location are documented.',
        'I-35 incidents may involve interstate traffic and commercial vehicles.',
        'Broadway Extension records can help establish lane, direction, and travel sequence.',
        'Memorial corridor crashes may involve several vehicles or insurance policies.',
        'Serious-loss claims require complete medical and employment documentation.',
        'Do not discard a notice merely because the same information appears elsewhere.',
      ]}
      serviceLinks={[
        {
          href: '/edmond/criminal-defense',
          title: 'Edmond Criminal Defense',
          description: 'Comparison of north Oklahoma County allegations with the available evidence.',
          ctaName: 'edmond_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Review of the encounter, field testing, chemical testing, and court documents.',
          ctaName: 'edmond_service_dui_dwi',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Checking warrant status and the court file before arranging an appearance.',
          ctaName: 'edmond_service_warrants',
        },
        {
          href: '/edmond/personal-injury',
          title: 'Edmond Personal Injury',
          description: 'Claims involving serious crashes, lasting harm, and north-metro travel.',
          ctaName: 'edmond_service_personal_injury',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Documenting roadway events, treatment, time away from work, and vehicle loss.',
          ctaName: 'edmond_service_car_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Reading policy terms and notices when the responsible driver lacks coverage.',
          ctaName: 'edmond_service_uninsured_motorist',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Checking how evidence was found, handled, tested, and attributed.',
          ctaName: 'edmond_service_drug_charges',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Claims',
          description: 'Preserving commercial records that may not exist in an ordinary car claim.',
          ctaName: 'edmond_service_truck_accidents',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/oklahoma-city/criminal-defense',
          title: 'Oklahoma City Criminal Defense',
          description: 'County-wide criminal information for matters extending beyond north OKC.',
          ctaName: 'edmond_related_nearby_a',
        },
        {
          href: '/stillwater/personal-injury',
          title: 'Stillwater Personal Injury',
          description: 'Injury information for events on connected routes north of Edmond.',
          ctaName: 'edmond_related_nearby_b',
        },
        {
          href: '/locations',
          title: 'Oklahoma Service Areas',
          description: 'Choose a city or county page that matches the matter location.',
          ctaName: 'edmond_related_locations_hub',
        },
        {
          href: '/resources',
          title: 'Court and Claim Resources',
          description: 'Read focused guides before gathering documents for a consultation.',
          ctaName: 'edmond_related_resources_hub',
        },
        {
          href: '/resources/oklahoma-bond-and-release-conditions',
          title: 'Bond and Release Conditions',
          description: 'A guide to the instructions that can follow release from custody.',
          ctaName: 'edmond_related_local_guide',
        },
      ]}
      faqSubtitle="Edmond questions about allegations, serious injuries, and record collection."
      faqs={[
        {
          question: 'Is the charging paper the complete criminal record?',
          answer:
            'No. It identifies the filed allegation, but reports, recordings, testing, and witness information may add, contradict, or clarify facts.',
        },
        {
          question: 'What should I save after a serious north-metro crash?',
          answer:
            'Keep original photographs, report details, medical instructions, bills, wage documents, vehicle records, and every insurance letter or email.',
        },
        {
          question: 'Why does the exact Edmond roadway matter?',
          answer:
            'Road, direction, lane, timing, and responding agency can point to different witnesses, recordings, traffic material, and reports.',
        },
        {
          question: 'What if I do not have all the records yet?',
          answer:
            'Bring what you have and a list of missing items. The source of each missing record can be identified during the first review.',
        },
      ]}
      ctaTitle="Review an Edmond Charge or Injury File"
      ctaDescription="Bring the documents you have and a list of records that have not arrived."
      ctaName="edmond"
    />
  )
}

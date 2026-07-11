import type { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Moore Criminal & Injury Lawyer',
  description:
    'Criminal defense and personal injury help for Moore matters involving Cleveland County, I-35, and south-metro travel.',
  alternates: { canonical: '/moore' },
  openGraph: {
    title: 'Moore Criminal & Injury Lawyer',
    description: 'Legal help for Moore criminal cases and south-metro injury claims.',
    url: 'https://kernallaw.com/moore',
  },
}

export default function MoorePage() {
  return (
    <LocationServicePage
      canonicalPath="/moore"
      locationName="Moore"
      subtitle="Help for Cleveland County criminal filings and injury claims affecting Moore and the south metro."
      introTitle="Use the paperwork to find the first required step"
      introParagraphs={[
        'For a Moore criminal matter, begin with the citation or charging document, the release paperwork, and the next listed appearance. Those records show which Cleveland County case needs attention and whether a separate warrant or compliance issue exists.',
        'A crash on I-35 can generate a report, photographs, towing records, repair estimates, medical visits, and several insurance contacts. Keep each item even if it seems repetitive; the date and source can matter later.',
        'South-metro events sometimes touch more than one community. Organizing records by agency, provider, or insurer makes it easier to see what is missing without guessing where the matter belongs.',
      ]}
      countyFocus="Moore, Cleveland County, and I-35 documentation"
      localHighlights={[
        'The charging paper identifies the filed allegation and case number.',
        'Bond paperwork may list requirements that apply before court.',
        'A missed appearance can create a warrant issue separate from the original charge.',
        'I-35 collision evidence may include traffic, vehicle, and commercial records.',
        'Photographs should be saved in their original files when possible.',
        'Medical paperwork can show when symptoms, referrals, and treatment occurred.',
        'Repair estimates and total-loss notices belong with the claim file.',
        'Keep a dated list of calls with agencies, providers, and insurance companies.',
      ]}
      serviceLinks={[
        {
          href: '/moore/criminal-defense',
          title: 'Moore Criminal Defense',
          description: 'Help understanding Cleveland County filings, dates, and release obligations.',
          ctaName: 'moore_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Review of roadside contact, testing, video, and driver-license concerns.',
          ctaName: 'moore_service_dui_dwi',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Finding the underlying case and determining the required court appearance.',
          ctaName: 'moore_service_warrants',
        },
        {
          href: '/moore/personal-injury',
          title: 'Moore Personal Injury',
          description: 'Claims involving south-metro families, collisions, and other negligence events.',
          ctaName: 'moore_service_personal_injury',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Review of fault records, medical care, vehicle damage, and financial loss.',
          ctaName: 'moore_service_car_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Identifying coverage under the available household and vehicle policies.',
          ctaName: 'moore_service_uninsured_motorist',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Checking the search, custody, test results, and alleged connection to the substance.',
          ctaName: 'moore_service_drug_charges',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Claims',
          description: 'Review of commercial driver, carrier, equipment, and coverage material.',
          ctaName: 'moore_service_truck_accidents',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Cleveland County defense information for matters connected to nearby Norman.',
          ctaName: 'moore_related_nearby_a',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Information for serious injury matters extending into the wider metro.',
          ctaName: 'moore_related_nearby_b',
        },
        {
          href: '/locations',
          title: 'Cities and Counties Served',
          description: 'Check the site page for another Oklahoma community or county.',
          ctaName: 'moore_related_locations_hub',
        },
        {
          href: '/resources',
          title: 'Legal Information Library',
          description: 'Browse guides on criminal cases, collisions, medical records, and coverage.',
          ctaName: 'moore_related_resources_hub',
        },
        {
          href: '/resources/oklahoma-dui-process',
          title: 'Oklahoma DUI Process',
          description: 'An outline of the court and driving issues that may follow an arrest.',
          ctaName: 'moore_related_local_guide',
        },
      ]}
      faqSubtitle="Practical answers for Moore court matters and collision records."
      faqs={[
        {
          question: 'Which papers matter most after a Moore arrest?',
          answer:
            'Keep the citation or charge, bond paperwork, release instructions, property receipt, and every notice showing a date or case number.',
        },
        {
          question: 'What if the paperwork shows a warrant?',
          answer:
            'Do not rely on a rumor or an old online entry. The warrant and originating case should be confirmed before deciding the next step.',
        },
        {
          question: 'How should I organize an I-35 crash file?',
          answer:
            'Separate scene and vehicle material from medical records, bills, wage documents, and insurer correspondence, then arrange each group by date.',
        },
        {
          question: 'Does it matter if treatment happened outside Moore?',
          answer:
            'The location of care does not make the records less important. Keep documents from every provider so the treatment chronology is complete.',
        },
      ]}
      ctaTitle="Bring Your Moore Papers and Dates"
      ctaDescription="A short review can identify the court, claim, or record that needs attention first."
      ctaName="moore"
    />
  )
}

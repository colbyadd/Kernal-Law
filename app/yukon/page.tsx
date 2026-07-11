import type { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Yukon Criminal & Injury Lawyer',
  description:
    'Criminal defense and personal injury help for Yukon matters involving Canadian County, I-40, the Kilpatrick Turnpike, and west-metro travel.',
  alternates: { canonical: '/yukon' },
  openGraph: {
    title: 'Yukon Criminal & Injury Lawyer',
    description: 'Help with Canadian County filings and serious west-metro injury claims.',
    url: 'https://kernallaw.com/yukon',
  },
}

export default function YukonPage() {
  return (
    <LocationServicePage
      canonicalPath="/yukon"
      locationName="Yukon"
      subtitle="Help with Canadian County criminal matters and west-metro crash or industrial injury claims."
      introTitle="Confirm the venue before working from the deadline"
      introParagraphs={[
        'A Yukon incident may lead to a Canadian County filing even when the people involved travel or work elsewhere in the metro. Use the case number and court notice to confirm the venue, then list the release, appearance, and response dates in one place.',
        'I-40 and the Kilpatrick Turnpike carry daily west-metro traffic. After a serious crash, retain the report information, original images, vehicle papers, medical records, bills, employer documents, and letters from every insurance company.',
        'Industrial-loss claims can add workplace and company records to the medical and insurance file. Keep those sources distinct so the incident, treatment, time away from work, and claimed losses can be followed in order.',
      ]}
      countyFocus="Canadian County venue and west-metro record sources"
      localHighlights={[
        'The case number and filed notice identify the court handling the criminal matter.',
        'West-metro enforcement activity may not match a mailing address or usual commute.',
        'Release conditions and appearance dates should be copied to a reliable calendar.',
        'I-40 crashes can involve local drivers, freight traffic, and several vehicles.',
        'Kilpatrick Turnpike events may produce roadway records separate from the police report.',
        'Workplace documents may show job duties, incident reporting, and time missed.',
        'Keep insurer correspondence grouped by company and policy.',
        'Travel for treatment should appear in a complete medical chronology.',
      ]}
      serviceLinks={[
        {
          href: '/yukon/criminal-defense',
          title: 'Yukon Criminal Defense',
          description: 'Help confirming Canadian County venue, filings, and the next obligation.',
          ctaName: 'yukon_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Review of traffic evidence, testing material, license notices, and court papers.',
          ctaName: 'yukon_service_dui_dwi',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Checking which court issued the warrant and what proceeding remains open.',
          ctaName: 'yukon_service_warrants',
        },
        {
          href: '/yukon/personal-injury',
          title: 'Yukon Personal Injury',
          description: 'Claims involving west-metro roadways, industrial events, and serious harm.',
          ctaName: 'yukon_service_personal_injury',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Review of crash evidence, care history, damaged property, and income loss.',
          ctaName: 'yukon_service_car_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Locating policy benefits when the other vehicle has too little insurance.',
          ctaName: 'yukon_service_uninsured_motorist',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Reviewing the alleged possession, search basis, chain of custody, and test.',
          ctaName: 'yukon_service_drug_charges',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Claims',
          description: 'Obtaining driver, company, equipment, and policy information after a wreck.',
          ctaName: 'yukon_service_truck_accidents',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/el-reno/criminal-defense',
          title: 'El Reno Criminal Defense',
          description: 'Canadian County information for criminal matters farther west.',
          ctaName: 'yukon_related_nearby_a',
        },
        {
          href: '/mustang/personal-injury',
          title: 'Mustang Personal Injury',
          description: 'Claim information for nearby west-south metro travel.',
          ctaName: 'yukon_related_nearby_b',
        },
        {
          href: '/locations',
          title: 'Regional Coverage Pages',
          description: 'Look up a connected city or county in the service-area directory.',
          ctaName: 'yukon_related_locations_hub',
        },
        {
          href: '/resources',
          title: 'Prepare With a Legal Guide',
          description: 'Review Oklahoma checklists for charges, collisions, and insurance matters.',
          ctaName: 'yukon_related_resources_hub',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'After a Car Accident',
          description: 'A guide to medical care, scene material, insurer calls, and record keeping.',
          ctaName: 'yukon_related_local_guide',
        },
      ]}
      faqSubtitle="Yukon answers about Canadian County venue and west-metro records."
      faqs={[
        {
          question: 'How do I confirm where a Yukon criminal case is filed?',
          answer:
            'Use the case number, charging paper, bond document, and court notice. Bring all of them if the venue or date appears inconsistent.',
        },
        {
          question: 'What should I keep after a Kilpatrick Turnpike crash?',
          answer:
            'Preserve the precise location, time, report details, original photographs, vehicle records, medical documents, and insurer communications.',
        },
        {
          question: 'Do workplace records matter in an industrial injury claim?',
          answer:
            'They may document job duties, how the event was reported, time away, pay, and communications connected to the incident.',
        },
        {
          question: 'What if several insurance companies contact me?',
          answer:
            'Create a separate folder and call log for each company. Save the policy or claim number and any requested response date.',
        },
      ]}
      ctaTitle="Review a Yukon Court or Injury File"
      ctaDescription="Bring the Canadian County notice and the west-metro records you have saved."
      ctaName="yukon"
    />
  )
}

import type { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Norman Criminal & Injury Lawyer',
  description:
    'Legal help for Norman criminal cases and injury claims involving Cleveland County, I-35, SH-9, and south-metro travel.',
  alternates: { canonical: '/norman' },
  openGraph: {
    title: 'Norman Criminal & Injury Lawyer',
    description: 'Help with Cleveland County court matters and Norman-area injury claims.',
    url: 'https://kernallaw.com/norman',
  },
}

export default function NormanPage() {
  return (
    <LocationServicePage
      canonicalPath="/norman"
      locationName="Norman"
      subtitle="Criminal defense and injury help for Norman matters in Cleveland County and along south-metro routes."
      introTitle="Two calendars may start after one Norman incident"
      introParagraphs={[
        'A criminal filing in Cleveland County has court dates and release requirements. A collision claim has medical, vehicle, and insurance deadlines. When one Norman event creates both, keep the papers in separate groups and note every date on a single calendar.',
        'Student-area and corridor enforcement can produce citations, body-camera footage, dispatch records, test results, and witness accounts. Bring the charging paper and release instructions first; the remaining records can then be identified by source.',
        'For an injury on I-35 south or SH-9, preserve scene photographs, treatment records, bills, and communications from every insurer. A clear chronology is especially useful when care or travel crosses the south metro.',
      ]}
      countyFocus="Cleveland County filings and Norman travel corridors"
      localHighlights={[
        'A Cleveland County court notice controls the date and place of appearance.',
        'Student-area incidents may create school, work, and court questions at the same time.',
        'Release instructions should be checked for contact, travel, or reporting terms.',
        'I-35 south crashes may involve commuters, commercial traffic, and several vehicles.',
        'SH-9 incidents can leave records with different responding agencies or providers.',
        'A treatment timeline should include referrals and follow-up care outside Norman.',
        'Save screenshots or copies of insurer messages before responding.',
        'List witnesses by name, contact information, and what each person observed.',
      ]}
      serviceLinks={[
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Review of Cleveland County charges, court notices, and release instructions.',
          ctaName: 'norman_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Help sorting the criminal case, testing material, and driver-license questions.',
          ctaName: 'norman_service_dui_dwi',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Confirmation of the warrant, the originating case, and the correct appearance process.',
          ctaName: 'norman_service_warrants',
        },
        {
          href: '/norman/personal-injury',
          title: 'Norman Personal Injury',
          description: 'Claims affecting Norman commuters, students, families, and south-metro travelers.',
          ctaName: 'norman_service_personal_injury',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Collecting collision reports, vehicle evidence, care records, and wage information.',
          ctaName: 'norman_service_car_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Checking available policies when liability coverage does not cover the loss.',
          ctaName: 'norman_service_uninsured_motorist',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Examination of the alleged substance, search, testing, statements, and possession proof.',
          ctaName: 'norman_service_drug_charges',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Claims',
          description: 'Claims that may require carrier, driver, cargo, maintenance, and policy records.',
          ctaName: 'norman_service_truck_accidents',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/moore/criminal-defense',
          title: 'Moore Criminal Defense',
          description: 'Nearby information for south-metro criminal matters in Cleveland County.',
          ctaName: 'norman_related_nearby_a',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Metro injury information for serious negligence and transportation events.',
          ctaName: 'norman_related_nearby_b',
        },
        {
          href: '/locations',
          title: 'Service Area Directory',
          description: 'Browse other Oklahoma cities and counties served by the firm.',
          ctaName: 'norman_related_locations_hub',
        },
        {
          href: '/resources',
          title: 'Oklahoma Legal Guides',
          description: 'Find plain-language guides for arrests, court proceedings, and claims.',
          ctaName: 'norman_related_resources_hub',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Steps After an Oklahoma Crash',
          description: 'What to save after medical care begins and insurance calls start.',
          ctaName: 'norman_related_local_guide',
        },
      ]}
      faqSubtitle="Common Norman questions about court papers, crash records, and timing."
      faqs={[
        {
          question: 'Where do I find the next date for a Norman criminal case?',
          answer:
            'Start with the citation, bond paperwork, release instructions, or filed court notice. Bring every version so any conflict can be checked.',
        },
        {
          question: 'Should I keep school or employment documents after an arrest?',
          answer:
            'Keep any document that shows a deadline, consequence, or instruction connected to the incident, along with the court papers.',
        },
        {
          question: 'What helps document an I-35 or SH-9 injury claim?',
          answer:
            'Preserve scene photographs, the report number, vehicle information, treatment records, bills, wage records, and all insurer messages.',
        },
        {
          question: 'Can a consultation cover a matter involving both court and insurance?',
          answer:
            'Yes. The two issues can be reviewed separately so each deadline and record source is clear.',
        },
      ]}
      ctaTitle="Discuss a Norman Case or Claim"
      ctaDescription="Bring the Cleveland County papers, insurer messages, and the dates already known."
      ctaName="norman"
    />
  )
}

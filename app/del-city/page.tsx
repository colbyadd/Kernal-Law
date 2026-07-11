import type { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Del City Criminal & Injury Lawyer',
  description:
    'Criminal defense and injury help for Del City matters in southeast Oklahoma County, including claims tied to SE 29th Street and I-40.',
  alternates: { canonical: '/del-city' },
  openGraph: {
    title: 'Del City Criminal & Injury Lawyer',
    description: 'Help with southeast Oklahoma County court matters and Del City injury claims.',
    url: 'https://kernallaw.com/del-city',
  },
}

export default function DelCityPage() {
  return (
    <LocationServicePage
      canonicalPath="/del-city"
      locationName="Del City"
      subtitle="Legal help for southeast Oklahoma County charges, bond questions, collisions, and premises claims."
      introTitle="Write down what happened before accounts drift"
      introParagraphs={[
        'Del City criminal filings may depend heavily on competing accounts of an event. Save messages, photographs, and court papers, and make a private chronology while names, times, and locations are still fresh. Do not fill gaps with assumptions.',
        'A bond issue can require attention before the full evidence arrives. The release order, next appearance, and any contact instruction should be read first so a misunderstanding does not become another alleged violation.',
        'For a collision or premises injury near SE 29th Street or an I-40 connector, note the exact place and preserve photographs, witness information, treatment records, bills, and insurance correspondence.',
      ]}
      countyFocus="Southeast metro accounts, bond terms, and site evidence"
      localHighlights={[
        'Write a private chronology with names, times, and exact locations.',
        'Keep original messages and photographs rather than edited copies.',
        'The release order controls any bond-related contact or reporting term.',
        'A witness list should distinguish what each person actually observed.',
        'SE 29th Street incidents may involve nearby businesses or roadway witnesses.',
        'I-40 connector crashes can generate records from more than one source.',
        'Premises photographs should show the condition and surrounding area.',
        'Save medical instructions and bills from every provider visited.',
      ]}
      serviceLinks={[
        {
          href: '/del-city/criminal-defense',
          title: 'Del City Criminal Defense',
          description: 'Review of allegation-driven filings, witness accounts, and court requirements.',
          ctaName: 'del_city_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Checking the traffic contact, observations, tests, recordings, and notices.',
          ctaName: 'del_city_service_dui_dwi',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Finding the case number, warrant status, and next required court action.',
          ctaName: 'del_city_service_warrants',
        },
        {
          href: '/del-city/personal-injury',
          title: 'Del City Personal Injury',
          description: 'Claims arising from southeast-metro collisions and unsafe premises.',
          ctaName: 'del_city_service_personal_injury',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Preserving scene, witness, vehicle, treatment, and insurance information.',
          ctaName: 'del_city_service_car_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Checking first-party coverage after inadequate liability insurance is found.',
          ctaName: 'del_city_service_uninsured_motorist',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Examining the basis for contact, search, possession claim, and testing.',
          ctaName: 'del_city_service_drug_charges',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Claims',
          description: 'Claims requiring records from a commercial driver, owner, or carrier.',
          ctaName: 'del_city_service_truck_accidents',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/midwest-city/criminal-defense',
          title: 'Midwest City Criminal Defense',
          description: 'Information for neighboring east-metro criminal proceedings.',
          ctaName: 'del_city_related_nearby_a',
        },
        {
          href: '/choctaw/personal-injury',
          title: 'Choctaw Personal Injury',
          description: 'Claim information for injuries on eastern Oklahoma County routes.',
          ctaName: 'del_city_related_nearby_b',
        },
        {
          href: '/locations',
          title: 'Location Page Index',
          description: 'Find local information for another Oklahoma city or county.',
          ctaName: 'del_city_related_locations_hub',
        },
        {
          href: '/resources',
          title: 'Oklahoma Guide Collection',
          description: 'Read checklists about arrests, court instructions, crashes, and insurance.',
          ctaName: 'del_city_related_resources_hub',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'First Steps After Arrest',
          description: 'A guide to documents, release terms, police contact, and upcoming appearances.',
          ctaName: 'del_city_related_local_guide',
        },
      ]}
      faqSubtitle="Del City questions about bond papers, disputed accounts, and injury proof."
      faqs={[
        {
          question: 'What should go in my event chronology?',
          answer:
            'Record the date, time, place, people present, sequence you remember, and the source of any message or photograph. Mark uncertainty honestly.',
        },
        {
          question: 'What if the release order limits contact?',
          answer:
            'Follow the written term unless the court changes it. Bring the full order to a consultation instead of relying on a verbal summary.',
        },
        {
          question: 'What helps document a premises injury?',
          answer:
            'Photographs of the condition and surrounding area, witness information, incident reports, medical papers, and clothing or footwear may be relevant.',
        },
        {
          question: 'Should I respond to an insurer before I have the report?',
          answer:
            'Keep the request and note any deadline. A response should be based on known facts and available documents, not an incomplete recollection.',
        },
      ]}
      ctaTitle="Discuss a Del City Charge or Claim"
      ctaDescription="Bring the release order, event chronology, and any photographs or insurance papers."
      ctaName="del_city"
    />
  )
}

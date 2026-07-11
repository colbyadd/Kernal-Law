import type { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Oklahoma City Lawyer',
  description:
    'Criminal defense and personal injury help for Oklahoma City matters in Oklahoma County, including cases tied to major metro roads.',
  alternates: { canonical: '/oklahoma-city' },
  openGraph: {
    title: 'Oklahoma City Lawyer | Kernal & Associates',
    description: 'Legal help for Oklahoma County court matters and Oklahoma City injury claims.',
    url: 'https://kernallaw.com/oklahoma-city',
  },
}

export default function OklahomaCityPage() {
  return (
    <LocationServicePage
      canonicalPath="/oklahoma-city"
      locationName="Oklahoma City"
      subtitle="Help with Oklahoma County criminal cases and injury claims arising across the Oklahoma City metro."
      introTitle="Start with the next date or the missing record"
      introParagraphs={[
        'An Oklahoma City criminal case may begin with a bond decision, an active warrant, or charging papers that list a near-term court setting. Keep the filed papers and release instructions together so the first review can identify what is due and what records are not yet available.',
        'After a serious metro collision, save photographs, the report number, medical paperwork, bills, and every insurer message. Crashes on I-35, I-40, I-44, or the Kilpatrick Turnpike may leave records with more than one agency, medical provider, or insurance company.',
        'The criminal and injury sides require different answers. One starts with the charge and court calendar; the other starts with fault, medical care, coverage, and loss documentation.',
      ]}
      countyFocus="Oklahoma County courts and metro road records"
      localHighlights={[
        'Oklahoma County criminal dockets can move quickly after filing.',
        'Bond terms should be read before the next court appearance.',
        'An active warrant calls for confirmation of the case and court information.',
        'I-35 and I-40 incidents may involve busy interchange traffic and multiple witnesses.',
        'I-44 and Kilpatrick Turnpike crashes can produce separate roadway and vehicle records.',
        'Medical records and bills should be kept in date order after a collision.',
        'Insurer letters and recorded-statement requests should not be ignored.',
        'A short event timeline helps separate confirmed facts from recollection.',
      ]}
      serviceLinks={[
        {
          href: '/oklahoma-city/criminal-defense',
          title: 'Oklahoma City Criminal Defense',
          description: 'Help reading Oklahoma County charges, release terms, and the next court setting.',
          ctaName: 'oklahoma_city_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Review of the stop, testing records, court case, and related driving issues.',
          ctaName: 'oklahoma_city_service_dui_dwi',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Help confirming an Oklahoma County warrant and arranging the proper court step.',
          ctaName: 'oklahoma_city_service_warrants',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Claims involving metro collisions, negligence, medical care, and insurance coverage.',
          ctaName: 'oklahoma_city_service_personal_injury',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Organizing reports, photographs, treatment records, bills, and lost-income proof.',
          ctaName: 'oklahoma_city_service_car_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Policy review when the driver who caused the crash has inadequate coverage.',
          ctaName: 'oklahoma_city_service_uninsured_motorist',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Review of possession allegations, searches, laboratory results, and intent evidence.',
          ctaName: 'oklahoma_city_service_drug_charges',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Claims',
          description: 'Commercial-vehicle claims involving driver, carrier, vehicle, and insurance documents.',
          ctaName: 'oklahoma_city_service_truck_accidents',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/edmond/criminal-defense',
          title: 'Edmond Criminal Defense',
          description: 'North-metro information for criminal filings connected to Oklahoma County.',
          ctaName: 'oklahoma_city_related_nearby_a',
        },
        {
          href: '/moore/personal-injury',
          title: 'Moore Personal Injury',
          description: 'Injury information for south-metro commuters and I-35 collisions.',
          ctaName: 'oklahoma_city_related_nearby_b',
        },
        {
          href: '/locations',
          title: 'Locations Hub',
          description: 'Find other city and county pages for Oklahoma legal matters.',
          ctaName: 'oklahoma_city_related_locations_hub',
        },
        {
          href: '/resources',
          title: 'Legal Resources Hub',
          description: 'Read practical Oklahoma guides about court cases, crashes, and insurance.',
          ctaName: 'oklahoma_city_related_resources_hub',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'What to Do After an Arrest',
          description: 'A first-days checklist for papers, release terms, police contact, and court dates.',
          ctaName: 'oklahoma_city_related_local_guide',
        },
      ]}
      faqSubtitle="Answers about Oklahoma County deadlines, records, and first steps."
      faqs={[
        {
          question: 'What should I check first after an Oklahoma City arrest?',
          answer:
            'Read the release papers and court notice, confirm every listed date, and keep the documents where you can bring them to a consultation.',
        },
        {
          question: 'What records matter after a crash on an Oklahoma City interstate?',
          answer:
            'Save the report number, scene photographs, witness information, medical records, bills, repair material, and insurer correspondence.',
        },
        {
          question: 'Can the same event create both a court case and an injury claim?',
          answer:
            'Yes. A single incident can produce separate criminal, medical, and insurance questions, each with its own records and deadlines.',
        },
        {
          question: 'What should I bring to the first meeting?',
          answer:
            'Bring court papers, release terms, reports, photographs, medical documents, insurance messages, and a brief timeline.',
        },
      ]}
      ctaTitle="Talk About an Oklahoma City Matter"
      ctaDescription="Bring the papers and known dates so the immediate question can be identified."
      ctaName="oklahoma_city"
    />
  )
}

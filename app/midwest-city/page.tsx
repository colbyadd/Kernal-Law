import type { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Midwest City Lawyer',
  description:
    'Legal help for Midwest City criminal matters, probation issues, and injury claims tied to east Oklahoma County and I-40.',
  alternates: { canonical: '/midwest-city' },
  openGraph: {
    title: 'Midwest City Lawyer | Kernal & Associates',
    description: 'Criminal defense and injury help for Midwest City and east Oklahoma County.',
    url: 'https://kernallaw.com/midwest-city',
  },
}

export default function MidwestCityPage() {
  return (
    <LocationServicePage
      canonicalPath="/midwest-city"
      locationName="Midwest City"
      subtitle="Help with east Oklahoma County court matters, probation allegations, and injury claims near I-40."
      introTitle="A new allegation may affect an older court obligation"
      introParagraphs={[
        'In Midwest City, a new charge or reported violation may raise questions about an existing probation case. Bring both sets of court papers. The filing dates, supervision terms, and alleged conduct need to be separated before anyone can see how the matters connect.',
        'East-metro injury files often start with an I-40 report, vehicle photographs, treatment paperwork, and an early insurance request. Save those materials along with policy notices, repair documents, and proof of missed work.',
        'The first useful task is different for each file: confirm the court obligation in a criminal matter, or identify the missing liability, medical, and coverage records in an injury matter.',
      ]}
      countyFocus="East Oklahoma County dockets, claims, and I-40"
      localHighlights={[
        'Probation terms should be read alongside any new charging document.',
        'A revocation allegation has its own notice, dates, and supporting records.',
        'Court and supervision paperwork should be kept in separate labeled groups.',
        'I-40 collisions may involve through traffic, commercial vehicles, or several insurers.',
        'The report number helps identify the responding agency and incident file.',
        'Policy declarations can reveal coverage not apparent from the crash report.',
        'Treatment gaps should be explained by actual records, not assumptions.',
        'A written call log can prevent confusion when several adjusters make contact.',
      ]}
      serviceLinks={[
        {
          href: '/midwest-city/criminal-defense',
          title: 'Midwest City Criminal Defense',
          description: 'Help with east-metro filings, court notices, and related probation questions.',
          ctaName: 'midwest_city_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Reading the arrest documents, test records, driving notices, and court dates.',
          ctaName: 'midwest_city_service_dui_dwi',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Confirming the active matter and finding the court requirement behind it.',
          ctaName: 'midwest_city_service_warrants',
        },
        {
          href: '/midwest-city/personal-injury',
          title: 'Midwest City Personal Injury',
          description: 'Claims involving east-metro vehicle incidents and other negligence losses.',
          ctaName: 'midwest_city_service_personal_injury',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Building a dated file of roadway, vehicle, medical, and income material.',
          ctaName: 'midwest_city_service_car_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Coverage review when another driver has no policy or insufficient limits.',
          ctaName: 'midwest_city_service_uninsured_motorist',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Reviewing the contact, search, evidence handling, laboratory work, and statements.',
          ctaName: 'midwest_city_service_drug_charges',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Claims',
          description: 'Gathering carrier and vehicle material after a commercial collision.',
          ctaName: 'midwest_city_service_truck_accidents',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/del-city/criminal-defense',
          title: 'Del City Criminal Defense',
          description: 'Defense information for neighboring southeast-metro court matters.',
          ctaName: 'midwest_city_related_nearby_a',
        },
        {
          href: '/shawnee/personal-injury',
          title: 'Shawnee Personal Injury',
          description: 'Claim information for crashes continuing east on regional roads.',
          ctaName: 'midwest_city_related_nearby_b',
        },
        {
          href: '/locations',
          title: 'Find Another Location',
          description: 'Open the page for a nearby city, county, or court area.',
          ctaName: 'midwest_city_related_locations_hub',
        },
        {
          href: '/resources',
          title: 'Browse Legal Resources',
          description: 'Use the guide library to prepare documents and questions.',
          ctaName: 'midwest_city_related_resources_hub',
        },
        {
          href: '/resources/oklahoma-uninsured-motorist-claim-guide',
          title: 'Uninsured Motorist Guide',
          description: 'How an available policy may respond when liability coverage falls short.',
          ctaName: 'midwest_city_related_local_guide',
        },
      ]}
      faqSubtitle="Midwest City answers about probation paperwork, I-40 evidence, and insurance."
      faqs={[
        {
          question: 'What should I bring if a new charge may affect probation?',
          answer:
            'Bring the new citation or charge, the probation order, reporting records, notices of violation, and the dates for both court files.',
        },
        {
          question: 'Is a probation allegation the same as a new criminal case?',
          answer:
            'No. They may concern the same event, but the filings, court obligations, and records should be reviewed separately.',
        },
        {
          question: 'What evidence should I save after an I-40 collision?',
          answer:
            'Keep scene and vehicle photographs, report information, medical papers, repair records, wage proof, and all policy correspondence.',
        },
        {
          question: 'Why should I keep my own insurer letters?',
          answer:
            'Your policy may contain coverage that matters if the responsible driver is uninsured or underinsured, and notices can have response dates.',
        },
      ]}
      ctaTitle="Sort Out a Midwest City Legal Matter"
      ctaDescription="Bring the current filing, any older orders, and the claim records already collected."
      ctaName="midwest_city"
    />
  )
}

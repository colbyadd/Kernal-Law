import type { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Mustang Criminal & Injury Lawyer',
  description:
    'Legal help for Mustang criminal cases and serious injury claims involving Canadian County, SH-152, and west-south metro travel.',
  alternates: { canonical: '/mustang' },
  openGraph: {
    title: 'Mustang Criminal & Injury Lawyer',
    description: 'Help with Canadian County court matters and Mustang-area injury claims.',
    url: 'https://kernallaw.com/mustang',
  },
}

export default function MustangPage() {
  return (
    <LocationServicePage
      canonicalPath="/mustang"
      locationName="Mustang"
      subtitle="Help for Canadian County charges, warrants, and serious injury claims along Mustang-area routes."
      introTitle="A case can outlast the moment that started it"
      introParagraphs={[
        'A Mustang charge or warrant can affect work, travel, and ordinary plans long after the original incident. Start with the Canadian County case number, the charging or warrant information, every notice, and a list of dates that may have been missed.',
        'A serious collision near SH-152 may leave lasting medical and financial records. Keep the scene material, vehicle papers, care instructions, bills, wage information, and insurance correspondence even when treatment continues over time.',
        'The useful question at intake is not whether every document is already available. It is whether the next court requirement is known and whether the main sources of injury proof have been identified.',
      ]}
      countyFocus="Mustang court obligations and SH-152 claim records"
      localHighlights={[
        'A warrant should be tied to its court file and original allegation.',
        'Old notices may explain a missed date or unresolved requirement.',
        'Canadian County papers should be matched by case number, not appearance alone.',
        'SH-152 collisions may involve daily commuters and cross-metro travel.',
        'Original image files retain date and location information that copies may lose.',
        'Ongoing treatment records can show how symptoms and restrictions changed.',
        'Wage records help document the financial effect of missed work.',
        'Keep a list of open questions beside the documents already collected.',
      ]}
      serviceLinks={[
        {
          href: '/mustang/criminal-defense',
          title: 'Mustang Criminal Defense',
          description: 'Help matching Canadian County allegations, notices, and court obligations.',
          ctaName: 'mustang_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Review of the stop, observations, tests, driving documents, and filing.',
          ctaName: 'mustang_service_dui_dwi',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Identifying the unresolved case and arranging the appropriate court response.',
          ctaName: 'mustang_service_warrants',
        },
        {
          href: '/mustang/personal-injury',
          title: 'Mustang Personal Injury',
          description: 'Claims involving serious harm to west-south metro residents and families.',
          ctaName: 'mustang_service_personal_injury',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Organizing scene material, health care, vehicle damage, and work loss.',
          ctaName: 'mustang_service_car_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Finding available benefits when the responsible policy is missing or limited.',
          ctaName: 'mustang_service_uninsured_motorist',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Review of the search, alleged control, evidence handling, and laboratory record.',
          ctaName: 'mustang_service_drug_charges',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Claims',
          description: 'Commercial claims involving company records beyond the ordinary collision report.',
          ctaName: 'mustang_service_truck_accidents',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/newcastle/criminal-defense',
          title: 'Newcastle Criminal Defense',
          description: 'Criminal-defense information for a connected southbound market.',
          ctaName: 'mustang_related_nearby_a',
        },
        {
          href: '/moore/personal-injury',
          title: 'Moore Personal Injury',
          description: 'Injury information for nearby south-metro commuting routes.',
          ctaName: 'mustang_related_nearby_b',
        },
        {
          href: '/locations',
          title: 'Explore Nearby Markets',
          description: 'Move to another city or county page based on the event location.',
          ctaName: 'mustang_related_locations_hub',
        },
        {
          href: '/resources',
          title: 'Read an Oklahoma Guide',
          description: 'Use the resource page to learn which papers and dates may matter.',
          ctaName: 'mustang_related_resources_hub',
        },
        {
          href: '/resources/oklahoma-dui-process',
          title: 'DUI Court and License Guide',
          description: 'A plain overview of the separate issues that may follow a DUI arrest.',
          ctaName: 'mustang_related_local_guide',
        },
      ]}
      faqSubtitle="Mustang questions about unresolved court files and long-term injury records."
      faqs={[
        {
          question: 'What information helps confirm a Mustang warrant?',
          answer:
            'A full name, date of birth, case number if known, old citation, and prior court notice can help identify the correct file.',
        },
        {
          question: 'Should I keep papers from an older court date?',
          answer:
            'Yes. An older notice may show the court, allegation, case number, and requirement that led to the present warrant question.',
        },
        {
          question: 'How long should I save records after a serious SH-152 crash?',
          answer:
            'Keep the full file while treatment and the claim remain open, including later referrals, bills, work records, and policy correspondence.',
        },
        {
          question: 'What can I do if some injury records are missing?',
          answer:
            'List each provider, employer, insurer, and agency involved. That source list makes it easier to request a complete copy.',
        },
      ]}
      ctaTitle="Talk About a Mustang Matter"
      ctaDescription="Bring the old and current court papers or the injury records collected to date."
      ctaName="mustang"
    />
  )
}

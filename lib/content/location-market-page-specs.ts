import type { Metadata } from 'next'
import type { LocationServicePageProps } from '@/app/components/LocationServicePage'
import { BASE_URL } from '@/lib/constants'
import { getAllMarketSlugs, getMarketProfile, type MarketSlug } from '@/lib/content/city-subpillars'

export interface LocationMarketPageSpec {
  metadata: Metadata
  pageProps: LocationServicePageProps
}

const ALL_MARKET_ORDER = getAllMarketSlugs()

function toKey(slug: string): string {
  return slug.replace(/-/g, '_')
}

function buildServiceLinks(profile: ReturnType<typeof getMarketProfile>): LocationServicePageProps['serviceLinks'] {
  const key = toKey(profile.slug)

  if (profile.marketType === 'county') {
    return [
      {
        href: `/${profile.slug}/criminal-defense`,
        title: `${profile.marketName} Criminal Defense`,
        description: `Defense counsel for ${profile.criminalCourtContext}.`,
        ctaName: `${key}_service_criminal_defense`,
      },
      {
        href: '/criminal-defense/drug-charges',
        title: 'Drug Charges Defense',
        description: 'Review of possession allegations, searches, testing, and intent evidence.',
        ctaName: `${key}_service_drug_charges`,
      },
      {
        href: '/criminal-defense/probation-violation',
        title: 'Probation Violation Defense',
        description: 'Help with alleged violations, revocation hearings, and compliance records.',
        ctaName: `${key}_service_probation_violation`,
      },
      {
        href: `/${profile.slug}/personal-injury`,
        title: `${profile.marketName} Personal Injury`,
        description: `Legal help for ${profile.injuryContext}.`,
        ctaName: `${key}_service_personal_injury`,
      },
      {
        href: '/personal-injury/truck-accidents',
        title: 'Truck Accident Litigation',
        description: 'Truck-crash claims involving driver, carrier, vehicle, and insurance records.',
        ctaName: `${key}_service_truck_accidents`,
      },
      {
        href: '/personal-injury/wrongful-death',
        title: 'Wrongful Death Claims',
        description: 'Wrongful death claims involving medical, financial, and family losses.',
        ctaName: `${key}_service_wrongful_death`,
      },
      {
        href: '/criminal-defense/warrants',
        title: 'Warrants Defense',
        description: 'Help confirming a warrant and arranging the next court step.',
        ctaName: `${key}_service_warrants`,
      },
      {
        href: '/personal-injury/uninsured-motorist',
        title: 'Uninsured Motorist Claims',
        description: 'Coverage review when the responsible driver has too little insurance.',
        ctaName: `${key}_service_uninsured_motorist`,
      },
    ]
  }

  return [
    {
      href: `/${profile.slug}/criminal-defense`,
      title: `${profile.marketName} Criminal Defense`,
      description: `Defense counsel for ${profile.criminalCourtContext}.`,
      ctaName: `${key}_service_criminal_defense`,
    },
    {
      href: '/criminal-defense/dui-dwi',
      title: 'DUI / DWI Defense',
      description: 'Court and driver-license issues following an impaired-driving allegation.',
      ctaName: `${key}_service_dui_dwi`,
    },
    {
      href: '/criminal-defense/warrants',
      title: 'Warrants Defense',
      description: 'Help confirming a warrant and arranging the next court step.',
      ctaName: `${key}_service_warrants`,
    },
    {
      href: `/${profile.slug}/personal-injury`,
      title: `${profile.marketName} Personal Injury`,
      description: `Legal help for ${profile.injuryContext}.`,
      ctaName: `${key}_service_personal_injury`,
    },
    {
      href: '/personal-injury/car-accidents',
      title: 'Car Accident Claims',
      description: 'Car-crash claims involving fault, treatment, insurance, and damages.',
      ctaName: `${key}_service_car_accidents`,
    },
    {
      href: '/personal-injury/uninsured-motorist',
      title: 'Uninsured Motorist Claims',
      description: 'Coverage review when the responsible driver has too little insurance.',
      ctaName: `${key}_service_uninsured_motorist`,
    },
    {
      href: '/criminal-defense/drug-charges',
      title: 'Drug Charges Defense',
      description: 'Review of possession allegations, searches, testing, and intent evidence.',
      ctaName: `${key}_service_drug_charges`,
    },
    {
      href: '/personal-injury/truck-accidents',
      title: 'Truck Accident Claims',
      description: 'Truck-crash claims involving driver, carrier, vehicle, and insurance records.',
      ctaName: `${key}_service_truck_accidents`,
    },
  ]
}

function buildRelatedLocationLinks(
  profile: ReturnType<typeof getMarketProfile>,
): LocationServicePageProps['relatedLocationLinks'] {
  const key = toKey(profile.slug)
  const localGuides = [
    {
      href: '/resources/what-to-do-after-arrest-oklahoma',
      title: 'What to Do After an Arrest',
      description: 'A checklist for court papers, release terms, police contact, and the first days after an arrest.',
    },
    {
      href: '/resources/what-to-do-after-car-accident-oklahoma',
      title: 'What to Do After a Car Accident',
      description: 'A checklist for medical care, scene evidence, insurance calls, and records after a crash.',
    },
    {
      href: '/resources/oklahoma-dui-process',
      title: 'Oklahoma DUI Process Guide',
      description: 'An overview of the court and driver-license issues that may follow a DUI arrest.',
    },
    {
      href: '/resources/oklahoma-bond-and-release-conditions',
      title: 'Bond and Release Conditions',
      description: 'A guide to common court instructions and obligations after release from custody.',
    },
    {
      href: '/resources/oklahoma-uninsured-motorist-claim-guide',
      title: 'Uninsured Motorist Claim Guide',
      description: 'How coverage may apply when the responsible driver has no insurance or too little insurance.',
    },
  ] as const
  const localGuide = localGuides[getOverviewVariant(profile)]

  return [
    {
      href: profile.nearbyLinks[0].href,
      title: profile.nearbyLinks[0].title,
      description: profile.nearbyLinks[0].description,
      ctaName: `${key}_related_nearby_a`,
    },
    {
      href: profile.nearbyLinks[1].href,
      title: profile.nearbyLinks[1].title,
      description: profile.nearbyLinks[1].description,
      ctaName: `${key}_related_nearby_b`,
    },
    {
      href: '/locations',
      title: 'Locations Hub',
      description: 'Browse nearby city and county markets within approximately 100 miles of Oklahoma City.',
      ctaName: `${key}_related_locations_hub`,
    },
    {
      href: '/resources',
      title: 'Legal Resources Hub',
      description: 'Read Oklahoma guides about arrests, court cases, crashes, insurance, and injury claims.',
      ctaName: `${key}_related_resources_hub`,
    },
    {
      href: localGuide.href,
      title: localGuide.title,
      description: localGuide.description,
      ctaName: `${key}_related_local_guide`,
    },
  ]
}

function getOverviewVariant(profile: ReturnType<typeof getMarketProfile>): 0 | 1 | 2 | 3 | 4 {
  const marketIndex = ALL_MARKET_ORDER.indexOf(profile.slug)
  return (marketIndex % 5) as 0 | 1 | 2 | 3 | 4
}

function buildOverviewIntro(profile: ReturnType<typeof getMarketProfile>): string[] {
  const variants: Record<0 | 1 | 2 | 3 | 4, string[]> = {
    0: [
      `People looking for a lawyer in ${profile.marketName} usually need help with an immediate question: a court date, release term, insurer call, medical bill, or missing record. Start by gathering the papers that show what has happened so far.`,
      `Criminal matters here may involve ${profile.criminalCourtContext}. Injury matters may involve ${profile.injuryContext}. Each calls for a different review, even when both arise from the same event.`,
      `Kernal & Associates serves clients connected to ${profile.countyContext}. Consultations can cover known deadlines, available records, and the practical choices that come next.`,
    ],
    1: [
      `A legal problem in ${profile.marketName} can bring several deadlines at once. Court papers, release instructions, police reports, medical records, bills, and insurer messages should be kept together and reviewed before an important decision.`,
      `${profile.criminalCourtContext} is the relevant local setting for many criminal cases. For injury claims, the local picture includes ${profile.injuryContext}.`,
      `Todd Kernal helps clients sort the urgent question from the issues that can wait. The first conversation is used to identify missing information and the next required step in ${profile.countyContext}.`,
    ],
    2: [
      `If your matter is connected to ${profile.marketName}, bring the documents you already have and a short timeline. The goal of the first review is to understand the present deadline, the available records, and what should happen next.`,
      `For criminal cases, local concerns include ${profile.criminalCourtContext}. For injury cases, the review may center on ${profile.injuryContext}.`,
      `Events around ${profile.corridorContext} may produce court, police, medical, vehicle, or insurance records. Saving those materials early makes it easier to answer questions with facts instead of memory alone.`,
    ],
    3: [
      `${profile.marketName} clients often call while a court setting, insurance request, or medical decision is still pending. You do not need to know every answer before speaking with a lawyer, but you should save every relevant paper and message.`,
      `The firm handles criminal defense connected to ${profile.criminalCourtContext} and injury claims involving ${profile.injuryContext}.`,
      `A consultation for a matter in ${profile.countyContext} can address known dates, available evidence, communication with the other side, and the consequences of the choices currently available.`,
    ],
    4: [
      `Legal questions in ${profile.marketName} are easier to evaluate when dates and documents are organized. Keep court notices, release papers, reports, photographs, medical records, bills, and insurer correspondence that relate to the matter.`,
      `${profile.criminalCourtContext} may shape a criminal case, while ${profile.injuryContext} may shape an injury claim. The firm reviews each from its own records and deadlines.`,
      `For an event tied to ${profile.corridorContext}, location and timing may matter to both the investigation and the available evidence. Todd Kernal can review what is known and explain the next practical step.`,
    ],
  }

  return variants[getOverviewVariant(profile)]
}

export function getLocationMarketPageSpec(market: MarketSlug): LocationMarketPageSpec {
  const profile = getMarketProfile(market)
  const key = toKey(profile.slug)
  const locationLabel = profile.marketName

  return {
    metadata: {
      title: `Lawyer in ${profile.marketName}`,
      description: `Criminal defense and personal injury lawyer serving ${profile.marketName}. Talk with Todd Kernal about court, insurance, and next steps.`,
      alternates: { canonical: `/${profile.slug}` },
      openGraph: {
        title: `${profile.marketName} Defense & Injury Lawyer | Kernal & Associates`,
        description: `Legal help for criminal charges and injury claims connected to ${profile.marketName}.`,
        url: `${BASE_URL}/${profile.slug}`,
      },
    },
    pageProps: {
      canonicalPath: `/${profile.slug}`,
      locationName: locationLabel,
      subtitle: `Criminal defense and personal injury help for matters connected to ${profile.countyContext}.`,
      introTitle: `Legal help for ${profile.marketName} court and injury matters`,
      introParagraphs: buildOverviewIntro(profile),
      countyFocus: `${profile.marketName} courts, claims, and travel routes`,
      localHighlights: [
        `Criminal cases: ${profile.criminalCourtContext}.`,
        `Injury claims: ${profile.injuryContext}.`,
        `Road and travel context: ${profile.corridorContext}.`,
        `Court and claim area: ${profile.countyContext}.`,
        'For a criminal matter, bring court papers, release terms, citations, and every known date.',
        'For an injury matter, save reports, photographs, medical records, bills, and insurer messages.',
        `Related local information is available through ${profile.nearbyLinks[0].title}.`,
        'Todd Kernal handles the consultation and explains which issue needs attention first.',
      ],
      serviceLinks: buildServiceLinks(profile),
      relatedLocationLinks: buildRelatedLocationLinks(profile),
      faqSubtitle: `Frequent questions from ${profile.marketName} clients about urgent legal decisions.`,
      faqs: [
        {
          question: `When should I contact a lawyer about a ${profile.marketName} matter?`,
          answer:
            'As soon as practical when a court date, release term, insurer request, filing deadline, or disappearing evidence requires attention.',
        },
        {
          question: `Do you handle both criminal and injury matters in ${profile.marketName}?`,
          answer:
            'Yes. The firm handles criminal defense and personal injury matters, including situations where one event creates separate court and insurance issues.',
        },
        {
          question: `Do you handle cases connected to ${profile.corridorContext}?`,
          answer:
            'Yes. The location and timing of an event can matter to reports, recordings, witnesses, vehicle evidence, and other records.',
        },
        {
          question: 'What should I bring to my first consultation?',
          answer:
            'Bring all available court papers, release documents, insurer communications, medical records, photos, and a timeline of key events.',
        },
      ],
      ctaTitle: `Talk With a Lawyer About a ${profile.marketName} Matter`,
      ctaDescription: 'Bring the papers and known dates for a direct discussion of the next practical step.',
      ctaName: key,
    },
  }
}

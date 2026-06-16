import type { Metadata } from 'next'
import type { LocationServicePageProps } from '@/app/components/LocationServicePage'
import { BASE_URL } from '@/lib/constants'
import { getMarketProfile, type MarketSlug } from '@/lib/content/city-subpillars'

export interface LocationMarketPageSpec {
  metadata: Metadata
  pageProps: LocationServicePageProps
}

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
        description: `County-level criminal strategy for ${profile.criminalCourtContext}.`,
        ctaName: `${key}_service_criminal_defense`,
      },
      {
        href: '/criminal-defense/drug-charges',
        title: 'Drug Charges Defense',
        description: 'Search-and-seizure strategy for possession and intent allegations.',
        ctaName: `${key}_service_drug_charges`,
      },
      {
        href: '/criminal-defense/probation-violation',
        title: 'Probation Violation Defense',
        description: 'Revocation-risk strategy for compliance and hearing exposure.',
        ctaName: `${key}_service_probation_violation`,
      },
      {
        href: `/${profile.slug}/personal-injury`,
        title: `${profile.marketName} Personal Injury`,
        description: `County-level injury strategy for ${profile.injuryContext}.`,
        ctaName: `${key}_service_personal_injury`,
      },
      {
        href: '/personal-injury/truck-accidents',
        title: 'Truck Accident Litigation',
        description: 'Commercial-collision strategy with layered liability development.',
        ctaName: `${key}_service_truck_accidents`,
      },
      {
        href: '/personal-injury/wrongful-death',
        title: 'Wrongful Death Claims',
        description: 'Accountability-focused strategy for fatal-loss negligence matters.',
        ctaName: `${key}_service_wrongful_death`,
      },
      {
        href: '/resources/what-to-do-after-arrest-oklahoma',
        title: 'Post-Arrest Guide',
        description: 'First-48-hours rights and risk-control checklist after Oklahoma arrests.',
        ctaName: `${key}_service_resource_after_arrest`,
      },
      {
        href: '/resources/what-to-do-after-car-accident-oklahoma',
        title: 'Post-Accident Guide',
        description: 'Immediate injury-claim evidence and insurer-communication checklist.',
        ctaName: `${key}_service_resource_after_accident`,
      },
    ]
  }

  return [
    {
      href: `/${profile.slug}/criminal-defense`,
      title: `${profile.marketName} Criminal Defense`,
      description: `Local defense strategy for ${profile.criminalCourtContext}.`,
      ctaName: `${key}_service_criminal_defense`,
    },
    {
      href: '/criminal-defense/dui-dwi',
      title: 'DUI / DWI Defense',
      description: 'Court and license-track strategy for impaired-driving allegations.',
      ctaName: `${key}_service_dui_dwi`,
    },
    {
      href: '/criminal-defense/warrants',
      title: 'Warrants Defense',
      description: 'Controlled court-entry strategy for active warrant exposure.',
      ctaName: `${key}_service_warrants`,
    },
    {
      href: `/${profile.slug}/personal-injury`,
      title: `${profile.marketName} Personal Injury`,
      description: `Local injury strategy for ${profile.injuryContext}.`,
      ctaName: `${key}_service_personal_injury`,
    },
    {
      href: '/personal-injury/car-accidents',
      title: 'Car Accident Claims',
      description: 'Evidence-first fault and damages strategy for serious collisions.',
      ctaName: `${key}_service_car_accidents`,
    },
    {
      href: '/personal-injury/uninsured-motorist',
      title: 'Uninsured Motorist Claims',
      description: 'Coverage-focused UM/UIM strategy for underinsured recovery disputes.',
      ctaName: `${key}_service_uninsured_motorist`,
    },
    {
      href: '/resources/oklahoma-dui-process',
      title: 'DUI Process Guide',
      description: 'Court and license-track timeline guide for DUI allegations.',
      ctaName: `${key}_service_resource_dui_process`,
    },
    {
      href: '/resources/what-to-do-after-car-accident-oklahoma',
      title: 'Post-Accident Guide',
      description: 'Immediate crash-response checklist for evidence and treatment protection.',
      ctaName: `${key}_service_resource_after_accident`,
    },
  ]
}

function buildRelatedLocationLinks(
  profile: ReturnType<typeof getMarketProfile>,
): LocationServicePageProps['relatedLocationLinks'] {
  const key = toKey(profile.slug)
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
      description: 'Action-focused criminal defense and injury guides mapped to service pages.',
      ctaName: `${key}_related_resources_hub`,
    },
  ]
}

export function getLocationMarketPageSpec(market: MarketSlug): LocationMarketPageSpec {
  const profile = getMarketProfile(market)
  const key = toKey(profile.slug)
  const locationLabel = profile.marketName

  return {
    metadata: {
      title: `${profile.marketName} Criminal Defense and Personal Injury Attorney`,
      description: `Kernal & Associates serves ${profile.marketName} with criminal defense and personal injury representation for ${profile.countyContext}.`,
      alternates: { canonical: `/${profile.slug}` },
      openGraph: {
        title: `${profile.marketName} Criminal Defense and Injury Attorney | Kernal & Associates`,
        description: `Local representation for ${profile.marketName} legal matters involving ${profile.criminalCourtContext} and ${profile.injuryContext}.`,
        url: `${BASE_URL}/${profile.slug}`,
      },
    },
    pageProps: {
      canonicalPath: `/${profile.slug}`,
      locationName: locationLabel,
      subtitle: `Criminal defense and injury representation for ${profile.marketName} matters in ${profile.countyContext}.`,
      introTitle: `${profile.marketName} legal matters require early strategic control.`,
      introParagraphs: [
        `${profile.marketName} cases often involve urgent court or claim timelines where early missteps reduce leverage. Prompt legal strategy protects procedural options and evidence posture.`,
        `Kernal & Associates represents ${profile.marketName} clients with trial-ready criminal defense and evidence-first injury strategy aligned to ${profile.criminalCourtContext}.`,
        `From first consultation through resolution, we focus on practical risk control, communication discipline, and long-term outcome protection tied to ${profile.injuryContext}.`,
      ],
      countyFocus: `${profile.countyContext} and corridor-specific legal strategy`,
      localHighlights: [
        `Defense planning tailored to ${profile.criminalCourtContext}.`,
        `Injury-claim development tailored to ${profile.injuryContext}.`,
        `Evidence strategy adapted to ${profile.corridorContext}.`,
        'Office consultations available at 1332 SW 89th Street in south Oklahoma City, with phone and text intake for urgent matters.',
        `Local planning accounts for ${profile.marketName} venue, travel, and scheduling pressure before hearings or claim deadlines tighten.`,
        `Rapid response for deadlines, hearings, and high-pressure communications.`,
        `Attorney-led case sequencing from intake through negotiation or trial posture.`,
        `Long-term planning for record, financial, and recovery-risk protection.`,
      ],
      serviceLinks: buildServiceLinks(profile),
      relatedLocationLinks: buildRelatedLocationLinks(profile),
      faqSubtitle: `Frequent questions from ${profile.marketName} clients about urgent legal decisions.`,
      faqs: [
        {
          question: `How quickly should I contact a lawyer for a ${profile.marketName} case?`,
          answer:
            'Immediately. Early legal strategy can materially affect hearing posture, evidence preservation, and negotiation leverage.',
        },
        {
          question: `Do you handle both criminal and injury matters in ${profile.marketName}?`,
          answer:
            'Yes. We represent clients in both tracks and coordinate strategy when one incident creates overlapping exposure.',
        },
        {
          question: `Do you handle cases connected to ${profile.corridorContext}?`,
          answer:
            'Yes. We build corridor-specific liability and defense strategy for high-volume route and enforcement patterns.',
        },
        {
          question: 'What should I bring to my first consultation?',
          answer:
            'Bring all available court papers, release documents, insurer communications, medical records, photos, and a timeline of key events.',
        },
      ],
      ctaTitle: `Need Immediate Counsel in ${profile.marketName}?`,
      ctaDescription: 'Request a confidential consultation to stabilize risk and map your next legal move.',
      ctaName: key,
    },
  }
}

import { Metadata } from 'next'
import { PageHero } from '../components/PageHero'
import { LinkGridSection } from '../components/LinkGridSection'
import {
  COUNTY_SUBPILLAR_MARKETS,
  REGIONAL_CITY_SUBPILLAR_MARKETS,
  getMarketDisplayName,
} from '@/lib/content/city-subpillars'

export const metadata: Metadata = {
  title: 'Oklahoma Service Areas',
  description:
    'Find criminal defense and personal injury information for Oklahoma City, Norman, and communities across central Oklahoma.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Oklahoma Service Areas | Kernal & Associates',
    description:
      'Find criminal defense and personal injury information for communities across central Oklahoma.',
    url: 'https://kernallaw.com/locations',
  },
}

export default function LocationsPage() {
  const regionalCityOverviewItems = REGIONAL_CITY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}`,
      title: `${market} Overview`,
      description: `Criminal defense and personal injury representation in ${market} and nearby communities.`,
      ctaName: `locations_link_${slug}_overview`,
    }
  })

  const countyOverviewItems = COUNTY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}`,
      title: `${market} Overview`,
      description: `Criminal defense and personal injury representation for matters in ${market}.`,
      ctaName: `locations_link_${slug}_overview`,
    }
  })

  const regionalCityCriminalItems = REGIONAL_CITY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}/criminal-defense`,
      title: `${market} Criminal Defense`,
      description: `Criminal defense information for charges and court proceedings in ${market}.`,
      ctaName: `locations_link_${slug}_criminal_defense`,
    }
  })

  const regionalCityInjuryItems = REGIONAL_CITY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}/personal-injury`,
      title: `${market} Personal Injury`,
      description: `Personal injury information for collisions and negligence claims in ${market}.`,
      ctaName: `locations_link_${slug}_personal_injury`,
    }
  })

  const countyCriminalItems = COUNTY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}/criminal-defense`,
      title: `${market} Criminal Defense`,
      description: `Criminal defense information for charges and warrants filed in ${market}.`,
      ctaName: `locations_link_${slug}_criminal_defense`,
    }
  })

  const countyInjuryItems = COUNTY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}/personal-injury`,
      title: `${market} Personal Injury`,
      description: `Personal injury information for crashes and negligence claims in ${market}.`,
      ctaName: `locations_link_${slug}_personal_injury`,
    }
  })

  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero
        title="Oklahoma Service Areas"
        subtitle="We represent clients in Oklahoma City and communities throughout central Oklahoma."
      />

      <LinkGridSection
        title="Start With Your Area"
        subtitle="Choose a city to find local court information and the services available there."
        columns="three"
        items={[
          {
            href: '/oklahoma-city',
            title: 'Oklahoma City',
            description:
              'Criminal defense and personal injury representation throughout Oklahoma County and surrounding metro areas.',
            ctaName: 'locations_link_oklahoma_city',
          },
          {
            href: '/norman',
            title: 'Norman',
            description:
              'Criminal defense and personal injury representation for Norman and Cleveland County matters.',
            ctaName: 'locations_link_norman',
          },
          {
            href: '/moore',
            title: 'Moore',
            description:
              'Criminal defense and personal injury representation for Moore and the south metro.',
            ctaName: 'locations_link_moore',
          },
          {
            href: '/edmond',
            title: 'Edmond',
            description:
              'Criminal defense and personal injury representation for Edmond and north Oklahoma County.',
            ctaName: 'locations_link_edmond',
          },
          {
            href: '/midwest-city',
            title: 'Midwest City',
            description:
              'Representation for criminal charges and serious injury claims in the east metro.',
            ctaName: 'locations_link_midwest_city',
          },
          {
            href: '/del-city',
            title: 'Del City',
            description:
              'Criminal defense and personal injury representation for Del City and the southeast metro.',
            ctaName: 'locations_link_del_city',
          },
          {
            href: '/yukon',
            title: 'Yukon',
            description:
              'Criminal defense and personal injury representation for Yukon and the west metro.',
            ctaName: 'locations_link_yukon',
          },
          {
            href: '/mustang',
            title: 'Mustang',
            description:
              'Criminal defense and injury services for Mustang and surrounding communities.',
            ctaName: 'locations_link_mustang',
          },
        ]}
      />

      <LinkGridSection
        title="Criminal Defense by City"
        subtitle="Find local information about criminal charges, courts, warrants, and the next steps in your area."
        columns="three"
        items={[
          {
            href: '/oklahoma-city/criminal-defense',
            title: 'Oklahoma City Criminal Defense',
            description: 'Criminal defense information for charges filed in Oklahoma County.',
            ctaName: 'locations_link_oklahoma_city_criminal_defense',
          },
          {
            href: '/norman/criminal-defense',
            title: 'Norman Criminal Defense',
            description: 'Criminal defense information for Norman and Cleveland County cases.',
            ctaName: 'locations_link_norman_criminal_defense',
          },
          {
            href: '/moore/criminal-defense',
            title: 'Moore Criminal Defense',
            description: 'Criminal defense information for charges filed in and around Moore.',
            ctaName: 'locations_link_moore_criminal_defense',
          },
          {
            href: '/edmond/criminal-defense',
            title: 'Edmond Criminal Defense',
            description: 'Criminal defense information for charges filed in and around Edmond.',
            ctaName: 'locations_link_edmond_criminal_defense',
          },
          {
            href: '/midwest-city/criminal-defense',
            title: 'Midwest City Criminal Defense',
            description: 'Criminal defense information for Midwest City and Oklahoma County matters.',
            ctaName: 'locations_link_midwest_city_criminal_defense',
          },
          {
            href: '/del-city/criminal-defense',
            title: 'Del City Criminal Defense',
            description: 'Criminal defense information for charges filed in and around Del City.',
            ctaName: 'locations_link_del_city_criminal_defense',
          },
          {
            href: '/yukon/criminal-defense',
            title: 'Yukon Criminal Defense',
            description: 'Criminal defense information for Yukon and Canadian County matters.',
            ctaName: 'locations_link_yukon_criminal_defense',
          },
          {
            href: '/mustang/criminal-defense',
            title: 'Mustang Criminal Defense',
            description: 'Criminal defense information for charges filed in and around Mustang.',
            ctaName: 'locations_link_mustang_criminal_defense',
          },
        ]}
      />

      <LinkGridSection
        title="Personal Injury by City"
        subtitle="Find local information about collision claims, insurance issues, and injury cases in your area."
        columns="three"
        items={[
          {
            href: '/oklahoma-city/personal-injury',
            title: 'Oklahoma City Personal Injury',
            description: 'Personal injury information for serious crashes and negligence claims in Oklahoma City.',
            ctaName: 'locations_link_oklahoma_city_personal_injury',
          },
          {
            href: '/norman/personal-injury',
            title: 'Norman Personal Injury',
            description: 'Personal injury information for Norman and Cleveland County claims.',
            ctaName: 'locations_link_norman_personal_injury',
          },
          {
            href: '/moore/personal-injury',
            title: 'Moore Personal Injury',
            description: 'Personal injury information for collisions and negligence claims in Moore.',
            ctaName: 'locations_link_moore_personal_injury',
          },
          {
            href: '/edmond/personal-injury',
            title: 'Edmond Personal Injury',
            description: 'Personal injury information for serious negligence claims in and around Edmond.',
            ctaName: 'locations_link_edmond_personal_injury',
          },
          {
            href: '/midwest-city/personal-injury',
            title: 'Midwest City Personal Injury',
            description: 'Personal injury information for disputed-fault and uninsured-motorist claims.',
            ctaName: 'locations_link_midwest_city_personal_injury',
          },
          {
            href: '/del-city/personal-injury',
            title: 'Del City Personal Injury',
            description: 'Personal injury information for crashes and premises claims in Del City.',
            ctaName: 'locations_link_del_city_personal_injury',
          },
          {
            href: '/yukon/personal-injury',
            title: 'Yukon Personal Injury',
            description: 'Personal injury information for serious collision claims in Yukon and the west metro.',
            ctaName: 'locations_link_yukon_personal_injury',
          },
          {
            href: '/mustang/personal-injury',
            title: 'Mustang Personal Injury',
            description: 'Personal injury information for serious negligence and wrongful-death claims in Mustang.',
            ctaName: 'locations_link_mustang_personal_injury',
          },
        ]}
      />

      <LinkGridSection
        title="More Central Oklahoma Communities"
        subtitle="Choose a community to find criminal defense and personal injury information."
        columns="three"
        items={regionalCityOverviewItems}
      />

      <LinkGridSection
        title="Counties We Serve"
        subtitle="Choose a county to find local criminal defense and personal injury information."
        columns="three"
        items={countyOverviewItems}
      />

      <LinkGridSection
        title="Criminal Defense in Nearby Communities"
        subtitle="Criminal defense information for communities within roughly 100 miles of Oklahoma City."
        columns="three"
        items={regionalCityCriminalItems}
      />

      <LinkGridSection
        title="Personal Injury in Nearby Communities"
        subtitle="Personal injury information for communities within roughly 100 miles of Oklahoma City."
        columns="three"
        items={regionalCityInjuryItems}
      />

      <LinkGridSection
        title="Criminal Defense by County"
        subtitle="Criminal defense information for counties within roughly 100 miles of Oklahoma City."
        columns="three"
        items={countyCriminalItems}
      />

      <LinkGridSection
        title="Personal Injury by County"
        subtitle="Personal injury information for counties within roughly 100 miles of Oklahoma City."
        columns="three"
        items={countyInjuryItems}
      />
    </main>
  )
}

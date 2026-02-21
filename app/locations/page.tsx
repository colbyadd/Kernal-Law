import { Metadata } from 'next'
import { PageHero } from '../components/PageHero'
import { LinkGridSection } from '../components/LinkGridSection'
import {
  COUNTY_SUBPILLAR_MARKETS,
  REGIONAL_CITY_SUBPILLAR_MARKETS,
  getMarketDisplayName,
} from '@/lib/content/city-subpillars'

export const metadata: Metadata = {
  title: 'Locations We Serve',
  description:
    'Kernal & Associates serves clients across Oklahoma City, Norman, and surrounding metro communities for criminal defense and personal injury matters.',
  alternates: { canonical: '/locations' },
  robots: {
    index: false,
    follow: true,
  },
}

export default function LocationsPage() {
  const regionalCityOverviewItems = REGIONAL_CITY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}`,
      title: `${market} Overview`,
      description: `Local criminal-defense and injury representation overview for ${market}.`,
      ctaName: `locations_link_${slug}_overview`,
    }
  })

  const countyOverviewItems = COUNTY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}`,
      title: `${market} Overview`,
      description: `County-level criminal-defense and injury representation overview for ${market}.`,
      ctaName: `locations_link_${slug}_overview`,
    }
  })

  const regionalCityCriminalItems = REGIONAL_CITY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}/criminal-defense`,
      title: `${market} Criminal Defense`,
      description: `Local criminal-defense strategy for ${market} charges and court-risk exposure.`,
      ctaName: `locations_link_${slug}_criminal_defense`,
    }
  })

  const regionalCityInjuryItems = REGIONAL_CITY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}/personal-injury`,
      title: `${market} Personal Injury`,
      description: `Local injury-claim strategy for ${market} collision and negligence losses.`,
      ctaName: `locations_link_${slug}_personal_injury`,
    }
  })

  const countyCriminalItems = COUNTY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}/criminal-defense`,
      title: `${market} Criminal Defense`,
      description: `County-wide defense strategy for ${market} criminal filings and warrant exposure.`,
      ctaName: `locations_link_${slug}_criminal_defense`,
    }
  })

  const countyInjuryItems = COUNTY_SUBPILLAR_MARKETS.map((slug) => {
    const market = getMarketDisplayName(slug)
    return {
      href: `/${slug}/personal-injury`,
      title: `${market} Personal Injury`,
      description: `County-wide injury strategy for ${market} crash and negligence claims.`,
      ctaName: `locations_link_${slug}_personal_injury`,
    }
  })

  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero
        title="Locations"
        subtitle="Local representation across the Oklahoma City metro and Cleveland County."
      />

      <LinkGridSection
        title="Primary Service Areas"
        subtitle="Choose your area to review local court and case information."
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
              'Representation for Cleveland County matters, including student, family, and local resident cases.',
            ctaName: 'locations_link_norman',
          },
          {
            href: '/moore',
            title: 'Moore',
            description:
              'Criminal and injury representation for south metro and Cleveland County-adjacent matters.',
            ctaName: 'locations_link_moore',
          },
          {
            href: '/edmond',
            title: 'Edmond',
            description:
              'Representation for north Oklahoma County criminal and injury cases.',
            ctaName: 'locations_link_edmond',
          },
          {
            href: '/midwest-city',
            title: 'Midwest City',
            description:
              'East metro legal support for criminal charges and serious injury claims.',
            ctaName: 'locations_link_midwest_city',
          },
          {
            href: '/del-city',
            title: 'Del City',
            description:
              'Southeast metro representation for defense and injury claim matters.',
            ctaName: 'locations_link_del_city',
          },
          {
            href: '/yukon',
            title: 'Yukon',
            description:
              'West metro and Canadian County-adjacent legal representation.',
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
        title="City Criminal Defense Pages"
        subtitle="Location-plus-service criminal defense pages by city."
        columns="three"
        items={[
          {
            href: '/oklahoma-city/criminal-defense',
            title: 'Oklahoma City Criminal Defense',
            description: 'Local defense strategy for Oklahoma County allegations.',
            ctaName: 'locations_link_oklahoma_city_criminal_defense',
          },
          {
            href: '/norman/criminal-defense',
            title: 'Norman Criminal Defense',
            description: 'Cleveland County criminal defense page for Norman cases.',
            ctaName: 'locations_link_norman_criminal_defense',
          },
          {
            href: '/moore/criminal-defense',
            title: 'Moore Criminal Defense',
            description: 'South-metro criminal defense page for Moore charge exposure.',
            ctaName: 'locations_link_moore_criminal_defense',
          },
          {
            href: '/edmond/criminal-defense',
            title: 'Edmond Criminal Defense',
            description: 'North-metro criminal defense page for Edmond allegations.',
            ctaName: 'locations_link_edmond_criminal_defense',
          },
          {
            href: '/midwest-city/criminal-defense',
            title: 'Midwest City Criminal Defense',
            description: 'East-metro criminal defense page for Oklahoma County matters.',
            ctaName: 'locations_link_midwest_city_criminal_defense',
          },
          {
            href: '/del-city/criminal-defense',
            title: 'Del City Criminal Defense',
            description: 'Southeast-metro criminal defense page for Del City cases.',
            ctaName: 'locations_link_del_city_criminal_defense',
          },
          {
            href: '/yukon/criminal-defense',
            title: 'Yukon Criminal Defense',
            description: 'Canadian County and west-metro defense strategy page.',
            ctaName: 'locations_link_yukon_criminal_defense',
          },
          {
            href: '/mustang/criminal-defense',
            title: 'Mustang Criminal Defense',
            description: 'Southwest-metro defense page for Mustang criminal exposure.',
            ctaName: 'locations_link_mustang_criminal_defense',
          },
        ]}
      />

      <LinkGridSection
        title="City Personal Injury Pages"
        subtitle="Location-plus-service injury pages by city."
        columns="three"
        items={[
          {
            href: '/oklahoma-city/personal-injury',
            title: 'Oklahoma City Personal Injury',
            description: 'Metro injury strategy for severe crash and negligence losses.',
            ctaName: 'locations_link_oklahoma_city_personal_injury',
          },
          {
            href: '/norman/personal-injury',
            title: 'Norman Personal Injury',
            description: 'Cleveland County injury strategy for Norman claimants.',
            ctaName: 'locations_link_norman_personal_injury',
          },
          {
            href: '/moore/personal-injury',
            title: 'Moore Personal Injury',
            description: 'South-metro injury claim strategy for Moore collisions.',
            ctaName: 'locations_link_moore_personal_injury',
          },
          {
            href: '/edmond/personal-injury',
            title: 'Edmond Personal Injury',
            description: 'North-metro injury page for high-value negligence claims.',
            ctaName: 'locations_link_edmond_personal_injury',
          },
          {
            href: '/midwest-city/personal-injury',
            title: 'Midwest City Personal Injury',
            description: 'East-metro injury strategy for disputed-fault and UM claims.',
            ctaName: 'locations_link_midwest_city_personal_injury',
          },
          {
            href: '/del-city/personal-injury',
            title: 'Del City Personal Injury',
            description: 'Southeast-metro injury page for crash and premises losses.',
            ctaName: 'locations_link_del_city_personal_injury',
          },
          {
            href: '/yukon/personal-injury',
            title: 'Yukon Personal Injury',
            description: 'West-metro injury strategy for severe collision claims.',
            ctaName: 'locations_link_yukon_personal_injury',
          },
          {
            href: '/mustang/personal-injury',
            title: 'Mustang Personal Injury',
            description: 'Mustang injury page for major negligence and fatal-loss cases.',
            ctaName: 'locations_link_mustang_personal_injury',
          },
        ]}
      />

      <LinkGridSection
        title="Regional City Overview Pages"
        subtitle="City-level criminal-defense and injury overviews for secondary markets."
        columns="three"
        items={regionalCityOverviewItems}
      />

      <LinkGridSection
        title="County Overview Pages"
        subtitle="County-level criminal-defense and injury overviews across adjacent markets."
        columns="three"
        items={countyOverviewItems}
      />

      <LinkGridSection
        title="Regional City Criminal Defense Markets"
        subtitle="Top non-core city defense markets within approximately 100 miles of Oklahoma City."
        columns="three"
        items={regionalCityCriminalItems}
      />

      <LinkGridSection
        title="Regional City Personal Injury Markets"
        subtitle="Top non-core city injury markets within approximately 100 miles of Oklahoma City."
        columns="three"
        items={regionalCityInjuryItems}
      />

      <LinkGridSection
        title="County Criminal Defense Markets"
        subtitle="County-level criminal defense markets within approximately 100 miles of Oklahoma City."
        columns="three"
        items={countyCriminalItems}
      />

      <LinkGridSection
        title="County Personal Injury Markets"
        subtitle="County-level injury markets within approximately 100 miles of Oklahoma City."
        columns="three"
        items={countyInjuryItems}
      />
    </main>
  )
}

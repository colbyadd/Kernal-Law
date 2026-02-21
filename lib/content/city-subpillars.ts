import { createSubpillarSpec, type SubpillarSpec } from '@/lib/content/subpillar-standards'

type ServiceSlug = 'criminal-defense' | 'personal-injury'
type MarketType = 'city' | 'county'
type MarketTier = 'core-city' | 'regional-city' | 'county'

interface MarketLink {
  href: string
  title: string
  description: string
}

export interface MarketProfile {
  slug: MarketSlug
  marketName: string
  marketType: MarketType
  countyContext: string
  criminalCourtContext: string
  injuryContext: string
  corridorContext: string
  injuryNarrativeAddendum?: string[]
  injuryDifferentiators?: string[]
  hubLink: MarketLink
  nearbyLinks: [MarketLink, MarketLink]
}

export const CORE_CITY_SUBPILLAR_MARKETS = [
  'oklahoma-city',
  'norman',
  'moore',
  'edmond',
  'midwest-city',
  'del-city',
  'yukon',
  'mustang',
] as const

export const REGIONAL_CITY_SUBPILLAR_MARKETS = [
  'stillwater',
  'shawnee',
  'el-reno',
  'chickasha',
  'guthrie',
  'enid',
  'lawton',
  'ada',
  'choctaw',
  'bethany',
  'newcastle',
  'blanchard',
] as const

export const COUNTY_SUBPILLAR_MARKETS = [
  'oklahoma-county',
  'cleveland-county',
  'canadian-county',
  'logan-county',
  'payne-county',
  'pottawatomie-county',
  'grady-county',
  'mclain-county',
  'lincoln-county',
  'comanche-county',
  'garfield-county',
] as const

export const ALL_STANDARD_SUBPILLAR_MARKETS = [
  ...CORE_CITY_SUBPILLAR_MARKETS,
  ...REGIONAL_CITY_SUBPILLAR_MARKETS,
  ...COUNTY_SUBPILLAR_MARKETS,
] as const

export type MarketSlug = (typeof ALL_STANDARD_SUBPILLAR_MARKETS)[number]

const CRIMINAL_TIER_CONTEXT: Record<
  MarketTier,
  {
    docketProfile: string
    pressurePattern: string
    hearingPosture: string
  }
> = {
  'core-city': {
    docketProfile:
      'metro-core filing volatility, specialty-docket turnover, and multi-agency allegation reporting',
    pressurePattern:
      'fast prosecutor screening cycles, compact hearing calendars, and early narrative lock-in risk',
    hearingPosture:
      'high-volume urban calendars where preparation sequence and evidentiary framing must be trial-ready early',
  },
  'regional-city': {
    docketProfile:
      'regional-city filings with county-seat scheduling constraints, travel-linked witness issues, and tighter reset windows',
    pressurePattern:
      'mixed local and highway enforcement patterns that can shift allegation posture between hearings',
    hearingPosture:
      'regional calendars where delay strategy is limited, so motion sequencing and mitigation timing have to be deliberate',
  },
  county: {
    docketProfile:
      'county-wide venue management with district-calendar spacing, township officer variance, and broader geography',
    pressurePattern:
      'cross-jurisdiction reporting differences that can distort timelines unless records are reconciled early',
    hearingPosture:
      'county district settings where venue posture, officer credibility, and timeline precision drive negotiation leverage',
  },
}

const INJURY_TIER_CONTEXT: Record<
  MarketTier,
  {
    claimProfile: string
    documentationRisk: string
    valuationPressure: string
  }
> = {
  'core-city': {
    claimProfile:
      'urban intersection collisions, commercial-fleet involvement, and multi-policy exposure in dense metro traffic',
    documentationRisk:
      'rapid treatment transitions and high-volume provider handoffs that can create chronology gaps',
    valuationPressure:
      'large-carrier negotiation pressure where early liability framing and damages proof must be litigation-capable',
  },
  'regional-city': {
    claimProfile:
      'regional-route crashes with mixed passenger, commercial, and agricultural traffic exposure',
    documentationRisk:
      'treatment-access lag and referral timing issues that can understate injury progression if not organized quickly',
    valuationPressure:
      'carrier discount pressure on regional claims that requires disciplined evidence packaging and escalation planning',
  },
  county: {
    claimProfile:
      'county-wide roadway incidents with long-distance travel patterns and layered venue considerations',
    documentationRisk:
      'transport-time, provider-distance, and county-line treatment movement that can fragment medical narratives',
    valuationPressure:
      'venue-sensitive mediation and litigation valuation where causation and future-loss proof must be explicit',
  },
}

function getMarketTier(profile: MarketProfile): MarketTier {
  if (profile.marketType === 'county') {
    return 'county'
  }

  if (CORE_CITY_SUBPILLAR_MARKETS.includes(profile.slug as (typeof CORE_CITY_SUBPILLAR_MARKETS)[number])) {
    return 'core-city'
  }

  return 'regional-city'
}

function createHubLink(href: string, title: string, description: string): MarketLink {
  return { href, title, description }
}

const locationsHubLink = createHubLink(
  '/locations',
  'Locations Hub',
  'Browse all major city and county markets within approximately 100 miles of Oklahoma City.',
)

const marketProfiles: Record<MarketSlug, MarketProfile> = {
  'oklahoma-city': {
    slug: 'oklahoma-city',
    marketName: 'Oklahoma City',
    marketType: 'city',
    countyContext: 'Oklahoma County district court venues and metro injury claim settings',
    criminalCourtContext: 'high-volume Oklahoma County criminal dockets with rapid bond, warrant, and allegation pressure',
    injuryContext: 'major metro collision and negligence claims across dense urban and interstate corridors',
    corridorContext: 'I-35, I-40, I-44, and Kilpatrick Turnpike high-volume crash corridors',
    hubLink: createHubLink(
      '/oklahoma-city',
      'Oklahoma City Location Page',
      'Local Oklahoma City criminal and injury representation overview.',
    ),
    nearbyLinks: [
      createHubLink(
        '/edmond/criminal-defense',
        'Edmond Criminal Defense',
        'North-metro defense strategy for overlapping Oklahoma County filings.',
      ),
      createHubLink(
        '/moore/personal-injury',
        'Moore Personal Injury',
        'South-metro injury strategy for connected commuter and interstate claims.',
      ),
    ],
  },
  norman: {
    slug: 'norman',
    marketName: 'Norman',
    marketType: 'city',
    countyContext: 'Cleveland County district court and south-metro claim venues',
    criminalCourtContext: 'Cleveland County criminal filings with student-area and corridor enforcement overlap',
    injuryContext: 'south-metro collision and negligence claims affecting commuters, students, and families',
    corridorContext: 'I-35 south, SH-9, and Norman-area commuter corridors',
    hubLink: createHubLink('/norman', 'Norman Location Page', 'Local Norman criminal and injury representation overview.'),
    nearbyLinks: [
      createHubLink(
        '/moore/criminal-defense',
        'Moore Criminal Defense',
        'Cleveland County and south-metro defense strategy for nearby cases.',
      ),
      createHubLink(
        '/oklahoma-city/personal-injury',
        'Oklahoma City Personal Injury',
        'Metro injury strategy for higher-value negligence and transport-corridor claims.',
      ),
    ],
  },
  moore: {
    slug: 'moore',
    marketName: 'Moore',
    marketType: 'city',
    countyContext: 'Cleveland County and south-metro court settings',
    criminalCourtContext: 'Cleveland County filings and south-metro enforcement patterns',
    injuryContext: 'serious collision and negligence claims affecting south-metro families',
    corridorContext: 'I-35 south and high-volume Moore commuter corridors',
    hubLink: createHubLink('/moore', 'Moore Location Page', 'Local Moore criminal and injury representation overview.'),
    nearbyLinks: [
      createHubLink(
        '/norman/criminal-defense',
        'Norman Criminal Defense',
        'Cleveland County defense strategy for nearby Norman cases.',
      ),
      createHubLink(
        '/oklahoma-city/personal-injury',
        'Oklahoma City Personal Injury',
        'Metro injury strategy for larger-value negligence claims.',
      ),
    ],
  },
  edmond: {
    slug: 'edmond',
    marketName: 'Edmond',
    marketType: 'city',
    countyContext: 'north Oklahoma County court and claim venues',
    criminalCourtContext: 'north Oklahoma County criminal filings with allegation-heavy case profiles',
    injuryContext: 'high-value crash and catastrophic-loss claims across north metro routes',
    corridorContext: 'I-35, Broadway Extension, and Memorial corridor traffic patterns',
    hubLink: createHubLink('/edmond', 'Edmond Location Page', 'Local Edmond criminal and injury representation overview.'),
    nearbyLinks: [
      createHubLink(
        '/oklahoma-city/criminal-defense',
        'Oklahoma City Criminal Defense',
        'County-wide defense strategy for overlapping metro matters.',
      ),
      createHubLink(
        '/stillwater/personal-injury',
        'Stillwater Personal Injury',
        'Regional northbound claim strategy for severe injury matters.',
      ),
    ],
  },
  'midwest-city': {
    slug: 'midwest-city',
    marketName: 'Midwest City',
    marketType: 'city',
    countyContext: 'east Oklahoma County courts and insurance venues',
    criminalCourtContext: 'east-metro criminal dockets and probation-related enforcement patterns',
    injuryContext: 'vehicle and negligence claims involving east-metro roadway risk',
    corridorContext: 'I-40 and east-metro arterial traffic corridors',
    hubLink: createHubLink(
      '/midwest-city',
      'Midwest City Location Page',
      'Local Midwest City criminal and injury representation overview.',
    ),
    nearbyLinks: [
      createHubLink(
        '/del-city/criminal-defense',
        'Del City Criminal Defense',
        'Southeast metro defense page for related venue patterns.',
      ),
      createHubLink(
        '/shawnee/personal-injury',
        'Shawnee Personal Injury',
        'Regional eastbound injury claim strategy.',
      ),
    ],
  },
  'del-city': {
    slug: 'del-city',
    marketName: 'Del City',
    marketType: 'city',
    countyContext: 'southeast Oklahoma County legal venues',
    criminalCourtContext: 'southeast-metro allegation-driven filings and urgent bond decisions',
    injuryContext: 'collision and premises claims tied to southeast-metro travel patterns',
    corridorContext: 'SE 29th Street and I-40 connector corridors',
    hubLink: createHubLink(
      '/del-city',
      'Del City Location Page',
      'Local Del City criminal and injury representation overview.',
    ),
    nearbyLinks: [
      createHubLink(
        '/midwest-city/criminal-defense',
        'Midwest City Criminal Defense',
        'East metro defense strategy for neighboring court activity.',
      ),
      createHubLink(
        '/choctaw/personal-injury',
        'Choctaw Personal Injury',
        'Nearby injury strategy for eastern Oklahoma County routes.',
      ),
    ],
  },
  yukon: {
    slug: 'yukon',
    marketName: 'Yukon',
    marketType: 'city',
    countyContext: 'Canadian County and west-metro court coordination',
    criminalCourtContext: 'Canadian County enforcement activity with west-metro venue overlap',
    injuryContext: 'serious crash and industrial-loss claims from west-metro routes',
    corridorContext: 'I-40 and Kilpatrick Turnpike traffic corridors',
    hubLink: createHubLink('/yukon', 'Yukon Location Page', 'Local Yukon criminal and injury representation overview.'),
    nearbyLinks: [
      createHubLink(
        '/el-reno/criminal-defense',
        'El Reno Criminal Defense',
        'Canadian County defense strategy for western-county exposure.',
      ),
      createHubLink(
        '/mustang/personal-injury',
        'Mustang Personal Injury',
        'Nearby west-south metro injury claim strategy.',
      ),
    ],
  },
  mustang: {
    slug: 'mustang',
    marketName: 'Mustang',
    marketType: 'city',
    countyContext: 'Canadian County and west-south metro legal venues',
    criminalCourtContext: 'southwest-metro warrant and charge pressure with Canadian County implications',
    injuryContext: 'high-severity collision and negligence claims affecting west-south metro families',
    corridorContext: 'SH-152 and Mustang-area commuter corridors',
    hubLink: createHubLink(
      '/mustang',
      'Mustang Location Page',
      'Local Mustang criminal and injury representation overview.',
    ),
    nearbyLinks: [
      createHubLink(
        '/newcastle/criminal-defense',
        'Newcastle Criminal Defense',
        'Nearby southbound defense market with related venue patterns.',
      ),
      createHubLink(
        '/moore/personal-injury',
        'Moore Personal Injury',
        'South metro injury strategy for connected commuter routes.',
      ),
    ],
  },
  stillwater: {
    slug: 'stillwater',
    marketName: 'Stillwater',
    marketType: 'city',
    countyContext: 'Payne County and north-central Oklahoma legal venues',
    criminalCourtContext: 'Payne County criminal filings and university-area enforcement patterns',
    injuryContext: 'serious crash and negligence claims in Stillwater and surrounding Payne County corridors',
    corridorContext: 'US-177, SH-51, and northbound commuter corridors between Stillwater and OKC',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/payne-county/criminal-defense', 'Payne County Criminal Defense', 'County-level defense coverage for Payne County markets.'),
      createHubLink('/guthrie/personal-injury', 'Guthrie Personal Injury', 'Nearby I-35 corridor injury strategy south of Stillwater.'),
    ],
  },
  shawnee: {
    slug: 'shawnee',
    marketName: 'Shawnee',
    marketType: 'city',
    countyContext: 'Pottawatomie County and east-central Oklahoma legal venues',
    criminalCourtContext: 'Pottawatomie County criminal dockets and eastbound enforcement activity',
    injuryContext: 'vehicle and premises-liability claims across Shawnee and nearby eastbound corridors',
    corridorContext: 'I-40 east and US-177 traffic corridors between Shawnee and metro OKC',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/pottawatomie-county/criminal-defense', 'Pottawatomie County Criminal Defense', 'County-level criminal strategy for Shawnee-area matters.'),
      createHubLink('/midwest-city/personal-injury', 'Midwest City Personal Injury', 'East metro injury strategy for connected I-40 claims.'),
    ],
  },
  'el-reno': {
    slug: 'el-reno',
    marketName: 'El Reno',
    marketType: 'city',
    countyContext: 'Canadian County west-corridor courts and claim venues',
    criminalCourtContext: 'west Canadian County criminal filings and warrant-risk matters',
    injuryContext: 'collision and negligence claims across El Reno and western I-40 travel routes',
    corridorContext: 'I-40 west and US-81 corridors with heavy commercial traffic activity',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/canadian-county/criminal-defense', 'Canadian County Criminal Defense', 'County-level defense framework for Canadian County filings.'),
      createHubLink('/yukon/personal-injury', 'Yukon Personal Injury', 'West metro injury page for adjacent high-volume routes.'),
    ],
  },
  chickasha: {
    slug: 'chickasha',
    marketName: 'Chickasha',
    marketType: 'city',
    countyContext: 'Grady County and south-west corridor legal venues',
    criminalCourtContext: 'Grady County criminal dockets with charge and probation exposure',
    injuryContext: 'serious crash and work-related negligence claims across Chickasha-area routes',
    corridorContext: 'I-44 and US-81 traffic routes connecting Chickasha to metro markets',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/grady-county/criminal-defense', 'Grady County Criminal Defense', 'County-level defense strategy for Grady County courts.'),
      createHubLink('/mustang/personal-injury', 'Mustang Personal Injury', 'Nearby injury strategy for west-south metro and Grady commuters.'),
    ],
  },
  guthrie: {
    slug: 'guthrie',
    marketName: 'Guthrie',
    marketType: 'city',
    countyContext: 'Logan County and north I-35 legal venues',
    criminalCourtContext: 'Logan County criminal filings and northbound highway enforcement patterns',
    injuryContext: 'collision and negligence claims tied to I-35 and rural connector routes',
    corridorContext: 'I-35 north and SH-33 commuter and commercial traffic corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/logan-county/criminal-defense', 'Logan County Criminal Defense', 'County-level defense strategy for Logan County matters.'),
      createHubLink('/edmond/personal-injury', 'Edmond Personal Injury', 'North metro injury strategy for connected corridor claims.'),
    ],
  },
  enid: {
    slug: 'enid',
    marketName: 'Enid',
    marketType: 'city',
    countyContext: 'Garfield County and north-west Oklahoma legal venues',
    criminalCourtContext: 'Garfield County criminal proceedings and north-west regional enforcement activity',
    injuryContext: 'severe crash and industrial negligence claims across Enid-area routes',
    corridorContext: 'US-81 and US-412 commercial corridors with heavy transport traffic',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/garfield-county/criminal-defense', 'Garfield County Criminal Defense', 'County-level defense strategy for Garfield County charges.'),
      createHubLink('/stillwater/personal-injury', 'Stillwater Personal Injury', 'Nearby regional injury strategy for north-central claims.'),
    ],
  },
  lawton: {
    slug: 'lawton',
    marketName: 'Lawton',
    marketType: 'city',
    countyContext: 'Comanche County and southwest Oklahoma legal venues',
    criminalCourtContext: 'Comanche County criminal filings with high-stakes allegation and warrant exposure',
    injuryContext: 'major crash and negligence claims involving southwest corridor travel and industrial activity',
    corridorContext: 'I-44 southwest and US-62 transportation corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/comanche-county/criminal-defense', 'Comanche County Criminal Defense', 'County-level defense strategy for Lawton-area filings.'),
      createHubLink('/chickasha/personal-injury', 'Chickasha Personal Injury', 'Regional injury strategy for connected southwest routes.'),
    ],
  },
  ada: {
    slug: 'ada',
    marketName: 'Ada',
    marketType: 'city',
    countyContext: 'Pontotoc County and south-east regional legal venues',
    criminalCourtContext: 'south-east regional criminal filings and warrant-risk proceedings',
    injuryContext: 'serious collision and negligence claims along regional connector routes',
    corridorContext: 'SH-3 and SH-19 corridors linking Ada to metro and regional routes',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/cleveland-county/criminal-defense', 'Cleveland County Criminal Defense', 'Nearby county-level defense strategy for southbound markets.'),
      createHubLink('/shawnee/personal-injury', 'Shawnee Personal Injury', 'Eastbound injury strategy for related corridor claims.'),
    ],
  },
  choctaw: {
    slug: 'choctaw',
    marketName: 'Choctaw',
    marketType: 'city',
    countyContext: 'east Oklahoma County and nearby county-line legal venues',
    criminalCourtContext: 'east Oklahoma County criminal filings with high-contact traffic-stop enforcement',
    injuryContext: 'collision and negligence claims tied to east metro commuter routes',
    corridorContext: 'NE 23rd Street and eastbound metro connector corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/oklahoma-county/criminal-defense', 'Oklahoma County Criminal Defense', 'County-level criminal strategy for metro filings.'),
      createHubLink('/midwest-city/personal-injury', 'Midwest City Personal Injury', 'East metro injury strategy for neighboring claims.'),
    ],
  },
  bethany: {
    slug: 'bethany',
    marketName: 'Bethany',
    marketType: 'city',
    countyContext: 'west Oklahoma County metro legal venues',
    criminalCourtContext: 'west Oklahoma County criminal filings and municipal overlap matters',
    injuryContext: 'west metro collision and premises claims with insurer dispute risk',
    corridorContext: 'NW Expressway and west metro arterial traffic corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/oklahoma-county/criminal-defense', 'Oklahoma County Criminal Defense', 'County strategy for Oklahoma County criminal dockets.'),
      createHubLink('/yukon/personal-injury', 'Yukon Personal Injury', 'Westward injury strategy for connected high-volume routes.'),
    ],
  },
  newcastle: {
    slug: 'newcastle',
    marketName: 'Newcastle',
    marketType: 'city',
    countyContext: 'McClain County and south metro county-line legal venues',
    criminalCourtContext: 'McClain County criminal filings and southbound enforcement patterns',
    injuryContext: 'serious crash and negligence claims across south metro and McClain corridors',
    corridorContext: 'I-44 south and SH-9 corridor traffic between Newcastle and metro OKC',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/mclain-county/criminal-defense', 'McClain County Criminal Defense', 'County-level defense strategy for Newcastle-area matters.'),
      createHubLink('/moore/personal-injury', 'Moore Personal Injury', 'Nearby injury strategy for south metro commuters.'),
    ],
  },
  blanchard: {
    slug: 'blanchard',
    marketName: 'Blanchard',
    marketType: 'city',
    countyContext: 'McClain and Grady County line legal venues',
    criminalCourtContext: 'county-line criminal filings with venue-specific procedural risks',
    injuryContext: 'collision and negligence claims across Blanchard-area regional routes',
    corridorContext: 'US-62 and SH-76 traffic corridors linking Blanchard to metro markets',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/mclain-county/criminal-defense', 'McClain County Criminal Defense', 'County-level defense strategy for McClain filings.'),
      createHubLink('/chickasha/personal-injury', 'Chickasha Personal Injury', 'Regional injury strategy for nearby Grady/McClain traffic routes.'),
    ],
  },
  'oklahoma-county': {
    slug: 'oklahoma-county',
    marketName: 'Oklahoma County',
    marketType: 'county',
    countyContext: 'Oklahoma County district and metro legal venues',
    criminalCourtContext: 'high-volume Oklahoma County criminal dockets with allegation-heavy filings',
    injuryContext: 'metro-area crash and negligence claims across dense urban traffic corridors',
    corridorContext: 'I-35, I-40, I-44, and Kilpatrick Turnpike corridor activity',
    injuryNarrativeAddendum: [
      'Oklahoma County claims often require early evidence mapping around Downtown interchange zones, including I-235 connectors, Broadway Extension merges, and NW Expressway bottlenecks where liability narratives can shift quickly.',
      'We also evaluate commercial-vehicle and delivery-route exposure tied to Bricktown, the medical district, and airport-bound freight movement, because these patterns frequently affect both causation disputes and policy-limit strategy.',
    ],
    injuryDifferentiators: [
      'Downtown OKC interchange collision sequencing (I-235, I-40, and I-44 connectors) is analyzed early for fault-allocation disputes.',
      'Medical district record timing and care-transition chronology are audited to prevent avoidable gaps in catastrophic-injury valuation.',
      'Commercial fleet and rideshare evidence holds are issued quickly for Bricktown, Midtown, and airport-corridor incident patterns.',
      'Venue preparation accounts for Oklahoma County jury-value exposure and mediation leverage in high-severity urban crash claims.',
    ],
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/oklahoma-city/criminal-defense', 'Oklahoma City Criminal Defense', 'City-level defense strategy for Oklahoma County matters.'),
      createHubLink('/edmond/personal-injury', 'Edmond Personal Injury', 'North county injury strategy for severe claims.'),
    ],
  },
  'cleveland-county': {
    slug: 'cleveland-county',
    marketName: 'Cleveland County',
    marketType: 'county',
    countyContext: 'Cleveland County district court and county-wide claim venues',
    criminalCourtContext: 'Cleveland County criminal filings, warrant exposure, and probation-risk hearings',
    injuryContext: 'county-wide collision and negligence claims involving south metro and university routes',
    corridorContext: 'I-35 south, SH-9, and Cleveland County commuter corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/norman/criminal-defense', 'Norman Criminal Defense', 'City-level defense strategy for Cleveland County charges.'),
      createHubLink('/moore/personal-injury', 'Moore Personal Injury', 'South county injury strategy for major roadway crashes.'),
    ],
  },
  'canadian-county': {
    slug: 'canadian-county',
    marketName: 'Canadian County',
    marketType: 'county',
    countyContext: 'Canadian County district and west-corridor legal venues',
    criminalCourtContext: 'Canadian County criminal dockets with westbound corridor enforcement exposure',
    injuryContext: 'county-wide crash and negligence claims tied to westbound traffic routes',
    corridorContext: 'I-40 west, SH-66, and US-81 transport corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/yukon/criminal-defense', 'Yukon Criminal Defense', 'City-level defense strategy for Canadian County matters.'),
      createHubLink('/el-reno/personal-injury', 'El Reno Personal Injury', 'Western county injury strategy for regional collision claims.'),
    ],
  },
  'logan-county': {
    slug: 'logan-county',
    marketName: 'Logan County',
    marketType: 'county',
    countyContext: 'Logan County district and northbound legal venues',
    criminalCourtContext: 'Logan County criminal filings and northbound traffic-stop enforcement',
    injuryContext: 'north-corridor crash and negligence claims with regional travel exposure',
    corridorContext: 'I-35 north and SH-33 corridor incident patterns',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/guthrie/criminal-defense', 'Guthrie Criminal Defense', 'City-level Logan County defense strategy.'),
      createHubLink('/stillwater/personal-injury', 'Stillwater Personal Injury', 'Nearby regional injury strategy north of OKC.'),
    ],
  },
  'payne-county': {
    slug: 'payne-county',
    marketName: 'Payne County',
    marketType: 'county',
    countyContext: 'Payne County district court and north-central legal venues',
    criminalCourtContext: 'Payne County criminal dockets with university and highway enforcement overlap',
    injuryContext: 'north-central collision and negligence claims along regional connectors',
    corridorContext: 'US-177 and SH-51 routes connecting Payne County to metro areas',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/stillwater/criminal-defense', 'Stillwater Criminal Defense', 'City-level defense strategy for Payne County cases.'),
      createHubLink('/guthrie/personal-injury', 'Guthrie Personal Injury', 'Connected northbound injury claim strategy.'),
    ],
  },
  'pottawatomie-county': {
    slug: 'pottawatomie-county',
    marketName: 'Pottawatomie County',
    marketType: 'county',
    countyContext: 'Pottawatomie County district court and eastbound legal venues',
    criminalCourtContext: 'Pottawatomie County criminal filings with east-corridor enforcement activity',
    injuryContext: 'eastbound county collision and negligence claims across regional routes',
    corridorContext: 'I-40 east and US-177 county connector corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/shawnee/criminal-defense', 'Shawnee Criminal Defense', 'City-level defense strategy for Pottawatomie County charges.'),
      createHubLink('/midwest-city/personal-injury', 'Midwest City Personal Injury', 'Eastbound injury strategy for connected metro routes.'),
    ],
  },
  'grady-county': {
    slug: 'grady-county',
    marketName: 'Grady County',
    marketType: 'county',
    countyContext: 'Grady County district court and south-west regional venues',
    criminalCourtContext: 'Grady County criminal dockets with warrant and probation-risk exposure',
    injuryContext: 'south-west county collision and negligence claims involving commuter corridors',
    corridorContext: 'I-44 and US-81 traffic corridors through Grady County',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/chickasha/criminal-defense', 'Chickasha Criminal Defense', 'City-level defense strategy for Grady County matters.'),
      createHubLink('/mustang/personal-injury', 'Mustang Personal Injury', 'Nearby injury strategy for connected west-south routes.'),
    ],
  },
  'mclain-county': {
    slug: 'mclain-county',
    marketName: 'McClain County',
    marketType: 'county',
    countyContext: 'McClain County district and south metro county-line venues',
    criminalCourtContext: 'McClain County criminal filings with county-line venue strategy issues',
    injuryContext: 'south-corridor collision and negligence claims across McClain commuter routes',
    corridorContext: 'I-44 south and US-77 county connector corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/newcastle/criminal-defense', 'Newcastle Criminal Defense', 'City-level defense strategy for McClain-area allegations.'),
      createHubLink('/moore/personal-injury', 'Moore Personal Injury', 'Nearby injury strategy for south metro claims.'),
    ],
  },
  'lincoln-county': {
    slug: 'lincoln-county',
    marketName: 'Lincoln County',
    marketType: 'county',
    countyContext: 'Lincoln County district court and east-central regional venues',
    criminalCourtContext: 'Lincoln County criminal dockets and rural-to-metro enforcement overlap',
    injuryContext: 'east-central collision and negligence claims with regional route exposure',
    corridorContext: 'I-44 northeast and SH-66 county connector corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/choctaw/criminal-defense', 'Choctaw Criminal Defense', 'Nearby defense strategy for eastern county-line matters.'),
      createHubLink('/shawnee/personal-injury', 'Shawnee Personal Injury', 'Regional injury strategy for eastbound county claims.'),
    ],
  },
  'comanche-county': {
    slug: 'comanche-county',
    marketName: 'Comanche County',
    marketType: 'county',
    countyContext: 'Comanche County district court and southwest Oklahoma venues',
    criminalCourtContext: 'Comanche County criminal dockets with high-stakes felony and warrant exposure',
    injuryContext: 'southwest-corridor crash and negligence claims tied to major transport routes',
    corridorContext: 'I-44 southwest and US-62 county transport routes',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/lawton/criminal-defense', 'Lawton Criminal Defense', 'City-level defense strategy for Comanche County charges.'),
      createHubLink('/chickasha/personal-injury', 'Chickasha Personal Injury', 'Nearby regional injury strategy for connected southwest routes.'),
    ],
  },
  'garfield-county': {
    slug: 'garfield-county',
    marketName: 'Garfield County',
    marketType: 'county',
    countyContext: 'Garfield County district court and north-west regional venues',
    criminalCourtContext: 'Garfield County criminal filings with regional enforcement and warrant exposure',
    injuryContext: 'north-west collision and negligence claims along commercial transport corridors',
    corridorContext: 'US-81 and US-412 high-volume transport routes',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/enid/criminal-defense', 'Enid Criminal Defense', 'City-level defense strategy for Garfield County proceedings.'),
      createHubLink('/stillwater/personal-injury', 'Stillwater Personal Injury', 'North-central injury strategy for connected regional claims.'),
    ],
  },
}

function buildCriminalSubpillar(profile: MarketProfile): SubpillarSpec {
  const slugPrefix = `${profile.slug}_criminal_defense`
  const marketTier = getMarketTier(profile)
  const tierContext = CRIMINAL_TIER_CONTEXT[marketTier]

  return createSubpillarSpec({
    metadata: {
      title: `${profile.marketName} Criminal Defense Lawyer`,
      description: `Criminal defense representation for ${profile.marketName} matters in ${profile.countyContext}, including DUI, felony, warrant, and probation exposure.`,
      alternates: { canonical: `/${profile.slug}/criminal-defense` },
      openGraph: {
        title: `${profile.marketName} Criminal Defense Lawyer | Kernal & Associates`,
        description: `Local criminal defense strategy for ${profile.marketName} charges with trial-ready representation.`,
        url: `https://kernallaw.com/${profile.slug}/criminal-defense`,
      },
    },
    pageProps: {
      heroTitle: `${profile.marketName} Criminal Defense Lawyer`,
      heroSubtitle: `Defense strategy for ${profile.countyContext}.`,
      heroVariant: 'criminal',
      introTitle: `Criminal cases in ${profile.marketName} require immediate legal control.`,
      introParagraphs: [
        `${profile.marketName} criminal allegations often move through first-appearance, bond, and condition stages faster than most clients expect. Early legal decisions influence admissibility disputes, negotiation posture, and long-term record risk before full case facts are even organized.`,
        `Our defense workflow is built for ${profile.criminalCourtContext}, where charging pressure and procedural timelines can change quickly. We begin by identifying immediate control points, communication risks, and hearing preparation tasks tied to your exact filing profile. In ${profile.marketName}, that frequently includes ${tierContext.docketProfile}.`,
        `${profile.countyContext} often requires coordinated strategy across court requirements, compliance obligations, and evidence development. Defense planning is sequenced to protect rights while preserving practical options for dismissal, reduction, or trial-readiness.`,
        `Because many matters in ${profile.marketName} intersect with ${profile.corridorContext}, we evaluate traffic-stop procedure, witness quality, and timeline accuracy early so avoidable narrative gaps do not reduce leverage later in the case. This is especially important where ${tierContext.pressurePattern}.`,
      ],
      focusTitle: `What We Focus On in ${profile.marketName} Criminal Defense`,
      focusItems: [
        {
          title: 'Immediate Case Stabilization',
          description:
            `Early legal controls are used to reduce avoidable exposure before prosecution framing hardens. We prioritize release-condition compliance, hearing posture, and communication discipline specific to ${profile.marketName} allegations so the case begins in a defensible position. Intake strategy is calibrated for ${tierContext.docketProfile}.`,
          bullets: [
            `Bond and release-condition analysis tied to ${profile.countyContext}`,
            'No-contact and compliance planning for day-one risk reduction',
            'Urgent filing, appearance, and deadline control checklist',
            `Local timeline triage for ${profile.criminalCourtContext}`,
            `Risk-screening for incident patterns around ${profile.corridorContext}`,
            `Coordination with nearby venue strategy from ${profile.nearbyLinks[0].title}`,
          ],
        },
        {
          title: 'Evidence and Procedure Challenges',
          description:
            `Many defense gains come from disciplined review of search, seizure, testing, and documentation process. We stress-test how evidence was collected and preserved so procedural errors in ${profile.marketName} matters can be surfaced before negotiation positions harden.`,
          bullets: [
            `Stop-and-search legality review for ${profile.corridorContext} encounter patterns`,
            'Officer report versus audio/video inconsistency checks',
            'Interview, testing, and chain-of-custody process analysis',
            'Suppression-motion sequencing with deadline discipline',
            `Witness-timeline reconstruction for ${profile.marketName} venue expectations`,
            'Case-file contradiction mapping for negotiation leverage',
          ],
        },
        {
          title: 'Negotiation Backed by Trial Readiness',
          description:
            `We prepare each case for courtroom scrutiny so negotiations reflect real litigation risk, not default pressure. This approach helps align plea decisions, mitigation strategy, and long-range consequences with what is actually defensible in ${profile.marketName}.`,
          bullets: [
            'Case-theory and mitigation planning aligned to filed allegations',
            'Resolution-path risk modeling across plea and trial branches',
            'Plea versus trial decision support with documented tradeoffs',
            `${profile.marketName} venue-specific preparation and hearing sequencing`,
            `Coordination with broader market strategy through ${profile.hubLink.title}`,
            `Transition planning when exposure overlaps nearby courts such as ${profile.nearbyLinks[0].title}`,
          ],
        },
      ],
      processTitle: `${profile.marketName} Criminal Defense Process`,
      processSubtitle: 'A consistent defense framework from intake through final resolution.',
      processSteps: [
        {
          step: '01',
          title: 'Urgent Intake and Case Controls',
          description:
            `We map immediate risks, condition obligations, and communication boundaries at intake so early mistakes do not compound exposure in ${profile.marketName} proceedings.`,
        },
        {
          step: '02',
          title: 'Evidence Collection and Review',
          description:
            `We gather filings, reports, media, and timeline records, then test procedural reliability to identify leverage for dismissal motions, charge reduction strategy, or trial defense.`,
        },
        {
          step: '03',
          title: 'Motion and Negotiation Strategy',
          description:
            `We apply evidentiary pressure while building realistic resolution pathways that reflect venue dynamics, long-term consequences, and client priorities in ${profile.countyContext}. This phase is structured for ${tierContext.hearingPosture}.`,
        },
        {
          step: '04',
          title: 'Trial or Final Resolution',
          description:
            `If negotiated outcomes remain unreasonable, we advance into trial-ready litigation with a clear defense theory, witness plan, and evidentiary challenge framework.`,
        },
      ],
      localContextTitle: `${profile.marketName} Criminal Case Pressure Points`,
      localContextSubtitle:
        'Local enforcement, venue, and timeline dynamics that commonly shape defense strategy in this market.',
      localContextNarrative: [
        `${profile.marketName} criminal matters frequently require rapid adjustment between courtroom deadlines and investigation pacing. For ${profile.criminalCourtContext}, we prioritize sequence control so evidence review, mitigation development, and court communication move in the right order. Local planning also accounts for ${tierContext.docketProfile}.`,
        `When allegations arise around ${profile.corridorContext}, early record collection is critical. Dispatch detail, body-cam timing, and witness positioning often determine whether procedural issues can be raised effectively before adverse narratives are treated as settled.`,
        `Cases connected to ${profile.countyContext} are managed with long-horizon planning, not short-term reaction. The objective is to protect immediate liberty and long-term record outcomes at the same time while maintaining credible trial posture under ${tierContext.hearingPosture}.`,
      ],
      localContextPoints: [
        `Venue risk analysis is calibrated to ${profile.criminalCourtContext} rather than generic statewide assumptions.`,
        `Timeline control includes first-appearance preparation, condition compliance planning, and documented communication safeguards.`,
        `Defense investigation scope is prioritized around ${profile.corridorContext} where stop procedure and witness geometry often matter.`,
        `Mitigation strategy is sequenced so it supports, rather than weakens, suppression and negotiation leverage.`,
        `Nearby market comparison through ${profile.nearbyLinks[0].title} is used when venue overlap affects filing or negotiation posture.`,
        `Court-facing decisions are benchmarked against long-term impacts on record, employment, licensing, and financial risk.`,
        `Operational assumptions are pressure-tested against ${tierContext.pressurePattern}, not just generic docket timelines.`,
      ],
      relatedTitle: `Related ${profile.marketName} Criminal Defense Pages`,
      relatedSubtitle: 'Use these pages to compare local-market and charge-specific strategy options.',
      relatedLinks: [
        {
          href: profile.hubLink.href,
          title: profile.hubLink.title,
          description: profile.hubLink.description,
          ctaName: `${slugPrefix}_related_hub`,
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'Post-Arrest Guide',
          description: 'First-48-hours checklist for rights protection and case-control decisions.',
          ctaName: `${slugPrefix}_related_after_arrest_guide`,
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Charge-specific strategy for DUI allegations and license exposure.',
          ctaName: `${slugPrefix}_related_dui`,
        },
        {
          href: '/resources/oklahoma-felony-case-timeline',
          title: 'Felony Case Timeline Guide',
          description: 'Stage-by-stage felony process map from filing through trial-readiness.',
          ctaName: `${slugPrefix}_related_felony_timeline_guide`,
        },
        {
          href: profile.nearbyLinks[0].href,
          title: profile.nearbyLinks[0].title,
          description: profile.nearbyLinks[0].description,
          ctaName: `${slugPrefix}_related_nearby_a`,
        },
        {
          href: '/contact',
          title: 'Request Defense Consultation',
          description: `Confidential legal review for urgent ${profile.marketName} criminal matters and deadline-driven filings.`,
          ctaName: `${slugPrefix}_related_contact`,
        },
      ],
      faqTitle: `${profile.marketName} Criminal Defense FAQ`,
      faqSubtitle: `Common criminal-defense questions from ${profile.marketName} clients.`,
      faqs: [
        {
          question: `How quickly should I call a lawyer after an arrest in ${profile.marketName}?`,
          answer:
            `Immediately. Early legal strategy can materially affect condition compliance, evidentiary posture, and negotiation leverage for ${profile.marketName} criminal filings.`,
        },
        {
          question: `Do you handle felony and misdemeanor matters in ${profile.countyContext}?`,
          answer:
            `Yes. We represent clients across misdemeanor and felony categories, including DUI, violent allegations, theft, warrant exposure, and probation-risk proceedings tied to ${profile.countyContext}.`,
        },
        {
          question: 'Can a case still be defended after I already gave a statement?',
          answer:
            `Often yes. Defense strategy depends on full context, procedure, and how statements were obtained, recorded, and interpreted in relation to the rest of the evidence file.`,
        },
        {
          question: 'What should I bring to the first consultation?',
          answer:
            `Bring all court and release documents, citations, timeline notes, witness details, and communication records so strategy can be aligned quickly to ${profile.marketName} deadlines.`,
        },
      ],
      practiceArea: slugPrefix,
      ctaTitle: `Need Criminal Defense in ${profile.marketName}?`,
      ctaDescription: `Get immediate guidance on risk, deadlines, and the next best strategic move for ${profile.countyContext}.`,
      ctaLabel: 'Start Defense Review',
      ctaName: `${slugPrefix}_bottom_cta`,
      actionChecklist: [
        `Confirm hearing dates and release conditions for ${profile.countyContext} before making any new statements.`,
        `Preserve all records tied to ${profile.corridorContext}, including citations, media, and witness contacts.`,
        `Avoid broad case discussions outside privileged attorney communication channels.`,
        `Schedule a strategy review early so dismissal, reduction, and trial options are evaluated in sequence for ${tierContext.hearingPosture}.`,
      ],
    },
  })
}

function buildInjurySubpillar(profile: MarketProfile): SubpillarSpec {
  const slugPrefix = `${profile.slug}_personal_injury`
  const marketTier = getMarketTier(profile)
  const tierContext = INJURY_TIER_CONTEXT[marketTier]

  return createSubpillarSpec({
    metadata: {
      title: `${profile.marketName} Personal Injury Lawyer`,
      description: `Personal injury representation for ${profile.marketName} claims in ${profile.countyContext}, including car and truck crashes, catastrophic injuries, and wrongful death.`,
      alternates: { canonical: `/${profile.slug}/personal-injury` },
      openGraph: {
        title: `${profile.marketName} Personal Injury Lawyer | Kernal & Associates`,
        description: `Evidence-driven injury claim strategy for ${profile.marketName} crash and negligence cases.`,
        url: `https://kernallaw.com/${profile.slug}/personal-injury`,
      },
    },
    pageProps: {
      heroTitle: `${profile.marketName} Personal Injury Lawyer`,
      heroSubtitle: `Claim strategy for ${profile.injuryContext}.`,
      heroVariant: 'injury',
      introTitle: `Injury claims in ${profile.marketName} are won on evidence depth and timing.`,
      introParagraphs: [
        `${profile.corridorContext} generate serious collision and negligence matters where early claim mistakes can reduce recoverable value before treatment and damages are fully documented. In ${profile.marketName}, this usually reflects ${tierContext.claimProfile}.`,
        `Kernal & Associates represents ${profile.marketName} clients using an evidence-first framework for liability proof, medical chronology, and insurer-pressure response from intake through resolution.`,
        `In ${profile.countyContext}, we structure claims around provable facts and timeline discipline so adjuster narratives do not outrun the actual evidence record. Documentation design also addresses ${tierContext.documentationRisk}.`,
        `Because high-severity matters in ${profile.marketName} often involve overlapping medical, employment, and policy issues, strategy is built to protect both near-term stability and long-horizon recovery value.`,
      ],
      focusTitle: `How We Build ${profile.marketName} Injury Cases`,
      focusItems: [
        {
          title: 'Liability Proof Development',
          description:
            `We construct fault narratives from records, vehicle data, and timeline evidence instead of relying on insurer assumptions. The goal is to present a defensible liability story that holds under negotiation and litigation scrutiny.`,
          bullets: [
            `Scene and timeline documentation tied to ${profile.corridorContext}`,
            'Witness, report, and media reconciliation',
            'Third-party and commercial liability mapping when applicable',
            `${profile.marketName} route-risk context analysis`,
            `Venue and incident framing aligned to ${profile.countyContext}`,
            `Comparative market pattern checks using ${profile.nearbyLinks[1].title}`,
          ],
        },
        {
          title: 'Damages and Medical Documentation',
          description:
            `Claim value depends on complete proof of treatment progression, economic loss, and long-term functional impact. We organize records so damages are substantiated rather than implied.`,
          bullets: [
            'Medical chronology and consistency tracking',
            'Wage-loss and earning-impact records',
            'Future care, impairment, and treatment planning',
            'Out-of-pocket and daily-impact evidence',
            `Provider communication alignment for ${profile.marketName} claim timing`,
            'Documentation controls before recorded insurer statements',
          ],
        },
        {
          title: 'Negotiation Strength and Litigation Readiness',
          description:
            `We negotiate from a trial-capable posture so carriers must value real litigation risk, not assumed settlement pressure. This helps protect recovery potential when liability, causation, or policy limits are disputed. Positioning is built for ${tierContext.valuationPressure}.`,
          bullets: [
            'Demand package structure with liability and damages integration',
            'Delay and undervaluation response strategy',
            'Settlement-risk benchmarking against litigation posture',
            `${profile.countyContext} litigation path planning`,
            `Escalation triggers tied to ${profile.injuryContext}`,
            `Case sequencing that preserves leverage in ${profile.marketName} negotiations`,
          ],
        },
      ],
      processTitle: `${profile.marketName} Injury Claim Process`,
      processSubtitle: 'A consistent claim framework that protects value from first contact through resolution.',
      processSteps: [
        {
          step: '01',
          title: 'Case Intake and Evidence Safeguards',
          description:
            `We secure records, set communication boundaries, and preserve proof before insurer narratives lock in around incomplete or misleading assumptions.`,
        },
        {
          step: '02',
          title: 'Treatment and Damages Development',
          description:
            `We align treatment progression, provider records, and financial-loss documentation so claim valuation reflects full injury impact rather than partial snapshots.`,
        },
        {
          step: '03',
          title: 'Demand and Negotiation Phase',
          description:
            `We present a comprehensive evidence package and negotiate from a litigation-capable position that accounts for disputed fault, policy issues, and recovery timing. The demand sequence is tuned to ${tierContext.valuationPressure}.`,
        },
        {
          step: '04',
          title: 'Litigation When Necessary',
          description:
            `If pre-suit outcomes remain unreasonable, we transition to litigation to pursue full and fair recovery based on documented liability and damages proof.`,
        },
      ],
      localContextTitle: `${profile.marketName} Injury Claim Pressure Points`,
      localContextSubtitle:
        'Local roadway, insurer, and documentation dynamics that commonly shape injury claim outcomes.',
      localContextNarrative: [
        `${profile.marketName} injury claims are usually won or lost on documentation quality in the first stages. We focus on sequencing records, treatment evidence, and communications so liability and damages development stays credible as the claim matures.`,
        `Where losses involve ${profile.corridorContext}, collision mechanics and timeline proof are often central. We map incident facts to record support early so adjuster framing does not outrun available evidence.`,
        `In ${profile.countyContext}, claim strategy is built to protect long-range recovery value. That includes policy analysis, medical progression tracking, and escalation planning when negotiation pressure conflicts with provable case value in markets facing ${tierContext.claimProfile}.`,
        ...(profile.injuryNarrativeAddendum ?? []),
      ],
      localContextPoints: [
        `Liability and causation framing is adapted to incident patterns in ${profile.marketName}, not generic claim templates.`,
        `Medical and damages buildout is staged to support negotiation, mediation, and litigation transitions without narrative gaps.`,
        `Policy-limit and coverage pathways are reviewed early when losses involve underinsured or multi-party exposure.`,
        `Communication controls are used to reduce avoidable misstatements during active insurer pressure windows.`,
        `Evidence strategy is cross-checked with nearby market behavior through ${profile.nearbyLinks[1].title}.`,
        `Resolution planning keeps short-term cash pressure from undermining long-term recovery outcomes.`,
        `Claim architecture explicitly addresses ${tierContext.documentationRisk} to avoid undervaluation based on fragmented records.`,
        ...(profile.injuryDifferentiators ?? []),
      ],
      relatedTitle: `Related ${profile.marketName} Injury Pages`,
      relatedSubtitle: 'Use these pages to compare local-market and injury-category strategy.',
      relatedLinks: [
        {
          href: profile.hubLink.href,
          title: profile.hubLink.title,
          description: profile.hubLink.description,
          ctaName: `${slugPrefix}_related_hub`,
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Guide',
          description: 'Immediate crash-response checklist for preserving evidence and claim value.',
          ctaName: `${slugPrefix}_related_post_accident_guide`,
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Fault and damages strategy for severe vehicle collisions.',
          ctaName: `${slugPrefix}_related_car`,
        },
        {
          href: '/resources/oklahoma-uninsured-motorist-claim-guide',
          title: 'Uninsured Motorist Claim Guide',
          description: 'UM/UIM coverage strategy when at-fault insurance is limited.',
          ctaName: `${slugPrefix}_related_um_uim_guide`,
        },
        {
          href: profile.nearbyLinks[1].href,
          title: profile.nearbyLinks[1].title,
          description: profile.nearbyLinks[1].description,
          ctaName: `${slugPrefix}_related_nearby_b`,
        },
        {
          href: '/contact',
          title: 'Request Injury Consultation',
          description: `Confidential claim review for urgent ${profile.marketName} injury matters and insurer-pressure timelines.`,
          ctaName: `${slugPrefix}_related_contact`,
        },
      ],
      faqTitle: `${profile.marketName} Personal Injury FAQ`,
      faqSubtitle: `Frequent injury-claim questions from ${profile.marketName} clients.`,
      faqs: [
        {
          question: `How soon should I call a lawyer after an accident in ${profile.marketName}?`,
          answer:
            `Immediately when possible. Early legal guidance helps preserve evidence, control insurer communications, and protect claim value in ${profile.marketName} matters.`,
        },
        {
          question: `Can you handle disputed-fault claims in ${profile.countyContext}?`,
          answer:
            `Yes. We handle contested liability using structured evidence development, medical chronology control, and litigation-ready claim framing for ${profile.countyContext}.`,
        },
        {
          question: 'What records should I keep after a serious injury event?',
          answer:
            'Keep medical records, bills, wage-loss proof, photos, repair estimates, and all insurer communications so liability and damages can be documented clearly.',
        },
        {
          question: 'Do you handle catastrophic and wrongful death matters?',
          answer:
            `Yes. We represent high-severity injury and fatal-loss cases with long-horizon damages strategy and litigation-capable case development.`,
        },
      ],
      practiceArea: slugPrefix,
      ctaTitle: `Need Injury Representation in ${profile.marketName}?`,
      ctaDescription: `Start with a focused legal review before insurer pressure narrows your options in ${profile.countyContext}.`,
      ctaLabel: 'Start Injury Case Review',
      ctaName: `${slugPrefix}_bottom_cta`,
      actionChecklist: [
        `Preserve records tied to ${profile.corridorContext}, including reports, photos, witness contacts, and timeline notes.`,
        'Follow treatment plans consistently and keep all provider documentation in one chronology.',
        'Avoid recorded insurer narratives until legal strategy and evidence sequencing are defined.',
        `Request claim review early so valuation planning reflects full damages exposure in ${profile.marketName} under ${tierContext.valuationPressure}.`,
      ],
    },
  })
}

const subpillarMap = ALL_STANDARD_SUBPILLAR_MARKETS.reduce((acc, slug) => {
  const profile = marketProfiles[slug]
  acc[slug] = {
    'criminal-defense': buildCriminalSubpillar(profile),
    'personal-injury': buildInjurySubpillar(profile),
  }
  return acc
}, {} as Record<MarketSlug, Record<ServiceSlug, SubpillarSpec>>)

export function getCitySubpillarSpec(market: MarketSlug, service: ServiceSlug): SubpillarSpec {
  return subpillarMap[market][service]
}

export function getMarketDisplayName(market: MarketSlug): string {
  return marketProfiles[market].marketName
}

export function getMarketType(market: MarketSlug): MarketType {
  return marketProfiles[market].marketType
}

export function getMarketProfile(market: MarketSlug): MarketProfile {
  return marketProfiles[market]
}

export function getAllMarketSlugs(): MarketSlug[] {
  return [...ALL_STANDARD_SUBPILLAR_MARKETS]
}

export function isMarketSlug(value: string): value is MarketSlug {
  return ALL_STANDARD_SUBPILLAR_MARKETS.includes(value as MarketSlug)
}

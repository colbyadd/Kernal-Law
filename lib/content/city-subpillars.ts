import { createSubpillarSpec, type SubpillarSpec } from '@/lib/content/subpillar-standards'

type ServiceSlug = 'criminal-defense' | 'personal-injury'
type MarketType = 'city' | 'county'

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
        `${profile.marketName} criminal allegations often move quickly through bond, condition, and evidentiary stages. Early missteps can reduce leverage before full defense review starts.`,
        `Kernal & Associates handles ${profile.criminalCourtContext} with a structured defense process across DUI, drug, assault, theft, warrant, and probation matters.`,
      ],
      focusTitle: `What We Focus On in ${profile.marketName} Criminal Defense`,
      focusItems: [
        {
          title: 'Immediate Case Stabilization',
          description:
            'Early strategic controls reduce avoidable exposure and protect defense options before prosecution framing hardens.',
          bullets: [
            'Bond and release-condition analysis',
            'No-contact and compliance planning',
            'Urgent filing and deadline control',
            `${profile.countyContext} risk triage`,
          ],
        },
        {
          title: 'Evidence and Procedure Challenges',
          description:
            'Many defense gains come from scrutinizing how evidence was obtained, recorded, preserved, and presented.',
          bullets: [
            'Stop-and-search legality review',
            'Report versus video inconsistency checks',
            'Interview and testing process analysis',
            'Suppression-motion sequencing',
          ],
        },
        {
          title: 'Negotiation Backed by Trial Readiness',
          description:
            'We build every case with courtroom pressure in mind so negotiation outcomes are tied to real litigation risk.',
          bullets: [
            'Case-theory and mitigation planning',
            'Resolution-path risk modeling',
            'Plea versus trial decision support',
            `${profile.marketName} venue-specific preparation`,
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
            'We map immediate risks, condition obligations, and communication boundaries at the start of representation.',
        },
        {
          step: '02',
          title: 'Evidence Collection and Review',
          description:
            'We gather key records and test procedural reliability to identify leverage for dismissal, reduction, or trial.',
        },
        {
          step: '03',
          title: 'Motion and Negotiation Strategy',
          description:
            'We apply evidentiary pressure while building realistic resolution pathways based on facts and long-term goals.',
        },
        {
          step: '04',
          title: 'Trial or Final Resolution',
          description:
            'If negotiated outcomes are unreasonable, we advance into trial-ready litigation with clear defense theory.',
        },
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
          description: 'Confidential legal review for urgent criminal matters.',
          ctaName: `${slugPrefix}_related_contact`,
        },
      ],
      faqTitle: `${profile.marketName} Criminal Defense FAQ`,
      faqSubtitle: `Common criminal-defense questions from ${profile.marketName} clients.`,
      faqs: [
        {
          question: `How quickly should I call a lawyer after an arrest in ${profile.marketName}?`,
          answer:
            'Immediately. Early legal strategy can influence condition compliance, evidentiary posture, and negotiation leverage.',
        },
        {
          question: `Do you handle felony and misdemeanor matters in ${profile.countyContext}?`,
          answer:
            'Yes. We represent clients across misdemeanor and felony categories, including DUI, violent allegations, theft, and warrant exposure.',
        },
        {
          question: 'Can a case still be defended after I already gave a statement?',
          answer:
            'Often yes. Defense strategy depends on full context, procedural issues, and how statements were obtained and documented.',
        },
        {
          question: 'What should I bring to the first consultation?',
          answer:
            'Bring all court and release documents, citations, and any records tied to timeline, witnesses, or communications.',
        },
      ],
      practiceArea: slugPrefix,
      ctaTitle: `Need Criminal Defense in ${profile.marketName}?`,
      ctaDescription: 'Get immediate guidance on risk, deadlines, and the next best strategic move.',
      ctaLabel: 'Start Defense Review',
      ctaName: `${slugPrefix}_bottom_cta`,
    },
  })
}

function buildInjurySubpillar(profile: MarketProfile): SubpillarSpec {
  const slugPrefix = `${profile.slug}_personal_injury`

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
        `${profile.corridorContext} generate serious crash and negligence cases where early claim errors can reduce recoverable value.`,
        `Kernal & Associates represents ${profile.marketName} clients with a litigation-ready process for liability proof, damages buildout, and insurer pressure management.`,
      ],
      focusTitle: `How We Build ${profile.marketName} Injury Cases`,
      focusItems: [
        {
          title: 'Liability Proof Development',
          description:
            'We construct fault narratives from records and technical context rather than relying on insurer assumptions.',
          bullets: [
            'Scene and timeline documentation',
            'Witness and report reconciliation',
            'Third-party and commercial liability mapping',
            `${profile.marketName} route-risk context analysis`,
          ],
        },
        {
          title: 'Damages and Medical Documentation',
          description:
            'Claim value is tied to complete proof of treatment progression, economic loss, and long-term impact.',
          bullets: [
            'Medical chronology and consistency tracking',
            'Wage-loss and earning-impact records',
            'Future care and impairment planning',
            'Out-of-pocket and daily-impact evidence',
          ],
        },
        {
          title: 'Negotiation Strength and Litigation Readiness',
          description:
            'We negotiate from a trial-capable posture so insurers must value real litigation risk, not assumed settlement pressure.',
          bullets: [
            'Demand package structure',
            'Delay and undervaluation response strategy',
            'Settlement-risk benchmarking',
            `${profile.countyContext} litigation path planning`,
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
            'We secure records, set communication boundaries, and preserve proof before claim narratives lock in.',
        },
        {
          step: '02',
          title: 'Treatment and Damages Development',
          description:
            'We align medical progression and financial-loss documentation for complete claim valuation.',
        },
        {
          step: '03',
          title: 'Demand and Negotiation Phase',
          description:
            'We present a full evidence package and negotiate from a litigation-capable position.',
        },
        {
          step: '04',
          title: 'Litigation When Necessary',
          description:
            'If pre-suit outcomes remain unreasonable, we move to litigation to pursue full and fair recovery.',
        },
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
          description: 'Confidential claim review for urgent injury matters.',
          ctaName: `${slugPrefix}_related_contact`,
        },
      ],
      faqTitle: `${profile.marketName} Personal Injury FAQ`,
      faqSubtitle: `Frequent injury-claim questions from ${profile.marketName} clients.`,
      faqs: [
        {
          question: `How soon should I call a lawyer after an accident in ${profile.marketName}?`,
          answer:
            'Immediately when possible. Early legal guidance helps preserve evidence and avoid insurer communication mistakes.',
        },
        {
          question: `Can you handle disputed-fault claims in ${profile.countyContext}?`,
          answer:
            'Yes. We handle contested liability using structured evidence development and litigation-ready case framing.',
        },
        {
          question: 'What records should I keep after a serious injury event?',
          answer:
            'Keep medical records, bills, wage-loss proof, photos, repair estimates, and all insurer communications.',
        },
        {
          question: 'Do you handle catastrophic and wrongful death matters?',
          answer:
            'Yes. We represent high-severity injury and fatal-loss cases with long-horizon damages strategy.',
        },
      ],
      practiceArea: slugPrefix,
      ctaTitle: `Need Injury Representation in ${profile.marketName}?`,
      ctaDescription: 'Start with a focused legal review before insurer pressure narrows your options.',
      ctaLabel: 'Start Injury Case Review',
      ctaName: `${slugPrefix}_bottom_cta`,
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

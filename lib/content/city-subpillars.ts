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
    calendarNote: string
    firstReview: string
    hearingNote: string
  }
> = {
  'core-city': {
    calendarNote: 'busy metro dockets and short intervals between early court settings',
    firstReview: 'release terms, charging papers, available video, dispatch records, and any testing',
    hearingNote: 'urban court calendars that reward early preparation and a complete evidence review',
  },
  'regional-city': {
    calendarNote: 'county-seat scheduling, travel for witnesses, and limited time between settings',
    firstReview: 'the citation or charging papers, release terms, reports, recordings, and witness information',
    hearingNote: 'regional court calendars where motions and supporting records should be ready on time',
  },
  county: {
    calendarNote: 'district-court settings, longer travel distances, and records from different agencies',
    firstReview: 'the filed charge, release terms, agency reports, recordings, testing, and the event timeline',
    hearingNote: 'county settings where accurate dates, complete records, and witness reliability matter',
  },
}

const INJURY_TIER_CONTEXT: Record<
  MarketTier,
  {
    collisionNote: string
    recordConcern: string
    insurerNote: string
  }
> = {
  'core-city': {
    collisionNote: 'urban intersections, commercial vehicles, and more than one available insurance policy',
    recordConcern: 'treatment at several facilities or with several providers can leave gaps in the medical timeline',
    insurerNote: 'larger insurers often ask for close proof of fault, treatment, lost income, and future needs',
  },
  'regional-city': {
    collisionNote: 'regional roads shared by passenger, commercial, and agricultural traffic',
    recordConcern: 'travel for treatment and later referrals can leave the medical record looking incomplete',
    insurerNote: 'insurers may dispute a claim when treatment, work loss, or the crash timeline is not well documented',
  },
  county: {
    collisionNote: 'county roads, longer trips, and crashes that may involve several towns or jurisdictions',
    recordConcern: 'ambulance transport and treatment across county lines can split records among several providers',
    insurerNote: 'fault, medical cause, and future losses need clear records before meaningful settlement talks',
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
    criminalCourtContext: 'high-volume Oklahoma County criminal dockets with urgent bond, warrant, and charging issues',
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
        'Criminal defense help for north-metro Oklahoma County filings.',
      ),
      createHubLink(
        '/moore/personal-injury',
        'Moore Personal Injury',
        'Injury claim information for south-metro commuter and interstate crashes.',
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
        'Criminal defense help for nearby Cleveland County and south-metro cases.',
      ),
      createHubLink(
        '/oklahoma-city/personal-injury',
        'Oklahoma City Personal Injury',
        'Injury claim information for serious negligence and transport-corridor matters.',
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
        'Criminal defense help for nearby Norman and Cleveland County cases.',
      ),
      createHubLink(
        '/oklahoma-city/personal-injury',
        'Oklahoma City Personal Injury',
        'Injury claim information for serious metro negligence matters.',
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
        'Criminal defense help for Oklahoma County and overlapping metro matters.',
      ),
      createHubLink(
        '/stillwater/personal-injury',
        'Stillwater Personal Injury',
        'Injury claim information for serious losses on northbound routes.',
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
        'Injury claim information for crashes on eastbound regional routes.',
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
        'Criminal defense help for neighboring east-metro court matters.',
      ),
      createHubLink(
        '/choctaw/personal-injury',
        'Choctaw Personal Injury',
        'Injury claim information for eastern Oklahoma County routes.',
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
        'Criminal defense help for western Canadian County matters.',
      ),
      createHubLink(
        '/mustang/personal-injury',
        'Mustang Personal Injury',
        'Injury claim information for nearby west-south metro routes.',
      ),
    ],
  },
  mustang: {
    slug: 'mustang',
    marketName: 'Mustang',
    marketType: 'city',
    countyContext: 'Canadian County and west-south metro legal venues',
    criminalCourtContext: 'southwest-metro warrant and charge issues with Canadian County implications',
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
        'Injury claim information for connected south-metro commuter routes.',
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
      createHubLink('/guthrie/personal-injury', 'Guthrie Personal Injury', 'Injury claim information for the I-35 corridor south of Stillwater.'),
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
      createHubLink('/pottawatomie-county/criminal-defense', 'Pottawatomie County Criminal Defense', 'Criminal defense help for Shawnee-area county matters.'),
      createHubLink('/midwest-city/personal-injury', 'Midwest City Personal Injury', 'Injury claim information for connected east-metro I-40 crashes.'),
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
      createHubLink('/canadian-county/criminal-defense', 'Canadian County Criminal Defense', 'Criminal defense help for Canadian County filings.'),
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
      createHubLink('/grady-county/criminal-defense', 'Grady County Criminal Defense', 'Criminal defense help for Grady County court matters.'),
      createHubLink('/mustang/personal-injury', 'Mustang Personal Injury', 'Injury claim information for west-south metro and Grady commuters.'),
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
      createHubLink('/logan-county/criminal-defense', 'Logan County Criminal Defense', 'Criminal defense help for Logan County matters.'),
      createHubLink('/edmond/personal-injury', 'Edmond Personal Injury', 'Injury claim information for connected north-metro routes.'),
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
      createHubLink('/garfield-county/criminal-defense', 'Garfield County Criminal Defense', 'Criminal defense help for Garfield County charges.'),
      createHubLink('/stillwater/personal-injury', 'Stillwater Personal Injury', 'Injury claim information for nearby north-central routes.'),
    ],
  },
  lawton: {
    slug: 'lawton',
    marketName: 'Lawton',
    marketType: 'city',
    countyContext: 'Comanche County and southwest Oklahoma legal venues',
    criminalCourtContext: 'Comanche County criminal filings involving serious allegations and active warrants',
    injuryContext: 'major crash and negligence claims involving southwest corridor travel and industrial activity',
    corridorContext: 'I-44 southwest and US-62 transportation corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/comanche-county/criminal-defense', 'Comanche County Criminal Defense', 'Criminal defense help for Lawton-area filings.'),
      createHubLink('/chickasha/personal-injury', 'Chickasha Personal Injury', 'Injury claim information for connected southwest routes.'),
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
      createHubLink('/cleveland-county/criminal-defense', 'Cleveland County Criminal Defense', 'Criminal defense help for nearby southbound county matters.'),
      createHubLink('/shawnee/personal-injury', 'Shawnee Personal Injury', 'Injury claim information for related eastbound routes.'),
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
      createHubLink('/oklahoma-county/criminal-defense', 'Oklahoma County Criminal Defense', 'Criminal defense help for metro filings.'),
      createHubLink('/midwest-city/personal-injury', 'Midwest City Personal Injury', 'Injury claim information for neighboring east-metro routes.'),
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
      createHubLink('/oklahoma-county/criminal-defense', 'Oklahoma County Criminal Defense', 'Oklahoma County criminal docket and defense information.'),
      createHubLink('/yukon/personal-injury', 'Yukon Personal Injury', 'Injury claim information for connected westbound routes.'),
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
      createHubLink('/mclain-county/criminal-defense', 'McClain County Criminal Defense', 'Criminal defense help for Newcastle-area county matters.'),
      createHubLink('/moore/personal-injury', 'Moore Personal Injury', 'Injury claim information for nearby south-metro commuters.'),
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
      createHubLink('/mclain-county/criminal-defense', 'McClain County Criminal Defense', 'Criminal defense help for McClain County filings.'),
      createHubLink('/chickasha/personal-injury', 'Chickasha Personal Injury', 'Injury claim information for nearby Grady and McClain routes.'),
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
      'Commercial-vehicle and delivery records tied to Bricktown, the medical district, and airport-bound freight movement may help identify responsible parties and available insurance.',
    ],
    injuryDifferentiators: [
      'Downtown Oklahoma City interchange collisions involving I-235, I-40, and I-44 connectors are reviewed closely when drivers dispute fault.',
      'Medical district record timing and care-transition chronology are audited to prevent avoidable gaps in catastrophic-injury valuation.',
      'Commercial fleet and rideshare evidence holds are issued quickly for Bricktown, Midtown, and airport-corridor incident patterns.',
      'Oklahoma County filing and mediation issues are reviewed when a serious urban crash claim cannot be resolved with the insurer.',
    ],
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/oklahoma-city/criminal-defense', 'Oklahoma City Criminal Defense', 'Criminal defense help for Oklahoma County city matters.'),
      createHubLink('/edmond/personal-injury', 'Edmond Personal Injury', 'Injury claim information for serious north-county losses.'),
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
      createHubLink('/norman/criminal-defense', 'Norman Criminal Defense', 'Criminal defense help for Cleveland County charges.'),
      createHubLink('/moore/personal-injury', 'Moore Personal Injury', 'Injury claim information for major south-county roadway crashes.'),
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
      createHubLink('/yukon/criminal-defense', 'Yukon Criminal Defense', 'Criminal defense help for Canadian County matters.'),
      createHubLink('/el-reno/personal-injury', 'El Reno Personal Injury', 'Injury claim information for western county collisions.'),
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
      createHubLink('/guthrie/criminal-defense', 'Guthrie Criminal Defense', 'Criminal defense help for Logan County matters.'),
      createHubLink('/stillwater/personal-injury', 'Stillwater Personal Injury', 'Injury claim information for regional routes north of Oklahoma City.'),
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
      createHubLink('/stillwater/criminal-defense', 'Stillwater Criminal Defense', 'Criminal defense help for Payne County cases.'),
      createHubLink('/guthrie/personal-injury', 'Guthrie Personal Injury', 'Injury claim information for connected northbound routes.'),
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
      createHubLink('/shawnee/criminal-defense', 'Shawnee Criminal Defense', 'Criminal defense help for Pottawatomie County charges.'),
      createHubLink('/midwest-city/personal-injury', 'Midwest City Personal Injury', 'Injury claim information for connected eastbound metro routes.'),
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
      createHubLink('/chickasha/criminal-defense', 'Chickasha Criminal Defense', 'Criminal defense help for Grady County matters.'),
      createHubLink('/mustang/personal-injury', 'Mustang Personal Injury', 'Injury claim information for connected west-south routes.'),
    ],
  },
  'mclain-county': {
    slug: 'mclain-county',
    marketName: 'McClain County',
    marketType: 'county',
    countyContext: 'McClain County district and south metro county-line venues',
    criminalCourtContext: 'McClain County criminal filings with county-line venue questions',
    injuryContext: 'south-corridor collision and negligence claims across McClain commuter routes',
    corridorContext: 'I-44 south and US-77 county connector corridors',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/newcastle/criminal-defense', 'Newcastle Criminal Defense', 'Criminal defense help for McClain-area allegations.'),
      createHubLink('/moore/personal-injury', 'Moore Personal Injury', 'Injury claim information for nearby south-metro routes.'),
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
      createHubLink('/choctaw/criminal-defense', 'Choctaw Criminal Defense', 'Criminal defense help for eastern county-line matters.'),
      createHubLink('/shawnee/personal-injury', 'Shawnee Personal Injury', 'Injury claim information for eastbound county routes.'),
    ],
  },
  'comanche-county': {
    slug: 'comanche-county',
    marketName: 'Comanche County',
    marketType: 'county',
    countyContext: 'Comanche County district court and southwest Oklahoma venues',
    criminalCourtContext: 'Comanche County criminal dockets involving felony charges and active warrants',
    injuryContext: 'southwest-corridor crash and negligence claims tied to major transport routes',
    corridorContext: 'I-44 southwest and US-62 county transport routes',
    hubLink: locationsHubLink,
    nearbyLinks: [
      createHubLink('/lawton/criminal-defense', 'Lawton Criminal Defense', 'Criminal defense help for Comanche County charges.'),
      createHubLink('/chickasha/personal-injury', 'Chickasha Personal Injury', 'Injury claim information for connected southwest routes.'),
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
      createHubLink('/enid/criminal-defense', 'Enid Criminal Defense', 'Criminal defense help for Garfield County proceedings.'),
      createHubLink('/stillwater/personal-injury', 'Stillwater Personal Injury', 'Injury claim information for connected north-central routes.'),
    ],
  },
}

type CopyVariant = 0 | 1 | 2 | 3 | 4

function getCopyVariant(profile: MarketProfile): CopyVariant {
  const marketIndex = ALL_STANDARD_SUBPILLAR_MARKETS.indexOf(profile.slug)
  return (marketIndex % 5) as CopyVariant
}

function buildCriminalIntro(
  profile: MarketProfile,
  tierContext: (typeof CRIMINAL_TIER_CONTEXT)[MarketTier],
  variant: CopyVariant,
): string[] {
  const variants: Record<CopyVariant, string[]> = {
    0: [
      `If you were arrested or charged in ${profile.marketName}, start with the court papers, release terms, and every known date. Missing an early requirement can create a separate problem before the evidence is reviewed.`,
      `The local setting matters because ${profile.criminalCourtContext}. Todd Kernal first reviews ${tierContext.firstReview} and explains what must happen before the next setting.`,
      `For an incident connected to ${profile.corridorContext}, reports, recordings, testing records, and witness accounts may answer different parts of the same question. Those materials should be gathered before a plea decision is made.`,
    ],
    1: [
      `A criminal charge in ${profile.marketName} brings immediate questions about court, bond, driving privileges, work, and family. The first job is to identify the next deadline and avoid a preventable violation.`,
      `${profile.criminalCourtContext} may involve ${tierContext.calendarNote}. The defense begins with the filed allegations and the records that show what actually happened.`,
      `When the allegation arose near ${profile.corridorContext}, Todd examines the reason for the stop or contact, the event timeline, and whether the written report matches available audio or video.`,
    ],
    2: [
      `Court papers can be difficult to sort out after an arrest in ${profile.marketName}. Bring the citation, bond paperwork, release instructions, and any notice that lists a hearing or appearance date.`,
      `Cases tied to ${profile.countyContext} should be reviewed with local deadlines in mind. That includes ${tierContext.firstReview}, along with any information that contradicts the accusation.`,
      `${profile.corridorContext} may be relevant when a case began with a traffic stop, crash, or roadside investigation. Location, timing, and recorded evidence can change how the allegation is evaluated.`,
    ],
    3: [
      `Do not assume the first version of a ${profile.marketName} criminal case is the complete one. Police reports, video, lab records, and witness accounts often arrive at different times.`,
      `Because ${profile.criminalCourtContext}, Todd checks the next court setting and release requirements before turning to motions, plea options, or trial preparation.`,
      `A case involving ${profile.corridorContext} may require close review of the stop, the officer's observations, testing, and the time shown on each record. That review should begin while evidence is still available.`,
    ],
    4: [
      `After an arrest in ${profile.marketName}, protect yourself by following release terms, saving every document, and avoiding public discussion of the facts. Those simple steps preserve choices while the case is investigated.`,
      `${profile.countyContext} can involve ${tierContext.hearingNote}. Todd compares the filed charge with reports, recordings, testing, and witness information before recommending a response.`,
      `If the event occurred along ${profile.corridorContext}, the location and timeline may matter to search, testing, or identification issues. A careful record review is more useful than guessing from the charge alone.`,
    ],
  }

  return variants[variant]
}

function buildCriminalProcessCopy(
  profile: MarketProfile,
  tierContext: (typeof CRIMINAL_TIER_CONTEXT)[MarketTier],
  variant: CopyVariant,
): [string, string, string, string] {
  const firstStep = [
    `We read the papers from ${profile.countyContext}, confirm the next date, and review release terms before discussing the facts in detail.`,
    `Todd begins by confirming the charge, court date, and release requirements for the ${profile.marketName} matter, then identifies records that need prompt attention.`,
    `The first review covers deadlines, contact restrictions, driving issues, and other instructions connected to ${profile.criminalCourtContext}.`,
    `We organize the citation or charging papers, bond information, and upcoming settings so the client knows what is required now.`,
    `For a ${profile.marketName} case, intake starts with the next court obligation and any condition that could cause a new violation if misunderstood.`,
  ][variant]
  const secondStep = [
    `We request reports, recordings, testing, and witness information connected to ${profile.corridorContext}, then compare each source to the event timeline.`,
    `Evidence review tests whether reports, video, dispatch records, statements, and test results support the allegation filed in ${profile.countyContext}.`,
    `Todd reviews ${tierContext.firstReview}, paying particular attention to contradictions and missing records from the incident.`,
    `The file is checked for search, interview, identification, testing, and record-preservation issues tied to ${profile.marketName}.`,
    `Records from ${profile.corridorContext} are gathered and compared before conclusions are drawn from a single report or statement.`,
  ][variant]
  const thirdStep = [
    `Once the evidence is understood, Todd explains available motions, plea terms, and the consequences of each choice in ${profile.countyContext}.`,
    `The client receives a plain comparison of dismissal arguments, charge changes, plea choices, and trial issues based on the actual record.`,
    `Any motion or proposal is evaluated against the evidence, the client's priorities, and ${tierContext.hearingNote}.`,
    `Todd discusses what can be challenged, what can be documented about the client, and what any proposed resolution would mean later.`,
    `After review, the next step may be a motion, a negotiated result, or continued trial preparation for the ${profile.marketName} charge.`,
  ][variant]
  const fourthStep = [
    `If the matter does not resolve fairly, the defense is prepared for hearing or trial with a clear account of the evidence and witnesses.`,
    `A final decision is made with the client after the likely benefits, limits, and lasting effects of each option are explained.`,
    `Todd prepares for the next contested hearing or trial when the evidence and available proposal do not support an acceptable result.`,
    `The case proceeds toward a final agreement, dismissal, hearing, or trial with the client informed at each decision point.`,
    `Resolution means more than closing the file; the client should understand the court result, remaining obligations, and possible record consequences.`,
  ][variant]

  return [firstStep, secondStep, thirdStep, fourthStep]
}

function buildInjuryIntro(
  profile: MarketProfile,
  tierContext: (typeof INJURY_TIER_CONTEXT)[MarketTier],
  variant: CopyVariant,
): string[] {
  const variants: Record<CopyVariant, string[]> = {
    0: [
      `After a serious crash or injury in ${profile.marketName}, medical care comes first. As soon as practical, save photographs, reports, witness information, bills, and every message from an insurer.`,
      `${profile.corridorContext} can involve ${tierContext.collisionNote}. Todd Kernal reviews how the event happened, which insurance may apply, and what records are still missing.`,
      `Claims connected to ${profile.countyContext} should reflect the full course of treatment and the ways the injury affects work and daily life, not just the first medical visit.`,
    ],
    1: [
      `An insurer may call soon after a ${profile.marketName} collision, before the injuries or available coverage are fully understood. You can ask for time and avoid guessing about facts or symptoms.`,
      `For losses involving ${profile.injuryContext}, the useful record includes scene evidence, medical care, wage loss, and the policy information for every potentially responsible party.`,
      `${profile.corridorContext} matters because road, vehicle, and travel details can help explain fault. ${tierContext.recordConcern}, so records should be collected from every provider.`,
    ],
    2: [
      `A personal injury claim in ${profile.marketName} is built from ordinary records: photographs, reports, medical notes, bills, work-loss documents, and insurer correspondence. Keeping them together makes the facts easier to prove.`,
      `${profile.injuryContext} may involve more than one driver, company, property owner, or insurance policy. Todd checks those possibilities before a demand is prepared.`,
      `When treatment occurs in or around ${profile.countyContext}, ${tierContext.recordConcern}. A complete timeline helps show both the injury and its day-to-day effect.`,
    ],
    3: [
      `Do not measure a ${profile.marketName} injury claim by the first repair estimate or medical bill. The lasting effect may not be clear until treatment, work restrictions, and recovery are documented.`,
      `Events along ${profile.corridorContext} can raise questions about speed, visibility, commercial traffic, or more than one source of insurance. Available reports and scene evidence should be preserved early.`,
      `${profile.countyContext} claims are reviewed for fault, medical cause, insurance coverage, and financial loss. ${tierContext.insurerNote}.`,
    ],
    4: [
      `If you were hurt in ${profile.marketName}, follow the treatment plan and keep a simple file for bills, photographs, missed work, and insurer messages. Those records make later questions easier to answer.`,
      `${profile.injuryContext} can produce disputes about who was responsible or whether treatment relates to the event. Todd compares the reports, medical timeline, and available coverage.`,
      `A loss connected to ${profile.corridorContext} may also involve ${tierContext.collisionNote}. The claim should account for every responsible party and every documented effect of the injury.`,
    ],
  }

  return variants[variant]
}

function buildInjuryProcessCopy(
  profile: MarketProfile,
  tierContext: (typeof INJURY_TIER_CONTEXT)[MarketTier],
  variant: CopyVariant,
): [string, string, string, string] {
  const firstStep = [
    `We collect the report, photographs, witness details, insurance information, and other records tied to ${profile.corridorContext}.`,
    `Todd begins with how the ${profile.marketName} event happened, what evidence still exists, and which people or companies may be responsible.`,
    `The initial review covers scene proof, available policies, medical care, and urgent communications connected to ${profile.injuryContext}.`,
    `We identify missing evidence from the ${profile.marketName} incident and ask that important records be preserved before they disappear.`,
    `The claim begins with a fact timeline and a list of reports, photographs, witnesses, vehicles, property, and insurance that may matter.`,
  ][variant]
  const secondStep = [
    `Medical records, bills, work restrictions, and out-of-pocket costs are organized across ${profile.countyContext} as treatment continues.`,
    `We follow treatment and collect records that show diagnosis, progress, limitations, missed work, and expected future care.`,
    `${tierContext.recordConcern}, so each provider's records and charges are placed into one clear timeline.`,
    `Todd tracks treatment, expenses, lost income, and daily limitations instead of relying on a single bill or appointment.`,
    `Records from every treating provider are compared for dates, symptoms, restrictions, and recommendations related to the injury.`,
  ][variant]
  const thirdStep = [
    `When the medical picture is sufficiently clear, the insurer receives supporting records for fault, treatment, income loss, and other damages.`,
    `A demand is prepared from the reports, medical timeline, expenses, work loss, and the documented effect on the client's life.`,
    `Todd answers fault or medical-cause disputes with the records from ${profile.injuryContext}, rather than unsupported estimates.`,
    `${tierContext.insurerNote}; the written claim should make each part easy to verify.`,
    `Settlement discussions begin with the available proof and a clear explanation of unresolved treatment, coverage, or future-loss issues.`,
  ][variant]
  const fourthStep = [
    `If the insurer will not offer a fair result, Todd discusses filing suit and what additional proof will be needed in ${profile.countyContext}.`,
    `The client decides whether to settle or proceed after fees, costs, liens, delay, and the likely range of outcomes are explained.`,
    `When negotiation does not fairly account for the evidence, the claim can move into litigation and formal discovery.`,
    `A lawsuit may be filed when responsibility, medical cause, or damages remain disputed despite a complete supporting record.`,
    `Before any final decision, Todd explains the offer, known liens and costs, remaining uncertainty, and the option of litigation.`,
  ][variant]

  return [firstStep, secondStep, thirdStep, fourthStep]
}

function buildCriminalSubpillar(profile: MarketProfile): SubpillarSpec {
  const slugPrefix = `${profile.slug}_criminal_defense`
  const tierContext = CRIMINAL_TIER_CONTEXT[getMarketTier(profile)]
  const variant = getCopyVariant(profile)
  const processCopy = buildCriminalProcessCopy(profile, tierContext, variant)

  return createSubpillarSpec({
    metadata: {
      title: `${profile.marketName} Criminal Lawyer`,
      description: `Criminal defense lawyer serving ${profile.marketName} for DUI, felony, warrant, and probation matters.`,
      alternates: { canonical: `/${profile.slug}/criminal-defense` },
      openGraph: {
        title: `${profile.marketName} Criminal Defense Lawyer | Kernal & Associates`,
        description: `Criminal defense help for charges connected to ${profile.countyContext}.`,
        url: `https://kernallaw.com/${profile.slug}/criminal-defense`,
      },
    },
    pageProps: {
      heroTitle: `${profile.marketName} Criminal Defense Lawyer`,
      heroSubtitle: `Defense counsel for cases connected to ${profile.countyContext}.`,
      heroVariant: 'criminal',
      introTitle: `What to do after a criminal charge in ${profile.marketName}`,
      introParagraphs: buildCriminalIntro(profile, tierContext, variant),
      focusTitle: `What Todd Reviews in a ${profile.marketName} Criminal Case`,
      focusItems: [
        {
          title: 'Court Dates and Release Terms',
          description: `${profile.criminalCourtContext} can move quickly. Todd confirms the next setting, explains release requirements, and identifies any immediate filing or driving issue.`,
          bullets: [
            `Court and bond papers from ${profile.countyContext}`,
            'No-contact, testing, travel, and reporting requirements',
            `Upcoming settings for the ${profile.marketName} charge`,
            'Driver-license notices or separate administrative dates',
            `Calendar concerns such as ${tierContext.calendarNote}`,
            `Related court information from ${profile.nearbyLinks[0].title}`,
          ],
        },
        {
          title: 'Reports, Recordings, and Testing',
          description: `For an event around ${profile.corridorContext}, the written report should be checked against video, dispatch records, test results, and witness accounts.`,
          bullets: [
            `Reason for the stop or police contact near ${profile.corridorContext}`,
            'Body-camera, dash-camera, dispatch, and booking records',
            'Search, interview, identification, and testing procedures',
            `Timeline details for the ${profile.marketName} incident`,
            'Differences between reports, recordings, and statements',
            'Missing evidence and record-preservation questions',
          ],
        },
        {
          title: 'Motions, Plea Choices, and Trial',
          description: `Once the records are reviewed, Todd compares available motions, proposed plea terms, and trial issues with the client's priorities and lasting consequences.`,
          bullets: [
            'Defenses supported by the known facts and law',
            'Suppression or other motions supported by the record',
            'Possible effects on employment, licensing, driving, and record history',
            `Hearing preparation suited to ${profile.countyContext}`,
            'Written comparison of important plea terms and trial issues',
            `Planning for ${tierContext.hearingNote}`,
          ],
        },
      ],
      processTitle: `How a ${profile.marketName} Defense Moves Forward`,
      processSubtitle: 'Four practical stages, from the first court papers through a final result.',
      processSteps: [
        { step: '01', title: 'Deadlines and Release Terms', description: processCopy[0] },
        { step: '02', title: 'Records and Evidence', description: processCopy[1] },
        { step: '03', title: 'Motions and Available Options', description: processCopy[2] },
        { step: '04', title: 'Hearing, Trial, or Agreement', description: processCopy[3] },
      ],
      localContextTitle: `${profile.marketName} Court and Evidence Details`,
      localContextSubtitle: 'The local court setting and incident location can affect which records deserve attention first.',
      localContextNarrative: [
        `${profile.criminalCourtContext} means the first review should cover the filed charge, the next setting, and every release requirement. ${tierContext.calendarNote} may affect how soon records or motions need attention.`,
        `When the allegation involves ${profile.corridorContext}, location and timing can matter. Citations, dispatch information, video, testing records, and witness accounts should be compared rather than read in isolation.`,
        `${profile.countyContext} may also involve travel, scheduling, or records from more than one agency. Todd organizes those materials so the client can make decisions from the full file.`,
      ],
      localContextPoints: [
        `The court setting is tied to ${profile.criminalCourtContext}.`,
        `The first evidence review includes ${tierContext.firstReview}.`,
        `Stops and roadside investigations are examined in light of ${profile.corridorContext}.`,
        'Release terms and court dates are confirmed from the actual papers.',
        `Nearby court information is available through ${profile.nearbyLinks[0].title}.`,
        'Reports are compared with recordings, testing, and witness information.',
        'Any proposed result is reviewed for immediate duties and longer-term consequences.',
      ],
      relatedTitle: `Related ${profile.marketName} Criminal Defense Pages`,
      relatedSubtitle: 'Read about the local court area, common charges, and the steps after an arrest.',
      relatedLinks: [
        { href: profile.hubLink.href, title: profile.hubLink.title, description: profile.hubLink.description, ctaName: `${slugPrefix}_related_hub` },
        { href: '/resources/what-to-do-after-arrest-oklahoma', title: 'Post-Arrest Guide', description: 'A first-48-hours checklist for court papers, release terms, and communications.', ctaName: `${slugPrefix}_related_after_arrest_guide` },
        { href: '/criminal-defense/dui-dwi', title: 'DUI / DWI Defense', description: 'Court and driver-license issues that can follow a DUI arrest.', ctaName: `${slugPrefix}_related_dui` },
        { href: '/resources/oklahoma-felony-case-timeline', title: 'Felony Case Timeline Guide', description: 'A stage-by-stage look at an Oklahoma felony case from filing through trial.', ctaName: `${slugPrefix}_related_felony_timeline_guide` },
        { href: profile.nearbyLinks[0].href, title: profile.nearbyLinks[0].title, description: profile.nearbyLinks[0].description, ctaName: `${slugPrefix}_related_nearby_a` },
        { href: '/contact', title: 'Request a Defense Consultation', description: `Talk with Todd Kernal about a ${profile.marketName} criminal charge and the next known deadline.`, ctaName: `${slugPrefix}_related_contact` },
      ],
      faqTitle: `${profile.marketName} Criminal Defense FAQ`,
      faqSubtitle: `Practical questions about criminal cases connected to ${profile.marketName}.`,
      faqs: [
        { question: `When should I call a lawyer after an arrest in ${profile.marketName}?`, answer: 'As soon as practical, especially before a court date, police interview, recorded call, or decision about a proposed plea.' },
        { question: `Do you handle felony and misdemeanor matters connected to ${profile.countyContext}?`, answer: 'Yes. The firm handles misdemeanor and felony charges, including DUI, warrants, probation allegations, theft, drug charges, and violent-crime allegations.' },
        { question: 'Can a case still be defended after I gave a statement?', answer: 'Often, yes. Todd reviews how the statement was obtained, what was actually said, and how it compares with the remaining evidence.' },
        { question: 'What should I bring to the first consultation?', answer: `Bring court and release papers, citations, hearing notices, a short timeline, witness details, and any messages or records connected to the ${profile.marketName} matter.` },
      ],
      practiceArea: slugPrefix,
      ctaTitle: `Talk With a Criminal Defense Lawyer About a ${profile.marketName} Case`,
      ctaDescription: `Bring the court papers and known deadlines for a direct review of the next steps in ${profile.countyContext}.`,
      ctaLabel: 'Request a Defense Consultation',
      ctaName: `${slugPrefix}_bottom_cta`,
      actionChecklist: [
        `Confirm every court date and release requirement connected to ${profile.countyContext}.`,
        `Save citations, reports, photographs, video, and witness information from ${profile.corridorContext}.`,
        'Do not discuss the facts on social media or in messages that others may share.',
        `Have the papers and evidence reviewed before choosing a plea or giving another statement in the ${profile.marketName} case.`,
      ],
    },
  })
}

function buildInjurySubpillar(profile: MarketProfile): SubpillarSpec {
  const slugPrefix = `${profile.slug}_personal_injury`
  const tierContext = INJURY_TIER_CONTEXT[getMarketTier(profile)]
  const variant = getCopyVariant(profile)
  const processCopy = buildInjuryProcessCopy(profile, tierContext, variant)

  return createSubpillarSpec({
    metadata: {
      title: `${profile.marketName} Injury Lawyer`,
      description: `Personal injury lawyer serving ${profile.marketName} for car crashes, truck crashes, serious injuries, and wrongful death claims.`,
      alternates: { canonical: `/${profile.slug}/personal-injury` },
      openGraph: {
        title: `${profile.marketName} Personal Injury Lawyer | Kernal & Associates`,
        description: `Personal injury help for crashes and other negligence claims connected to ${profile.marketName}.`,
        url: `https://kernallaw.com/${profile.slug}/personal-injury`,
      },
    },
    pageProps: {
      heroTitle: `${profile.marketName} Personal Injury Lawyer`,
      heroSubtitle: `Legal help for ${profile.injuryContext}.`,
      heroVariant: 'injury',
      introTitle: `What to save after an injury in ${profile.marketName}`,
      introParagraphs: buildInjuryIntro(profile, tierContext, variant),
      focusTitle: `What Todd Reviews in a ${profile.marketName} Injury Claim`,
      focusItems: [
        {
          title: 'How the Injury Happened',
          description: `For an event involving ${profile.corridorContext}, Todd looks for reports, photographs, video, vehicle information, witnesses, and other proof of responsibility.`,
          bullets: [
            `Scene and timeline records from ${profile.corridorContext}`,
            'Police, incident, employer, or property records that may apply',
            'Photographs, video, vehicle data, and physical evidence',
            `Witness information connected to the ${profile.marketName} event`,
            'Possible responsibility of a driver, company, or property owner',
            `Related roadway information from ${profile.nearbyLinks[1].title}`,
          ],
        },
        {
          title: 'Treatment, Work Loss, and Daily Life',
          description: `Because ${tierContext.recordConcern}, the claim file should include every provider, bill, restriction, missed work period, and documented change in daily activity.`,
          bullets: [
            `Medical care received for injuries from ${profile.injuryContext}`,
            'Bills, health-insurance statements, and out-of-pocket costs',
            'Work restrictions, missed time, and income records',
            'Symptoms, limitations, and changes in ordinary activities',
            `Provider records from ${profile.countyContext}`,
            'Expected follow-up care and any lasting impairment',
          ],
        },
        {
          title: 'Insurance and the Available Recovery',
          description: `${tierContext.insurerNote}. Todd reviews the known policies, responsibility disputes, medical proof, liens, and costs before discussing settlement.`,
          bullets: [
            'Liability, uninsured motorist, and other available coverage',
            'Commercial or employer coverage when a company is involved',
            'Insurer questions about fault or medical cause',
            `Documented losses arising from ${profile.injuryContext}`,
            'Medical liens, case costs, and likely net recovery',
            `Filing considerations connected to ${profile.countyContext}`,
          ],
        },
      ],
      processTitle: `How a ${profile.marketName} Injury Claim Moves Forward`,
      processSubtitle: 'Four practical stages, from preserving evidence through settlement or litigation.',
      processSteps: [
        { step: '01', title: 'Preserve the Facts', description: processCopy[0] },
        { step: '02', title: 'Document Treatment and Losses', description: processCopy[1] },
        { step: '03', title: 'Present the Claim', description: processCopy[2] },
        { step: '04', title: 'Settle or File Suit', description: processCopy[3] },
      ],
      localContextTitle: `${profile.marketName} Roadway and Medical Records`,
      localContextSubtitle: 'The incident location and treatment history help show what happened and what the injury changed.',
      localContextNarrative: [
        `${profile.injuryContext} can raise separate questions about fault, medical cause, insurance, and damages. The claim file should answer each question with records rather than assumptions.`,
        `For a crash or injury along ${profile.corridorContext}, scene photographs, reports, vehicle information, and witness accounts may be especially useful. Those materials can become harder to obtain as time passes.`,
        `Treatment connected to ${profile.countyContext} should be placed in one timeline. ${tierContext.recordConcern}, and an incomplete file may not show the full course of recovery.`,
        ...(profile.injuryNarrativeAddendum ?? []),
      ],
      localContextPoints: [
        `The local injury setting includes ${profile.injuryContext}.`,
        `The roadway review centers on ${profile.corridorContext}.`,
        `The medical file accounts for the fact that ${tierContext.recordConcern}.`,
        'Available insurance is checked before settlement discussions begin.',
        `Nearby roadway information is available through ${profile.nearbyLinks[1].title}.`,
        'Bills, lost income, daily limitations, and future care are documented separately.',
        'Any final offer is reviewed with known liens, expenses, fees, and remaining uncertainty.',
        ...(profile.injuryDifferentiators ?? []),
      ],
      relatedTitle: `Related ${profile.marketName} Injury Pages`,
      relatedSubtitle: 'Read about nearby service areas, crash claims, and steps to take after an injury.',
      relatedLinks: [
        { href: profile.hubLink.href, title: profile.hubLink.title, description: profile.hubLink.description, ctaName: `${slugPrefix}_related_hub` },
        { href: '/resources/what-to-do-after-car-accident-oklahoma', title: 'Post-Accident Guide', description: 'A checklist for medical care, scene evidence, insurance calls, and record keeping.', ctaName: `${slugPrefix}_related_post_accident_guide` },
        { href: '/personal-injury/car-accidents', title: 'Car Accident Claims', description: 'How fault, treatment, insurance, and damages are documented after a serious crash.', ctaName: `${slugPrefix}_related_car` },
        { href: '/resources/oklahoma-uninsured-motorist-claim-guide', title: 'Uninsured Motorist Claim Guide', description: 'How uninsured and underinsured motorist coverage may apply when other insurance is limited.', ctaName: `${slugPrefix}_related_um_uim_guide` },
        { href: profile.nearbyLinks[1].href, title: profile.nearbyLinks[1].title, description: profile.nearbyLinks[1].description, ctaName: `${slugPrefix}_related_nearby_b` },
        { href: '/contact', title: 'Request an Injury Consultation', description: `Talk with Todd Kernal about records, insurance, and next steps after a ${profile.marketName} injury.`, ctaName: `${slugPrefix}_related_contact` },
      ],
      faqTitle: `${profile.marketName} Personal Injury FAQ`,
      faqSubtitle: `Practical questions about injury claims connected to ${profile.marketName}.`,
      faqs: [
        { question: `When should I call a lawyer after an accident in ${profile.marketName}?`, answer: 'As soon as practical if injuries are serious, fault is disputed, evidence may disappear, or an insurer is asking for a recorded statement.' },
        { question: `Can the firm handle a disputed-fault claim connected to ${profile.countyContext}?`, answer: 'Yes. Todd can compare reports, photographs, video, witness accounts, vehicle information, and medical records when fault or medical cause is disputed.' },
        { question: 'What records should I keep after a serious injury?', answer: 'Keep reports, photographs, medical records, bills, health-insurance statements, wage-loss proof, repair estimates, receipts, and every insurer message or letter.' },
        { question: 'Do you handle catastrophic injury and wrongful death matters?', answer: 'Yes. The firm handles serious injury and fatal-loss claims that require careful documentation of medical, financial, and family losses.' },
      ],
      practiceArea: slugPrefix,
      ctaTitle: `Talk With a Personal Injury Lawyer About a ${profile.marketName} Claim`,
      ctaDescription: `Bring the available records for a direct review of fault, insurance, treatment, and next steps in ${profile.countyContext}.`,
      ctaLabel: 'Request an Injury Consultation',
      ctaName: `${slugPrefix}_bottom_cta`,
      actionChecklist: [
        `Save reports, photographs, video, and witness information from ${profile.corridorContext}.`,
        'Follow medical instructions and keep records from every treating provider.',
        'Keep insurer communications, bills, receipts, and documents showing missed work.',
        `Have the available coverage and filing options reviewed before signing a release for the ${profile.marketName} claim.`,
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

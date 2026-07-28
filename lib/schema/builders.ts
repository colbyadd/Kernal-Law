import { CONTACT_EMAIL, PRIMARY_PHONE_E164 } from '@/lib/contact'
import {
  ALL_STANDARD_SUBPILLAR_MARKETS,
  getMarketDisplayName,
  getMarketType,
  type MarketSlug,
} from '@/lib/content/city-subpillars'

interface FaqItem {
  question: string
  answer: string
}

interface ServicePageSchemaInput {
  pathname: string
  baseUrl: string
  description: string
  variant: 'criminal' | 'injury'
}

const PAGE_NAMES: Record<string, string> = {
  '/': 'Kernal & Associates | Oklahoma Criminal Defense Lawyer',
  '/attorney': 'About Todd Kernal | Attorney Profile',
  '/criminal-defense': 'Oklahoma Criminal Defense Attorney | Kernal & Associates',
  '/criminal-defense/dui-dwi': 'Oklahoma DUI / DWI Defense Lawyer',
  '/criminal-defense/drug-charges': 'Oklahoma Drug Charges Defense Lawyer',
  '/criminal-defense/domestic-violence': 'Oklahoma Domestic Violence Defense Lawyer',
  '/criminal-defense/assault-battery': 'Oklahoma Assault and Battery Defense Lawyer',
  '/criminal-defense/sex-crimes': 'Oklahoma Sex Crimes Defense Lawyer',
  '/criminal-defense/theft-fraud': 'Oklahoma Theft and Fraud Defense Lawyer',
  '/criminal-defense/expungement': 'Oklahoma Expungement Lawyer',
  '/criminal-defense/probation-violation': 'Oklahoma Probation Violation Defense Lawyer',
  '/criminal-defense/warrants': 'Oklahoma Warrants Defense Lawyer',
  '/personal-injury': 'Oklahoma Personal Injury Attorney | Kernal & Associates',
  '/personal-injury/car-accidents': 'Oklahoma Car Accident Lawyer',
  '/personal-injury/truck-accidents': 'Oklahoma Truck Accident Lawyer',
  '/personal-injury/oil-field-injuries': 'Oklahoma Oil Field Injury Lawyer',
  '/personal-injury/wrongful-death': 'Oklahoma Wrongful Death Lawyer',
  '/personal-injury/motorcycle-accidents': 'Oklahoma Motorcycle Accident Lawyer',
  '/personal-injury/catastrophic-injury': 'Oklahoma Catastrophic Injury Lawyer',
  '/personal-injury/slip-and-fall': 'Oklahoma Slip and Fall Lawyer',
  '/personal-injury/uninsured-motorist': 'Oklahoma Uninsured Motorist Lawyer',
  '/locations': 'Locations We Serve | Kernal & Associates',
  '/moore': 'Moore Criminal Defense and Personal Injury Attorney',
  '/edmond': 'Edmond Criminal Defense and Personal Injury Attorney',
  '/midwest-city': 'Midwest City Criminal Defense and Personal Injury Attorney',
  '/del-city': 'Del City Criminal Defense and Personal Injury Attorney',
  '/yukon': 'Yukon Criminal Defense and Personal Injury Attorney',
  '/mustang': 'Mustang Criminal Defense and Personal Injury Attorney',
  '/resources': 'Legal Resources | Kernal & Associates',
  '/resources/what-to-do-after-arrest-oklahoma': 'What to Do After an Arrest in Oklahoma',
  '/resources/oklahoma-dui-process': 'Oklahoma DUI Process Guide',
  '/resources/what-to-do-after-car-accident-oklahoma': 'What to Do After a Car Accident in Oklahoma',
  '/resources/oklahoma-felony-case-timeline': 'Oklahoma Felony Case Timeline Guide',
  '/resources/oklahoma-bond-and-release-conditions': 'Oklahoma Bond and Release Conditions Guide',
  '/resources/oklahoma-uninsured-motorist-claim-guide': 'Oklahoma Uninsured Motorist Claim Guide',
  '/resources/oklahoma-truck-accident-evidence-guide': 'Oklahoma Truck Accident Evidence Guide',
  '/case-results': 'Case Results | Kernal & Associates',
  '/client-reviews': 'Client Reviews | Kernal & Associates',
  '/fees': 'Fees and Billing | Kernal & Associates',
  '/practice': 'Practice Areas | Criminal Defense & Personal Injury',
  '/practice/criminal-defense': 'Criminal Defense | Kernal & Associates',
  '/practice/personal-injury': 'Personal Injury | Kernal & Associates',
  '/oklahoma-city': 'Oklahoma City Criminal Defense & Personal Injury Attorney',
  '/oklahoma-city/criminal-defense': 'Oklahoma City Criminal Defense Lawyer',
  '/oklahoma-city/personal-injury': 'Oklahoma City Personal Injury Lawyer',
  '/norman': 'Norman Criminal Defense & Personal Injury Attorney',
  '/norman/criminal-defense': 'Norman Criminal Defense Lawyer',
  '/norman/personal-injury': 'Norman Personal Injury Lawyer',
  '/moore/criminal-defense': 'Moore Criminal Defense Lawyer',
  '/moore/personal-injury': 'Moore Personal Injury Lawyer',
  '/edmond/criminal-defense': 'Edmond Criminal Defense Lawyer',
  '/edmond/personal-injury': 'Edmond Personal Injury Lawyer',
  '/midwest-city/criminal-defense': 'Midwest City Criminal Defense Lawyer',
  '/midwest-city/personal-injury': 'Midwest City Personal Injury Lawyer',
  '/del-city/criminal-defense': 'Del City Criminal Defense Lawyer',
  '/del-city/personal-injury': 'Del City Personal Injury Lawyer',
  '/yukon/criminal-defense': 'Yukon Criminal Defense Lawyer',
  '/yukon/personal-injury': 'Yukon Personal Injury Lawyer',
  '/mustang/criminal-defense': 'Mustang Criminal Defense Lawyer',
  '/mustang/personal-injury': 'Mustang Personal Injury Lawyer',
  '/contact': 'Contact Us | Free Consultation',
  '/success': 'Message Received | Kernal & Associates',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
}

const BREADCRUMB_NAMES: Record<string, string> = {
  attorney: 'Attorney',
  'criminal-defense': 'Criminal Defense',
  'dui-dwi': 'DUI / DWI',
  'drug-charges': 'Drug Charges',
  'domestic-violence': 'Domestic Violence',
  'assault-battery': 'Assault and Battery',
  'sex-crimes': 'Sex Crimes',
  'theft-fraud': 'Theft and Fraud',
  expungement: 'Expungement',
  'probation-violation': 'Probation Violation',
  warrants: 'Warrants',
  'personal-injury': 'Personal Injury',
  'car-accidents': 'Car Accidents',
  'truck-accidents': 'Truck Accidents',
  'oil-field-injuries': 'Oil Field Injuries',
  'wrongful-death': 'Wrongful Death',
  'motorcycle-accidents': 'Motorcycle Accidents',
  'catastrophic-injury': 'Catastrophic Injury',
  'slip-and-fall': 'Slip and Fall',
  'uninsured-motorist': 'Uninsured Motorist',
  locations: 'Locations',
  moore: 'Moore',
  edmond: 'Edmond',
  'midwest-city': 'Midwest City',
  'del-city': 'Del City',
  yukon: 'Yukon',
  mustang: 'Mustang',
  resources: 'Legal Resources',
  'what-to-do-after-arrest-oklahoma': 'After Arrest Guide',
  'oklahoma-dui-process': 'DUI Process Guide',
  'what-to-do-after-car-accident-oklahoma': 'After Car Accident Guide',
  'oklahoma-felony-case-timeline': 'Felony Timeline Guide',
  'oklahoma-bond-and-release-conditions': 'Bond Conditions Guide',
  'oklahoma-uninsured-motorist-claim-guide': 'UM/UIM Claim Guide',
  'oklahoma-truck-accident-evidence-guide': 'Truck Evidence Guide',
  'case-results': 'Case Results',
  'client-reviews': 'Client Reviews',
  fees: 'Fees',
  practice: 'Practice Areas',
  'oklahoma-city': 'Oklahoma City',
  norman: 'Norman',
  contact: 'Contact',
  success: 'Message Received',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
}

function humanizeSlug(value: string) {
  return value
    .split('-')
    .map((word) => {
      const upperWord = word.toUpperCase()
      if (upperWord === 'OKC' || upperWord === 'DUI' || upperWord === 'DWI' || upperWord === 'UM' || upperWord === 'UIM') {
        return upperWord
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

function resolveMarketName(slug: string) {
  if ((ALL_STANDARD_SUBPILLAR_MARKETS as readonly string[]).includes(slug)) {
    return getMarketDisplayName(slug as MarketSlug)
  }

  return humanizeSlug(slug)
}

export function getPageName(pathname: string): string {
  if (PAGE_NAMES[pathname]) {
    return PAGE_NAMES[pathname]
  }

  const marketOverviewMatch = pathname.match(/^\/([^/]+)$/)
  if (marketOverviewMatch) {
    const marketSlug = marketOverviewMatch[1]
    if ((ALL_STANDARD_SUBPILLAR_MARKETS as readonly string[]).includes(marketSlug)) {
      const marketName = resolveMarketName(marketSlug)
      return `${marketName} Criminal Defense and Personal Injury Attorney`
    }
  }

  const marketSubpillarMatch = pathname.match(/^\/([^/]+)\/(criminal-defense|personal-injury)$/)
  if (marketSubpillarMatch) {
    const marketName = resolveMarketName(marketSubpillarMatch[1])
    if (marketSubpillarMatch[2] === 'criminal-defense') {
      return `${marketName} Criminal Defense Lawyer`
    }
    return `${marketName} Personal Injury Lawyer`
  }

  return 'Kernal & Associates'
}

const OKLAHOMA_AREA = {
  '@type': 'State',
  name: 'Oklahoma',
} as const

export function getToddKernalPersonId(baseUrl: string) {
  return `${baseUrl}/attorney/#person`
}

export function buildToddKernalPersonSchema(baseUrl: string) {
  return {
    '@type': 'Person',
    '@id': getToddKernalPersonId(baseUrl),
    name: 'Todd Kernal',
    givenName: 'Todd',
    familyName: 'Kernal',
    jobTitle: 'Criminal Defense Attorney',
    description:
      'Oklahoma criminal defense attorney who also handles selected personal injury matters.',
    image: `${baseUrl}/images/todd-kernal-motorcycle.webp`,
    url: `${baseUrl}/attorney`,
    telephone: PRIMARY_PHONE_E164,
    email: CONTACT_EMAIL,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Oklahoma College of Law',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Oklahoma Bar Association',
    },
    worksFor: { '@id': `${baseUrl}/#organization` },
    knowsAbout: [
      'Criminal Defense',
      'DUI Defense',
      'Drug Charges',
      'Personal Injury',
      'Oklahoma Criminal Law',
      'Trial Advocacy',
    ],
  }
}

const SERVICE_TYPE_OVERRIDES: Record<string, string> = {
  'criminal-defense': 'Criminal Defense',
  'personal-injury': 'Personal Injury',
  'dui-dwi': 'DUI / DWI Defense',
  'drug-charges': 'Drug Charges Defense',
  'domestic-violence': 'Domestic Violence Defense',
  'assault-battery': 'Assault and Battery Defense',
  'sex-crimes': 'Sex Crimes Defense',
  'theft-fraud': 'Theft and Fraud Defense',
  expungement: 'Expungement Services',
  'probation-violation': 'Probation Violation Defense',
  warrants: 'Warrants Defense',
  'car-accidents': 'Car Accident Claims',
  'truck-accidents': 'Truck Accident Litigation',
  'oil-field-injuries': 'Oil Field Injury Claims',
  'wrongful-death': 'Wrongful Death Claims',
  'motorcycle-accidents': 'Motorcycle Accident Claims',
  'catastrophic-injury': 'Catastrophic Injury Claims',
  'slip-and-fall': 'Slip and Fall Claims',
  'uninsured-motorist': 'Uninsured Motorist Claims',
}

const SERVICE_CATALOG_BY_VARIANT = {
  criminal: [
    { href: '/criminal-defense/dui-dwi', name: 'DUI / DWI Defense' },
    { href: '/criminal-defense/drug-charges', name: 'Drug Charges Defense' },
    { href: '/criminal-defense/domestic-violence', name: 'Domestic Violence Defense' },
    { href: '/criminal-defense/sex-crimes', name: 'Sex Crimes Defense' },
    { href: '/criminal-defense/warrants', name: 'Warrants Defense' },
    { href: '/criminal-defense/expungement', name: 'Expungement Services' },
  ],
  injury: [
    { href: '/personal-injury/car-accidents', name: 'Car Accident Claims' },
    { href: '/personal-injury/truck-accidents', name: 'Truck Accident Litigation' },
    { href: '/personal-injury/oil-field-injuries', name: 'Oil Field Injury Claims' },
    { href: '/personal-injury/wrongful-death', name: 'Wrongful Death Claims' },
    { href: '/personal-injury/catastrophic-injury', name: 'Catastrophic Injury Claims' },
    { href: '/personal-injury/uninsured-motorist', name: 'Uninsured Motorist Claims' },
  ],
} as const

export function buildContactPointSchema() {
  return {
    '@type': 'ContactPoint',
    telephone: PRIMARY_PHONE_E164,
    email: CONTACT_EMAIL,
    contactType: 'customer service',
    areaServed: OKLAHOMA_AREA,
    availableLanguage: ['English'],
  }
}

function buildServiceCatalog(baseUrl: string, variant: 'criminal' | 'injury') {
  return {
    '@type': 'OfferCatalog',
    name: variant === 'criminal' ? 'Oklahoma Criminal Defense Services' : 'Oklahoma Personal Injury Services',
    itemListElement: SERVICE_CATALOG_BY_VARIANT[variant].map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        '@id': `${baseUrl}${service.href}#service`,
        name: service.name,
        serviceType: service.name,
        url: `${baseUrl}${service.href}`,
        provider: { '@id': `${baseUrl}/#organization` },
        areaServed: OKLAHOMA_AREA,
      },
    })),
  }
}

function extractMarketSlug(pathname: string) {
  const marketMatch = pathname.match(/^\/([^/]+)\/(criminal-defense|personal-injury)$/)

  if (!marketMatch) {
    return null
  }

  const marketSlug = marketMatch[1]
  if (!(ALL_STANDARD_SUBPILLAR_MARKETS as readonly string[]).includes(marketSlug)) {
    return null
  }

  return marketSlug as MarketSlug
}

function buildAreaServed(pathname: string) {
  const marketSlug = extractMarketSlug(pathname)

  if (!marketSlug) {
    return [OKLAHOMA_AREA]
  }

  const marketName = getMarketDisplayName(marketSlug)
  const marketType = getMarketType(marketSlug)

  return [
    {
      '@type': marketType === 'county' ? 'AdministrativeArea' : 'City',
      name: marketName,
      containedInPlace: OKLAHOMA_AREA,
    },
    OKLAHOMA_AREA,
  ]
}

function getServiceType(pathname: string, variant: 'criminal' | 'injury') {
  if (pathname === '/criminal-defense') {
    return 'Criminal Defense'
  }

  if (pathname === '/personal-injury') {
    return 'Personal Injury'
  }

  const segments = pathname.split('/').filter(Boolean)
  const lastSegment = segments[segments.length - 1]

  if (!lastSegment) {
    return variant === 'criminal' ? 'Criminal Defense' : 'Personal Injury'
  }

  if (
    segments.length === 2 &&
    (lastSegment === 'criminal-defense' || lastSegment === 'personal-injury')
  ) {
    return SERVICE_TYPE_OVERRIDES[lastSegment]
  }

  return SERVICE_TYPE_OVERRIDES[lastSegment] ?? humanizeSlug(lastSegment)
}

export function buildOrganizationSchema(baseUrl: string) {
  const founder = buildToddKernalPersonSchema(baseUrl)

  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${baseUrl}/#organization`,
    name: 'Kernal & Associates',
    legalName: 'Kernal & Associates',
    description:
      'Oklahoma criminal defense law firm handling DUI, drug charges, warrants, and other serious cases, with selected personal injury representation.',
    image: `${baseUrl}/images/todd-kernal-motorcycle.webp`,
    url: baseUrl,
    telephone: PRIMARY_PHONE_E164,
    email: CONTACT_EMAIL,
    contactPoint: buildContactPointSchema(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1332 SW 89th Street',
      addressLocality: 'Oklahoma City',
      addressRegion: 'OK',
      postalCode: '73159',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.3770577,
      longitude: -97.5393859,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Oklahoma City',
        containedInPlace: {
          '@type': 'State',
          name: 'Oklahoma',
        },
      },
      {
        '@type': 'City',
        name: 'Norman',
        containedInPlace: {
          '@type': 'State',
          name: 'Oklahoma',
        },
      },
      {
        '@type': 'City',
        name: 'Edmond',
        containedInPlace: {
          '@type': 'State',
          name: 'Oklahoma',
        },
      },
      {
        '@type': 'State',
        name: 'Oklahoma',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '17:30',
      },
    ],
    founder,
    employee: { '@id': getToddKernalPersonId(baseUrl) },
    knowsAbout: [
      'Criminal Defense',
      'Personal Injury',
      'DUI Defense',
      'Drug Charges',
      'Violent Crimes',
      'Oil Field Injuries',
      'Car Accidents',
      'Truck Accidents',
      'Wrongful Death',
      'Felony Defense',
      'Expungements',
      'Warrants Defense',
      'Probation Violations',
      'Catastrophic Injury Claims',
      'Uninsured Motorist Claims',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal Services',
      itemListElement: [
        ...buildServiceCatalog(baseUrl, 'criminal').itemListElement,
        ...buildServiceCatalog(baseUrl, 'injury').itemListElement,
      ],
    },
    sameAs: ['https://www.facebook.com/kernallaw'],
  }
}

export function buildWebsiteSchema(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Kernal & Associates',
    alternateName: 'Kernal Law',
    url: baseUrl,
    description: 'Oklahoma criminal defense law firm with selected personal injury representation',
    publisher: { '@id': `${baseUrl}/#organization` },
    inLanguage: 'en-US',
  }
}

export function buildWebPageSchema(pathname: string, baseUrl: string) {
  const currentUrl = pathname === '/' ? baseUrl : `${baseUrl}${pathname}`

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${currentUrl}/#webpage`,
    url: currentUrl,
    name: getPageName(pathname),
    isPartOf: { '@id': `${baseUrl}/#website` },
    about:
      pathname === '/attorney'
        ? { '@id': getToddKernalPersonId(baseUrl) }
        : { '@id': `${baseUrl}/#organization` },
    ...(pathname === '/attorney'
      ? { mainEntity: { '@id': getToddKernalPersonId(baseUrl) } }
      : {}),
    inLanguage: 'en-US',
  }
}

export function buildServicePageSchema({
  pathname,
  baseUrl,
  description,
  variant,
}: ServicePageSchemaInput) {
  const currentUrl = pathname === '/' ? baseUrl : `${baseUrl}${pathname}`
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${currentUrl}#legal-service`,
    name: getPageName(pathname),
    description,
    url: currentUrl,
    provider: { '@id': `${baseUrl}/#organization` },
    areaServed: buildAreaServed(pathname),
    serviceType: getServiceType(pathname, variant),
    knowsAbout:
      variant === 'criminal'
        ? ['Criminal Defense', 'DUI / DWI Defense', 'Felony Defense', 'Warrants Defense', 'Expungement']
        : ['Personal Injury', 'Car Accident Claims', 'Truck Accident Litigation', 'Wrongful Death Claims', 'UM/UIM Claims'],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${baseUrl}/contact`,
      availableLanguage: ['English'],
    },
    contactPoint: buildContactPointSchema(),
  }

  if (pathname === '/criminal-defense' || pathname === '/personal-injury') {
    schema.hasOfferCatalog = buildServiceCatalog(baseUrl, variant)
  }

  return schema
}

export function buildBreadcrumbSchema(pathname: string, baseUrl: string) {
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
  ]

  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: BREADCRUMB_NAMES[segment] || resolveMarketName(segment),
      item: `${baseUrl}${currentPath}`,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

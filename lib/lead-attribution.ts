import { getOrCreateCtaVariant, type CtaVariant } from '@/lib/cro'

const STORAGE_KEY = 'kernal_lead_attribution_v1'

export type LeadSource = 'paid' | 'organic' | 'referral' | 'direct' | 'unknown'
export type PhoneVariant = 'default'

export interface LeadAttribution {
  landing_page: string
  current_page: string
  referrer: string
  lead_source: LeadSource
  phone_variant: PhoneVariant
  cta_variant: CtaVariant
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
  gclid: string
  gbraid: string
  wbraid: string
  msclkid: string
  fbclid: string
  first_seen_at: string
  updated_at: string
}

interface SearchParamsLike {
  get(name: string): string | null
}

type CampaignAttributionFields = Omit<
  LeadAttribution,
  'landing_page' | 'current_page' | 'referrer' | 'lead_source' | 'phone_variant' | 'cta_variant' | 'first_seen_at' | 'updated_at'
>

function isPaidMedium(medium: string) {
  const normalized = medium.toLowerCase()
  return (
    normalized.includes('cpc') ||
    normalized.includes('ppc') ||
    normalized.includes('paid') ||
    normalized.includes('display') ||
    normalized.includes('retargeting')
  )
}

function hasPaidClickId(value: CampaignAttributionFields) {
  return Boolean(value.gclid || value.gbraid || value.wbraid || value.msclkid || value.fbclid)
}

function isSearchReferrer(referrer: string) {
  return /google\.|bing\.|yahoo\.|duckduckgo\./i.test(referrer)
}

function hasCampaignSignals(value: CampaignAttributionFields) {
  return Boolean(
    value.utm_source ||
      value.utm_medium ||
      value.utm_campaign ||
      value.utm_term ||
      value.utm_content ||
      value.gclid ||
      value.gbraid ||
      value.wbraid ||
      value.msclkid ||
      value.fbclid,
  )
}

function resolveLeadSource(
  campaign: CampaignAttributionFields,
  referrer: string,
  hostname: string,
): LeadSource {
  if (hasPaidClickId(campaign) || isPaidMedium(campaign.utm_medium)) {
    return 'paid'
  }

  if (isSearchReferrer(referrer)) {
    return 'organic'
  }

  if (referrer) {
    try {
      const referrerHost = new URL(referrer).hostname
      if (referrerHost && referrerHost !== hostname) {
        return 'referral'
      }
    } catch {
      return 'referral'
    }
  }

  if (!referrer) {
    return 'direct'
  }

  return 'unknown'
}

export function resolvePhoneVariant(leadSource: LeadSource): PhoneVariant {
  void leadSource
  return 'default'
}

export function buildLeadAttribution(pathname: string, searchParams: SearchParamsLike, referrer: string, hostname: string): LeadAttribution {
  const now = new Date().toISOString()
  const campaign = {
    utm_source: searchParams.get('utm_source') || '',
    utm_medium: searchParams.get('utm_medium') || '',
    utm_campaign: searchParams.get('utm_campaign') || '',
    utm_term: searchParams.get('utm_term') || '',
    utm_content: searchParams.get('utm_content') || '',
    gclid: searchParams.get('gclid') || '',
    gbraid: searchParams.get('gbraid') || '',
    wbraid: searchParams.get('wbraid') || '',
    msclkid: searchParams.get('msclkid') || '',
    fbclid: searchParams.get('fbclid') || '',
  }

  const leadSource = resolveLeadSource(campaign, referrer, hostname)

  return {
    landing_page: pathname,
    current_page: pathname,
    referrer,
    lead_source: leadSource,
    phone_variant: resolvePhoneVariant(leadSource),
    cta_variant: getOrCreateCtaVariant(searchParams),
    ...campaign,
    first_seen_at: now,
    updated_at: now,
  }
}

export function loadLeadAttribution(): LeadAttribution | null {
  if (typeof window === 'undefined') {
    return null
  }

  const raw = window.sessionStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return null
  }

  try {
    const parsed = JSON.parse(raw) as LeadAttribution
    return parsed
  } catch {
    return null
  }
}

export function saveLeadAttribution(value: LeadAttribution) {
  if (typeof window === 'undefined') {
    return
  }

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value))
}

export function mergeLeadAttribution(existing: LeadAttribution | null, incoming: LeadAttribution): LeadAttribution {
  if (!existing) {
    return incoming
  }

  const now = new Date().toISOString()

  const incomingCampaign = {
    utm_source: incoming.utm_source,
    utm_medium: incoming.utm_medium,
    utm_campaign: incoming.utm_campaign,
    utm_term: incoming.utm_term,
    utm_content: incoming.utm_content,
    gclid: incoming.gclid,
    gbraid: incoming.gbraid,
    wbraid: incoming.wbraid,
    msclkid: incoming.msclkid,
    fbclid: incoming.fbclid,
  }

  const shouldReplaceCampaign = hasCampaignSignals(incomingCampaign)
  const mergedCampaign = shouldReplaceCampaign
    ? incomingCampaign
    : {
        utm_source: existing.utm_source,
        utm_medium: existing.utm_medium,
        utm_campaign: existing.utm_campaign,
        utm_term: existing.utm_term,
        utm_content: existing.utm_content,
        gclid: existing.gclid,
        gbraid: existing.gbraid,
        wbraid: existing.wbraid,
        msclkid: existing.msclkid,
        fbclid: existing.fbclid,
      }

  const resolvedLeadSource = shouldReplaceCampaign
    ? incoming.lead_source
    : existing.lead_source

  return {
    landing_page: existing.landing_page || incoming.landing_page,
    current_page: incoming.current_page,
    referrer: existing.referrer || incoming.referrer,
    lead_source: resolvedLeadSource,
    phone_variant: resolvePhoneVariant(resolvedLeadSource),
    cta_variant: incoming.cta_variant || existing.cta_variant,
    ...mergedCampaign,
    first_seen_at: existing.first_seen_at,
    updated_at: now,
  }
}

export function getEmptyAttribution() {
  return {
    lead_source: '',
    phone_variant: '',
    cta_variant: '',
    landing_page: '',
    referrer: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    gclid: '',
    gbraid: '',
    wbraid: '',
    msclkid: '',
    fbclid: '',
  }
}

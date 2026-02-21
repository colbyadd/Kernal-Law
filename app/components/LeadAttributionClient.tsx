'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'
import {
  buildLeadAttribution,
  loadLeadAttribution,
  mergeLeadAttribution,
  saveLeadAttribution,
} from '@/lib/lead-attribution'

export function LeadAttributionClient() {
  const pathname = usePathname()

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const existing = loadLeadAttribution()
    const incoming = buildLeadAttribution(
      pathname,
      searchParams,
      typeof document !== 'undefined' ? document.referrer : '',
      typeof window !== 'undefined' ? window.location.hostname : '',
    )
    const merged = mergeLeadAttribution(existing, incoming)

    saveLeadAttribution(merged)

    if (
      !existing ||
      existing.lead_source !== merged.lead_source ||
      existing.phone_variant !== merged.phone_variant ||
      existing.cta_variant !== merged.cta_variant
    ) {
      trackEvent('lead_source_captured', {
        page_path: pathname,
        lead_source: merged.lead_source,
        phone_variant: merged.phone_variant,
        cta_variant: merged.cta_variant,
        utm_source: merged.utm_source,
        utm_medium: merged.utm_medium,
        utm_campaign: merged.utm_campaign,
      })
    }
  }, [pathname])

  return null
}

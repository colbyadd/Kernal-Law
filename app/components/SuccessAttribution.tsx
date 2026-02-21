'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'
import { loadLeadAttribution } from '@/lib/lead-attribution'

const THANK_YOU_TRACK_KEY = 'kernal_thank_you_tracked'

export function SuccessAttribution() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (window.sessionStorage.getItem(THANK_YOU_TRACK_KEY) === '1') {
      return
    }

    const attribution = loadLeadAttribution()

    trackEvent('thank_you_view', {
      page_path: '/success',
      page_type: 'conversion_success',
      lead_source: attribution?.lead_source || 'unknown',
      phone_variant: attribution?.phone_variant || 'default',
      utm_source: attribution?.utm_source || '',
      utm_medium: attribution?.utm_medium || '',
      utm_campaign: attribution?.utm_campaign || '',
      landing_page: attribution?.landing_page || '',
    })

    window.sessionStorage.setItem(THANK_YOU_TRACK_KEY, '1')
  }, [])

  return null
}

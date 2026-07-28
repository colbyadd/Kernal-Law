import type { Config } from '@netlify/functions'
import { CONTACT_CONSENT_VERSION } from '../../lib/contact'

const CASE_TYPES = new Set(['criminal-defense', 'personal-injury', 'other'])
const CONTACT_METHODS = new Set(['call', 'text', 'email'])

const TRACKING_FIELDS = [
  'page_path',
  'page_type',
  'landing_page',
  'referrer',
  'lead_source',
  'phone_variant',
  'cta_variant',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
  'msclkid',
  'fbclid',
] as const

interface ValidationResult {
  ok: boolean
  error?: string
  fields?: string[]
}

function value(params: URLSearchParams, name: string, maxLength: number) {
  return (params.get(name) || '').trim().slice(0, maxLength)
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function phoneDigits(phone: string) {
  return phone.replace(/\D/g, '')
}

export function validateContactSubmission(
  params: URLSearchParams,
): ValidationResult {
  if (value(params, 'bot-field', 200)) {
    return { ok: true }
  }

  const name = value(params, 'name', 121)
  const phone = value(params, 'phone', 30)
  const email = value(params, 'email', 255)
  const caseType = value(params, 'case_type', 40)
  const contactMethod = value(params, 'preferred_contact_method', 20)
  const message = value(params, 'message', 1501)
  const consent = value(params, 'consent', 20)
  const consentVersion = value(params, 'consent_version', 40)
  const errors: string[] = []

  if (name.length < 2 || name.length > 120) errors.push('name')
  if (!CASE_TYPES.has(caseType)) errors.push('case_type')
  if (!CONTACT_METHODS.has(contactMethod)) errors.push('preferred_contact_method')
  if (phone && (phoneDigits(phone).length < 10 || phoneDigits(phone).length > 15)) errors.push('phone')
  if (email && (email.length > 254 || !validEmail(email))) errors.push('email')
  if ((contactMethod === 'call' || contactMethod === 'text') && phoneDigits(phone).length < 10) {
    errors.push('phone')
  }
  if (contactMethod === 'email' && !validEmail(email)) errors.push('email')
  if (message.length > 1500) errors.push('message')
  if (consent !== 'yes' || consentVersion !== CONTACT_CONSENT_VERSION) errors.push('consent')
  if (errors.length) {
    return {
      ok: false,
      error: 'Please review the highlighted fields and try again.',
      fields: [...new Set(errors)],
    }
  }

  return { ok: true }
}

function buildNetlifyPayload(params: URLSearchParams) {
  const payload = new URLSearchParams()
  payload.set('form-name', 'contact')
  payload.set('subject', 'New Case Evaluation Request - Kernal Law')
  payload.set('name', value(params, 'name', 120))
  payload.set('phone', value(params, 'phone', 30))
  payload.set('email', value(params, 'email', 254))
  payload.set('case_type', value(params, 'case_type', 40))
  payload.set('preferred_contact_method', value(params, 'preferred_contact_method', 20))
  payload.set('message', value(params, 'message', 1500))
  payload.set('consent', 'yes')
  payload.set('consent_version', CONTACT_CONSENT_VERSION)
  payload.set('form_started_at', value(params, 'form_started_at', 80))
  payload.set('js_enabled', value(params, 'js_enabled', 10) || 'false')
  payload.set('bot-field', '')

  for (const field of TRACKING_FIELDS) {
    payload.set(field, value(params, field, field === 'referrer' ? 500 : 200))
  }

  return payload
}

function isAjax(request: Request) {
  return request.headers.get('x-requested-with') === 'XMLHttpRequest'
}

function errorResponse(request: Request, error: string, fields: string[], status: number) {
  if (isAjax(request)) {
    return Response.json({ ok: false, error, fields }, {
      status,
      headers: { 'Cache-Control': 'no-store' },
    })
  }

  return Response.redirect(new URL('/contact#form-error', request.url), 303)
}

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', {
      status: 405,
      headers: { Allow: 'POST', 'Cache-Control': 'no-store' },
    })
  }

  const requestUrl = new URL(request.url)
  const origin = request.headers.get('origin')
  if (origin && origin !== requestUrl.origin) {
    return errorResponse(request, 'Unable to verify this request.', [], 403)
  }

  const contentType = request.headers.get('content-type') || ''
  if (!contentType.includes('application/x-www-form-urlencoded')) {
    return errorResponse(request, 'Unsupported form submission.', [], 415)
  }

  let params: URLSearchParams
  try {
    params = new URLSearchParams(await request.text())
  } catch {
    return errorResponse(request, 'Unable to read the form submission.', [], 400)
  }

  if (value(params, 'bot-field', 200)) {
    if (isAjax(request)) {
      return Response.json({ ok: true, ignored: true }, {
        headers: { 'Cache-Control': 'no-store' },
      })
    }
    return Response.redirect(new URL('/success', request.url), 303)
  }

  const validation = validateContactSubmission(params)
  if (!validation.ok) {
    return errorResponse(
      request,
      validation.error || 'Please review the form and try again.',
      validation.fields || [],
      400,
    )
  }

  try {
    const formEndpoint = new URL('/__forms.html', request.url)
    const upstream = await fetch(formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: buildNetlifyPayload(params).toString(),
      redirect: 'follow',
    })

    if (!upstream.ok) {
      return errorResponse(request, 'The form service is temporarily unavailable. Please call the office.', [], 502)
    }
  } catch {
    return errorResponse(request, 'The form service is temporarily unavailable. Please call the office.', [], 502)
  }

  if (isAjax(request)) {
    return Response.json({ ok: true }, {
      headers: { 'Cache-Control': 'no-store' },
    })
  }

  return Response.redirect(new URL('/success', request.url), 303)
}

export const config: Config = {
  path: '/api/contact',
  method: ['POST'],
  rateLimit: {
    windowLimit: 6,
    windowSize: 60,
    aggregateBy: ['ip', 'domain'],
  },
}

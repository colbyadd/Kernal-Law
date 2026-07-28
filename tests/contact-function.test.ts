import assert from 'node:assert/strict'
import test from 'node:test'
import handler, { validateContactSubmission } from '../netlify/functions/contact'
import { CONTACT_CONSENT_VERSION } from '../lib/contact'

function validParams(overrides: Record<string, string> = {}) {
  return new URLSearchParams({
    name: 'Test Visitor',
    phone: '(405) 555-0100',
    email: '',
    case_type: 'criminal-defense',
    preferred_contact_method: 'call',
    message: 'A short general overview.',
    consent: 'yes',
    consent_version: CONTACT_CONSENT_VERSION,
    form_started_at: new Date(Date.now() - 5_000).toISOString(),
    js_enabled: 'true',
    'bot-field': '',
    ...overrides,
  })
}

function ajaxRequest(params: URLSearchParams, headers: Record<string, string> = {}) {
  return new Request('https://kernallaw.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest',
      Origin: 'https://kernallaw.com',
      ...headers,
    },
    body: params.toString(),
  })
}

test('server validation accepts each valid contact preference', () => {
  assert.equal(validateContactSubmission(validParams()).ok, true)
  assert.equal(
    validateContactSubmission(validParams({
      preferred_contact_method: 'text',
    })).ok,
    true,
  )
  assert.equal(
    validateContactSubmission(validParams({
      preferred_contact_method: 'email',
      phone: '',
      email: 'visitor@example.com',
    })).ok,
    true,
  )
})

test('server validation accepts the simplified intake without urgency', () => {
  const params = validParams()
  assert.equal(params.has('urgency'), false)
  assert.equal(validateContactSubmission(params).ok, true)
})

test('server validation enforces reply details and the consent version', () => {
  const missingPhone = validateContactSubmission(validParams({ phone: '' }))
  assert.equal(missingPhone.ok, false)
  assert.ok(missingPhone.fields?.includes('phone'))

  const missingEmail = validateContactSubmission(validParams({
    preferred_contact_method: 'email',
    phone: '',
  }))
  assert.equal(missingEmail.ok, false)
  assert.ok(missingEmail.fields?.includes('email'))

  const staleConsent = validateContactSubmission(validParams({ consent_version: 'old' }))
  assert.equal(staleConsent.ok, false)
  assert.ok(staleConsent.fields?.includes('consent'))

  const oversizedEmail = validateContactSubmission(validParams({
    preferred_contact_method: 'email',
    phone: '',
    email: `${'a'.repeat(245)}@example.com`,
  }))
  assert.equal(oversizedEmail.ok, false)
  assert.ok(oversizedEmail.fields?.includes('email'))

})

test('handler rejects unsupported methods, cross-origin posts, and malformed content', async () => {
  const methodResponse = await handler(new Request('https://kernallaw.com/api/contact'))
  assert.equal(methodResponse.status, 405)

  const crossOrigin = await handler(ajaxRequest(validParams(), { Origin: 'https://example.com' }))
  assert.equal(crossOrigin.status, 403)

  const malformed = await handler(new Request('https://kernallaw.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    body: '{}',
  }))
  assert.equal(malformed.status, 415)
})

test('native validation failures redirect to the rendered error target', async () => {
  const request = new Request('https://kernallaw.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Origin: 'https://kernallaw.com',
    },
    body: validParams({ phone: '' }).toString(),
  })
  const response = await handler(request)

  assert.equal(response.status, 303)
  assert.equal(response.headers.get('location'), 'https://kernallaw.com/contact#form-error')
})

test('handler forwards a sanitized valid submission to the Netlify form blueprint', async () => {
  const originalFetch = globalThis.fetch
  let forwardedUrl = ''
  let forwardedBody = ''

  globalThis.fetch = (async (input, init) => {
    forwardedUrl = String(input)
    forwardedBody = String(init?.body || '')
    return new Response('', { status: 200 })
  }) as typeof fetch

  try {
    const response = await handler(ajaxRequest(validParams({
      page_path: '/contact',
      utm_source: 'test-source',
    })))
    assert.equal(response.status, 200)
    assert.deepEqual(await response.json(), { ok: true })
    assert.equal(forwardedUrl, 'https://kernallaw.com/__forms.html')

    const forwarded = new URLSearchParams(forwardedBody)
    assert.equal(forwarded.get('form-name'), 'contact')
    assert.equal(forwarded.get('name'), 'Test Visitor')
    assert.equal(forwarded.get('consent_version'), CONTACT_CONSENT_VERSION)
    assert.equal(forwarded.get('utm_source'), 'test-source')
    assert.equal(forwarded.has('urgency'), false)
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('handler reports an upstream form-service failure without claiming success', async () => {
  const originalFetch = globalThis.fetch
  globalThis.fetch = (async () => new Response('', { status: 503 })) as typeof fetch

  try {
    const response = await handler(ajaxRequest(validParams()))
    assert.equal(response.status, 502)
    const body = await response.json() as { ok: boolean }
    assert.equal(body.ok, false)
  } finally {
    globalThis.fetch = originalFetch
  }
})

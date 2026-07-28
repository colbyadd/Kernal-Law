const DEFAULT_PRIMARY_PHONE_E164 = '+14053640601'
const DEFAULT_CONTACT_EMAIL = 'todd@kernallaw.com'

export type ContactCaseType = 'criminal-defense' | 'personal-injury' | 'other'

export const CONTACT_CONSENT_VERSION = '2026-07-11'
export const FORM_SUBMISSION_SESSION_KEY = 'kernal_form_submission_confirmed'

export function recordConfirmedFormSubmission() {
  if (typeof window === 'undefined') return

  try {
    window.sessionStorage.setItem(FORM_SUBMISSION_SESSION_KEY, '1')
  } catch {
    // Submission delivery must not be reported as failed when browser storage is unavailable.
  }
}

export function consumeConfirmedFormSubmission() {
  if (typeof window === 'undefined') return false

  try {
    const confirmed = window.sessionStorage.getItem(FORM_SUBMISSION_SESSION_KEY) === '1'
    if (confirmed) window.sessionStorage.removeItem(FORM_SUBMISSION_SESSION_KEY)
    return confirmed
  } catch {
    return false
  }
}

function normalizeDigits(value: string) {
  return value.replace(/\D/g, '')
}

function normalizePhoneE164(value: string) {
  const digits = normalizeDigits(value)

  if (!digits) {
    return DEFAULT_PRIMARY_PHONE_E164
  }

  if (digits.length === 10) {
    return `+1${digits}`
  }

  if (digits.length === 11 && digits.startsWith('1')) {
    return `+${digits}`
  }

  if (value.startsWith('+')) {
    return `+${digits}`
  }

  return DEFAULT_PRIMARY_PHONE_E164
}

export const PRIMARY_PHONE_E164 = normalizePhoneE164(
  process.env.NEXT_PUBLIC_PRIMARY_PHONE_E164 || DEFAULT_PRIMARY_PHONE_E164,
)

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL

export function getPhoneDigits(phoneE164: string) {
  const digits = normalizeDigits(phoneE164)
  if (digits.length === 11 && digits.startsWith('1')) {
    return digits.slice(1)
  }
  return digits
}

export function formatPhone(phoneE164: string, style: 'paren' | 'dot' | 'compact' = 'paren') {
  const digits = getPhoneDigits(phoneE164)

  if (digits.length !== 10) {
    return phoneE164
  }

  const area = digits.slice(0, 3)
  const mid = digits.slice(3, 6)
  const last = digits.slice(6)

  if (style === 'dot') {
    return `${area}.${mid}.${last}`
  }

  if (style === 'compact') {
    return `${area}${mid}${last}`
  }

  return `(${area}) ${mid}-${last}`
}

export const PRIMARY_PHONE_DIGITS = getPhoneDigits(PRIMARY_PHONE_E164)
export const PRIMARY_PHONE_DISPLAY = formatPhone(PRIMARY_PHONE_E164)
export const PRIMARY_PHONE_DOT = formatPhone(PRIMARY_PHONE_E164, 'dot')
export const PRIMARY_PHONE_TEL_HREF = `tel:${PRIMARY_PHONE_E164}`
export const PRIMARY_PHONE_SMS_HREF = `sms:${PRIMARY_PHONE_E164}`

export function normalizeContactCaseType(value: string | null | undefined): ContactCaseType | '' {
  if (value === 'criminal-defense' || value === 'personal-injury' || value === 'other') {
    return value
  }

  return ''
}

export function getContactHref(caseType?: ContactCaseType) {
  return caseType ? `/contact?case=${caseType}` : '/contact'
}

export function inferContactCaseType(pathname: string): ContactCaseType | '' {
  if (pathname.startsWith('/criminal-defense') || pathname.includes('/criminal-defense')) {
    return 'criminal-defense'
  }

  if (pathname.startsWith('/personal-injury') || pathname.includes('/personal-injury')) {
    return 'personal-injury'
  }

  return ''
}

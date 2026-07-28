'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { derivePageType, trackEvent } from '@/lib/analytics'
import {
    CONTACT_CONSENT_VERSION,
    ContactCaseType,
    PRIMARY_PHONE_DISPLAY,
    PRIMARY_PHONE_TEL_HREF,
    inferContactCaseType,
    normalizeContactCaseType,
    recordConfirmedFormSubmission,
} from '@/lib/contact'
import { getEmptyAttribution, loadLeadAttribution } from '@/lib/lead-attribution'

interface LeadFieldValues {
    page_path: string
    page_type: string
    landing_page: string
    referrer: string
    lead_source: string
    phone_variant: string
    cta_variant: string
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
}

type FieldName =
    | 'name'
    | 'phone'
    | 'email'
    | 'case_type'
    | 'preferred_contact_method'
    | 'message'
    | 'consent'

type FieldErrors = Partial<Record<FieldName, string>>
type PreferredContactMethod = 'call' | 'text' | 'email'

const CONTACT_METHODS: PreferredContactMethod[] = ['call', 'text', 'email']

function digits(value: string) {
    return value.replace(/\D/g, '')
}

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function errorClass(hasError: boolean) {
    return hasError ? 'border-red-400' : 'border-silver-500/20'
}

export function ContactForm() {
    const router = useRouter()
    const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
    const [caseType, setCaseType] = useState<ContactCaseType | ''>('')
    const [preferredContactMethod, setPreferredContactMethod] = useState<PreferredContactMethod>('call')
    const formStartedAtRef = useRef<number | null>(null)
    const leadFields: LeadFieldValues = {
        ...getEmptyAttribution(),
        page_path: '/contact',
        page_type: 'contact',
    }

    useEffect(() => {
        formStartedAtRef.current = Date.now()

        const queryCaseType = normalizeContactCaseType(
            new URLSearchParams(window.location.search).get('case'),
        )
        let referringCaseType: ContactCaseType | '' = ''

        if (!queryCaseType && document.referrer) {
            try {
                const referrerUrl = new URL(document.referrer)
                if (referrerUrl.origin === window.location.origin) {
                    referringCaseType = inferContactCaseType(referrerUrl.pathname)
                }
            } catch {
                // Ignore malformed or unavailable referrers and leave the choice open.
            }
        }

        const prefilledCaseType = queryCaseType || referringCaseType
        if (!prefilledCaseType) return

        const frameId = window.requestAnimationFrame(() => {
            setCaseType(prefilledCaseType)
        })

        return () => window.cancelAnimationFrame(frameId)
    }, [])

    const chooseContactMethod = (method: PreferredContactMethod) => {
        setPreferredContactMethod(method)
        setFieldErrors((current) => {
            const next = { ...current }
            delete next.phone
            delete next.email
            delete next.preferred_contact_method
            return next
        })
    }

    const focusFirstError = (form: HTMLFormElement, errors: FieldErrors) => {
        const errorNames = new Set(Object.keys(errors))
        const firstField = Array.from(form.elements).find((field) => (
            field instanceof HTMLElement
            && 'name' in field
            && typeof field.name === 'string'
            && errorNames.has(field.name)
        ))
        if (!(firstField instanceof HTMLElement)) return

        window.requestAnimationFrame(() => {
            firstField.focus()
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setErrorMessage('')
        setFieldErrors({})

        const form = event.currentTarget
        const formData = new FormData(form)
        const pagePath = window.location.pathname
        const pageType = derivePageType(pagePath)
        const attribution = loadLeadAttribution()
        const mergedLead = {
            page_path: pagePath,
            page_type: pageType,
            landing_page: attribution?.landing_page || leadFields.landing_page || pagePath,
            referrer: attribution?.referrer || leadFields.referrer || document.referrer || '',
            lead_source: attribution?.lead_source || leadFields.lead_source || 'direct',
            phone_variant: attribution?.phone_variant || leadFields.phone_variant || 'default',
            cta_variant: attribution?.cta_variant || leadFields.cta_variant || 'control',
            utm_source: attribution?.utm_source || leadFields.utm_source || '',
            utm_medium: attribution?.utm_medium || leadFields.utm_medium || '',
            utm_campaign: attribution?.utm_campaign || leadFields.utm_campaign || '',
            utm_term: attribution?.utm_term || leadFields.utm_term || '',
            utm_content: attribution?.utm_content || leadFields.utm_content || '',
            gclid: attribution?.gclid || leadFields.gclid || '',
            gbraid: attribution?.gbraid || leadFields.gbraid || '',
            wbraid: attribution?.wbraid || leadFields.wbraid || '',
            msclkid: attribution?.msclkid || leadFields.msclkid || '',
            fbclid: attribution?.fbclid || leadFields.fbclid || '',
        }

        const name = String(formData.get('name') || '').trim()
        const phone = String(formData.get('phone') || '').trim()
        const email = String(formData.get('email') || '').trim()
        const submittedCaseType = String(formData.get('case_type') || '')
        const contactMethod = String(formData.get('preferred_contact_method') || '')
        const message = String(formData.get('message') || '').trim()
        const consent = String(formData.get('consent') || '')
        const errors: FieldErrors = {}

        if (name.length < 2) errors.name = 'Please enter your full name.'
        if (!submittedCaseType) errors.case_type = 'Please choose a case type.'
        if (!contactMethod) errors.preferred_contact_method = 'Please choose how you want us to respond.'
        if (phone && (digits(phone).length < 10 || digits(phone).length > 15)) {
            errors.phone = 'Please enter a valid phone number.'
        }
        if ((contactMethod === 'call' || contactMethod === 'text') && digits(phone).length < 10) {
            errors.phone = 'A phone number is required for calls or texts.'
        }
        if (email && !isValidEmail(email)) errors.email = 'Please enter a valid email address.'
        if (contactMethod === 'email' && !isValidEmail(email)) {
            errors.email = 'An email address is required when email is selected.'
        }
        if (message.length > 1500) errors.message = 'Please keep the overview to 1,500 characters or fewer.'
        if (consent !== 'yes') errors.consent = 'Please confirm the communication and website terms.'

        if (Object.keys(errors).length) {
            setFieldErrors(errors)
            setStatus('error')
            setErrorMessage('Please review the highlighted fields and try again.')
            focusFirstError(form, errors)
            trackEvent('form_submit_blocked', {
                form_name: 'contact',
                page_path: pagePath,
                page_type: pageType,
                reason: 'client_validation',
            })
            return
        }

        const params = new URLSearchParams()
        for (const [key, entryValue] of formData.entries()) {
            params.append(key, String(entryValue))
        }
        params.set('page_path', mergedLead.page_path)
        params.set('page_type', mergedLead.page_type)
        params.set('landing_page', mergedLead.landing_page)
        params.set('referrer', mergedLead.referrer)
        params.set('lead_source', mergedLead.lead_source)
        params.set('phone_variant', mergedLead.phone_variant)
        params.set('cta_variant', mergedLead.cta_variant)
        params.set('utm_source', mergedLead.utm_source)
        params.set('utm_medium', mergedLead.utm_medium)
        params.set('utm_campaign', mergedLead.utm_campaign)
        params.set('utm_term', mergedLead.utm_term)
        params.set('utm_content', mergedLead.utm_content)
        params.set('gclid', mergedLead.gclid)
        params.set('gbraid', mergedLead.gbraid)
        params.set('wbraid', mergedLead.wbraid)
        params.set('msclkid', mergedLead.msclkid)
        params.set('fbclid', mergedLead.fbclid)
        params.set('form_started_at', new Date(formStartedAtRef.current ?? Date.now()).toISOString())
        params.set('js_enabled', 'true')
        params.set('consent_version', CONTACT_CONSENT_VERSION)

        trackEvent('form_submit_start', {
            form_name: 'contact',
            page_path: pagePath,
            page_type: pageType,
            case_type: submittedCaseType,
            preferred_contact_method: contactMethod,
            lead_source: mergedLead.lead_source,
            cta_variant: mergedLead.cta_variant,
        })
        setStatus('submitting')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: params.toString(),
            })
            const result = await response.json().catch(() => null) as {
                ok?: boolean
                ignored?: boolean
                error?: string
                fields?: FieldName[]
            } | null

            if (!response.ok || !result?.ok) {
                const serverErrors = (result?.fields || []).reduce<FieldErrors>((acc, field) => {
                    acc[field] = 'Please review this field.'
                    return acc
                }, {})
                setFieldErrors(serverErrors)
                setStatus('error')
                setErrorMessage(
                    response.status === 429
                        ? 'Too many requests were sent. Please wait a minute or call the office.'
                        : result?.error || 'Sorry, there was a problem sending your request. Please call the office.',
                )
                focusFirstError(form, serverErrors)
                return
            }

            if (result.ignored) {
                setStatus('idle')
                return
            }

            recordConfirmedFormSubmission()
            trackEvent('form_submit_success', {
                form_name: 'contact',
                page_path: pagePath,
                page_type: pageType,
                case_type: submittedCaseType,
                preferred_contact_method: contactMethod,
                lead_source: mergedLead.lead_source,
                cta_variant: mergedLead.cta_variant,
            })
            router.push('/success')
        } catch {
            setStatus('error')
            setErrorMessage('Sorry, there was a problem sending your request. Please call the office.')
        }
    }

    return (
        <div className="bg-iron-900 p-6 md:p-10 border border-silver-500/10">
            <h2 className="font-serif text-3xl text-white mb-2">Request a Free Consultation</h2>
            <p className="text-silver-400 text-sm mb-7">
                Share the basics and the safest way to reach you. For an urgent arrest, warrant, or deadline, call instead.
            </p>

            <form
                name="contact"
                method="POST"
                action="/api/contact"
                data-netlify="true"
                netlify-honeypot="bot-field"
                noValidate
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="subject" value="New Case Evaluation Request - Kernal Law" />
                <input type="hidden" name="page_path" value={leadFields.page_path} />
                <input type="hidden" name="page_type" value={leadFields.page_type} />
                <input type="hidden" name="landing_page" value={leadFields.landing_page} />
                <input type="hidden" name="referrer" value={leadFields.referrer} />
                <input type="hidden" name="lead_source" value={leadFields.lead_source} />
                <input type="hidden" name="phone_variant" value={leadFields.phone_variant} />
                <input type="hidden" name="cta_variant" value={leadFields.cta_variant} />
                <input type="hidden" name="utm_source" value={leadFields.utm_source} />
                <input type="hidden" name="utm_medium" value={leadFields.utm_medium} />
                <input type="hidden" name="utm_campaign" value={leadFields.utm_campaign} />
                <input type="hidden" name="utm_term" value={leadFields.utm_term} />
                <input type="hidden" name="utm_content" value={leadFields.utm_content} />
                <input type="hidden" name="gclid" value={leadFields.gclid} />
                <input type="hidden" name="gbraid" value={leadFields.gbraid} />
                <input type="hidden" name="wbraid" value={leadFields.wbraid} />
                <input type="hidden" name="msclkid" value={leadFields.msclkid} />
                <input type="hidden" name="fbclid" value={leadFields.fbclid} />
                <input type="hidden" name="form_started_at" value="" />
                <input type="hidden" name="consent_version" value={CONTACT_CONSENT_VERSION} />

                <p className="hidden">
                    <label>
                        Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                </p>

                <div>
                    <label htmlFor="case_type" className="block text-silver-400 text-xs uppercase tracking-widest mb-2">What Do You Need Help With?</label>
                    <select
                        name="case_type"
                        id="case_type"
                        required
                        value={caseType}
                        onChange={(event) => {
                            setCaseType(normalizeContactCaseType(event.target.value))
                            setFieldErrors((current) => ({ ...current, case_type: undefined }))
                        }}
                        aria-invalid={Boolean(fieldErrors.case_type)}
                        aria-describedby={fieldErrors.case_type ? 'case_type_error' : undefined}
                        className={`w-full bg-iron-950 border p-4 text-white focus:border-accent-gold ${errorClass(Boolean(fieldErrors.case_type))}`}
                    >
                        <option value="" disabled>Select one</option>
                        <option value="criminal-defense">Criminal charge or investigation</option>
                        <option value="personal-injury">Serious injury</option>
                        <option value="other">Other / Not Sure</option>
                    </select>
                    {fieldErrors.case_type ? <p id="case_type_error" className="text-red-300 text-xs mt-2">{fieldErrors.case_type}</p> : null}
                </div>

                <fieldset aria-describedby={fieldErrors.preferred_contact_method ? 'preferred_contact_method_error' : undefined}>
                    <legend className="block text-silver-400 text-xs uppercase tracking-widest mb-3">How Should We Contact You?</legend>
                    <div className="grid grid-cols-3 gap-3">
                        {CONTACT_METHODS.map((method) => (
                            <label key={method} className="bg-iron-950 border border-silver-500/20 p-3 text-silver-300 text-sm flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="preferred_contact_method"
                                    value={method}
                                    checked={preferredContactMethod === method}
                                    onChange={() => chooseContactMethod(method)}
                                    className="accent-accent-gold"
                                />
                                {method.charAt(0).toUpperCase() + method.slice(1)}
                            </label>
                        ))}
                    </div>
                    {fieldErrors.preferred_contact_method ? <p id="preferred_contact_method_error" className="text-red-300 text-xs mt-2">{fieldErrors.preferred_contact_method}</p> : null}
                </fieldset>

                <div>
                    <label htmlFor="name" className="block text-silver-400 text-xs uppercase tracking-widest mb-2">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        minLength={2}
                        maxLength={120}
                        autoComplete="name"
                        placeholder="Your full name"
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={fieldErrors.name ? 'name_error' : undefined}
                        className={`w-full bg-iron-950 border p-4 text-white focus:border-accent-gold ${errorClass(Boolean(fieldErrors.name))}`}
                    />
                    {fieldErrors.name ? <p id="name_error" className="text-red-300 text-xs mt-2">{fieldErrors.name}</p> : null}
                </div>

                {preferredContactMethod === 'email' ? (
                    <div>
                        <label htmlFor="email" className="block text-silver-400 text-xs uppercase tracking-widest mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            autoComplete="email"
                            maxLength={254}
                            placeholder="you@example.com"
                            aria-invalid={Boolean(fieldErrors.email)}
                            aria-describedby={fieldErrors.email ? 'email_error' : undefined}
                            className={`w-full bg-iron-950 border p-4 text-white focus:border-accent-gold ${errorClass(Boolean(fieldErrors.email))}`}
                        />
                        {fieldErrors.email ? <p id="email_error" className="text-red-300 text-xs mt-2">{fieldErrors.email}</p> : null}
                    </div>
                ) : (
                    <div>
                        <label htmlFor="phone" className="block text-silver-400 text-xs uppercase tracking-widest mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            autoComplete="tel"
                            inputMode="tel"
                            pattern="[0-9()+\-.\s]{10,20}"
                            placeholder={PRIMARY_PHONE_DISPLAY}
                            aria-invalid={Boolean(fieldErrors.phone)}
                            aria-describedby={fieldErrors.phone ? 'phone_error' : undefined}
                            className={`w-full bg-iron-950 border p-4 text-white focus:border-accent-gold ${errorClass(Boolean(fieldErrors.phone))}`}
                        />
                        {fieldErrors.phone ? <p id="phone_error" className="text-red-300 text-xs mt-2">{fieldErrors.phone}</p> : null}
                    </div>
                )}

                <details className="group border border-silver-500/20 bg-iron-950">
                    <summary className="cursor-pointer list-none p-4 text-sm text-silver-200 flex items-center justify-between gap-4">
                        <span>Add a short note <span className="text-silver-500">(optional)</span></span>
                        <span aria-hidden="true" className="text-accent-gold text-lg transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="border-t border-silver-500/15 p-4 space-y-4">
                        <div className="border border-accent-gold/25 bg-accent-gold/5 p-4 text-sm text-silver-300" role="note">
                            <p className="font-semibold text-white mb-1">Please keep this general</p>
                            <p>
                                Do not send confidential details, medical records, or documents. Sending this form does
                                not create an attorney-client relationship.
                            </p>
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Brief Overview (Optional)</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={3}
                                maxLength={1500}
                                placeholder="General matter type, key date, and your immediate concern."
                                aria-invalid={Boolean(fieldErrors.message)}
                                aria-describedby={fieldErrors.message ? 'message_help message_error' : 'message_help'}
                                className={`w-full bg-iron-900 border p-4 text-white focus:border-accent-gold ${errorClass(Boolean(fieldErrors.message))}`}
                            />
                            <p id="message_help" className="text-silver-500 text-xs mt-2">Please do not send documents or detailed evidence through this form.</p>
                            {fieldErrors.message ? <p id="message_error" className="text-red-300 text-xs mt-2">{fieldErrors.message}</p> : null}
                        </div>
                    </div>
                </details>

                <div className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        value="yes"
                        required
                        aria-invalid={Boolean(fieldErrors.consent)}
                        aria-describedby={fieldErrors.consent ? 'consent_error' : undefined}
                        className="mt-1 h-4 w-4 shrink-0 accent-accent-gold bg-iron-950 border border-silver-500/20"
                    />
                    <label htmlFor="consent" className="text-xs text-silver-400 leading-relaxed">
                        I consent to Kernal &amp; Associates responding to this request using the contact information
                        and preferred response method I selected above. If I selected text, message and data rates may
                        apply and I can reply STOP to opt out. Consent is not required to hire the firm.
                        I agree to the{' '}
                        <a href="/terms" className="text-accent-gold underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                            Terms of Service
                        </a>{' '}and{' '}
                        <a href="/privacy" className="text-accent-gold underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                        </a>.
                    </label>
                </div>
                {fieldErrors.consent ? <p id="consent_error" className="text-red-300 text-xs">{fieldErrors.consent}</p> : null}

                {status === 'error' ? (
                    <p className="text-red-300 text-sm text-center" role="alert" aria-live="assertive">
                        {errorMessage || 'Please review the form and try again.'}
                    </p>
                ) : null}

                <p
                    id="form-error"
                    tabIndex={-1}
                    className="hidden target:block text-red-300 text-sm text-center"
                    role="alert"
                >
                    We could not send that request. Please review the form or call the office.
                </p>

                <button
                    type="submit"
                    data-cta="contact_form_submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-white text-iron-950 py-4 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Request'}
                </button>

                <p className="text-xs text-silver-400 text-center">
                    Need immediate help? Call <a href={PRIMARY_PHONE_TEL_HREF} className="text-white underline underline-offset-2">{PRIMARY_PHONE_DISPLAY}</a>.
                </p>
            </form>
        </div>
    )
}

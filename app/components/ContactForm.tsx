'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { derivePageType, trackEvent } from '@/lib/analytics'
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

export function ContactForm() {
    const router = useRouter()
    const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
    const [leadFields, setLeadFields] = useState<LeadFieldValues>({
        ...getEmptyAttribution(),
        page_path: '/contact',
        page_type: 'contact',
    })

    useEffect(() => {
        const pagePath = window.location.pathname
        const pageType = derivePageType(pagePath)
        const attribution = loadLeadAttribution()

        setLeadFields({
            page_path: pagePath,
            page_type: pageType,
            landing_page: attribution?.landing_page || pagePath,
            referrer: attribution?.referrer || document.referrer || '',
            lead_source: attribution?.lead_source || 'direct',
            phone_variant: attribution?.phone_variant || 'default',
            cta_variant: attribution?.cta_variant || 'control',
            utm_source: attribution?.utm_source || '',
            utm_medium: attribution?.utm_medium || '',
            utm_campaign: attribution?.utm_campaign || '',
            utm_term: attribution?.utm_term || '',
            utm_content: attribution?.utm_content || '',
            gclid: attribution?.gclid || '',
            gbraid: attribution?.gbraid || '',
            wbraid: attribution?.wbraid || '',
            msclkid: attribution?.msclkid || '',
            fbclid: attribution?.fbclid || '',
        })
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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

        const form = e.currentTarget
        const formData = new FormData(form)
        const caseType = String(formData.get('case_type') || '')
        const urgency = String(formData.get('urgency') || '')
        const preferredContactMethod = String(formData.get('preferred_contact_method') || '')
        const params = new URLSearchParams()

        trackEvent('form_submit_start', {
            form_name: 'contact',
            page_path: pagePath,
            page_type: pageType,
            case_type: caseType || 'unknown',
            urgency: urgency || 'unknown',
            preferred_contact_method: preferredContactMethod || 'unspecified',
            lead_source: mergedLead.lead_source,
            phone_variant: mergedLead.phone_variant,
            cta_variant: mergedLead.cta_variant,
            utm_source: mergedLead.utm_source,
            utm_medium: mergedLead.utm_medium,
            utm_campaign: mergedLead.utm_campaign,
        })
        setStatus('submitting')

        // Explicitly convert FormData to URLSearchParams
        for (const [key, value] of formData.entries()) {
            params.append(key, value as string)
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

        try {
            const response = await fetch('/form-setup.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params.toString(),
            })

            if (response.ok) {
                trackEvent('form_submit_success', {
                    form_name: 'contact',
                    page_path: pagePath,
                    page_type: pageType,
                    case_type: caseType || 'unknown',
                    urgency: urgency || 'unknown',
                    preferred_contact_method: preferredContactMethod || 'unspecified',
                    lead_source: mergedLead.lead_source,
                    phone_variant: mergedLead.phone_variant,
                    cta_variant: mergedLead.cta_variant,
                    utm_source: mergedLead.utm_source,
                    utm_medium: mergedLead.utm_medium,
                    utm_campaign: mergedLead.utm_campaign,
                })
                router.push('/success')
            } else {
                throw new Error('Form submission failed')
            }
        } catch (error) {
            console.error(error)
            setStatus('error')
        }
    }

    return (
        <div className="bg-iron-900 p-6 md:p-12 border border-silver-500/10">
            <h3 className="font-serif text-3xl text-white mb-2">Case Evaluation</h3>
            <p className="text-silver-400 text-sm mb-8">
                2-minute intake. Share only essentials and we will follow up quickly.
            </p>
            <form
                name="contact"
                method="POST"
                data-netlify="true"
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
                {/* Honeypot field for spam protection - hidden from users */}
                <p className="hidden">
                    <label>
                        Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="case_type" className="block text-silver-500 text-xs uppercase tracking-widest mb-2">Case Type</label>
                        <select
                            name="case_type"
                            id="case_type"
                            required
                            defaultValue=""
                            className="w-full bg-iron-950 border border-silver-500/20 p-4 text-white focus:border-accent-gold focus:outline-none transition-colors"
                        >
                            <option value="" disabled>Select one</option>
                            <option value="criminal-defense">Criminal Defense</option>
                            <option value="personal-injury">Personal Injury</option>
                            <option value="other">Other / Not Sure</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="urgency" className="block text-silver-500 text-xs uppercase tracking-widest mb-2">Urgency</label>
                        <select
                            name="urgency"
                            id="urgency"
                            required
                            defaultValue=""
                            className="w-full bg-iron-950 border border-silver-500/20 p-4 text-white focus:border-accent-gold focus:outline-none transition-colors"
                        >
                            <option value="" disabled>Select one</option>
                            <option value="immediate">Immediate (today)</option>
                            <option value="soon">This week</option>
                            <option value="planning">Planning ahead</option>
                        </select>
                    </div>
                </div>

                <fieldset>
                    <legend className="block text-silver-500 text-xs uppercase tracking-widest mb-3">Preferred Response Method</legend>
                    <div className="grid grid-cols-3 gap-3">
                        <label className="bg-iron-950 border border-silver-500/20 p-3 text-silver-300 text-sm flex items-center gap-2">
                            <input type="radio" name="preferred_contact_method" value="call" defaultChecked className="accent-accent-gold" />
                            Call
                        </label>
                        <label className="bg-iron-950 border border-silver-500/20 p-3 text-silver-300 text-sm flex items-center gap-2">
                            <input type="radio" name="preferred_contact_method" value="text" className="accent-accent-gold" />
                            Text
                        </label>
                        <label className="bg-iron-950 border border-silver-500/20 p-3 text-silver-300 text-sm flex items-center gap-2">
                            <input type="radio" name="preferred_contact_method" value="email" className="accent-accent-gold" />
                            Email
                        </label>
                    </div>
                </fieldset>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-silver-500 text-xs uppercase tracking-widest mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            autoComplete="name"
                            placeholder="Your full name"
                            className="w-full bg-iron-950 border border-silver-500/20 p-4 text-white focus:border-accent-gold focus:outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-silver-500 text-xs uppercase tracking-widest mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            autoComplete="tel"
                            inputMode="tel"
                            placeholder="(405) 364-0601"
                            className="w-full bg-iron-950 border border-silver-500/20 p-4 text-white focus:border-accent-gold focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-silver-500 text-xs uppercase tracking-widest mb-2">Email Address (Optional)</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full bg-iron-950 border border-silver-500/20 p-4 text-white focus:border-accent-gold focus:outline-none transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-silver-500 text-xs uppercase tracking-widest mb-2">Brief details (optional but helpful)</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={3}
                        placeholder="What happened, when, and your biggest concern right now."
                        className="w-full bg-iron-950 border border-silver-500/20 p-4 text-white focus:border-accent-gold focus:outline-none transition-colors"
                    ></textarea>
                </div>

                <div className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        required
                        className="mt-1 h-4 w-4 shrink-0 accent-accent-gold bg-iron-950 border border-silver-500/20"
                    />
                    <label htmlFor="consent" className="text-xs text-silver-500 leading-relaxed">
                        By submitting this form, I consent to communications from Kernal &amp; Associates by
                        phone, email, and text message (including automated technology where permitted by law).
                        Message frequency varies. Message &amp; data rates may apply. Reply STOP to opt out or HELP
                        for help. Consent is not required to hire the firm. I agree to the{' '}
                        <a href="/terms" className="text-accent-gold hover:underline" target="_blank" rel="noopener noreferrer">
                            Terms of Service
                        </a>{' '}and{' '}
                        <a href="/privacy" className="text-accent-gold hover:underline" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                        </a>.
                    </label>
                </div>

                <button
                    type="submit"
                    data-cta={`contact_form_submit_${leadFields.cta_variant || 'control'}`}
                    disabled={status === 'submitting'}
                    className="w-full bg-white text-iron-950 py-4 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'submitting'
                        ? 'Sending...'
                        : leadFields.cta_variant === 'challenger'
                          ? 'Request Rapid Callback'
                          : 'Send Message'}
                </button>

                <p className="text-xs text-silver-500 text-center">
                    During business hours, most intake requests receive an initial response within about 15 minutes.
                </p>

                {status === 'error' && (
                    <p className="text-red-500 text-sm text-center">Sorry, there was a problem sending your message. Please call us directly.</p>
                )}

                <p className="text-xs text-silver-500 text-center pt-4">
                    Do not send highly sensitive or time-critical information through this form.
                </p>
            </form>
        </div>
    )
}

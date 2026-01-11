'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function ContactForm() {
    const router = useRouter()
    const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('submitting')

        const form = e.currentTarget
        const formData = new FormData(form)
        const params = new URLSearchParams()

        // Explicitly convert FormData to URLSearchParams
        for (const [key, value] of formData.entries()) {
            params.append(key, value as string)
        }

        try {
            const response = await fetch('/form-setup.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params.toString(),
            })

            if (response.ok) {
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
        <div className="bg-iron-900 p-8 md:p-12 border border-silver-500/10">
            <h3 className="font-serif text-3xl text-white mb-8">Case Evaluation</h3>
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="subject" value="New Case Evaluation Request - Kernal Law" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-silver-500 text-xs uppercase tracking-widest mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
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
                            className="w-full bg-iron-950 border border-silver-500/20 p-4 text-white focus:border-accent-gold focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-silver-500 text-xs uppercase tracking-widest mb-2">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full bg-iron-950 border border-silver-500/20 p-4 text-white focus:border-accent-gold focus:outline-none transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-silver-500 text-xs uppercase tracking-widest mb-2">Brief details of your situation</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        className="w-full bg-iron-950 border border-silver-500/20 p-4 text-white focus:border-accent-gold focus:outline-none transition-colors"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-white text-iron-950 py-4 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'error' && (
                    <p className="text-red-500 text-sm text-center">Sorry, there was a problem sending your message. Please call us directly.</p>
                )}

                <p className="text-xs text-silver-500 text-center pt-4">
                    All communications are confidential.
                </p>
            </form>
        </div>
    )
}

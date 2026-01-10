import { PageHero } from "../components/PageHero"

export const metadata = {
    title: "Contact Kernal Law | Oklahoma City Criminal Defense",
    description: "Free consultation with Todd Kernal. Located at 1332 SW 89th Street, Oklahoma City, OK 73159. Call 405.364.0601.",
}

export default function ContactPage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            <PageHero
                title="Contact Us"
                subtitle="When immediate action is required. Available for urgent consultations."
            />

            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-silver-500 uppercase tracking-widest text-sm mb-4">Phone</h3>
                            <a href="tel:4053640601" className="block font-serif text-4xl md:text-5xl text-white hover:text-accent-gold transition-colors">
                                405.364.0601
                            </a>
                            <p className="text-silver-500 mt-2 font-light">Available for urgent calls.</p>
                        </div>

                        <div>
                            <h3 className="text-silver-500 uppercase tracking-widest text-sm mb-4">Office Location</h3>
                            <address className="not-italic text-2xl text-white leading-relaxed font-light">
                                1332 SW 89th Street<br />
                                Oklahoma City, OK 73159
                            </address>
                            <div className="mt-8 h-64 w-full bg-iron-900 border border-silver-500/20 grayscale invert-[0.9]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103984.77708518596!2d-97.62228999999999!3d35.37153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b212dd0e04772b%3A0x6b83445472856525!2s1332%20SW%2089th%20St%2C%20Oklahoma%20City%2C%20OK%2073159!5e0!3m2!1sen!2sus!4v1715367890123!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-silver-500 uppercase tracking-widest text-sm mb-4">Direct Email</h3>
                            <a href="mailto:todd@kernallaw.com" className="text-xl text-white hover:text-accent-gold transition-colors">
                                todd@kernallaw.com
                            </a>
                        </div>
                    </div>

                    {/* Netlify Form */}
                    <div className="bg-iron-900 p-8 md:p-12 border border-silver-500/10">
                        <h3 className="font-serif text-3xl text-white mb-8">Case Evaluation</h3>
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            action="/success"
                            className="space-y-6"
                        >
                            <input type="hidden" name="form-name" value="contact" />

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
                                className="w-full bg-white text-iron-950 py-4 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
                            >
                                Send Message
                            </button>

                            <p className="text-xs text-silver-500 text-center pt-4">
                                All communications are confidential.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    )
}

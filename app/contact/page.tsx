import { PageHero } from "../components/PageHero"
import { BreadcrumbTrail } from "../components/BreadcrumbTrail"
import { ContactForm } from "../components/ContactForm"
import { FaqSection } from "../components/FaqSection"
import { LinkGridSection } from "../components/LinkGridSection"
import { MobileConversionBar } from "../components/MobileConversionBar"
import { QuickPathSection } from "../components/QuickPathSection"
import { TrustProofSection } from "../components/TrustProofSection"
import { CONTACT_EMAIL } from "@/lib/contact"

export const metadata = {
    title: "Contact Us | Free Consultation",
    description: "Free consultation with Todd Kernal. Located at 1332 SW 89th Street, Oklahoma City, OK 73159. Call 405.364.0601.",
    alternates: { canonical: '/contact' },
    openGraph: {
        title: "Contact Kernal & Associates | Free Legal Consultation",
        description: "Call, text, or submit a short intake form to reach Kernal & Associates for urgent criminal defense or injury guidance.",
        url: 'https://kernallaw.com/contact',
    },
}

const contactFaqs = [
    {
        question: "Where is your office located?",
        answer: "Our office is located at 1332 SW 89th Street, Oklahoma City, OK 73159, in the southwest part of Oklahoma City. We're easily accessible from I-44 and I-240, with free parking available on-site."
    },
    {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer free initial consultations for both criminal defense and personal injury cases. During this consultation, we'll review your situation, explain your options, and discuss how we can help. There's no obligation and no pressure."
    },
    {
        question: "What areas do you serve?",
        answer: "We serve clients throughout the Oklahoma City metro area, including Norman, Moore, Edmond, Midwest City, Del City, Yukon, and Mustang. We handle cases in Oklahoma County, Cleveland County, Canadian County, and surrounding jurisdictions."
    },
    {
        question: "What should I bring to my first meeting?",
        answer: "For criminal cases, bring any police reports, court documents, or bond paperwork you've received. For personal injury cases, bring accident reports, medical records, insurance information, and photos of any injuries or property damage. If you don't have these documents yet, we can still meet—we'll help you obtain them."
    }
]

const processSteps = [
    {
        step: "Step 1",
        title: "Choose the Fastest Contact Channel",
        description: "Use phone for urgent arrests or active claim pressure. Use form when you need to share detailed facts."
    },
    {
        step: "Step 2",
        title: "Share Timeline and Documents",
        description: "Provide key dates, court papers, insurer communications, and any immediate deadline concerns."
    },
    {
        step: "Step 3",
        title: "Receive a Focused Next-Step Plan",
        description: "You get direct strategy on risk, process timing, and what to do before hearings or recorded statements."
    }
]

const takeaways = [
    "Urgent matters should be called in, not delayed to email.",
    "Structured intake improves legal strategy quality from day one.",
    "Clear first-step guidance is more valuable than generic reassurance.",
    "The sooner counsel is involved, the more options are typically preserved."
]

const relatedLinks = [
    {
        href: "/criminal-defense",
        title: "Criminal Defense Services",
        description: "Review charge-specific defense strategy pages before your consultation.",
        ctaName: "contact_related_criminal_services"
    },
    {
        href: "/personal-injury",
        title: "Personal Injury Services",
        description: "Review injury claim pathways and damages strategy for severe losses.",
        ctaName: "contact_related_injury_services"
    },
    {
        href: "/resources",
        title: "Legal Resource Guides",
        description: "Use practical guides to prepare for your first attorney strategy discussion.",
        ctaName: "contact_related_resources"
    }
]

const intakeReadinessChecklist = [
    "List any urgent deadlines, hearing dates, or insurer response windows.",
    "Bring all citations, warrants, bond documents, or release conditions.",
    "Collect available medical records, crash reports, and treatment updates.",
    "Save photos, videos, and witness contact information in one place.",
    "Do not post case facts publicly while legal strategy is being developed.",
    "Identify the best callback number and safest times to reach you.",
    "Prepare a short timeline of key events in date order.",
    "Flag any prior legal actions that may affect current strategy."
]

const whatToExpect = [
    {
        title: "Rapid Initial Triage",
        description: "Urgent criminal and severe-injury matters are prioritized first so immediate exposure can be stabilized before procedural pressure increases."
    },
    {
        title: "Fact Pattern Clarification",
        description: "We separate confirmed facts from assumptions and identify what documentation is needed to support a defensible strategy."
    },
    {
        title: "Action Plan and Sequence",
        description: "You receive practical next steps for calls, records, deadlines, and communications to protect your case position."
    },
    {
        title: "Representation Fit Discussion",
        description: "Scope, process expectations, and fee structure are discussed clearly so you can make an informed decision without confusion."
    }
]

const contactStandards = [
    {
        title: "No Generic Intake Scripts",
        description: "Your matter is routed based on urgency and legal exposure, not just calendar availability."
    },
    {
        title: "Confidentiality and Discretion",
        description: "We focus on secure communication and practical steps that reduce unnecessary fact disclosure."
    },
    {
        title: "Decision-Focused Guidance",
        description: "The goal is to reduce uncertainty quickly by identifying the highest-impact next actions."
    }
]

const urgentScenarioGuidance = [
    {
        title: "Active Warrant or Recent Arrest",
        description: "Call immediately. The first decisions around appearance, bond, and communication can materially affect exposure."
    },
    {
        title: "Upcoming Court Date",
        description: "Provide hearing date and paperwork early so strategy can be built before procedural options narrow."
    },
    {
        title: "Serious Crash with Ongoing Treatment",
        description: "Preserve records now and avoid insurer over-communication until claim strategy is established."
    },
    {
        title: "Recorded Statement Request",
        description: "Pause and request legal guidance before responding so case position is not weakened unnecessarily."
    }
]

const communicationExpectations = [
    "Urgent calls are prioritized and routed first.",
    "You will receive clear next steps, not generic reassurance.",
    "If additional records are needed, we identify them in priority order.",
    "Representation fit and process expectations are discussed directly.",
]

const afterHoursGuidance = [
    {
        title: "Emergency Safety First",
        description: "If there is immediate safety risk, contact emergency services first. Legal strategy follows once immediate danger is addressed."
    },
    {
        title: "Document While Details Are Fresh",
        description: "Write a factual timeline, save communications, and preserve photos so key facts are not lost overnight."
    },
    {
        title: "Avoid Unnecessary Statements",
        description: "Do not provide broad recorded narratives to third parties before legal guidance is in place."
    },
    {
        title: "Flag Morning Priority in Your Message",
        description: "Include urgency level, deadlines, and contact window so the team can triage efficiently at opening."
    }
]

export default function ContactPage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            <PageHero
                title="Contact Us"
                subtitle="When immediate action is required. Available for urgent consultations."
            />
            <MobileConversionBar
                context="contact_page"
                primaryHref="#contact-form"
                primaryLabel="Open Intake Form"
            />
            <BreadcrumbTrail
                items={[
                    { label: "Home", href: "/" },
                    { label: "Contact" },
                ]}
            />
            <QuickPathSection
                title="Fastest Ways to Reach the Firm"
                subtitle="Choose the channel that matches urgency and information depth so your matter can be routed correctly."
                items={[
                    {
                        badge: "Immediate",
                        title: "Call Now",
                        description: "Best option for active arrests, warrants, or urgent injury decisions.",
                        href: "tel:4053640601",
                        ctaName: "contact_fast_path_call"
                    },
                    {
                        badge: "Quick Update",
                        title: "Text the Office",
                        description: "Send a short summary and callback window for faster routing.",
                        href: "sms:+14053640601",
                        ctaName: "contact_fast_path_text"
                    },
                    {
                        badge: "Detailed Intake",
                        title: "Use the Form",
                        description: "Best for sharing timeline and case detail when it is safe to write.",
                        href: "#contact-form",
                        ctaName: "contact_fast_path_form"
                    }
                ]}
            />

            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Info */}
                    <div className="space-y-12 order-2 lg:order-1">
                        <div>
                            <h3 className="text-silver-500 uppercase tracking-widest text-sm mb-4">Phone</h3>
                            <a href="tel:4053640601" data-cta="contact_page_call_phone" className="block font-serif text-4xl md:text-5xl text-white hover:text-accent-gold transition-colors">
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
                                    title="Map showing Kernal & Associates office at 1332 SW 89th Street, Oklahoma City, OK"
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
                            <a href={`mailto:${CONTACT_EMAIL}`} data-cta="contact_page_email" className="text-xl text-white hover:text-accent-gold transition-colors">
                                {CONTACT_EMAIL}
                            </a>
                        </div>
                    </div>

                    {/* Netlify Form */}
                    <div id="contact-form" className="order-1 lg:order-2 scroll-mt-32">
                        <ContactForm />
                    </div>

                </div>
            </div>

            <section className="py-12 md:py-16 border-y border-silver-500/10 bg-iron-900/30 scroll-mt-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">What Happens After You Contact Us</h2>
                        <p className="text-silver-400 mb-8 max-w-3xl">
                            This intake process is designed to reduce delay and get you case-specific legal direction quickly.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {processSteps.map((item) => (
                                <article
                                    key={item.title}
                                    className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                                >
                                    <p className="text-accent-gold text-[11px] uppercase tracking-[0.2em] mb-2">{item.step}</p>
                                    <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                                    <p className="text-silver-400 leading-relaxed">{item.description}</p>
                                </article>
                            ))}
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {takeaways.map((item) => (
                                <div
                                    key={item}
                                    className="bg-iron-900/70 border border-silver-500/10 p-4 text-silver-300 text-sm leading-relaxed"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="pt-8">
                            <a
                                href="tel:+14053640601"
                                data-cta="contact_page_call_now_large"
                                className="inline-flex items-center justify-center px-8 py-4 border border-silver-500/30 text-white font-bold uppercase tracking-widest hover:border-accent-gold transition-colors"
                            >
                                Call (405) 364-0601
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <TrustProofSection
                ctaPrefix="contact_page"
                title="Validate Trust Before You Decide"
                subtitle="Use case outcomes, reviews, and attorney background to evaluate fit before retaining counsel."
            />

            <section className="py-12 md:py-16 border-y border-silver-500/10 bg-iron-900/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Prepare for a Better First Call</h2>
                        <p className="text-silver-400 mb-8 max-w-3xl">
                            A short preparation pass helps us move faster from intake to strategy. You do not need every item, but each piece of context improves decision quality.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {intakeReadinessChecklist.map((item) => (
                                <li
                                    key={item}
                                    className="bg-iron-900/70 border border-silver-500/10 p-4 text-silver-300 text-sm leading-relaxed"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {whatToExpect.map((item) => (
                                <article
                                    key={item.title}
                                    className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                                >
                                    <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                                    <p className="text-silver-400 leading-relaxed">{item.description}</p>
                                </article>
                            ))}
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {contactStandards.map((item) => (
                                <article
                                    key={item.title}
                                    className="bg-iron-900/70 border border-silver-500/10 p-5"
                                >
                                    <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                                    <p className="text-silver-400 text-sm leading-relaxed">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 border-b border-silver-500/10">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">If Your Matter Is Urgent Right Now</h2>
                        <p className="text-silver-400 mb-8 max-w-3xl">
                            Use this routing guide to choose the fastest channel and reduce avoidable risk during the first communication window.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                            {urgentScenarioGuidance.map((item) => (
                                <article
                                    key={item.title}
                                    className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                                >
                                    <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                                    <p className="text-silver-400 leading-relaxed">{item.description}</p>
                                </article>
                            ))}
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {communicationExpectations.map((item) => (
                                <li
                                    key={item}
                                    className="bg-iron-900/70 border border-silver-500/10 p-4 text-silver-300 text-sm leading-relaxed"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <h3 className="font-serif text-2xl text-white mb-3">After-Hours Guidance</h3>
                            <p className="text-silver-400 mb-6 max-w-3xl">
                                Some legal events happen outside office hours. This short protocol helps preserve position until direct attorney communication is available.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {afterHoursGuidance.map((item) => (
                                    <article
                                        key={item.title}
                                        className="bg-iron-900 border border-silver-500/15 p-5"
                                    >
                                        <h4 className="font-serif text-xl text-white mb-2">{item.title}</h4>
                                        <p className="text-silver-400 text-sm leading-relaxed">{item.description}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LinkGridSection
                title="Prepare Before Your Consultation"
                subtitle="These pages help you gather the right context and documents before your strategy call."
                items={relatedLinks}
                columns="three"
            />

            {/* FAQ Section */}
            <FaqSection
                practiceArea="contact"
                title="Common Questions"
                subtitle="Quick answers about working with Kernal & Associates."
                faqs={[
                    ...contactFaqs,
                    {
                        question: "Can I contact you if I only have partial information right now?",
                        answer: "Yes. Many urgent matters begin with limited records. We can still help you prioritize what to gather first and what to avoid doing before strategy is set."
                    },
                    {
                        question: "Should I talk to insurance before contacting a lawyer?",
                        answer: "In serious matters, it is usually safer to get legal guidance first. Early recorded statements can lock in narratives before full facts and injuries are understood."
                    },
                    {
                        question: "What if my court date is very soon?",
                        answer: "Contact us immediately by phone and flag the date in your first message. Time-sensitive matters are triaged so urgent procedural decisions are addressed quickly."
                    },
                    {
                        question: "Can I text sensitive case details?",
                        answer: "Use discretion with detailed facts over text. A brief summary is useful for routing, but full strategy details are better handled in direct consultation."
                    },
                    {
                        question: "What if I have both criminal and injury concerns from one event?",
                        answer: "Tell us that immediately during intake. Coordinated planning is important so communications in one process do not unintentionally hurt the other."
                    },
                    {
                        question: "Can someone contact the office on my behalf?",
                        answer: "Yes, a family member can initiate contact, especially in urgent scenarios. We will still need direct client communication for case-specific legal strategy."
                    },
                    {
                        question: "How detailed should my first message be?",
                        answer: "Keep it concise and factual: who, what, when, and urgency. Full strategic discussion is more effective once initial context is verified."
                    }
                ]}
            />
        </main>
    )
}

import { PageHero } from "../../components/PageHero"
import { FaqSection } from "../../components/FaqSection"
import Link from "next/link"

export const metadata = {
    title: "Criminal Defense | Kernal & Associates",
    description: "Oklahoma Criminal Defense Attorney. Felonies, Drug Charges, DUI, and Violent Crimes. 25+ years of trial experience protecting your rights.",
}

const defenseAreas = [
    {
        category: "Violent Crimes",
        description: "When you are accused of violence, the system moves quickly to label you a threat. We move faster to dismantle their narrative.",
        items: ["Murder & Manslaughter", "Assault & Battery", "Domestic Abuse", "Robbery with Dangerous Weapon", "Self-Defense Claims"]
    },
    {
        category: "Substance Offenses / DUI",
        description: "From simple possession to complex trafficking conspiracies. We scrutinize every search warrant, traffic stop, and lab result.",
        items: ["DUI / APC / DWI", "Drug Trafficking & Distribution", "Possession with Intent", "Prescription Fraud", "Asset Forfeiture Defense"]
    },
    {
        category: "Property & Financial Crimes",
        description: "White-collar charges often hinge on intent. We prove that a business mistake is not a criminal act.",
        items: ["Burglary (1st & 2nd Degree)", "Larceny & Theft", "Embezzlement", "White Collar Fraud", "Identity Theft"]
    },
    {
        category: "Post-Conviction Relief",
        description: "A conviction does not have to be the end of your story. We fight to clear records and restore rights.",
        items: ["Expungements", "Pardons", "Parole Violations", "Probation Revocation", "Appeals"]
    }
]

const criminalDefenseFaqs = [
    {
        question: "What should I do if I'm arrested in Oklahoma?",
        answer: "Remain silent and immediately ask for an attorney. Do not speak to police, sign any documents, or consent to searches without legal counsel present. The statements you make can and will be used against you. Call our office as soon as possible—we can begin protecting your rights immediately."
    },
    {
        question: "How much does a criminal defense attorney cost in Oklahoma?",
        answer: "Criminal defense fees vary based on the complexity of your case, the severity of charges, and whether your case goes to trial. We offer competitive flat-fee arrangements for many cases and provide free initial consultations to discuss your situation and options."
    },
    {
        question: "Can I get my criminal record expunged in Oklahoma?",
        answer: "Yes, Oklahoma law allows expungement for many offenses, including dismissed cases, acquittals, some misdemeanors, and certain non-violent felonies after waiting periods. Expungement seals your record from public view, helping with employment, housing, and professional licensing."
    },
    {
        question: "What's the difference between a felony and misdemeanor in Oklahoma?",
        answer: "Misdemeanors are less serious offenses punishable by up to one year in county jail and fines up to $1,000. Felonies are more serious crimes that carry potential prison sentences exceeding one year and can result in loss of civil rights, including voting and firearm ownership."
    },
    {
        question: "Do I need a lawyer for a DUI in Oklahoma?",
        answer: "Absolutely. A DUI conviction carries severe consequences: license suspension, mandatory ignition interlock devices, fines up to $5,000, potential jail time, and a permanent criminal record. An experienced DUI attorney can challenge the traffic stop, field sobriety tests, and breathalyzer results."
    },
    {
        question: "What happens at an Oklahoma preliminary hearing?",
        answer: "A preliminary hearing determines whether the State has probable cause to proceed with felony charges. The prosecutor presents evidence, and your attorney can cross-examine witnesses and challenge the evidence. Many cases are won or significantly reduced at this critical stage."
    },
    {
        question: "Can drug charges be dropped or reduced in Oklahoma?",
        answer: "Yes. We regularly achieve dismissals or reductions by challenging unlawful searches, improper evidence handling, or lack of knowledge/intent. Oklahoma also offers drug court and deferred prosecution programs that can result in dismissed charges upon successful completion."
    },
    {
        question: "How long does a criminal case take in Oklahoma?",
        answer: "Simple misdemeanors may resolve in weeks to months. Complex felonies can take 6-18 months or longer, especially if proceeding to trial. We work efficiently while never sacrificing the quality of your defense—sometimes taking time is strategically critical to building the strongest case."
    }
]

export default function CriminalDefensePage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            <PageHero
                title="Criminal Defense"
                subtitle="When the state brings its full weight against you, we provide the shield."
                variant="criminal"
            />

            <div className="container mx-auto px-6 py-12 md:py-24">

                {/* Intro Section */}
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">&quot;Presumed Innocent&quot; is a beautiful theory. <br /><span className="text-silver-500 italic">We make it a reality.</span></h2>
                    <p className="text-silver-400 text-lg leading-relaxed">
                        The government has unlimited resources, investigators, and prosecutors working to convict you. You need an equalizer.
                        At Kernal & Associates, we do not simply process files. We investigate, we litigate, and we go to trial.
                        Whether you are facing a misdemeanor DUI or a life-altering felony, our approach is identical: <strong>complete, aggressive defense.</strong>
                    </p>
                </div>

                {/* Expanded Grid */}
                <div className="grid grid-cols-1 gap-12">
                    {defenseAreas.map((area, i) => (
                        <div key={i} className="group bg-iron-900 border border-silver-500/10 hover:border-accent-gold/50 transition-colors p-8 md:p-12 relative overflow-hidden">
                            <div className="grid md:grid-cols-12 gap-8 md:gap-16 relative z-10">
                                <div className="md:col-span-5">
                                    <h3 className="font-serif text-3xl text-white mb-4 group-hover:text-silver-100 transition-colors">{area.category}</h3>
                                    <p className="text-silver-500 leading-relaxed mb-6">{area.description}</p>
                                    <div className="w-12 h-1 bg-accent-gold/50 group-hover:w-24 transition-all duration-500"></div>
                                </div>
                                <div className="md:col-span-7">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {area.items.map((item, j) => (
                                            <li key={j} className="flex items-center text-silver-400 text-sm tracking-wide bg-iron-950/50 p-3 rounded border border-white/5">
                                                <span className="w-1.5 h-1.5 bg-silver-500 rounded-full mr-3 group-hover:bg-accent-gold transition-colors"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* The Defense Process Section */}
            <section className="py-16 md:py-24 bg-iron-900/50 border-y border-silver-500/10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 text-center">
                            The Criminal Defense Process
                        </h2>
                        <p className="text-silver-400 text-center mb-12 max-w-2xl mx-auto">
                            Understanding what happens after an arrest helps you make better decisions. Here&apos;s how we protect you at every stage.
                        </p>

                        <div className="grid gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Arrest & Initial Appearance",
                                    description: "Within 48 hours of arrest, you'll appear before a judge to hear charges and set bond. We work to secure your release and begin building your defense immediately."
                                },
                                {
                                    step: "02",
                                    title: "Investigation & Discovery",
                                    description: "We analyze police reports, witness statements, body camera footage, and forensic evidence. Every detail matters—we find the weaknesses in the State's case."
                                },
                                {
                                    step: "03",
                                    title: "Preliminary Hearing",
                                    description: "For felonies, the State must demonstrate probable cause. This is often where we challenge evidence and cross-examine witnesses, sometimes reducing or dismissing charges."
                                },
                                {
                                    step: "04",
                                    title: "Negotiation or Trial",
                                    description: "We negotiate from a position of strength, but we're always prepared for trial. If the State won't offer a fair resolution, we take them to a jury."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 bg-iron-950/50 border border-silver-500/10 hover:border-accent-gold/30 transition-colors">
                                    <div className="flex-shrink-0">
                                        <span className="font-serif text-2xl text-accent-gold">{item.step}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                                        <p className="text-silver-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cross-link to Personal Injury */}
            <section className="py-12 border-b border-silver-500/10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-iron-900 border border-silver-500/10 p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="flex-1">
                                <h3 className="font-serif text-xl text-white mb-2">
                                    Were You Injured in the Incident?
                                </h3>
                                <p className="text-silver-400">
                                    If your arrest followed a car accident, workplace incident, or other situation where you were injured, you may have a personal injury claim in addition to your criminal defense needs.
                                </p>
                            </div>
                            <Link
                                href="/practice/personal-injury"
                                className="inline-flex items-center text-accent-gold hover:text-white transition-colors text-sm uppercase tracking-widest whitespace-nowrap"
                            >
                                View Injury Services
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FaqSection
                faqs={criminalDefenseFaqs}
                practiceArea="criminal-defense"
                subtitle="Get answers to common questions about criminal charges in Oklahoma."
            />

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-silver-500/10 border border-silver-500/20 p-12 text-center">
                        <h3 className="font-serif text-3xl text-white mb-4">Your future fight starts today.</h3>
                        <p className="text-silver-400 mb-8 max-w-2xl mx-auto font-light">Do not speak to investigators. Do not make a statement. Call our office immediately.</p>
                        <Link href="/contact" className="inline-block px-12 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors">
                            Start Your Defense
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

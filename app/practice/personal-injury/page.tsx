import { PageHero } from "../../components/PageHero"
import { FaqSection } from "../../components/FaqSection"
import Link from "next/link"

export const metadata = {
    title: "Personal Injury | Kernal & Associates",
    description: "Oklahoma Personal Injury Attorney. Car Accidents, Oil Field Injuries, Wrongful Death. No fee unless we win your case.",
}

const injuryAreas = [
    {
        category: "Motor Vehicle Accidents",
        description: "Insurance companies act friendly until it's time to pay. We handle the adjusters so you can focus on healing.",
        items: ["Car Accidents", "Commercial Trucking Crashes", "Motorcycle Accidents", "Uninsured Motorist Claims", "Pedestrian Accidents"]
    },
    {
        category: "Oil Field & Industrial",
        description: "Oklahoma's most dangerous jobs require the strongest legal protection. We understand the specific regulations of the oil patch.",
        items: ["Oil Field Explosions", "Rig Platform Injuries", "Heavy Machinery Accidents", "Third-Party Liability Claims", "Refinery Accidents"]
    },
    {
        category: "Premises & Negligence",
        description: "Property owners have a duty to keep you safe. When they fail, we hold them accountable for the results.",
        items: ["Slip & Fall", "Negligent Security", "Dog Bites", "Defective Products", "Nursing Home Negligence"]
    },
    {
        category: "Catastrophic & Wrongful Death",
        description: "For families facing the ultimate loss, we pursue justice with dignity, ensuring financial security for those left behind.",
        items: ["Wrongful Death Claims", "Traumatic Brain Injury (TBI)", "Spinal Cord Injuries", "Amputations", "Severe Burns"]
    }
]

const personalInjuryFaqs = [
    {
        question: "How long do I have to file a personal injury claim in Oklahoma?",
        answer: "Oklahoma's statute of limitations for most personal injury claims is two years from the date of injury. Wrongful death claims must also be filed within two years. However, some cases have shorter deadlines—claims against government entities require notice within one year. Contact an attorney immediately to protect your rights."
    },
    {
        question: "What is a contingency fee, and how does it work?",
        answer: "A contingency fee means you pay nothing upfront and no attorney fees unless we win your case. Our fee is a percentage of your recovery. This arrangement allows injured people to access quality legal representation regardless of their financial situation. We also advance all case costs."
    },
    {
        question: "How much is my personal injury case worth?",
        answer: "Case value depends on several factors: severity of injuries, medical expenses, lost wages, pain and suffering, permanent impairment, and insurance coverage available. We thoroughly document all damages and work with medical and economic experts to maximize your recovery."
    },
    {
        question: "Should I accept the insurance company's first settlement offer?",
        answer: "Almost never. Initial offers are typically far below fair value. Insurance adjusters are trained to settle quickly before you understand the full extent of your injuries or consult an attorney. Once you accept a settlement, you cannot seek additional compensation—even if your condition worsens."
    },
    {
        question: "What if I was partially at fault for the accident?",
        answer: "Oklahoma follows 'modified comparative negligence.' You can still recover damages if you're less than 51% at fault, though your compensation is reduced by your percentage of fault. Insurance companies often exaggerate victim fault to reduce payouts—we fight these tactics aggressively."
    },
    {
        question: "How long does a personal injury case typically take?",
        answer: "Simple cases may settle in 3-6 months. Complex cases involving severe injuries, disputed liability, or multiple defendants can take 1-2 years or longer. We never rush settlements—we wait until maximum medical improvement to ensure you receive full compensation for all damages."
    },
    {
        question: "What damages can I recover in a personal injury case?",
        answer: "You may recover economic damages (medical bills, lost wages, future medical care, reduced earning capacity) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life). In cases involving egregious conduct, punitive damages may also be available."
    },
    {
        question: "Do I need a lawyer for an oil field injury in Oklahoma?",
        answer: "Oil field cases are uniquely complex, often involving multiple contractors, specialized equipment, and industry-specific regulations. Workers' compensation may not be your only option—third-party claims against equipment manufacturers, site owners, or other contractors can significantly increase your recovery."
    }
]

export default function PersonalInjuryPage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            <PageHero
                title="Personal Injury"
                subtitle="Recovering the compensation you deserve after a life-altering accident."
                variant="injury"
            />

            <div className="container mx-auto px-6 py-12 md:py-24">

                {/* Intro Section */}
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">They have a team of adjusters. <br /><span className="text-silver-500 italic">You have us.</span></h2>
                    <p className="text-silver-400 text-lg leading-relaxed">
                        An accident can destroy your physical health and your financial stability in seconds.
                        Whether it is a distraction on I-35 or a failure in the oil field, the negligence of others should not cost you your future.
                        Kernal & Associates treats personal injury with the same aggressive, trial-ready mindset we bring to the courtroom. We don't ask for fair settlements—we demand them.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {injuryAreas.map((area, i) => (
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

            {/* What to Expect Section */}
            <section className="py-16 md:py-24 bg-iron-900/50 border-y border-silver-500/10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 text-center">
                            What to Expect After Your Accident
                        </h2>
                        <p className="text-silver-400 text-center mb-12 max-w-2xl mx-auto">
                            The injury claims process can feel overwhelming. Here's how we guide you from first call to final resolution.
                        </p>

                        <div className="grid gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Free Case Evaluation",
                                    description: "We review your accident, injuries, and insurance coverage at no cost. You'll know within 24 hours whether you have a viable case and what it may be worth."
                                },
                                {
                                    step: "02",
                                    title: "Investigation & Documentation",
                                    description: "We gather police reports, medical records, witness statements, and expert opinions. We handle all communication with insurance companies so you can focus on recovery."
                                },
                                {
                                    step: "03",
                                    title: "Medical Treatment Support",
                                    description: "We connect you with specialists who work on a lien basis—you get treatment now and pay from your settlement later. Your health comes first."
                                },
                                {
                                    step: "04",
                                    title: "Demand & Negotiation",
                                    description: "Once you reach maximum medical improvement, we calculate full damages and demand fair compensation. Most cases settle here, but we're always prepared for trial."
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

            {/* Types of Compensation */}
            <section className="py-16 md:py-24 border-b border-silver-500/10">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-12 text-center">
                            Types of Compensation Available
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-iron-900 border border-silver-500/10 p-8">
                                <h3 className="font-serif text-xl text-white mb-4 flex items-center">
                                    <span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>
                                    Economic Damages
                                </h3>
                                <ul className="space-y-3 text-silver-400">
                                    <li>• Medical bills (past, present, and future)</li>
                                    <li>• Lost wages and reduced earning capacity</li>
                                    <li>• Property damage and repair costs</li>
                                    <li>• Out-of-pocket expenses</li>
                                    <li>• In-home care and assistance</li>
                                </ul>
                            </div>
                            <div className="bg-iron-900 border border-silver-500/10 p-8">
                                <h3 className="font-serif text-xl text-white mb-4 flex items-center">
                                    <span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>
                                    Non-Economic Damages
                                </h3>
                                <ul className="space-y-3 text-silver-400">
                                    <li>• Pain and suffering</li>
                                    <li>• Emotional distress and mental anguish</li>
                                    <li>• Loss of enjoyment of life</li>
                                    <li>• Loss of consortium (family claims)</li>
                                    <li>• Permanent scarring or disfigurement</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cross-link to Criminal Defense */}
            <section className="py-12 border-b border-silver-500/10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-iron-900 border border-silver-500/10 p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="flex-1">
                                <h3 className="font-serif text-xl text-white mb-2">
                                    Facing Criminal Charges After the Accident?
                                </h3>
                                <p className="text-silver-400">
                                    If you're facing DUI, reckless driving, or other charges from the same incident, we provide complete criminal defense representation to protect your record and your injury claim.
                                </p>
                            </div>
                            <Link
                                href="/practice/criminal-defense"
                                className="inline-flex items-center text-accent-gold hover:text-white transition-colors text-sm uppercase tracking-widest whitespace-nowrap"
                            >
                                View Defense Services
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
                faqs={personalInjuryFaqs}
                practiceArea="personal-injury"
                subtitle="Get answers to common questions about injury claims in Oklahoma."
            />

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-accent-gold/10 border border-accent-gold/20 p-12 text-center">
                        <h3 className="font-serif text-3xl text-accent-gold mb-4">No Recovery, No Fee.</h3>
                        <p className="text-silver-400 mb-8 max-w-2xl mx-auto">We handle personal injury cases on a contingency basis. You do not pay us a dime unless we secure a settlement or verdict for you.</p>
                        <Link href="/contact" className="inline-block px-12 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors">
                            Free Case Evaluation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

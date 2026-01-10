import { PageHero } from "../../components/PageHero"
import Link from "next/link"

export const metadata = {
    title: "Personal Injury | Kernal & Associates",
    description: "Oklahoma Personal Injury Attorney. Car Accidents, Oil Field Injuries, Wrongful Death.",
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

                <div className="mt-24 bg-accent-gold/10 border border-accent-gold/20 p-12 text-center">
                    <h3 className="font-serif text-3xl text-accent-gold mb-4">No Recovery, No Fee.</h3>
                    <p className="text-silver-400 mb-8 max-w-2xl mx-auto">We handle personal injury cases on a contingency basis. You do not pay us a dime unless we secure a settlement or verdict for you.</p>
                    <Link href="/contact" className="inline-block px-12 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors">
                        Free Case Evaluation
                    </Link>
                </div>
            </div>
        </main>
    )
}

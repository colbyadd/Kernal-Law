import { PageHero } from "../../components/PageHero"
import Link from "next/link"

export const metadata = {
    title: "Criminal Defense | Kernal & Associates",
    description: "Okahoma Criminal Defense Attorney. Felonies, Drug Charges, DUI, and Violent Crimes.",
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
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">"Presumed Innocent" is a beautiful theory. <br /><span className="text-silver-500 italic">We make it a reality.</span></h2>
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

                <div className="mt-24 bg-silver-500/10 border border-silver-500/20 p-12 text-center">
                    <h3 className="font-serif text-3xl text-white mb-4">Your future fights start today.</h3>
                    <p className="text-silver-400 mb-8 max-w-2xl mx-auto font-light">Do not speak to investigators. Do not make a statement. Call our office immediately.</p>
                    <Link href="/contact" className="inline-block px-12 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors">
                        Start Your Defense
                    </Link>
                </div>
            </div>
        </main>
    )
}

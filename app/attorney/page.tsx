import { PageHero } from "../components/PageHero"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: "Todd Kernal | Attorney Profile | Kernal Law",
    description: "Todd Kernal has served as a criminal defense lawyer for nearly 26 years. A graduate of OCU Law, he defends constitutional rights across Oklahoma.",
}

export default function AttorneyPage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            <PageHero
                title="Todd Kernal"
                subtitle="Criminal Defense & Personal Injury | 26 Years of Experience"
                variant="bio"
            />

            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Sidebar / Image Column */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="relative aspect-[3/4] w-full overflow-hidden grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-700 ease-out">
                            <Image
                                src="/images/todd-kernal-lhl.jpg"
                                alt="Todd Kernal"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-serif text-2xl text-white border-b border-silver-500/20 pb-4">Credentials</h3>
                            <ul className="space-y-4 text-silver-400 text-sm tracking-wide">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                                    Member, Oklahoma Bar Association
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                                    Member, Seminole Nation of Oklahoma
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                                    Super Lawyers Recognition
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                                    J.D., Oklahoma City University
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bio Content Column */}
                    <div className="lg:col-span-8 space-y-8 text-lg text-silver-400 font-light leading-relaxed">

                        <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-white first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]">
                            Todd Kernal has worked as a criminal defense lawyer for nearly 26 years. He has extensive experience helping his clients navigate through the complex civil and criminal law issues surrounding a DUI arrest. He also has a long history of defending his clients against drug, sex and general felony charges.
                        </p>

                        <h3 className="text-2xl font-serif text-white pt-8">A Career Born from Injustice</h3>
                        <p>
                            Todd started his law career after a run-in with an unfair landlord while in college. The landlord refused to refund his damage deposit. So, Todd went to the law library — after having to ask for directions — and started doing research. He wrote the landlord a letter, explaining the law and why he was legally entitled to the deposit. Two days later, the deposit was returned. That’s when Todd decided to go to law school.
                        </p>

                        <blockquote className="border-l-2 border-accent-gold pl-8 my-12 italic text-xl text-white/90">
                            "Many lawyers do not like to practice criminal law because they feel it is beneath them. I believe that all defendants deserve the full protection of the United States and Oklahoma Constitutions."
                        </blockquote>

                        <h3 className="text-2xl font-serif text-white pt-8">Unrelenting Advocacy</h3>
                        <p>
                            While in law school, Todd interned in a criminal law practice and it was a perfect fit. He enjoys being in the courtroom and fighting for his clients every day, and he prides himself on his ethics and his ability to research and prepare a case for the best possible outcome for the client.
                        </p>

                        <h3 className="text-2xl font-serif text-white pt-8">Personal Life</h3>
                        <p>
                            Todd is originally from Artesia, New Mexico, and was a rugby player at New Mexico State University. He was born in Alaska and lived there until he moved to New Mexico just before high school. His passion for motorcycles began with a 1969 Suzuki T90, maintained with money from an upholstery shop job.
                        </p>
                        <p>
                            Todd’s wife, Erin, is a certified public accountant. Todd and Erin have two children, Katie and Zachary.
                        </p>

                        <div className="pt-12">
                            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors">
                                Contact Todd Kernal
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

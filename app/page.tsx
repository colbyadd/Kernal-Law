import type { Metadata } from 'next'
import Link from 'next/link'
import { CinematicHero } from './components/CinematicHero'
import { FaqSection } from './components/FaqSection'
import { LinkGridSection } from './components/LinkGridSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { TrustProofSection } from './components/TrustProofSection'

export const metadata: Metadata = {
  title: 'Oklahoma Criminal Defense Lawyer',
  description:
    'Oklahoma criminal defense representation for DUI, felony charges, drug offenses, warrants, and probation matters, with selected serious-injury representation.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Oklahoma Criminal Defense Lawyer | Kernal & Associates',
    description:
      'Criminal defense for DUI, felony charges, drug offenses, warrants, and probation matters, with selected serious-injury representation.',
    url: 'https://kernallaw.com',
  },
}

const homeFaqs = [
  {
    question: 'How soon should I call a lawyer after an arrest or serious accident?',
    answer:
      'Call as soon as you can. Early advice can help protect your rights, preserve evidence, and identify court, license, or insurance deadlines.',
  },
  {
    question: 'What should I gather before contacting the firm?',
    answer:
      'Bring the documents you have, including citations, court notices, release papers, crash reports, photographs, medical information, and insurance communications. Do not wait to call just because the file is incomplete.',
  },
  {
    question: 'Do I need to wait until criminal charges are filed?',
    answer:
      'No. If you are under investigation or have been arrested, counsel may be able to address questioning, evidence, release terms, or an upcoming court date before formal charges are filed.',
  },
  {
    question: 'What if one event involves both criminal and injury issues?',
    answer:
      'Tell the attorney about both. A statement or decision made in one matter can affect the other, so the two should be evaluated together.',
  },
  {
    question: 'Is information on this site legal advice?',
    answer:
      'No. The site provides general Oklahoma information. Advice depends on the facts, documents, court, policy language, and deadlines in your matter.',
  },
]

const relatedLinks = [
  {
    href: '/resources/what-to-do-after-arrest-oklahoma',
    title: 'What to Do After an Arrest',
    description: 'The first calls, papers, release terms, and deadlines to deal with after an Oklahoma arrest.',
    ctaName: 'home_related_arrest_guide',
  },
  {
    href: '/resources/oklahoma-dui-process',
    title: 'The Oklahoma DUI Process',
    description: 'What may happen in the criminal case and the separate driver-license matter.',
    ctaName: 'home_related_dui_guide',
  },
  {
    href: '/resources/what-to-do-after-car-accident-oklahoma',
    title: 'What to Do After a Serious Crash',
    description: 'A checklist for medical care, photographs, reports, expenses, and insurance calls.',
    ctaName: 'home_related_crash_guide',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-iron-950">
      <CinematicHero />

      <section className="border-b border-silver-500/10 bg-iron-950/70 py-10 md:py-14 lg:hidden">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 md:mb-9">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-gold">
                What Brought You Here?
              </p>
              <h2 className="max-w-3xl font-serif text-3xl text-white md:text-4xl">
                Start with the page that fits your situation.
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
              <article className="border border-accent-gold/35 bg-iron-900 p-6 md:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-gold">
                  Primary Practice
                </p>
                <h3 className="mt-3 font-serif text-2xl text-white md:text-3xl">
                  Arrested, investigated, or facing a court date?
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-silver-400">
                  If you were arrested, learned you are under investigation, or have a court date, start here.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href="/criminal-defense"
                    data-cta="home_path_criminal_overview"
                    className="inline-flex min-h-11 items-center justify-center bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-iron-950 transition-colors hover:bg-accent-gold"
                  >
                    Criminal Defense Overview
                  </Link>
                  <Link
                    href="/criminal-defense/dui-dwi"
                    data-cta="home_path_dui"
                    className="text-link px-1 py-2 text-sm text-silver-300 transition-colors hover:text-white"
                  >
                    DUI / DWI
                  </Link>
                  <Link
                    href="/criminal-defense/warrants"
                    data-cta="home_path_warrants"
                    className="text-link px-1 py-2 text-sm text-silver-300 transition-colors hover:text-white"
                  >
                    Warrants
                  </Link>
                  <Link
                    href="/criminal-defense/drug-charges"
                    data-cta="home_path_drug_charges"
                    className="text-link px-1 py-2 text-sm text-silver-300 transition-colors hover:text-white"
                  >
                    Drug Charges
                  </Link>
                </div>
              </article>

              <article className="border border-silver-500/15 bg-iron-900/70 p-6 md:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-silver-500">
                  Selected Matters
                </p>
                <h3 className="mt-3 font-serif text-2xl text-white">Seriously injured?</h3>
                <p className="mt-4 leading-relaxed text-silver-400">
                  The firm also handles selected car, truck, motorcycle, and other serious-injury claims.
                </p>
                <Link
                  href="/personal-injury"
                  data-cta="home_path_injury_overview"
                  className="mt-6 inline-flex min-h-11 items-center justify-center border border-silver-500/35 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/60 hover:bg-white/5"
                >
                  Personal Injury Overview
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-start">
            <div>
              <p className="text-accent-gold text-xs uppercase tracking-[0.2em] mb-4">Todd Kernal</p>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Nearly 26 years in criminal defense</h2>
              <div className="space-y-5 text-silver-400 leading-relaxed">
                <p>
                  Todd Kernal defends people charged with DUI, drug offenses, sex offenses, and other
                  felonies. His practice is centered on the courtroom, and he believes
                  every person accused of a crime deserves the full protection of the United States and Oklahoma Constitutions.
                </p>
                <p>
                  Todd also represents people with serious injury claims. An oil field accident gave him a
                  personal view of what an injury can mean for work, family, and daily life.
                </p>
              </div>
              <Link
                href="/attorney"
                data-cta="home_read_attorney_bio"
                className="inline-block mt-8 text-white border-b border-white pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors uppercase tracking-widest text-sm"
              >
                Meet Todd Kernal
              </Link>
            </div>

            <blockquote className="border-l-2 border-accent-gold pl-6 md:pl-8 text-xl md:text-2xl font-serif text-white leading-relaxed">
              &quot;If I don&apos;t stand up for my clients and protect their constitutional rights, then everyone loses.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <TrustProofSection
        ctaPrefix="home"
        title="Check the Firm Before You Call"
        subtitle="Read Todd's background, representative results, and Google reviews."
      />

      <section className="py-16 md:py-24 bg-iron-900 border-y border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-end mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-white">Practice Areas</h2>
              <Link
                href="/practice"
                data-cta="home_view_all_practice_areas"
                className="hidden md:block text-silver-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-silver-500/20 border border-silver-500/20">
              {[
                { title: 'Criminal Defense', desc: 'Defense for felony, misdemeanor, warrant, and probation matters.', href: '/criminal-defense' },
                { title: 'DUI & Traffic', desc: 'Criminal charges and related driver-license concerns.', href: '/criminal-defense/dui-dwi' },
                { title: 'Drug Charges', desc: 'Possession, distribution, and search-and-seizure issues.', href: '/criminal-defense/drug-charges' },
                { title: 'Selected Personal Injury', desc: 'Serious crash, motorcycle, truck, and other injury claims.', href: '/personal-injury' },
              ].map((practice, index) => (
                <Link
                  key={practice.title}
                  href={practice.href}
                  data-cta={`home_practice_${index + 1}`}
                  className="bg-iron-900 p-8 hover:bg-iron-800 transition-colors group block"
                >
                  <h3 className="font-serif text-xl text-white mb-4">{practice.title}</h3>
                  <p className="text-silver-400 text-sm leading-relaxed">{practice.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LinkGridSection
        title="Not Ready to Call? Read This First."
        subtitle="Short guides for the first days after an arrest, DUI, or serious crash."
        items={relatedLinks}
        columns="three"
      />

      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Common questions about timing, documents, and the first conversation."
        faqs={homeFaqs}
        practiceArea="home"
      />

      <TestimonialsSection />
    </main>
  )
}

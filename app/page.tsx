import type { Metadata } from 'next'
import Link from 'next/link'
import { CinematicHero } from './components/CinematicHero'
import { FaqSection } from './components/FaqSection'
import { LinkGridSection } from './components/LinkGridSection'
import { MobileConversionBar } from './components/MobileConversionBar'
import { QuickPathSection } from './components/QuickPathSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { TrustProofSection } from './components/TrustProofSection'

export const metadata: Metadata = {
  title: 'Oklahoma Criminal Defense Lawyer & Personal Injury Attorney',
  description:
    'Oklahoma criminal defense and personal injury representation for DUI, felony charges, car crashes, truck crashes, and wrongful death claims.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Oklahoma Criminal Defense Lawyer & Personal Injury Attorney | Kernal & Associates',
    description:
      'Oklahoma representation for criminal charges and serious injury claims, including DUI, felonies, car accidents, truck accidents, and wrongful death.',
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
    href: '/criminal-defense',
    title: 'Criminal Defense',
    description: 'Information about DUI, drug charges, warrants, probation issues, and other Oklahoma criminal cases.',
    ctaName: 'home_related_criminal_hub',
  },
  {
    href: '/personal-injury',
    title: 'Personal Injury',
    description: 'Information about car crashes, commercial truck collisions, serious injuries, and wrongful death.',
    ctaName: 'home_related_injury_hub',
  },
  {
    href: '/resources',
    title: 'Legal Guides',
    description: 'Practical checklists for the first days after an arrest, DUI, or vehicle crash.',
    ctaName: 'home_related_resources',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-iron-950">
      <CinematicHero />
      <MobileConversionBar context="home" primaryHref="/contact" primaryLabel="Request Consultation" />

      <QuickPathSection
        title="How Can We Help?"
        subtitle="Choose the option closest to your situation."
        items={[
          {
            badge: 'Criminal Defense',
            title: 'Arrested or Under Investigation',
            description: 'Learn what to do now and how Oklahoma criminal cases move forward.',
            href: '/criminal-defense',
            ctaName: 'home_quick_path_criminal',
          },
          {
            badge: 'Personal Injury',
            title: 'Injured in a Crash',
            description: 'Preserve medical, scene, and insurance records before signing a release.',
            href: '/personal-injury',
            ctaName: 'home_quick_path_injury',
          },
          {
            badge: 'Contact',
            title: 'Speak With an Attorney',
            description: 'Request a confidential consultation about your matter.',
            href: '/contact',
            ctaName: 'home_quick_path_contact',
          },
        ]}
      />

      <section className="py-16 md:py-24 border-y border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-start">
            <div>
              <p className="text-accent-gold text-xs uppercase tracking-[0.2em] mb-4">Todd Kernal</p>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Nearly 26 years in criminal defense</h2>
              <div className="space-y-5 text-silver-400 leading-relaxed">
                <p>
                  Todd Kernal has spent nearly 26 years defending people charged with DUI, drug offenses,
                  sex offenses, and other felonies. He is at home in the courtroom and believes every person
                  accused of a crime deserves the full protection of the United States and Oklahoma Constitutions.
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
        title="Learn More About the Firm"
        subtitle="Read Todd's background, representative results, and verified Google reviews."
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
                { title: 'Personal Injury', desc: 'Claims arising from negligence, crashes, and oil field injuries.', href: '/personal-injury' },
                { title: 'DUI & Traffic', desc: 'Criminal charges and related driver-license concerns.', href: '/criminal-defense/dui-dwi' },
                { title: 'Drug Charges', desc: 'Possession, distribution, and search-and-seizure issues.', href: '/criminal-defense/drug-charges' },
                { title: 'Violent Crimes', desc: 'Defense against assault, battery, and other serious charges.', href: '/criminal-defense' },
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
        title="Start With the Right Information"
        subtitle="Practice pages and legal guides for common Oklahoma matters."
        items={relatedLinks}
        columns="three"
      />

      <FaqSection
        title="Frequently Asked Questions"
        subtitle="A few things to know before you call."
        faqs={homeFaqs}
        practiceArea="home"
      />

      <TestimonialsSection />
    </main>
  )
}

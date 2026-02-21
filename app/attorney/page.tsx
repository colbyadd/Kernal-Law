import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '../components/PageHero'

export const metadata: Metadata = {
  title: 'Todd Kernal | Attorney Profile',
  description:
    'Todd Kernal is an Oklahoma criminal defense and personal injury attorney with 25+ years of courtroom-focused practice.',
  alternates: { canonical: '/attorney' },
}

const attorneySchema = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  '@id': 'https://kernallaw.com/attorney/#person',
  name: 'Todd Kernal',
  givenName: 'Todd',
  familyName: 'Kernal',
  jobTitle: 'Criminal Defense & Personal Injury Attorney',
  description:
    'Todd Kernal has worked as a criminal defense and personal injury lawyer for over 25 years across Oklahoma.',
  image: 'https://kernallaw.com/images/todd-kernal-lhl.jpg',
  url: 'https://kernallaw.com/attorney',
  telephone: '+1-405-364-0601',
  email: 'todd@kernallaw.com',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Oklahoma College of Law',
    sameAs: 'https://www.law.ou.edu/',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Juris Doctor (J.D.)',
      educationalLevel: 'Graduate',
    },
  ],
  memberOf: [
    {
      '@type': 'Organization',
      name: 'Oklahoma Bar Association',
    },
    {
      '@type': 'Organization',
      name: 'Seminole Nation of Oklahoma',
    },
  ],
  knowsAbout: [
    'Criminal Defense',
    'DUI Defense',
    'Drug Charges',
    'Personal Injury',
    'Oklahoma Criminal Law',
    'Trial Advocacy',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1332 SW 89th Street',
    addressLocality: 'Oklahoma City',
    addressRegion: 'OK',
    postalCode: '73159',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:30',
    },
  ],
  workLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1332 SW 89th Street',
      addressLocality: 'Oklahoma City',
      addressRegion: 'OK',
      postalCode: '73159',
    },
  },
  worksFor: {
    '@type': 'LegalService',
    '@id': 'https://kernallaw.com/#organization',
  },
}

const credentialItems = [
  '25+ Years of Courtroom-Focused Representation',
  'J.D., University of Oklahoma College of Law',
  'Member, Oklahoma Bar Association',
  'Member, Seminole Nation of Oklahoma',
]

const representationStandards = [
  {
    title: 'Direct Risk Analysis',
    description:
      'Every case starts with honest assessment of legal exposure, deadlines, and the most important next decisions.',
  },
  {
    title: 'Preparation Before Pressure',
    description:
      'Cases are built with evidentiary discipline so negotiation posture reflects real courtroom readiness.',
  },
  {
    title: 'Client Communication Discipline',
    description:
      'Clients receive practical updates and clear explanation of options, tradeoffs, and timing across each phase.',
  },
]

export default function AttorneyPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneySchema) }}
      />

      <PageHero
        title="Todd Kernal"
        subtitle="Criminal Defense and Personal Injury | 25+ years of Oklahoma courtroom-focused practice"
        variant="bio"
      />

      <section className="py-6 border-b border-silver-500/10 bg-iron-900/40">
        <div className="container mx-auto px-6">
          <nav aria-label="On this page" className="max-w-5xl mx-auto flex flex-wrap gap-2 md:gap-3">
            {[
              { href: '#profile-overview', label: 'Overview' },
              { href: '#profile-standards', label: 'Standards' },
              { href: '#profile-proof', label: 'Proof' },
              { href: '#profile-contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center border border-silver-500/20 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-silver-300 hover:text-white hover:border-accent-gold/45 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div id="profile-overview" className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 space-y-10">
            <div className="relative aspect-[3/4] w-full overflow-hidden grayscale contrast-[1.08] brightness-[0.92] hover:grayscale-0 transition-all duration-700">
              <Image
                src="/images/todd-kernal-lhl.jpg"
                alt="Todd Kernal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="space-y-5">
              <h2 className="font-serif text-2xl text-white border-b border-silver-500/20 pb-3">Credentials</h2>
              <ul className="space-y-3 text-silver-300 text-sm">
                {credentialItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-accent-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8 text-lg text-silver-400 leading-relaxed">
            <p>
              Todd Kernal focuses on high-stakes criminal defense and severe personal-injury matters across Oklahoma.
              His practice emphasizes early risk control, disciplined evidence strategy, and courtroom readiness when
              negotiated outcomes are not reasonable.
            </p>
            <p>
              The approach is practical and direct: identify exposure quickly, protect legal position early, and build
              each case with enough rigor to withstand adversarial scrutiny. Clients are informed clearly about options,
              tradeoffs, and timing at each stage.
            </p>

            <blockquote className="border-l-2 border-accent-gold pl-8 italic text-xl text-white/90">
              &quot;When the government or an insurer applies pressure, preparation is the equalizer. Good outcomes are built,
              not hoped for.&quot;
            </blockquote>

            <h3 className="text-2xl font-serif text-white">Practice Focus</h3>
            <p>
              Criminal defense work includes DUI, drug allegations, warrants, probation issues, assault-related filings,
              and other felony or misdemeanor exposure. Personal injury work includes severe collision litigation,
              catastrophic injury valuation, and wrongful-death accountability claims.
            </p>

            <h3 className="text-2xl font-serif text-white">Professional Background</h3>
            <p>
              Todd is a graduate of the University of Oklahoma College of Law and has spent more than two decades in
              courtroom-driven legal practice. His legal career began from direct exposure to an unfair dispute and a
              commitment to learning the law well enough to challenge it effectively.
            </p>
          </div>
        </div>
      </div>

      <section id="profile-standards" className="py-16 md:py-24 border-y border-silver-500/10 bg-iron-900/40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Representation Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {representationStandards.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="profile-proof" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Review Additional Proof</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Link
                href="/case-results"
                data-cta="attorney_proof_case_results"
                className="border border-silver-500/20 p-6 text-silver-300 hover:text-white hover:border-accent-gold/45 transition-colors"
              >
                <h3 className="font-serif text-2xl mb-2">Case Results</h3>
                <p className="text-sm text-silver-400">Representative outcomes with risk and strategy context.</p>
              </Link>
              <Link
                href="/client-reviews"
                data-cta="attorney_proof_client_reviews"
                className="border border-silver-500/20 p-6 text-silver-300 hover:text-white hover:border-accent-gold/45 transition-colors"
              >
                <h3 className="font-serif text-2xl mb-2">Client Reviews</h3>
                <p className="text-sm text-silver-400">Client feedback themes on communication and execution quality.</p>
              </Link>
              <Link
                href="/contact"
                data-cta="attorney_proof_contact"
                className="border border-silver-500/20 p-6 text-silver-300 hover:text-white hover:border-accent-gold/45 transition-colors"
              >
                <h3 className="font-serif text-2xl mb-2">Consultation</h3>
                <p className="text-sm text-silver-400">Discuss your legal matter and immediate next steps directly.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="profile-contact" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">Contact Todd Kernal</h2>
            <p className="text-silver-400 mb-8">
              For urgent legal matters, request a confidential consultation now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                data-cta="attorney_contact_todd"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
              >
                Request Consultation
              </Link>
              <a
                href="tel:+14053640601"
                data-cta="attorney_call_todd"
                className="inline-flex items-center justify-center px-10 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                (405) 364-0601
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

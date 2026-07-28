import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '../components/PageHero'
import {
  CONTACT_EMAIL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_E164,
  PRIMARY_PHONE_TEL_HREF,
} from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Todd Kernal | Attorney Profile',
  description:
    'Todd Kernal is an Oklahoma criminal defense lawyer with nearly 26 years of experience who also represents people with serious injury claims.',
  alternates: { canonical: '/attorney' },
  openGraph: {
    title: 'Todd Kernal Attorney Profile | Kernal & Associates',
    description:
      'Read about Oklahoma attorney Todd Kernal\'s background in criminal defense and personal injury law.',
    url: 'https://kernallaw.com/attorney',
  },
}

const attorneySchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://kernallaw.com/attorney/#person',
  name: 'Todd Kernal',
  givenName: 'Todd',
  familyName: 'Kernal',
  jobTitle: 'Criminal Defense & Personal Injury Attorney',
  description:
    'Todd Kernal has nearly 26 years of Oklahoma criminal defense experience and also represents people with serious injury claims.',
  image: 'https://kernallaw.com/images/todd-kernal-motorcycle.webp',
  url: 'https://kernallaw.com/attorney',
  telephone: PRIMARY_PHONE_E164,
  email: CONTACT_EMAIL,
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
  'Nearly 26 Years in Criminal Defense',
  'J.D., University of Oklahoma College of Law',
  'Member, Oklahoma Bar Association',
  'Member, Seminole Nation of Oklahoma',
]

const representationStandards = [
  {
    title: 'No Sugarcoating',
    description:
      'Todd tells clients what is strong, what is risky, and what he believes should happen next.',
  },
  {
    title: 'Preparation That Shows',
    description:
      'He reads the reports, watches the recordings, researches the law, and gets ready for court.',
  },
  {
    title: 'Conversations You Can Follow',
    description:
      'Clients should leave a conversation knowing what happened, what comes next, and why.',
  },
]

function toStepNumber(value: number) {
  return value.toString().padStart(2, '0')
}

export default function AttorneyPage() {
  const jumpLinks = [
    { href: '#profile-overview', label: 'Overview' },
    { href: '#profile-standards', label: 'Standards' },
    { href: '#profile-proof', label: 'Proof' },
    { href: '#profile-contact', label: 'Contact' },
  ] as const

  return (
    <main className="bg-iron-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneySchema) }}
      />

      <PageHero
        title="Todd Kernal"
        subtitle="Oklahoma criminal defense lawyer handling selected serious-injury cases."
        variant="bio"
      />

      <section className="py-12 md:py-16 border-y border-silver-500/10 bg-iron-900/25">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto xl:grid xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-10">
            <div className="min-w-0 space-y-6 md:space-y-8">
              <section id="profile-overview" className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(220px,0.75fr)_minmax(0,1.25fr)] md:gap-8 lg:grid-cols-12 lg:gap-10">
                  <div className="space-y-8 lg:col-span-4 lg:space-y-10">
                    <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden border border-silver-500/15 bg-iron-950 md:max-w-none">
                      <Image
                        src="/images/todd-kernal-motorcycle.webp"
                        alt="Todd Kernal"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 767px) 342px, (max-width: 1023px) 36vw, 300px"
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

                  <div className="space-y-8 text-lg leading-relaxed text-silver-400 lg:col-span-8">
                    <p>
                      Todd Kernal&apos;s practice is centered on Oklahoma criminal defense, including DUI, drug charges,
                      sex offenses, and other felonies and misdemeanors. In DUI cases, he also handles related
                      driver&apos;s-license issues.
                    </p>
                    <p>
                      His interest in law began in college, after a landlord unfairly refused to return his damage
                      deposit. Todd found the law library, researched the issue, and wrote the landlord a letter.
                      The deposit was returned two days later. He decided to go to law school.
                    </p>

                    <blockquote className="border-l-2 border-accent-gold pl-8 italic text-xl text-white/90">
                      &quot;If I don&apos;t stand up for my clients and protect their constitutional rights, then everyone loses.&quot;
                    </blockquote>

                    <h3 className="text-2xl font-serif text-white">Practice Focus</h3>
                    <p>
                      While in law school, Todd interned with a criminal law practice and knew it was the right fit.
                      He enjoys courtroom work and believes every person accused of a crime deserves the full protection
                      of the United States and Oklahoma Constitutions.
                    </p>

                    <h3 className="text-2xl font-serif text-white">Personal Injury Work</h3>
                    <p>
                      Todd accepts selected serious-injury matters. After an oil field accident, he saw firsthand how
                      an injury can disrupt work, family, and ordinary life.
                    </p>
                  </div>
                </div>
              </section>

              <section id="profile-standards" className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">What Clients Can Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {representationStandards.map((item) => (
                    <article
                      key={item.title}
                      className="bg-iron-950/70 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                    >
                      <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                      <p className="text-silver-400 leading-relaxed">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="profile-proof" className="scroll-mt-28 bg-iron-900 border border-silver-500/10 p-6 md:p-8">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Check the Record</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <Link
                    href="/case-results"
                    data-cta="attorney_proof_case_results"
                    className="border border-silver-500/20 p-6 text-silver-300 hover:text-white hover:border-accent-gold/45 transition-colors"
                  >
                    <h3 className="font-serif text-2xl mb-2">Case Results</h3>
                    <p className="text-sm text-silver-400">Anonymized examples of criminal defense and injury matters.</p>
                  </Link>
                  <Link
                    href="/client-reviews"
                    data-cta="attorney_proof_client_reviews"
                    className="border border-silver-500/20 p-6 text-silver-300 hover:text-white hover:border-accent-gold/45 transition-colors"
                  >
                    <h3 className="font-serif text-2xl mb-2">Client Reviews</h3>
                    <p className="text-sm text-silver-400">Selected feedback from Todd Kernal&apos;s Google Business Profile.</p>
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
              </section>
            </div>

            <aside className="hidden xl:block">
              <nav
                aria-label="On this page"
                className="sticky top-28 border border-silver-500/20 bg-iron-900/95 backdrop-blur-md p-4"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">On This Page</p>
                <ol className="mt-3 space-y-1">
                  {jumpLinks.map((item, index) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="flex items-start gap-3 border-l border-silver-500/20 px-3 py-2 text-silver-300 hover:text-white hover:border-accent-gold/45 transition-colors"
                      >
                        <span className="text-[10px] uppercase tracking-[0.14em] text-silver-500 pt-1">
                          {toStepNumber(index + 1)}
                        </span>
                        <span className="text-sm leading-snug">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <section id="profile-contact" className="py-16 md:py-24 scroll-mt-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-accent-gold/10 border border-accent-gold/20 p-10 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-accent-gold mb-4">Contact Todd Kernal</h2>
            <p className="text-silver-400 mb-8">
              Have a court date, warrant, or other urgent deadline? Call the office. Otherwise, send a short consultation request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                data-cta="attorney_contact_todd"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
              >
                Request a Free Consultation
              </Link>
              <a
                href={PRIMARY_PHONE_TEL_HREF}
                data-cta="attorney_call_todd"
                className="inline-flex items-center justify-center px-10 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                {PRIMARY_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

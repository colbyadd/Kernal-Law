import { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Oklahoma City Criminal Defense and Personal Injury Attorney',
  description:
    'Kernal & Associates serves Oklahoma City with criminal defense and personal injury representation for Oklahoma County courts and metro injury claims.',
  alternates: { canonical: '/oklahoma-city' },
  openGraph: {
    title: 'Oklahoma City Criminal Defense and Injury Attorney | Kernal & Associates',
    description:
      'Local Oklahoma City representation for high-stakes criminal allegations and serious injury claims.',
    url: 'https://kernallaw.com/oklahoma-city',
  },
}

export default function OklahomaCityPage() {
  return (
    <LocationServicePage
      canonicalPath="/oklahoma-city"
      locationName="Oklahoma City"
      subtitle="Criminal defense and injury representation for Oklahoma County and the full OKC metro corridor."
      introTitle="In Oklahoma City, early legal control protects leverage."
      introParagraphs={[
        'Oklahoma City matters often move quickly through high-volume criminal dockets and insurer-driven injury timelines. Delayed action can reduce options before defense or claim strategy is fully developed.',
        'Kernal & Associates represents Oklahoma City clients with trial-ready criminal defense and evidence-first personal injury strategy built for major metro exposure.',
      ]}
      countyFocus="Oklahoma County Court and Metro Claim Strategy"
      localHighlights={[
        'Rapid response for bond, warrant, and hearing-risk exposure in Oklahoma County filings.',
        'Evidence-first injury strategy for I-35, I-40, I-44, and Kilpatrick Turnpike collisions.',
        'Structured handling of allegation-heavy prosecutions and high-pressure plea environments.',
        'Full-value damages planning for catastrophic injury and fatal-loss negligence matters.',
        'Coordinated legal strategy when record, licensing, and employment risk overlap.',
        'Attorney-led communication through every filing, hearing, and negotiation stage.',
      ]}
      serviceLinks={[
        {
          href: '/oklahoma-city/criminal-defense',
          title: 'Oklahoma City Criminal Defense',
          description: 'Local defense strategy for Oklahoma County criminal allegations.',
          ctaName: 'oklahoma_city_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Court and license-track strategy for impaired-driving allegations.',
          ctaName: 'oklahoma_city_service_dui',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Controlled court-entry planning for active warrant exposure.',
          ctaName: 'oklahoma_city_service_warrants',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Metro injury strategy for serious negligence and collision losses.',
          ctaName: 'oklahoma_city_service_personal_injury',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Litigation',
          description: 'Commercial-collision strategy with layered liability analysis.',
          ctaName: 'oklahoma_city_service_truck_accidents',
        },
        {
          href: '/personal-injury/wrongful-death',
          title: 'Wrongful Death Claims',
          description: 'Family-focused accountability strategy after fatal negligence events.',
          ctaName: 'oklahoma_city_service_wrongful_death',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/edmond',
          title: 'Edmond',
          description: 'North metro page for related Oklahoma County court and claim context.',
          ctaName: 'oklahoma_city_related_edmond',
        },
        {
          href: '/moore',
          title: 'Moore',
          description: 'South metro service area with Cleveland County overlap strategy.',
          ctaName: 'oklahoma_city_related_moore',
        },
        {
          href: '/midwest-city',
          title: 'Midwest City',
          description: 'East metro representation for connected corridor legal exposure.',
          ctaName: 'oklahoma_city_related_midwest_city',
        },
      ]}
      faqSubtitle="Frequent questions from Oklahoma City criminal defense and injury clients."
      faqs={[
        {
          question: 'How quickly should I call a lawyer for an Oklahoma City arrest?',
          answer:
            'Immediately. Early strategy affects bond conditions, evidence posture, and downstream case leverage in high-volume county dockets.',
        },
        {
          question: 'Do you handle serious metro injury claims involving multiple vehicles or commercial trucks?',
          answer:
            'Yes. We handle complex multi-party and commercial-collision claims with evidence preservation and long-horizon damages strategy.',
        },
        {
          question: 'Can one firm handle both criminal and injury exposure from the same incident?',
          answer:
            'Yes. We coordinate defense and claim strategy when both tracks are present so one process does not compromise the other.',
        },
        {
          question: 'What should I bring to my first Oklahoma City consultation?',
          answer:
            'Bring all available court papers, release documents, insurer communications, medical records, photos, and timeline notes.',
        },
      ]}
      ctaTitle="Need Immediate Counsel in Oklahoma City?"
      ctaDescription="Request a confidential consultation to stabilize risk and map your next legal move."
      ctaName="oklahoma_city"
    />
  )
}

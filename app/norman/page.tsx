import { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Norman Criminal Defense and Personal Injury Attorney',
  description:
    'Kernal & Associates serves Norman with criminal defense and personal injury representation for Cleveland County court matters and severe loss claims.',
  alternates: { canonical: '/norman' },
  openGraph: {
    title: 'Norman Criminal Defense and Injury Attorney | Kernal & Associates',
    description:
      'Local Norman representation for Cleveland County criminal charges and serious injury claims.',
    url: 'https://kernallaw.com/norman',
  },
}

export default function NormanPage() {
  return (
    <LocationServicePage
      canonicalPath="/norman"
      locationName="Norman"
      subtitle="Criminal defense and injury representation for Cleveland County and south-metro communities."
      introTitle="Norman legal pressure requires early strategy and disciplined execution."
      introParagraphs={[
        'Norman cases often involve fast Cleveland County timelines, high-stakes allegation decisions, and insurer pressure following major collision events. The first legal moves can shape long-term outcome risk.',
        'Kernal & Associates represents Norman clients with trial-ready criminal defense and evidence-driven injury strategy designed for high-impact results, not short-term fixes.',
      ]}
      countyFocus="Cleveland County Court and South-Metro Claim Strategy"
      localHighlights={[
        'Office consultations available at 1332 SW 89th Street in south Oklahoma City, with phone and text intake for urgent matters.',
        'Immediate defense support for arrest, warrant, and bond-condition exposure in Cleveland County.',
        'Strategic representation for collisions along I-35 south, SH-9, and university-area corridors.',
        'Structured case planning for allegation-heavy criminal prosecutions and evidentiary disputes.',
        'Long-horizon injury damages development for severe trauma and major recovery losses.',
        'Coordinated planning where student, licensing, and employment consequences overlap legal risk.',
        'Direct attorney guidance through hearings, filing deadlines, and insurer communications.',
      ]}
      serviceLinks={[
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Local defense strategy for Cleveland County criminal allegations.',
          ctaName: 'norman_service_criminal_defense',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Search-and-seizure focused strategy for possession and intent allegations.',
          ctaName: 'norman_service_drug_charges',
        },
        {
          href: '/criminal-defense/domestic-violence',
          title: 'Domestic Violence Defense',
          description: 'Coordinated strategy for criminal and no-contact order exposure.',
          ctaName: 'norman_service_domestic_violence',
        },
        {
          href: '/norman/personal-injury',
          title: 'Norman Personal Injury',
          description: 'Local injury strategy for severe negligence and disputed-fault claims.',
          ctaName: 'norman_service_personal_injury',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Evidence-first fault and damages strategy for serious collisions.',
          ctaName: 'norman_service_car_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Coverage-focused UM/UIM strategy for underinsured recovery disputes.',
          ctaName: 'norman_service_uninsured_motorist',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/moore',
          title: 'Moore',
          description: 'Nearby Cleveland County page for connected south-metro case exposure.',
          ctaName: 'norman_related_moore',
        },
        {
          href: '/oklahoma-city',
          title: 'Oklahoma City',
          description: 'Metro hub for broader county-overlap criminal and injury strategy.',
          ctaName: 'norman_related_oklahoma_city',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'Post-Arrest Guide',
          description: 'Immediate rights-protection checklist for the first 48 hours.',
          ctaName: 'norman_related_arrest_guide',
        },
      ]}
      faqSubtitle="Frequent questions from Norman and Cleveland County clients."
      faqs={[
        {
          question: 'How fast should I get legal help after a Norman arrest?',
          answer:
            'Immediately. Early defense planning can materially affect condition compliance, evidence posture, and negotiation leverage.',
        },
        {
          question: 'Do you represent clients in both criminal and injury cases in Norman?',
          answer:
            'Yes. We handle both tracks, including situations where one incident creates criminal and personal injury exposure.',
        },
        {
          question: 'Can you handle high-severity collisions and UM/UIM claim disputes?',
          answer:
            'Yes. We build liability and coverage strategy for severe-loss cases, including underinsured recovery conflicts.',
        },
        {
          question: 'What should I avoid before speaking with counsel?',
          answer:
            'Avoid discussing case facts on calls, texts, or social media and avoid recorded insurer statements without legal guidance.',
        },
      ]}
      ctaTitle="Need Immediate Counsel in Norman?"
      ctaDescription="Request a confidential consultation to assess risk, preserve leverage, and define your next legal step."
      ctaName="norman"
    />
  )
}

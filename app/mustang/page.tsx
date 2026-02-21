import { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Mustang Criminal Defense and Personal Injury Attorney',
  description:
    'Kernal & Associates serves Mustang with criminal defense and personal injury representation for Canadian County and surrounding legal matters.',
  alternates: { canonical: '/mustang' },
  openGraph: {
    title: 'Mustang Criminal Defense and Injury Attorney | Kernal & Associates',
    description:
      'Local legal representation for Mustang residents facing criminal charges and serious injuries.',
    url: 'https://kernallaw.com/mustang',
  },
}

export default function MustangPage() {
  return (
    <LocationServicePage
      canonicalPath="/mustang"
      locationName="Mustang"
      subtitle="Strategic criminal defense and injury representation for Mustang and nearby communities."
      introTitle="Legal exposure in Mustang needs fast, focused response."
      introParagraphs={[
        'Mustang cases often involve urgent criminal deadlines or injury claim decisions that become harder to fix over time. Prompt legal control improves both defense and recovery options.',
        'Kernal & Associates provides disciplined representation for criminal and personal injury matters with strong courtroom preparation and practical risk management.',
      ]}
      countyFocus="Canadian County and West-South Metro Representation"
      localHighlights={[
        'Urgent defense support for arrest and warrant-related situations.',
        'Injury claim strategy for collision and negligence events with serious losses.',
        'Case planning for overlapping criminal and civil exposure from a single incident.',
        'Evidence preservation protocols for high-dispute liability matters.',
        'Direct legal communication and clear timeline management.',
        'Long-term record and financial-risk strategy integrated from intake.',
      ]}
      serviceLinks={[
        {
          href: '/mustang/criminal-defense',
          title: 'Mustang Criminal Defense',
          description: 'Local defense strategy for Mustang criminal allegations.',
          ctaName: 'mustang_service_criminal_defense',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Controlled warrant resolution and court-entry planning.',
          ctaName: 'mustang_service_warrants',
        },
        {
          href: '/criminal-defense/expungement',
          title: 'Expungement Services',
          description: 'Record-sealing strategy for eligible prior case outcomes.',
          ctaName: 'mustang_service_expungement',
        },
        {
          href: '/mustang/personal-injury',
          title: 'Mustang Personal Injury',
          description: 'Local claim strategy for severe injury and negligence losses.',
          ctaName: 'mustang_service_injury',
        },
        {
          href: '/personal-injury/motorcycle-accidents',
          title: 'Motorcycle Accident Claims',
          description: 'Rider-focused strategy for severe injury and fault disputes.',
          ctaName: 'mustang_service_motorcycle',
        },
        {
          href: '/personal-injury/wrongful-death',
          title: 'Wrongful Death Claims',
          description: 'Family-focused representation after fatal negligence incidents.',
          ctaName: 'mustang_service_wrongful_death',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/yukon',
          title: 'Yukon',
          description: 'Nearby service area for west metro criminal and injury issues.',
          ctaName: 'mustang_related_yukon',
        },
        {
          href: '/moore',
          title: 'Moore',
          description: 'South metro page for related county and roadway claim context.',
          ctaName: 'mustang_related_moore',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'Post-Arrest Guide',
          description: 'Immediate checklist to protect rights after arrest.',
          ctaName: 'mustang_related_arrest_guide',
        },
      ]}
      faqSubtitle="Frequently asked questions from Mustang residents about legal timelines and strategy."
      faqs={[
        {
          question: 'How quickly should I act after an arrest in Mustang?',
          answer:
            'Immediately. Early decisions about statements, bond, and compliance can change the trajectory of your defense.',
        },
        {
          question: 'Do you handle both warrants and expungements for Mustang clients?',
          answer:
            'Yes. We handle active warrant resolution and record-sealing strategy when expungement eligibility is available.',
        },
        {
          question: 'Can you help with severe motorcycle or wrongful death claims?',
          answer:
            'Yes. We represent families and injured clients in high-severity claims with a full-value damages and liability approach.',
        },
        {
          question: 'What does the first consultation cover?',
          answer:
            'We review urgent deadlines, current risk, key evidence needs, and an initial strategy roadmap for your specific legal issue.',
        },
      ]}
      ctaTitle="Need Representation in Mustang?"
      ctaDescription="Request immediate legal guidance on defense strategy or injury claim protection."
      ctaName="mustang"
    />
  )
}

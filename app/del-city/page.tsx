import { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Del City Criminal Defense and Personal Injury Attorney',
  description:
    'Kernal & Associates serves Del City with criminal defense and personal injury representation for Oklahoma County and nearby metro legal matters.',
  alternates: { canonical: '/del-city' },
  openGraph: {
    title: 'Del City Criminal Defense and Injury Attorney | Kernal & Associates',
    description:
      'Local legal representation for Del City criminal charges and serious injury claims.',
    url: 'https://kernallaw.com/del-city',
  },
}

export default function DelCityPage() {
  return (
    <LocationServicePage
      canonicalPath="/del-city"
      locationName="Del City"
      subtitle="Criminal defense and injury representation for Del City and southeast metro Oklahoma County."
      introTitle="When legal pressure rises in Del City, speed and strategy matter."
      introParagraphs={[
        'Del City residents dealing with criminal allegations or severe injury claims often face immediate deadlines and high-pressure communications from prosecutors or insurers.',
        'Kernal & Associates provides disciplined defense and injury representation focused on evidence control, courtroom leverage, and durable long-term outcomes.',
      ]}
      countyFocus="Oklahoma County Southeast Metro Strategy"
      localHighlights={[
        'Office consultations available at 1332 SW 89th Street in south Oklahoma City, with phone and text intake for urgent matters.',
        'Rapid intake for arrest and warrant-risk situations requiring immediate action.',
        'Collision and injury claim representation for high-traffic metro corridors.',
        'Cross-track strategy where criminal charges and injury recovery overlap.',
        'Structured evidentiary preparation for hearings, negotiations, and trial settings.',
        'Focused handling of insurer delay tactics and undervaluation pressure.',
        'Direct attorney-led planning through each stage of case progression.',
      ]}
      serviceLinks={[
        {
          href: '/del-city/criminal-defense',
          title: 'Del City Criminal Defense',
          description: 'Local defense strategy for Del City criminal exposure.',
          ctaName: 'del_city_service_criminal_defense',
        },
        {
          href: '/criminal-defense/domestic-violence',
          title: 'Domestic Violence Defense',
          description: 'Defense for allegation-driven cases with no-contact constraints.',
          ctaName: 'del_city_service_domestic',
        },
        {
          href: '/criminal-defense/assault-battery',
          title: 'Assault and Battery Defense',
          description: 'Evidence-focused strategy for violent offense allegations.',
          ctaName: 'del_city_service_assault',
        },
        {
          href: '/del-city/personal-injury',
          title: 'Del City Personal Injury',
          description: 'Local injury-claim strategy for crash and negligence losses.',
          ctaName: 'del_city_service_injury',
        },
        {
          href: '/personal-injury/slip-and-fall',
          title: 'Slip and Fall Claims',
          description: 'Premises liability strategy for unsafe-property injuries.',
          ctaName: 'del_city_service_slip_fall',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'UM/UIM strategy for contested first-party coverage recovery.',
          ctaName: 'del_city_service_um',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/oklahoma-city',
          title: 'Oklahoma City',
          description: 'Primary metro hub for county-wide representation.',
          ctaName: 'del_city_related_oklahoma_city',
        },
        {
          href: '/midwest-city',
          title: 'Midwest City',
          description: 'Nearby local page for east metro legal context.',
          ctaName: 'del_city_related_midwest_city',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Guide',
          description: 'Immediate claim-protection checklist after a crash.',
          ctaName: 'del_city_related_accident_guide',
        },
      ]}
      faqSubtitle="Short answers to the questions Del City clients ask most often."
      faqs={[
        {
          question: 'What should I do first after being charged in Del City?',
          answer:
            'Avoid discussing facts publicly, preserve all paperwork, and get legal counsel involved immediately to control early case decisions.',
        },
        {
          question: 'Can you help if an accident case in Del City has disputed fault?',
          answer:
            'Yes. We build an evidence-first liability strategy using reports, photos, witness statements, medical documentation, and damages analysis.',
        },
        {
          question: 'Do you represent Del City clients in warrant matters?',
          answer:
            'Yes. We handle active warrant exposure with controlled resolution planning and court-entry strategy focused on minimizing risk.',
        },
        {
          question: 'How do I start a confidential consultation?',
          answer:
            'Use the contact form or call our office. We will quickly review urgency, deadlines, and the next best legal step for your matter.',
        },
      ]}
      ctaTitle="Need Immediate Counsel in Del City?"
      ctaDescription="Request a confidential consultation to stabilize risk and plan the next legal steps."
      ctaName="del_city"
    />
  )
}

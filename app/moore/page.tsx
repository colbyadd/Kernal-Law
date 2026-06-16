import { Metadata } from 'next'
import { LocationServicePage } from '../components/LocationServicePage'

export const metadata: Metadata = {
  title: 'Moore Criminal Defense and Personal Injury Attorney',
  description:
    'Kernal & Associates serves Moore, Oklahoma with criminal defense and personal injury representation in Cleveland County and surrounding metro courts.',
  alternates: { canonical: '/moore' },
  openGraph: {
    title: 'Moore Criminal Defense and Injury Attorney | Kernal & Associates',
    description:
      'Local legal representation for Moore residents facing criminal charges or serious injury claims.',
    url: 'https://kernallaw.com/moore',
  },
}

export default function MoorePage() {
  return (
    <LocationServicePage
      canonicalPath="/moore"
      locationName="Moore"
      subtitle="Criminal defense and personal injury representation for Moore and south metro communities."
      introTitle="Legal representation built for urgent decisions in Moore."
      introParagraphs={[
        'Whether you are facing criminal charges or managing the aftermath of a serious injury, early legal strategy matters. Moore residents often need counsel that can move quickly across both Cleveland County and nearby metro courts.',
        'Kernal & Associates provides trial-ready criminal defense and high-discipline injury representation designed to protect your record, finances, and future options.',
      ]}
      countyFocus="Cleveland County and South Metro Court Coverage"
      localHighlights={[
        'Office consultations available at 1332 SW 89th Street in south Oklahoma City, with phone and text intake for urgent matters.',
        'Rapid response for arrest and bond-risk situations impacting Moore residents.',
        'Representation for crash and injury claims along I-35 and heavily traveled metro corridors.',
        'Coordinated legal strategy when criminal and injury exposure overlap from the same event.',
        'Court-ready approach for contested hearings, negotiations, and trial settings.',
        'Direct attorney communication on deadlines, evidence, and procedural risk.',
        'Focused case planning for both immediate relief and long-term record protection.',
      ]}
      serviceLinks={[
        {
          href: '/moore/criminal-defense',
          title: 'Moore Criminal Defense',
          description: 'Local criminal defense strategy for Moore charges and court exposure.',
          ctaName: 'moore_service_criminal_defense',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Defense strategy for DUI charges and administrative license risk.',
          ctaName: 'moore_service_dui',
        },
        {
          href: '/moore/personal-injury',
          title: 'Moore Personal Injury',
          description: 'Local injury-claim strategy for serious crash and negligence losses.',
          ctaName: 'moore_service_injury',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Fault and damages strategy after serious vehicle collisions.',
          ctaName: 'moore_service_car_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Coverage-focused UM/UIM recovery planning.',
          ctaName: 'moore_service_uninsured_motorist',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Controlled safe-surrender and warrant-resolution strategy.',
          ctaName: 'moore_service_warrants',
        },
      ]}
      relatedLocationLinks={[
        {
          href: '/norman',
          title: 'Norman',
          description: 'Local representation for Cleveland County court matters.',
          ctaName: 'moore_related_norman',
        },
        {
          href: '/oklahoma-city',
          title: 'Oklahoma City',
          description: 'Metro-area legal services and immediate intake support.',
          ctaName: 'moore_related_oklahoma_city',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'Post-Arrest Guide',
          description: 'Critical first-48-hours rights-protection checklist.',
          ctaName: 'moore_related_arrest_guide',
        },
      ]}
      faqSubtitle="Answers to common criminal defense and injury questions from Moore clients."
      faqs={[
        {
          question: 'How quickly should I contact a lawyer after an arrest in Moore?',
          answer:
            'Immediately. Early legal involvement can affect statements, bond strategy, and evidence preservation before the case position hardens.',
        },
        {
          question: 'Do you handle both criminal and injury cases for Moore residents?',
          answer:
            'Yes. We represent Moore clients in criminal defense and personal injury matters, including cases where both exposures arise from the same incident.',
        },
        {
          question: 'What should I bring to a consultation for a Moore case?',
          answer:
            'Bring every document you have, including citations, bond paperwork, insurance correspondence, medical records, photos, and witness contact details.',
        },
        {
          question: 'Can you help if my case is filed outside Moore?',
          answer:
            'Yes. We routinely handle cases across Cleveland County and surrounding metro courts and can advise on venue-specific strategy.',
        },
      ]}
      ctaTitle="Need Counsel in Moore Right Now?"
      ctaDescription="Request a confidential consultation to map immediate risk and next legal steps."
      ctaName="moore"
    />
  )
}

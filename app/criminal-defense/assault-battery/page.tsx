import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Assault & Battery Lawyer',
  description:
    'Defense for Oklahoma assault and battery allegations involving incident evidence, intent, self-defense, and misdemeanor or felony charges.',
  alternates: { canonical: '/criminal-defense/assault-battery' },
  openGraph: {
    title: 'Oklahoma Assault and Battery Defense | Kernal & Associates',
    description:
      'Defense for Oklahoma assault and battery allegations involving intent, self-defense, witnesses, and physical evidence.',
    url: 'https://kernallaw.com/criminal-defense/assault-battery',
  },
}

const assaultBatteryFaqs = [
  {
    question: 'What is the difference between assault and battery in Oklahoma?',
    answer:
      'Assault generally involves an attempted or threatened harmful act, while battery involves unlawful physical contact. Exact charge level depends on allegations, injuries, case context, and the legal elements the State can prove.',
  },
  {
    question: 'Can self-defense be used in assault cases?',
    answer:
      'Yes, when facts support lawful self-defense. Success depends on timing evidence, witness reliability, context of threat, and whether force was reasonable under the circumstances.',
  },
  {
    question: 'Do injury photos automatically prove guilt?',
    answer:
      'No. Injury images must be connected to legal elements and tested against context, causation, timing, and witness reliability. Photos alone do not resolve intent or justification defenses.',
  },
  {
    question: 'Will an assault conviction affect employment and licensing?',
    answer:
      'Potentially. A conviction can affect background checks, professional licenses, and employment. Those possible consequences should be considered along with the court penalties before any resolution is accepted.',
  },
  {
    question: 'Can assault charges be reduced before trial?',
    answer:
      'Sometimes. The answer depends on the charge, witness accounts, physical evidence, and any legal defense such as self-defense. No reduction can be promised, but those issues may affect negotiations or a motion before trial.',
  },
  {
    question: 'How quickly should I hire counsel after being charged?',
    answer:
      'As soon as practical. Early legal involvement can help preserve favorable evidence, prevent avoidable statement errors, and clarify bond or no-contact conditions from the beginning.',
  },
]

export default function AssaultBatteryPage() {
  return (
    <ServiceDetailPage
      heroTitle="Assault and Battery Defense"
      heroSubtitle="Defense for misdemeanor and felony allegations involving force, injury, or self-defense."
      heroVariant="criminal"
      introTitle="The police report may not tell the whole story of an alleged assault."
      introParagraphs={[
        'Assault and battery charges often follow a fast-moving event. An initial report may rely on one account and leave out video, other witnesses, what happened before the contact, or facts bearing on self-defense.',
        'The legal questions may include intent, who initiated the encounter, whether force was lawful, and whether an alleged injury can be connected to the event. Those questions should be tested against the evidence, not assumed from the charge name.',
        'Kernal & Associates compares witness accounts, available media, medical records, and the legal elements. The case may then proceed through negotiations, pretrial motions, or trial depending on what that review shows.',
      ]}
      focusTitle="Evidence and Legal Issues We Review"
      focusItems={[
        {
          title: 'Incident Reconstruction',
          description:
            'The order of events and the surrounding circumstances matter when witnesses give different accounts of the same incident.',
          bullets: [
            'Timeline reconstruction',
            'Comparison of conflicting witness statements',
            'Scene and physical-evidence review',
            'Medical record consistency checks',
            'Video and digital media integration',
            'Escalation sequence analysis',
          ],
        },
        {
          title: 'Intent and Lawful Force Analysis',
          description:
            'The State must prove every required element beyond a reasonable doubt. The evidence may also raise self-defense or another lawful-use-of-force issue.',
          bullets: [
            'Self-defense evaluation',
            'Mutual combat context review',
            'Disputed intent evidence',
            'Force proportionality analysis',
            'Threat-perception context review',
            'Causation and injury linkage testing',
          ],
        },
        {
          title: 'Court and Record Consequences',
          description:
            'Preparation should account for the immediate charge, possible motions and trial issues, and any effect on work or a professional license.',
          bullets: [
            'Evidence and motion issues',
            'Negotiation options',
            'Jury-trial preparation',
            'Employment and licensing concerns',
            'Possible sentencing exposure',
            'Future record consequences',
          ],
        },
      ]}
      processTitle="From the First Review to Resolution or Trial"
      processSubtitle="We begin with release terms and evidence, then prepare the issues that may matter in negotiations, motions, or trial."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Intake and Restriction Stabilization',
          description:
            'We evaluate bond conditions, no-contact terms, and immediate compliance requirements to prevent avoidable compounding exposure.',
        },
        {
          step: '02',
          title: 'Evidence and Timeline Development',
          description:
            'We collect and compare statements, media, and physical evidence for inconsistency, missing context, and defense value.',
        },
        {
          step: '03',
          title: 'Legal Issues and Motions',
          description:
            'We identify how self-defense, disputed intent, or admissibility issues should be raised before or during trial.',
        },
        {
          step: '04',
          title: 'Resolution or Trial',
          description:
            'We discuss negotiated options and prepare for trial when the client chooses to contest the allegation.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Explore connected charge categories and local representation pages."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'An overview of criminal charges handled by Kernal & Associates.',
          ctaName: 'assault_related_criminal_hub',
        },
        {
          href: '/criminal-defense/domestic-violence',
          title: 'Domestic Violence Defense',
          description: 'Overlapping defense issues for allegation-driven violence cases.',
          ctaName: 'assault_related_domestic_violence',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Help with an active warrant or a missed court appearance.',
          ctaName: 'assault_related_warrants',
        },
        {
          href: '/criminal-defense/probation-violation',
          title: 'Probation Violation Defense',
          description: 'Related representation when a new charge affects existing supervision.',
          ctaName: 'assault_related_probation',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Related support for cases with dual exposure patterns.',
          ctaName: 'assault_related_dui',
        },
        {
          href: '/oklahoma-city/criminal-defense',
          title: 'Oklahoma City Criminal Defense',
          description: 'Criminal defense for cases filed in Oklahoma City and Oklahoma County.',
          ctaName: 'assault_related_okc_criminal',
        },
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Criminal defense for cases filed in Norman and Cleveland County.',
          ctaName: 'assault_related_norman_criminal',
        },
      ]}
      faqSubtitle="Answers to common assault and battery defense questions in Oklahoma."
      faqs={assaultBatteryFaqs}
      practiceArea="assault-battery"
      actionChecklist={[
        'Preserve all court paperwork, release terms, and any media related to the incident.',
        'Create a private timeline while witness names and sequence details are still fresh.',
        'Avoid discussing case facts with law enforcement or third parties without counsel.',
        'Ask counsel to review evidence and release conditions before the next court date.',
      ]}
      ctaTitle="Talk With an Oklahoma Assault Defense Lawyer"
      ctaDescription="A prompt review can help preserve evidence and clarify the issues before the next court date."
      ctaLabel="Start Assault Defense"
      ctaName="assault_bottom_cta"
    />
  )
}

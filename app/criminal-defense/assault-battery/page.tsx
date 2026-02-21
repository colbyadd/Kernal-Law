import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Assault and Battery Defense Lawyer',
  description:
    'Defense for Oklahoma assault and battery allegations with focus on incident reconstruction, intent analysis, lawful self-defense, and trial-ready representation.',
  alternates: { canonical: '/criminal-defense/assault-battery' },
  openGraph: {
    title: 'Oklahoma Assault and Battery Defense | Kernal & Associates',
    description:
      'Strategic defense for misdemeanor and felony assault allegations in Oklahoma with evidence-driven legal framing.',
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
      'Potentially. A conviction can affect background checks, professional licensing, and long-term reputation. Strategy should account for both immediate penalties and record consequences.',
  },
  {
    question: 'Can assault charges be reduced before trial?',
    answer:
      'Often yes, depending on evidence quality and legal defenses. Early reconstruction work, witness challenges, and targeted motion practice can improve negotiation posture.',
  },
  {
    question: 'How quickly should I hire counsel after being charged?',
    answer:
      'Immediately. Early legal involvement helps preserve favorable evidence, prevent avoidable statement errors, and control compliance risks from the beginning.',
  },
]

export default function AssaultBatteryPage() {
  return (
    <ServiceDetailPage
      heroTitle="Assault and Battery Defense"
      heroSubtitle="Defense for misdemeanor and felony violence allegations with trial-ready legal strategy."
      heroVariant="criminal"
      introTitle="Assault allegations are decided by legal elements and evidence quality, not accusation labels."
      introParagraphs={[
        'Assault and battery prosecutions often begin with fast charging decisions built on incomplete context. Police reports may capture only one version of events, while timeline gaps, witness inconsistency, or missing context can materially change legal interpretation.',
        'These cases frequently involve disputed intent, self-defense questions, and credibility conflicts. Effective defense requires disciplined incident reconstruction and evidence testing, not reactive acceptance of the initial narrative.',
        'Kernal & Associates builds assault defenses around legal-element analysis, witness reliability review, and trial-ready case framing so negotiations are driven by provable risk rather than allegation intensity.',
      ]}
      focusTitle="How We Defend Assault and Battery Charges"
      focusItems={[
        {
          title: 'Incident Reconstruction',
          description:
            'Accurate sequence and situational context are central to contested violence allegations where the initial narrative may be incomplete.',
          bullets: [
            'Timeline reconstruction',
            'Witness statement conflict mapping',
            'Scene and physical-evidence review',
            'Medical record consistency checks',
            'Video and digital media integration',
            'Escalation sequence analysis',
          ],
        },
        {
          title: 'Intent and Lawful Force Analysis',
          description:
            'The State must prove each legal element beyond reasonable doubt, including intent and unlawful conduct under the circumstances.',
          bullets: [
            'Self-defense evaluation',
            'Mutual combat context review',
            'Intent element challenge strategy',
            'Force proportionality analysis',
            'Threat-perception context review',
            'Causation and injury linkage testing',
          ],
        },
        {
          title: 'Courtroom Positioning',
          description:
            'Case posture improves when evidentiary weaknesses and legal defenses are developed early and presented clearly.',
          bullets: [
            'Motion and evidentiary challenge planning',
            'Negotiation leverage development',
            'Jury-trial preparation workflow',
            'Collateral consequence minimization',
            'Sentencing-exposure modeling',
            'Record-impact strategy planning',
          ],
        },
      ]}
      processTitle="Assault Defense Workflow"
      processSubtitle="Fast evidence control and clear legal framing improve negotiation and trial options."
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
          title: 'Legal Defense Framing',
          description:
            'Self-defense, intent disputes, and admissibility issues are integrated into a coherent pretrial strategy and motion sequence.',
        },
        {
          step: '04',
          title: 'Resolution or Trial',
          description:
            'We negotiate from litigation strength and proceed to trial when facts and law justify full contest of the allegations.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Explore connected charge categories and local representation pages."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Full criminal defense scope and strategic framework.',
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
          description: 'Resolution strategy for active warrants and missed-appearance complications.',
          ctaName: 'assault_related_warrants',
        },
        {
          href: '/criminal-defense/probation-violation',
          title: 'Probation Violation Defense',
          description: 'Related strategy where supervision terms overlap with new allegations.',
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
          description: 'Metro venue strategy for Oklahoma County assault and battery filings.',
          ctaName: 'assault_related_okc_criminal',
        },
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Cleveland County defense strategy for south-metro assault allegations.',
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
        'Start defense review early to protect evidence and pretrial strategy options.',
      ]}
      ctaTitle="Start Building the Defense Now"
      ctaDescription="Early strategy improves leverage in negotiations and protects your trial-position options."
      ctaLabel="Start Assault Defense"
      ctaName="assault_bottom_cta"
    />
  )
}

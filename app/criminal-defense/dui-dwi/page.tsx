import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma DUI / DWI Defense Lawyer',
  description:
    'Defense for Oklahoma DUI and DWI allegations with focus on stop legality, chemical-test reliability, and Department of Public Safety license exposure.',
  alternates: { canonical: '/criminal-defense/dui-dwi' },
  openGraph: {
    title: 'Oklahoma DUI Defense Attorney | Kernal & Associates',
    description:
      'Strategic DUI and DWI defense across Oklahoma, including suppression analysis, administrative hearing strategy, and trial-ready representation.',
    url: 'https://kernallaw.com/criminal-defense/dui-dwi',
  },
}

const duiFaqs = [
  {
    question: 'What should I do immediately after a DUI arrest in Oklahoma?',
    answer:
      'Do not discuss your case with law enforcement or investigators without counsel. Preserve the citation, release paperwork, and any temporary license documents. Immediate legal review matters because criminal and administrative deadlines can begin quickly after arrest.',
  },
  {
    question: 'Can a DUI case be dismissed?',
    answer:
      'Sometimes. Dismissal or substantial reduction is often tied to stop-legality defects, testing protocol failures, unreliable officer observations, or chain-of-custody gaps. Results depend on facts, evidence quality, and the legal record in your case.',
  },
  {
    question: 'Will I lose my driver’s license after a DUI?',
    answer:
      'Potentially. Oklahoma DUI allegations can trigger both court penalties and separate administrative license actions. Early legal strategy is critical to preserve hearing options and minimize license disruption while the criminal case is pending.',
  },
  {
    question: 'Are field sobriety tests mandatory?',
    answer:
      'Field sobriety assessments are often subjective and heavily litigated. Performance can be affected by fatigue, medical issues, roadway conditions, weather, and stress. Their evidentiary value should be tested against objective records and video.',
  },
  {
    question: 'Do I need a lawyer for a first DUI?',
    answer:
      'Yes. First allegations can still carry jail exposure, fines, interlock requirements, insurance consequences, and long-term record impact. Early representation helps protect rights and can improve negotiation posture before positions harden.',
  },
  {
    question: 'How long does a DUI case take in Oklahoma?',
    answer:
      'Timeline depends on court schedule, evidentiary disputes, and whether suppression litigation is required. Some matters resolve in months, but contested DUI cases can run longer when discovery, testing records, and motion practice are substantial.',
  },
]

export default function DuiDwiPage() {
  return (
    <ServiceDetailPage
      heroTitle="DUI / DWI Defense"
      heroSubtitle="Protect your license, record, and freedom with immediate DUI strategy across both court and DPS tracks."
      heroVariant="criminal"
      introTitle="A DUI charge creates two legal battles that must be managed together."
      introParagraphs={[
        'Oklahoma DUI cases are not just about whether an arrest occurred. They are built on layered procedures: the reason for the stop, officer observations, field-testing sequence, chemical-test handling, and documentation quality. A weakness in one layer can shift leverage across the entire case.',
        'Most people discover quickly that DUI allegations involve parallel risk. One track runs through criminal court and can affect penalties, record exposure, and liberty. The second track involves license consequences and mobility disruption. Strategy has to coordinate both at the same time.',
        'Kernal & Associates treats DUI defense as a technical litigation file from day one. We examine constitutional issues, test reliability records, and timeline defects while building a practical resolution path aligned with long-term risk, not just short-term pressure.',
      ]}
      focusTitle="What We Analyze in Every Oklahoma DUI Case"
      focusItems={[
        {
          title: 'Traffic Stop and Detention Legality',
          description:
            'The legal basis for the stop and subsequent detention is foundational. If probable cause or reasonable suspicion is weak, major portions of the State’s evidence can be limited or excluded.',
          bullets: [
            'Reasonable suspicion and stop-basis analysis',
            'Duration and expansion of detention review',
            'Dashcam/bodycam timing comparison',
            'Officer report consistency testing',
            'Witness and third-party corroboration',
            'Suppression pathway mapping',
          ],
        },
        {
          title: 'Chemical Testing and Measurement Reliability',
          description:
            'Breath and blood results are only as strong as the procedure behind them. We audit device records, collection protocol, and documentation continuity for reliability and admissibility problems.',
          bullets: [
            'Machine maintenance and calibration logs',
            'Observation-period compliance review',
            'Sample collection and transfer controls',
            'Lab process and analyst documentation',
            'Variance and uncertainty analysis',
            'Chain-of-custody integrity checks',
          ],
        },
        {
          title: 'Penalty Control and License Preservation',
          description:
            'Every recommendation should be informed by full exposure modeling. We evaluate criminal and administrative consequences together so case decisions do not create avoidable long-term damage.',
          bullets: [
            'Jail, fine, and supervision exposure',
            'Interlock and ignition-device requirements',
            'DPS hearing and suspension strategy',
            'Employment and licensing consequences',
            'Insurance and mobility impact',
            'Record-management planning',
          ],
        },
      ]}
      processTitle="DUI Defense Workflow"
      processSubtitle="A disciplined technical workflow improves leverage, negotiation quality, and trial readiness."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Intake and Deadline Control',
          description:
            'We secure reports, release paperwork, and media quickly, then map critical court and license timelines so rights are preserved from the first stage of representation.',
        },
        {
          step: '02',
          title: 'Constitutional and Technical Evidence Audit',
          description:
            'Stop basis, field assessments, chemical testing, and officer procedure are audited for constitutional defects and technical reliability weaknesses.',
        },
        {
          step: '03',
          title: 'Integrated Court and License Strategy',
          description:
            'We coordinate criminal-court positioning with administrative license planning so one track does not undermine the other.',
        },
        {
          step: '04',
          title: 'Negotiation, Motion Practice, or Trial',
          description:
            'When proposed outcomes are not reasonable, we escalate through targeted motion practice and trial-prepared litigation strategy.',
        },
      ]}
      relatedTitle="Related Defense and Location Pages"
      relatedSubtitle="Use these pages to compare DUI strategy with related charge and local-court context."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Broader service map for charge categories, litigation process, and defense priorities.',
          ctaName: 'dui_related_criminal_hub',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Cross-over strategy when impairment allegations involve controlled substances.',
          ctaName: 'dui_related_drug_charges',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Resolution planning when DUI events also involve active or missed-appearance warrants.',
          ctaName: 'dui_related_warrants',
        },
        {
          href: '/resources/oklahoma-dui-process',
          title: 'Oklahoma DUI Process Guide',
          description: 'Step-by-step guide to court process, timelines, and common decision points.',
          ctaName: 'dui_related_process_guide',
        },
        {
          href: '/oklahoma-city',
          title: 'Oklahoma City Representation',
          description: 'Metro venue context and local representation details for urgent criminal matters.',
          ctaName: 'dui_related_oklahoma_city',
        },
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Cleveland County defense strategy for drivers arrested in south-metro corridors.',
          ctaName: 'dui_related_norman_criminal',
        },
      ]}
      faqSubtitle="Quick answers to common DUI and license-risk questions in Oklahoma."
      faqs={duiFaqs}
      practiceArea="dui-dwi"
      actionChecklist={[
        'Save all citation, release, and temporary-license documents immediately.',
        'Write a private timeline while details of the stop and testing are fresh.',
        'Avoid discussing your case facts with anyone except legal counsel.',
        'Start legal review now to protect both court and license-track options.',
      ]}
      ctaTitle="Take Control of Your DUI Case Early"
      ctaDescription="The first week after arrest often determines leverage. Request a confidential DUI case review now."
      ctaLabel="Start DUI Defense"
      ctaName="dui_bottom_cta"
    />
  )
}

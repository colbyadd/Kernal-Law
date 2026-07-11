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
      'Defense for Oklahoma DUI and DWI cases, including the traffic stop, testing evidence, court proceedings, and driver’s-license issues.',
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
      'Possibly. A DUI arrest can lead to a criminal case and a separate driver’s-license process. The deadlines and available options depend on the arrest and testing records, so those documents should be reviewed promptly.',
  },
  {
    question: 'Are field sobriety tests mandatory?',
    answer:
      'Field sobriety assessments are often subjective and heavily litigated. Performance can be affected by fatigue, medical issues, roadway conditions, weather, and stress. Their evidentiary value should be tested against objective records and video.',
  },
  {
    question: 'Do I need a lawyer for a first DUI?',
    answer:
      'A first allegation can still involve jail, fines, an ignition interlock, insurance consequences, and a lasting court record. A lawyer can review the stop and testing evidence, explain both case tracks, and help you make informed decisions.',
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
      heroSubtitle="Help with the criminal case and the separate driver’s-license process after an Oklahoma DUI arrest."
      heroVariant="criminal"
      introTitle="A DUI arrest can start both a court case and a separate license process."
      introParagraphs={[
        'A DUI case can turn on the reason for the traffic stop, what the officer observed, how field tests were given, how a breath or blood sample was handled, and whether the reports match the available video.',
        'The criminal case and the driver’s-license process are separate. Each can have its own deadlines and consequences. Both should be reviewed at the outset so a decision in one does not create an avoidable problem in the other.',
        'Kernal & Associates reviews the stop, testing records, video, reports, and license documents. Todd Kernal then explains the disputed issues and the available paths, which may include negotiation, a motion hearing, or trial depending on the evidence.',
      ]}
      focusTitle="What We Review in an Oklahoma DUI Case"
      focusItems={[
        {
          title: 'Traffic Stop and Detention Legality',
          description:
            'Police need a lawful reason for the stop and for extending the detention. The reports and video should show what happened and when.',
          bullets: [
            'Reasonable suspicion and stop-basis analysis',
            'Duration and expansion of detention review',
            'Dashcam/bodycam timing comparison',
            'Officer report consistency testing',
            'Witness and third-party corroboration',
            'Possible grounds to suppress evidence',
          ],
        },
        {
          title: 'Chemical Testing and Measurement Reliability',
          description:
            'Breath and blood results depend on the equipment, collection method, records, and handling of the sample. Problems in that process may affect whether a result is reliable or admissible.',
          bullets: [
            'Machine maintenance and calibration logs',
            'Observation-period compliance review',
            'Sample collection and transfer records',
            'Lab process and analyst documentation',
            'Variance and uncertainty analysis',
            'Chain-of-custody integrity checks',
          ],
        },
        {
          title: 'Court Penalties and Driver’s-License Issues',
          description:
            'Before choosing a course, a client should understand possible court penalties, license consequences, work concerns, and the effect on day-to-day transportation.',
          bullets: [
            'Jail, fine, and supervision exposure',
            'Interlock and ignition-device requirements',
            'Department of Public Safety hearing and suspension issues',
            'Employment and licensing consequences',
            'Insurance and mobility impact',
            'Possible record consequences',
          ],
        },
      ]}
      processTitle="How We Review a DUI Case"
      processSubtitle="The work begins with deadlines and records, then turns to the legal and factual disputes in the case."
      processSteps={[
        {
          step: '01',
          title: 'Paperwork and Deadlines',
          description:
            'We review the citation, release papers, temporary license documents, and available media, then identify the court and license dates that apply.',
        },
        {
          step: '02',
          title: 'Legal and Technical Evidence Review',
          description:
            'Stop basis, field assessments, chemical testing, and officer procedure are audited for constitutional defects and technical reliability weaknesses.',
        },
        {
          step: '03',
          title: 'Court and License Planning',
          description:
            'We address the criminal case and the license process together while keeping their separate rules and deadlines clear.',
        },
        {
          step: '04',
          title: 'Negotiation, Motion Practice, or Trial',
          description:
            'Depending on the evidence, the next step may be negotiation, a motion challenging evidence, or preparation for trial.',
        },
      ]}
      relatedTitle="Related Defense and Location Pages"
      relatedSubtitle="Read about related charges, the Oklahoma DUI process, and representation in nearby courts."
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
          description: 'Related issues when an impairment allegation involves a controlled substance.',
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
          description: 'Criminal defense for cases filed in Norman and Cleveland County.',
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
        'Have both the court case and driver’s-license papers reviewed promptly.',
      ]}
      ctaTitle="Talk With an Oklahoma DUI Lawyer"
      ctaDescription="Court and driver’s-license deadlines can begin soon after arrest. Request a confidential case review."
      ctaLabel="Start DUI Defense"
      ctaName="dui_bottom_cta"
    />
  )
}

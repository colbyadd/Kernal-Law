import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Warrants Defense Lawyer',
  description:
    'Help with active Oklahoma warrants, including status review, planned surrender, bond preparation, and the underlying criminal case.',
  alternates: { canonical: '/criminal-defense/warrants' },
  openGraph: {
    title: 'Oklahoma Warrants Defense | Kernal & Associates',
    description:
      'Legal help with active Oklahoma warrants, planned court appearances, bond issues, and the underlying charge.',
    url: 'https://kernallaw.com/criminal-defense/warrants',
  },
}

const warrantsFaqs = [
  {
    question: 'What should I do if I think I have an active warrant?',
    answer:
      'Do not ignore it or rely on secondhand information. Counsel can confirm the court, case, warrant type, and available next steps. An unexpected arrest can cause more disruption than a planned response.',
  },
  {
    question: 'Can I be arrested at work or home for an active warrant?',
    answer:
      'Potentially yes. Active warrants can be enforced during traffic stops, at home, at work, or during routine contact. Confirming the warrant and planning the response may reduce avoidable disruption.',
  },
  {
    question: 'Is safe surrender better than waiting?',
    answer:
      'Often, yes. A planned appearance can provide time to prepare bond information and practical arrangements that are not possible during an unexpected arrest. It does not guarantee release or a shorter time in custody.',
  },
  {
    question: 'Can warrants be cleared without jail?',
    answer:
      'Sometimes. It depends on the warrant type, underlying charge, prior history, bond, and the court. Counsel can review those facts before an appearance, but no one should promise that custody can be avoided.',
  },
  {
    question: 'What if the warrant came from a missed court date?',
    answer:
      'A failure-to-appear warrant should be addressed promptly. The court may consider why the date was missed, prior appearance history, the underlying charge, and whether new notice and bond conditions are appropriate.',
  },
  {
    question: 'Should I call the court myself?',
    answer:
      'It is often better to speak with counsel first. A lawyer can confirm the case and ask the court clerk about procedure without making a statement about the underlying facts on your behalf.',
  },
]

export default function WarrantsPage() {
  return (
    <ServiceDetailPage
      heroTitle="Warrants Defense"
      heroSubtitle="Help confirming an active warrant and planning the next court appearance."
      heroVariant="criminal"
      introTitle="An active warrant does not become easier by waiting."
      introParagraphs={[
        'A person with an active warrant can be arrested during a traffic stop, at home, or at work. Before taking action, it helps to know which court issued the warrant, why it was issued, and whether a bond has been set.',
        'A planned appearance may allow time to gather bond information, arrange transportation, notify family or work, and prepare documents the court may consider. It cannot guarantee that custody will be avoided.',
        'Kernal & Associates confirms the warrant and underlying case, explains the likely procedure, and prepares for the appearance. Once the warrant is addressed, Todd Kernal turns to the charge or missed-hearing issue that caused it.',
      ]}
      focusTitle="What We Confirm Before an Appearance"
      focusItems={[
        {
          title: 'Warrant and Case Information',
          description:
            'The first step is confirming the warrant type, source case, court, bond information, and current docket entries.',
          bullets: [
            'Warrant source and type verification',
            'Linked charge and docket review',
            'Custody and bond information',
            'Court and timing considerations',
            'Failure-to-appear context review',
            'Related charge and probation issues',
          ],
        },
        {
          title: 'Planned Court Appearance',
          description:
            'A planned appearance can provide more predictability than an unexpected arrest, although the court and law enforcement control what happens.',
          bullets: [
            'Appearance logistics planning',
            'Bond information and documents',
            'Documentation and support preparation',
            'Court procedure review',
            'Possible custody planning',
            'Family and work disruption planning',
          ],
        },
        {
          title: 'Post-Resolution Defense Planning',
          description:
            'Clearing the warrant usually returns the underlying charge or missed appearance to the court’s active schedule.',
          bullets: [
            'Next-hearing preparation',
            'Review of the underlying charge',
            'Compliance and date tracking',
            'Future record consequences',
            'Evidence request sequencing',
            'Negotiation, motions, or trial',
          ],
        },
      ]}
      processTitle="From Warrant Check to the Next Court Date"
      processSubtitle="The work starts by confirming the warrant and then preparing for the court procedure that applies."
      processSteps={[
        {
          step: '01',
          title: 'Warrant Confirmation and Intake',
          description:
            'We confirm the warrant, source case, court, and available bond information, then explain the next procedural steps.',
        },
        {
          step: '02',
          title: 'Surrender and Bond Planning',
          description:
            'We prepare for the court appearance, including documents relevant to bond and practical plans for possible custody.',
        },
        {
          step: '03',
          title: 'Court Appearance and Warrant Resolution',
          description:
            'At the appearance, we address the warrant, bond, release conditions, and the next date in the underlying case.',
        },
        {
          step: '04',
          title: 'Underlying Case Review',
          description:
            'After the warrant is addressed, we review the charge, evidence, deadlines, and upcoming hearings.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Read about common charges and supervision issues connected with active warrants."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Broader defense service map for pending charges.',
          ctaName: 'warrants_related_criminal_hub',
        },
        {
          href: '/criminal-defense/probation-violation',
          title: 'Probation Violation Defense',
          description: 'Common overlap where warrants arise from missed compliance obligations.',
          ctaName: 'warrants_related_probation',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Related representation when the underlying charge involves impaired driving.',
          ctaName: 'warrants_related_dui',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Linked defense pathway for possession or trafficking allegations after warrant resolution.',
          ctaName: 'warrants_related_drug',
        },
        {
          href: '/oklahoma-city/criminal-defense',
          title: 'Oklahoma City Criminal Defense',
          description: 'Criminal defense for cases filed in Oklahoma City and Oklahoma County.',
          ctaName: 'warrants_related_okc_criminal',
        },
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Criminal defense for cases filed in Norman and Cleveland County.',
          ctaName: 'warrants_related_norman_criminal',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'Post-Arrest Guide',
          description: 'Immediate rights-protection checklist after arrest events.',
          ctaName: 'warrants_related_arrest_guide',
        },
      ]}
      faqSubtitle="Answers to common active warrant questions in Oklahoma."
      faqs={warrantsFaqs}
      practiceArea="warrants"
      actionChecklist={[
        'Confirm warrant status through counsel before taking any independent action.',
        'Gather case paperwork, court notices, and prior appearance records in one file.',
        'Do not discuss case facts with police or investigators without legal representation.',
        'Discuss a planned appearance and bond information before an unexpected arrest occurs.',
      ]}
      ctaTitle="Ask About an Active Oklahoma Warrant"
      ctaDescription="Confirm the warrant and understand the likely court procedure before taking action."
      ctaLabel="Start Warrant Defense"
      ctaName="warrants_bottom_cta"
    />
  )
}

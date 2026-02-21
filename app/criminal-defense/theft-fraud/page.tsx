import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Theft and Fraud Defense Lawyer',
  description:
    'Defense for Oklahoma theft, embezzlement, and fraud allegations with intent-focused strategy and evidence challenge preparation.',
  alternates: { canonical: '/criminal-defense/theft-fraud' },
  openGraph: {
    title: 'Oklahoma Theft and Fraud Defense | Kernal & Associates',
    description:
      'Strategic defense for property and financial crime allegations in Oklahoma courts.',
    url: 'https://kernallaw.com/criminal-defense/theft-fraud',
  },
}

const theftFraudFaqs = [
  {
    question: 'Can business disputes be charged as criminal fraud?',
    answer:
      'Sometimes. Prosecutors may treat disputed transactions as criminal conduct if they believe intent elements can be proven. Defense strategy often focuses on separating civil disagreement from criminal intent.',
  },
  {
    question: 'What does the prosecution have to prove in theft or fraud cases?',
    answer:
      'They must prove statutory elements such as intent, knowledge, and unlawful control beyond reasonable doubt. Many cases fail when intent evidence is weak or ambiguous.',
  },
  {
    question: 'Are financial records enough to convict?',
    answer:
      'Not automatically. Financial records require context, attribution, and reliable interpretation. Defense often challenges assumptions, incomplete records, or alternative explanations.',
  },
  {
    question: 'Can restitution discussions impact outcome?',
    answer:
      'Potentially. Depending on case posture, restitution factors can influence negotiations. Strategy should be handled carefully to avoid unnecessary admissions.',
  },
  {
    question: 'Do theft and fraud convictions affect professional licenses?',
    answer:
      'Yes, they can. Collateral consequences may include employment and licensing impacts. Early defense planning should account for long-term record risk.',
  },
  {
    question: 'How early should legal review begin?',
    answer:
      'As soon as possible. Early defense work improves evidence control and response strategy before allegations harden into a single prosecution narrative.',
  },
]

export default function TheftFraudPage() {
  return (
    <ServiceDetailPage
      heroTitle="Theft and Fraud Defense"
      heroSubtitle="Intent-focused defense for property and financial crime allegations."
      heroVariant="criminal"
      introTitle="These cases are often won on intent, context, and record interpretation."
      introParagraphs={[
        'Theft and fraud prosecutions frequently rely on selective records and assumption-based intent arguments. Strong defense requires careful reconstruction of transaction context and decision timeline.',
        'Kernal & Associates builds theft and fraud defense around element-by-element challenge strategy, evidentiary precision, and litigation readiness where negotiation posture is unreasonable.',
      ]}
      focusTitle="How We Defend Theft and Fraud Charges"
      focusItems={[
        {
          title: 'Intent-Element Challenge',
          description:
            'The State must prove criminal intent, not just bad outcomes or disputed transactions.',
          bullets: [
            'Intent timeline reconstruction',
            'Alternative explanation development',
            'Good-faith action analysis',
            'Mens rea burden challenges',
          ],
        },
        {
          title: 'Financial and Document Evidence Review',
          description:
            'Records must be complete, attributable, and interpreted correctly to support prosecution claims.',
          bullets: [
            'Source record completeness checks',
            'Attribution and authorship disputes',
            'Data-context and sequence analysis',
            'Expert-review planning where needed',
          ],
        },
        {
          title: 'Outcome and Collateral Risk Management',
          description:
            'Defense planning should address both court exposure and long-term professional impact.',
          bullets: [
            'Charge-severity risk mapping',
            'Restitution strategy controls',
            'Licensing/employment impact planning',
            'Trial-position leverage development',
          ],
        },
      ]}
      processTitle="Theft and Fraud Defense Workflow"
      processSubtitle="A precise evidence and intent strategy improves outcomes in document-heavy prosecutions."
      processSteps={[
        {
          step: '01',
          title: 'Intake and Exposure Mapping',
          description:
            'We review allegation scope, charge level, and immediate document-preservation priorities.',
        },
        {
          step: '02',
          title: 'Record and Timeline Audit',
          description:
            'Financial and transaction records are analyzed for gaps, context issues, and weak assumptions.',
        },
        {
          step: '03',
          title: 'Pretrial Strategy and Motions',
          description:
            'We challenge flawed inferences, unsupported elements, and evidentiary defects.',
        },
        {
          step: '04',
          title: 'Negotiation or Trial',
          description:
            'We negotiate from strength and litigate fully where prosecution theory is not supportable.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Explore connected charge categories and practical post-case strategy pages."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Overview of full criminal defense services in Oklahoma.',
          ctaName: 'theft_related_criminal_hub',
        },
        {
          href: '/criminal-defense/expungement',
          title: 'Expungement Services',
          description: 'Record-sealing strategy after eligible case outcomes.',
          ctaName: 'theft_related_expungement',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Handling pending warrant exposure and court-entry strategy.',
          ctaName: 'theft_related_warrants',
        },
        {
          href: '/contact',
          title: 'Request Defense Review',
          description: 'Get a case-specific legal assessment for theft or fraud allegations.',
          ctaName: 'theft_related_contact',
        },
      ]}
      faqSubtitle="Answers to common theft and fraud defense questions in Oklahoma."
      faqs={theftFraudFaqs}
      practiceArea="theft-fraud"
      ctaTitle="Clarify Intent and Evidence Before the Case Hardens"
      ctaDescription="Early legal strategy is critical in document-heavy property and financial allegations."
      ctaLabel="Start Theft and Fraud Defense"
      ctaName="theft_bottom_cta"
    />
  )
}

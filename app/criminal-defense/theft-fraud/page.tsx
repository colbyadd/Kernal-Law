import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Theft & Fraud Lawyer',
  description:
    'Defense for Oklahoma theft, embezzlement, and fraud allegations involving intent, financial records, ownership, and disputed transactions.',
  alternates: { canonical: '/criminal-defense/theft-fraud' },
  openGraph: {
    title: 'Oklahoma Theft and Fraud Defense | Kernal & Associates',
    description:
      'Defense for Oklahoma theft, embezzlement, and fraud allegations involving disputed intent and financial records.',
    url: 'https://kernallaw.com/criminal-defense/theft-fraud',
  },
}

const theftFraudFaqs = [
  {
    question: 'Can business disputes be charged as criminal fraud?',
    answer:
      'Sometimes. Prosecutors may treat a disputed transaction as criminal conduct if they believe they can prove fraudulent intent. The surrounding agreements, communications, payment history, and conduct may help show whether the matter is a civil dispute or a crime.',
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
      'Potentially. Restitution may affect negotiations in some cases, but a payment or statement can also be treated as an admission. It should be discussed with counsel before any offer or payment is made.',
  },
  {
    question: 'Do theft and fraud convictions affect professional licenses?',
    answer:
      'Yes, they can. Collateral consequences may include employment and licensing impacts. Early defense planning should account for long-term record risk.',
  },
  {
    question: 'How early should legal review begin?',
    answer:
      'As soon as practical. Early review can help preserve complete records and communications before accounts are closed, messages are lost, or only part of the transaction history is presented.',
  },
]

export default function TheftFraudPage() {
  return (
    <ServiceDetailPage
      heroTitle="Theft and Fraud Defense"
      heroSubtitle="Defense involving disputed intent, records, property, and financial transactions."
      heroVariant="criminal"
      introTitle="A disputed transaction is not automatically proof of criminal intent."
      introParagraphs={[
        'Theft, embezzlement, and fraud cases often involve bank records, contracts, messages, and competing explanations for the same transaction. A complete timeline can matter as much as any single document.',
        'Kernal & Associates reviews what the State must prove, who created or controlled the records, and whether the evidence supports criminal intent. Todd Kernal then advises on negotiations, evidentiary issues, and trial based on the facts of the case.',
      ]}
      focusTitle="Evidence in Theft and Fraud Cases"
      focusItems={[
        {
          title: 'Intent-Element Challenge',
          description:
            'The State must prove the required criminal intent, not merely a failed deal, accounting error, or disputed obligation.',
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
            'Financial records must be complete, tied to the right person, and read in context before they support a criminal allegation.',
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
            'The available options should be considered alongside possible restitution, employment, licensing, and record consequences.',
          bullets: [
            'Charge level and possible penalties',
            'Restitution questions',
            'Licensing and employment concerns',
            'Preparation for motions or trial',
          ],
        },
      ]}
      processTitle="From Records Review to Court"
      processSubtitle="The review follows the records, the timeline, and the intent the State claims those records prove."
      processSteps={[
        {
          step: '01',
          title: 'Charge and Records Review',
          description:
            'We review the allegation, charge level, available records, and documents that should be preserved or requested.',
        },
        {
          step: '02',
          title: 'Record and Timeline Analysis',
          description:
            'Financial and transaction records are organized to identify missing context, authorship questions, and disputed assumptions.',
        },
        {
          step: '03',
          title: 'Pretrial Motions and Preparation',
          description:
            'We challenge flawed inferences, unsupported elements, and evidentiary defects.',
        },
        {
          step: '04',
          title: 'Negotiation or Trial',
          description:
            'We discuss any negotiated option with the client and prepare for trial when the charge is contested.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Read about related charges, warrants, and possible record sealing after an eligible outcome."
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
          description: 'Information about sealing records after an eligible case outcome.',
          ctaName: 'theft_related_expungement',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Help with an active warrant or a missed court appearance.',
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
      ctaTitle="Get the Complete Record Reviewed"
      ctaDescription="A prompt review can preserve financial records and put the disputed transaction in its full context."
      ctaLabel="Start Theft and Fraud Defense"
      ctaName="theft_bottom_cta"
    />
  )
}

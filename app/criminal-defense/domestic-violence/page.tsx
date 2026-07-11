import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Domestic Violence Lawyer',
  description:
    'Defense for Oklahoma domestic violence allegations involving criminal charges, protective orders, no-contact terms, and bond conditions.',
  alternates: { canonical: '/criminal-defense/domestic-violence' },
  openGraph: {
    title: 'Oklahoma Domestic Violence Defense | Kernal & Associates',
    description:
      'Defense for Oklahoma domestic violence cases involving no-contact restrictions, court conditions, and disputed evidence.',
    url: 'https://kernallaw.com/criminal-defense/domestic-violence',
  },
}

const domesticViolenceFaqs = [
  {
    question: 'What should I do right after a domestic violence arrest?',
    answer:
      'Follow every release condition and avoid any prohibited contact. Do not discuss the allegations with law enforcement or third parties without counsel. A call, message, or indirect contact can create another allegation even when the intent seems harmless.',
  },
  {
    question: 'Can the case continue if the complaining witness wants to drop it?',
    answer:
      'Yes. Prosecutors control charging decisions and may continue even when a witness changes position. Defense must focus on reliability, corroboration, admissibility, and legal proof standards.',
  },
  {
    question: 'How do protective orders affect criminal defense?',
    answer:
      'A protective order can affect access to a home, communication, and family contact. Because statements and rulings in that proceeding may affect the criminal case, both matters should be reviewed together.',
  },
  {
    question: 'Will a domestic violence allegation affect firearms rights?',
    answer:
      'Potentially. Depending on case status and disposition, firearm restrictions can apply under state or federal law. Exposure should be evaluated early as part of full collateral-risk planning.',
  },
  {
    question: 'Do I need a trial lawyer for this type of case?',
    answer:
      'These cases often turn on credibility, context, and conflicting accounts. Counsel should be prepared to test that evidence at a hearing or trial, even if the case may resolve without one.',
  },
  {
    question: 'Can a domestic violence case be sealed later?',
    answer:
      'Some outcomes may qualify for later expungement depending on charge level and final disposition. Eligibility should be reviewed case-by-case after resolution and any waiting requirements.',
  },
]

export default function DomesticViolencePage() {
  return (
    <ServiceDetailPage
      heroTitle="Domestic Violence Defense"
      heroSubtitle="Help with the criminal charge, no-contact terms, and related protective-order proceedings."
      heroVariant="criminal"
      introTitle="A domestic violence arrest can affect more than the criminal case."
      introParagraphs={[
        'A domestic violence allegation may lead to criminal charges, a no-contact condition, and a separate protective-order proceeding. It can also disrupt housing, parenting arrangements, and ordinary communication before the facts have been heard in court.',
        'Release terms and court orders must be followed exactly. Attempts to explain the situation directly, even through another person, can create a new allegation or complicate the existing case.',
        'Kernal & Associates reviews the orders, statements, messages, video, and other available evidence. Todd Kernal also considers how the criminal and protective-order matters may affect one another before advising on hearings, negotiations, or trial.',
      ]}
      focusTitle="What Needs Attention First"
      focusItems={[
        {
          title: 'Following Court and Release Conditions',
          description:
            'The first task is to understand the release terms and avoid conduct that could lead to a new charge or a bond problem.',
          bullets: [
            'No-contact order interpretation',
            'Bond and release condition planning',
            'Limits on direct and indirect contact',
            'Court-compliance documentation',
            'Residence and access planning',
            'Response to alleged violations',
          ],
        },
        {
          title: 'Evidence and Credibility Analysis',
          description:
            'These cases often turn on statement reliability, timeline context, and corroboration quality rather than one isolated narrative.',
          bullets: [
            'Timeline inconsistency review',
            'Witness motive and bias analysis',
            'Digital evidence reconstruction',
            'Physical evidence cross-checking',
            'Prior statement comparison',
            'Context and escalation analysis',
          ],
        },
        {
          title: 'Criminal and Protective-Order Cases',
          description:
            'The criminal case and a protective-order case may involve the same events, witnesses, and statements. They should be handled with that overlap in mind.',
          bullets: [
            'Protective order defense alignment',
            'Collateral family-impact planning',
            'Plea and record consequences',
            'Preparation for hearings or trial',
            'Order and hearing deadlines',
            'Employment and firearm-rights concerns',
          ],
        },
      ]}
      processTitle="From Release Conditions to the Next Court Date"
      processSubtitle="The first steps are understanding the orders, preserving evidence, and preparing for the next court date."
      processSteps={[
        {
          step: '01',
          title: 'Emergency Intake and Condition Stabilization',
          description:
            'We review release terms, no-contact restrictions, and immediate compliance risk points before the first hearing cycle.',
        },
        {
          step: '02',
          title: 'Evidence Preservation and Review',
          description:
            'Statements, messages, photos, video, and timeline evidence are compared for consistency and corroboration.',
        },
        {
          step: '03',
          title: 'Pretrial Hearings and Motions',
          description:
            'We address admissibility questions, disputed allegations, and the issues that must be prepared for a hearing or trial.',
        },
        {
          step: '04',
          title: 'Resolution or Trial',
          description:
            'We negotiate from strength when justified and proceed to trial when evidence quality or legal standards do not support conviction.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Review connected defense categories and local pages relevant to your case."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Overview of charge categories, process, and defense approach.',
          ctaName: 'dv_related_criminal_hub',
        },
        {
          href: '/criminal-defense/assault-battery',
          title: 'Assault and Battery Defense',
          description: 'Defense for allegations involving threatened force, physical contact, or injury.',
          ctaName: 'dv_related_assault_battery',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Help with an active warrant or a missed court appearance.',
          ctaName: 'dv_related_warrants',
        },
        {
          href: '/criminal-defense/probation-violation',
          title: 'Probation Violation Defense',
          description: 'Related representation when a new allegation affects existing supervision.',
          ctaName: 'dv_related_probation',
        },
        {
          href: '/oklahoma-city/criminal-defense',
          title: 'Oklahoma City Criminal Defense',
          description: 'Metro venue context for Oklahoma County domestic-violence filings.',
          ctaName: 'dv_related_oklahoma_city_criminal',
        },
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Criminal defense for cases filed in Norman and Cleveland County.',
          ctaName: 'dv_related_norman_criminal',
        },
      ]}
      faqSubtitle="Answers to common questions after a domestic violence arrest in Oklahoma."
      faqs={domesticViolenceFaqs}
      practiceArea="domestic-violence"
      actionChecklist={[
        'Follow no-contact and release conditions exactly to avoid new allegations.',
        'Save all court papers, order documents, and communication records immediately.',
        'Do not discuss case facts with police, investigators, or third parties without counsel.',
        'Have the criminal case and any protective-order matter reviewed before the next hearing.',
      ]}
      ctaTitle="Talk With an Oklahoma Domestic Violence Lawyer"
      ctaDescription="Get clear guidance on release terms, protective-order deadlines, and the criminal case."
      ctaLabel="Start Domestic Violence Defense"
      ctaName="dv_bottom_cta"
    />
  )
}

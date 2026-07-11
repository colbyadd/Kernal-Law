import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Sex Crimes Defense Lawyer',
  description:
    'Confidential defense for Oklahoma sex offense allegations involving statements, digital evidence, forensic records, and trial proceedings.',
  alternates: { canonical: '/criminal-defense/sex-crimes' },
  openGraph: {
    title: 'Oklahoma Sex Crimes Defense | Kernal & Associates',
    description:
      'Confidential defense for Oklahoma sex offense allegations and related investigations.',
    url: 'https://kernallaw.com/criminal-defense/sex-crimes',
  },
}

const sexCrimesFaqs = [
  {
    question: 'Should I speak with investigators if I am accused of a sex offense?',
    answer:
      'No. Do not provide statements without counsel present. These cases are highly sensitive, and early statements can create long-term defense issues that are difficult to reverse.',
  },
  {
    question: 'Can a case proceed even with little physical evidence?',
    answer:
      'Yes. Some cases rely heavily on statements and the sequence of events. The review may include whether accounts are consistent, what other records corroborate them, and whether the evidence is admissible and reliable.',
  },
  {
    question: 'How quickly should defense counsel be involved?',
    answer:
      'As soon as possible, especially before speaking with investigators. Early involvement can help preserve messages, location data, video, and other records that may later be difficult to obtain.',
  },
  {
    question: 'Do these charges have long-term consequences beyond court penalties?',
    answer:
      'Potentially yes. Depending on outcome and charge type, collateral impacts can include registration obligations and major employment or housing consequences.',
  },
  {
    question: 'Can digital evidence be challenged in these cases?',
    answer:
      'Yes. Metadata, chain-of-custody, context, and extraction methods all matter. Digital evidence is frequently contested when context is incomplete or unreliable.',
  },
  {
    question: 'Do sex offense allegations always go to trial?',
    answer:
      'No. Some cases are declined, dismissed, or resolved without trial, while others are contested before a jury. The likely path cannot be assessed until the charge and evidence are reviewed.',
  },
]

export default function SexCrimesPage() {
  return (
    <ServiceDetailPage
      heroTitle="Sex Crimes Defense"
      heroSubtitle="Confidential representation for sex offense investigations and criminal charges."
      heroVariant="criminal"
      introTitle="Get legal advice before answering questions or sharing evidence."
      introParagraphs={[
        'A sex offense investigation can begin before an arrest or formal charge. Statements made during that period may become evidence, and digital records can be lost, overwritten, or taken out of context.',
        'Kernal & Associates handles these matters privately. Todd Kernal reviews the allegation, timeline, witness statements, digital records, and forensic evidence, then advises the client about the investigation, court proceedings, and possible trial.',
      ]}
      focusTitle="What We Review"
      focusItems={[
        {
          title: 'Contact from Police or Investigators',
          description:
            'Before speaking with police or an investigator, a person should understand the allegation and the risks of making a statement.',
          bullets: [
            'Advice before making any statement',
            'Response to investigator contact',
            'Pre-charge risk assessment',
            'Immediate evidence-preservation planning',
          ],
        },
        {
          title: 'Evidence and Credibility Analysis',
          description:
            'Case outcomes often hinge on timeline detail and statement reliability.',
          bullets: [
            'Comparison of inconsistent accounts',
            'Digital context reconstruction',
            'Witness motive and bias review',
            'Forensic reliability challenge',
          ],
        },
        {
          title: 'Court and Trial Preparation',
          description:
            'Preparation includes the legal elements, admissibility questions, witness examination, and the possible consequences of each available path.',
          bullets: [
            'Legal-element burden analysis',
            'Witness and cross-examination preparation',
            'Expert consultation when appropriate',
            'Registration and other collateral consequences',
          ],
        },
      ]}
      processTitle="From Investigation Through Trial"
      processSubtitle="The work begins with confidential advice, preservation of records, and a careful review of the allegation."
      processSteps={[
        {
          step: '01',
          title: 'Confidential Intake and Communication Advice',
          description:
            'We discuss investigator contact, court restrictions, and the events that led to the allegation.',
        },
        {
          step: '02',
          title: 'Evidence and Statement Review',
          description:
            'We compare statements, digital records, forensic reports, and investigative methods for gaps or inconsistencies.',
        },
        {
          step: '03',
          title: 'Pretrial Motions and Preparation',
          description:
            'We identify admissibility issues, prepare appropriate motions, and organize the evidence for hearings or trial.',
        },
        {
          step: '04',
          title: 'Resolution or Trial',
          description:
            'We discuss any negotiated option with the client and prepare for trial when the allegation is contested.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Read about related charges, warrants, and requesting a confidential consultation."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'An overview of criminal charges handled by Kernal & Associates.',
          ctaName: 'sex_related_criminal_hub',
        },
        {
          href: '/criminal-defense/assault-battery',
          title: 'Assault and Battery Defense',
          description: 'Defense for allegations involving threatened force, contact, or injury.',
          ctaName: 'sex_related_assault',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Help with an active warrant or a planned court appearance.',
          ctaName: 'sex_related_warrants',
        },
        {
          href: '/contact',
          title: 'Request Confidential Review',
          description: 'Immediate private consultation regarding allegations and exposure.',
          ctaName: 'sex_related_contact',
        },
      ]}
      faqSubtitle="Answers to common questions after sex offense allegations in Oklahoma."
      faqs={sexCrimesFaqs}
      practiceArea="sex-crimes"
      ctaTitle="Request a Confidential Case Review"
      ctaDescription="Talk with a lawyer before speaking with investigators or making decisions about the case."
      ctaLabel="Start Confidential Defense Review"
      ctaName="sex_bottom_cta"
    />
  )
}

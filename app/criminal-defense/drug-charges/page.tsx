import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Drug Charges Defense Lawyer',
  description:
    'Defense for Oklahoma drug allegations involving possession, distribution, trafficking, prescriptions, searches, and forensic evidence.',
  alternates: { canonical: '/criminal-defense/drug-charges' },
  openGraph: {
    title: 'Oklahoma Drug Charge Defense | Kernal & Associates',
    description:
      'Defense for Oklahoma drug allegations involving possession, searches, warrants, and laboratory evidence.',
    url: 'https://kernallaw.com/criminal-defense/drug-charges',
  },
}

const drugChargeFaqs = [
  {
    question: 'Can drug charges be dropped in Oklahoma?',
    answer:
      'Sometimes. Dismissal or major reduction is often tied to unlawful searches, weak possession attribution, forensic reliability defects, or broken evidentiary chains. Results depend on facts, legal issues, and the quality of procedural records.',
  },
  {
    question: 'What if drugs were found in a shared vehicle or residence?',
    answer:
      'Shared-space cases often raise constructive-possession questions. The State must prove more than physical proximity. The facts may include who controlled the area, who knew the substance was there, and whether it can be tied to a particular person.',
  },
  {
    question: 'Do search warrants always make evidence valid?',
    answer:
      'No. A warrant may still raise questions about probable cause, old information, the area officers were allowed to search, how the search was carried out, or whether the records are consistent. A signed warrant does not end the review.',
  },
  {
    question: 'How serious is a possession with intent allegation?',
    answer:
      'Intent allegations often carry higher exposure than simple possession and are commonly built from circumstantial factors like packaging, cash, statements, or context. Defense analysis focuses on whether those inferences are legally and factually reliable.',
  },
  {
    question: 'Can I avoid jail on a first drug offense?',
    answer:
      'Possibly. The available outcomes depend on the charge, prior history, court, and evidence. Some cases may qualify for an alternative to jail, but no result can be assessed without reviewing the specific case.',
  },
  {
    question: 'Should I talk to investigators to explain my side?',
    answer:
      'No. Do not provide statements without counsel. Even cooperative explanations can create admissions, narrow defenses, and lock in facts before full evidence review is complete.',
  },
]

export default function DrugChargesPage() {
  return (
    <ServiceDetailPage
      heroTitle="Drug Charges Defense"
      heroSubtitle="Defense for Oklahoma possession, distribution, and trafficking allegations."
      heroVariant="criminal"
      introTitle="A drug charge may depend on how evidence was found and who it can be tied to."
      introParagraphs={[
        'Many Oklahoma drug cases begin with a traffic stop, a search of a home, or the use of a search warrant. The legal basis for that search and the steps officers took can affect whether the evidence may be used.',
        'The State must also connect the alleged substance to the accused person and prove any required intent. That can be disputed when several people use the same vehicle, room, or home, or when intent is inferred from surrounding items.',
        'Kernal & Associates reviews the search, police reports, video, lab records, and chain of custody. The next step depends on that review and may include a suppression motion, negotiations, or trial.',
      ]}
      focusTitle="Questions We Review in a Drug Case"
      focusItems={[
        {
          title: 'Search and Seizure Challenges',
          description:
            'For a traffic stop, home search, or warrant search, the legal basis and scope should be checked against what officers actually did.',
          bullets: [
            'Warrant and affidavit sufficiency',
            'Consent validity and scope',
            'Probable cause timeline analysis',
            'Possible grounds to suppress evidence',
            'Scope and overreach examination',
            'Stop-to-search escalation review',
          ],
        },
        {
          title: 'Possession and Intent Disputes',
          description:
            'The State must prove knowledge and control. For more serious allegations, it may also need to prove intent from facts such as packaging, quantity, messages, or other surrounding evidence.',
          bullets: [
            'Constructive possession challenges',
            'Shared-space attribution issues',
            'Evidence used to infer intent',
            'Other explanations for the evidence',
            'Access by other occupants',
            'Knowledge-element fact testing',
          ],
        },
        {
          title: 'Evidence Integrity Review',
          description:
            'Laboratory results depend on proper collection, handling, testing, and reporting. Missing or inconsistent records may raise questions about reliability or admissibility.',
          bullets: [
            'Chain-of-custody completeness',
            'Lab protocol compliance',
            'Sample contamination risk',
            'Testing method limitations',
            'Analyst report consistency checks',
            'Weight and purity verification issues',
          ],
        },
      ]}
      processTitle="What Happens After You Hire Counsel"
      processSubtitle="The review covers the charge, the search, the connection to the accused, and the laboratory records."
      processSteps={[
        {
          step: '01',
          title: 'Charge and Records Review',
          description:
            'We review the charge, prior history, bond terms, available paperwork, and the records that should be requested first.',
        },
        {
          step: '02',
          title: 'Constitutional and Suppression Analysis',
          description:
            'We review the legal basis and scope of the search and decide whether the facts support a motion to exclude evidence.',
        },
        {
          step: '03',
          title: 'Possession, Intent, and Forensic Challenge',
          description:
            'We compare the possession and intent allegations with the physical evidence, witness accounts, and laboratory records.',
        },
        {
          step: '04',
          title: 'Negotiation, Motions, or Trial',
          description:
            'The case may proceed through negotiations, a motion asking the court to exclude evidence, or trial, depending on the facts and available options.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Explore connected topics that often overlap in Oklahoma drug prosecutions."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'An overview of criminal charges handled by Kernal & Associates.',
          ctaName: 'drug_related_criminal_hub',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Related issues when an impaired-driving allegation involves a controlled substance.',
          ctaName: 'drug_related_dui',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Planning for active warrants and missed-appearance risk tied to pending charges.',
          ctaName: 'drug_related_warrants',
        },
        {
          href: '/criminal-defense/assault-battery',
          title: 'Assault and Battery Defense',
          description: 'Defense for assault and battery allegations arising from the same incident.',
          ctaName: 'drug_related_assault',
        },
        {
          href: '/oklahoma-city/criminal-defense',
          title: 'Oklahoma City Criminal Defense',
          description: 'Metro venue context for high-volume Oklahoma County filings.',
          ctaName: 'drug_related_okc_criminal',
        },
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Criminal defense for cases filed in Norman and Cleveland County.',
          ctaName: 'drug_related_norman_criminal',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'Post-Arrest Guide',
          description: 'Practical steps to take after an Oklahoma arrest.',
          ctaName: 'drug_related_arrest_guide',
        },
      ]}
      faqSubtitle="Answers to common questions after possession or trafficking allegations."
      faqs={drugChargeFaqs}
      practiceArea="drug-charges"
      actionChecklist={[
        'Preserve all paperwork, bond terms, and any search-related documents immediately.',
        'Write down where you were and who controlled the location before details fade.',
        'Do not discuss case facts with police, investigators, or codefendants without counsel.',
        'Ask for early review of the search and the records that need to be requested.',
      ]}
      ctaTitle="Talk With an Oklahoma Drug Charges Lawyer"
      ctaDescription="A prompt review can identify search, possession, and evidence issues before the case moves forward."
      ctaLabel="Start Drug Charge Defense"
      ctaName="drug_bottom_cta"
    />
  )
}

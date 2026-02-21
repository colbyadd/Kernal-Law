import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Sex Crimes Defense Lawyer',
  description:
    'Defense for Oklahoma sex offense allegations with confidentiality-focused strategy, evidence analysis, and trial-ready representation.',
  alternates: { canonical: '/criminal-defense/sex-crimes' },
  openGraph: {
    title: 'Oklahoma Sex Crimes Defense | Kernal & Associates',
    description:
      'Strategic defense for high-stakes sex offense allegations in Oklahoma courts.',
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
      'Yes. Some prosecutions rely heavily on statement credibility and timeline interpretation. Defense strategy focuses on inconsistencies, motive, reliability, and evidentiary standards.',
  },
  {
    question: 'How quickly should defense counsel be involved?',
    answer:
      'Immediately. Early intervention can preserve exculpatory evidence, control communication risk, and shape pre-charge or early-charge strategy.',
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
      'Not always, but trial readiness is critical. Many outcomes improve when prosecution knows the defense is prepared to litigate aggressively.',
  },
]

export default function SexCrimesPage() {
  return (
    <ServiceDetailPage
      heroTitle="Sex Crimes Defense"
      heroSubtitle="Confidential, trial-ready defense for high-stakes allegations."
      heroVariant="criminal"
      introTitle="These allegations require immediate, disciplined defense control."
      introParagraphs={[
        'Sex offense allegations move quickly and often carry severe legal and personal consequences. Defense requires precise evidence work, communication control, and strategic courtroom preparation from the first contact.',
        'Kernal & Associates handles sex offense defense with confidentiality, rigorous factual testing, and a trial-ready posture designed to challenge weak, assumption-driven prosecutions.',
      ]}
      focusTitle="Core Defense Priorities"
      focusItems={[
        {
          title: 'Communication and Investigation Control',
          description:
            'Early communication mistakes can irreversibly narrow defense options.',
          bullets: [
            'Counsel-led communication protocol',
            'Investigator contact shielding',
            'Pre-charge risk assessment',
            'Immediate evidence-preservation planning',
          ],
        },
        {
          title: 'Evidence and Credibility Analysis',
          description:
            'Case outcomes often hinge on timeline detail and statement reliability.',
          bullets: [
            'Inconsistency mapping',
            'Digital context reconstruction',
            'Witness motive and bias review',
            'Forensic reliability challenge',
          ],
        },
        {
          title: 'High-Stakes Trial Preparation',
          description:
            'Strong trial preparation improves both litigation outcomes and negotiation leverage.',
          bullets: [
            'Legal-element burden analysis',
            'Cross-examination framework',
            'Expert consultation strategy',
            'Collateral consequence minimization',
          ],
        },
      ]}
      processTitle="Sex Crimes Defense Workflow"
      processSubtitle="A controlled legal process is essential when allegations carry extreme reputational and legal risk."
      processSteps={[
        {
          step: '01',
          title: 'Emergency Intake and Communication Lockdown',
          description:
            'We establish immediate communication boundaries and gather initial timeline facts.',
        },
        {
          step: '02',
          title: 'Evidence and Statement Audit',
          description:
            'We test reliability of allegations, digital records, and investigative methods.',
        },
        {
          step: '03',
          title: 'Pretrial Motion and Strategy Build',
          description:
            'We challenge evidence admissibility and position the case for maximum defense leverage.',
        },
        {
          step: '04',
          title: 'Resolution or Trial',
          description:
            'We negotiate where justified and proceed to full trial litigation when necessary.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Use these pages to review connected charge categories and defense frameworks."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Full defense service map for serious Oklahoma charges.',
          ctaName: 'sex_related_criminal_hub',
        },
        {
          href: '/criminal-defense/assault-battery',
          title: 'Assault and Battery Defense',
          description: 'Defense strategy for allegation-driven violent offense claims.',
          ctaName: 'sex_related_assault',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Handling active warrants and safe surrender strategy.',
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
      ctaTitle="Get Immediate Confidential Defense Guidance"
      ctaDescription="Early strategy can materially change exposure and outcome options."
      ctaLabel="Start Confidential Defense Review"
      ctaName="sex_bottom_cta"
    />
  )
}

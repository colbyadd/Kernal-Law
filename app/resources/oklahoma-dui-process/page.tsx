import { Metadata } from 'next'
import { ResourceGuidePage } from '../../components/ResourceGuidePage'

export const metadata: Metadata = {
  title: 'Oklahoma DUI Process Guide',
  description:
    'Understand Oklahoma DUI criminal court and administrative license timelines, key hearings, and critical defense decision points.',
  alternates: { canonical: '/resources/oklahoma-dui-process' },
  openGraph: {
    title: 'Oklahoma DUI Process Guide | Kernal & Associates',
    description:
      'A step-by-step guide to Oklahoma DUI case stages, license risk windows, and defense planning.',
    url: 'https://kernallaw.com/resources/oklahoma-dui-process',
  },
}

export default function DuiProcessGuidePage() {
  return (
    <ResourceGuidePage
      canonicalPath="/resources/oklahoma-dui-process"
      title="Oklahoma DUI Process Guide"
      subtitle="Understand the criminal case and driver-license process after an Oklahoma DUI arrest."
      intro={[
        'An Oklahoma DUI arrest can involve two separate matters: a criminal case and an administrative process affecting driving privileges.',
        'The deadlines and available options depend on the arrest date, test request, results, prior history, and notices you received. Keep every document and have the dates reviewed promptly.',
      ]}
      authorName="Kernal Law Editorial Team"
      reviewedBy="Todd Kernal"
      reviewedTitle="Founding Attorney"
      datePublished="2026-02-18"
      lastUpdated="2026-07-11"
      officialSources={[
        {
          label: 'Oklahoma Highway Safety Office: Alcohol-Impaired Driving',
          href: 'https://oklahoma.gov/highwaysafety/focus-areas/alcohol-impaired.html',
          description: 'Official Oklahoma information about DUI, driving while impaired, and related state laws.',
        },
        {
          label: 'Service Oklahoma: Modified Driver License',
          href: 'https://oklahoma.gov/service/all-pages/modified-driver-license.html',
          description: 'Current state information about modified licenses and the Impaired Driver Accountability Program.',
        },
      ]}
      immediateActionsTitle="Immediate DUI Priorities"
      immediateActions={[
        {
          label: 'Priority 1',
          title: 'Preserve Every Document and Date',
          detail:
            'Keep citations, release paperwork, hearing notices, and custody records in one file. Timeline precision drives many DUI defense decisions.',
        },
        {
          label: 'Priority 2',
          title: 'Control Statements and Communications',
          detail:
            'Do not discuss stop details, test results, or case facts by text, calls, or social media without counsel guidance.',
        },
        {
          label: 'Priority 3',
          title: 'Identify License-Track Deadlines Early',
          detail:
            'Administrative windows can close quickly. Missing them can create avoidable driving disruption independent of court outcomes.',
        },
        {
          label: 'Priority 4',
          title: 'Secure Evidence Quickly',
          detail:
            'Bodycam, dashcam, dispatch logs, and maintenance records can become harder to obtain as time passes.',
        },
        {
          label: 'Priority 5',
          title: 'Map Collateral Consequences',
          detail:
            'Identify employment, commercial driver license, professional license, and travel concerns before making case decisions.',
        },
        {
          label: 'Priority 6',
          title: 'Track Both Proceedings',
          detail:
            'Keep criminal-court dates and driver-license notices on one calendar so neither process is overlooked.',
        },
      ]}
      takeaways={[
        'DUI matters are procedural and technical, not only factual.',
        'Criminal and administrative processes often run in parallel.',
        'Missing a short license deadline can create avoidable disruption.',
        'Early evidence preservation improves suppression and negotiation options.',
        'Field and chemical testing procedures are challengeable when flawed.',
        'Trial-readiness often improves negotiated outcomes.',
        'Employment and licensing consequences should be identified at the start.',
        'A unified plan reduces contradictory moves across two legal tracks.',
      ]}
      sections={[
        {
          title: 'DUI Timeline Overview: Two Tracks Running at Once',
          paragraphs: [
            'A DUI arrest can trigger both a criminal prosecution and a separate license-risk process. These tracks have different procedures, standards, and deadlines, but they influence each other in practice.',
            'Effective defense planning starts by building one integrated timeline that covers arraignment dates, discovery milestones, and all license-related response windows.',
          ],
          bullets: [
            'Criminal case calendar and hearing sequence',
            'Administrative license events and response windows',
            'Evidence request timeline for both tracks',
            'Dates that affect court obligations or driving privileges',
          ],
        },
        {
          title: 'First 10 Days: Deadline and Evidence Control Window',
          paragraphs: [
            'The first days after arrest are important for preserving documents and identifying any response deadlines. Delay can reduce available options.',
            'Treat early days as a preservation phase: lock down records, identify witnesses, and begin an evidence map before narratives harden in official reports.',
          ],
          bullets: [
            'Collect and organize all arrest paperwork immediately',
            'Request available recordings and incident documents',
            'Document witness names and contact information',
            'Track every official notice date for procedural compliance',
          ],
        },
        {
          title: 'How DUI Evidence Is Challenged',
          paragraphs: [
            'DUI outcomes are often shaped by evidentiary detail. Common challenge points include stop legality, officer observations, field-test administration, chemical-test process, and chain-of-custody handling.',
            'No single argument applies to every case. Counsel should compare each procedure with the reports, recordings, test records, and governing law.',
          ],
          bullets: [
            'Initial stop basis and constitutional validity',
            'Field sobriety test instructions and environmental conditions',
            'Breath/blood collection procedure and calibration records',
            'Report consistency against video and dispatch records',
          ],
        },
        {
          title: 'Negotiation and Trial Decisions in DUI Cases',
          paragraphs: [
            'Many DUI cases resolve without trial, but the decision should follow a careful review of the evidence and any available motions.',
            'A disciplined decision framework compares risk, evidence quality, collateral impact, and long-term record consequences before any resolution choice is made.',
          ],
          bullets: [
            'Charge and sentencing-risk comparison',
            'Suppression probability and litigation upside',
            'Collateral effect analysis (work, licensing, insurance)',
            'Trial-readiness investment vs negotiated certainty',
          ],
        },
        {
          title: 'License-Risk Planning and Daily-Life Continuity',
          paragraphs: [
            'Losing driving privileges can affect work and family obligations. Plan for transportation, follow all requirements, and keep the related records while legal options are reviewed.',
            'Even where restrictions apply, proactive planning can reduce chaos and help preserve compliance credibility with courts and agencies.',
          ],
          bullets: [
            'Work-route and backup transportation planning',
            'Compliance calendar for reporting and restrictions',
            'Employer communication plan where necessary',
            'Contingency planning for extended case timelines',
          ],
        },
        {
          title: 'What to Bring to a DUI Attorney Meeting',
          paragraphs: [
            'Bring every available document and a timeline of the stop, testing, arrest, and release. Counsel can compare your account with the official records as they are obtained.',
            'A complete early file helps identify court deadlines, driver-license issues, possible motions, and employment or licensing concerns.',
          ],
          bullets: [
            'Citations, release papers, and booking information',
            'Known video sources and witness contacts',
            'Any notices tied to driving privileges',
            'Timeline of events from stop through release',
          ],
        },
      ]}
      faqSubtitle="Answers to common questions about Oklahoma DUI case and driver-license timelines."
      faqs={[
        {
          question: 'Is a DUI case only about criminal court?',
          answer:
            'No. Many DUI matters involve both criminal proceedings and administrative license exposure that should be managed together.',
        },
        {
          question: 'Why are early DUI deadlines so important?',
          answer:
            'Short windows can affect hearing rights and license-risk options. Missing them can create avoidable consequences.',
        },
        {
          question: 'Can DUI evidence really be challenged?',
          answer:
            'Often yes. Defense review may examine stop basis, testing procedures, report inconsistencies, and chain-of-custody issues.',
        },
        {
          question: 'Should I discuss my DUI case with family or coworkers?',
          answer:
            'Keep case facts private until counsel provides direction. Informal statements can be misunderstood and reused later.',
        },
        {
          question: 'Does trial-readiness matter if most cases settle?',
          answer:
            'Yes. Negotiation outcomes are frequently influenced by whether the defense is prepared to litigate effectively.',
        },
        {
          question: 'When should I involve a DUI lawyer?',
          answer:
            'As early as possible. Early coordination across court and license tracks usually improves available options.',
        },
      ]}
      relatedTitle="Related DUI and Criminal Defense Guides"
      relatedSubtitle="Use these pages to move from process knowledge to case-specific defense action."
      relatedLinks={[
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Charge-specific defense, hearing dates, testing issues, and driver-license concerns.',
          ctaName: 'guide_dui_process_related_dui_page',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'Post-Arrest Guide',
          description: 'First-48-hours checklist after any Oklahoma arrest event.',
          ctaName: 'guide_dui_process_related_arrest_guide',
        },
        {
          href: '/resources/oklahoma-felony-case-timeline',
          title: 'Felony Case Timeline Guide',
          description: 'Longer-form criminal process map for more serious charge exposure.',
          ctaName: 'guide_dui_process_related_felony_timeline',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Defense information when impairment allegations involve a controlled substance.',
          ctaName: 'guide_dui_process_related_drug',
        },
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Broader defense services and linked criminal charge pages.',
          ctaName: 'guide_dui_process_related_criminal_hub',
        },
        {
          href: '/contact',
          title: 'Request DUI Case Review',
          description: 'Get direct guidance on deadlines, evidence challenges, and risk control.',
          ctaName: 'guide_dui_process_related_contact',
        },
      ]}
      ctaTitle="Clarify Your DUI Timeline Before It Tightens"
      ctaDescription="Bring your notices and arrest paperwork so both timelines can be reviewed."
      ctaLabel="Start DUI Case Review"
      ctaName="guide_dui_process_bottom_cta"
    />
  )
}

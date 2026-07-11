import { Metadata } from 'next'
import { ResourceGuidePage } from '../../components/ResourceGuidePage'

export const metadata: Metadata = {
  title: 'What to Do After an Arrest in Oklahoma',
  description:
    'A practical Oklahoma arrest checklist covering the right to remain silent, release conditions, evidence preservation, and the first court date.',
  alternates: { canonical: '/resources/what-to-do-after-arrest-oklahoma' },
  openGraph: {
    title: 'What to Do After Arrest in Oklahoma | Legal Guide',
    description:
      'Immediate arrest-response steps that help protect your constitutional rights and defense position.',
    url: 'https://kernallaw.com/resources/what-to-do-after-arrest-oklahoma',
  },
}

export default function AfterArrestGuidePage() {
  return (
    <ResourceGuidePage
      canonicalPath="/resources/what-to-do-after-arrest-oklahoma"
      title="What to Do After an Arrest in Oklahoma"
      subtitle="A practical checklist for protecting your rights during the first 48 hours."
      intro={[
        'Statements, consent decisions, release conditions, and digital activity can all become part of a criminal case.',
        'Start with the immediate steps below. Then gather the documents and timeline an attorney will need to review what happened.',
      ]}
      authorName="Kernal Law Editorial Team"
      reviewedBy="Todd Kernal"
      reviewedTitle="Founding Attorney"
      datePublished="2026-02-18"
      lastUpdated="2026-07-11"
      officialSources={[
        {
          label: 'Fifth Amendment to the United States Constitution',
          href: 'https://constitution.congress.gov/constitution/amendment-5/',
          description: 'Congress.gov text and historical notes concerning the right against compelled self-incrimination.',
        },
        {
          label: 'Oklahoma Statutes, Title 22, Section 1105',
          href: 'https://www.oscn.net/applications/OCISWeb/DeliverDocument.asp?CiteID=438671',
          description: 'Current Oklahoma law addressing release, bail, and court considerations for certain arrests.',
        },
      ]}
      immediateActionsTitle="Immediate Actions After Arrest"
      immediateActions={[
        {
          label: 'Step 1',
          title: 'Use Silence Rights Immediately',
          detail:
            'Politely state that you want counsel and will not answer questions. Do not explain facts, motivations, or timeline details.',
        },
        {
          label: 'Step 2',
          title: 'Comply Without Expanding Conversation',
          detail:
            'Follow lawful instructions without arguing facts. Compliance protects safety; extra discussion can create evidence.',
        },
        {
          label: 'Step 3',
          title: 'Document Arrest and Booking Timeline',
          detail:
            'As soon as possible, record stop location, officer names, witness names, property seized, and any search or questioning details.',
        },
        {
          label: 'Step 4',
          title: 'Treat Bond and Release Terms as Critical',
          detail:
            'Read every condition in writing. Violations can lead to revocation, a new arrest, or other court consequences.',
        },
        {
          label: 'Step 5',
          title: 'Lock Down Digital Communications',
          detail:
            'Do not post, text, or message about case facts. Casual explanations are often misunderstood and later used by prosecutors.',
        },
        {
          label: 'Step 6',
          title: 'Get Defense Counsel Involved Before First Court Date',
          detail:
            'An attorney can review release terms, preserve evidence, and prepare for the first appearance.',
        },
      ]}
      takeaways={[
        'Using the right to remain silent is not an admission of guilt.',
        'Release conditions are court orders and should be followed exactly.',
        'Timeline precision from day one often determines motion quality later.',
        'Digital messages can become prosecution exhibits even when informal.',
        'Witness and location details fade quickly without immediate preservation.',
        'Early legal review can uncover deadlines and evidence that may otherwise be missed.',
        'No-contact and travel terms should be treated as strict obligations.',
        'A controlled first-week plan reduces avoidable long-term exposure.',
      ]}
      sections={[
        {
          title: 'First Six Hours: Protect the Record Before It Hardens',
          paragraphs: [
            'Most prosecutorial narratives are built from the earliest available records: bodycam audio, booking notes, officer reports, and any spontaneous statements. What you say in this window can follow the case for months.',
            'The goal in the first six hours is simple: preserve your rights, avoid unforced factual statements, and create a clean procedural record for defense review.',
          ],
          bullets: [
            'Clearly request counsel during questioning attempts',
            'Do not speculate or “clarify” facts without legal advice',
            'Note any search requests and whether consent was discussed',
            'Track booking times and property inventory details',
          ],
        },
        {
          title: 'Bond and Release Conditions: Avoid Secondary Legal Exposure',
          paragraphs: [
            'Release conditions are enforceable court orders, not suggestions. Missing a reporting requirement or contacting a restricted party can create immediate revocation risk and damage credibility with the court.',
            'If a condition is unworkable due to employment, childcare, medical treatment, or distance, modification should be requested through formal legal channels, not informal noncompliance.',
          ],
          bullets: [
            'Read every condition line-by-line the same day',
            'Calendar all check-in, court, and treatment obligations',
            'Avoid indirect no-contact communication through third parties',
            'Document practical conflicts for counsel-led modification requests',
          ],
        },
        {
          title: 'Evidence Preservation Checklist for the First Week',
          paragraphs: [
            'Facts are easier to evaluate when they are preserved before memories fade or data is lost. This includes photos, witness contacts, timeline notes, medical records, and relevant communications.',
            'Do not alter, edit, or “clean up” potentially relevant data. Preservation means securing originals in an organized way so counsel can evaluate what helps and what needs legal protection.',
          ],
          bullets: [
            'Save clothing, photos, and physical evidence when relevant',
            'Collect witness names and contact info while fresh',
            'Secure call logs, receipts, and location records',
            'Organize all citations, booking forms, and release paperwork',
          ],
        },
        {
          title: 'Digital Communications and Social Media: Hidden Case Risks',
          paragraphs: [
            'Many strong defense positions are weakened by post-arrest messages intended to reassure family or defend reputation. Even partial statements can be framed as admissions, inconsistencies, or consciousness-of-guilt arguments.',
            'Set a temporary communication protocol: logistics only, no case facts. If communication is necessary for employment or family scheduling, keep it factual and minimal.',
          ],
          bullets: [
            'Pause public posting about the incident',
            'Avoid discussing facts in group chats or direct messages',
            'Do not ask witnesses to change or hide information',
            'Preserve existing messages rather than deleting threads',
          ],
        },
        {
          title: 'Parallel Risks: Protective Orders, Licensing, and Employment',
          paragraphs: [
            'An arrest can trigger issues beyond criminal court, including emergency protective-order exposure, professional license consequences, school disciplinary action, and employer reporting obligations.',
            'Tell counsel about these issues early so advice about the criminal case does not create a separate problem at work, school, or with a licensing board.',
          ],
          bullets: [
            'Identify any licensing board or job-reporting triggers',
            'Screen for related civil or protective-order filings',
            'Coordinate necessary workplace communication with counsel',
            'Map collateral consequences before first court appearance',
          ],
        },
        {
          title: 'What to Bring to the First Attorney Meeting',
          paragraphs: [
            'Organized records and a clear timeline help counsel identify release issues, possible motions, and important evidence quickly.',
            'You do not need to pre-analyze legal theories. You do need complete facts, documents, and a timeline that counsel can test against prosecution evidence.',
          ],
          bullets: [
            'All paperwork from stop, booking, and release',
            'Known witness names and contact details',
            'Any video/photo sources or location evidence',
            'A dated timeline of key events and communications',
          ],
        },
      ]}
      faqSubtitle="Common first-48-hours questions after an Oklahoma arrest."
      faqs={[
        {
          question: 'Should I explain what happened if I think it will help?',
          answer:
            'Usually no. Early explanations frequently create inconsistencies and evidentiary problems. Request counsel and use your right to remain silent.',
        },
        {
          question: 'How serious is a bond-condition mistake?',
          answer:
            'Very serious. Violations can trigger revocation, additional charges, and reduced court confidence. Treat all conditions as strict orders.',
        },
        {
          question: 'Can I text family about the details of my case?',
          answer:
            'You should avoid discussing case facts by text or social media. Keep communications logistical until counsel provides guidance.',
        },
        {
          question: 'What documents matter most in the first week?',
          answer:
            'Stop records, booking paperwork, release terms, witness contacts, and timeline notes are usually high-value early materials.',
        },
        {
          question: 'Do first-time defendants still need immediate legal help?',
          answer:
            'Yes. A first case can still affect employment, licensing, driving privileges, and a criminal record.',
        },
        {
          question: 'What if I already made statements before reading this?',
          answer:
            'Do not try to correct or expand the statement on your own. Preserve any related records and discuss the statement with counsel.',
        },
      ]}
      relatedTitle="Related Criminal Defense Guides and Service Pages"
      relatedSubtitle="Use these pages for the next stage of the criminal process."
      relatedLinks={[
        {
          href: '/resources/oklahoma-felony-case-timeline',
          title: 'Oklahoma Felony Case Timeline',
          description: 'Understand the full case path from filing through trial-readiness decisions.',
          ctaName: 'guide_after_arrest_related_felony_timeline',
        },
        {
          href: '/resources/oklahoma-bond-and-release-conditions',
          title: 'Bond and Release Conditions Guide',
          description: 'Detailed instructions for compliance and requests to modify release terms.',
          ctaName: 'guide_after_arrest_related_bond_guide',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'What to consider before addressing an active warrant or surrendering.',
          ctaName: 'guide_after_arrest_related_warrants',
        },
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Core defense services, process standards, and direct consultation options.',
          ctaName: 'guide_after_arrest_related_criminal_hub',
        },
        {
          href: '/resources/oklahoma-dui-process',
          title: 'Oklahoma DUI Process Guide',
          description: 'If the arrest involves impairment, review both the court and driver-license processes.',
          ctaName: 'guide_after_arrest_related_dui',
        },
        {
          href: '/contact',
          title: 'Request Immediate Legal Review',
          description: 'Speak with counsel before additional statements or procedural errors occur.',
          ctaName: 'guide_after_arrest_related_contact',
        },
      ]}
      ctaTitle="Need Immediate Defense Guidance?"
      ctaDescription="Request a confidential arrest-response consultation before avoidable missteps affect your case."
      ctaLabel="Start Defense Consultation"
      ctaName="guide_after_arrest_bottom_cta"
    />
  )
}

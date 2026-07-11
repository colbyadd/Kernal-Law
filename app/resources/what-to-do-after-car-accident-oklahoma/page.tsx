import { Metadata } from 'next'
import { ResourceGuidePage } from '../../components/ResourceGuidePage'

export const metadata: Metadata = {
  title: 'What to Do: Oklahoma Car Accident',
  description:
    'A practical Oklahoma crash checklist covering medical care, scene evidence, collision reports, insurance communication, and expense records.',
  alternates: { canonical: '/resources/what-to-do-after-car-accident-oklahoma' },
  openGraph: {
    title: 'What to Do After a Car Accident in Oklahoma | Legal Guide',
    description:
      'Protect your injury claim with immediate post-crash steps and insurer communication best practices.',
    url: 'https://kernallaw.com/resources/what-to-do-after-car-accident-oklahoma',
  },
}

export default function AfterCarAccidentGuidePage() {
  return (
    <ResourceGuidePage
      canonicalPath="/resources/what-to-do-after-car-accident-oklahoma"
      title="What to Do After a Car Accident in Oklahoma"
      subtitle="A practical checklist for medical care, evidence, and insurance calls after a crash."
      intro={[
        'After a crash, deal with medical needs first. Then preserve the photographs, names, reports, bills, and insurance communications that may be difficult to replace later.',
        'This guide covers the first 24 hours, first week, and first month. Serious injuries, disputed fault, uninsured drivers, and commercial vehicles may require additional steps.',
      ]}
      authorName="Kernal Law Editorial Team"
      reviewedBy="Todd Kernal"
      reviewedTitle="Founding Attorney"
      datePublished="2026-02-18"
      lastUpdated="2026-07-11"
      officialSources={[
        {
          label: 'Service Oklahoma: Collision Report Forms',
          href: 'https://oklahoma.gov/service/all-pages/form.html',
          description: 'Official forms for requesting an Oklahoma collision report and related motor-vehicle records.',
        },
        {
          label: 'Oklahoma Insurance Department: Automobile Insurance',
          href: 'https://www.oid.ok.gov/consumers/insurance-basics/choosing-your-automobile-insurance-policy/',
          description: 'State consumer information about automobile policies, coverages, claims, and declarations pages.',
        },
      ]}
      immediateActionsTitle="Immediate Crash Response Steps"
      immediateActions={[
        {
          label: 'Step 1',
          title: 'Prioritize Medical Evaluation',
          detail:
            'Seek prompt care, even for delayed symptoms. Early medical records often become key causation evidence in claim valuation.',
        },
        {
          label: 'Step 2',
          title: 'Document Scene and Parties',
          detail:
            'Capture photos, vehicle positions, roadway conditions, and all involved contacts while evidence is still available.',
        },
        {
          label: 'Step 3',
          title: 'Preserve Vehicle and Repair Evidence',
          detail:
            'Before major repairs, preserve damage photos, repair estimates, and inspection records for liability and impact analysis.',
        },
        {
          label: 'Step 4',
          title: 'Control Insurance Communications',
          detail:
            'Report the crash and provide required information, but do not guess about fault, recovery time, or future treatment.',
        },
        {
          label: 'Step 5',
          title: 'Build a Damages File Immediately',
          detail:
            'Track treatment costs, wage loss, out-of-pocket expenses, and daily limitations from the start to avoid valuation gaps.',
        },
        {
          label: 'Step 6',
          title: 'Escalate Early for Serious or Disputed Claims',
          detail:
            'Consider legal review when injuries are serious, fault is disputed, several insurers are involved, or a release is offered early.',
        },
      ]}
      takeaways={[
        'Early medical records are often central to causation and valuation.',
        'Scene evidence degrades quickly without immediate preservation.',
        'A recorded statement can be compared with later medical records and testimony.',
        'Treatment gaps are frequently used to reduce settlement value.',
        'Do not settle before future losses are reasonably documented.',
        'Comparative-fault disputes are evidence-driven, not assumption-driven.',
        'Commercial and uninsured-driver crashes can involve additional records and policies.',
        'Keep medical, wage, and out-of-pocket records together from the beginning.',
      ]}
      sections={[
        {
          title: 'First 24 Hours: Evidence and Medical Baseline',
          paragraphs: [
            'The first day should focus on two priorities: health stabilization and evidence capture. Even when symptoms seem manageable, prompt evaluation can identify hidden injuries and create baseline records that support your claim.',
            'Photographs, witness details, and roadway context are strongest immediately after the crash. Delay can make reconstruction and liability analysis harder.',
          ],
          bullets: [
            'Get same-day medical evaluation when possible',
            'Capture vehicle, roadway, and weather-condition photos',
            'Save officer names, report numbers, and witness contacts',
            'Record time/location details before memory drift',
          ],
        },
        {
          title: 'First Week: Follow-Up Care and Records',
          paragraphs: [
            'Week one is where insurers begin evaluating exposure. Consistent treatment and complete documentation help prevent early under-valuation narratives.',
            'If providers change your treatment plan, maintain written records so progression is clear and causation arguments remain strong.',
          ],
          bullets: [
            'Attend follow-up appointments and prescribed care',
            'Keep work-restriction and wage-loss documents',
            'Store pharmacy, therapy, and transport receipts',
            'Log symptoms and functional limits by date',
          ],
        },
        {
          title: 'How to Handle Insurance Calls',
          paragraphs: [
            'An adjuster may ask for a recorded statement, medical authorization, or early settlement. Understand what is being requested before agreeing.',
            'Stick to verified facts, avoid fault admissions, and do not estimate long-term injury impact before clinical progression is known.',
          ],
          bullets: [
            'Keep communications concise and factual',
            'Avoid recorded detail statements without preparation',
            'Do not guess recovery duration or future treatment needs',
            'Archive all written insurer communications',
          ],
        },
        {
          title: 'Losses and Expenses to Document',
          paragraphs: [
            'Comprehensive damages include more than immediate emergency bills. Claims may involve future treatment costs, lost earnings, reduced earning capacity, and quality-of-life impact.',
            'Keep these records as they are created instead of trying to reconstruct them at the end of treatment.',
          ],
          bullets: [
            'Past and projected medical expenses',
            'Current and future wage-loss documentation',
            'Out-of-pocket and replacement-service costs',
            'Narrative evidence of daily-life limitations',
          ],
        },
        {
          title: 'Comparative Fault and Liability Disputes',
          paragraphs: [
            'Many Oklahoma claims involve shared-fault arguments. Liability outcomes often turn on objective evidence such as scene geometry, witness consistency, vehicle data, and timing reconstruction.',
            'A police report can be important, but it may not include every witness, recording, or piece of physical evidence.',
          ],
          bullets: [
            'Preserve dashcam and nearby surveillance sources',
            'Compare witness statements for consistency and bias',
            'Document roadway signage and intersection controls',
            'Review repair-impact patterns against claimed events',
          ],
        },
        {
          title: 'When to Speak With a Lawyer',
          paragraphs: [
            'Legal review may be useful when fault is disputed, injuries are significant, several insurers are involved, or an insurer asks for a broad release before treatment is complete.',
            'A lawyer can identify records to preserve, review available coverage, and explain the effect of a proposed settlement or release.',
          ],
          bullets: [
            'Serious or long-term injury exposure',
            'Uninsured/underinsured-driver complications',
            'Commercial truck or company-vehicle involvement',
            'Early low offers despite documented losses',
          ],
        },
      ]}
      faqSubtitle="Common questions about protecting an Oklahoma injury claim after a crash."
      faqs={[
        {
          question: 'Should I give a recorded statement right away?',
          answer:
            'Report the crash promptly, but ask what information is required and understand the purpose of any recorded statement before agreeing.',
        },
        {
          question: 'Do I need medical care if symptoms seem minor?',
          answer:
            'Yes. Prompt evaluation is important for both treatment and claim documentation because some injuries appear later.',
        },
        {
          question: 'What records matter most after a crash?',
          answer:
            'Medical records, wage-loss proof, out-of-pocket expenses, scene evidence, and insurer communications are all high-value records.',
        },
        {
          question: 'Can I settle before treatment is complete?',
          answer:
            'Settling too early can undervalue your claim. Full damages are usually clearer after medical progression is documented.',
        },
        {
          question: 'What if the other driver has little or no insurance?',
          answer:
            'Your own policy may include uninsured or underinsured motorist coverage. Review the declarations page and policy terms before signing a release.',
        },
        {
          question: 'When should I involve an injury lawyer?',
          answer:
            'As early as possible when injuries are serious, fault is disputed, or insurer tactics suggest undervaluation risk.',
        },
      ]}
      relatedTitle="Related Injury and Resource Pages"
      relatedSubtitle="Use these pages for the coverage or vehicle issues involved in your crash."
      relatedLinks={[
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Information about disputed fault, medical losses, and insurance claims.',
          ctaName: 'guide_after_accident_related_car_claims',
        },
        {
          href: '/resources/oklahoma-truck-accident-evidence-guide',
          title: 'Truck Accident Evidence Guide',
          description: 'Commercial crash records and preservation deadlines for high-value cases.',
          ctaName: 'guide_after_accident_related_truck_evidence',
        },
        {
          href: '/resources/oklahoma-uninsured-motorist-claim-guide',
          title: 'Uninsured Motorist Claim Guide',
          description: 'Coverage and claim issues when the at-fault driver has too little insurance.',
          ctaName: 'guide_after_accident_related_um_guide',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Litigation',
          description: 'Commercial-carrier records and liability issues after a serious truck crash.',
          ctaName: 'guide_after_accident_related_truck',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Coverage and recovery planning for UM/UIM disputes in Oklahoma.',
          ctaName: 'guide_after_accident_related_um',
        },
        {
          href: '/contact',
          title: 'Request Injury Case Review',
          description: 'Get immediate guidance on evidence, valuation, and settlement timing decisions.',
          ctaName: 'guide_after_accident_related_contact',
        },
      ]}
      ctaTitle="Protect Claim Value Before You Settle"
      ctaDescription="Have the available reports, insurance information, and medical records reviewed before signing a release."
      ctaLabel="Start Injury Case Review"
      ctaName="guide_after_accident_bottom_cta"
    />
  )
}

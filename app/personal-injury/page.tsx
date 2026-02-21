import { Metadata } from 'next'
import { BreadcrumbTrail } from '../components/BreadcrumbTrail'
import { PageHero } from '../components/PageHero'
import { FaqSection } from '../components/FaqSection'
import { LinkGridSection } from '../components/LinkGridSection'
import { MobileConversionBar } from '../components/MobileConversionBar'
import { PrimaryConsultationCta } from '../components/PrimaryConsultationCta'
import { QuickPathSection } from '../components/QuickPathSection'
import { TrustProofSection } from '../components/TrustProofSection'

export const metadata: Metadata = {
  title: 'Personal Injury Attorney in Oklahoma',
  description:
    'Oklahoma personal injury representation for car crashes, trucking collisions, and catastrophic injuries. No fee unless we recover compensation.',
  alternates: { canonical: '/personal-injury' },
  openGraph: {
    title: 'Oklahoma Personal Injury Attorney | Kernal & Associates',
    description:
      'Pursuing full compensation after serious accidents in Oklahoma. Car crashes, truck accidents, wrongful death, and severe injury claims.',
    url: 'https://kernallaw.com/personal-injury',
  },
}

const personalInjuryFaqs = [
  {
    question: 'How long do I have to file an injury claim in Oklahoma?',
    answer:
      'For most injury claims, Oklahoma applies a two-year statute of limitations. Some claim types have different deadlines, especially if a government entity is involved. Acting quickly helps preserve evidence and avoids deadline risks.',
  },
  {
    question: 'Do I need a lawyer if the insurer already offered money?',
    answer:
      'Yes. Early offers are often structured to close the claim before the full medical and wage impact is known. Once you sign a release, you generally cannot reopen the claim later. Legal review protects your leverage before settlement.',
  },
  {
    question: 'What compensation is typically available in injury cases?',
    answer:
      'Compensation may include medical costs, future treatment, lost wages, reduced earning capacity, pain and suffering, and in some severe matters, additional damages permitted under Oklahoma law.',
  },
  {
    question: 'What if I am partly at fault for the crash?',
    answer:
      'Oklahoma follows modified comparative fault rules. Recovery may still be available if your percentage of fault stays below the legal threshold. Fault allocation is heavily disputed in many insurer negotiations.',
  },
  {
    question: 'How long does a personal injury case take?',
    answer:
      'Simple cases can resolve in a few months. High-value or contested cases often take longer because litigation, medical development, and expert analysis require time. We prioritize full-value outcomes over rushed settlements.',
  },
  {
    question: 'How are legal fees handled in personal injury cases?',
    answer:
      'Most injury matters are handled on a contingency basis, meaning no attorney fee unless recovery is obtained. Fee structure and expenses are reviewed clearly before representation begins.',
  },
]

const processSteps = [
  {
    step: 'Step 1',
    title: 'Liability Development',
    description:
      'We secure crash reports, scene evidence, witness statements, and technical records early.',
  },
  {
    step: 'Step 2',
    title: 'Damage Documentation',
    description:
      'Medical, economic, and future-loss evidence is organized for full-value demand positioning.',
  },
  {
    step: 'Step 3',
    title: 'Litigation Pressure',
    description:
      'When insurers underpay, we escalate with structured litigation and trial-ready case framing.',
  },
]

const takeaways = [
  'Early insurer communication errors can reduce claim value before strategy begins.',
  'Documenting treatment progression is essential for full-value recovery positioning.',
  'Comparative-fault disputes are won through evidence discipline and narrative control.',
  'Serious injury claims require long-horizon planning, not rushed settlement timing.',
]

const relatedLinks = [
  {
    href: '/personal-injury/motorcycle-accidents',
    title: 'Motorcycle Accident Claims',
    description:
      'Rider-focused strategy for severe injury and liability disputes.',
    ctaName: 'injury_hub_link_motorcycle',
  },
  {
    href: '/personal-injury/catastrophic-injury',
    title: 'Catastrophic Injury Claims',
    description:
      'Long-horizon valuation strategy for life-altering trauma cases.',
    ctaName: 'injury_hub_link_catastrophic',
  },
  {
    href: '/personal-injury/slip-and-fall',
    title: 'Slip and Fall Claims',
    description:
      'Premises liability strategy for unsafe-property injuries.',
    ctaName: 'injury_hub_link_slip_fall',
  },
  {
    href: '/personal-injury/uninsured-motorist',
    title: 'Uninsured Motorist Claims',
    description:
      'Coverage-aware UM/UIM strategy for underinsured recovery disputes.',
    ctaName: 'injury_hub_link_uninsured_motorist',
  },
  {
    href: '/resources/what-to-do-after-car-accident-oklahoma',
    title: 'Post-Accident Guide',
    description:
      'Evidence and insurer communication checklist after an Oklahoma crash.',
    ctaName: 'injury_hub_link_post_accident_guide',
  },
  {
    href: '/resources/oklahoma-uninsured-motorist-claim-guide',
    title: 'Uninsured Motorist Claim Guide',
    description:
      'UM/UIM coverage and damages strategy when at-fault insurance is limited.',
    ctaName: 'injury_hub_link_um_uim_guide',
  },
  {
    href: '/resources/oklahoma-truck-accident-evidence-guide',
    title: 'Truck Accident Evidence Guide',
    description:
      'Commercial-crash evidence workflow and record-preservation priorities.',
    ctaName: 'injury_hub_link_truck_evidence_guide',
  },
  {
    href: '/resources',
    title: 'Legal Resources Hub',
    description:
      'Practical guides for immediate legal decisions in injury and defense matters.',
    ctaName: 'injury_hub_link_resources_hub',
  },
]

export default function PersonalInjuryHubPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero
        title="Personal Injury"
        subtitle="Strategic representation for serious accidents across Oklahoma."
        variant="injury"
      />
      <MobileConversionBar
        context="injury_hub"
        primaryHref="/contact"
        primaryLabel="Start Injury Review"
      />
      <BreadcrumbTrail
        items={[
          { label: 'Home', href: '/' },
          { label: 'Personal Injury' },
        ]}
      />

      <QuickPathSection
        title="Protect Claim Value Early"
        subtitle="Insurer strategy starts immediately after a crash. Choose the path that matches your claim risk now."
        items={[
          {
            badge: 'First 48 Hours',
            title: 'Recent Car Accident',
            description: 'Preserve evidence and avoid recorded-statement mistakes before claim framing hardens.',
            href: '/resources/what-to-do-after-car-accident-oklahoma',
            ctaName: 'injury_hub_quick_path_recent_crash',
          },
          {
            badge: 'High Exposure',
            title: 'Commercial Truck Crash',
            description: 'Move quickly on carrier evidence, liability analysis, and severe-damage valuation.',
            href: '/personal-injury/truck-accidents',
            ctaName: 'injury_hub_quick_path_truck',
          },
          {
            badge: 'Immediate Action',
            title: 'Request Case Evaluation',
            description: 'Get a confidential legal assessment before settlement pressure reduces leverage.',
            href: '/contact',
            ctaName: 'injury_hub_quick_path_contact',
          },
        ]}
      />

      <section className="py-12 md:py-20 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Insurance companies evaluate risk. We build pressure.
            </h2>
            <div className="space-y-5 text-silver-400 text-lg leading-relaxed">
              <p>
                Personal injury cases are won through preparation, evidence, and timing. The defense team
                is already collecting statements, preserving favorable narratives, and minimizing exposure.
                Your claim needs the same urgency and structure.
              </p>
              <p>
                Kernal &amp; Associates builds every injury case for maximum negotiating leverage. We analyze
                liability, document damages with discipline, and prepare trial-ready files when offers do
                not reflect the real value of your losses.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <article className="bg-iron-900 border border-silver-500/15 p-4">
                <h3 className="text-white font-semibold mb-2">Medical Timeline Protection</h3>
                <p className="text-silver-400">Treatment documentation is organized to prevent valuation gaps and insurer attacks.</p>
              </article>
              <article className="bg-iron-900 border border-silver-500/15 p-4">
                <h3 className="text-white font-semibold mb-2">Liability and Fault Pressure</h3>
                <p className="text-silver-400">Objective crash and witness evidence is built early to control comparative-fault disputes.</p>
              </article>
              <article className="bg-iron-900 border border-silver-500/15 p-4">
                <h3 className="text-white font-semibold mb-2">Settlement Timing Discipline</h3>
                <p className="text-silver-400">Cases are not closed before long-term damages are defined and fully supported.</p>
              </article>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <PrimaryConsultationCta
                context="injury_hub"
                controlLabel="Free Case Evaluation"
                challengerLabel="Get Injury Strategy Session"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
              />
              <a
                href="tel:+14053640601"
                data-cta="injury_hub_call_now"
                className="inline-flex items-center justify-center px-8 py-4 border border-silver-500/30 text-white font-bold uppercase tracking-widest hover:border-accent-gold transition-colors"
              >
                Call (405) 364-0601
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustProofSection
        ctaPrefix="injury_hub"
        context="injury"
      />

      <LinkGridSection
        title="Personal Injury Services"
        subtitle="Choose the accident category that best fits your case."
        columns="three"
        items={[
          {
            href: '/personal-injury/car-accidents',
            title: 'Car Accident Claims',
            description:
              'Representation for collisions involving serious injuries, disputed fault, and insurer delay tactics.',
            ctaName: 'injury_hub_link_car_accidents',
          },
          {
            href: '/personal-injury/truck-accidents',
            title: 'Truck Accident Litigation',
            description:
              'High-stakes claims involving commercial carriers, FMCSA evidence, and catastrophic damages.',
            ctaName: 'injury_hub_link_truck_accidents',
          },
          {
            href: '/personal-injury/oil-field-injuries',
            title: 'Oil Field Injury Claims',
            description:
              'Industrial and rig injury representation with technical liability and catastrophic-loss strategy.',
            ctaName: 'injury_hub_link_oil_field_injuries',
          },
          {
            href: '/personal-injury/wrongful-death',
            title: 'Wrongful Death Claims',
            description:
              'Representation for families pursuing accountability and full financial recovery after fatal negligence.',
            ctaName: 'injury_hub_link_wrongful_death',
          },
          {
            href: '/oklahoma-city',
            title: 'Oklahoma City Injury Representation',
            description:
              'Metro-area injury representation for major crashes and severe-loss claims.',
            ctaName: 'injury_hub_link_oklahoma_city',
          },
          {
            href: '/norman',
            title: 'Norman Injury Representation',
            description:
              'Cleveland County and metro-area personal injury counsel with local court familiarity.',
            ctaName: 'injury_hub_link_norman_location',
          },
        ]}
      />

      <LinkGridSection
        title="Additional Injury Topics"
        subtitle="Explore additional claim categories and practical claim-protection guides."
        columns="three"
        items={relatedLinks}
      />

      <section className="py-16 md:py-24 scroll-mt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">How We Protect Claim Value</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/10 p-7 hover:border-accent-gold/40 transition-colors"
                >
                  <p className="text-accent-gold text-[11px] uppercase tracking-[0.2em] mb-2">{item.step}</p>
                  <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {takeaways.map((item) => (
                <div
                  key={item}
                  className="bg-iron-900/70 border border-silver-500/10 p-4 text-silver-300 text-sm leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={personalInjuryFaqs}
        practiceArea="personal-injury-hub"
        subtitle="Answers to common questions before you settle your injury claim."
      />
    </main>
  )
}

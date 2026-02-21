import type { Metadata } from 'next'
import type { LinkGridItem } from '@/app/components/LinkGridSection'
import type { FaqItem, FocusItem, ProcessStep, ServiceDetailPageProps } from '@/app/components/ServiceDetailPage'

export type SubpillarFocusItems = [FocusItem, FocusItem, FocusItem]
export type SubpillarProcessSteps = [ProcessStep, ProcessStep, ProcessStep, ProcessStep]
export type SubpillarFaqs = [FaqItem, FaqItem, FaqItem, FaqItem]
export type SubpillarRelatedLinks = [
  LinkGridItem,
  LinkGridItem,
  LinkGridItem,
  LinkGridItem,
  LinkGridItem,
  LinkGridItem,
]

export interface SubpillarSpec {
  metadata: Metadata
  pageProps: Omit<ServiceDetailPageProps, 'focusItems' | 'processSteps' | 'faqs' | 'relatedLinks'> & {
    focusItems: SubpillarFocusItems
    processSteps: SubpillarProcessSteps
    faqs: SubpillarFaqs
    relatedLinks: SubpillarRelatedLinks
  }
}

const STANDARD_COUNTS = {
  focusItems: 3,
  processSteps: 4,
  faqs: 4,
  relatedLinks: 6,
} as const

const MIN_WORDS = {
  introParagraph: 14,
  processDescription: 12,
  focusDescription: 12,
  faqAnswer: 10,
} as const

const bannedCopyPatterns = [
  /\bwe guarantee\b/i,
  /\bguaranteed outcome\b/i,
  /\bcertain result\b/i,
  /\byou will win\b/i,
  /\bno-risk case\b/i,
]

function countWords(text: string): number {
  return text
    .replace(/[^a-z0-9 ]/gi, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(`Subpillar standards failed: ${message}`)
  }
}

function validateSectionCounts(pageProps: SubpillarSpec['pageProps']): void {
  assert(
    pageProps.focusItems.length === STANDARD_COUNTS.focusItems,
    `focusItems must equal ${STANDARD_COUNTS.focusItems}. Received ${pageProps.focusItems.length}.`,
  )
  assert(
    pageProps.processSteps.length === STANDARD_COUNTS.processSteps,
    `processSteps must equal ${STANDARD_COUNTS.processSteps}. Received ${pageProps.processSteps.length}.`,
  )
  assert(
    pageProps.faqs.length === STANDARD_COUNTS.faqs,
    `faqs must equal ${STANDARD_COUNTS.faqs}. Received ${pageProps.faqs.length}.`,
  )
  assert(
    pageProps.relatedLinks.length === STANDARD_COUNTS.relatedLinks,
    `relatedLinks must equal ${STANDARD_COUNTS.relatedLinks}. Received ${pageProps.relatedLinks.length}.`,
  )
}

function validateDepth(pageProps: SubpillarSpec['pageProps']): void {
  assert(pageProps.introParagraphs.length >= 2, 'introParagraphs must include at least 2 paragraphs.')
  pageProps.introParagraphs.forEach((paragraph, index) => {
    assert(
      countWords(paragraph) >= MIN_WORDS.introParagraph,
      `introParagraphs[${index}] must be at least ${MIN_WORDS.introParagraph} words.`,
    )
  })

  pageProps.focusItems.forEach((item, index) => {
    assert(
      item.bullets.length >= 4,
      `focusItems[${index}] must include at least 4 bullets.`,
    )
    assert(
      countWords(item.description) >= MIN_WORDS.focusDescription,
      `focusItems[${index}] description must be at least ${MIN_WORDS.focusDescription} words.`,
    )
  })

  pageProps.processSteps.forEach((step, index) => {
    assert(
      countWords(step.description) >= MIN_WORDS.processDescription,
      `processSteps[${index}] description must be at least ${MIN_WORDS.processDescription} words.`,
    )
  })

  pageProps.faqs.forEach((faq, index) => {
    assert(
      countWords(faq.answer) >= MIN_WORDS.faqAnswer,
      `faqs[${index}] answer must be at least ${MIN_WORDS.faqAnswer} words.`,
    )
  })
}

function validateCopySafety(spec: SubpillarSpec): void {
  const pagePropsText = [
    spec.pageProps.heroTitle,
    spec.pageProps.heroSubtitle,
    spec.pageProps.introTitle,
    ...spec.pageProps.introParagraphs,
    ...spec.pageProps.focusItems.map((item) => item.title),
    ...spec.pageProps.focusItems.map((item) => item.description),
    ...spec.pageProps.focusItems.flatMap((item) => item.bullets),
    ...spec.pageProps.processSteps.map((step) => step.title),
    ...spec.pageProps.processSteps.map((step) => step.description),
    ...spec.pageProps.faqs.map((faq) => faq.question),
    ...spec.pageProps.faqs.map((faq) => faq.answer),
    spec.pageProps.ctaTitle,
    spec.pageProps.ctaDescription,
  ]
  const metadataText = [String(spec.metadata.title ?? ''), String(spec.metadata.description ?? '')]
  const allText = [...metadataText, ...pagePropsText]

  allText.forEach((text) => {
    bannedCopyPatterns.forEach((pattern) => {
      assert(!pattern.test(text), `found banned promise language matching pattern ${pattern}.`)
    })
  })
}

function validateRelatedLinks(links: LinkGridItem[]): void {
  const hrefs = new Set<string>()
  links.forEach((link, index) => {
    assert(link.href.startsWith('/'), `relatedLinks[${index}] href must be a relative path.`)
    assert(Boolean(link.ctaName), `relatedLinks[${index}] must define ctaName.`)
    assert(!hrefs.has(link.href), `relatedLinks contains duplicate href ${link.href}.`)
    hrefs.add(link.href)
  })
}

function validateSubpillarSpec(spec: SubpillarSpec): void {
  validateSectionCounts(spec.pageProps)
  validateDepth(spec.pageProps)
  validateCopySafety(spec)
  validateRelatedLinks(spec.pageProps.relatedLinks)
}

export function createSubpillarSpec(spec: SubpillarSpec): SubpillarSpec {
  validateSubpillarSpec(spec)
  return spec
}

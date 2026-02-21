import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LocationServicePage } from '../components/LocationServicePage'
import {
  getAllMarketSlugs,
  isMarketSlug,
  type MarketSlug,
} from '@/lib/content/city-subpillars'
import { getLocationMarketPageSpec } from '@/lib/content/location-market-page-specs'

const dedicatedMarketPages = new Set<MarketSlug>([
  'oklahoma-city',
  'norman',
  'moore',
  'edmond',
  'midwest-city',
  'del-city',
  'yukon',
  'mustang',
])

const dynamicMarketSlugs = getAllMarketSlugs().filter((slug) => !dedicatedMarketPages.has(slug))

export const dynamicParams = false

function resolveMarketSlug(rawSlug: string): MarketSlug | null {
  if (!isMarketSlug(rawSlug)) {
    return null
  }
  if (dedicatedMarketPages.has(rawSlug)) {
    return null
  }
  return rawSlug
}

export function generateStaticParams() {
  return dynamicMarketSlugs.map((market) => ({ market }))
}

interface MarketPageProps {
  params: Promise<{ market: string }>
}

export async function generateMetadata({ params }: MarketPageProps): Promise<Metadata> {
  const { market } = await params
  const slug = resolveMarketSlug(market)
  if (!slug) {
    notFound()
  }
  return getLocationMarketPageSpec(slug).metadata
}

export default async function MarketLocationPage({ params }: MarketPageProps) {
  const { market } = await params
  const slug = resolveMarketSlug(market)
  if (!slug) {
    notFound()
  }

  const spec = getLocationMarketPageSpec(slug)
  return <LocationServicePage {...spec.pageProps} />
}

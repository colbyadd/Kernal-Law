import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('guthrie', 'personal-injury')

export const metadata = spec.metadata

export default function MarketPage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

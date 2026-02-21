import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('midwest-city', 'criminal-defense')

export const metadata = spec.metadata

export default function MidwestCityCriminalDefensePage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

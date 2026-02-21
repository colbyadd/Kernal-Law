import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('del-city', 'criminal-defense')

export const metadata = spec.metadata

export default function DelCityCriminalDefensePage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

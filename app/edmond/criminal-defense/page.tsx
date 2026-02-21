import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('edmond', 'criminal-defense')

export const metadata = spec.metadata

export default function EdmondCriminalDefensePage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

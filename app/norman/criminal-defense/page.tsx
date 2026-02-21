import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('norman', 'criminal-defense')

export const metadata = spec.metadata

export default function NormanCriminalDefensePage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

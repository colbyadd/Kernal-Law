import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('mustang', 'criminal-defense')

export const metadata = spec.metadata

export default function MustangCriminalDefensePage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

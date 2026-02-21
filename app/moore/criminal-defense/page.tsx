import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('moore', 'criminal-defense')

export const metadata = spec.metadata

export default function MooreCriminalDefensePage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

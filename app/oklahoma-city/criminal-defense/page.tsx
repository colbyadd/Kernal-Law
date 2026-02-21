import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('oklahoma-city', 'criminal-defense')

export const metadata = spec.metadata

export default function OklahomaCityCriminalDefensePage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('oklahoma-city', 'personal-injury')

export const metadata = spec.metadata

export default function OklahomaCityPersonalInjuryPage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

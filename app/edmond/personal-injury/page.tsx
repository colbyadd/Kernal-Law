import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('edmond', 'personal-injury')

export const metadata = spec.metadata

export default function EdmondPersonalInjuryPage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

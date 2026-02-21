import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('norman', 'personal-injury')

export const metadata = spec.metadata

export default function NormanPersonalInjuryPage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

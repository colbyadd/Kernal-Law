import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('del-city', 'personal-injury')

export const metadata = spec.metadata

export default function DelCityPersonalInjuryPage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

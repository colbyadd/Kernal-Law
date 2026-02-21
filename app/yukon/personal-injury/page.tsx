import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('yukon', 'personal-injury')

export const metadata = spec.metadata

export default function YukonPersonalInjuryPage() {
  return <ServiceDetailPage {...spec.pageProps} />
}

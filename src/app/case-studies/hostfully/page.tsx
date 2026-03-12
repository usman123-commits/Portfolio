import HostfullyCaseStudy from './HostfullyCaseStudy'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Hostfully Vacation Rental Automation — Case Study | Operata',
  description:
    'How Operata built n8n automation workflows for a Hostfully vacation rental client — automating guest messaging, booking sync, and cleaning crew scheduling.',
  alternates: { canonical: `${siteConfig.url}/case-studies/hostfully` },
  openGraph: {
    title: 'Hostfully Automation Case Study — Operata',
    description:
      'n8n workflows that automated guest messaging, booking sync, and cleaning crew scheduling for a vacation rental operator.',
    url: `${siteConfig.url}/case-studies/hostfully`,
    siteName: 'Operata',
    type: 'website',
  },
}

export default function HostfullyCaseStudyPage() {
  return <HostfullyCaseStudy />
}

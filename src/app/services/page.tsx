import { ServicesContent } from './ServicesContent'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Services — Field Service Apps & Workflow Automation | Zelvop',
  description:
    'Zelvop builds offline-first field service mobile apps and n8n workflow automation for operations teams. Purpose-built systems that run without manual effort.',
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: 'Services — Zelvop',
    description:
      'Field service mobile apps and n8n workflow automation built for operations teams.',
    url: `${siteConfig.url}/services`,
    siteName: 'Zelvop',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}

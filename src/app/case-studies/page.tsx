import { CaseStudiesContent } from './CaseStudiesContent'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Case Studies — Field Service & Automation Projects | Operata',
  description:
    'Real-world examples of field service apps and workflow automation systems built for reliable operations — including the RedEdge installation management app.',
  alternates: { canonical: `${siteConfig.url}/case-studies` },
  openGraph: {
    title: 'Case Studies — Operata',
    description:
      'Real-world field service apps and n8n workflow automation case studies.',
    url: `${siteConfig.url}/case-studies`,
    siteName: 'Operata',
    type: 'website',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudiesContent />
}

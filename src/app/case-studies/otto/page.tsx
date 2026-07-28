import OttoCaseStudy from './OttoCaseStudy'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'OTTO Food on Wheels — WhatsApp Ordering Agent | Zelvop',
  description:
    'How Zelvop built a conversational AI ordering agent for OTTO Food on Wheels — automating WhatsApp orders in Roman Urdu, transcribing voice notes, and preventing duplicate orders with a deterministic state machine.',
  alternates: { canonical: `${siteConfig.url}/case-studies/otto` },
  openGraph: {
    title: 'OTTO Food on Wheels — WhatsApp Ordering Agent | Zelvop',
    description:
      'A WhatsApp-native AI ordering agent built with n8n, Claude, and OpenAI Whisper — handling menu Q&A, order-taking, voice notes, and duplicate detection end to end.',
    url: `${siteConfig.url}/case-studies/otto`,
    siteName: 'Zelvop',
    type: 'website',
  },
}

export default function OttoCaseStudyPage() {
  return <OttoCaseStudy />
}

import { AboutContent } from "./AboutContent";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About — Usman Younes | Zelvop",
  description:
    "Independent developer specialising in field service applications and n8n workflow automation. Built for operations teams who need purpose-built tools.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About — Zelvop",
    description: "Meet Usman Younes — the developer behind Zelvop's field service and automation work.",
    url: `${siteConfig.url}/about`,
    siteName: "Zelvop",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

import { ContactContent } from "./ContactContent";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your field service app or workflow automation project. Book a free 30-min call or send a message.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return <ContactContent />;
}

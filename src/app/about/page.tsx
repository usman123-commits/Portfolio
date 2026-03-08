import { AboutContent } from "./AboutContent";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About",
  description:
    "Independent developer specializing in field service applications and n8n workflow automation. Built for operations teams who need purpose-built tools.",
};

export default function AboutPage() {
  return <AboutContent />;
}

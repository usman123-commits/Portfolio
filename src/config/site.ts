export const siteConfig = {
  name: "Field Service Engineer",
  description:
    "Offline-ready field service apps built around real installation workflows. Structured checklists, photo documentation, and reliable offline usage for field teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  ogImage: "/og-image.jpg",
  links: {
    caseStudy: "/case-study",
    process: "/process",
    principles: "/principles",
    contact: "/contact",
  },
  navItems: [
    { title: "Capabilities", href: "/#capabilities" },
    { title: "Process", href: "/process" },
    { title: "Principles", href: "/principles" },
  ],
};


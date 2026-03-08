export const siteConfig = {
  name: "Field Service Engineer",
  description:
    "Offline-ready field service apps built around real installation workflows. Structured checklists, photo documentation, and reliable offline usage for field teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  ogImage: "/og-image.jpg",
  links: {
    caseStudies: "/case-studies",
    services: "/services",
    about: "/about",
    contact: "/contact",
  },
  navItems: [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
};


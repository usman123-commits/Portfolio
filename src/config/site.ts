// TODO: Update url when domain is purchased
export const siteConfig = {
  name: "Zelvop",
  title: "Zelvop — Field Service Apps & n8n Automation",
  description:
    "Zelvop builds field service applications and n8n workflow automation for operations teams tired of manual processes.",
  author: "Usman Younes",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zelvop.com",
  ogImage: "/og-image.png",
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
  keywords: [
    "field service",
    "offline apps",
    "installation management",
    "mobile app development",
    "workflow automation",
    "field service engineer",
    "n8n",
    "n8n automation",
    "field service software",
    "operations automation",
  ],
};


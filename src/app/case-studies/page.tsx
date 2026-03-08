import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Case Studies",
  description:
    "Real-world examples of field service apps and workflow systems built for data integrity and reliable operations.",
};

const caseStudies = [
  {
    id: "installation-management",
    title: "Installation Management System",
    tagline: "Offline-ready field service app",
    description:
      "A production-tested system for installation teams with structured checklists, photo verification, and reliable offline sync. Built for data integrity and clear audit history.",
    highlights: [
      "Admin + Installer roles",
      "Structured checklist enforcement",
      "Offline sync with validation",
      "Photo verification and documentation",
      "Client signature capture",
      "Immutable completion reports",
    ],
  },
  // Add more case studies here (e.g. automation projects)
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      {/* Page Intro */}
      <section className="bg-white py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              CASE STUDIES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Real-world examples of workflow systems and field service
              applications built for reliable operations.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200"
              >
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                  {study.tagline}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {study.title}
                </h2>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-8">
                  {study.highlights.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href={siteConfig.links.contact} variant="primary">
                  Discuss Your Project
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA for more to come / get in touch */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have a similar project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss your workflow and how we can build something that
              fits your team.
            </p>
            <Button href={siteConfig.links.contact} variant="primary">
              Discuss Your Project
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

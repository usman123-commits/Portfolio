import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Services",
  description:
    "I design workflow systems that help teams capture data, automate operations, and maintain reliable processes.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Section 1 — Page Intro */}
      <section className="bg-white py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              I design workflow systems that help teams capture data, automate
              operations, and maintain reliable processes.
            </p>
          </div>
        </Container>
      </section>

      {/* Section 2 — Service Cards */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Field Service Applications */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Field Service Applications
              </h2>
              <p className="text-gray-600 mb-6">
                Custom mobile apps designed for field teams that need reliable
                data capture and structured workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Offline-first mobile apps
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Installation and inspection workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Photo verification and documentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Client signature capture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Admin dashboards
                </li>
              </ul>
            </div>

            {/* Card 2: Workflow Automation (n8n) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Workflow Automation (n8n)
              </h2>
              <p className="text-gray-600 mb-6">
                Automation systems that connect tools, APIs, and internal
                processes into reliable automated workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  API integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Data processing pipelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Scheduled automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Notification and alert systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Internal business workflow automation
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3 — Choosing the Right Approach */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                When a Mobile App is the Right Solution
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Field teams collecting data on-site
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Offline work environments
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Photo or signature documentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Structured operational workflows
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                When Automation is the Right Solution
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Repetitive digital processes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Data moving between systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  API orchestration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  Reporting automation
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4 — Call to Action */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planning a Workflow System?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss your workflow and find the right approach for your
              team.
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

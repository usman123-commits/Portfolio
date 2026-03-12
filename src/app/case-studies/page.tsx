import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Case Studies",
  description:
    "Real-world examples of field service apps and workflow systems built for data integrity and reliable operations.",
  alternates: { canonical: `${siteConfig.url}/case-studies` },
};

const caseStudies = [
  {
    id: "rental-property-operations",
    tagline: "Workflow Automation",
    badgeColor: "amber" as const,
    status: "In Development",
    title: "Rental Property Operations — End-to-End Automation",
    industryTag: "Short-Term Rental / Property Management",
    problem:
      "Every booking triggered a chain of manual work — checking cleaner availability, sending notifications, logging jobs, tracking clock-ins. Missed cleans, late arrivals, and extended checkouts were all handled reactively with no central system of record.",
    solution:
      "Built a multi-workflow n8n automation system integrated with Hostfully. When a booking arrives, it's automatically logged, a cleaner is assigned based on availability and property, Google Calendar events are created for both admin and cleaner, and a notification email is sent — all without anyone touching a spreadsheet. Extended checkouts trigger automatic schedule updates. Cleaner clock-ins via Google Form validate GPS proximity to the property and update job status in real time.",
    outcome:
      "Fully automated booking-to-clean pipeline — zero manual scheduling",
    highlights: [
      "Booking ingestion from Hostfully → Google Sheets",
      "Cleaner assignment + Google Calendar sync",
      "GPS-validated clock-in via Google Forms",
      "Extended checkout detection + auto-reschedule",
    ],
    tags: [
      "n8n",
      "Hostfully",
      "Google Sheets",
      "Google Calendar",
      "Gmail",
      "GPS Validation",
      "Workflow Automation",
    ],
  },
  {
    id: "automated-job-completion",
    tagline: "Workflow Automation",
    badgeColor: "amber" as const,
    status: "Completed",
    title: "Automated Job Completion Workflow",
    industryTag: "Field Service Operations",
    problem:
      "Technicians completed jobs on paper. Office staff manually re-entered data into three separate systems — CRM, invoicing, and client notifications — consuming 15+ hours per week.",
    solution:
      "Built an n8n workflow triggered by mobile job form submission. It automatically updates the CRM, generates a PDF job report, and sends a client completion email — all within seconds of the technician submitting the form.",
    outcome: "15 hrs/week saved — zero manual data re-entry",
    tags: [
      "n8n",
      "Webhook",
      "CRM Integration",
      "PDF Generation",
      "Email Automation",
    ],
  },
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
            <p className="mt-4 text-sm font-medium text-gray-700">
              Showing work across both service areas:
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
                🏗️ Field Service Apps
              </span>
              <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
                ⚡ n8n Automation
              </span>
            </div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <p
                    className={
                      study.badgeColor === "amber"
                        ? "text-sm font-semibold text-amber-700 uppercase tracking-wide bg-amber-100 inline-flex px-2 py-0.5 rounded"
                        : "text-sm font-semibold text-blue-600 uppercase tracking-wide"
                    }
                  >
                    {study.tagline}
                  </p>
                  {"status" in study && study.status && (
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {study.status}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {study.title}
                </h2>
                {"industryTag" in study && study.industryTag && (
                  <p className="text-sm text-gray-500 mb-4">{study.industryTag}</p>
                )}
                {"description" in study && study.description && (
                  <p className="text-gray-600 mb-6">{study.description}</p>
                )}
                {"problem" in study && study.problem && (
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">Problem: </span>
                      {study.problem}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">Solution: </span>
                      {study.solution}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">Outcome: </span>
                      {study.outcome}
                    </p>
                  </div>
                )}
                {"highlights" in study && study.highlights && (
                  <ul className="space-y-2 text-sm text-gray-700 mb-8">
                    {study.highlights.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-blue-600">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {"tags" in study && study.tags && study.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
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

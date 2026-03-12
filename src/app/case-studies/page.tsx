'use client'

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/useInView";

const caseStudies = [
  {
    id: "rededge",
    tagline: "Field Service App",
    badgeStyle: "bg-[var(--navy-100)] text-[var(--navy-700)]",
    status: "Live · Real Client",
    title: "RedEdge — Installation Management App",
    industry: "Field Service / Installation Companies",
    description:
      "A production-grade offline-first mobile app that replaces paper checklists with a structured digital workflow. Installers complete jobs, capture GPS-tagged photos, collect digital signatures, and generate PDF reports — even without internet.",
    highlights: [
      "Offline-first with automatic background sync",
      "Digital client sign-off + auto-generated PDF report",
      "Multi-installer teams with role-based access",
    ],
    tags: ["React Native", "Node.js", "MongoDB", "Expo", "Offline-First"],
    href: "/case-studies/rededge",
  },
  {
    id: "rental-property-operations",
    tagline: "Workflow Automation",
    badgeStyle: "bg-amber-100 text-amber-700",
    status: "In Development",
    title: "Rental Property Operations — End-to-End Automation",
    industry: "Short-Term Rental / Property Management",
    description:
      "Every booking triggered a chain of manual work — checking cleaner availability, sending notifications, logging jobs, tracking clock-ins. Built a multi-workflow n8n system to automate the entire booking-to-clean pipeline, GPS-validated cleaner clock-ins, and extended checkout detection.",
    highlights: [
      "Booking ingestion from Hostfully → Google Sheets",
      "Cleaner assignment + Google Calendar sync",
      "GPS-validated clock-in via Google Forms",
      "Extended checkout detection + auto-reschedule",
    ],
    tags: ["n8n", "Hostfully", "Google Sheets", "Google Calendar", "Gmail", "GPS Validation"],
    href: "/case-studies",
  },
];

export default function CaseStudiesPage() {
  const { ref: cardsRef, inView: cardsInView } = useInView()
  const { ref: ctaRef, inView: ctaInView } = useInView()

  return (
    <main className="min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative bg-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-grid-bg opacity-40" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, transparent 30%, white 90%)" }}
          />
        </div>
        <Container className="relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-6">
              OUR WORK
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-[var(--navy-950)] leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-8">
              Real-world examples of field service apps and workflow systems
              built for reliable operations.
            </p>
            {/* Category pills */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
                <span className="text-base">🏗️</span> Field Service Apps
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
                <span className="text-base">⚡</span> n8n Automation
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CASE STUDY CARDS ─── */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24">
        <Container>
          <div className="text-center mb-14">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
              PROJECTS
            </p>
            <h2
              className="text-3xl md:text-5xl text-[var(--navy-950)]"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              What we&apos;ve built
            </h2>
          </div>

          <div
            ref={cardsRef}
            className={`space-y-6 max-w-4xl mx-auto transition-all duration-700 ease-out ${
              cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className="bg-white rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:shadow-md transition-all duration-200 relative overflow-hidden flex flex-col"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Top accent stripe */}
                <div className="h-[3px] bg-[var(--navy-500)] w-full flex-shrink-0" />

                <div className="p-8 flex flex-col flex-1">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${study.badgeStyle}`}>
                      {study.tagline}
                    </span>
                    {study.status && (
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-soft)] text-[var(--text-secondary)] border border-[var(--border)]">
                        {study.status}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2
                    className="text-2xl md:text-3xl text-[var(--navy-950)] mb-2"
                    style={{ fontFamily: "var(--font-instrument-serif), serif" }}
                  >
                    {study.title}
                  </h2>

                  {/* Industry */}
                  <p className="text-sm text-[var(--text-secondary)] mb-5">
                    {study.industry}
                  </p>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Highlights */}
                  {study.highlights && (
                    <ul className="space-y-2.5 text-sm text-[var(--text-secondary)] mb-6">
                      {study.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-400)] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech tags */}
                  {study.tags && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer CTA row */}
                  <div className="mt-auto pt-6 border-t border-[var(--border)] flex flex-wrap gap-4 items-center justify-between">
                    <span className="text-sm text-[var(--text-secondary)]">
                      Interested in something similar?
                    </span>
                    <div className="flex flex-wrap gap-3 items-center">
                      {study.href && (
                        <a
                          href={study.href}
                          className="inline-flex items-center justify-center border border-[var(--navy-500)] text-[var(--navy-500)] rounded-full px-5 py-2.5 text-sm font-medium hover:bg-[var(--navy-50)] transition-colors duration-200"
                        >
                          View Case Study →
                        </a>
                      )}
                      <a
                        href={siteConfig.links.contact}
                        className="inline-flex items-center justify-center bg-[var(--navy-950)] text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-[var(--navy-800)] transition-colors duration-200"
                      >
                        Discuss Your Project
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[var(--navy-950)] py-24">
        <Container>
          <div
            ref={ctaRef}
            className={`text-center max-w-2xl mx-auto transition-all duration-700 ease-out ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="text-5xl lg:text-6xl text-white text-center mb-4 font-normal"
              style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#ffffff" }}
            >
              Have a similar project?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10">
              Let&apos;s discuss your workflow and find the right approach for
              your team.
            </p>
            <a
              href={siteConfig.links.contact}
              className="inline-flex items-center justify-center bg-white text-[var(--navy-950)] rounded-full px-8 py-4 text-base font-medium hover:bg-[var(--navy-50)] transition-colors duration-200"
            >
              Discuss Your Project
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}

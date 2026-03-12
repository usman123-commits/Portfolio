'use client'

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/useInView";

export function ServicesContent() {
  // Hero
  const { ref: headRef, animationStyle: headStyle } = useInView(0.15, 'up')

  // Cards
  const { ref: cardsHeadRef, animationStyle: cardsHeadStyle } = useInView(0.15, 'up')
  const { ref: card1Ref, animationStyle: card1Style } = useInView(0.15, 'left')
  const { ref: card2Ref, animationStyle: card2Style } = useInView(0.15, 'right')

  // Approach
  const { ref: approachHeadRef, animationStyle: approachHeadStyle } = useInView(0.15, 'up')
  const { ref: app1Ref, animationStyle: app1Style } = useInView(0.15, 'left')
  const { ref: app2Ref, animationStyle: app2Style } = useInView(0.15, 'right')

  // CTA
  const { ref: ctaHeadRef, animationStyle: ctaHeadStyle } = useInView(0.15, 'up')
  const { ref: ctaBtnRef, animationStyle: ctaBtnStyle } = useInView(0.15, 'up')

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
          <div ref={headRef} style={headStyle} className="max-w-3xl mx-auto text-center">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-6">
              WHAT WE BUILD
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-[var(--navy-950)] leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              Services
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              Purpose-built systems for operations teams — field service apps
              and workflow automation that actually work in the real world.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24">
        <Container>
          <div ref={cardsHeadRef} style={cardsHeadStyle} className="text-center mb-14">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
              OUR CAPABILITIES
            </p>
            <h2
              className="text-3xl md:text-5xl text-[var(--navy-950)]"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              Two core service areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Field Service Applications */}
            <div ref={card1Ref} style={card1Style} className="bg-white p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
              <div className="w-12 h-12 bg-[var(--navy-50)] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-3">
                SERVICE 01
              </p>
              <h2
                className="text-2xl text-[var(--navy-950)] mb-4"
                style={{ fontFamily: "var(--font-instrument-serif), serif" }}
              >
                Field Service Applications
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Custom mobile apps designed for field teams that need reliable
                data capture and structured workflows — even without internet.
              </p>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)] mb-8">
                {[
                  "Offline-first mobile apps",
                  "Installation and inspection workflows",
                  "Photo verification and GPS-tagged documentation",
                  "Digital client signature capture",
                  "Admin dashboards and team management",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-400)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/case-studies/rededge" variant="ghost" className="text-[var(--navy-500)]">
                See RedEdge Case Study →
              </Button>
            </div>

            {/* Card 2: Workflow Automation */}
            <div
              ref={card2Ref} style={card2Style}
              className="bg-white p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
              <div className="w-12 h-12 bg-[var(--navy-50)] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-3">
                SERVICE 02
              </p>
              <h2
                className="text-2xl text-[var(--navy-950)] mb-4"
                style={{ fontFamily: "var(--font-instrument-serif), serif" }}
              >
                Workflow Automation (n8n)
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Automation systems that connect tools, APIs, and internal
                processes into reliable automated workflows — without expensive
                SaaS platforms.
              </p>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)] mb-8">
                {[
                  "API integrations and data pipelines",
                  "Booking ingestion and auto-assignment",
                  "Notification and alert systems",
                  "Scheduled reporting automation",
                  "Internal business workflow automation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-400)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/case-studies" variant="ghost" className="text-[var(--navy-500)]">
                View Case Studies →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CHOOSING THE RIGHT APPROACH ─── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div ref={approachHeadRef} style={approachHeadStyle} className="text-center mb-14">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
              HOW TO CHOOSE
            </p>
            <h2
              className="text-3xl md:text-5xl text-[var(--navy-950)]"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              Finding the right fit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div ref={app1Ref} style={app1Style} className="bg-[var(--surface-soft)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 bg-[var(--navy-50)] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--navy-950)] mb-4">Use a Mobile App when…</h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  "Field teams collect data on-site",
                  "Work happens in offline environments",
                  "Photos or signatures need capturing",
                  "Structured checklists drive the workflow",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="text-[var(--navy-400)] text-base leading-none">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              ref={app2Ref} style={app2Style}
              className="bg-[var(--surface-soft)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-10 h-10 bg-[var(--navy-50)] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--navy-950)] mb-4">Use Automation when…</h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  "Repetitive digital processes need eliminating",
                  "Data moves between multiple systems",
                  "APIs or third-party tools need connecting",
                  "Reports are generated manually today",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="text-[var(--navy-400)] text-base leading-none">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[var(--navy-950)] py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2
              ref={ctaHeadRef}
              className="text-5xl lg:text-6xl text-white text-center mb-4 font-normal"
              style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#ffffff", ...ctaHeadStyle }}
            >
              Planning a workflow system?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10">
              Let&apos;s discuss your workflow and find the right approach for your team.
            </p>
            <div ref={ctaBtnRef} style={{ ...ctaBtnStyle, transitionDelay: "150ms" }}>
              <a
                href={siteConfig.links.contact}
                className="inline-flex items-center justify-center bg-white text-[var(--navy-950)] rounded-full px-8 py-4 text-base font-medium hover:bg-[var(--navy-50)] transition-colors duration-200"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

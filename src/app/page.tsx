'use client'

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

import { useInView } from "@/hooks/useInView";

export default function HomePage() {
  // Who this is for
  const { ref: whoHeadRef, animationStyle: whoHeadStyle } = useInView(0.15, 'left')
  const { ref: who1Ref, animationStyle: who1Style } = useInView(0.15, 'up')
  const { ref: who2Ref, animationStyle: who2Style } = useInView(0.15, 'up')
  const { ref: who3Ref, animationStyle: who3Style } = useInView(0.15, 'up')
  const { ref: who4Ref, animationStyle: who4Style } = useInView(0.15, 'up')
  const whoRefs = [who1Ref, who2Ref, who3Ref, who4Ref]
  const whoStyles = [who1Style, who2Style, who3Style, who4Style]

  // The Problem
  const { ref: probHeadRef, animationStyle: probHeadStyle } = useInView(0.15, 'up')
  const { ref: prob1Ref, animationStyle: prob1Style } = useInView(0.15, 'left')
  const { ref: prob2Ref, animationStyle: prob2Style } = useInView(0.15, 'right')
  const probRefs = [prob1Ref, prob2Ref]
  const probStyles = [prob1Style, prob2Style]

  // The Solution
  const { ref: solHeadRef, animationStyle: solHeadStyle } = useInView(0.15, 'up')
  const { ref: sol1Ref, animationStyle: sol1Style } = useInView(0.15, 'left')
  const { ref: sol2Ref, animationStyle: sol2Style } = useInView(0.15, 'up')
  const { ref: sol3Ref, animationStyle: sol3Style } = useInView(0.15, 'right')
  const { ref: sol4Ref, animationStyle: sol4Style } = useInView(0.15, 'up')
  const solRefs = [sol1Ref, sol2Ref, sol3Ref, sol4Ref]
  const solStyles = [sol1Style, sol2Style, sol3Style, sol4Style]
  const solDelays = [0, 100, 0, 200] // per user instructions

  // Services Strip
  const { ref: svc1Ref, animationStyle: svc1Style } = useInView(0.15, 'left')
  const { ref: svc2Ref, animationStyle: svc2Style } = useInView(0.15, 'right')

  // Final CTA
  const { ref: ctaHeadRef, animationStyle: ctaHeadStyle } = useInView(0.15, 'up')
  const { ref: ctaBtnRef, animationStyle: ctaBtnStyle } = useInView(0.15, 'up')

  return (
    <main className="min-h-screen">
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative bg-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Grid pattern + radial fade */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-grid-bg opacity-50" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, transparent 30%, white 90%)" }}
          />
        </div>

        <Container className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-6 animate-fade-up animate-fade-up-delay-1">
              FIELD SERVICE &amp; AUTOMATION
            </p>

            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--navy-950)] leading-[1.05] tracking-tight mb-8 animate-fade-up animate-fade-up-delay-2"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              Operations software
              <br />
              built for the{" "}
              <span className="text-[var(--navy-500)]">field.</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up animate-fade-up-delay-3">
              Zelvop builds mobile field service apps and n8n workflow
              automation for operations teams — purpose-built systems that
              work without internet and run without manual effort.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 animate-fade-up animate-fade-up-delay-4">
              <Button
                href={siteConfig.links.caseStudies}
                variant="primary"
                className="w-full sm:w-auto shadow-[0_4px_24px_rgba(10,15,30,0.15)] px-7"
              >
                See Our Work
              </Button>
              <Button
                href={siteConfig.links.contact}
                variant="secondary"
                className="w-full sm:w-auto px-7"
              >
                Get in Touch
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-y-1 gap-x-8 text-sm text-[var(--text-secondary)] text-center animate-fade-up animate-fade-up-delay-4">
              <span className="flex items-center gap-1.5">
                <span className="text-[var(--navy-400)]">✓</span> Real client projects
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[var(--navy-400)]">✓</span> Offline-capable apps
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[var(--navy-400)]">✓</span> Remote · Available worldwide
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────── WHO THIS IS FOR ─────────────────── */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24 animate-section-wrapper">
        <Container>
          <div ref={whoHeadRef} style={whoHeadStyle} className="text-center mb-16">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
              WHO THIS IS FOR
            </p>
            <h2
              className="text-3xl md:text-5xl text-[var(--navy-950)]"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              Built for teams that work in the field
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Installation Teams",
                description: "Standardize setup with digital guides and structured workflows.",
                icon: (
                  <svg className="w-6 h-6 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Field Technicians",
                description: "Simple tools for site work and accurate data capture.",
                icon: (
                  <svg className="w-6 h-6 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Equipment Deployment",
                description: "Track assets with photo-verified logs and precise validation.",
                icon: (
                  <svg className="w-6 h-6 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                ),
              },
              {
                title: "Operations Managers",
                description: "Visibility into field status with structured digital reports.",
                icon: (
                  <svg className="w-6 h-6 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={whoRefs[index]}
                className="bg-white p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                style={{ ...whoStyles[index], transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[var(--navy-50)] rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────── THE PROBLEM ─────────────────── */}
      <section className="bg-[var(--navy-950)] text-white py-16 lg:py-24 animate-section-wrapper">
        <Container>
          <div ref={probHeadRef} style={probHeadStyle} className="text-center mb-12">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-400)] uppercase tracking-[0.12em] mb-4">
              THE PROBLEM
            </p>
            <h2
              className="font-normal text-4xl text-white text-center mb-4"
              style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#ffffff" }}
            >
              Why paper-based operations fail
            </h2>
            <p className="text-white/70 text-center max-w-xl mx-auto mb-12">
              Manual processes don&apos;t scale. Here&apos;s what breaks first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Paper-based workflows",
                description: "Forms that are easily lost, illegible, and require manual re-keying into multiple databases.",
                icon: "📄",
              },
              {
                title: "Inconsistent documentation",
                description: "Missing photos, incomplete checklists, and lack of standardized compliance reporting.",
                icon: "📸",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={probRefs[index]}
                className="bg-[var(--navy-800)] p-8 rounded-2xl border border-[var(--navy-700)] border-l-2 border-l-[var(--navy-400)]"
                style={probStyles[index]}
              >
                <div className="bg-[var(--navy-500)]/20 rounded-full p-3 w-fit mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3
                  className="text-white font-semibold text-xl mb-3"
                  style={{ color: "#ffffff" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────── THE SOLUTION ─────────────────── */}
      <section className="bg-white py-16 lg:py-24 animate-section-wrapper">
        <Container>
          <div ref={solHeadRef} style={solHeadStyle} className="text-center mb-16">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
              THE SOLUTION
            </p>
            <h2
              className="text-3xl md:text-5xl text-[var(--navy-950)]"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              Focused on data integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Offline-first design",
                description: "Apps work without a signal, storing data locally and syncing automatically.",
                icon: "📶",
              },
              {
                title: "Checklist-driven",
                description: "Enforce standard operating procedures through a guided digital UI.",
                icon: "✅",
              },
              {
                title: "Visual documentation",
                description: "Capture and tag visual evidence and digital client sign-offs.",
                icon: "✍️",
              },
              {
                title: "Immutable records",
                description: "Maintain a tamper-proof history of complete work performed.",
                icon: "🔒",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={solRefs[index]}
                className="bg-[var(--surface-soft)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                style={{ ...solStyles[index], transitionDelay: `${solDelays[index]}ms` }}
              >
                <div className="text-3xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────── SERVICES STRIP ─────────────────── */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Card 1 */}
            <div ref={svc1Ref} style={svc1Style} className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl border border-[var(--border)] relative overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-5">
                SERVICE 01
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--navy-950)]">
                Field Service Applications
              </h3>
              <p className="text-[var(--text-secondary)] mb-8">
                Purpose-built mobile apps for installation teams, field technicians, and operations managers.
                Offline-first, checklist-driven, with digital sign-off and PDF reporting.
              </p>
              <Button href="/case-studies/rededge" variant="ghost" className="text-[var(--navy-500)]">
                View RedEdge Case Study →
              </Button>
            </div>

            {/* Card 2 */}
            <div
              ref={svc2Ref}
              className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl border border-[var(--border)] relative overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              style={svc2Style}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-5">
                SERVICE 02
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--navy-950)]">
                n8n Workflow Automation
              </h3>
              <p className="text-[var(--text-secondary)] mb-8">
                Connect your tools and eliminate manual handoffs. Booking ingestion, auto-assignment,
                notifications, and reporting — automated end to end without expensive platforms.
              </p>
              <Button href="/case-studies" variant="ghost" className="text-[var(--navy-500)]">
                View Automation Case Study →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────── FINAL CTA ─────────────────── */}
      <section className="bg-[var(--navy-950)] py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2
              ref={ctaHeadRef}
              className="text-5xl lg:text-6xl text-white text-center mb-4 font-normal"
              style={{ fontFamily: "var(--font-instrument-serif), serif", ...ctaHeadStyle }}
            >
              Ready to build something?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10">
              Tell me about your project.
            </p>
            <div ref={ctaBtnRef} style={{ ...ctaBtnStyle, transitionDelay: "150ms" }}>
              <a
                href={siteConfig.links.contact}
                className="inline-flex items-center justify-center bg-white text-[var(--navy-950)] rounded-full px-8 py-4 text-base font-medium hover:bg-[var(--navy-50)] transition-colors duration-200"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Operata | Purpose-built systems for operations teams",
  description:
    "Operata builds mobile field service apps and n8n workflow automation for operations teams — purpose-built systems that work without internet and run without manual effort.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HOMEPAGE HERO */}
      <section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-grid-bg opacity-50"></div>
          {/* Radial gradient to fade out grid edges */}
          <div 
            className="absolute inset-0" 
            style={{ background: "radial-gradient(ellipse at center, transparent 30%, white 90%)" }}
          ></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-6 animate-fade-up animate-fade-up-delay-1">
              FIELD SERVICE & AUTOMATION
            </p>
            
            <h1 className="text-4xl md:text-6xl text-[var(--navy-950)] leading-[1.1] mb-8 animate-fade-up animate-fade-up-delay-2" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
              Operations software<br />
              built for the <span className="text-[var(--navy-500)]">field.</span>
            </h1>
            
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto mb-10 animate-fade-up animate-fade-up-delay-3">
              Operata builds mobile field service apps and n8n workflow
              automation for operations teams — purpose-built systems that
              work without internet and run without manual effort.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up animate-fade-up-delay-4">
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
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--text-muted)] animate-fade-up animate-fade-up-delay-4">
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

      {/* WHO THIS IS FOR */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24">
        <Container>
          <div className="text-center mb-16">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
              WHO THIS IS FOR
            </p>
            <h2 className="text-3xl md:text-5xl text-[var(--navy-950)]" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
              Built for teams that work in the field
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Installation Teams",
                description:
                  "Standardize setup with digital guides and structured workflows.",
                icon: (
                  <svg className="w-6 h-6 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "Field Technicians",
                description:
                  "Simple tools for site work and accurate data capture.",
                icon: (
                  <svg className="w-6 h-6 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Equipment Deployment",
                description:
                  "Track assets with photo-verified logs and precise validation.",
                icon: (
                  <svg className="w-6 h-6 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                )
              },
              {
                title: "Operations Managers",
                description:
                  "Visibility into field status with structured digital reports.",
                icon: (
                  <svg className="w-6 h-6 text-[var(--navy-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-[var(--navy-50)] rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-[var(--navy-950)] text-white py-16 lg:py-24">
        <Container>
          <div className="text-center mb-16">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-400)] uppercase tracking-[0.12em] mb-4">
              THE PROBLEM
            </p>
            <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
              Solving real operational challenges
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Reliable data starts with tools that don&apos;t fail in the field. Help
              teams move away from fragile processes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Paper-based workflows",
                description:
                  "Forms that are easily lost, illegible, and require manual re-keying into multiple databases.",
                icon: "📄"
              },
              {
                title: "Inconsistent documentation",
                description:
                  "Missing photos, incomplete checklists, and lack of standardized compliance reporting.",
                icon: "📸"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--navy-800)] p-8 rounded-2xl border border-[var(--navy-700)]"
              >
                <div className="text-3xl mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* THE SOLUTION */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="text-center mb-16">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
              THE SOLUTION
            </p>
            <h2 className="text-3xl md:text-5xl text-[var(--navy-950)]" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
              Focused on data integrity
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Offline-first design",
                description:
                  "Apps work without a signal, storing data locally and syncing automatically.",
                icon: "📶"
              },
              {
                title: "Checklist-driven",
                description:
                  "Enforce standard operating procedures through a guided digital UI.",
                icon: "✅"
              },
              {
                title: "Visual documentation",
                description:
                  "Capture and tag visual evidence and digital client sign-offs.",
                icon: "✍️"
              },
              {
                title: "Immutable records",
                description:
                  "Maintain a tamper-proof history of complete work performed.",
                icon: "🔒"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--surface-soft)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:shadow-md transition-all duration-200"
              >
                <div className="text-3xl mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES STRIP */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24">
        <Container>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Card 1 */}
            <div className="flex-1 bg-white p-8 lg:p-12 rounded-2xl border border-[var(--border)] relative overflow-hidden group hover:shadow-md transition-all duration-200">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)] opacity-100"></div>
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-5">
                SERVICE 01
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--navy-950)]">
                Field Service Applications
              </h3>
              <p className="text-[var(--text-secondary)] mb-8">
                Purpose-built mobile apps for installation teams, field
                technicians, and operations managers. Offline-first,
                checklist-driven, with digital sign-off and PDF reporting.
              </p>
              <Button href="/case-studies/rededge" variant="ghost" className="text-[var(--navy-500)]">
                View RedEdge Case Study →
              </Button>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white p-8 lg:p-12 rounded-2xl border border-[var(--border)] relative overflow-hidden group hover:shadow-md transition-all duration-200">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)] opacity-100"></div>
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-5">
                SERVICE 02
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--navy-950)]">
                n8n Workflow Automation
              </h3>
              <p className="text-[var(--text-secondary)] mb-8">
                Connect your tools and eliminate manual handoffs. Booking
                ingestion, auto-assignment, notifications, and reporting —
                automated end to end without expensive platforms.
              </p>
              <Button href="/case-studies" variant="ghost" className="text-[var(--navy-500)]">
                View Automation Case Study →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-[var(--navy-950)] py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl text-white mb-6" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
              Ready to build something?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10">
              Tell me about your project.
            </p>
            <Button 
              href={siteConfig.links.contact} 
              className="bg-white text-[var(--navy-950)] hover:bg-[var(--surface-soft)] rounded-full px-8 py-4 font-medium transition-colors border border-white"
            >
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

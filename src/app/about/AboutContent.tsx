'use client'

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/useInView";


export function AboutContent() {
  // Hero
  const { ref: heroRef, animationStyle: heroStyle } = useInView(0.15, 'up')

  // Why I focus
  const { ref: focusHeadRef, animationStyle: focusHeadStyle } = useInView(0.15, 'up')
  const { ref: focus1Ref, animationStyle: focus1Style } = useInView(0.15, 'left')
  const { ref: focus2Ref, animationStyle: focus2Style } = useInView(0.15, 'right')
  const focusRefs = [focus1Ref, focus2Ref]
  const focusStyles = [focus1Style, focus2Style]

  // Tech stack
  const { ref: stackHeadRef, animationStyle: stackHeadStyle } = useInView(0.15, 'up')
  const { ref: stack1Ref, animationStyle: stack1Style } = useInView(0.15, 'up')
  const { ref: stack2Ref, animationStyle: stack2Style } = useInView(0.15, 'up')
  const { ref: stack3Ref, animationStyle: stack3Style } = useInView(0.15, 'up')
  const { ref: stack4Ref, animationStyle: stack4Style } = useInView(0.15, 'up')
  const { ref: stack5Ref, animationStyle: stack5Style } = useInView(0.15, 'up')
  const { ref: stack6Ref, animationStyle: stack6Style } = useInView(0.15, 'up')
  const stackRefs = [stack1Ref, stack2Ref, stack3Ref, stack4Ref, stack5Ref, stack6Ref]
  const stackStyles = [stack1Style, stack2Style, stack3Style, stack4Style, stack5Style, stack6Style]

  // Process
  const { ref: processHeadRef, animationStyle: processHeadStyle } = useInView(0.15, 'up')
  const { ref: process1Ref, animationStyle: process1Style } = useInView(0.15, 'left')
  const { ref: process2Ref, animationStyle: process2Style } = useInView(0.15, 'up')
  const { ref: process3Ref, animationStyle: process3Style } = useInView(0.15, 'up')
  const { ref: process4Ref, animationStyle: process4Style } = useInView(0.15, 'right')
  const processRefs = [process1Ref, process2Ref, process3Ref, process4Ref]
  const processStyles = [process1Style, process2Style, process3Style, process4Style]

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={heroRef} style={heroStyle}>
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-6">
                ABOUT ME
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl text-[var(--navy-950)] leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-instrument-serif), serif" }}
              >
                I Build Systems That Run Without You
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
                I&apos;m Usman Younes, the developer behind Operata. I build
                field service applications and n8n workflow automation for
                operations teams — the kind of teams dealing with manual
                scheduling, disconnected tools, and processes that only work
                when someone remembers to follow them. I work remotely with
                clients internationally.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)]">
                  Field Service &amp; Automation
                </span>
                <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)]">
                  Remote · Available Worldwide
                </span>
              </div>
            </div>
            {/* Photo placeholder — swap with next/image when ready */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] text-sm text-center px-4">
                Photo placeholder
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── WHY I FOCUS ON THIS ─── */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24 animate-section-wrapper">
        <Container>
          <div ref={focusHeadRef} style={focusHeadStyle} className="text-center mb-14">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
              MY FOCUS
            </p>
            <h2
              className="text-3xl md:text-5xl text-[var(--navy-950)]"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              Why Field Service + Automation?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "📱",
                title: "Field Service Applications",
                body: "Field teams have unique constraints — offline environments, fast data capture, photo and signature collection, and audit trails. Generic tools don't cut it. I build purpose-built apps for how field work actually happens.",
                delay: 0,
              },
              {
                icon: "⚡",
                title: "n8n Workflow Automation",
                body: "Most operations teams are sitting on disconnected tools — a CRM here, a form there, emails in between. n8n lets me connect them without locking you into expensive platforms. You own the workflows.",
                delay: 100,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative overflow-hidden"
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
                <div className="w-12 h-12 bg-[var(--navy-50)] rounded-xl flex items-center justify-center mb-6 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--navy-950)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="bg-white py-16 lg:py-24 animate-section-wrapper">
        <Container>
          <div ref={stackHeadRef} style={stackHeadStyle} className="text-center mb-14">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
              TOOLS &amp; TECH
            </p>
            <h2
              className="text-3xl md:text-5xl text-[var(--navy-950)]"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              What I work with
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "▲", name: "Next.js", role: "Web Applications" },
              { icon: "🔄", name: "n8n", role: "Workflow Automation" },
              { icon: "📱", name: "React Native", role: "Mobile Apps" },
              { icon: "⚛️", name: "React.js", role: "Frontend" },
              { icon: "🟢", name: "Node.js", role: "Backend & APIs" },
              { icon: "📧", name: "Google Workspace", role: "Sheets, Calendar, Gmail" },
            ].map((item, index) => (
              <div
                key={item.name}
                ref={stackRefs[index]}
                className="rounded-2xl border border-[var(--border)] p-6 bg-[var(--surface-soft)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                style={{ ...stackStyles[index], transitionDelay: `${index * 60}ms` }}
              >
                <span className="text-2xl block mb-3">{item.icon}</span>
                <p className="font-semibold text-[var(--navy-950)]">{item.name}</p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{item.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24">
        <Container>
          <div ref={processHeadRef} style={processHeadStyle} className="text-center mb-14">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
              PROCESS
            </p>
            <h2
              className="text-3xl md:text-5xl text-[var(--navy-950)]"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              How a project works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: "Discovery Call",
                description: "We talk through your current workflow, what's broken, and what success looks like. Free, no commitment.",
              },
              {
                step: 2,
                title: "Scope & Quote",
                description: "I map out exactly what will be built, how long it takes, and what it costs. No surprises.",
              },
              {
                step: 3,
                title: "Build & Updates",
                description: "I build in iterations with regular updates. You see progress throughout, not just at the end.",
              },
              {
                step: 4,
                title: "Handoff & Support",
                description: "You get the source code, documentation, and 30 days of support after launch.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                ref={processRefs[index]}
                className="bg-white p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative overflow-hidden"
                style={processStyles[index]}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
                <div className="w-10 h-10 rounded-full bg-[var(--navy-500)] text-white flex items-center justify-center text-sm font-semibold mb-5">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[var(--navy-950)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
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
              style={{ fontFamily: "var(--font-instrument-serif), serif", ...ctaHeadStyle }}
            >
              Ready to talk?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10">
              Tell me about your project — I&apos;ll reply within 24 hours.
            </p>
            <div ref={ctaBtnRef} style={{ ...ctaBtnStyle, transitionDelay: "150ms" }}>
              <a
                href={siteConfig.links.contact}
                className="inline-flex items-center justify-center bg-white text-[var(--navy-950)] rounded-full px-8 py-4 text-base font-medium hover:bg-[var(--navy-50)] transition-colors duration-200"
              >
                Start a Conversation →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

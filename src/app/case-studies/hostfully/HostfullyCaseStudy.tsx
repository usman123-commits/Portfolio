'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'

export default function HostfullyCaseStudy() {
  const { ref: problemRef, inView: problemInView } = useInView()
  const { ref: workflowsRef, inView: workflowsInView } = useInView()
  const { ref: stackRef, inView: stackInView } = useInView()
  const { ref: ctaRef, inView: ctaInView } = useInView()
  const { ref: metricsRef, inView: metricsInView } = useInView(0.3)

  const count80 = useCountUp(80, 1500, metricsInView)
  const count3 = useCountUp(3, 1500, metricsInView)
  const count2 = useCountUp(2, 1500, metricsInView)

  return (
    <main className="min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative bg-white overflow-hidden min-h-[50vh] flex items-center border-b border-[var(--border)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-grid-bg opacity-40" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, white 90%)' }} />
        </div>
        <Container className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--navy-950)] mb-8 transition-colors"
            >
              ← All Case Studies
            </Link>

            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-6">
              CASE STUDY · WORKFLOW AUTOMATION
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                Workflow Automation
              </span>
              <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-sm font-medium text-[var(--text-secondary)]">
                Live · Real Client
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl text-[var(--navy-950)] leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
            >
              Hostfully — Vacation Rental Automation
            </h1>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-3xl">
              A suite of n8n automation workflows that eliminated manual guest
              communications, kept bookings in sync, and automatically scheduled
              cleaning crews — so the property manager could focus on growing the
              business instead of managing inboxes.
            </p>

            <div className="flex flex-wrap gap-3">
              {['n8n Automation', 'Hostfully API', 'Real Client · Live'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-1.5 text-sm font-medium text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── PROBLEM + SOLUTION ─── */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24">
        <Container>
          <div
            ref={problemRef}
            className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ease-out ${
              problemInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Problem */}
            <div className="bg-white p-8 rounded-2xl border border-[var(--border)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-400" />
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
                THE PROBLEM
              </p>
              <h2
                className="text-2xl md:text-3xl text-[var(--navy-950)] mb-5"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                Every booking triggered hours of manual work
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Each new Hostfully booking meant manually sending guest welcome
                messages, updating a spreadsheet, notifying the cleaning crew,
                and tracking checkout times. Any missed step created unhappy
                guests or unclean properties.
              </p>
              <ul className="space-y-3">
                {[
                  'Guest messages sent manually — hours after booking',
                  'Cleaning crew notified via text, easy to miss or forget',
                  'Booking data siloed in Hostfully, not visible to the team',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xs font-bold mt-0.5">✗</span>
                    <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-white p-8 rounded-2xl border border-[var(--border)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative overflow-hidden" style={{ transitionDelay: '100ms' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
                THE SOLUTION
              </p>
              <h2
                className="text-2xl md:text-3xl text-[var(--navy-950)] mb-5"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                Automated from booking to clean
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Built a set of n8n workflows triggered by Hostfully webhooks —
                guests receive perfectly timed messages automatically, the cleaning
                crew is scheduled the moment a booking is confirmed, and all
                booking data flows into a shared team dashboard in real time.
              </p>
              <ul className="space-y-3">
                {[
                  'Guest welcome, check-in, and checkout messages sent automatically',
                  'Cleaning crew scheduled via webhook on every new booking',
                  'Booking data synced to Google Sheets for full team visibility',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-400)] flex-shrink-0" />
                    <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── RESULTS METRICS BAND ─── */}
      <section className="bg-[var(--navy-950)] py-16">
        <Container>
          <div
            ref={metricsRef}
            className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          >
            <div>
              <p className="text-4xl md:text-5xl text-white mb-2" style={{ fontFamily: 'var(--font-instrument-serif), serif', color: '#ffffff' }}>
                {count80}%
              </p>
              <p className="text-white/70 text-sm">Less manual work per booking</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl text-white mb-2" style={{ fontFamily: 'var(--font-instrument-serif), serif', color: '#ffffff' }}>
                {count3}
              </p>
              <p className="text-white/70 text-sm">Automated workflows built</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl text-white mb-2" style={{ fontFamily: 'var(--font-instrument-serif), serif', color: '#ffffff' }}>
                {count2} hrs
              </p>
              <p className="text-white/70 text-sm">Saved per day on average</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── WORKFLOWS ─── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
                WHAT WAS BUILT
              </p>
              <h2
                className="text-3xl md:text-5xl text-[var(--navy-950)]"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                Three core workflows
              </h2>
            </div>

            <div
              ref={workflowsRef}
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-out ${
                workflowsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {[
                {
                  icon: '💬',
                  title: 'Automated Guest Messaging',
                  body: 'Triggered on booking confirmation, check-in day, and checkout day. Guests receive perfectly timed, personalised messages with property instructions, check-in codes, and checkout reminders — zero manual effort.',
                  delay: 0,
                },
                {
                  icon: '📅',
                  title: 'Booking Sync & Dashboard',
                  body: 'Every Hostfully booking webhook triggers an n8n workflow that writes structured booking data to a shared Google Sheet — giving the entire team real-time visibility into upcoming reservations, guest details, and stay durations.',
                  delay: 100,
                },
                {
                  icon: '🧹',
                  title: 'Cleaning Crew Scheduling',
                  body: 'On checkout day, an automated workflow notifies the cleaning crew with property address, checkout time, and any special notes. No more manual texts or missed cleans between back-to-back bookings.',
                  delay: 200,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[var(--surface-soft)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative overflow-hidden"
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
                  <div className="text-3xl mb-5">{item.icon}</div>
                  <h3 className="font-semibold text-[var(--navy-950)] text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
                TECHNOLOGY
              </p>
              <h2
                className="text-3xl md:text-5xl text-[var(--navy-950)]"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                Built with
              </h2>
            </div>

            <div
              ref={stackRef}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ease-out ${
                stackInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {[
                {
                  icon: '⚡',
                  label: 'Automation Layer',
                  techs: ['n8n (self-hosted)', 'Webhooks', 'HTTP Request nodes', 'Google Sheets API', 'Gmail / SMTP'],
                },
                {
                  icon: '🏠',
                  label: 'Integrations',
                  techs: ['Hostfully API', 'Google Sheets', 'Google Calendar', 'Gmail', 'Webhook triggers'],
                },
              ].map((stack) => (
                <div
                  key={stack.label}
                  className="bg-white border border-[var(--border)] rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <h3 className="text-xl font-semibold text-[var(--navy-950)] mb-5 flex items-center gap-2">
                    <span>{stack.icon}</span> {stack.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[var(--navy-950)] py-24">
        <Container>
          <div
            ref={ctaRef}
            className={`text-center max-w-2xl mx-auto transition-all duration-700 ease-out ${
              ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2
              className="text-5xl lg:text-6xl text-white text-center mb-4 font-normal"
              style={{ fontFamily: 'var(--font-instrument-serif), serif', color: '#ffffff' }}
            >
              Want to automate your bookings?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10">
              Whether you&apos;re on Hostfully or another platform — let&apos;s
              build the workflows that save your team hours every day.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[var(--navy-950)] rounded-full px-8 py-4 text-base font-medium hover:bg-[var(--navy-50)] transition-colors duration-200"
            >
              Discuss Your Project →
            </a>
          </div>
        </Container>
      </section>
    </main>
  )
}

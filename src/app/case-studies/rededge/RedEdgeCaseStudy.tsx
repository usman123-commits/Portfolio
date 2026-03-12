'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'
import { useParallax } from '@/hooks/useParallax'
import { useCountUp } from '@/hooks/useCountUp'

export default function RedEdgeCaseStudy() {
  const { ref: problemRef, inView: problemInView } = useInView()
  const { ref: screenshotsRef, inView: screenshotsInView } = useInView()
  const { ref: featuresRef, inView: featuresInView } = useInView()
  const { ref: stackRef, inView: stackInView } = useInView()
  const { ref: ctaRef, inView: ctaInView } = useInView()
  const { ref: metricsRef, inView: metricsInView } = useInView(0.3)

  const count0 = useCountUp(0, 1500, metricsInView)
  const count2 = useCountUp(2, 1500, metricsInView)
  const count100 = useCountUp(100, 1500, metricsInView)

  const { ref: screenshotRef, style: screenshotStyle } = useParallax(0.08)

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
              className="inline-flex items-center text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--navy-950)] mr-6 mb-8 transition-colors"
            >
              ← All Case Studies
            </Link>

            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-6">
              CASE STUDY · FIELD SERVICE APP
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-[var(--navy-100)] px-3 py-1 text-sm font-medium text-[var(--navy-700)]">
                Field Service App
              </span>
              <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-sm font-medium text-[var(--text-secondary)]">
                Live · Real Client
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl text-[var(--navy-950)] leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
            >
              RedEdge — Installation Management App
            </h1>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-3xl">
              A production-grade, offline-first mobile app that replaces paper
              checklists with a structured digital workflow — from job start to
              client sign-off to PDF report.
            </p>

            <div className="flex flex-wrap gap-3">
              {['React Native + Expo', 'Offline-First', 'Real Client · Live'].map((tag) => (
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
                Paper-based operations fail
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Installation companies lose jobs to paperwork. Photos get lost.
                Signatures get skipped. Reports take hours to write. Admins have
                no visibility until the installer drives back to the office.
              </p>
              <ul className="space-y-3">
                {[
                  'Paper checklists lost or incomplete after jobs',
                  'No real-time visibility for office managers',
                  'Client sign-off was a friction-heavy manual process',
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
                Everything on the installer&apos;s phone
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                RedEdge puts the entire workflow on the installer&apos;s phone —
                structured checklists, GPS-tagged photos, digital client
                signature, and an auto-generated PDF. Everything syncs when
                connectivity returns.
              </p>
              <ul className="space-y-3">
                {[
                  'Structured checklist with per-item photos and notes',
                  'Digital signature captured directly on phone',
                  'PDF report generated the moment client signs off',
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
                {count0}
              </p>
              <p className="text-white/70 text-sm">Paper forms used on-site</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl text-white mb-2" style={{ fontFamily: 'var(--font-instrument-serif), serif', color: '#ffffff' }}>
                ~{count2} min
              </p>
              <p className="text-white/70 text-sm">Time to generate PDF report</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl text-white mb-2" style={{ fontFamily: 'var(--font-instrument-serif), serif', color: '#ffffff' }}>
                {count100}%
              </p>
              <p className="text-white/70 text-sm">Jobs with complete photo records</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── SCREENSHOTS ─── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
                THE APP
              </p>
              <h2
                className="text-3xl md:text-5xl text-[var(--navy-950)]"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                A complete field workflow
              </h2>
              <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">
                From job assignment to signed report — every step handled on the installer&apos;s phone
              </p>
            </div>

            <div
              ref={screenshotRef}
              className="parallax-element"
              style={screenshotStyle}
            >
            <div
              ref={screenshotsRef}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 ease-out ${
                screenshotsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {[
                { src: '/case-studies/rededge/dashboard.jpeg', label: 'Installer Dashboard' },
                { src: '/case-studies/rededge/jobs.jpeg', label: 'Jobs List with Status' },
                { src: '/case-studies/rededge/checklist.jpeg', label: 'Checklist with Photo Capture' },
                { src: '/case-studies/rededge/photos.jpeg', label: 'GPS-Tagged Photo Documentation' },
                { src: '/case-studies/rededge/signature.jpeg', label: 'Digital Client Sign-Off' },
              ].map((shot, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${index === 4 ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto' : ''}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="w-full max-w-[390px] rounded-2xl overflow-hidden border border-[var(--border)] shadow-md mb-4 bg-[var(--surface-soft)] relative aspect-[390/844]">
                    <Image
                      src={shot.src}
                      alt={shot.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 390px"
                    />
                  </div>
                  <p className="font-medium text-[var(--navy-950)] text-sm">{shot.label}</p>
                </div>
              ))}
            </div>
            </div>{/* end parallax wrapper */}
          </div>
        </Container>
      </section>

      {/* ─── KEY FEATURES ─── */}
      <section className="bg-[var(--surface-soft)] py-16 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-4">
                CAPABILITIES
              </p>
              <h2
                className="text-3xl md:text-5xl text-[var(--navy-950)]"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                What it does
              </h2>
            </div>

            <div
              ref={featuresRef}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-out ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {[
                { icon: '📋', title: 'Offline-First Architecture', body: 'Works without signal. All updates are saved locally and synced automatically with exponential backoff retry when connectivity returns.' },
                { icon: '📸', title: 'Photo Documentation', body: 'Up to 50 GPS-tagged photos per job, organized into Before, During, After, Close-up, and Overall categories. Up to 5 photos per checklist item.' },
                { icon: '✍️', title: 'Digital Client Sign-Off', body: 'Client signs directly on the installer\'s phone screen. Signature, printed name and confirmation are captured as an immutable record.' },
                { icon: '📄', title: 'Auto-Generated PDF Report', body: 'The moment a client signs off, a structured PDF report is generated automatically — no manual data entry, shareable directly from the phone.' },
                { icon: '👥', title: 'Multi-Installer Jobs', body: 'Jobs can be assigned to a team. One primary installer holds authority over key actions, enforced with a dedicated middleware layer.' },
                { icon: '🔒', title: 'Immutable Audit Trail', body: 'Once signed off, the entire record — checklist, photos, signature — is locked as an immutable snapshot. Designed for legal and compliance requirements.' },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative overflow-hidden"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
                  <div className="text-3xl mb-5">{feature.icon}</div>
                  <h3 className="font-semibold text-[var(--navy-950)] text-lg mb-3">{feature.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="bg-white py-16 lg:py-24">
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
                  icon: '📱',
                  label: 'Mobile App',
                  techs: ['React Native 0.81', 'Expo 54', 'TypeScript', 'Redux Toolkit', 'AsyncStorage', 'Expo Print (PDF)', 'Signature Canvas'],
                },
                {
                  icon: '⚙️',
                  label: 'Backend API',
                  techs: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Cloudinary', 'Jest', 'Supertest'],
                },
              ].map((stack) => (
                <div
                  key={stack.label}
                  className="bg-[var(--surface-soft)] border border-[var(--border)] rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <h3 className="text-xl font-semibold text-[var(--navy-950)] mb-5 flex items-center gap-2">
                    <span>{stack.icon}</span> {stack.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
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
              Need a field service app?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10">
              Whether you need offline checklists, digital sign-off, or automated
              reporting — let&apos;s build it for your team.
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

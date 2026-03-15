'use client'

import { useEffect, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/YOUR_USERNAME/30min'
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@zelvop.com'
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? ''
const WHATSAPP_URL = WHATSAPP_PHONE ? `https://wa.me/${WHATSAPP_PHONE}` : '#'
const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? ''
const FORM_ENDPOINT = FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : 'https://formspree.io/f/YOUR_FORM_ID'

export function ContactContent() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceNeeded: '',
    message: '',
  })
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)

  const { ref: headRef, animationStyle: headStyle } = useInView(0.15, 'up')
  const { ref: leftRef, animationStyle: leftStyle } = useInView(0.15, 'left')
  const { ref: rightRef, animationStyle: rightStyle } = useInView(0.15, 'right')
  
  const { ref: trust1Ref, animationStyle: trust1Style } = useInView(0.15, 'up')
  const { ref: trust2Ref, animationStyle: trust2Style } = useInView(0.15, 'up')
  const { ref: trust3Ref, animationStyle: trust3Style } = useInView(0.15, 'up')
  const trustRefs = [trust1Ref, trust2Ref, trust3Ref]
  const trustStyles = [trust1Style, trust2Style, trust3Style]

  useEffect(() => {
    const initWidgetOnce = () => {
      const container = document.querySelector('.calendly-inline-widget') as HTMLElement | null
      if (container) {
        container.innerHTML = ''
        try {
          ;(window as any).Calendly?.initInlineWidget?.({
            url: CALENDLY_URL,
            parentElement: container,
          })
        } catch {
          // ignore
        }
      }
      setCalendlyLoaded(true)
    }
    const cleanup = () => {
      const container = document.querySelector('.calendly-inline-widget')
      if (container) container.innerHTML = ''
    }
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      initWidgetOnce()
      return cleanup
    }
    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const id = setInterval(() => {
        if ((window as any).Calendly) { clearInterval(id); initWidgetOnce() }
      }, 50)
      return () => { clearInterval(id); cleanup() }
    }
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => initWidgetOnce()
    document.body.appendChild(script)
    return cleanup
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const allFilled =
    formData.fullName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.company.trim() !== '' &&
    formData.serviceNeeded !== '' &&
    formData.message.trim() !== ''

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ fullName: true, email: true, company: true, serviceNeeded: true, message: true })
    if (!allFilled) return
    if (!emailValid) return
    setSubmitError(false)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Formspree error')
      setSubmitted(true)
    } catch {
      setSubmitError(true)
    }
  }

  const inputBase =
    'w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 min-h-[48px] text-[var(--navy-950)] placeholder-[var(--text-secondary)] focus:border-[var(--navy-500)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-500)] focus:ring-offset-0 transition-colors text-base'
  const labelBase = 'block text-sm font-medium text-[var(--navy-950)] mb-1.5'

  return (
    <main className="min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative bg-white overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-grid-bg opacity-40" />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 30%, white 90%)' }}
          />
        </div>
        <Container className="relative z-10 py-16 md:py-20">
          <div ref={headRef} style={headStyle} className="max-w-3xl mx-auto text-center">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-500)] uppercase tracking-[0.12em] mb-6">
              GET IN TOUCH
            </p>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl text-[var(--navy-950)] leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
            >
              Let&apos;s discuss your project
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              Whether you need a field service app or want to automate your
              workflows with n8n — let&apos;s find the right solution for your team.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── TWO-COLUMN LAYOUT ─── */}
      <section className="bg-[var(--surface-soft)] py-12 md:py-20 animate-section-wrapper">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">

            {/* LEFT — Calendly */}
            <div ref={leftRef} style={leftStyle} className="bg-white p-6 md:p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] transition-all duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
              <h2
                className="text-2xl text-[var(--navy-950)] mb-2"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                Book a Free 30-Min Call
              </h2>
              <p className="text-[var(--text-secondary)] text-sm mb-6">
                Pick a time that works for you. We&apos;ll talk through your workflow and what&apos;s possible.
              </p>
              <div className="relative w-full min-h-[630px]">
                {!calendlyLoaded && (
                  <div className="animate-pulse bg-[var(--surface-soft)] rounded-xl h-[630px] w-full" aria-hidden />
                )}
                <div
                  className={`calendly-inline-widget w-full h-[630px] min-h-[630px] ${!calendlyLoaded ? 'invisible absolute inset-0' : ''}`}
                  data-url={CALENDLY_URL}
                />
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-[var(--text-secondary)]">
                  Prefer email?{' '}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-[var(--navy-500)] hover:text-[var(--navy-700)] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--navy-500)] focus:ring-offset-2 rounded"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
                {WHATSAPP_PHONE && (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[var(--border)] rounded-full px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--navy-400)] hover:text-[var(--navy-950)] transition-colors"
                  >
                    <span>💬</span> Chat on WhatsApp →
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div 
              ref={rightRef} style={rightStyle}
              className="bg-white p-6 md:p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--navy-400)] transition-all duration-200 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--navy-500)]" />
              <h2
                className="text-2xl text-[var(--navy-950)] mb-2"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                Send a Message
              </h2>

              {submitError ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy-950)] mb-2">Something went wrong</h3>
                  <p className="text-[var(--text-secondary)] mb-4">Please email us directly.</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center justify-center bg-[var(--navy-950)] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[var(--navy-800)] transition-colors"
                  >
                    Email {CONTACT_EMAIL}
                  </a>
                </div>
              ) : !submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="fullName" className={labelBase}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName" name="fullName" type="text" required
                      value={formData.fullName} onChange={handleChange} onBlur={handleBlur}
                      placeholder="Your name" className={inputBase}
                    />
                    {touched.fullName && !formData.fullName.trim() && (
                      <p className="text-red-500 text-sm mt-1">Required</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelBase}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={formData.email} onChange={handleChange} onBlur={handleBlur}
                      placeholder="you@company.com" className={inputBase}
                    />
                    {touched.email && !formData.email.trim() && (
                      <p className="text-red-500 text-sm mt-1">Required</p>
                    )}
                    {touched.email && formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                      <p className="text-red-500 text-sm mt-1">Invalid email address</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className={labelBase}>
                      Company / Team <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company" name="company" type="text" required
                      value={formData.company} onChange={handleChange} onBlur={handleBlur}
                      placeholder="Company or team name" className={inputBase}
                    />
                    {touched.company && !formData.company.trim() && (
                      <p className="text-red-500 text-sm mt-1">Required</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="serviceNeeded" className={labelBase}>
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceNeeded" name="serviceNeeded" required
                      value={formData.serviceNeeded} onChange={handleChange} onBlur={handleBlur}
                      className={inputBase}
                    >
                      <option value="">Select an option</option>
                      <option value="field-service">Field Service App</option>
                      <option value="n8n">n8n Workflow Automation</option>
                      <option value="both">Both</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    {touched.serviceNeeded && !formData.serviceNeeded && (
                      <p className="text-red-500 text-sm mt-1">Required</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className={labelBase}>
                      Tell me about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message" name="message" required rows={4}
                      value={formData.message} onChange={handleChange} onBlur={handleBlur}
                      placeholder="What are you trying to achieve?"
                      className={`${inputBase} resize-y min-h-[120px]`}
                    />
                    {touched.message && !formData.message.trim() && (
                      <p className="text-red-500 text-sm mt-1">Required</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center bg-[var(--navy-950)] text-white rounded-full px-6 py-3 text-base font-medium hover:bg-[var(--navy-800)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--navy-500)] transition-colors mt-2"
                  >
                    Send Message →
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy-950)] mb-2">Message sent!</h3>
                  <p className="text-[var(--text-secondary)]">I&apos;ll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="bg-white border-t border-[var(--border)] py-8 md:py-10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-12 text-center">
            {[
              { icon: '⚡', label: 'Reply within 24 hours' },
              { icon: '🔒', label: 'No commitment required' },
              { icon: '📋', label: 'Free project scoping call' },
            ].map(({ icon, label }, index) => (
              <div key={label} ref={trustRefs[index]} style={{ ...trustStyles[index], transitionDelay: `${index * 100}ms` }} className="flex items-center justify-center gap-3">
                <span className="text-2xl" aria-hidden>{icon}</span>
                <span className="text-sm font-medium text-[var(--text-secondary)]">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}

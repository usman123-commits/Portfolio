"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/YOUR_USERNAME/30min";
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "your@email.com";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "";
const WHATSAPP_URL = WHATSAPP_PHONE ? `https://wa.me/${WHATSAPP_PHONE}` : "#";
const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "";
const FORM_ENDPOINT = FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : "https://formspree.io/f/YOUR_FORM_ID";

export function ContactContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    serviceNeeded: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    if (document.querySelector('link[href*="calendly.com/assets/external/widget.css"]'))
      return;

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const allFilled =
    formData.fullName.trim() !== "" &&
    formData.company.trim() !== "" &&
    formData.serviceNeeded !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, company: true, serviceNeeded: true, message: true });
    if (!allFilled) return;
    setSubmitError(false);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Formspree error");
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    }
  };

  const inputBase =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 transition-colors";
  const labelBase = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <main className="min-h-screen">
      {/* 1. Page header section */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              GET IN TOUCH
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Let&apos;s Discuss Your Project
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need a field service app or want to automate your
              workflows with n8n — let&apos;s find the right solution for your team.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Two-column layout */}
      <section className="bg-gray-50 py-12 md:py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* LEFT — Book a Call card */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Book a Free 30-Min Call
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Pick a time that works for you. We&apos;ll talk about your current
                workflow, what&apos;s not working, and what&apos;s possible.
              </p>
              <div className="relative min-w-[320px] w-full min-h-[630px]">
                {!calendlyLoaded && (
                  <div
                    className="animate-pulse bg-gray-100 rounded-lg h-[630px] w-full"
                    aria-hidden
                  />
                )}
                <div
                  className={`calendly-inline-widget w-full h-[630px] min-h-[630px] ${!calendlyLoaded ? "invisible absolute inset-0" : ""}`}
                  data-url={CALENDLY_URL}
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Prefer email? →{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <a
                  href={WHATSAPP_URL}
                  className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                >
                  Or WhatsApp →
                </a>
              </p>
            </div>

            {/* RIGHT — Contact form card */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Send a Message
              </h2>

              {submitError ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Something went wrong
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Please email us directly.
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Email {CONTACT_EMAIL}
                  </a>
                </div>
              ) : !submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                  <div>
                    <label htmlFor="fullName" className={labelBase}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      className={inputBase}
                    />
                    {touched.fullName && !formData.fullName.trim() && (
                      <p className="text-red-600 text-sm mt-1">Required</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className={labelBase}>
                      Company / Team <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Company or team name"
                      className={inputBase}
                    />
                    {touched.company && !formData.company.trim() && (
                      <p className="text-red-600 text-sm mt-1">Required</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="serviceNeeded" className={labelBase}>
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      required
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputBase}
                    >
                      <option value="">Select an option</option>
                      <option value="field-service">Field Service App</option>
                      <option value="n8n">n8n Workflow Automation</option>
                      <option value="both">Both</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    {touched.serviceNeeded && !formData.serviceNeeded && (
                      <p className="text-red-600 text-sm mt-1">Required</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className={labelBase}>
                      Tell me about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="What are you trying to achieve?"
                      className={`${inputBase} resize-y min-h-[100px]`}
                    />
                    {touched.message && !formData.message.trim() && (
                      <p className="text-red-600 text-sm mt-1">Required</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors mt-2"
                  >
                    Send Message →
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message sent!
                  </h3>
                  <p className="text-gray-600">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Bottom trust strip */}
      <section className="bg-white border-t border-gray-200 py-8 md:py-10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-12 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl" aria-hidden>⚡</span>
              <span className="text-sm font-medium text-gray-700">
                Reply within 24 hours
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl" aria-hidden>🔒</span>
              <span className="text-sm font-medium text-gray-700">
                No commitment required
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl" aria-hidden>📋</span>
              <span className="text-sm font-medium text-gray-700">
                Free project scoping call
              </span>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

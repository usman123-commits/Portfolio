"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function AboutContent() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                ABOUT ME
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                I Build Systems That Field Teams Actually Use
              </h1>
              {/* TODO: Replace with your personal details */}
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I&apos;m Usman, an independent developer specializing in field
                service applications and n8n workflow automation. I work with
                operations teams who are tired of paper-based processes, missed
                handoffs, and tools that don&apos;t talk to each other.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                  Worked on 3 projects
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                  Field Service & Automation
                </span>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              {/* TODO: Add your photo here
                  Recommended: a professional headshot, 400x400px minimum
                  Use next/image with rounded-full or rounded-2xl */}
              <div className="w-64 h-64 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm text-center px-4">
                Photo placeholder
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Why I Focus On This */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              MY FOCUS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Field Service + Automation?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-3xl mb-4" aria-hidden>
                📱
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Field Service Applications
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Field teams have unique constraints — offline environments, fast
                data capture, photo and signature collection, and audit trails.
                Generic tools don&apos;t cut it. I build purpose-built apps for how
                field work actually happens.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-3xl mb-4" aria-hidden>
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                n8n Workflow Automation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most operations teams are sitting on disconnected tools — a CRM
                here, a form there, emails in between. n8n lets me connect them
                without locking you into expensive platforms. You own the
                workflows.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Tech Stack */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              TOOLS & TECH
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What I Work With
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "▲", name: "Next.js", role: "Web Applications" },
              { icon: "🔄", name: "n8n", role: "Workflow Automation" },
              { icon: "📱", name: "React Native", role: "Mobile Apps" }, // TODO: remove if not applicable
              { icon: "🐘", name: "PostgreSQL", role: "Database" },
              { icon: "🔌", name: "REST APIs", role: "Integrations" },
              { icon: "▲", name: "Vercel", role: "Deployment" },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-gray-200 p-4 bg-white"
              >
                <span className="text-2xl block mb-2" aria-hidden>
                  {item.icon}
                </span>
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. How I Work (Process) */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              PROCESS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How a Project Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: "Discovery Call",
                description:
                  "We talk through your current workflow, what's broken, and what success looks like. Free, no commitment.",
              },
              {
                step: 2,
                title: "Scope & Quote",
                description:
                  "I map out exactly what will be built, how long it takes, and what it costs. No surprises.",
              },
              {
                step: 3,
                title: "Build & Updates",
                description:
                  "I build in iterations with regular updates. You see progress throughout, not just at the end.",
              },
              {
                step: 4,
                title: "Handoff & Support",
                description:
                  "You get the source code, documentation, and 30 days of support after launch.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className={`flex flex-col md:px-4 ${index > 0 ? "md:border-l border-dashed border-gray-300" : ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Talk?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tell me about your project — I&apos;ll reply within 24 hours.
            </p>
            <Button href={siteConfig.links.contact} variant="primary">
              Start a Conversation →
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              or book a call directly on the contact page
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

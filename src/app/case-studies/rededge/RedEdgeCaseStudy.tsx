"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function RedEdgeCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors"
            >
              ← All Case Studies
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Field Service App
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                Live · Real Client
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              RedEdge — Installation Management App
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
              A production-grade, offline-first mobile app that replaces paper
              checklists with a structured digital workflow — from job start to
              client sign-off to PDF report.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
                React Native + Expo
              </span>
              <span className="inline-flex items-center rounded border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
                Offline-First
              </span>
              <span className="inline-flex items-center rounded border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
                Real Client · Live
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* The Problem */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                The Problem
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Installation companies lose jobs to paperwork. Photos get lost.
                Signatures get skipped. Reports take hours to write. Admins have
                no visibility into what&apos;s happening on site until the
                installer drives back to the office.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold mt-0.5">
                    ✗
                  </span>
                  <span className="text-gray-700">
                    Paper checklists lost or incomplete after jobs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold mt-0.5">
                    ✗
                  </span>
                  <span className="text-gray-700">
                    No real-time visibility for office managers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold mt-0.5">
                    ✗
                  </span>
                  <span className="text-gray-700">
                    Client sign-off was a friction-heavy manual process
                  </span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                The Solution
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                RedEdge puts the entire workflow on the installer&apos;s phone —
                structured checklists, photo documentation, GPS-tagged images,
                digital client signature, and an auto-generated PDF report.
                Everything syncs automatically when connectivity returns.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mt-0.5 leading-none">
                    •
                  </span>
                  <span className="text-gray-700">
                    Structured checklist with per-item photos and notes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mt-0.5 leading-none">
                    •
                  </span>
                  <span className="text-gray-700">
                    Digital signature captured directly on the installer&apos;s phone
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mt-0.5 leading-none">
                    •
                  </span>
                  <span className="text-gray-700">
                    PDF report auto-generated the moment the client signs off
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SCREENSHOT SHOWCASE */}
      <section className="py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The App</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A complete workflow from job assignment to signed report
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {[
                {
                  src: "/case-studies/rededge/dashboard.jpeg",
                  label: "Installer Dashboard",
                },
                {
                  src: "/case-studies/rededge/jobs.jpeg",
                  label: "Jobs List with Status",
                },
                {
                  src: "/case-studies/rededge/checklist.jpeg",
                  label: "Checklist with Photo Capture",
                },
                {
                  src: "/case-studies/rededge/photos.jpeg",
                  label: "GPS-Tagged Photo Documentation",
                },
                {
                  src: "/case-studies/rededge/signature.jpeg",
                  label: "Digital Client Sign-Off",
                },
              ].map((shot, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    index === 4 ? "sm:col-span-2 sm:max-w-sm sm:mx-auto" : ""
                  }`}
                >
                  <div className="w-full max-w-[390px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[8px] border-gray-900 bg-gray-50 mb-6 relative aspect-[390/844]">
                    <Image
                      src={shot.src}
                      alt={shot.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 390px"
                    />
                  </div>
                  <p className="font-medium text-gray-900">{shot.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. KEY FEATURES */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What It Does
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📋",
                  title: "Offline-First Architecture",
                  body: "Works without signal. All checklist updates are saved locally and synced automatically with exponential backoff retry when connectivity returns.",
                },
                {
                  icon: "📸",
                  title: "Photo Documentation",
                  body: "Up to 50 GPS-tagged photos per job, organized into Before, During, After, Close-up, and Overall categories. Each checklist item supports up to 5 attached photos.",
                },
                {
                  icon: "✍️",
                  title: "Digital Client Sign-Off",
                  body: "Client signs directly on the installer's phone screen. Signature, printed name, and confirmation are captured as an immutable record.",
                },
                {
                  icon: "📄",
                  title: "Auto-Generated PDF Report",
                  body: "The moment a client signs off, a structured PDF report is generated automatically — no manual data entry, shareable directly from the phone.",
                },
                {
                  icon: "👥",
                  title: "Multi-Installer Jobs",
                  body: "Jobs can be assigned to a team. One primary installer holds authority over key actions. The backend enforces this with a dedicated middleware layer.",
                },
                {
                  icon: "🔒",
                  title: "Immutable Audit Trail",
                  body: "Once signed off, the entire record — checklist, photos, signature — is locked as an immutable snapshot. Designed for legal and compliance requirements.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. TECH STACK */}
      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Built With
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mobile Spec */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-blue-600">📱</span> Mobile App
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native 0.81",
                    "Expo 54",
                    "TypeScript",
                    "Redux Toolkit",
                    "AsyncStorage",
                    "Expo Print (PDF)",
                    "Signature Canvas",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Spec */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-blue-600">⚙️</span> Backend API
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "JWT Auth",
                    "Cloudinary",
                    "Jest",
                    "Supertest",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CTA */}
      <section className="py-24 bg-blue-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need a Field Service App?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you need offline-capable checklists, digital sign-off, or
              automated reporting — let&apos;s build it for your team.
            </p>
            <Button href="/contact" variant="primary">
              Discuss Your Project →
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

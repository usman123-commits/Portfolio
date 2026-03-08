import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Offline-Ready Field Service Apps",
  description:
    "Structured checklists, photo documentation, and reliable offline usage for field teams. Built for data integrity and clear audit history.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Offline-ready field service apps built around real installation
                workflows.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Structured checklists, photo documentation, and reliable offline
                usage for field teams. Built for data integrity and clear audit
                history.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.links.caseStudies} variant="primary">
                  View Case Study
                </Button>
                <Button href={siteConfig.links.contact} variant="secondary">
                  Discuss Your App
                </Button>
              </div>
              <div className="pt-4">
                <p className="text-sm text-gray-500 mb-3">
                  Based on a production-tested installation management system
                  with:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    Admin + Installer roles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    Structured checklist enforcement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    Offline sync with validation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    Immutable completion reports
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[9/16] max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-4 border-8 border-gray-900">
                  <div className="bg-gray-900 rounded-t-lg p-3 flex items-center justify-between">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white text-xs font-medium">
                      Installation Log
                    </div>
                    <div className="w-12"></div>
                  </div>
                  <div className="bg-white p-4 space-y-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-xs text-blue-600 font-semibold mb-1">
                        Asset Verification
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Local Sync Active
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded border-2 border-green-500 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">
                          Standardize Setup
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded border-2 border-red-500 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">
                          Photo Verification <span className="text-red-500">REQUIRED</span>
                        </span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                      Sync Installation Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who This Is For Section */}
      <section id="capabilities" className="bg-gray-50 py-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              WHO THIS IS FOR
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built for technical field work
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Installation Teams",
                description:
                  "Standardize setup with digital guides and structured workflows.",
              },
              {
                title: "Field Technicians",
                description:
                  "Simple tools for site work and accurate data capture.",
              },
              {
                title: "Equipment Deployment",
                description:
                  "Track assets with photo-verified logs and serial number validation.",
              },
              {
                title: "Operations Managers",
                description:
                  "Visibility into field status with structured reports.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The Problem Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              THE PROBLEM
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solving real operational challenges
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reliable data starts with tools that don&apos;t fail in the field. Help
              teams move away from fragile processes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Paper-based workflows",
                description:
                  "Forms that are easily lost, illegible, and require manual re-keying.",
              },
              {
                title: "Inconsistent documentation",
                description:
                  "Missing photos, incomplete checklists, and lack of standardized reporting.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-red-50 p-6 rounded-lg border border-red-200"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The Solution Section */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              THE SOLUTION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Focused on data integrity
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Offline-first design",
                description:
                  "Apps work without a signal, storing data locally and syncing automatically.",
              },
              {
                title: "Checklist-driven workflows",
                description:
                  "Enforce standard operating procedures through guided UI.",
              },
              {
                title: "Photo + signature documentation",
                description:
                  "Capture visual evidence and digital sign-offs.",
              },
              {
                title: "Immutable completion records",
                description:
                  "Maintain a tamper-proof history of work performed.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Visual Proof Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              VISUAL PROOF
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              See the system in action
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Checklist enforcement during installation",
                description: "Step 3. Verification with checked items",
              },
              {
                title: "Client signature at completion",
                description: "Client Acceptance with signature field",
              },
              {
                title: "Offline sync confirmation",
                description: "Sync Complete - 100% Uploaded",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg aspect-[9/16] mb-4 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">App Screenshot</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Production Principles Section */}
      <section className="bg-gray-900 text-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built with production principles
              </h2>
              <p className="text-lg text-gray-300">
                Engineering-focused development for systems that need to be
                reliable and secure.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Role-based access control",
                "Immutable reports after sign-off",
                "Structured audit history",
                "Offline-first architecture",
                "Clear status workflows",
                "Offline synchronization",
                "Cross-Platform (iOS & Android)",
                "Tested on real workflows",
              ].map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discuss your project
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you&apos;re planning a field service or installation app, let&apos;s
              discuss your workflow.
            </p>
            <Button href={siteConfig.links.contact} variant="primary">
              Discuss Your Project
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              You&apos;ll work directly with the engineer designing and building your
              system.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Page Not Found | Operata",
  description: "This page doesn't exist. Head back to Operata to learn about our field service apps and workflow automation services.",
};

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex items-center">
      <section className="bg-[var(--navy-950)] w-full py-32">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-block text-[11px] font-semibold text-[var(--navy-400)] uppercase tracking-[0.12em] mb-6">
              404 ERROR
            </p>
            <h1
              className="text-7xl lg:text-8xl text-white mb-6 font-normal leading-tight"
              style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#ffffff" }}
            >
              Page not found
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              This page doesn&apos;t exist. Head back to explore our field service apps and workflow automation work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[var(--navy-950)] rounded-full px-8 py-4 text-base font-medium hover:bg-[var(--navy-50)] transition-colors duration-200"
              >
                ← Back to Homepage
              </a>
              <a
                href={siteConfig.links.caseStudies}
                className="w-full sm:w-auto inline-flex items-center justify-center border border-white/30 text-white rounded-full px-8 py-4 text-base font-medium hover:border-white/60 hover:bg-white/5 transition-colors duration-200"
              >
                View Our Work →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

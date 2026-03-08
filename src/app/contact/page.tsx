import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Contact",
  description: "Get in touch to discuss your field service app or workflow automation project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-white py-20 lg:py-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              CONTACT
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Discuss Your Project
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you&apos;re planning a field service app, workflow automation, or
              installation system, let&apos;s discuss your workflow. You&apos;ll work
              directly with the engineer designing and building your system.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

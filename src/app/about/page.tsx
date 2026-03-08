import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "About",
  description: "About Field Service Engineer — workflow systems and field service applications.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-white py-20 lg:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              ABOUT
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              About
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Engineering-focused development for systems that need to be
              reliable and secure. Built around real installation workflows and
              workflow automation.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

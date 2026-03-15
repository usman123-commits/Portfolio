import { Container } from "@/components/ui/Container";

// TODO: Replace with professional email once domain is purchased
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@zelvop.com";

export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for working with us.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <Container>
        <article className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            LEGAL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: March 2025</p>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms apply to freelance development services including field
              service application development and n8n workflow automation.
              Specific deliverables, timelines, and payment terms are defined in
              individual project agreements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Upon receipt of full payment, the client owns all custom code and
              deliverables produced for their project. We retain the right to
              reference the project in our portfolio unless otherwise agreed in
              writing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are not liable for business outcomes, revenue loss, or indirect
              damages resulting from the use of delivered software. Our liability
              is limited to the value of the project contract.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These terms may be updated periodically. Continued use of this
              website constitutes acceptance of the current terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these terms:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </article>
      </Container>
    </main>
  );
}

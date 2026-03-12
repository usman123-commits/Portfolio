import { Container } from "@/components/ui/Container";

// TODO: Replace with professional email once domain is purchased
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "bgmazak123@gmail.com";

export const metadata = {
  title: "Privacy Policy",
  description: "How we handle your data and protect your privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <Container>
        <article className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            LEGAL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: March 2025</p>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When you submit the contact form on this site, we collect your name,
              company name, email address, and the message you provide. We do not
              use tracking cookies or analytics that identify you personally.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information is used solely to respond to your inquiry. We do
              not sell, share, or rent your data to any third party.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Data Storage
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Contact form submissions are processed via Formspree and stored
              according to their privacy policy (
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                formspree.io/legal/privacy-policy
              </a>
              ). We do not maintain a separate database of visitor information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You may request deletion of any data submitted through the contact
              form by emailing us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For any privacy-related questions, contact:{" "}
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

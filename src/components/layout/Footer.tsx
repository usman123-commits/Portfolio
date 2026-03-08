import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-lg font-semibold text-white">
              {siteConfig.name}
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href={siteConfig.links.contact}
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="text-sm">
              © {currentYear} Field Service App Development.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}


import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy-950)] text-white">
      <Container>
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Col 1: Brand & Tagline */}
            <div className="space-y-4">
              <div
                className="text-xl flex items-center gap-2"
                style={{ fontFamily: "var(--font-instrument-serif), serif" }}
              >
                <span className="text-[10px] pb-1">■</span>
                {siteConfig.name}
              </div>
              <p className="text-white/70 text-sm max-w-xs">
                Purpose-built systems for operations teams.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/services" className="text-white/70 hover:text-white transition-colors w-fit">
                Services
              </Link>
              <Link href="/case-studies" className="text-white/70 hover:text-white transition-colors w-fit">
                Case Studies
              </Link>
              <Link href="/about" className="text-white/70 hover:text-white transition-colors w-fit">
                About
              </Link>
              <Link href={siteConfig.links.contact} className="text-white/70 hover:text-white transition-colors w-fit">
                Contact
              </Link>
            </div>

            {/* Col 3: Contact Info */}
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:hello@operata.dev" className="text-white/70 hover:text-white transition-colors w-fit">
                hello@operata.dev
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors w-fit">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--navy-800)] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
          <div>
            © {currentYear} {siteConfig.name} · Built by Usman Younes
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

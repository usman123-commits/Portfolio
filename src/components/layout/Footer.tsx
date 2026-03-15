'use client'

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? ''
const WHATSAPP_URL = WHATSAPP_PHONE ? `https://wa.me/${WHATSAPP_PHONE}` : '#'

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("hello@zelvop.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <footer className="bg-[var(--navy-950)] text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Col 1: Brand & Tagline */}
            <div className="space-y-4">
              <div
                className="text-xl flex items-center gap-2"
                style={{ fontFamily: "var(--font-instrument-serif), serif" }}
              >
                <span className="text-[10px] pb-1">■</span>
                {siteConfig.name}
              </div>
              <p className="text-white/60 text-sm max-w-xs">
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
              <button
                onClick={handleCopyEmail}
                className="text-left text-white/70 hover:text-white transition-colors w-fit group relative"
                aria-label="Copy email address"
              >
                <span className="group-hover:underline decoration-white/30 underline-offset-4">
                  {copied ? "✓ Copied!" : "hello@zelvop.com"}
                </span>
              </button>
              
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors w-fit group"
              >
                <span className="group-hover:underline decoration-white/30 underline-offset-4">
                  WhatsApp ↗
                </span>
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

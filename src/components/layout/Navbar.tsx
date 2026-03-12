"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

// Mobile nav order: Services, Case Studies, About, Contact (exclude Home)
const mobileNavOrder = ["/services", "/case-studies", "/about", "/contact"] as const;
const mobileNavItems = mobileNavOrder.map((href) =>
  siteConfig.navItems.find((item) => item.href === href)
).filter(Boolean) as { title: string; href: string }[];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen && panelRef.current) {
      const firstLink = panelRef.current.querySelector<HTMLAnchorElement>("a");
      firstLink?.focus();
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center">
          <div className="flex justify-start min-w-0">
            <Link
              href="/"
              className="text-lg md:text-xl text-[var(--navy-950)] hover:text-[var(--navy-700)] transition-colors flex items-center gap-2 whitespace-nowrap"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              <span className="text-[10px] pb-1 hidden sm:inline">■</span>
              {siteConfig.name}
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center gap-8 min-w-0">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[var(--navy-950)] font-medium"
                      : "text-[var(--text-secondary)] hover:text-[var(--navy-950)]"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="flex justify-end min-w-0 flex-shrink-0 items-center gap-2">
            <div className="hidden md:block">
              <Button href={siteConfig.links.contact} variant="primary">
                Get in Touch
              </Button>
            </div>
            <button
              type="button"
              className="md:hidden p-2 -mr-2 text-[var(--text-secondary)] hover:text-[var(--navy-950)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-500)] focus:ring-offset-2 rounded"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div
          ref={panelRef}
          className="md:hidden absolute left-0 right-0 top-full bg-white border-b border-[var(--border)]"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="py-2">
            {mobileNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block w-full py-3 px-4 text-sm transition-colors border-b border-[var(--border)] last:border-b-0 ${
                    isActive
                      ? "text-[var(--navy-950)] font-medium bg-[var(--surface-soft)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--navy-950)] hover:bg-[var(--surface-soft)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="p-4 border-t border-[var(--border)]">
              <Button href={siteConfig.links.contact} variant="primary" className="w-full justify-center">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

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
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center">
          <div className="flex justify-start min-w-0">
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              {siteConfig.name}
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center gap-8 min-w-0">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex justify-end min-w-0 flex-shrink-0 items-center gap-2">
            <div className="hidden md:block">
              <Button href={siteConfig.links.contact} variant="primary">
                Discuss Your Project
              </Button>
            </div>
            <button
              type="button"
              className="md:hidden p-2 -mr-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
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
          className="md:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-200"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="py-2">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block w-full py-3 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="p-4 border-t border-gray-200">
              <Button href={siteConfig.links.contact} variant="primary" className="w-full justify-center">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

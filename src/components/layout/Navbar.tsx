import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            {siteConfig.name}
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Button href={siteConfig.links.contact} variant="primary">
              Discuss Your App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button href={siteConfig.links.contact} variant="primary">
              Discuss Your App
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}


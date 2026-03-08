import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Navbar() {
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

          <div className="flex justify-end min-w-0 flex-shrink-0">
            <Button href={siteConfig.links.contact} variant="primary">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}


import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" data-design-id="navbar-header">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between" data-design-id="navbar-container">
        <div className="flex items-center gap-2" data-design-id="navbar-logo-container">
          <Link href="/" className="font-bold text-xl text-primary" data-design-id="navbar-logo-link">
            Niebo w Głowie
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6" data-design-id="navbar-nav-desktop">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors" data-design-id="nav-link-home">
            Strona główna
          </Link>
          <Link href="/sklep" className="text-sm font-medium hover:text-primary transition-colors" data-design-id="nav-link-sklep">
            Sklep
          </Link>
          <Link href="/warsztaty" className="text-sm font-medium hover:text-primary transition-colors" data-design-id="nav-link-warsztaty">
            Warsztaty
          </Link>
          <Link href="/kontakt" className="text-sm font-medium hover:text-primary transition-colors" data-design-id="nav-link-kontakt">
            Kontakt
          </Link>
        </nav>

        <div className="md:hidden" data-design-id="navbar-mobile-menu">
          <Button variant="ghost" size="icon" data-design-id="mobile-menu-btn">
            <Menu className="h-6 w-6" data-design-id="mobile-menu-icon" />
            <span className="sr-only" data-design-id="mobile-menu-sr">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-background py-8" data-design-id="footer">
      <div className="container mx-auto px-4" data-design-id="footer-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-design-id="footer-grid">
          <div data-design-id="footer-col-1">
            <h3 className="font-bold text-lg mb-4" data-design-id="footer-title-1">Niebo w Głowie</h3>
            <p className="text-sm text-muted-foreground" data-design-id="footer-desc-1">
              Treści chrześcijańskie o tematyce miłości Bożej i pomaganiu ludziom w odnajdywaniu jej na co dzień.
            </p>
          </div>
          <div data-design-id="footer-col-2">
            <h3 className="font-bold text-lg mb-4" data-design-id="footer-title-2">Na skróty</h3>
            <ul className="space-y-2" data-design-id="footer-links-list">
              <li data-design-id="footer-link-item-1"><Link href="/sklep" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-design-id="footer-link-1">Sklep</Link></li>
              <li data-design-id="footer-link-item-2"><Link href="/warsztaty" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-design-id="footer-link-2">Warsztaty</Link></li>
              <li data-design-id="footer-link-item-3"><Link href="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-design-id="footer-link-3">Kontakt</Link></li>
            </ul>
          </div>
          <div data-design-id="footer-col-3">
            <h3 className="font-bold text-lg mb-4" data-design-id="footer-title-3">Obserwuj</h3>
            <ul className="space-y-2" data-design-id="footer-social-list">
              <li data-design-id="footer-social-item-1"><a href="https://www.tiktok.com/@niebowglowie" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-design-id="footer-social-link-1">TikTok</a></li>
              <li data-design-id="footer-social-item-2"><a href="https://suppi.pl/niebowglowie" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-design-id="footer-social-link-2">Wesprzyj na Suppi</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center" data-design-id="footer-bottom">
          <p className="text-sm text-muted-foreground" data-design-id="footer-copyright">
            &copy; {currentYear} Wiktoria Kumpin. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
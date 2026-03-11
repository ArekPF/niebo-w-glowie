import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1" data-design-id="home-page-wrapper">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" data-design-id="hero-section">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" data-design-id="hero-bg-container">
          <Image
            src="/background.jpg"
            alt="Plaża z palmami"
            fill
            priority
            className="object-cover"
            data-design-id="hero-bg-image"
          />
        </div>
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 flex items-center justify-center" data-design-id="hero-content-container">
          <div className="max-w-3xl mx-auto text-center bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-xl" data-design-id="hero-text-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-design-id="hero-title">
              <span className="text-primary block" data-design-id="hero-title-line-1">ZACZNIJ MYŚLEĆ</span>
              <span className="text-slate-800 block" data-design-id="hero-title-line-2">NA SKALĘ NIEBA</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-800 font-medium mb-10 max-w-2xl mx-auto" data-design-id="hero-description">
              Tworzę treści chrześcijańskie, które pomagają odnajdywać Bożą miłość na co dzień. 
              Odkryj moją twórczość i zacznij żyć z perspektywy nieba.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-design-id="hero-actions">
              <Button asChild size="lg" className="rounded-full px-8 text-white font-bold text-lg hover:bg-yellow-500 w-full sm:w-auto" data-design-id="hero-cta-btn">
                <Link href="/warsztaty" data-design-id="hero-cta-link">
                  WARSZTATY
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-bold text-lg bg-white/90 hover:bg-white w-full sm:w-auto" data-design-id="hero-secondary-btn">
                <Link href="/sklep" data-design-id="hero-secondary-link">
                  SKLEP
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Author Section (Briefly) */}
      <section className="py-20 bg-slate-50" data-design-id="about-section">
        <div className="container mx-auto px-4 text-center max-w-3xl" data-design-id="about-container">
          <h2 className="text-3xl font-bold mb-6 text-slate-800" data-design-id="about-title">Niebo w Głowie</h2>
          <p className="text-lg text-slate-600 mb-8" data-design-id="about-text">
            Jestem twórczynią internetową, tworzącą treści chrześcijańskie o tematyce miłości Bożej. 
            Moją misją jest pomaganie ludziom w odnajdywaniu tej miłości na co dzień, budowaniu 
            pięknych relacji małżeńskich i otwieraniu się na Boże błogosławieństwo.
          </p>
          <Button asChild variant="outline" data-design-id="about-contact-btn">
            <Link href="/kontakt" data-design-id="about-contact-link">Skontaktuj się ze mną</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
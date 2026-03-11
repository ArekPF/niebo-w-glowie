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
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24" data-design-id="hero-content-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-6xl mx-auto" data-design-id="hero-content-flex">
            
            {/* Text Side */}
            <div className="flex-1 w-full text-center md:text-left" data-design-id="hero-text-col">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-design-id="hero-title">
                <span className="text-primary block" data-design-id="hero-title-line-1">ZACZNIJ MYŚLEĆ</span>
                <span className="text-slate-800 block" data-design-id="hero-title-line-2">NA SKALĘ NIEBA</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-700 mb-8 max-w-xl mx-auto md:mx-0" data-design-id="hero-description">
                &quot;Bóg chce Ci błogosławić, nie ograniczaj Go&quot; to e-book, który pomoże Ci otworzyć 
                się na Boże działanie w codzienności – w pracy, relacjach, decyzjach i marzeniach. 
                Znajdziesz tu praktyczne refleksje o tym, jak przestać myśleć po ludzku i zacząć żyć 
                z perspektywy nieba.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4" data-design-id="hero-actions">
                <Button asChild size="lg" className="rounded-full px-8 text-white font-bold text-lg hover:bg-yellow-500 w-full sm:w-auto" data-design-id="hero-cta-btn">
                  <a href="https://1ct.eu/lgnDr" target="_blank" rel="noopener noreferrer" data-design-id="hero-cta-link">
                    KUP E-BOOK
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-bold text-lg bg-white/80 hover:bg-white w-full sm:w-auto" data-design-id="hero-secondary-btn">
                  <Link href="/sklep" data-design-id="hero-secondary-link">
                    ZOBACZ SKLEP
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="flex-1 w-full flex justify-center mt-8 md:mt-0" data-design-id="hero-image-col">
              <div className="relative w-[280px] h-[380px] sm:w-[350px] sm:h-[480px] lg:w-[450px] lg:h-[600px] drop-shadow-2xl" data-design-id="hero-image-wrapper">
                <Image
                  src="/ebook-tablet.png"
                  alt="E-book Bóg chce Ci błogosławić na tablecie"
                  fill
                  className="object-contain"
                  data-design-id="hero-image"
                />
              </div>
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
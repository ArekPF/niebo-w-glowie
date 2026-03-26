import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WorkshopsPage() {
  return (
    <div className="container mx-auto px-4 py-16" data-design-id="warsztaty-page-wrapper">
      <div className="max-w-4xl mx-auto mb-16 text-center" data-design-id="warsztaty-header">
        <h1 className="text-4xl font-bold mb-4 text-slate-800" data-design-id="warsztaty-title">Warsztaty dla Małżeństw</h1>
        <p className="text-xl text-primary font-bold tracking-wide uppercase" data-design-id="warsztaty-subtitle">Droga Dwóch Serc</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto" data-design-id="warsztaty-content-flex">
        
        {/* Plakat / Obraz */}
        <div className="w-full lg:w-1/2" data-design-id="warsztaty-image-col">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" data-design-id="warsztaty-image-wrapper">
            {/* The aspect ratio depends on the poster. A typical portrait poster is ~2:3 or 3:4. Let's use 3:4 as default */}
            <div className="aspect-[3/4] relative w-full" data-design-id="warsztaty-image-inner">
              <Image 
                src="/droga-dwoch-serc.png" 
                alt="Plakat warsztatów Droga dwóch serc" 
                fill
                className="object-contain bg-slate-100"
                priority
                data-design-id="warsztaty-image"
              />
            </div>
          </div>
        </div>

        {/* Opis */}
        <div className="w-full lg:w-1/2 space-y-8" data-design-id="warsztaty-text-col">
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed" data-design-id="warsztaty-description-wrapper">
            <h2 className="text-3xl font-bold text-slate-800 leading-tight" data-design-id="warsztaty-main-heading">
              Wasze słowa tworzą rzeczywistość waszego małżeństwa.
            </h2>
            
            <p data-design-id="warsztaty-paragraph-1">
              Podczas warsztatów nauczycie się zmieniać przekonania, uwalniać blokady i budować 
              nowy język relacji, który wzmacnia miłość zamiast ją osłabiać.
            </p>
            
            <p data-design-id="warsztaty-paragraph-2">
              Odkryjecie, jak poprzez świadome słowa i nowe spojrzenie na siebie nawzajem 
              budować w waszym domu przestrzeń, która coraz bardziej przypomina raj.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200" data-design-id="warsztaty-info-box">
            <h3 className="font-bold text-xl mb-4 text-slate-800" data-design-id="warsztaty-info-title">Dołącz do nas!</h3>
            <p className="text-slate-600 mb-6" data-design-id="warsztaty-info-text">
              Warsztaty pomagają na nowo odkryć miłość i bliskość, która często gubi się w prozie życia. 
              Zainwestujcie w Waszą relację.
            </p>
            
            {/* Action button: Usually goes to a signup form or contact */}
            <Button asChild size="lg" className="rounded-full w-full sm:w-auto px-8 text-white font-bold" data-design-id="warsztaty-cta-btn">
              <a href="https://betania.wroclaw.pl/" data-design-id="warsztaty-cta-link">
                Zapytaj o najbliższy termin
              </a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function StorePage() {
  return (
    <div className="container mx-auto px-4 py-16" data-design-id="sklep-page-wrapper">
      <div className="max-w-4xl mx-auto mb-16 text-center" data-design-id="sklep-header">
        <h1 className="text-4xl font-bold mb-6 text-slate-800" data-design-id="sklep-title">Sklep</h1>
        <p className="text-xl text-slate-600" data-design-id="sklep-subtitle">
          Książki i e-booki, które pomogą Ci spojrzeć na życie, relacje i codzienność z perspektywy Nieba.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto" data-design-id="sklep-grid">
        
        {/* Produkt 1: Książka papierowa */}
        <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow border-slate-200" data-design-id="product-card-1">
          <div className="relative w-full aspect-[3/4] bg-slate-100 p-8 flex items-center justify-center" data-design-id="product-img-wrapper-1">
            <div className="relative w-full h-full max-w-[280px] drop-shadow-xl" data-design-id="product-img-inner-1">
              <Image 
                src="/slowa-pelne-nieba.jpg" 
                alt="Słowa pełne nieba - Okładka książki" 
                fill
                className="object-contain"
                data-design-id="product-image-1"
              />
            </div>
          </div>
          <CardHeader className="text-center pb-2" data-design-id="product-header-1">
            <div className="text-sm text-primary font-semibold mb-2" data-design-id="product-category-1">Książka drukowana</div>
            <CardTitle className="text-2xl font-bold text-slate-800" data-design-id="product-title-1">Słowa pełne nieba</CardTitle>
            <CardDescription className="text-base mt-2" data-design-id="product-author-1">Wiktoria Kumpin</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 text-slate-600 text-center" data-design-id="product-content-1">
            <p data-design-id="product-desc-1">
              Poznaj siłę słów w relacji małżeńskiej. Dowiedz się, jak poprzez komunikację budować 
              więź pełną miłości, szacunku i otwartości na Boże działanie. Praktyczny poradnik o tym,
              jak stworzyć w swoim domu małżeński raj.
            </p>
          </CardContent>
          <CardFooter className="pt-4 pb-8 flex justify-center" data-design-id="product-footer-1">
            <Button asChild size="lg" className="rounded-full w-full max-w-[280px] text-white font-bold" data-design-id="product-buy-btn-1">
              <a href="https://amzn.eu/d/0ajl5BDk" target="_blank" rel="noopener noreferrer" data-design-id="product-buy-link-1">
                Kup na Amazon
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Produkt 2: E-book */}
        <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow border-slate-200" data-design-id="product-card-2">
          <div className="relative w-full aspect-[3/4] bg-slate-100 p-8 flex items-center justify-center" data-design-id="product-img-wrapper-2">
            <div className="relative w-full h-full max-w-[280px] drop-shadow-xl" data-design-id="product-img-inner-2">
              <Image 
                src="/ebook-tablet.png" 
                alt="Bóg chce Ci błogosławić - E-book na tablecie" 
                fill
                className="object-contain"
                data-design-id="product-image-2"
              />
            </div>
          </div>
          <CardHeader className="text-center pb-2" data-design-id="product-header-2">
            <div className="text-sm text-primary font-semibold mb-2" data-design-id="product-category-2">E-book</div>
            <CardTitle className="text-2xl font-bold text-slate-800" data-design-id="product-title-2">Bóg chce Ci błogosławić</CardTitle>
            <CardDescription className="text-base mt-2" data-design-id="product-subtitle-2">Nie ograniczaj Go!</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 text-slate-600 text-center" data-design-id="product-content-2">
            <p data-design-id="product-desc-2">
              Zacznij myśleć na skalę nieba. E-book, który pomoże Ci otworzyć się na Boże działanie w codzienności. 
              Przestań myśleć po ludzku i naucz się rozpoznawać momenty, w których ograniczasz Boga swoimi przekonaniami.
            </p>
          </CardContent>
          <CardFooter className="pt-4 pb-8 flex justify-center" data-design-id="product-footer-2">
            <Button asChild size="lg" className="rounded-full w-full max-w-[280px] text-white font-bold" data-design-id="product-buy-btn-2">
              <a href="https://1ct.eu/lgnDr" target="_blank" rel="noopener noreferrer" data-design-id="product-buy-link-2">
                Kup e-book
              </a>
            </Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}
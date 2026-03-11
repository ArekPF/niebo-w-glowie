import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Niebo w Głowie | Wiktoria Kumpin",
  description: "Zacznij myśleć na skalę nieba. Treści chrześcijańskie, książki, e-booki i warsztaty dla małżeństw.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${montserrat.variable}`}>
      <head>
        <script data-design-ignore="true" dangerouslySetInnerHTML={{ __html: `
        (function() {
          if (window === window.parent || window.__DESIGN_NAV_REPORTER__) return;
          window.__DESIGN_NAV_REPORTER__ = true;
          function report() {
            try { window.parent.postMessage({ type: 'IFRAME_URL_CHANGE', payload: { url: location.origin + location.pathname + location.hash } }, '*'); } catch(e) {}
          }
          report();
          var ps = history.pushState, rs = history.replaceState;
          history.pushState = function() { ps.apply(this, arguments); report(); };
          history.replaceState = function() { rs.apply(this, arguments); report(); };
          window.addEventListener('popstate', report);
          window.addEventListener('hashchange', report);
          window.addEventListener('load', report);
        })();
        `}} />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased flex flex-col min-h-screen">
        <ClientBody>
          <Navbar />
          <main className="flex-1 flex flex-col" data-design-id="main-content-area">
            {children}
          </main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
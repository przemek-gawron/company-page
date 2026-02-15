"use client";

import { useState } from "react";

// Structured Data dla SEO (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "J-Tech",
  "description": "Kompleksowe zaopatrzenie zakładów przemysłowych w systemy uszczelnień technicznych, tworzywa konstrukcyjne i obróbkę CNC.",
  "url": "https://uszczelkijtech.com",
  "telephone": "+48504044949",
  "email": "biurojtech@wp.pl",
  "foundingDate": "2025",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PL"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Polska"
  },
  "serviceType": [
    "Uszczelnienia techniczne",
    "Wycinanie uszczelek CNC",
    "Obróbka tworzyw sztucznych CNC",
    "Obróbka metali CNC",
    "Tworzywa konstrukcyjne",
    "Płyty uszczelkarskie",
    "Szczeliwa do pomp i zaworów"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Produkty J-Tech",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Uszczelki",
          "description": "O-ringi, simmeringi, uszczelki płaskie, spiralne, wielokrawędziowe"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Płyty uszczelkarskie",
          "description": "Płyty klingierytowe, gumowe, silikonowe, grafitowe, teflonowe"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Tworzywa konstrukcyjne",
          "description": "PTFE, PA6, POM, PEEK, PE, PP, PC, PVC, tekstolit"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Metale kolorowe i stale",
          "description": "Brąz, mosiądz, miedź, aluminium, stale nierdzewne i kwasoodporne"
        }
      }
    ]
  }
};

// Opisy produktów - możesz je edytować
const productDescriptions: Record<string, { title: string; description: string }> = {
  // Uszczelki
  "Płaskie": {
    title: "Uszczelki płaskie",
    description: "Uszczelki płaskie wykonywane są z różnych materiałów w zależności od zastosowania. Idealne do połączeń kołnierzowych, pokryw i innych powierzchni płaskich. Dostępne w standardowych i niestandardowych wymiarach."
  },
  "O-ringi": {
    title: "O-ringi",
    description: "O-ringi to uszczelki o przekroju okrągłym, stosowane w szerokim zakresie aplikacji. Wykonujemy je z gumy NBR, EPDM, FKM, silikon i innych materiałów. Dostępne w różnych twardościach i wymiarach."
  },
  "Simmeringi": {
    title: "Simmeringi",
    description: "Simmeringi (uszczelki wargowe) służą do uszczelniania wałów obrotowych. Chronią przed wyciekiem smaru i oleju oraz przed wnikaniem zanieczyszczeń. Dostępne w wersjach z jedną lub dwiema wargami uszczelniającymi."
  },
  "Pierścienie uszczelniające": {
    title: "Pierścienie uszczelniające",
    description: "Pierścienie uszczelniające stosowane w układach hydraulicznych i pneumatycznych. Wykonujemy je z tworzyw sztucznych, gumy i materiałów kompozytowych."
  },
  "Spiralne": {
    title: "Uszczelki spiralne",
    description: "Uszczelki spiralne (spiralnie zwijane) przeznaczone do wysokich ciśnień i temperatur. Składają się z naprzemiennie zwiniętych warstw metalu i materiału uszczelniającego."
  },
  "Wielokrawędziowe": {
    title: "Uszczelki wielokrawędziowe",
    description: "Uszczelki wielokrawędziowe metalowe do zastosowań wysokociśnieniowych. Charakteryzują się wieloma krawędziami uszczelniającymi zapewniającymi szczelność."
  },

  // Płyty uszczelkarskie
  "Klingierytowe": {
    title: "Płyty klingierytowe",
    description: "Płyty klingierytowe (typu Gambit, Polonit, Klinger, Temac) wykonane z włókien aramidowych lub bezazbestowych z dodatkiem kauczuku. Stosowane do uszczelnień kołnierzy w instalacjach wodnych, parowych i chemicznych."
  },
  "Gumowe": {
    title: "Płyty gumowe",
    description: "Płyty gumowe lite dostępne w różnych odmianach: zwykłe, olejoodporne, kwasoodporne, do przemysłu spożywczego. Różne grubości i twardości w zależności od zastosowania."
  },
  "Silikonowe": {
    title: "Płyty silikonowe",
    description: "Płyty silikonowe charakteryzują się wysoką odpornością temperaturową (-60°C do +230°C) i elastycznością. Idealne do przemysłu spożywczego i farmaceutycznego."
  },
  "Grafitowe": {
    title: "Płyty grafitowe",
    description: "Płyty grafitowe ekspandowane do wysokich temperatur (do 550°C) i ciśnień. Doskonała odporność chemiczna. Dostępne w wersji czystej lub z wkładką metalową."
  },
  "Teflonowe": {
    title: "Płyty teflonowe (PTFE)",
    description: "Płyty teflonowe PTFE o doskonałej odporności chemicznej i niskim współczynniku tarcia. Zakres temperatur od -200°C do +260°C. Idealne do agresywnych mediów chemicznych."
  },
  "Tekturowe, korkowe": {
    title: "Płyty tekturowe i korkowe",
    description: "Płyty tekturowe termoizolacyjne i korkowe do zastosowań o niskich wymaganiach. Ekonomiczne rozwiązanie do uszczelnień niskotemperaturowych i niskociśnieniowych."
  },

  // Szczeliwa do pomp i zaworów
  "Bawełniane": {
    title: "Szczeliwa bawełniane",
    description: "Szczeliwa bawełniane impregnowane do dławnic pomp i zaworów. Stosowane w instalacjach wodnych i parowych o niskich parametrach."
  },
  "Aramidowe": {
    title: "Szczeliwa aramidowe",
    description: "Szczeliwa aramidowe (kevlarowe) o wysokiej wytrzymałości mechanicznej i odporności temperaturowej. Do dławnic pomp pracujących w trudnych warunkach."
  },
  "Syntetyczne": {
    title: "Szczeliwa syntetyczne",
    description: "Szczeliwa syntetyczne z włókien PTFE, aramidowych i innych tworzyw. Uniwersalne zastosowanie w różnych mediach i temperaturach."
  },
  "Węglowe": {
    title: "Szczeliwa węglowe",
    description: "Szczeliwa węglowe i grafitowe do wysokich temperatur i agresywnych mediów. Doskonałe właściwości samosmarujące."
  },

  // Taśmy i sznury
  "Taśmy teflonowe, grafitowe, szklane, ceramiczne": {
    title: "Taśmy uszczelniające",
    description: "Taśmy uszczelniające teflonowe, grafitowe, szklane i ceramiczne. Do uszczelnień połączeń gwintowych, kołnierzowych i jako izolacja termiczna."
  },
  "Szczeliwa termoizolacyjne szklane": {
    title: "Szczeliwa termoizolacyjne szklane",
    description: "Sznury i szczeliwa z włókna szklanego do izolacji termicznej. Temperatura pracy do 550°C. Dostępne w różnych średnicach i splotach."
  },
  "Szczeliwa termoizolacyjne ceramiczne": {
    title: "Szczeliwa termoizolacyjne ceramiczne",
    description: "Sznury i szczeliwa ceramiczne do bardzo wysokich temperatur (do 1260°C). Stosowane w piecach, kotłach i innych urządzeniach wysokotemperaturowych."
  },
  "Tkaniny szklane, ceramiczne, aramidowe": {
    title: "Tkaniny przemysłowe",
    description: "Tkaniny techniczne szklane, ceramiczne i aramidowe. Do izolacji termicznej, osłon przeciwogniowych i jako materiał konstrukcyjny."
  },

  // Tworzywa konstrukcyjne
  "Teflon (PTFE)": {
    title: "Teflon (PTFE)",
    description: "Politetrafluoroetylen - tworzywo o najniższym współczynniku tarcia i doskonałej odporności chemicznej. Pręty, tuleje, płyty. Temperatura pracy -200°C do +260°C."
  },
  "Poliamid (PA6, PA6G)": {
    title: "Poliamid (PA6, PA6G)",
    description: "Poliamid odlewany i ekstrudowany. Wysoka wytrzymałość mechaniczna, dobra odporność na ścieranie. Do tulei, kół zębatych, prowadnic."
  },
  "Polietylen (PE), Polipropylen (PP)": {
    title: "Polietylen i Polipropylen",
    description: "PE i PP - tworzywa o dobrej odporności chemicznej i niskiej masie. Do zbiorników, wykładzin, elementów konstrukcyjnych."
  },
  "Poliacetal (POM), Poliwęglan (PC)": {
    title: "Poliacetal i Poliwęglan",
    description: "POM - tworzywo precyzyjne do elementów mechanicznych. PC - tworzywo przezroczyste o wysokiej udarności. Pręty, płyty, tuleje."
  },
  "PEEK, PVC, Tekstolit": {
    title: "PEEK, PVC, Tekstolit",
    description: "PEEK - tworzywo wysokotemperaturowe do 250°C. PVC - tworzywo chemoodporne. Tekstolit - laminat tkaninowy do elementów elektroizolacyjnych i mechanicznych."
  },

  // Metale i stale
  "Brąz, mosiądz, miedź, aluminium": {
    title: "Metale kolorowe",
    description: "Brąz, mosiądz, miedź i aluminium w postaci prętów, tulei, rur, blach i formatek. Do tulei ślizgowych, łożysk, elementów przewodzących."
  },
  "Stale nierdzewne i kwasoodporne": {
    title: "Stale nierdzewne i kwasoodporne",
    description: "Stale gatunków 304, 316, 321 i innych. Rury, kołnierze, kolana, trójniki, redukcje. Do instalacji chemicznych i spożywczych."
  },
  "Stale kotłowe": {
    title: "Stale kotłowe",
    description: "Stale kotłowe do pracy w wysokich temperaturach i ciśnieniach. Rury, dennice, kołnierze zgodne z normami ciśnieniowymi."
  },
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; description: string } | null>(null);

  const openModal = (productName: string) => {
    // Usuń "- " z początku jeśli istnieje
    const cleanName = productName.replace(/^- /, "");
    const content = productDescriptions[cleanName];
    if (content) {
      setModalContent(content);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  const ProductItem = ({ name, className = "" }: { name: string; className?: string }) => {
    const cleanName = name.replace(/^- /, "");
    const hasDescription = productDescriptions[cleanName];

    return (
      <li
        onClick={() => hasDescription && openModal(name)}
        className={`${hasDescription ? "cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors" : ""} ${className}`}
      >
        {name}
      </li>
    );
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      {/* Modal */}
      {modalOpen && modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white dark:bg-zinc-800 rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors"
            >
              <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{modalContent.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{modalContent.description}</p>
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 dark:bg-zinc-950/90 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-zinc-900 dark:text-white">J-Tech</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">O nas</a>
              <a href="#services" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Usługi</a>
              <a href="#products" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Produkty</a>
              <a href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Kontakt</a>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Zapytaj o wycenę
            </a>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-50 to-blue-50 dark:from-zinc-950 dark:to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white">J-Tech</h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Kompleksowe zaopatrzenie zakładów przemysłowych w systemy uszczelnień technicznych
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Firma J-Tech powstała w 2025 roku. Ponad 20-letnie doświadczenie zdobyte w firmach zajmujących się zaopatrzeniem zakładów przemysłowych w wszelkiego rodzaju systemy uszczelnień technicznych, jak i dostarczaniem szerokiej gamy produktów technicznych - między innymi tworzyw konstrukcyjnych, stali, smarów, łożysk - pozwoliło zdobyć niezbędną wiedzę.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Wiedza ta wykorzystywana jest teraz w celu wsparcia technicznego klienta przy doborze zarówno materiału jak i wymiarów uszczelnienia. Nasze produkty dostarczamy zarówno do odbiorców indywidualnych jak i dużych zakładów przemysłowych.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">Wsparcie techniczne</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">Elastyczne podejście</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">Atrakcyjne ceny</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">Wysoka precyzja</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#products"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  Zobacz produkty
                </a>
                <a
                  href="#contact"
                  className="border border-zinc-300 text-zinc-700 px-8 py-4 rounded-lg hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors font-medium text-center"
                >
                  Skontaktuj się
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Dlaczego warto wybrać J-Tech?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-600 dark:text-zinc-400">Kameralna atmosfera w małej firmie</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-600 dark:text-zinc-400">Elastyczne podejście do realizacji zamówienia</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-600 dark:text-zinc-400">Wsparcie techniczne przy doborze materiału i wymiarów</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-600 dark:text-zinc-400">Realizacja indywidualnych, nietypowych projektów</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-600 dark:text-zinc-400">Realizacja zarówno małych jak i dużych serii</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CNC Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Usługi CNC</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Precyzyjne wycinanie i obróbka na specjalistycznych maszynach CNC
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Wycinanie uszczelek płaskich</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Wycinanie uszczelek ploterem CNC daje bardzo wysoką precyzję i powtarzalność wykonania, dzięki czemu można otrzymać uszczelki w dowolnym kształcie idealnie dopasowane na żądany wymiar.
              </p>
              <ul className="text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
                <li>- Wykonanie na wymiar podany przez klienta</li>
                <li>- Produkcja według dostarczonego rysunku lub wzoru</li>
                <li>- Dorobienie uszczelnienia do dostarczonej części</li>
                <li>- Możliwość okucia blachą stalową</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Obróbka tworzyw i metali</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Firma J-Tech oferuje obróbkę tworzyw sztucznych i metali na specjalistycznych maszynach CNC.
              </p>
              <ul className="text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
                <li>- Toczenie CNC</li>
                <li>- Frezowanie CNC</li>
                <li>- Cięcie CNC</li>
                <li>- Jednostkowe i wielkoseryjne zamówienia</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Materiały do wycinania uszczelek</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-zinc-600 dark:text-zinc-400">
              <ul className="space-y-2">
                <ProductItem name="- Płyty gumowe lite (zwykłe, olejoodporne, kwasoodporne, spożywcze)" />
                <ProductItem name="- Płyty silikonowe" />
                <ProductItem name="- Płyty klingierytowe (Gambit, Polonit, Klinger, Temac)" />
                <ProductItem name="- Płyty grafitowe" />
              </ul>
              <ul className="space-y-2">
                <ProductItem name="- Płyty teflonowe" />
                <ProductItem name="- Tektura termoizolacyjna" />
                <ProductItem name="- Poliuretan" />
                <ProductItem name="- Mikroguma" />
              </ul>
              <ul className="space-y-2">
                <ProductItem name="- Filc techniczny" />
                <ProductItem name="- Korek" />
                <ProductItem name="- Preszpan" />
                <ProductItem name="- Inne materiały na zamówienie" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Nasze produkty</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Oferujemy materiały producentów zarówno krajowych jak i zagranicznych. Kliknij na produkt, aby zobaczyć szczegóły.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Uszczelki */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-zinc-100 dark:border-zinc-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="w-10 h-10 border-4 border-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Uszczelki</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
                <ProductItem name="- Płaskie" />
                <ProductItem name="- O-ringi" />
                <ProductItem name="- Simmeringi" />
                <ProductItem name="- Pierścienie uszczelniające" />
                <ProductItem name="- Spiralne" />
                <ProductItem name="- Wielokrawędziowe" />
              </ul>
            </div>
            {/* Płyty uszczelkarskie */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-zinc-100 dark:border-zinc-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="w-12 h-4 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Płyty uszczelkarskie</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
                <ProductItem name="- Klingierytowe" />
                <ProductItem name="- Gumowe" />
                <ProductItem name="- Silikonowe" />
                <ProductItem name="- Grafitowe" />
                <ProductItem name="- Teflonowe" />
                <ProductItem name="- Tekturowe, korkowe" />
              </ul>
            </div>
            {/* Szczeliwa */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-zinc-100 dark:border-zinc-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="flex gap-1">
                  <div className="w-2 h-10 bg-blue-600 rounded-full"></div>
                  <div className="w-2 h-10 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-10 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Szczeliwa do pomp i zaworów</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
                <ProductItem name="- Bawełniane" />
                <ProductItem name="- Aramidowe" />
                <ProductItem name="- Syntetyczne" />
                <ProductItem name="- Teflonowe" />
                <ProductItem name="- Grafitowe" />
                <ProductItem name="- Węglowe" />
              </ul>
            </div>
            {/* Taśmy i sznury */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-zinc-100 dark:border-zinc-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="w-10 h-3 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Taśmy i sznury</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
                <ProductItem name="- Taśmy teflonowe, grafitowe, szklane, ceramiczne" />
                <ProductItem name="- Szczeliwa termoizolacyjne szklane" />
                <ProductItem name="- Szczeliwa termoizolacyjne ceramiczne" />
                <ProductItem name="- Tkaniny szklane, ceramiczne, aramidowe" />
              </ul>
            </div>
            {/* Tworzywa konstrukcyjne */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-zinc-100 dark:border-zinc-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Tworzywa konstrukcyjne</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 text-sm">
                <ProductItem name="- Teflon (PTFE)" />
                <ProductItem name="- Poliamid (PA6, PA6G)" />
                <ProductItem name="- Polietylen (PE), Polipropylen (PP)" />
                <ProductItem name="- Poliacetal (POM), Poliwęglan (PC)" />
                <ProductItem name="- PEEK, PVC, Tekstolit" />
                <li className="text-xs text-zinc-500">Pręty, tuleje, płyty</li>
              </ul>
            </div>
            {/* Metale i stale */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-zinc-100 dark:border-zinc-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 border-4 border-blue-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Metale i stale</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
                <ProductItem name="- Brąz, mosiądz, miedź, aluminium" />
                <ProductItem name="- Stale nierdzewne i kwasoodporne" />
                <ProductItem name="- Stale kotłowe" />
                <li className="text-xs text-zinc-500">Rury, kołnierze, kolana, trójniki, redukcje, dennice, pręty, tuleje, blachy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Obsługiwane branże</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Obsługujemy firmy ze wszystkich gałęzi przemysłu
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Chemiczny</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Energetyczny</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Hutniczy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Spożywczy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Motoryzacyjny</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Wydobywczy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Drzewno-papierniczy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Maszynowy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Rolniczy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">i inne...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Kontakt</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              W celu określenia kosztów wykonania interesujących Państwa produktów prosimy o wysyłanie zapytań ofertowych
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Wyślij zapytanie</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Imię</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Jan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Nazwisko</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Kowalski"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="jan@firma.pl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Firma</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Nazwa firmy"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Wiadomość</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Opisz swoje zapotrzebowanie..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Wyślij zapytanie
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Dane kontaktowe</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-white">Telefon</p>
                      <a href="tel:+48504044949" className="text-blue-600 dark:text-blue-400 hover:underline">504 044 949</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-white">Email</p>
                      <a href="mailto:biurojtech@wp.pl" className="text-blue-600 dark:text-blue-400 hover:underline">biurojtech@wp.pl</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Realizacja zamówień</h3>
                <div className="space-y-3 text-blue-100">
                  <p>Jednostkowe elementy na indywidualne zamówienie</p>
                  <p>Produkcja wielkoseryjna</p>
                  <p>Dostawy dla odbiorców indywidualnych i przemysłowych</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 dark:bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-white">J-Tech</span>
              </div>
              <p className="text-zinc-400 max-w-md">
                Uszczelnienia techniczne, tworzywa konstrukcyjne i obróbka CNC. Ponad 20 lat doświadczenia w branży.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#about" className="hover:text-white transition-colors">O nas</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Usługi</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Produkty</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produkty</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#products" className="hover:text-white transition-colors">Uszczelki</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Płyty uszczelkarskie</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Tworzywa konstrukcyjne</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Metale i stale</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              &copy; 2025 J-Tech. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-zinc-500 text-sm">
              biurojtech@wp.pl
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

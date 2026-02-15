import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J-Tech | Uszczelnienia techniczne, tworzywa konstrukcyjne, obróbka CNC",
  description: "J-Tech - ponad 20 lat doświadczenia w branży uszczelnień technicznych. Wycinanie uszczelek CNC, płyty uszczelkarskie, szczeliwa, tworzywa konstrukcyjne (PTFE, PA6, POM, PEEK), metale kolorowe, stale nierdzewne. Wsparcie techniczne przy doborze materiału i wymiarów.",
  keywords: [
    "uszczelnienia techniczne",
    "uszczelki",
    "wycinanie uszczelek CNC",
    "płyty uszczelkarskie",
    "płyty klingierytowe",
    "o-ringi",
    "simmeringi",
    "szczeliwa",
    "tworzywa konstrukcyjne",
    "teflon PTFE",
    "poliamid PA6",
    "poliacetal POM",
    "PEEK",
    "metale kolorowe",
    "brąz",
    "mosiądz",
    "aluminium",
    "stale nierdzewne",
    "stale kwasoodporne",
    "obróbka CNC",
    "toczenie CNC",
    "frezowanie CNC",
    "uszczelki na wymiar",
    "uszczelki przemysłowe",
    "Gambit",
    "Polonit",
    "Klinger",
    "płyty grafitowe",
    "płyty silikonowe",
    "płyty teflonowe",
  ],
  authors: [{ name: "J-Tech" }],
  creator: "J-Tech",
  publisher: "J-Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "J-Tech",
    title: "J-Tech | Uszczelnienia techniczne i tworzywa konstrukcyjne",
    description: "Kompleksowe zaopatrzenie zakładów przemysłowych w systemy uszczelnień technicznych. Wycinanie uszczelek CNC, tworzywa konstrukcyjne, metale, stale. Ponad 20 lat doświadczenia.",
    images: [
      {
        url: "/logo-j-tech.png",
        width: 800,
        height: 800,
        alt: "J-Tech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J-Tech | Uszczelnienia techniczne i tworzywa konstrukcyjne",
    description: "Kompleksowe zaopatrzenie zakładów przemysłowych w systemy uszczelnień technicznych. Wycinanie uszczelek CNC, tworzywa konstrukcyjne, metale, stale.",
    images: ["/logo-j-tech.png"],
  },
  alternates: {
    canonical: "https://uszczelkijtech.com",
  },
  category: "business",
  icons: {
    icon: "/logo-j-tech.png",
    apple: "/logo-j-tech.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta name="geo.region" content="PL" />
        <meta name="geo.placename" content="Polska" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

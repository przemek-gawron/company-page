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
  title: "J-Tech | Uszczelnienia techniczne i tworzywa konstrukcyjne",
  description: "J-Tech - ponad 20 lat doświadczenia w branży uszczelnień technicznych. Wycinanie uszczelek CNC, tworzywa konstrukcyjne, metale kolorowe, stale. Wsparcie techniczne przy doborze materiału.",
  icons: {
    icon: "/logo-j-tech.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

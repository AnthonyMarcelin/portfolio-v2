import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Dithering } from "@paper-design/shaders-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anthony Marcelin — Développeur web junior",
    template: "%s | Anthony Marcelin",
  },
  description:
    "Développeur web junior. 20 ans chauffeur-grutier → reconversion dev. Next.js, React, Laravel, NestJS, React Native. CDI disponible.",
  keywords: [
    "Anthony Marcelin",
    "développeur web",
    "junior développeur",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "NestJS",
    "React Native",
    "CDI Gironde",
    "reconversion dev",
    "portfolio développeur",
  ],
  authors: [{ name: "Anthony Marcelin" }],
  applicationName: "Anthony Marcelin Portfolio",
  icons: ["/favicon.ico"],
  openGraph: {
    title: "Anthony Marcelin — Développeur web junior",
    description:
      "20 ans de rigueur sur chantier → développeur web. Next.js, React, Laravel, NestJS. CDI disponible La Teste-de-Buch.",
    url: "https://forgedigitalesolutions.com",
    siteName: "Anthony Marcelin Portfolio",
    images: ["/og.png"],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${jetBrainsMono.variable} antialiased font-mono`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
        >
          Aller au contenu
        </a>
        <div className="flex flex-col min-h-screen px-3">
          <Dithering
            colorBack="#e5e5e5"
            colorFront="#E85D04"
            shape="wave"
            type="8x8"
            size={2.2}
            speed={0.86}
            scale={0.68}
            className="absolute top-0 left-0 w-full h-screen -z-10 opacity-20 dithering-effect"
          />
          <Navbar />
          <div
            id="main-content"
            className={cn(
              "bg-background overflow-auto rounded-[25px] corner-squircle",
              "shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]",
            )}
            style={{ height: `calc(100dvh - 120px)` }}
          >
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

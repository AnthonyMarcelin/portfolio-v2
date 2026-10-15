import { Dithering } from "@paper-design/shaders-react";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { type Lang, langs, ui } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const t = ui[(await params).lang as Lang];
  return {
    title: { absolute: t.metaTitle, template: "%s | Anthony Marcelin" },
    description: t.metaDescription,
    keywords: [
      "Anthony Marcelin",
      "développeur web",
      "junior développeur",
      "web developer",
      "Next.js",
      "React",
      "TypeScript",
      "Laravel",
      "NestJS",
      "React Native",
      "Angular",
      "AdonisJS",
      "CDI Gironde",
      "alternance développeur",
      "développeur Bordeaux",
      "reconversion dev",
      "portfolio développeur",
    ],
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: "https://forgedigitalesolutions.com",
      siteName: "Anthony Marcelin Portfolio",
      images: ["/og.png"],
      locale: (await params).lang === "en" ? "en_US" : "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og.png"],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const lang = (await params).lang as Lang;
  return (
    <div lang={lang}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
      >
        {ui[lang].skipToContent}
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
        <Navbar lang={lang} />
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
        <Footer lang={lang} />
      </div>
    </div>
  );
}

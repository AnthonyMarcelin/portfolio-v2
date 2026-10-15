import type { Metadata } from "next";
import { Background } from "@/components/background";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getLang, langs, ui } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = await getLang(params);
  const t = ui[lang];
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
      locale: lang === "en" ? "en_US" : "fr_FR",
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
  // Unknown segments (/robots.txt, /wp-login.php…) 404 via getLang instead of
  // dynamicParams = false, which logs a NoFallbackError on every miss.
  const lang = await getLang(params);
  return (
    <div lang={lang}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
      >
        {ui[lang].skipToContent}
      </a>
      <div className="flex flex-col min-h-screen px-3">
        <Background />
        <Navbar lang={lang} />
        <div
          id="main-content"
          className={cn(
            "bg-background overflow-auto rounded-[25px] corner-squircle dark:ring-1 dark:ring-border",
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

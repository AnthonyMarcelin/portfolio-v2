import Image from "next/image";
import Link from "next/link";
import { type Lang, localePath, ui } from "@/lib/i18n";
import { LangSwitch } from "./lang-switch";
import { ThemeToggle } from "./theme";
import { InteractiveEyes } from "./ui/interactive-eye";

export default function Navbar({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return (
    <div className="h-15 w-full py-2">
      <div className="flex items-center justify-between">
        <div className="p-px bg-muted rounded-full ml-1.5">
          <Link
            href={localePath(lang, "/")}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"
            aria-label={t.homeLabel}
          >
            <Image
              src="/photo.jpg"
              alt="Anthony Marcelin"
              width={340}
              height={340}
              className="size-8 rounded-full"
            />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle labels={t.themeLabels} />
          <LangSwitch lang={lang} label={t.switchLang} />
          <Link
            href="mailto:anthony.marcelin13@gmail.com"
            rel="noopener noreferrer"
            className="group p-0.75 bg-primary/10 rounded-full"
          >
            <div className="flex items-center gap-2.5 bg-primary shadow-md rounded-full font-sans">
              <span className="ml-4 py-1.5 text-muted dark:text-white font-semibold">
                {t.contact}
              </span>
              <div className="px-1.5">
                <InteractiveEyes size={24} pupilSize={10} gap={8} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

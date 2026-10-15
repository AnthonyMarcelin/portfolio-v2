"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Lang, localePath } from "@/lib/i18n";

export const LangSwitch = ({ lang, label }: { lang: Lang; label: string }) => {
  const pathname = usePathname();
  const target: Lang = lang === "fr" ? "en" : "fr";
  const path = pathname.replace(/^\/(en|fr)(?=\/|$)/, "") || "/";

  return (
    <Link
      href={localePath(target, path)}
      hrefLang={target}
      aria-label={label}
      className="px-3 py-1.5 rounded-full bg-muted font-mono text-sm font-semibold uppercase hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {target}
    </Link>
  );
};

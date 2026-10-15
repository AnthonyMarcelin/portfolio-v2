"use client";

import {
  Briefcase09Icon,
  FolderLibraryIcon,
  Home09Icon,
  VictoryFinger03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { type Lang, localePath, ui } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const TABS = TABS_BY_LANG[lang];
  const [activeTab, setActiveTab] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabElementRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const currentTab = TABS.find((tab) => tab.href === pathname);
    if (currentTab) {
      setActiveTab(currentTab?.name);
    }
  }, [pathname, TABS]);

  useEffect(() => {
    const container = containerRef.current;

    if (activeTab && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;
        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100,
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100,
        ).toFixed()}% round 17px)`;
      }
    }
  }, [activeTab]);

  return (
    <div className="h-15 w-full flex items-center justify-between">
      <div className="relative flex flex-col items-center w-fit font-mono uppercase">
        <ul className="relative flex justify-center gap-5">
          {TABS.map((tab) => (
            <li key={tab.name}>
              <Link
                href={tab.href}
                ref={activeTab === tab.name ? activeTabElementRef : null}
                data-tab={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className="px-3 py-1.5 flex items-center gap-2 text-black dark:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md touch-manipulation"
              >
                {tab.icon}
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>

        <div
          aria-hidden
          className="absolute z-10 w-full overflow-hidden [transition:clip-path_0.2s_ease] [clip-path:inset(0px_75%_0px_0%_round_17px)]"
          ref={containerRef}
        >
          <ul className="relative flex justify-center gap-5 bg-background">
            {TABS.map((tab) => (
              <li key={tab.name}>
                <Link
                  href={tab.href}
                  data-tab={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className="px-3 py-1.5 flex items-center gap-2 text-primary font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md touch-manipulation"
                  tabIndex={-1}
                >
                  {tab.icon}
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden md:block text-sm uppercase tracking-tight">
        <div className="flex items-end gap-2">
          2026 © <span className="lowercase">Anthony Marcelin</span>.{" "}
          <HugeiconsIcon
            icon={VictoryFinger03Icon}
            className="size-4 inline-block"
          />{" "}
          {ui[lang].thanks}
        </div>
      </div>
    </div>
  );
}

const tabs = (lang: Lang) => [
  {
    name: ui[lang].nav.home,
    icon: <HugeiconsIcon icon={Home09Icon} className="size-4" />,
    href: localePath(lang, "/"),
  },
  {
    name: ui[lang].nav.projects,
    icon: <HugeiconsIcon icon={FolderLibraryIcon} className="size-4" />,
    href: localePath(lang, "/projects"),
  },
  {
    name: ui[lang].nav.work,
    icon: <HugeiconsIcon icon={Briefcase09Icon} className="size-4" />,
    href: localePath(lang, "/work"),
  },
];

const TABS_BY_LANG = { fr: tabs("fr"), en: tabs("en") };

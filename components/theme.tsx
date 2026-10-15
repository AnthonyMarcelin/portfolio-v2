"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { type MouseEvent, useEffect, useState } from "react";

// The initial "dark" class is set before paint by the inline script in app/layout.tsx.
export const useIsDark = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    const sync = () => setIsDark(html.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return isDark;
};

export const ThemeToggle = ({ labels }: { labels: [string, string] }) => {
  const isDark = useIsDark();

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const html = document.documentElement;
    const apply = () => {
      const next = !html.classList.contains("dark");
      html.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {}
    };

    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) return apply();

    // Circle reveal from the click point, sized to cover the farthest corner.
    const x = event.clientX;
    const y = event.clientY;
    const radius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    );
    document.startViewTransition(apply).ready.then(() => {
      html.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? labels[1] : labels[0]}
      className="group grid place-items-center size-8 rounded-full bg-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
    >
      <HugeiconsIcon
        icon={isDark ? Sun03Icon : Moon02Icon}
        className="size-4 transition-transform duration-500 group-hover:rotate-[20deg] group-active:scale-75"
      />
    </button>
  );
};

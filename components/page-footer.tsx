import Link from "next/link";
import { type Lang, ui } from "@/lib/i18n";
import { GitHub } from "@/lib/svg/github";
import { LinkedInIcon } from "@/lib/svg/linkedin";

export const PageFooter = ({ lang }: { lang: Lang }) => {
  const t = ui[lang];
  return (
    <div className="flex flex-col gap-2 text-muted-foreground text-sm font-sans">
      <span>
        {t.builtBy}{" "}
        <span className="text-primary font-medium">Anthony Marcelin</span>
      </span>
      <span>
        {t.sourceOn}{" "}
        <Link
          href="https://github.com/AnthonyMarcelin/portfolio-v2"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold uppercase tracking-normal font-mono hover:text-primary transition-colors"
        >
          GitHub
        </Link>{" "}
        <span className="text-xs opacity-50">
          ({t.basedOn} diip3sh/portfolio)
        </span>
      </span>
      <div className="flex gap-2 items-center">
        <span>{t.findMe}</span>
        <Link
          href="https://www.linkedin.com/in/anthony-marcelin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            fill="#00000a"
            className="dark:fill-foreground"
            height={16}
            width={16}
            aria-label="LinkedIn"
          />
        </Link>
        <span>{t.and}</span>
        <Link
          href="https://github.com/AnthonyMarcelin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub
            fill="#00000a"
            className="dark:fill-foreground"
            height={16}
            width={16}
            aria-label="GitHub"
          />
        </Link>
      </div>
    </div>
  );
};

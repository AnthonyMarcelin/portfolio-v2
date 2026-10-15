import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { SubHeadingText, TitleText } from "@/components/ui/text";
import { work } from "@/lib/data/work";
import { type Lang, ui } from "@/lib/i18n";

export default async function Work({ params }: PageProps<"/[lang]/work">) {
  const lang = (await params).lang as Lang;
  return (
    <Container
      gridOne={<WorkGridOne lang={lang} />}
      gridTwo={<WorkGridTwo lang={lang} />}
    />
  );
}

const WorkGridOne = ({ lang }: { lang: Lang }) => {
  const t = ui[lang];
  return (
    <div className="flex xl:h-[calc(100vh-10.5rem)] flex-col justify-between">
      <section></section>
      <section className="flex flex-col gap-6">
        <TitleText title={t.workTitle} />
        <p className="text-wrap text-muted-foreground max-w-3/4 font-sans">
          {t.workIntro1}
          <br />
          {t.workIntro2}
        </p>
      </section>
    </div>
  );
};

const WorkGridTwo = ({ lang }: { lang: Lang }) => {
  const t = ui[lang];
  return (
    <div className="flex flex-col gap-6">
      <SubHeadingText text={t.workHeading} />
      {work[lang].map((item) => (
        <div key={item.id} className="flex flex-col gap-4">
          <div className="flex w-full flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
            <MaybeLink href={item.url}>
              <div className="flex flex-row gap-2">
                <Image
                  src={item.image}
                  alt={item.company}
                  width={36}
                  height={36}
                  className="object-contain p-2 grayscale"
                  loading="lazy"
                  unoptimized
                />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium">
                    <span className="uppercase">{item.company}</span>
                    {item.badge && (
                      <span className="select-none rounded-full bg-[#F2F2F3] px-2 py-0.5 text-[10px] text-[#18181B] border border-[#EEEFF0]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">
                    {item.title}
                  </div>
                </div>
              </div>
            </MaybeLink>
            <div className="flex flex-wrap gap-x-3 pl-11 sm:pl-0 sm:min-w-24 sm:flex-col sm:justify-between whitespace-nowrap sm:text-right text-xs">
              <div className="text-muted-foreground">{item.date}</div>
              <div className="text-muted-foreground">{item.location}</div>
            </div>
          </div>
          <ul className="px-4">
            {item.description.map((desc) => (
              <li
                className="list-disc list-outside marker:text-primary font-sans"
                key={desc}
              >
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <PageFooter lang={lang} />
    </div>
  );
};

const MaybeLink = ({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) =>
  href ? (
    <Link target="_blank" href={href} rel="noopener noreferrer">
      {children}
    </Link>
  ) : (
    children
  );

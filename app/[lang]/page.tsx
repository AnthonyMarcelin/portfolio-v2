import { Add01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { AccordianComponent } from "@/components/ui/accordion";
import { SocialButton } from "@/components/ui/buttons";
import { SubHeadingText } from "@/components/ui/text";
import { WorkCardShuffle } from "@/components/work-card-shuffle";
import { WorkExperience } from "@/components/work-experience";
import { faqs, homeSection1, stackData, workExperience } from "@/lib/data/home";
import { type Lang, ui } from "@/lib/i18n";
import { Gmail } from "@/lib/svg/gmail";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Lang;
  return (
    <Container
      gridOne={<HomeGridOne lang={lang} />}
      gridTwo={<HomeGridTwo lang={lang} />}
    />
  );
}

const HomeGridOne = ({ lang }: { lang: Lang }) => {
  const t = ui[lang];
  return (
    <div className="flex xl:h-[calc(100vh-10.5rem)] flex-col relative lg:justify-between gap-10">
      <section className="flex flex-col">
        {homeSection1[lang].map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4"
          >
            <h3 className="col-span-1 text-muted-foreground uppercase">
              {item.title}
            </h3>
            <span className="col-span-1 sm:col-span-2 lg:col-span-3 font-sans">
              {item.value}
            </span>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4 lg:max-w-3/4">
        <div className="text-5xl font-sans font-semibold tracking-tight text-wrap">
          {t.heroLine1}
          <br />
          {t.heroLine2}
        </div>
        <div className="flex gap-2.5 items-center w-full">
          <SocialButton onClickAction={"mailto:anthony.marcelin13@gmail.com"}>
            <Gmail fill="#00000a" height={12} width={12} />
            <span>{t.mailMe}</span>
          </SocialButton>
        </div>
        <WorkExperience jobs={workExperience[lang]} />
      </section>
    </div>
  );
};

const HomeGridTwo = ({ lang }: { lang: Lang }) => {
  const t = ui[lang];
  return (
    <div className="flex flex-col gap-12">
      <WorkCardShuffle motto={t.motto} />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-muted-foreground uppercase text-sm">{t.stack}</h4>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {stackData.map((entry) => (
              <div
                key={entry.label}
                className="font-sans flex gap-3 items-center"
              >
                <Image
                  src={entry.logo}
                  alt={entry.label}
                  width={16}
                  height={16}
                />
                <span className="uppercase font-medium text-sm">
                  {entry.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-muted-foreground uppercase text-sm">
            {t.aiTitle}
          </h4>
          <p className="font-sans text-sm">{t.aiText}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SubHeadingText text={t.craneTitle} />
        <div className="flex flex-col gap-2">
          {t.craneLessons.map((lesson) => (
            <div key={lesson} className="font-sans flex gap-4 items-center">
              <HugeiconsIcon
                icon={Add01FreeIcons}
                className="text-muted-foreground"
              />
              <span>{lesson}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SubHeadingText text={t.faqTitle} />
        <AccordianComponent data={faqs[lang]} />
      </div>

      <PageFooter lang={lang} />
    </div>
  );
};

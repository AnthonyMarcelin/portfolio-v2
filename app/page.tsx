import { Add01FreeIcons, Attachment01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { AccordianComponent } from "@/components/ui/accordion";
import { SocialButton } from "@/components/ui/buttons";
import { ImageShowcase } from "@/components/ui/image-showcase";
import { SubHeadingText } from "@/components/ui/text";
import { WorkCardShuffle } from "@/components/work-card-shuffle";
import { WorkExperience } from "@/components/work-experience";
import { WorkStuff } from "@/components/work-stuff";
import {
  domainsData,
  faqs,
  homeSection1,
  projectData,
  stackData,
  whatIBuildData,
} from "@/lib/data/home";
import { GitHub } from "@/lib/svg/github";
import { Gmail } from "@/lib/svg/gmail";

export default function Home() {
  return <Container gridOne={<HomeGridOne />} gridTwo={<HomeGridTwo />} />;
}

const HomeGridOne = () => {
  return (
    <div className="flex xl:h-[calc(100vh-10.5rem)] flex-col relative lg:justify-between gap-10">
      <section className="flex flex-col">
        {homeSection1.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-3 lg:grid-cols-5 gap-2"
          >
            <h3 className="col-span-1 text-muted-foreground uppercase">
              {item.title}
            </h3>
            <span className="col-span-2 lg:col-span-3 font-sans">
              {item.value}
            </span>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4 lg:max-w-3/4">
        <div className="text-5xl font-sans font-semibold tracking-tight text-wrap">
          20 ans à orchestrer des chantiers.
          <br />
          Maintenant j'orchestre du code.
        </div>
        <div className="flex gap-2.5 items-center w-full">
          <SocialButton onClickAction={"mailto:anthony.marcelin13@gmail.com"}>
            <Gmail fill="#00000a" height={12} width={12} />
            <span>Mail Me</span>
          </SocialButton>
        </div>
        <WorkExperience />
      </section>
    </div>
  );
};

const HomeGridTwo = () => {
  return (
    <div className="flex flex-col gap-12">

      <WorkCardShuffle />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-muted-foreground uppercase text-sm">
            Stack
          </h4>
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
      </div>

      <div className="flex flex-col gap-4">
        <SubHeadingText text="Ce que la grue m'a appris" />
        <div className="flex flex-col gap-2">
          <div className="font-sans flex gap-4 items-center">
            <HugeiconsIcon icon={Add01FreeIcons} className="text-muted-foreground" />
            <span>Lire le plan avant de lever → Comprendre le besoin avant de coder</span>
          </div>
          <div className="font-sans flex gap-4 items-center">
            <HugeiconsIcon icon={Add01FreeIcons} className="text-muted-foreground" />
            <span>Zéro droit à l'erreur en cabine → Code propre, pas de bâclage</span>
          </div>
          <div className="font-sans flex gap-4 items-center">
            <HugeiconsIcon icon={Add01FreeIcons} className="text-muted-foreground" />
            <span>Coordonner chantier → Git, revues de code, communication</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SubHeadingText text="Questions fréquentes" />
        <AccordianComponent data={faqs} />
      </div>

      <PageFooter />
    </div>
  );
};

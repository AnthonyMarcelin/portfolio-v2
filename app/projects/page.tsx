import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { TitleText } from "@/components/ui/text";
import { projectData } from "@/lib/data/home";
import { GitHub } from "@/lib/svg/github";

export default function Projects() {
  return <Container gridOne={<ProjectsGridOne />} gridTwo={<ProjectsGridTwo />} />;
}

const ProjectsGridOne = () => {
  return (
    <div className="flex xl:h-[calc(100vh-10.5rem)] flex-col justify-between">
      <section />
      <section className="flex flex-col gap-6">
        <TitleText title="Projets" />
        <p className="text-wrap text-muted-foreground max-w-3/4 font-sans">
          Go Sport Now, Week Planner, Forge Digitale Solutions.
          <br />
          Contexte → défi → ce que ça dit de moi.
        </p>
        <PageFooter />
      </section>
    </div>
  );
};

const ProjectsGridTwo = () => {
  return (
    <div className="flex flex-col gap-6">
      {[...projectData]
        .map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-xl border border-border p-4"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-sm">
              <Image
                src={item.image}
                alt={item.project}
                fill
                className="object-cover"
              />
<div className="absolute bottom-3 left-3 z-10">
  {item.link ? (
    <Link
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/10 px-2 py-1 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 touch-manipulation"
    >
      <GitHub className="h-3 w-3 fill-white" />
      {item.link.includes("github") ? "Repo" : "Voir"}
    </Link>
  ) : (
    <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/20 px-2 py-1 text-xs font-medium text-white/50">
      Repo privé
    </span>
  )}
</div>

            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium uppercase text-sm">{item.project}</h3>
              <p className="text-muted-foreground font-sans text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

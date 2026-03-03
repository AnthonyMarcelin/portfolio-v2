import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { TitleText } from "@/components/ui/text";
import { Video } from "@/components/ui/video";
import { projects } from "@/lib/data/projects";
import { Arrow } from "@/lib/svg/arrow";
import { GitHub } from "@/lib/svg/github";

export default function Projects() {
  return <Container gridOne={<ProjectsGridOne />} gridTwo={<ProjectsGridTwo />} />;
}

const ProjectsGridOne = () => {
  return (
    <div className="flex xl:h-[calc(100vh-10.5rem)] flex-col justify-between">
      <section className="text-end">
      </section>
      <section className="flex flex-col gap-6">
        <TitleText title="Projets" />
        <p className="text-wrap text-muted-foreground max-w-3/4 font-sans">
          Go Sport Now, Week Planner, SkillSwap. Contexte → défi → ce que ça dit de moi.
        </p>
      </section>
    </div>
  );
};

const ProjectsGridTwo = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...projects]
          .sort((a, b) => b.id - a.id)
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-xl border border-border h-15"
            >
              <div className="relative p-1.5">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-sm">
                  {item.video.includes(".gif") ? (
                    <Image
                      src={item.video}
                      alt={item.alt}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Video
                      src={item.video}
                      className="h-full w-full rounded-none object-cover lg:w-full"
                    />
                  )}
                  <div className="absolute bottom-3 left-3 z-10">
                    <Link
                      href={item.xlink}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/10 px-2 py-1 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 touch-manipulation"
                    >
                      <GitHub className="h-3 w-3 fill-white" />
                      {item.xlink.includes("github") ? "Repo" : "Voir"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <PageFooter />
    </div>
  );
};

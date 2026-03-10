"use client";

import { Attachment01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { projectData } from "@/lib/data/home";

export const WorkStuff = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectData.map((item) => (
        <section className="flex flex-col gap-4" key={item.project}>
          <div className="rounded-xl border border-border bg-card p-1.5 shadow-md shadow-border">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.project}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
{item.link ? (
  <Link href={item.link} className="..." target="_blank" rel="noopener noreferrer">
    <HugeiconsIcon icon={Attachment01Icon} className="size-4" />
    {item.project}
  </Link>
) : (
  <span className="font-medium uppercase flex items-center gap-2">
    <HugeiconsIcon icon={Attachment01Icon} className="size-4" />
    {item.project}
    <span className="text-xs text-muted-foreground normal-case">(repo privé)</span>
  </span>
)}

            <p className="text-muted-foreground font-sans">
              {item.description}
            </p>
          </div>
        </section>
      ))}
    </main>
  );
};

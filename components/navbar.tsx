import Image from "next/image";
import Link from "next/link";
import { InteractiveEyes } from "./ui/interactive-eye";

export default function Navbar() {
  return (
    <div className="h-15 w-full py-2">
      <div className="flex items-center justify-between">
        <div className="p-px bg-muted rounded-xl ml-1.5">
          <Link
            href="/"
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
            aria-label="Accueil — Anthony Marcelin portfolio"
          >
            <Image
              src="/logo.png"
              alt="Anthony Marcelin logo"
              width={512}
              height={512}
              className="text-black size-8 rounded-xl"
            />
          </Link>
        </div>
        <Link
          href="mailto:anthony.marcelin13@gmail.com"
          rel="noopener noreferrer"
          className="p-0.75 bg-primary/10 rounded-full"
        >
          <div className="flex items-center gap-2.5 bg-primary shadow-md rounded-full font-sans">
            <span className="ml-4 py-1.5 text-muted font-semibold">
              Me contacter
            </span>
            <div className="px-1.5">
              <InteractiveEyes size={24} pupilSize={10} gap={8} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

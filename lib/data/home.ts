import type { Lang } from "@/lib/i18n";

type Fact = { title: string; value: string };
type Job = { company: string; date: string };
type Faq = { question: string; answer: string };
type Project = {
  project: string;
  link: string;
  image: string;
  description: string;
  status: string;
};

export const homeSection1: Record<Lang, Fact[]> = {
  fr: [
    { title: "Disponibilité", value: "CDI · Alternance" },
    { title: "Localisation", value: "Bordeaux et alentours · Remote" },
    { title: "Formation", value: "Titre Pro CDA 2025" },
    { title: "Expérience", value: "18 ans grutier → Dev" },
    { title: "Rôle", value: "Concepteur Développeur d'Applications" },
  ],
  en: [
    { title: "Availability", value: "Full-time · Work-study" },
    { title: "Location", value: "Bordeaux area · Remote" },
    { title: "Education", value: "CDA certification 2025" },
    { title: "Experience", value: "18 yrs crane operator → Dev" },
    { title: "Role", value: "Application designer & developer" },
  ],
};

export const workExperience: Record<Lang, Job[]> = {
  fr: [
    { company: "Forge Digitale Solutions", date: "2026 →" },
    { company: "Go Sport Now", date: "2025 - 2026" },
    { company: "Titre Pro CDA", date: "2024 - 2025" },
    { company: "Chauffeur grutier", date: "2006 - 2024" },
  ],
  en: [
    { company: "Forge Digitale Solutions", date: "2026 →" },
    { company: "Go Sport Now", date: "2025 - 2026" },
    { company: "CDA certification", date: "2024 - 2025" },
    { company: "Crane operator", date: "2006 - 2024" },
  ],
};

export const stackData = [
  // Core
  { label: "Next.js", logo: "/nextjs.svg" },
  { label: "TypeScript", logo: "/typescript.svg" },
  { label: "React", logo: "/react.svg" },
  { label: "JavaScript", logo: "/javascript.svg" },
  // Backend
  { label: "Laravel", logo: "/laravel.svg" },
  { label: "NestJS", logo: "/nestjs.svg" },
  { label: "NodeJS", logo: "/nodejs.svg" },
  // Tools
  { label: "Tailwind", logo: "/tailwindcss.svg" },
  { label: "PostgreSQL", logo: "/postgresql.svg" },
  { label: "Git", logo: "/git.svg" },
  { label: "Docker", logo: "/docker.svg" },
  { label: "Redis", logo: "/redis.svg" },
];

export const faqs: Record<Lang, Faq[]> = {
  fr: [
    {
      question: "Ce que 18 ans de grue m'ont appris ?",
      answer:
        "La rigueur absolue. Une charge mal calculée = chantier arrêté. Le code, c'est pareil : on réfléchit avant d'agir.",
    },
    {
      question: "Comment tu travailles en équipe ?",
      answer:
        "Je communique tôt sur les blocages. Go Sport Now m'a appris à m'adapter au rythme des autres sans bloquer personne.",
    },
    {
      question: "CDI ou alternance ?",
      answer:
        "Les deux. Je cherche une équipe sur Bordeaux et alentours, ou en remote. En attendant, je livre des projets avec Forge Digitale Solutions.",
    },
    {
      question: "Ton premier gros projet ?",
      answer:
        "Go Sport Now, une app de sport conçue à trois, de la maquette jusqu'aux stores. Ça m'a forcé à penser conception avant de coder.",
    },
    {
      question: "Ta devise ?",
      answer:
        "À chaque problème sa solution. Quand on en a pas, on se débrouille à en trouver une.",
    },
  ],
  en: [
    {
      question: "What did 18 years on cranes teach you?",
      answer:
        "Absolute rigor. A miscalculated load means a stopped job site. Code is the same: think before you act.",
    },
    {
      question: "How do you work in a team?",
      answer:
        "I flag blockers early. Go Sport Now taught me to adapt to other people's pace without holding anyone up.",
    },
    {
      question: "Full-time or work-study?",
      answer:
        "Both. I'm looking for a team in the Bordeaux area, or remote. Meanwhile, I ship projects with Forge Digitale Solutions.",
    },
    {
      question: "Your first big project?",
      answer:
        "Go Sport Now, a sports app built by a team of three, from mockups to the app stores. It forced me to think design before code.",
    },
    {
      question: "Your motto?",
      answer:
        "Every problem has a solution. When there isn't one yet, you find a way.",
    },
  ],
};

const links = {
  gsn: { link: "https://gosportnow.fr", image: "/work/GSN-01.png" },
  sz: { link: "https://spawnzone.fr", image: "/work/SZ-01.png" },
  mv: { link: "https://medocvibes.fr", image: "/work/MV-01.png" },
  fds: {
    link: "https://forgedigitalesolutions.com",
    image: "/work/FDS-01.png",
  },
};

export const projectData: Record<Lang, Project[]> = {
  fr: [
    {
      project: "Go Sport Now",
      ...links.gsn,
      description:
        "App de sport spontané, développée à trois. React Native + NestJS.",
      status: "Sur les stores",
    },
    {
      project: "Spawnzone",
      ...links.sz,
      description:
        "App pour trouver des joueurs près de chez soi, sur les mêmes jeux et les mêmes horaires. AdonisJS + Angular / Capacitor, auto-hébergée (VPS OVH, Dokploy).",
      status: "Sur les stores",
    },
    {
      project: "Médoc Vibes",
      ...links.mv,
      description:
        "L'app festive et loisirs du Médoc : restos, sorties, marchés, vide-greniers et surf. AdonisJS + Angular / Capacitor, auto-hébergée (VPS OVH, Dokploy).",
      status: "Bientôt sur les stores",
    },
    {
      project: "Forge Digitale Solutions",
      ...links.fds,
      description:
        "Mon auto-entreprise : sites et applications sur-mesure, du Médoc à Bordeaux. Next.js, React, Laravel, NestJS.",
      status: "Freelance",
    },
  ],
  en: [
    {
      project: "Go Sport Now",
      ...links.gsn,
      description:
        "Spontaneous sports app, built by a team of three. React Native + NestJS.",
      status: "On the stores",
    },
    {
      project: "Spawnzone",
      ...links.sz,
      description:
        "App to find nearby players who play the same games at the same times. AdonisJS + Angular / Capacitor, self-hosted (OVH VPS, Dokploy).",
      status: "On the stores",
    },
    {
      project: "Médoc Vibes",
      ...links.mv,
      description:
        "Going-out app for the Médoc region: restaurants, events, markets, flea markets and surf. AdonisJS + Angular / Capacitor, self-hosted (OVH VPS, Dokploy).",
      status: "Coming soon to the stores",
    },
    {
      project: "Forge Digitale Solutions",
      ...links.fds,
      description:
        "My freelance business: custom websites and apps, from the Médoc to Bordeaux. Next.js, React, Laravel, NestJS.",
      status: "Freelance",
    },
  ],
};

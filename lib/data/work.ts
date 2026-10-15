import type { Lang } from "@/lib/i18n";

type WorkItem = {
  id: string;
  company: string;
  date: string;
  title: string;
  badge: string;
  location: string;
  url?: string;
  image: string;
  description: string[];
};

export const work: Record<Lang, WorkItem[]> = {
  fr: [
    {
      id: "1",
      company: "Forge Digitale Solutions",
      date: "Avril 2026 →",
      title: "Développeur freelance",
      badge: "Auto-entreprise",
      location: "Médoc · Bordeaux · Remote",
      url: "https://forgedigitalesolutions.com",
      image: "/work/FDS-logo.png",
      description: [
        "Sites et applications sur-mesure pour pros et particuliers, du Médoc à Bordeaux.",
        "Apps mobiles iOS / Android : Spawnzone (sur les stores), Médoc Vibes (bientôt).",
        "AdonisJS + Angular / Capacitor, auto-hébergées sur VPS OVH avec Dokploy.",
        "Next.js, React, Laravel, NestJS selon les besoins projets.",
      ],
    },
    {
      id: "2",
      company: "Go Sport Now",
      date: "Sept 2025 - Avr 2026",
      title: "Application mobile en équipe",
      badge: "Projet à 3",
      location: "Remote",
      url: "https://gosportnow.fr",
      image: "/work/GSN-logo.png",
      description: [
        "App de sport spontané : créer une activité, trouver des partenaires autour de soi.",
        "Conçue et développée à trois, de la maquette jusqu'à la publication.",
        "En ligne sur l'App Store et Google Play.",
        "React Native + NestJS.",
      ],
    },
    {
      id: "3",
      company: "Formation Titre Pro CDA",
      date: "Nov 2024 - Sept 2025",
      title: "Concepteur Développeur d'Applications",
      badge: "Formation certifiante",
      location: "France",
      image: "/work/oclock-logo.png",
      description: [
        "SkillSwap : React + MVC + PostgreSQL (projet de fin de formation)",
        "Apprentissage intensif fullstack : frontend, backend, mobile.",
      ],
    },
    {
      id: "4",
      company: "Chauffeur-grutier",
      date: "2006 - 2024",
      title: "18 ans de précision absolue",
      badge: "Compétences transversales",
      location: "Chantiers France / Europe",
      image: "/work/crane-logo.png",
      description: [
        "Transport urgent dans toute l'Europe, gestion du temps, organisation.",
        "Gestion charges lourdes, coordination équipe chantier, zéro droit à l'erreur.",
        "Rigueur, anticipation risques, satisfaction client, résolution problèmes.",
        "Réflexes directement transférables au développement : vérifier avant de coder.",
      ],
    },
  ],
  en: [
    {
      id: "1",
      company: "Forge Digitale Solutions",
      date: "April 2026 →",
      title: "Freelance developer",
      badge: "Self-employed",
      location: "Médoc · Bordeaux · Remote",
      url: "https://forgedigitalesolutions.com",
      image: "/work/FDS-logo.png",
      description: [
        "Custom websites and apps for businesses and individuals, from the Médoc to Bordeaux.",
        "iOS / Android apps: Spawnzone (on the stores), Médoc Vibes (coming soon).",
        "AdonisJS + Angular / Capacitor, self-hosted on an OVH VPS with Dokploy.",
        "Next.js, React, Laravel, NestJS depending on the project.",
      ],
    },
    {
      id: "2",
      company: "Go Sport Now",
      date: "Sept 2025 - Apr 2026",
      title: "Team mobile app",
      badge: "Team of 3",
      location: "Remote",
      url: "https://gosportnow.fr",
      image: "/work/GSN-logo.png",
      description: [
        "Spontaneous sports app: create an activity, find partners nearby.",
        "Designed and built by a team of three, from mockups to release.",
        "Live on the App Store and Google Play.",
        "React Native + NestJS.",
      ],
    },
    {
      id: "3",
      company: "CDA certification",
      date: "Nov 2024 - Sept 2025",
      title: "Application designer & developer",
      badge: "State-certified program",
      location: "France",
      image: "/work/oclock-logo.png",
      description: [
        "SkillSwap: React + MVC + PostgreSQL (final project)",
        "Intensive full-stack training: frontend, backend, mobile.",
      ],
    },
    {
      id: "4",
      company: "Crane operator",
      date: "2006 - 2024",
      title: "18 years of absolute precision",
      badge: "Transferable skills",
      location: "Job sites France / Europe",
      image: "/work/crane-logo.png",
      description: [
        "Urgent transport across Europe, time management, organization.",
        "Heavy loads, job-site team coordination, zero margin for error.",
        "Rigor, risk anticipation, customer satisfaction, problem solving.",
        "Reflexes that carry straight over to development: check before you code.",
      ],
    },
  ],
};

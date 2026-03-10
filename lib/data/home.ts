import {
  CodeFreeIcons,
  LaptopFreeIcons,
  SmartPhone02FreeIcons,
  ToolsFreeIcons,
} from "@hugeicons/core-free-icons";

export const homeSection1 = [
  {
    title: "Disponibilité",
    value: "CDI",
  },
  {
    title: "Localisation",
    value: "Saint-Laurent-Médoc",
  },
  {
    title: "Formation",
    value: "Titre Pro CDA 2025",
  },
  {
    title: "Expérience",
    value: "20 ans transport / Grutier → Dev",
  },
  {
    title: "Rôle",
    value: "Concepteur Développeur d'Applications",
  },
];

export const workExperience = [
  {
    company: "Forge Digitale",
    date: "Avr 2026 →",
  },
  {
    company: "Go Sport Now",
    date: "Sept 2025 - Avr 2026",
  },
  {
    company: "Titre Pro CDA",
    date: "Nov 2024 - Sept 2025",
  },
  {
    company: "Chauffeur grutier",
    date: "2006 - 2024",
  },
];

export const whatIBuildData = [
  "Apps mobiles",
  "Backends API",
  "Interfaces React",
  "Fullstack Laravel",
  "Projets en prod",
  "Solutions pragmatiques",
];

export const domainsData = [
  { label: "Sport", logo: LaptopFreeIcons },
  { label: "Planning", logo: SmartPhone02FreeIcons },
  { label: "Échange", logo: CodeFreeIcons },
  { label: "BTP", logo: ToolsFreeIcons },
];

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

export const faqs = [
  {
    question: "Ce que 20 ans de grue m'ont appris ?",
    answer:
      "La rigueur absolue. Une charge mal calculée = chantier arrêté. Le code c'est pareil — on refléchit avant d'agir.",
  },
  {
    question: "Comment tu travailles en équipe ?",
    answer:
      "Je communique tôt sur les blocages. Go Sport Now m'a appris à m'adapter au rythme des autres sans bloquer personne.",
  },
  {
    question: "CDI ou auto-entreprise ?",
    answer:
      "Les deux. Auto-entreprise pour pratiquer maintenant, CDI pour un projet sérieux sur la durée avec une équipe.",
  },
  {
    question: "Ton premier gros projet ?",
    answer:
      "Go Sport Now — parce que rien n'existait qui me convenait. Ça m'a forcé à penser conception avant de coder.",
  },
  {
    question: "Ta devise ?",
    answer:
      "À chaque problème sa solution. Quand on en a pas, on se débrouille à en trouver une.",
  },
];

export const projectData = [
  {
    project: "Week Planner",
    link: "https://github.com/AnthonyMarcelin/week-planner",
    image: "/work/planner-01.png",
    description:
      "Outil de planification hebdo que je n'ai pas trouvé sur les stores — donc je l'ai construit. Laravel + Inertia + React, en production.",
    stars: "En prod",
  },
  {
    project: "Forge Digitale Solutions",
    link: "https://forgedigitalesolutions.com",
    image: "/work/FDS-01.png",
    description:
      "Auto-entreprise pour développer des solutions web fullstack. Next.js, React, Laravel, NestJS selon les besoins projets.",
    stars: "Freelance",
  },
  {
    project: "Go Sport Now",
    // link: "https://github.com/AnthonyMarcelin/GoSportNow",
    image: "/work/GSN-01.png",
    description:
      "Application mobile de mise en relation sportive. Projet d'équipe — React Native + NestJS.",
    stars: "GitHub",
  },
];

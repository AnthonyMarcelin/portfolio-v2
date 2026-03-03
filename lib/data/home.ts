import {
  TruckFreeIcons,
  CodeFreeIcons,
  LaptopFreeIcons,
  SmartPhone02FreeIcons,
} from "@hugeicons/core-free-icons";

export const homeSection1 = [
  {
    title: "Disponibilité",
    value: "CDI",
  },
  {
    title: "Localisation", 
    value: "Saint Laurent Medoc",
  },
  {
    title: "Formation",
    value: "Titre Pro CDA 2025",
  },
  {
    title: "Expérience",
    value: "20 ans transport / grue → Dev",
  },
  {
    title: "Rôle",
    value: "Concepteur Développeur d'Application",
  },
];

export const workExperience = [
  {
    company: "Forge Digitale Solutions",
    date: "Avril 2026 →",
    badge: "Auto-entreprise",
  },
  {
    company: "Formation CDA",
    date: "Nov 2024 - Sept 2025",
  },
  {
    company: "Chauffeur-grutier",
    date: "2004 - 2024",
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
];

export const stackData = [
  // Core
  { label: "Next.js", logo: "/nextjs.svg" },
  { label: "TypeScript", logo: "/typescript.svg" },
  { label: "React", logo: "/react.svg" },
  { label: "React Native", logo: "/react-native.svg" },

  // Backend  
  { label: "Laravel", logo: "/laravel.svg" },
  { label: "NestJS", logo: "/nestjs.svg" },

  // Tools
  { label: "Tailwind", logo: "/tailwindcss.svg" },
  { label: "PostgreSQL", logo: "/postgres.svg" },
];

export const faqs = [
  {
    question: "Ce que 20 ans de grue m'ont appris ?",
    answer: "La rigueur absolue. Une charge mal calculée = chantier arrêté. Le code c'est pareil — une erreur ne se rattrape pas toujours.",
  },
  {
    question: "Comment tu travailles en équipe ?",
    answer: "Je communique tôt sur les blocages. Go Sport Now m'a appris à m'adapter au rythme des autres sans bloquer personne.",
  },
  {
    question: "CDI ou auto-entreprise ?",
    answer: "Les deux. Auto-entreprise pour pratiquer maintenant, CDI pour un projet sérieux sur la durée avec une équipe.",
  },
  {
    question: "Ton premier projet perso ?",
    answer: "Week Planner — parce que rien n'existait qui me convenait. Ça m'a forcé à penser UX avant de coder.",
  },
  {
    question: "Ta devise ?",
    answer: "À chaque problème sa solution. Quand on en a pas, on se débrouille à en trouver une.",
  },
];

export const openSourceContributions = [
  {
    project: "Week Planner",
    link: "https://planner.drannocserver.com",
    description: "Outil perso de planification hebdo. Laravel + React. En prod.",
    image: "/week-planner-preview.png",
    stars: "En prod"
  },
  {
    project: "SkillSwap",
    link: "https://github.com/AnthonyMarcelin/SkillSwap",
    description: "Plateforme d'échange de compétences. Projet de fin de formation.",
    image: "/skillswap-preview.png",
    stars: "GitHub"
  }
];

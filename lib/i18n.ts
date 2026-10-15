import { notFound } from "next/navigation";

export const langs = ["fr", "en"] as const;
export type Lang = (typeof langs)[number];

// Every [lang] layout/page runs in parallel, so each one validates the segment.
export const getLang = async (params: Promise<{ lang: string }>) => {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) notFound();
  return lang as Lang;
};

// FR lives at the root (/, /work, /projects via rewrites), EN under /en.
export const localePath = (lang: Lang, path: string) =>
  lang === "fr" ? path : `/en${path === "/" ? "" : path}`;

export const ui = {
  fr: {
    metaTitle: "Anthony Marcelin, développeur web junior",
    metaDescription:
      "Concepteur Développeur d'Applications. Plus de 15 ans chauffeur-grutier → reconversion dev. Next.js, React, Laravel, NestJS, React Native. CDI ou alternance, Bordeaux et alentours ou remote.",
    skipToContent: "Aller au contenu",
    homeLabel: "Accueil du portfolio d'Anthony Marcelin",
    contact: "Me contacter",
    switchLang: "Read in English",
    themeLabels: ["Passer en mode sombre", "Passer en mode clair"] as [
      string,
      string,
    ],
    nav: { home: "Home", projects: "Projets", work: "Work" },
    thanks: "Merci pour votre attention !",
    heroLine1: "Plus de 15 ans à livrer des chantiers, grue en main.",
    heroLine2: "Maintenant je livre du code.",
    mailMe: "M'écrire",
    stack: "Stack",
    stackIntro: "Choix techniques guidés par le besoin. Stack principale :",
    workflowTitle: "De la conception à la production",
    workflowSteps: [
      "Analyse du besoin et conception avant le choix technique",
      "Découpage en tickets et suivi de l'avancement (Linear)",
      "Développement assisté par l'IA (Claude Code, Cursor), avec un code relu et maîtrisé",
      "Pull requests et revue de code avant chaque merge",
      "CI/CD : build Docker et déploiement continu (Dokploy)",
    ],
    craneTitle: "Ce que la grue m'a appris",
    craneLessons: [
      "Lire le plan avant de lever → Comprendre le besoin avant de coder",
      "Zéro droit à l'erreur en cabine → Code propre, pas de bâclage",
      "Coordonner chantier → Git, revues de code, communication",
    ],
    faqTitle: "Questions fréquentes",
    motto: "À chaque problème sa solution.",
    workTitle: "Works",
    workIntro1: "Grutier → dev. // Chantiers → code.",
    workIntro2: "Mon parcours.",
    workHeading: "Parcours professionnel",
    projectsTitle: "Projets",
    projectsIntro1: "Apps mobiles et sites web, du concept jusqu'aux stores.",
    projectsIntro2: "En équipe ou en freelance.",
    visitSite: "Voir le site",
    builtBy: "Construit par",
    sourceOn: "Code source sur",
    basedOn: "base :",
    findMe: "Retrouve-moi sur",
    and: "et",
  },
  en: {
    metaTitle: "Anthony Marcelin, junior web developer",
    metaDescription:
      "Application designer & developer (French CDA certification). 15+ years as a crane truck driver → career change to dev. Next.js, React, Laravel, NestJS, React Native. Open to full-time or work-study roles, Bordeaux area or remote.",
    skipToContent: "Skip to content",
    homeLabel: "Anthony Marcelin portfolio home",
    contact: "Contact me",
    switchLang: "Lire en français",
    themeLabels: ["Switch to dark mode", "Switch to light mode"] as [
      string,
      string,
    ],
    nav: { home: "Home", projects: "Projects", work: "Work" },
    thanks: "Thanks for stopping by!",
    heroLine1: "15+ years delivering to job sites at the crane controls.",
    heroLine2: "Now I ship code.",
    mailMe: "Mail me",
    stack: "Stack",
    stackIntro: "Tech choices driven by the need. Main stack:",
    workflowTitle: "From design to production",
    workflowSteps: [
      "Requirements analysis and design before any tech choice",
      "Work broken down into tickets and tracked (Linear)",
      "AI-assisted development (Claude Code, Cursor), with code that is reviewed and understood",
      "Pull requests and code review before every merge",
      "CI/CD: Docker builds and continuous deployment (Dokploy)",
    ],
    craneTitle: "What the crane taught me",
    craneLessons: [
      "Read the plan before lifting → Understand the need before coding",
      "Zero margin for error in the cab → Clean code, no shortcuts",
      "Coordinating a job site → Git, code reviews, communication",
    ],
    faqTitle: "FAQ",
    motto: "Every problem has a solution.",
    workTitle: "Works",
    workIntro1: "Crane driver → dev. // Job sites → code.",
    workIntro2: "My journey.",
    workHeading: "Experience",
    projectsTitle: "Projects",
    projectsIntro1: "Mobile apps and websites, from concept to the stores.",
    projectsIntro2: "In a team or as a freelancer.",
    visitSite: "Visit site",
    builtBy: "Built by",
    sourceOn: "Source code on",
    basedOn: "based on",
    findMe: "Find me on",
    and: "and",
  },
} satisfies Record<Lang, unknown>;

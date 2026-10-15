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
      "Concepteur Développeur d'Applications. Plus de 15 ans chauffeur-livreur grutier → reconversion dev. Next.js, React, Laravel, NestJS, React Native. CDI ou alternance, Bordeaux et alentours ou remote.",
    skipToContent: "Aller au contenu",
    homeLabel: "Accueil du portfolio d'Anthony Marcelin",
    contact: "Me contacter",
    switchLang: "Read in English",
    nav: { home: "Home", projects: "Projets", work: "Work" },
    thanks: "Merci pour votre attention !",
    heroLine1: "Plus de 15 ans sur la route et les chantiers.",
    heroLine2: "Maintenant je livre du code.",
    mailMe: "M'écrire",
    stack: "Stack",
    stackIntro: "La solution s'adapte au problème. Ce que j'utilise le plus :",
    workflowTitle: "De la conception à la prod",
    workflowSteps: [
      "Comprendre le problème avant de choisir l'outil",
      "Découper le travail en tickets Linear",
      "Coder avec Claude Code et Cursor, en workflows agentiques",
      "Une PR par ticket, relue avant le merge",
      "Merge sur main → build Docker et déploiement auto sur Dokploy",
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
    workIntro1: "Chauffeur → dev. // Livraisons → code.",
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
      "Application designer & developer (French CDA certification). 15+ years as a delivery driver and crane truck operator → career change to dev. Next.js, React, Laravel, NestJS, React Native. Open to full-time or work-study roles, Bordeaux area or remote.",
    skipToContent: "Skip to content",
    homeLabel: "Anthony Marcelin portfolio home",
    contact: "Contact me",
    switchLang: "Lire en français",
    nav: { home: "Home", projects: "Projects", work: "Work" },
    thanks: "Thanks for stopping by!",
    heroLine1: "15+ years on the road and on job sites.",
    heroLine2: "Now I ship code.",
    mailMe: "Mail me",
    stack: "Stack",
    stackIntro: "The solution fits the problem. What I use most:",
    workflowTitle: "From design to production",
    workflowSteps: [
      "Understand the problem before picking the tool",
      "Break the work down into Linear tickets",
      "Code with Claude Code and Cursor, using agentic workflows",
      "One PR per ticket, reviewed before merge",
      "Merge to main → Docker build and automatic deploy on Dokploy",
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
    workIntro1: "Driver → dev. // Deliveries → code.",
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

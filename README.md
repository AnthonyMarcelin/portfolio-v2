# Anthony Marcelin · Portfolio

[English](#english) · [Français](#français)

## English

Developer portfolio: application designer & developer (French CDA certification, 2025), after 15+ years as a crane truck driver.
I'm looking for a full-time or work-study role, in the Bordeaux area or remote.

### Pages

- **Home**: key facts, career timeline, stack, FAQ
- **Work** (`/work`): professional experience
- **Projects** (`/projects`): Go Sport Now, Spawnzone, Médoc Vibes, Forge Digitale Solutions

### Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion · Base UI · Biome

### Languages

The site is available in French (at the root: `/`, `/work`, `/projects`) and English (`/en`, `/en/work`, `/en/projects`).
Pages live in `app/[lang]/`, and rewrites in `next.config.ts` serve the French version at the root.

### Editing content

Every text exists in `fr` and `en`:

- `lib/i18n.ts`: interface text (titles, buttons, navigation, metadata)
- `lib/data/home.ts`: key facts, timeline, FAQ, projects
- `lib/data/work.ts`: Work page experience

Screenshots are in `public/work/` (1443×702).

### Development

```bash
pnpm install
pnpm dev      # local server
pnpm build    # production build
pnpm lint     # Biome
```

Work happens on `dev`. Merging into `main` deploys to Dokploy (Docker build from the `Dockerfile`, port 3000).

### Credits

Based on [diip3sh](https://github.com/diip3sh/portfolio)'s portfolio, MIT license.

## Français

Portfolio de développeur : Concepteur Développeur d'Applications (Titre Pro CDA 2025), après plus de 15 ans comme chauffeur-grutier.
Je cherche un CDI ou une alternance, sur Bordeaux et alentours ou en remote.

### Pages

- **Accueil** : infos clés, frise du parcours, stack, FAQ
- **Work** (`/work`) : parcours professionnel
- **Projets** (`/projects`) : Go Sport Now, Spawnzone, Médoc Vibes, Forge Digitale Solutions

### Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion · Base UI · Biome

### Langues

Le site existe en français (à la racine : `/`, `/work`, `/projects`) et en anglais (`/en`, `/en/work`, `/en/projects`).
Les pages vivent dans `app/[lang]/`, et des rewrites dans `next.config.ts` servent la version FR à la racine.

### Modifier le contenu

Chaque texte existe en `fr` et en `en` :

- `lib/i18n.ts` : textes de l'interface (titres, boutons, navigation, métadonnées)
- `lib/data/home.ts` : infos clés, frise, FAQ, projets
- `lib/data/work.ts` : parcours de la page Work

Les captures d'écran sont dans `public/work/` (1443×702).

### Développement

```bash
pnpm install
pnpm dev      # serveur local
pnpm build    # build de production
pnpm lint     # Biome
```

On travaille sur `dev`. Un merge sur `main` déploie sur Dokploy (build Docker depuis le `Dockerfile`, port 3000).

### Crédits

Basé sur le portfolio de [diip3sh](https://github.com/diip3sh/portfolio), sous licence MIT.

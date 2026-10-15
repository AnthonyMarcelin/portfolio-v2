# Portfolio — Anthony Marcelin

Portfolio de développeur : Concepteur Développeur d'Applications (Titre Pro CDA 2025), après 18 ans comme chauffeur-grutier.
Je cherche un CDI ou une alternance, sur Bordeaux et alentours ou en remote.

## Pages

- **Accueil** : infos clés, frise du parcours, stack, FAQ
- **Work** (`/work`) : parcours professionnel
- **Projets** (`/projects`) : Go Sport Now, Spawnzone, Médoc Vibes, Forge Digitale Solutions

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion · Base UI · Biome

## Langues

Le site existe en français (à la racine : `/`, `/work`, `/projects`) et en anglais (`/en`, `/en/work`, `/en/projects`).
Les pages vivent dans `app/[lang]/`, et des rewrites dans `next.config.ts` servent la version FR à la racine.

## Modifier le contenu

Chaque texte existe en `fr` et en `en` :

- `lib/i18n.ts` : textes de l'interface (titres, boutons, navigation, métadonnées)
- `lib/data/home.ts` : infos clés, frise, FAQ, projets
- `lib/data/work.ts` : parcours de la page Work

Les captures d'écran sont dans `public/work/` (1443×702).

## Développement

```bash
pnpm install
pnpm dev      # serveur local
pnpm build    # build de production
pnpm lint     # Biome
```

Déployé sur Railway (lockfile pnpm).

## Crédits

Basé sur le portfolio de [diip3sh](https://github.com/diip3sh/portfolio), sous licence MIT.

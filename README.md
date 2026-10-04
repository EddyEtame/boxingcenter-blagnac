# boxingcenter-blagnac

Site vitrine pour les habitants de Blagnac, orienté vers **Boxing Center Toulouse Minimes**. Le lieu d’entraînement présenté est à Toulouse, au 12 rue de Fenouillet. Le site n’invente pas une salle à Blagnac.

Direction originale : papier chaud, encre et menthe, typographie condensée, photographies réelles et fiche de départ interactive. Le visiteur choisit une pratique et ses disponibilités personnelles, reçoit un conseil de préparation, puis rejoint les informations officielles du club. La fiche ne réserve aucun créneau et n’envoie aucune donnée.

## Développement

Node.js 22.19+ recommandé pour l’ensemble des dépendances. Les vérifications locales ont également fonctionné avec Node 22.17.1.

```sh
npm ci
npm run dev
```

## Production et vérification

```sh
npm run build
npm run preview
```

Le build produit les pages HTML statiques, les visuels de partage propres à chaque page et le sitemap, puis contrôle métadonnées, canonical, H1, liens, images, FAQ et localisation. Aucun service externe n’est nécessaire au rendu des pages.

Les photographies optimisées sont incluses dans le dépôt. `node scripts/prepare-images.mjs` permet de les redériver lorsque les fichiers source du réseau ou les archives fournies sont présents ; cette étape est facultative pour une installation depuis GitHub.

## Pages et données

- Accueil, club proche de Blagnac, boxe anglaise, MMA, boxing fitness, enfants, femmes, plannings, tarifs et contact.
- Confidentialité et page 404 dédiées.
- `src/data/site.mjs` : identité du lieu réel, destinations et pratiques.
- `src/data/pages.mjs` : contenus éditoriaux, FAQ et maillage.
- `src/data/photos.mjs` : scènes, provenance et crédits photographiques.
- `docs/FACTS.md` : sources et limites des informations publiées.
- [État du projet et reprise](docs/PROJECT-STATE.md).

Le MMA est présenté conformément au brief et orienté vers le réseau Boxing Center via les Minimes. Les horaires, prix et réservation restent sur `boxe-toulouse.com`.

## SEO et découverte IA

`src/data/seo.mjs` centralise l’attribution d’Eddy Etame Etame, les références et les messages des vignettes. `humans.txt`, `llms.txt` et `llms-full.txt` sont générés par Astro depuis les données du site. Le sitemap comprend les images effectivement visibles et des dates Git de modification des contenus ; sans historique disponible, les dates sont omises.

[Revue SEO, GEO, AEO et reprise après déploiement](docs/SEO-REVIEW.md).

IndexNow est préparé pour le domaine canonique. La commande suivante ne fait aucun appel réseau :

```sh
npm run indexnow -- --dry-run
```

Après publication, `npm run indexnow -- --submit` contrôle la clé et les pages distantes avant soumission. Les demandes Google se réalisent séparément via Search Console. Le jeton HTML éventuel se configure avec `PUBLIC_GOOGLE_SITE_VERIFICATION` (voir `.env.example`).

## Mise en ligne

`vercel.json` configure une sortie Astro statique dans `dist/`. Le domaine canonique est `https://boxingcenter-blagnac.fr`. L’association à un hébergement, le DNS de production et la validation Google Search Console restent des opérations à réaliser avec les accès du propriétaire. Un push GitHub ne prouve pas un déploiement ni une indexation Google.

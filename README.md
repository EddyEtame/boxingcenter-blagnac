# boxingcenter-blagnac

Site vitrine pour les habitants de Blagnac, orienté vers **Boxing Center Toulouse Minimes**. Le lieu d’entraînement présenté est à Toulouse, au 12 rue de Fenouillet. Le site n’invente pas une salle à Blagnac.

Direction originale : papier chaud, encre et menthe, typographie condensée, photographies réelles et fiche de départ interactive. Le visiteur choisit une pratique et ses disponibilités personnelles, reçoit un conseil de préparation, puis rejoint les informations officielles du club. La fiche ne réserve aucun créneau et n’envoie aucune donnée.

## Développement

Node.js 22.x, version 22.19 ou supérieure recommandée pour l’ensemble des dépendances. La version majeure est fixée dans `package.json` pour Vercel. Les vérifications Windows ont également fonctionné avec Node 22.17.1.

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

Les textes des vignettes sont dessinés depuis les contours des polices incluses dans le dépôt, sans recherche de polices système. Un test du rendu réel du titre précède leur génération ; les limites de chaque texte sont aussi contrôlées.

Les photographies optimisées sont incluses dans le dépôt. `node scripts/prepare-images.mjs` permet de les redériver lorsque les fichiers source du réseau ou les archives fournies sont présents ; cette étape est facultative pour une installation depuis GitHub.

## Pages et données

- Accueil, club proche de Blagnac, boxe anglaise, MMA, boxing fitness, enfants, femmes, plannings, tarifs et contact.
- Confidentialité, mentions légales et page 404 dédiées.
- `src/data/site.mjs` : identité du lieu réel, destinations et pratiques.
- `src/data/pages.mjs` : contenus éditoriaux, FAQ et maillage.
- `src/data/photos.mjs` : scènes, provenance et crédits photographiques.
- `docs/FACTS.md` : sources et limites des informations publiées.
- [État du projet et reprise](docs/PROJECT-STATE.md).

Le MMA est présenté conformément au brief et orienté vers la salle du réseau qui l’enseigne, Boxing Center Toulouse États-Unis (clubmma.fr), le contact des Minimes restant proposé. Les horaires, prix et réservation restent sur `boxe-toulouse.com`.

Les quinze requêtes du cahier des charges sont rattachées à leurs pages dans `src/data/search-intents.mjs` ; le build refuse une page où sa requête n’apparaît pas telle quelle. Les liens vers l’extérieur ouvrent un nouvel onglet, les liens internes non. Les icônes (`favicon.svg`, `.ico`, PNG, `apple-touch-icon`, manifeste) sont générées au build depuis la marque par `scripts/favicons.mjs`.

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

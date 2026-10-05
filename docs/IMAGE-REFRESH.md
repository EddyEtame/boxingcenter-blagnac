# Images — passe du 5 octobre 2026

**Correction ultérieure demandée par Eddy :** toutes les étiquettes et attributions d’images sont supprimées de la livraison (pages, ALT, fichiers, OG, textes de découverte et mentions légales). Les sept signatures incrustées dans les anciennes photos ont été retirées par une passe ciblée chacune : 7 crédits supplémentaires, solde 218,75. Les nouveaux noms et URL OG versionnées évitent les anciennes versions en cache. Les paragraphes ci-dessous conservent l’historique de la première livraison ; leurs choix de légendes/crédits ne sont plus en vigueur. Registre actuel : `docs/HANDOFF.md`, directive 17.

Demande d’Eddy : réduire la répétition des images, employer GPT Image via Higgsfield avec les mêmes personnes et les mêmes décors comme références, changer les angles, gestes et tenues, économiser les crédits, intégrer puis pousser.

## Production et coût

Sept vues réalisées avec `gpt_image_2_5` / GPT Image 2.5, variante `flare`, qualité `medium`, résolution `2k`, format `3:2`, une sortie par demande. Une première vue a été contrôlée avant de lancer les six suivantes. Toutes les demandes ont réussi au premier essai ; aucune régénération payante.

- Solde Higgsfield avant : **232,75 crédits**.
- Dépense totale : **7 crédits** (1 par image, environ 3 % du solde).
- Solde constaté après : **225,75 crédits**.
- Aucun crédit Codex supplémentaire consacré à des générations via un autre fournisseur.
- Les paramètres, prompts exacts, identifiants de génération et URL des photographies sources sont conservés dans [image-generation.json](image-generation.json).

## Intégration

| Page | Nouvelle vue (`public/images/`, suffixes 480/960/1600) |
| --- | --- |
| Accueil | `club-boxe-blagnac-boxing-center-garde-angle-ia` |
| Le club | `salle-boxe-proche-blagnac-ring-coach-angle-ia` |
| Boxe anglaise | `boxe-anglaise-blagnac-pattes-ours-angle-ia` |
| Boxing fitness | `boxe-fitness-blagnac-sac-garde-angle-ia` |
| Enfants | `cours-boxe-enfants-blagnac-garde-ring-angle-ia` |
| Femmes | `boxe-femme-blagnac-duo-technique-angle-ia` |
| MMA | `club-mma-blagnac-boxing-center-corde-angle-ia` |

Les sept vues principales sont distinctes des photographies d’origine conservées dans les cartes de l’accueil. Les originaux, leurs filigranes et leurs crédits sont intacts. Les pages pratiques sans photographie visible ne nécessitaient pas de nouvelle génération.

Les masters générés mesurent 2048 × 1360 px. Les 21 variantes WebP commises représentent **1 625 848 octets** au total (environ 1,55 Mio) ; les fichiers de 960 px font entre 50 834 et 89 830 octets. Les masters PNG restent dans `.research/generated-images/`, ignoré par Git. Un clone dispose des variantes WebP nécessaires au build et à la livraison.

`src/data/photos.mjs` centralise ALT, légendes, référence, crédit, modèle, fournisseur et provenance. `Picture.astro` affiche « Illustration IA » et le crédit de la photographie de référence. Ces scènes sont des illustrations dérivées, pas des preuves d’une séance réellement photographiée. Le décor provient de chaque référence ; aucune nouvelle salle à Blagnac n’est présentée. Seule la référence du ring identifie les Minimes ; les autres légendes parlent du réseau ou du tournoi.

Les sept vignettes sociales correspondantes sont actualisées avec cette même provenance ; `og:image:alt`, `twitter:image:alt`, le sitemap d’images, `humans.txt` et les fichiers LLM suivent les nouveaux visuels. Les informations commerciales, les destinations, le tutoiement et le formulaire du travail précédent sont conservés. La mise à jour GitHub `e8b9a76` / `72f65ac`, reçue avant le push, choisit Minimes comme palette par défaut : elle est intégrée et les vignettes sont régénérées en marine/or, sans nouvelle génération payante. Le bouton Blagnac reste disponible.

La révélation photo de l’accueil rognait toute la figure et masquait sa légende, située sous sa hauteur fixe. `global.css` applique désormais le rognage animé à l’image seule, avec la rotation sur la figure : la légende et son crédit restent visibles.

## Vérifications

- `npm ci --no-fund`, préparation des variantes, puis `npm run build` réussi, y compris le test de rendu des polices, 14 vignettes et l’audit des 12 pages indexables / 15 expressions du brief.
- Audit complété : ALT et légendes IA, crédits des références, sept vues principales uniques, dimensions des variantes et provenance des métadonnées sociales.
- Originaux et sept résultats inspectés individuellement ; sept vignettes relues sur une planche de contrôle.
- Douze pages parcourues à 1440, 768 et 390 px : accueil, club, cinq disciplines, plannings, tarifs, contact, mentions légales, 404. Images chargées, aucune erreur/alerte console, aucun débordement horizontal. Recadrage mobile et légende contrôlés visuellement.
- Captures locales ignorées par Git : `docs/qa/image-refresh-desktop.png`, `image-refresh-mobile.png`, `image-refresh-social.png`.
- `git diff --check` réussi. Auteur et commetteur : Eddy-etame, sans trailer d’assistant.

Ces contrôles concernent la sortie locale `.vercel/output/static`, servie sur le port 4323. Ils ne constituent pas une confirmation du déploiement Vercel ni de l’indexation du domaine. Aucun formulaire réel n’a été envoyé.

## Point de dépendances constaté

L’installation actuelle signale trois entrées de sévérité élevée liées à la chaîne `@astrojs/vercel` → `@vercel/routing-utils` → `path-to-regexp` (GHSA-9wv6-86v2-598j). Elles existaient dans les dépendances de la passe précédente. Aucun changement de dépendance dans cette passe images ; ne pas appliquer aveuglément la rétrogradation majeure proposée par `npm audit fix --force`. La correction doit préserver l’adaptateur Astro/Vercel et faire l’objet d’une vérification séparée. Les anciens résultats « zéro vulnérabilité » de `PROJECT-STATE.md` sont historiques.

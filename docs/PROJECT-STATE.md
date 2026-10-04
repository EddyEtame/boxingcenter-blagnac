# Reprise — boxingcenter-blagnac

État vérifié le 4 octobre 2026. Dossier de travail : `C:/Users/Mommy Jayce/Desktop/Boxing Center/Deployment/boxingcenter-blagnac`.

## Résultat disponible

**Dernière passe : UI/UX et éditoriale du 4 octobre 2026**, décrite dans `UI-REVIEW.md`. Navigation sticky, menu avec flou et gestion clavier, logo officiel, accès au club hors du menu mobile, bouton flottant sur chaque page, liens dans de nouveaux onglets, pages pratiques raccourcies. Le SEO / GEO / AEO complet et les règles Claude Code sont réservés à une passe séparée, selon la dernière instruction d’Eddy.

Site Astro statique comprenant les dix pages du brief, une page de confidentialité et une 404. Interface originale papier/encre/menthe, Barlow Condensed/Manrope, photographies du réseau et archive Fight Event 4. La fiche de départ combine discipline, disponibilité personnelle, conseil de préparation et résumé de conversation à copier. Aucune réservation n’est simulée et aucune donnée n’est transmise.

La salle de destination est **Toulouse Minimes, 12 rue de Fenouillet, 31200 Toulouse**. Blagnac est l’origine du visiteur. Le MMA conserve une page, une entrée parmi les pratiques et un parcours de contact conformément au brief ; le lieu du cours se vérifie avec le réseau via les Minimes. Les autres destinations commerciales sont les pages réelles de `boxe-toulouse.com`.

## Vérifications effectuées

- Dernier build : 12 pages générées, audit réussi. Onze pages indexables ; 404 en `noindex`.
- Titres/descriptions/H1/canonicals uniques, vignettes sociales distinctes, sitemap et robots, FAQ structurées, liens internes et images valides.
- Dix pages parcourues dans le navigateur à 320, 768 et 1440 px. Le débordement trouvé à 768 px a été corrigé et les dix pages revérifiées à cette largeur. Images chargées et H1 uniques.
- Menu mobile : ouverture, navigation jusqu’au contact et arrivée réelle sur `boxe-toulouse.com/contact/`.
- Fiche : choix Boxing Lady, jeudi et soirée reflétés dans le résumé ; MMA modifie le lieu et le CTA vers le contact. Le bouton de copie affiche une réussite ; l’outil de lecture du presse-papiers n’a pas confirmé le contenu collé. Un repli manuel est prévu en cas d’échec de l’API du navigateur.
- FAQ : ouverture native confirmée, réponse visible et destination Toulouse Minimes explicite. Console du site consultée pendant les parcours : aucune erreur ou alerte relevée.
- Variante de contrôle sans scripts : page MMA rendue, formulaire interactif masqué, fiche initiale MMA et lien de contact corrects, aucun débordement ou message console. Cette fixture enlève les scripts et active le contenu `noscript` ; elle est indépendante du site livré.
- Contraste calculé sur 156 éléments textuels de l’accueil. Le mot décoratif en marge identifié comme peu contrasté a été corrigé. Les numéros sur photographie sont évalués visuellement avec leur ombre ; ce contrôle n’est pas une certification WCAG exhaustive.
- Réduction des animations prévue via `prefers-reduced-motion`, avec garde JavaScript et CSS. Code inspecté ; aucune émulation native de cette préférence n’a été effectuée avec l’outil navigateur disponible.
- `npm audit --omit=dev --audit-level=high` : zéro vulnérabilité.
- JavaScript client de production : 6 520 octets avant compression. CSS principal : environ 40 Ko. 27 variantes WebP : environ 1,75 Mio pour toute la photothèque, sans agrandissement artificiel. Les douze PNG de partage sont hors du chargement courant des pages.
- Contrôle visuel bureau/mobile : accueil, choix de pratique, fiche, accès, événement, page enfants et contact. Photographies et légendes vérifiées, watermark de l’archive conservé.

Les chiffres ci-dessus décrivent la version locale ; ils ne sont ni un Lighthouse de production ni des données de terrain en 4G.

## Git et publication

Dépôt cible : `https://github.com/EddyEtame/boxingcenter-blagnac.git`, branche `main`. Initialisation et push sont autorisés par la demande de l’utilisateur. L’auteur et le commetteur configurés sont `Eddy-etame <eddy.etame@enkoschools.com>`, sans attribution d’assistant ni trailer. Vérifier la tête réellement poussée avec `git log -1` et `git ls-remote origin refs/heads/main` ; le hash n’est pas recopié dans ce document pour éviter un état périmé.

Les archives ZIP, recherches, captures QA, dépendances et fichiers `.env` sont exclus de Git. Les variantes photographiques optimisées sont incluses, afin qu’un clone soit autonome.

## Ce qui reste pour la production

1. Associer le dépôt à l’hébergement et confirmer le déploiement réel. Le projet fournit `vercel.json`, mais aucun projet distant n’est lié dans ce dossier.
2. Connecter `boxingcenter-blagnac.fr` à cet hébergement. Le DNS A observé est `213.186.33.5` ; la requête HTTPS a échoué pendant cette session. Il n’existe donc pas de preuve de publication de cette version sur le domaine.
3. Vérifier le domaine dans le compte Google Search Console du propriétaire, soumettre `https://boxingcenter-blagnac.fr/sitemap.xml`, puis vérifier l’exploration réelle. Aucun accès Google ou jeton de vérification n’a été fourni ici.
4. Avant ouverture publique, compléter les informations légales de l’éditeur et de l’hébergeur à partir de l’identité confirmée par le propriétaire. Aucun responsable légal, numéro d’entreprise ou hébergeur n’a été inventé.
5. Sur le domaine : contrôler réponses HTTP, HTTPS, canonical, 404, robots, sitemap, liens sortants et performance mobile mesurée. L’indexabilité technique ne garantit aucune position Google.

## Commandes de reprise

```sh
npm ci
npm run dev
npm run build
npm run preview
git status --short
git log -1 --format=fuller
git ls-remote origin refs/heads/main
```

Le serveur local de prévisualisation utilise `http://127.0.0.1:4321/`. La recherche et l’essai sans scripts se trouvent dans `.research/` ; ils ne participent pas au build et ne sont pas nécessaires au site.

Pour reprendre le contenu : `src/data/site.mjs`, `src/data/pages.mjs`, `docs/FACTS.md`. Pour la composition : `src/pages/index.astro`, `src/styles/global.css`, `src/components/SessionCard.astro`. Direction et passe critique : `docs/DESIGN.md`.

## Crédit et rythme

Après la demande d’économie, aucun nouvel agent ni nouvelle recherche n’a été lancé. Les trois recherches déjà déléguées ont été arrêtées ou terminées, puis le travail et les contrôles ont été poursuivis directement. Pour la suite : une modification ciblée, un contrôle adapté, puis revue ; éviter de répéter des audits réussis sans changement qui le justifie.

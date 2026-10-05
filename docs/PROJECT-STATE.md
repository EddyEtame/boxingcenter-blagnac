# Reprise — boxingcenter-blagnac

> Lire d’abord `docs/HANDOFF.md` : directives d’Eddy en vigueur, journal des chantiers, reste à faire. Ce fichier conserve l’historique des passes.

## Correction du 5 octobre 2026 — aucune étiquette ni attribution sur les images

Eddy demande explicitement le retrait de toutes les légendes et attributions d’images. Les pages, ALT, noms des variantes, vignettes et fichiers de découverte ne publient plus de référence de génération ou de photographe. Sept signatures incrustées retirées avec une seule passe chacune : 7 crédits, solde Higgsfield 218,75. Photos retouchées renommées et URL OG versionnées pour éviter les versions signées/étiquetées en cache. L’attribution d’Eddy comme développeur est conservée. Ce résultat remplace les choix de légendes décrits dans la passe précédente. Détails et paramètres : `docs/HANDOFF.md`, `docs/image-generation.json`.

Build et audit réussis ; 36 contrôles de pages/largeurs (1440/768/390 px) sans légende, crédit d’image, erreur console ou débordement. ALT descriptifs, images chargées et nouvelles URL OG confirmées ; visuels retouchés et vignettes relus.

## Passe du 5 octobre 2026 — renouvellement des images

Sept vues GPT Image 2.5 via Higgsfield, issues des mêmes personnes/décors de référence avec de nouveaux angles, gestes et tenues ; 7 crédits utilisés sur 232,75, solde 225,75. Sept photos principales distinctes des cartes de l’accueil, 21 variantes WebP (1,55 Mio), ALT précis, légendes IA et crédits des références, sept vignettes sociales actualisées, sitemap et fichiers de découverte synchronisés. Les améliorations d’Eddy du 4 octobre sont conservées, ainsi que le choix de Minimes comme palette par défaut reçu sur GitHub (`e8b9a76` / `72f65ac`) avant le push. Les OG utilisent marine/or. Le clip animé de l’accueil a été corrigé pour laisser la légende visible.

Validation : installation propre, préparation d’images et build réussi ; audit de 12 pages indexables / 15 requêtes plus contrôles des illustrations ; douze pages à 1440/768/390 px, console vide, aucun débordement, images chargées et recadrages relus. Prompts et coût : `docs/image-generation.json`. Compte rendu et point sur les trois alertes élevées héritées des dépendances Vercel : `docs/IMAGE-REFRESH.md`. Les contrôles locaux ne confirment pas le nouveau déploiement distant ; formulaire Inlet et domaine restent à vérifier séparément.

## Passe du 4 octobre 2026 (soir, suite) — tutoiement, formulaire, toggle, motion

Détail complet dans `docs/HANDOFF.md`, journal du 4 octobre (deuxième passe). Résumé : tutoiement généralisé ; navigation d’en-tête vers les pages du site ; séance d’essai à 10 € (seul montant publié) ; formulaire de contact relayé via Inlet avec adaptateur Vercel (`INLET_FORM_ID` à définir) ; fiche de départ envoyée au formulaire ; décoration générique et fondus retirés ; trajet Blagnac → Minimes tracé et sceau du ticket ; variante de couleurs « Minimes » à l’essai, bascule dans le pied de page.

## Passe du 4 octobre 2026 (soir) — revue Baffled Bar et corrections

Revue complète du site déployé (`boxingcenter-blagnac-kappa.vercel.app`, identique au build local) contre le cahier des charges et contre le niveau des autres sites du réseau construits par Eddy (boxe-toulouse.com, satellite Colomiers). Corrections appliquées dans cette passe :

- **Mots-clés du brief (§3, §17)** : les quinze requêtes n'apparaissaient nulle part telles quelles, et les cinq balises Title/meta recommandées avaient toutes été réécrites. Désormais : titres et descriptions de §17 repris mot pour mot, chaque requête rattachée à une page (`src/data/search-intents.mjs`) et présente dans le texte visible et dans le titre, contrôle au build. Le H1 de l'accueil est celui du brief (§6). Aucune formulation ne présente une salle à Blagnac : le club est nommé et situé à Toulouse Minimes dans le même H1, la même intro, la même FAQ.
- **Contenus demandés et absents** : coordination, maîtrise de soi, confiance en soi, cadre sécurisé (enfants) ; remise en forme, cardio, dépassement de soi, boxe féminine (femmes) ; sans combat, ambiance dynamique (fitness) ; travail debout / au sol, grappling, JJB, préparation physique (MMA) ; coachs diplômés sur l'accueil ; l'intro §6 et la formulation §7 du brief, reprises.
- **MMA** : le club des Minimes n'enseigne pas le MMA (page Activités). La page MMA, la fiche de départ et l'accueil orientent désormais vers la salle du réseau qui l'enseigne, Boxing Center Toulouse États-Unis (`MMA_CLUB` dans `src/data/site.mjs`, source clubmma.fr), avec le contact des Minimes en second lien. Conforme à §9 (« pages Boxing Center adaptées selon l'organisation réelle »).
- **Liens** : les liens vers l'extérieur ouvrent un nouvel onglet (décision d'Eddy, conservée) ; les liens internes restaient eux aussi en nouvel onglet (logo, cartes, fil d'Ariane, pied de page : 23/23 sur l'accueil). `Link.astro` ne cible plus que les URL http(s) ; l'audit vérifie les deux sens.
- **Favicon** : l'icône abstraite (barres sur fond menthe) est remplacée par une pastille dérivée de la marque : fond encre, anneau des cordes du ring, « B » dessiné depuis Barlow Condensed. `favicon.svg`, `favicon.ico` (16/32/48), PNG 32/96/192/512, `apple-touch-icon`, `site.webmanifest`, générés au build (`scripts/favicons.mjs`). `theme-color` aligné sur l'encre.
- **Images** : fichiers renommés selon §18 (`club-boxe-blagnac-boxing-center`, `boxe-anglaise-blagnac`, `salle-boxe-proche-blagnac`, `boxe-fitness-blagnac`, `cours-boxe-enfants-blagnac`, `boxe-femme-blagnac`, `club-mma-blagnac-boxing-center`, `cours-boxe-collectif-blagnac`) et ALT portant la formulation locale sans situer la salle à Blagnac.
- **Lisibilité mobile** : 31 textes sous 10 px sur l'accueil (6 px pour l'adresse du tampon, 7 px pour « Depuis Blagnac »). Plancher relevé à 10 px (9 px pour trois micro-labels), bureau inclus.
- **Mentions légales** : page absente, obligatoire (LCEN). Ajoutée depuis `EDITEUR` (`src/data/site.mjs`), données du registre déjà utilisées par les autres sites du réseau.
- **Aperçus Vercel** : `noindex, nofollow` et `robots.txt` bloquant sur tout déploiement non production (`src/lib/environment.mjs`). `X-Robots-Tag: noindex` sur `llms.txt`, `llms-full.txt`, `humans.txt`. Cache immuable d'un an sur images, vignettes et assets.
- **Repères sur l'accueil** : quatre faits publiés par le club (coachs diplômés d'État FFBoxe ; publics ; métro B Barrière de Paris à 3 min ; cinq clubs, un abonnement). Aucun prix, aucune durée de trajet, aucune distance.
- **Micro-copie** : « Préparer mon essai » → « Réserver mon essai » (brief §4) ; `aria-current` retiré des liens externes de la navigation ; accroche de pied de page remplacée.

Restent ouverts, à trancher par Eddy : la phrase négative demandée par le brief §7 face à la règle « on vend la proximité, jamais l'absence » ; tutoiement ou vouvoiement ; palette menthe/papier contre palette dérivée de la marque ; navigation d'en-tête vers le site du club ou vers les pages de ce site ; chevauchement du rectangle flottant ; attribution développeur dans les pages ; formulaire de contact relayé ; prix ou non sur la page Tarifs.

État vérifié le 4 octobre 2026. Dossier de travail : `C:/Users/Mommy Jayce/Desktop/Boxing Center/Deployment/boxingcenter-blagnac`.

## Résultat disponible

**Dernière passe : correction du build Vercel du 4 octobre 2026.** Le premier déploiement de `934c982` s’arrêtait sur la mesure du titre de la vignette d’accueil. L’erreur a été reproduite sous Linux avec Node 22.19.0 : le problème dépendait du rendu natif des polices, pas seulement de Node 24. Le générateur dessine désormais tous les textes depuis les contours Barlow Condensed inclus, contrôle les glyphes, coordonnées et limites, puis produit les douze PNG. Un test du raster vérifie que le titre complet apparaît. La version majeure Node est fixée à `22.x`.

La passe SEO, GEO et AEO locale du 4 octobre 2026 est décrite dans `SEO-REVIEW.md` : attribution d’Eddy Etame Etame centralisée, `humans.txt`, `llms.txt`, `llms-full.txt`, réponses sourcées avec ancres, entité officielle Minimes, sitemap d’images et dates Git, douze vignettes personnalisées, IndexNow préparé. Eddy a lancé le déploiement Vercel ; le domaine et Search Console restent à raccorder et à vérifier. Aucune indexation distante n’a été demandée. Les règles Claude Code restent une passe ultérieure.

La passe précédente UI/UX et éditoriale est décrite dans `UI-REVIEW.md` : navigation sticky, menu avec flou et gestion clavier, logo officiel, accès au club hors du menu mobile, bouton flottant, nouveaux onglets et pages pratiques courtes.

Site Astro statique comprenant les dix pages du brief, une page de confidentialité et une 404. Interface originale papier/encre/menthe, Barlow Condensed/Manrope, photographies du réseau et archive Fight Event 4. La fiche de départ combine discipline, disponibilité personnelle, conseil de préparation et résumé de conversation à copier. Aucune réservation n’est simulée et aucune donnée n’est transmise.

La salle de destination est **Toulouse Minimes, 12 rue de Fenouillet, 31200 Toulouse**. Blagnac est l’origine du visiteur. Le MMA conserve une page, une entrée parmi les pratiques et un parcours de contact conformément au brief ; le lieu du cours se vérifie avec le réseau via les Minimes. Les autres destinations commerciales sont les pages réelles de `boxe-toulouse.com`.

## Vérifications effectuées

- Correctif Vercel : `npm run build` réussi sous Windows (Node 22.17.1) et Ubuntu/Linux après `npm ci` (Node 22.19.0), avec une configuration Fontconfig sans polices système. Test du raster réussi, douze vignettes relues visuellement, audit final réussi. Installation Linux : zéro vulnérabilité signalée. Ce contrôle local ne constitue pas une confirmation du nouveau déploiement distant.
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
- JavaScript client de production après la passe SEO : 6 595 octets avant compression. CSS principal : 40 773 octets. 27 variantes WebP : environ 1,75 Mio pour toute la photothèque, sans agrandissement artificiel. Les douze PNG de partage sont hors du chargement courant des pages.
- Contrôle visuel bureau/mobile : accueil, choix de pratique, fiche, accès, événement, page enfants et contact. Photographies et légendes vérifiées, watermark de l’archive conservé.

Les chiffres ci-dessus décrivent la version locale ; ils ne sont ni un Lighthouse de production ni des données de terrain en 4G.

## Git et publication

Dépôt cible : `https://github.com/EddyEtame/boxingcenter-blagnac.git`, branche `main`. Initialisation et push sont autorisés par la demande de l’utilisateur. L’auteur et le commetteur configurés sont `Eddy-etame <eddy.etame@enkoschools.com>`, sans attribution d’assistant ni trailer. Vérifier la tête réellement poussée avec `git log -1` et `git ls-remote origin refs/heads/main` ; le hash n’est pas recopié dans ce document pour éviter un état périmé.

Les archives ZIP, recherches, captures QA, dépendances et fichiers `.env` sont exclus de Git. Les variantes photographiques optimisées sont incluses, afin qu’un clone soit autonome.

## Ce qui reste pour la production

1. Confirmer que le nouveau déploiement Vercel réussit après le correctif. Le dépôt est utilisé par Vercel selon le journal fourni par Eddy ; aucun projet distant n’est lié dans ce dossier local.
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

Pour reprendre le contenu : `src/data/site.mjs`, `src/data/pages.mjs`, `docs/FACTS.md`. Attribution et vignettes : `src/data/seo.mjs`. Fichiers IA : `src/lib/discovery.mjs`. Publication et indexation : `docs/SEO-REVIEW.md`, `scripts/submit-indexnow.mjs`. Pour la composition : `src/pages/index.astro`, `src/styles/global.css`, `src/components/SessionCard.astro`. Direction et passe critique : `docs/DESIGN.md`.

## Crédit et rythme

La passe UI a été poursuivie directement après la demande d’économie. La passe SEO a utilisé un seul agent léger (GPT-6 Luna) pour une courte revue du contenu, puis des lectures ciblées des projets voisins et de la documentation officielle. Aucune génération d’image payante ni dépendance ajoutée. Pour la suite : une modification ciblée, un contrôle adapté, puis revue ; éviter de répéter des audits réussis sans changement qui le justifie.

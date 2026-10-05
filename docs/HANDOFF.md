# HANDOFF — boxingcenter-blagnac

Document de reprise. Un agent qui prend la suite lit ce fichier en entier avant de toucher au code, puis `docs/PROJECT-STATE.md`, puis `docs/FACTS.md`. Les décisions ci-dessous sont celles d'Eddy ; aucune ne se rediscute sans lui.

Dernière mise à jour : 5 octobre 2026 (passe images Codex, branche `main`).

## 1. Ce qu'est ce site

Site satellite SEO pour les habitants de Blagnac, qui les envoie vers le club réel **Boxing Center Toulouse Minimes** (boxe-toulouse.com, 12 rue de Fenouillet, 31200 Toulouse). Aucune salle n'existe à Blagnac et le site ne doit jamais le laisser croire. Le cahier des charges complet est dans `.research/brief.md` (dossier gitignoré ; si absent, le demander à Eddy : c'est le message « Cahier des charges simplifié — Site vitrine Boxing Center Blagnac »).

Ce projet est **totalement distinct** du dépôt `Eddy-etame/club-de-boxe-blagnac`. Ne jamais les comparer, ne rien y copier, ne pas les traiter comme un même projet.

Le niveau attendu est celui des autres sites d'Eddy : boxe-toulouse.com (Minimes), clubmma.fr (États-Unis), le satellite Colomiers (`Eddy-etame/boxing-center-colomiers`, dont `BLUEPRINT-FAMILLE.md` contient les lois de la famille de satellites). Le standard s'appelle « Baffled Bar » en interne : ne jamais l'écrire sur une surface publique.

## 2. Directives d'Eddy en vigueur (registre, ne rien retirer)

1. Les liens vers les sites des clubs ouvrent un **nouvel onglet** (voulu). Les liens internes restent dans l'onglet.
2. Les **quinze requêtes du brief** doivent apparaître telles quelles sur leur page et dans son titre ; le build le vérifie (`src/data/search-intents.mjs`, `scripts/audit-build.mjs`). Prudence : jamais « situé à Blagnac », « notre salle à Blagnac », aucune adresse à Blagnac, aucune fiche Google Business à Blagnac.
3. **Palette** : depuis le 5 octobre 2026, la palette **Minimes est celle par défaut** (encre marine `#0a1020`, or `#f5a623`, papier `#f4f1ea`, texte d'accent `#a66500`), décision d'Eddy. La palette Blagnac (papier, encre verte, menthe) reste disponible par le bouton « Couleurs » du pied de page (`data-theme="blagnac"`, mémorisé dans `localStorage` sous `bc-theme`). Icônes et vignettes sont générées dans la palette Minimes.
4. **Tutoiement** sur tout le site (sauf mentions légales). Respectueux, concret, jamais ado.
5. **Navigation d'en-tête vers les pages de ce site** ; seul le CTA « Réserver mon essai » est externe.
6. **Phrase « le club n'est pas dans Blagnac même »** : gardée, une fois, sur la page club (brief §7), nulle part ailleurs.
7. **Attribution développeur** (Eddy Etame Etame) : conservée dans `meta author`, le graphe JSON-LD, `humans.txt`, `llms.txt`. Demandée par Eddy.
8. **Prix** : un seul chiffre autorisé, « séance d'essai à 10 € », sourcé et daté, avec lien vers la page Tarifs des Minimes. Aucun autre prix, aucune durée de trajet, aucune distance.
9. **Formulaire de contact** relayé vers le club via Inlet (le SaaS de formulaires d'Eddy), même mécanisme que Colomiers.
10. **MMA** : les Minimes n'enseignent pas le MMA. Tant qu'Eddy n'a pas tranché avec son responsable, la page MMA, la fiche et l'accueil orientent vers Boxing Center Toulouse États-Unis (clubmma.fr), contact des Minimes en second lien.
11. **Liens entrants** depuis les sites Minimes et États-Unis vers boxingcenter-blagnac.fr : à préparer sur une branche de chaque dépôt, à fusionner quand le domaine est en ligne.
12. **Décoration générique** : tout élément décoratif visible sans fonction (flèche vers rien, « BC / 01 », astérisques, doodle) est retiré ; la révélation en fondu de chaque titre est retirée ; un mouvement doit porter une information.
13. Mécanismes demandés par Eddy à l'agent précédent, à conserver : en-tête sticky, flou derrière le menu mobile, rectangle flottant « Le club des Minimes » (qui s'efface quand la fiche ou les coordonnées sont à l'écran), pages Plannings/Tarifs courtes, logo officiel non redessiné.
14. **Pas de workflows, pas de sous-agents** : Eddy l'a dit explicitement. Tout à la main.
15. Documenter chaque changement ici et dans `docs/PROJECT-STATE.md`, sans raisonnement, avec des faits et des chemins de fichiers.
16. **Images (5 octobre)** : générer de nouvelles vues avec GPT Image via Higgsfield, à partir des mêmes personnes et lieux, avec d’autres angles et tenues ; vérifier le solde et économiser les crédits ; noms descriptifs et ALT ; pousser une fois terminé. Le choix initial de légender et créditer les images est remplacé par la directive 17.
17. **Aucune étiquette ni attribution sur les images (5 octobre, correction d’Eddy)** : supprimer les légendes, crédits des photographes, signatures incrustées, références aux outils et à la génération dans les ALT, noms des fichiers livrés, vignettes OG et fichiers de découverte. Les ALT restent descriptifs. Ne pas réintroduire ces mentions au build. L’attribution d’Eddy comme développeur du site (§7) reste distincte des images.

## 3. Où sont les choses

| Besoin | Fichier |
|---|---|
| Faits du club, du club MMA, de l'éditeur, repères de l'accueil | `src/data/site.mjs` (`CLUB`, `MMA_CLUB`, `EDITEUR`, `proof`, `disciplines`, `home`) |
| Contenu des neuf pages (titres, metas, H1, intro, sections, faits, FAQ, CTA, sources) | `src/data/pages.mjs` |
| Requêtes du brief par page | `src/data/search-intents.mjs` |
| Vignettes OG, attribution, pages légales, noms des sources | `src/data/seo.mjs` |
| Photos (noms de fichiers, ALT, crédits, provenance) | `src/data/photos.mjs` ; fichiers dans `public/images/` |
| Gabarit, head, JSON-LD, en-tête, pied de page | `src/layouts/Base.astro` |
| Accueil | `src/pages/index.astro` ; pages du brief : `src/pages/[slug].astro` ; légales : `confidentialite.astro`, `mentions-legales.astro` |
| Fiche de départ | `src/components/SessionCard.astro` + `src/scripts/site.ts` |
| Rectangle flottant | `src/components/ClubPrompt.astro` + `src/scripts/site.ts` |
| Styles | `src/styles/global.css` (couches `reset, base, layout, components, responsive`) |
| Fichiers machine | `src/lib/discovery.mjs` (llms, humans), `src/pages/robots.txt.ts`, `sitemap.xml.ts` |
| Aperçus Vercel non indexables | `src/lib/environment.mjs` |
| Vignettes + icônes générées au build | `scripts/generate-social.mjs`, `scripts/favicons.mjs`, `scripts/social-fonts.mjs` |
| Audit du build (échoue le build) | `scripts/audit-build.mjs` |
| IndexNow | `scripts/submit-indexnow.mjs`, clé `public/indexnow-key.txt` |

## 4. Comment vérifier (à faire avant chaque push)

```sh
npm ci
npm run build        # test des polices, vignettes, favicons, pages, audit — doit finir par « Audit passed »
npm run preview      # http://127.0.0.1:4321/
```

Puis ouvrir réellement : accueil, une page discipline, /mma-blagnac/, /plannings/, /contact/, /mentions-legales/, une 404, à 1440, 768 et 390 px. Console vide. Aucun débordement horizontal. Fiche de départ : changer la pratique met à jour le ticket ; MMA bascule la destination vers États-Unis. Menu mobile : ouverture, Échap, fermeture. Le rectangle flottant disparaît quand la fiche est à l'écran.

Contrôle des phrases du brief (hors audit) : `grep -il "situé à blagnac\|notre salle" dist/*/index.html dist/index.html` doit ne rien retourner.

## 5. État des chantiers et ce qui attend Eddy

Fait et vérifié (journal §6) : mots-clés du brief, liens, favicon, MMA → États-Unis, mentions légales, aperçus noindex, lisibilité, tutoiement, navigation interne, essai 10 €, formulaire relayé, fiche → formulaire, décoration retirée, mouvements informatifs, variante de couleurs, liens entrants préparés.

Attend une action d'Eddy :
1. Créer le formulaire dans Inlet, définir `INLET_FORM_ID` dans Vercel, tester un envoi réel.
2. Les changements de la session du 4 octobre sont déjà présents dans `main` (tête observée avant cette passe : `8c35804`). Vérifier le déploiement Vercel de `main` après le push des images.
3. Raccorder le domaine boxingcenter-blagnac.fr (DNS A observé : 213.186.33.5, parking OVH), puis ajouter la redirection `*.vercel.app` → domaine dans `vercel.json`, vérifier Search Console (propriété Domaine, TXT DNS), soumettre le sitemap, lancer `npm run indexnow -- --submit`.
4. Fusionner les branches `claude/lien-blagnac` des dépôts Minimes et États-Unis une fois le domaine en ligne.
5. Palette : Minimes par défaut (fait le 5 octobre). Dire s'il faut retirer le bouton « Couleurs » du pied de page ou le garder.
6. Décision MMA avec son responsable (Minimes n'enseigne pas le MMA ; le site oriente vers États-Unis).

## 6. Journal des chantiers (du plus récent au plus ancien)

### 5 octobre 2026 — retrait des étiquettes et attributions des images

- `Picture.astro` : suppression de toutes les légendes et du marqueur de génération ; `index.astro` : retrait du crédit de galerie ; styles correspondants supprimés. `photos.mjs` réduit aux données de rendu et ALT décrivant les scènes, sans nom de photographe ni référence d’outil.
- Sept signatures incrustées retirées par une passe ciblée GPT Image via Higgsfield, sans nouvelle scène demandée et sans régénération : 7 crédits, solde 225,75 → 218,75. Sorties relues ; sources et paramètres consignés dans `docs/image-generation.json`. Masters locaux ignorés dans `.research/unlabelled/`.
- Variantes WebP renommées avec des noms descriptifs sans suffixe de génération ; nouveaux noms pour les sept photos retouchées afin d’éviter le cache des versions signées. `generate-social.mjs` ne dessine plus de ligne de crédit ; les 14 OG sont régénérés, URL versionnées dans `seo.mjs` pour éviter les aperçus mis en cache.
- `discovery.mjs`, `mentions-legales.astro` et libellé du lien LLM : retrait des crédits d’images et mentions d’outils. Informations du club et attribution du développeur conservées.
- Audit adapté : aucune légende/crédit dans le HTML ou les fichiers textuels livrés ; ALT neutres, correspondance exacte fichier/ALT, 48 variantes aux dimensions attendues et sans EXIF/XMP/IPTC, sept images principales distinctes.
- Validation : build et audit verts ; douze pages à 1440/768/390 px, zéro légende ou crédit d’image, images chargées, métadonnées OG versionnées, console vide et aucun débordement. Sorties retouchées et OG relus visuellement. L’erreur locale transitoire d’écriture de `404.png` n’est plus présente sur le build réussi.

### 5 octobre 2026 — palette Minimes par défaut

- `src/styles/global.css` : le bloc `:root` porte désormais les valeurs Minimes ; l'ancien défaut devient `:root[data-theme="blagnac"]`. Les trois couleurs restées en dur (bordure des repères, voile du menu, ombre du tampon) sont passées en jetons.
- `src/layouts/Base.astro` : `theme-color` `#0a1020` ; le script inline du `<head>` applique Blagnac seulement si `localStorage.bc-theme === 'blagnac'` ; bouton « Minimes » en premier et actif.
- `src/scripts/site.ts` : logique de bascule inversée (défaut Minimes).
- `scripts/favicons.mjs` et `scripts/generate-social.mjs` : couleurs Minimes ; icônes et quatorze vignettes régénérées.
- Voix : vignettes, titre de la page Confidentialité et page 404 passés au tutoiement (restes de l'ancienne voix).
- Vérifié : build vert ; Playwright confirme `--ink #0a1020`, `--mint #f5a623`, `theme-color #0a1020` par défaut sur bureau et mobile, bascule vers Blagnac conservée sur la page suivante puis retour à Minimes, console vide ; rendu de l'accueil, de l'icône et de la vignette d'accueil contrôlé.

### 5 octobre 2026 — sept vues nouvelles, crédits contrôlés

- **Génération** : GPT Image 2.5 via Higgsfield, sept résultats 2K issus des photos du dépôt à `8c35804`, mêmes personnes et décors pris pour références, autres angles/gestes/tenues. Une image pilote puis six sorties ; aucune régénération. Solde 232,75 → 225,75 : **7 crédits**. Prompts et identifiants dans `docs/image-generation.json`.
- **Livraison** : 21 WebP 480/960/1600 dans `public/images/`, sept vues principales distinctes pour accueil/club/disciplines, sept OG actualisés. Originaux préservés. ALT, légendes « Illustration IA », références et crédits dans `src/data/photos.mjs` / `Picture.astro` ; sitemap, ALT sociaux, `humans.txt` et LLM synchronisés. Détail : `docs/IMAGE-REFRESH.md`.
- **Légende de l’accueil** : le clip animé de la figure cachait la légende ; clip appliqué à l’image seule, rotation conservée (`global.css`).
- **Validation locale** : `npm ci`, variantes, build vert et audit étendu (12 pages indexables, 15 requêtes, vues distinctes/provenance/dimensions). Douze pages à 1440/768/390 px ; console vide, images chargées, aucun débordement. Résultats et OG relus visuellement ; `git diff --check` réussi. Aucun test d’envoi Inlet ni confirmation du déploiement distant.
- **Dépendances** : trois entrées élevées dans la chaîne Vercel/routing-utils/path-to-regexp constatées pendant l’installation, héritées de l’adaptateur précédent. Aucun changement de packages ; correction séparée à prévoir (détail dans `IMAGE-REFRESH.md`).
- **Git** : push sur `main` autorisé explicitement par Eddy pour cette passe ; attribution Eddy-etame, aucun trailer d’assistant.
- **Mise à jour distante intégrée** : `e8b9a76` / `72f65ac` reçu avant le push ; palette Minimes par défaut et tutoiement des vignettes conservés, sept OG régénérés en marine/or, sans coût Higgsfield supplémentaire.

### 4 octobre 2026, soir — liens entrants depuis les sites Minimes et États-Unis

**Ce qui a changé (hors de ce dépôt, sur des branches, rien n'est fusionné)**

- `Eddy-etame/bc-minimes`, branche `claude/lien-blagnac` (commit 7395db7) : `public/assets/js/data.js` reçoit `export const DEPARTS = [{ ville, label: "Tu pars de Blagnac ?", url: "https://boxingcenter-blagnac.fr/" }]` ; `public/assets/js/site.js` (pied de page monté au runtime) et `scripts/maillage.mjs` (pied de page écrit dans le HTML livré) ajoutent ces liens à la colonne « Le réseau ». Le satellite n'est pas une salle : il ne figure pas dans « Les autres salles du réseau ». Convention du dépôt respectée : version des assets `?v=b56` → `?v=b57` dans 23 fichiers pour que le nouveau `data.js` soit rechargé (un `site.js` neuf important `DEPARTS` depuis un `data.js` en cache casserait le module). Les fichiers sont en CRLF ; la modification les conserve.
- `mbosseu/boxing_center_etats_unis` (source du site clubmma.fr, vérifié par les vignettes `og/accueil.jpg` et le jeu d'icônes identiques au site en ligne), branche `claude/lien-blagnac` (commit c5d85f6) : un `<li>` « Tu pars de Blagnac ? » sous « Nos clubs » dans la liste « Accès rapide » des huit pages qui portent le pied de page.

**À faire par Eddy** : fusionner les deux branches dans `main` **quand le domaine boxingcenter-blagnac.fr répond** (sinon le lien mène à une page parking OVH). Après fusion des Minimes, vérifier que le pied de page affiche le lien sans JavaScript (`curl -s https://boxe-toulouse.com/ | grep -c boxingcenter-blagnac`).

### Aperçus Vercel : pourquoi ils ne doivent pas être indexés (question d'Eddy)

Vercel construit une URL `*.vercel.app` par branche et par commit (les « previews »), en plus du déploiement de production. Chaque aperçu sert le site entier, à l'identique. S'il est indexable, Google voit le même contenu sur plusieurs hôtes : il peut retenir une URL d'aperçu comme canonique, diviser l'autorité, et garder en index des versions périmées. Les balises canonical limitent le risque mais ne le suppriment pas. C'est pourquoi la famille de satellites (Colomiers) et ce site mettent `noindex, nofollow` et un `robots.txt` bloquant sur tout déploiement qui n'est pas la production (`VERCEL_ENV !== 'production'`). Le déploiement de production (`main`, aujourd'hui `boxingcenter-blagnac-kappa.vercel.app`) reste indexable ; une fois le domaine raccordé, ajouter une redirection 308 de `*.vercel.app` vers le domaine dans `vercel.json`, comme sur Colomiers.

### 4 octobre 2026, soir — deuxième passe : tutoiement, formulaire, toggle, motion, liens

**Ce qui a changé**

1. **Tutoiement** sur toutes les pages publiques (`src/data/site.mjs`, `src/data/pages.mjs`, `src/pages/index.astro`, `src/layouts/Base.astro`, `src/components/SessionCard.astro`, `ClubPrompt.astro`, `src/pages/confidentialite.astro`, `merci.astro`). Les mentions légales restent au vouvoiement. Les titres, metas et phrases du brief sont inchangés (ils ne contiennent pas de pronom).
2. **Navigation d'en-tête et menu mobile** vers les pages de ce site : Le club, Les pratiques (ancre `/#disciplines`), Plannings, Tarifs, Contact. Seul « Réserver mon essai · 10 € » est externe (page Première séance des Minimes). Tableau `nav` dans `Base.astro`.
3. **Séance d'essai à 10 €** : `CLUB.trialPrice` dans `site.mjs` (source : pages Tarifs et Première séance des Minimes, 4 octobre 2026). Affiché dans le CTA d'en-tête, le hero, les repères de l'accueil (avec lien « Voir les tarifs du club » vers `CLUB.prices`), les CTA des pages discipline (`trialCta` dans `pages.mjs`), la page Tarifs et ses FAQ. Aucun autre montant.
4. **Formulaire de contact** relayé vers le club : `src/components/ContactForm.astro` (rendu sur `/contact/#formulaire`), `src/pages/api/contact.ts` (fonction Vercel, `prerender = false`), `src/pages/merci.astro` (noindex). Mécanisme identique à Colomiers : POST natif → preuve de travail SHA-256 côté serveur → JSON vers Inlet → redirection 303. Pot de miel `_gotcha`, validation serveur (prénom, courriel, message), champ caché `fiche` (résumé de la fiche de départ). **À faire par Eddy : créer le formulaire dans Inlet et définir `INLET_FORM_ID` dans Vercel.** Sans la variable, l'API redirige vers `/contact/?erreur=config` et la page affiche le téléphone du club.
5. **Adaptateur Vercel** (`@astrojs/vercel`, `astro.config.mjs`) : les pages restent statiques, seule `/api/contact/` est une fonction. La sortie est dans `.vercel/output/static` ; `scripts/audit-build.mjs` et `scripts/submit-indexnow.mjs` lisent ce dossier (constante `OUT`). `vercel.json` ne déclare plus `outputDirectory`. `astro preview` n'est pas utilisable avec cet adaptateur : servir `.vercel/output/static` avec `python3 -m http.server 4321` pour contrôler le rendu (la fonction ne tourne qu'une fois déployée).
6. **Fiche de départ** : « Copier ma fiche » (presse-papiers sans destination) remplacé par « Envoyer ma fiche au club » : le résumé est posé dans `sessionStorage` (clé `bc-fiche`), la page Contact le lit, pré-remplit le message et la pratique, puis l'efface. Le sceau « BC » du ticket se pose (animation) quand le choix change. Le doodle « À vous de jouer » et l'astérisque sont retirés.
7. **Décoration visible retirée** : flèche « Le premier geste s'apprend ensemble », « BC / 01 », astérisques du hero et de la section d'ouverture, mot « ENSEMBLE » en marge de la photo du club, slogan « À votre rythme » du pied de page. La révélation en fondu de chaque titre (`.will-reveal`) est retirée du CSS et du script.
8. **Mouvements qui portent une information** : le trajet Blagnac → Minimes se trace (SVG `data-route-draw` dans le H2 de la section club, `IntersectionObserver`, une seule fois, immédiat en `prefers-reduced-motion` et sans JavaScript via `html:not(.js)`) ; le ticket se « tamponne » au changement de choix ; le hero garde sa révélation photo et l'arrivée du tampon ; les transitions de page natives (`@view-transition`) jouent maintenant que les liens internes restent dans l'onglet.
9. **Variante de couleurs à l'essai** : toutes les couleurs sont des jetons (`:root` dans `global.css`, plus `--accent-text`, `--accent-dot`, `--accent-focus`, `--accent-soft`, `--accent-glow`, `--on-dark-*`, `--tint`, `--ink-shadow`). `:root[data-theme="minimes"]` redéfinit tout (encre marine `#0a1020`, or `#f5a623`, or sombre `#a66500` pour le texte). Bascule dans le pied de page (`.theme-switch`, boutons `data-theme-choice`), mémorisée dans `localStorage` (`bc-theme`), appliquée avant le premier rendu par un script inline dans `<head>`. Les icônes et vignettes restent dans la palette Blagnac : si Eddy retient la variante, régénérer `scripts/favicons.mjs` et `generate-social.mjs` avec les nouvelles couleurs, puis retirer la bascule.
10. **Rectangle flottant** : s'efface aussi sur le formulaire de contact (`data-prompt-clear`).
11. `.env.example` documente `INLET_FORM_ID`.

**Vérification faite** : `npm run build` vert (audit : 12 pages indexables, 15 phrases du brief, vignettes, favicons). Pages servies depuis `.vercel/output/static` et ouvertes à 1440/768/390 px : console vide, aucun débordement. Sondes Playwright : tracé du trajet déclenché à l'arrivée, sceau posé au changement, « Envoyer ma fiche » pré-remplit le message et la pratique sur /contact/, `?erreur=config` affiche le message avec le téléphone, bascule de couleurs appliquée et conservée sur la page suivante, navigation d'en-tête interne.

**Reste à faire**

- Eddy : créer le formulaire Inlet, définir `INLET_FORM_ID` dans Vercel, tester un envoi réel jusqu'à la boîte du club.
- Eddy : trancher la variante de couleurs (bouton du pied de page), puis retirer la bascule et, si « Minimes » est retenue, régénérer icônes et vignettes.
- Eddy : décision MMA avec son responsable (voir §2, point 10).
- Liens entrants depuis les sites Minimes et États-Unis : voir l'entrée suivante du journal.


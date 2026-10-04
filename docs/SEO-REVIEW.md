# SEO, GEO et AEO — revue du 4 octobre 2026

Passe locale sur `https://boxingcenter-blagnac.fr`. Eddy raccordera Vercel, le domaine et Search Console ensuite. Aucune demande d’indexation distante envoyée, aucune position annoncée.

## Changements

- Les 15 requêtes du brief sont regroupées sur sept intentions et les dix pages demandées. Titres de 46–56 caractères et descriptions de 137–158 caractères sur ces pages. Les variantes restent sur la même URL, sans pages satellites ni mots-clés cachés.
- Les introductions et FAQ distinguent anglaise loisir, Boxing Camp encadré, cardio boxing en autonomie, groupes enfants, Boxing Lady et projet MMA. La destination réelle reste Toulouse Minimes ; les cours MMA du réseau sont identifiés séparément. Les pages pratiques conservent leur format court.
- Les sources officielles, auparavant présentes seulement dans les données, sont visibles, nommées et datées. Le graphe reprend leurs citations. Les réponses sont identiques dans le HTML, le JSON-LD et `llms-full.txt`.
- Chaque réponse possède une ancre. L’arrivée sur `/mma-blagnac/#answer-1` ouvre nativement la FAQ : constaté dans le navigateur, sans script supplémentaire. Le fichier IA détaillé peut diriger vers ces réponses précises.
- L’entité de destination reprend `https://boxe-toulouse.com/#salle`, vérifiée dans le JSON-LD officiel le 4 octobre. Adresse : Toulouse, 31200. Blagnac est l’origine du visiteur.
- Eddy Etame Etame est déclaré développeur web et créateur technique dans le graphe `Person`/`WebSite`/`WebPage`, les métadonnées, `humans.txt`, `llms.txt` et `llms-full.txt`. Son nom, identifiant, portfolio et LinkedIn sont centralisés dans `src/data/seo.mjs`, à partir des déclarations publiques des autres projets. Les crédits photographiques sont conservés séparément.
- Douze vignettes 1200 × 630 distinctes : photo, titre, promesse, note et ALT adaptés à chaque page. Le MMA porte la mention réseau ; tarifs, planning et contact ont leurs propres messages. Filigranes conservés. Planche inspectée : `docs/qa/seo-social-board.png`.
- Sitemap : onze pages et quatorze références de photographies réellement visibles, XML échappé et analysé. Les dates viennent des commits des sources de contenu, de graphe ou de liens, jamais de l’heure du build. Sans Git disponible, elles sont omises. Les données partagées peuvent produire une date commune.
- Robots de recherche autorisés, dont OAI-SearchBot ; extraits et grandes images autorisés, 404 `noindex`. Redirection `www` vers le domaine canonique configurée pour Vercel, à confirmer une fois publiée.

## Comparaison et revue critique

La Boutique de Boxe apporte les intentions regroupées, les dates sourcées et les images locales du sitemap. Minimes apporte l’identité stable du développeur et la découverte IA cohérente. Ces mécanismes sont adaptés au brief, sans reprendre un catalogue, des offres ou un MCP inutiles à ce site.

Le gain supplémentaire : une citation pointe vers une réponse précise, ouvre sa FAQ et retrouve la même information dans le HTML, le graphe et la fiche IA. Données et attribution sont générées depuis des sources communes.

| Regard | Défaut trouvé | Correction |
| --- | --- | --- |
| Moteur de réponse | Sources non rendues | Références visibles, citations et ancres |
| Concurrent local | « Aux Minimes » seul dans certaines introductions | Destination Toulouse Minimes nommée |
| Parent / débutant | Risque de confondre les formats | Groupes, loisir, autonomie et cours guidés distingués |
| Art director | Message générique dans les OG pratiques | Message propre à chaque page |
| QA | Comptage des FAQ insuffisant | Parité exacte, ancres, entités, crédits et dimensions contrôlés |
| Eddy | Crédits divergents / état de publication ambigu | Attribution centralisée et statut distant explicite |

La calibration artistique exigeante de 15 % de la revue précédente reste subjective et ne mesure pas le SEO. Les onze pages indexables passent les contrôles locaux. Positions, visibilité et citations IA attendent la publication : aucun pourcentage d’efficacité n’est inventé.

## Vérifications

- `npm run build` : douze pages ; audit sur onze pages indexables réussi. Métadonnées et OG uniques, H1, canonicals, FAQ exactes, liens, images, citations, identité du développeur et fichiers IA contrôlés.
- Dix pages à 320 px : contenu égal à la largeur disponible, aucun débordement. H1, ALT, sources et attribution constatés dans le DOM ; console sans erreur ou avertissement relevé.
- FAQ MMA et tarifs ouvertes. La référence Tarifs ouvre réellement `https://boxe-toulouse.com/tarifs/` dans un nouvel onglet en conservant la page locale. Fragment de réponse MMA confirmé.
- Dix-sept endpoints locaux répondent 200 ; une URL inexistante répond 404. Le texte, les liens et les réponses sont livrés dans le HTML statique.
- Planche des douze OG inspectée. Captures ignorées par Git : `seo-social-board.png`, `seo-mma-desktop.png`, `seo-sources-mobile.png`.
- `npm run indexnow -- --dry-run` : onze URLs canoniques, aucun appel réseau.

Les Core Web Vitals de terrain et le comportement Vercel attendent le déploiement. Les fonctions de la passe UI précédente ne sont pas refondues.

## Reprise après raccordement

1. Déployer sur Vercel avec `vercel.json`, relier les hôtes canonique et `www`, vérifier HTTPS, redirection et vraie 404. Contrôler l’accès des robots et les directives d’indexation.
2. Vérifier les pages, `/sitemap.xml`, `/robots.txt`, `/humans.txt`, `/llms.txt`, `/llms-full.txt`, `/indexnow-key.txt` et `/social/*.png` sur le domaine public. Tester les aperçus de partage et leurs caches.
3. Search Console : vérifier une propriété Domaine avec le TXT DNS fourni par Google, ou une propriété de préfixe URL. Pour sa vérification HTML, configurer le véritable `PUBLIC_GOOGLE_SITE_VERIFICATION`, reconstruire et déployer. Aucun jeton fictif n’est publié.
4. Soumettre `https://boxingcenter-blagnac.fr/sitemap.xml`, inspecter les pages prioritaires et demander leur indexation. Consigner les résultats réels et la date.
5. Lancer `npm run indexnow -- --submit`. Le script contrôle la clé distante et les onze pages avant notification. HTTP 200 = réception ; 202 = validation de clé en attente ; aucun de ces statuts ne prouve l’indexation.
6. Ajouter les liens pertinents depuis les sites officiels du réseau, puis relever positions, impressions, requêtes et citations observées. Les sites voisins n’ont pas été modifiés. Pour les révisions futures, éviter les soumissions répétées sans changement utile.

## Sources techniques

- [Google : recherche générative](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) : contenu utile et indexation restent la base ; `llms.txt` n’apporte pas d’avantage au classement Google.
- [Google : sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) : canonicals, XML valide, dates exactes et soumission Search Console.
- [OpenAI : crawlers](https://developers.openai.com/api/docs/bots) : OAI-SearchBot concerne la recherche, GPTBot l’entraînement ; politiques distinctes.
- [LLMs.txt](https://llmstxt.org/) : aide à la découverte pour les systèmes qui consultent ce fichier.
- [IndexNow : protocole](https://www.indexnow.org/documentation), [endpoints](https://www.indexnow.org/faq) : notification aux moteurs participants, complémentaire du sitemap et de Search Console.

Les règles Claude Code et les ajouts aux skills restent une passe ultérieure.

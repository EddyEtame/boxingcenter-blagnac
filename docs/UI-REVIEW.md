# Passe UI/UX et éditoriale — 4 octobre 2026

Les deux fichiers du cahier des charges transmis par Eddy ont le même SHA-256. La présente passe conserve la direction visuelle appréciée et traite les défauts signalés ; elle ne constitue pas une refonte complète ni une certification du niveau artistique Baffled Bar.

| Demande / défaut | Résultat | Vérification |
| --- | --- | --- |
| Navigation perdue au scroll | En-tête sticky avec fond opaque | Bord supérieur à 0 après défilement réel |
| Page confuse derrière le menu | Flou de 7 px, voile, arrière-plan inerte, scroll bloqué | Menu ouvert : flou et inert confirmés ; capture sauvegardée |
| Navigation clavier | Focus contenu dans l’en-tête ; Échap ferme et restitue le focus | Boucle Tab / Maj-Tab, Échap, clic extérieur, retour au bureau |
| Accès au club sur mobile | Bouton « Le club / Minimes » hors du menu | Visible sur les dix pages à 320 px, puis à 390 et 768 px |
| Conversion pendant la lecture | Rectangle flottant permanent, élargissement ponctuel au scroll ou au focus | État développé observé ; retour compact après 3,8 s ; cadence limitée à une fois par 12 s de scroll |
| Destination adaptée | Planning, tarifs et contact ont leur propre lien flottant | Dix routes inspectées dans le navigateur |
| Liens quittant la page | Navigation dans un nouvel onglet, avec `noopener noreferrer` | Site Minimes et planning officiel réellement ouverts ; onglet Blagnac conservé |
| Pages pratiques diluées | Plannings et Tarifs raccourcis : information officielle, lien immédiat, fiche officielle et questions utiles | Pages présentes et contrôlées ; menu relié directement aux pages du club |
| Logo recomposé | Fichier officiel bleu marine / bronze dans l’en-tête, le pied de page et les partages | Asset `00_MARQUE/BC_Logo_Officiel_Transparent.png`, sans recoloration |
| Ton du brief | Clair, local, rassurant, débutants bienvenus, orienté vers les Minimes | Intro et parcours revus ; pas de salle fictive à Blagnac ni de réservation simulée |

La mention « coachs diplômés » reprend le cahier des charges fourni par le coach. Aucun diplôme, titulaire ou numéro précis n’a été inventé. La page publique des coachs présente les rôles de l’équipe mais ne détaille pas leurs qualifications : https://boxe-toulouse.com/coachs/.

## Contrôles

Build réussi : 12 pages. Audit HTML réussi : 11 pages indexables, accès flottant présent, liens de navigation dans de nouveaux onglets, images et maillage valides. Dix routes contrôlées à 320 px sans débordement. Accueil revérifié à 390, 768, 820 et 1440 px ; console sans erreur ni alerte relevée. Menu et fiches restent des contrôles natifs ; les liens fonctionnent sans JavaScript. Le comportement sans scripts et la réduction des animations ont été prévus ; aucune nouvelle émulation native de ces deux modes n’a été effectuée dans cette passe.

Les captures de revue se trouvent dans `docs/qa/`, exclu de Git. Les ZIP et recherches restent exclus. Aucun agent supplémentaire ni service d’image générative n’a été utilisé pour cette passe.

## Passe suivante, séparée à la demande d’Eddy

SEO / GEO / AEO complet, revue des mots-clés et de toutes les vignettes, règles Claude Code appliquées à Codex, et ajout éventuel des nouvelles consignes au dossier de skills. Les préparations déjà engagées avant cette précision sont conservées, sans déclarer la passe SEO complète. Tout ajout aux skills devra être signé « Ajout rédigé par Codex à partir des consignes d’Eddy ».

Le raccordement du domaine, les accès hébergement / Search Console et les informations légales restent décrits dans `PROJECT-STATE.md`.

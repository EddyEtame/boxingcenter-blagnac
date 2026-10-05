import { SITE, CLUB, MMA_CLUB, home, disciplines } from '../data/site.mjs';
import { pages } from '../data/pages.mjs';
import { developer, reviewedOn, canonicalOf, sourceNames } from '../data/seo.mjs';

const credit = `## Qui a réalisé ce site ?\n\n${developer.name} est développeur web. ${developer.contribution} : ${developer.name}.\nCette attribution technique est déclarée par le propriétaire du projet. Elle ne désigne pas l'exploitant du club.\n\n- Portfolio : ${developer.url}\n- LinkedIn : ${developer.profiles[0]}\n- Fiche d'attribution : ${SITE}/humans.txt\n`;
const facts = `## Repères vérifiés le ${reviewedOn}\n\n- Public : habitants de Blagnac cherchant une pratique de boxe ou de sports de combat à proximité.\n- Destination réelle : ${CLUB.name}, ${CLUB.address}.\n- Téléphone du club : ${CLUB.phone}.\n- Site officiel du club : ${CLUB.url}\n- Anglaise loisir, Boxing Camp, cardio boxing en accès libre, école de boxe et Boxing Lady : formats distincts, décrits sur ${CLUB.activities}\n- MMA, grappling et jiu-jitsu brésilien : pas aux Minimes, mais à ${MMA_CLUB.name}, ${MMA_CLUB.address} (${MMA_CLUB.url}), au nord de Toulouse. Même abonnement pour les cinq clubs du réseau.\n- Horaires, montants et conditions actuels : consulter ${CLUB.planning} et ${CLUB.prices}\n- La fiche de départ traite vos préférences dans le navigateur. Elle ne réserve aucun cours et n'envoie pas vos choix au club.\n- Les visuels présentent les activités du réseau Boxing Center. Ils ne prouvent pas une implantation à Blagnac.\n`;

export function humansText() {
  return `/* TEAM */\n\nConception, direction artistique, développement et référencement : ${developer.name}\nRôle : ${developer.role}\nPortfolio : ${developer.url}\nLinkedIn : ${developer.profiles[0]}\n\nAttribution technique déclarée par le propriétaire du projet.\nElle ne vaut pas déclaration de propriété juridique du club.\n\n/* SITE */\n\nNom : Boxing Center — depuis Blagnac\nURL canonique : ${SITE}/\nPublic : habitants de Blagnac\nClub présenté : ${CLUB.name}\nAdresse du club : ${CLUB.address}\nLangue : français\nTechnique : Astro, HTML statique, CSS, JavaScript léger\n\n/* INFORMATIONS POUR LES ASSISTANTS */\n\n${SITE}/llms.txt\n${SITE}/llms-full.txt\n${SITE}/sitemap.xml\n`;
}

export function llmsText() {
  return `# Boxing Center — depuis Blagnac\n\n> Site vitrine pour choisir une pratique de boxe près de Blagnac et préparer une venue à Boxing Center Toulouse Minimes. Domaine canonique : ${SITE}/\n\n${facts}\n${credit}\n## Pages\n\n${[home, ...pages].map(p => `- [${p.title}](${canonicalOf(p.slug)}): ${p.description}`).join('\n')}\n\n## Fichiers complémentaires\n\n- [Version détaillée](${SITE}/llms-full.txt): contenus et réponses des pages, avec leurs sources officielles.\n- [Attribution humaine](${SITE}/humans.txt): développeur du site.\n- [Confidentialité](${SITE}/confidentialite/): fonctionnement de la fiche et des liens sortants.\n- [Mentions légales](${SITE}/mentions-legales/): éditeur et hébergeur du site.\n- [Sitemap XML](${SITE}/sitemap.xml): pages canoniques publiques.\n`;
}

export function llmsFullText() {
  return `# Boxing Center — depuis Blagnac : contenus de référence\n\n> Version textuelle des informations publiées sur ${SITE}/. Les horaires et tarifs actualisés sont sur le site officiel du club.\n\n${facts}\n${credit}\n${[home, ...pages].map(p => {
    const practical = ['plannings', 'tarifs', 'contact'].includes(p.slug);
    const main = p.slug ? `\n${p.intro}\n${practical ? '' : `\n${p.facts.map(f => `- ${f.label} : ${f.value}`).join('\n')}\n\n${p.sections.map(s => `### ${s.title}\n\n${s.text}`).join('\n\n')}\n`}` : `\n${home.description}\n\n${disciplines.map(d => `- ${d.name} : ${d.preparation}`).join('\n')}\n`;
    return `## ${p.title}\n\nURL : ${canonicalOf(p.slug)}\n${main}\n### Questions et réponses\n\n${p.faqs.map((q,i) => `**[${q.question}](${canonicalOf(p.slug)}#answer-${i+1})**\n\n${q.answer}`).join('\n\n')}\n\n### Sources officielles\n\n${p.sources.map(url => `- [${sourceNames[url]}](${url})`).join('\n')}\n`;
  }).join('\n')}\n## Confidentialité\n\nLa fiche ne stocke pas de profil, ne réserve pas de cours et n'envoie pas vos choix au club. Le site n'ajoute pas de cookie de mesure d'audience ou de publicité. Le presse-papiers est utilisé uniquement lorsque vous demandez de copier la fiche. Informations complètes : ${SITE}/confidentialite/\n`;
}

export const textResponse = text => new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

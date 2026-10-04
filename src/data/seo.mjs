import { SITE, CLUB } from './site.mjs';
import { photos } from './photos.mjs';

// Attribution demandée par Eddy ; identité publique déjà déclarée sur les sites du réseau.
// Le créateur technique du site et l'exploitant du club sont deux rôles distincts.
export const developer = {
  name: 'Eddy Etame Etame',
  id: 'https://eddy-s-second-brain.vercel.app/#eddy',
  url: 'https://eddy-s-second-brain.vercel.app/',
  profiles: ['https://www.linkedin.com/in/eddy-etame-etame-47254338b/', 'https://eddy-s-second-brain.vercel.app/'],
  role: 'Développeur web',
  contribution: 'Conception, direction artistique, développement et référencement du site',
};
export const reviewedOn = '2026-10-04';
export const canonicalOf = slug => `${SITE}/${slug ? `${slug}/` : ''}`;
export const sourceNames = {
  [CLUB.url]: 'Présentation de Toulouse Minimes',
  [`${CLUB.url}le-club/`]: 'La salle des Minimes',
  [CLUB.activities]: 'Activités des Minimes',
  [CLUB.planning]: 'Planning officiel des Minimes',
  [CLUB.prices]: 'Tarifs officiels des Minimes',
  [CLUB.trial]: 'Première séance aux Minimes',
  [CLUB.contact]: 'Contact et accès aux Minimes',
  'https://boxingcenter.fr/': 'Réseau Boxing Center',
  'https://clubmma.fr/': 'MMA à Toulouse États-Unis',
  'https://mmatoulouse.com/activites/': 'Activités de Ramonville',
};
export const privacy = {
  slug: 'confidentialite', title: 'Confidentialité — Votre visite depuis Blagnac',
  description: 'Comprendre la fiche de départ, les liens vers le club et la confidentialité de votre visite sur boxingcenter-blagnac.fr.', image: 'team',
};
export const notFound = { slug: '404', title: 'Page introuvable — Boxing Center depuis Blagnac', image: 'event' };

// Une intention, une composition et une promesse propres à chaque vignette.
const cards = {
  '': ['LA BOXE PROCHE DE BLAGNAC.', 'TROUVER VOTRE PRATIQUE.', 'Anglaise, fitness, enfants, femmes · projet MMA.'],
  'club-boxe-blagnac': ['VOTRE CLUB PROCHE DE BLAGNAC.', 'DÉCOUVRIR TOULOUSE MINIMES.', '12 rue de Fenouillet · 31200 Toulouse.'],
  'boxe-anglaise-blagnac': ['BOXE ANGLAISE PRÈS DE BLAGNAC.', 'GARDE. APPUIS. DÉPLACEMENTS.', 'La pratique loisir pour apprendre à votre rythme.'],
  'mma-blagnac': ['MMA PRÈS DE BLAGNAC.', 'CHOISIR LE COURS ET LE LIEU.', 'Votre point de contact : Toulouse Minimes.'],
  'boxe-fitness-blagnac': ['BOXING FITNESS PRÈS DE BLAGNAC.', 'BOUGER À VOTRE RYTHME.', 'Boxing Camp encadré · cardio boxing au sac.'],
  'boxe-enfants-blagnac': ['BOXE ENFANTS PRÈS DE BLAGNAC.', 'APPRENDRE. GRANDIR. BOXER.', 'Baby Boxe, enfants et ados · choisir son groupe.'],
  'boxe-femme-blagnac': ['BOXE FEMME PRÈS DE BLAGNAC.', 'CHOISIR LE CADRE QUI VOUS VA.', 'Boxing Lady et cours mixtes à Toulouse Minimes.'],
  plannings: ['LES PLANNINGS DE BOXE.', 'VOTRE DISCIPLINE. VOTRE CRÉNEAU.', 'Consultez les horaires actuels de Toulouse Minimes.'],
  tarifs: ['LES TARIFS DE BOXE.', 'ESSAI. ADULTES. ÉCOLE DE BOXE.', 'Les montants et conditions sur le site des Minimes.'],
  contact: ['DE BLAGNAC AUX MINIMES.', 'PRÉPARER VOTRE VENUE.', '12 rue de Fenouillet · 05 62 24 46 82.'],
  confidentialite: ['VOS CHOIX RESTENT LES VÔTRES.', 'UNE FICHE QUE VOUS GARDEZ.', 'Vos choix restent dans votre navigateur.'],
  '404': ['UN PAS DE CÔTÉ.', 'RETROUVER VOTRE CHEMIN.', 'Les pratiques et les informations du club.'],
};
export function socialFor(page) {
  const [title, promise, note] = cards[page.slug];
  const photo = photos[page.image || 'hero'];
  return {
    title, promise, note,
    url: `${SITE}/social/${page.slug || 'accueil'}.png`,
    alt: `${title} ${promise} ${note} Photographie : ${photo.alt} Logo officiel Boxing Center.`,
  };
}

export const SITE = 'https://boxingcenter-blagnac.fr';

/**
 * Le club de destination. Chaque fait vient de boxe-toulouse.com (site officiel du
 * club), relevé le 4 octobre 2026. Rien n'est écrit en dur ailleurs : les pages, le
 * JSON-LD, les fichiers IA et les vignettes lisent ces valeurs.
 */
export const CLUB = {
  name: 'Boxing Center Toulouse Minimes',
  short: 'Toulouse Minimes',
  url: 'https://boxe-toulouse.com/',
  entityId: 'https://boxe-toulouse.com/#salle',
  activities: 'https://boxe-toulouse.com/activites/',
  planning: 'https://boxe-toulouse.com/plannings/',
  prices: 'https://boxe-toulouse.com/tarifs/',
  trial: 'https://boxe-toulouse.com/premiere-seance/',
  contact: 'https://boxe-toulouse.com/contact/',
  address: '12 rue de Fenouillet, 31200 Toulouse',
  postalAddress: { '@type': 'PostalAddress', streetAddress: '12 rue de Fenouillet', postalCode: '31200', addressLocality: 'Toulouse', addressCountry: 'FR' },
  phone: '05 62 24 46 82',
  phoneHref: 'tel:+33562244682',
  hours: 'du lundi au samedi, de 10h à 21h30',
  openingHours: 'Mo-Sa 10:00-21:30',
  transit: 'métro B, station Barrière de Paris, à trois minutes à pied',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=12+rue+de+Fenouillet+31200+Toulouse',
  verifiedOn: '2026-10-04',
};

/**
 * Le MMA Boxing Center ne se pratique pas aux Minimes (page Activités du club, relevée
 * le 4 octobre 2026). La salle du réseau qui l'enseigne au nord de Toulouse est
 * Toulouse États-Unis : cage officielle, grappling, jiu-jitsu brésilien, boxe et
 * préparation physique. Source : clubmma.fr, relevé le 4 octobre 2026.
 */
export const MMA_CLUB = {
  name: 'Boxing Center Toulouse États-Unis',
  short: 'Toulouse États-Unis',
  url: 'https://clubmma.fr/',
  address: '388 avenue des États-Unis, 31200 Toulouse',
  surface: '1 200 m²',
  verifiedOn: '2026-10-04',
};

/**
 * L'éditeur légal, tel que le réseau le déclare (boxingcenter.fr/mentions-legales/),
 * recoupé au registre des entreprises le 13 septembre 2026 (SIREN 821 817 889) pour
 * les autres sites du réseau construits par le même développeur.
 */
export const EDITEUR = {
  denomination: 'SAS Boxing Center',
  forme: 'Société par actions simplifiée au capital de 1 500 €',
  siret: '821 817 889 00016',
  rcs: 'RCS Toulouse B 821 817 889',
  siege: '12 rue de Fenouillet, 31200 Toulouse',
  directeurPublication: 'Sébastien Dutilh, directeur général de SAS Boxing Center',
  verifiedOn: '2026-09-13',
};

export const disciplines = [
  { id: 'boxing', name: 'Boxe anglaise', short: 'La technique, à votre rythme.', slug: 'boxe-anglaise-blagnac', image: 'boxing', tag: 'APPRENDRE', preparation: 'Dites au coach que vous débutez : il place vos pieds, vos poings et votre garde dès la première séance. Les échanges viennent plus tard, seulement si vous le demandez.', next: 'Repérez « Boxe anglaise (loisirs) » sur le planning des Minimes.' },
  { id: 'fitness', name: 'Boxing fitness', short: 'Se défouler, retrouver le souffle.', slug: 'boxe-fitness-blagnac', image: 'fitness', tag: 'SE DÉFOULER', preparation: 'Pour un cours encadré au rythme soutenu, choisissez le Boxing Camp. Pour frapper le sac sans contact et à votre rythme, le cardio boxing en accès libre.', next: 'Repérez un cours de Boxing Camp sur le planning officiel.' },
  { id: 'kids', name: 'Boxe enfants', short: 'Grandir. Bouger. Prendre confiance.', slug: 'boxe-enfants-blagnac', image: 'kids', tag: 'GRANDIR', preparation: 'Donnez l’âge de votre enfant au club pour trouver son groupe : Baby Boxe dès 3 ans, enfants, ados. La boxe est éducative et la compétition n’est jamais obligatoire.', next: 'Vérifiez le groupe de votre enfant avec le club.' },
  { id: 'women', name: 'Boxing Lady', short: 'Entre femmes, ou en mixte : vous choisissez.', slug: 'boxe-femme-blagnac', image: 'women', tag: 'OSER', preparation: 'Le Boxing Lady est réservé aux femmes, deux soirs par semaine ; les cours mixtes vous sont aussi ouverts. Aucune expérience n’est nécessaire, le matériel est prêté.', next: 'Comparez Boxing Lady et boxe loisir sur le planning des Minimes.' },
  { id: 'mma', name: 'MMA', short: 'Debout, au sol : la cage est à Toulouse États-Unis.', slug: 'mma-blagnac', image: 'mma', tag: 'EXPLORER', preparation: 'Le MMA Boxing Center s’apprend à la salle Toulouse États-Unis : cage, grappling, JJB et boxe au même endroit. Dites à l’équipe que vous débutez, les cours accueillent les débutants.', next: 'Réservez une séance d’essai au club MMA Boxing Center.' }
];

/**
 * Repères affichés sur l'accueil. Chacun est publié par le club lui-même sur
 * boxe-toulouse.com (accueil, page Activités, page Première séance), relevé le 4 octobre 2026.
 * Aucun prix, aucune durée de trajet, aucune distance : ces chiffres restent sur le site du club.
 */
export const proof = [
  { label: 'L’encadrement', value: 'Coachs diplômés d’État, licenciés FFBoxe' },
  { label: 'Pour qui', value: 'Débutants, loisirs, enfants, femmes, confirmés' },
  { label: 'Depuis Blagnac', value: 'Métro B, Barrière de Paris, à 3 min à pied du club' },
  { label: 'La structure', value: 'Boxing Center : cinq clubs, un seul abonnement' },
];

export const home = {
  slug: '',
  // Balises recommandées par le cahier des charges (§17), reprises telles quelles.
  title: 'Club de boxe Blagnac — Boxing Center proche de Blagnac',
  description: 'Vous cherchez un club de boxe à Blagnac ? Boxing Center Toulouse Minimes accueille les débutants, loisirs, enfants, femmes et confirmés à proximité de Blagnac.',
  sources: [CLUB.url, CLUB.activities, CLUB.trial, CLUB.contact, MMA_CLUB.url],
  faqs: [
    { question: 'Vous cherchez « club de boxe Blagnac » : où aller ?', answer: 'Boxing Center accueille les habitants de Blagnac dans son club de Toulouse Minimes, 12 rue de Fenouillet, 31200 Toulouse, à trois minutes à pied du métro B Barrière de Paris. C’est le club de boxe proche de Blagnac que ce site présente : une vraie structure Boxing Center, des coachs diplômés d’État et des cours pour tous les niveaux.' },
    { question: 'Puis-je commencer la boxe sans avoir déjà pratiqué ?', answer: 'Oui. Le premier cours commence par l’échauffement, la garde et le direct, avec un coach qui corrige dès la première séance. Gants et protections sont prêtés, personne ne monte sur le ring sans l’avoir demandé. La boxe anglaise loisir, le Boxing Camp et le cardio boxing accueillent les débutants.' },
    { question: 'Sport de combat Blagnac : quelles disciplines Boxing Center propose-t-il ?', answer: 'Aux Minimes : boxe anglaise loisir et compétiteurs, boxe éducative pour les enfants dès 3 ans, Boxing Lady réservé aux femmes, Boxing Camp, boxe pieds-poings, cardio boxing sans contact et cross training. Le MMA, le grappling et le jiu-jitsu brésilien se pratiquent à la salle Boxing Center Toulouse États-Unis. Un seul abonnement ouvre les cinq clubs du réseau.' },
    { question: 'Comment découvrir le MMA près de Blagnac ?', answer: 'Le MMA Boxing Center s’apprend à Toulouse États-Unis, 388 avenue des États-Unis, 31200 Toulouse : cage officielle, grappling, jiu-jitsu brésilien et cours de MMA ouverts aux débutants. La page MMA de ce site vous y conduit.' },
    { question: 'Comment réserver une séance d’essai ?', answer: 'Sur le site officiel de Boxing Center Toulouse Minimes, depuis la page Première séance. Prévoyez une tenue de sport, des chaussures propres et de l’eau ; gants et protections sont prêtés, et il n’y a ni dossier ni certificat à fournir pour venir essayer.' }
  ]
};

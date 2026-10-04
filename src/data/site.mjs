export const SITE = 'https://boxingcenter-blagnac.fr';
export const CLUB = {
  name: 'Boxing Center Toulouse Minimes',
  url: 'https://boxe-toulouse.com/',
  activities: 'https://boxe-toulouse.com/activites/',
  planning: 'https://boxe-toulouse.com/plannings/',
  prices: 'https://boxe-toulouse.com/tarifs/',
  trial: 'https://boxe-toulouse.com/premiere-seance/',
  contact: 'https://boxe-toulouse.com/contact/',
  address: '12 rue de Fenouillet, 31200 Toulouse',
  postalAddress: { '@type': 'PostalAddress', streetAddress: '12 rue de Fenouillet', postalCode: '31200', addressLocality: 'Toulouse', addressCountry: 'FR' },
  phone: '05 62 24 46 82',
  phoneHref: 'tel:+33562244682',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=12+rue+de+Fenouillet+31200+Toulouse'
};
export const disciplines = [
  { id: 'boxing', name: 'Boxe anglaise', short: 'La technique, à votre rythme.', slug: 'boxe-anglaise-blagnac', image: 'boxing', tag: 'APPRENDRE', preparation: 'Dites au coach que vous débutez. La garde et les déplacements viennent avant les échanges.', next: 'Découvrez la boxe anglaise loisir dans le planning des Minimes.' },
  { id: 'fitness', name: 'Boxing fitness', short: 'De l’énergie à remettre en mouvement.', slug: 'boxe-fitness-blagnac', image: 'fitness', tag: 'SE DÉFOULER', preparation: 'Choisissez le Boxing Camp si vous cherchez un cours encadré. Le cardio boxing en accès libre est une autre pratique.', next: 'Repérez un cours de Boxing Camp sur le planning officiel.' },
  { id: 'kids', name: 'Boxe enfants', short: 'Grandir. Bouger. Prendre confiance.', slug: 'boxe-enfants-blagnac', image: 'kids', tag: 'GRANDIR', preparation: 'Précisez l’âge de votre enfant au club pour identifier son groupe. L’approche est éducative, la compétition reste un choix.', next: 'Vérifiez le groupe Baby, enfants ou ados avec le club.' },
  { id: 'women', name: 'Boxing Lady', short: 'Un espace pour commencer. Et avancer.', slug: 'boxe-femme-blagnac', image: 'women', tag: 'OSER', preparation: 'Vous pouvez choisir Boxing Lady, réservé aux femmes, ou les cours mixtes. Aucune expérience préalable n’est nécessaire.', next: 'Comparez Boxing Lady et boxe loisir sur le planning des Minimes.' },
  { id: 'mma', name: 'MMA', short: 'Debout, au sol : trouver le bon cours.', slug: 'mma-blagnac', image: 'mma', tag: 'EXPLORER', preparation: 'Présentez votre niveau et votre envie de découvrir le MMA à l’équipe. Elle vous aide à choisir le cours et le lieu dans le réseau.', next: 'Contactez les Minimes pour être orienté vers le bon club du réseau.' }
];
export const home = {
  slug: '',
  title: 'Boxe Blagnac — Boxing Center proche de Blagnac',
  description: 'Boxe proche de Blagnac : anglaise, fitness, enfants et femmes à Toulouse Minimes. Découvrez aussi le MMA dans le réseau Boxing Center et préparez votre venue.',
  faqs: [
    { question: 'Où se déroulent les cours pour les habitants de Blagnac ?', answer: 'Les cours présentés pour Toulouse Minimes se déroulent au 12 rue de Fenouillet, 31200 Toulouse. Ce site aide les habitants de Blagnac à choisir leur pratique et à préparer leur venue. Le club est situé à Toulouse, à proximité de Blagnac.' },
    { question: 'Puis-je commencer la boxe sans avoir déjà pratiqué ?', answer: 'Oui. La boxe anglaise loisir et les pratiques de remise en forme permettent de débuter. Indiquez votre expérience au coach et consultez les conditions de première séance sur le site des Minimes. Les échanges en opposition ne sont pas imposés aux débutants.' },
    { question: 'Comment choisir un cours compatible avec mes horaires ?', answer: 'Commencez par une discipline et notez les moments où vous êtes disponible. La fiche de départ de cette page vous aide à préparer ce choix. Consultez ensuite le planning officiel des Minimes pour vérifier un créneau réel.' },
    { question: 'Comment découvrir le MMA près de Blagnac ?', answer: 'Le MMA associe le travail debout et le travail au sol. Boxing Center propose cette pratique dans son réseau. L’équipe de Toulouse Minimes est votre point de contact pour choisir le cours et le lieu adaptés à votre niveau et à vos disponibilités.' }
  ]
};

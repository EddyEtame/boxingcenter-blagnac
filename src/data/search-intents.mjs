/**
 * Les quinze requêtes du cahier des charges (§3), chacune rattachée à la page qui
 * y répond. Le contrôle de build exige que chaque expression apparaisse telle
 * quelle (accents et casse ignorés) dans le texte visible de sa page, et que la
 * première expression de chaque page figure dans son titre.
 */
export const searchIntents = [
  { slug: '', terms: ['Club de boxe Blagnac', 'Boxe Blagnac', 'Sport de combat Blagnac', 'Sports de combat Blagnac'] },
  { slug: 'club-boxe-blagnac', terms: ['Club de boxe proche Blagnac', 'Salle de boxe Blagnac', 'Salle de boxe proche Blagnac', 'Cours de boxe Blagnac'] },
  { slug: 'boxe-anglaise-blagnac', terms: ['Boxe Anglaise Blagnac'] },
  { slug: 'mma-blagnac', terms: ['Club MMA Blagnac', 'MMA Blagnac'] },
  { slug: 'boxe-fitness-blagnac', terms: ['Boxe Fitness Blagnac', 'Boxing Fitness Blagnac'] },
  { slug: 'boxe-enfants-blagnac', terms: ['Boxe Enfants Blagnac'] },
  { slug: 'boxe-femme-blagnac', terms: ['Boxe Femme Blagnac'] },
];

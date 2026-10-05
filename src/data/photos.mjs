/** Responsive club imagery. ALT describes the visible scene and local intent. */
const photo = (name, source, width, height, alt, widths) => ({
  base: `/images/${name}`, source, width, height, alt, widths,
  variants: widths.map(w => ({width: w, height: Math.round(height * w / width), src: `/images/${name}-${w}.webp`})),
});

export const photos = {
  hero: photo("club-boxe-blagnac-boxing-center-pratique", ".research/unlabelled/hero.png", 2048, 1360,
    "Club de boxe proche de Blagnac : deux pratiquants gantés travaillent leur garde pendant un cours encadré Boxing Center.", [480,960,1200]),
  boxing: photo("boxe-anglaise-blagnac", "../club-de-boxe-blagnac/public/images/boxe-ados-blagnac-1600.webp", 1600, 1066,
    "Cours de boxe anglaise près de Blagnac : un entraîneur Boxing Center guide un jeune boxeur aux pattes d’ours.", [480,960,1600]),
  ring: photo("salle-boxe-proche-blagnac-cours", ".research/unlabelled/ring.png", 2048, 1360,
    "Salle de boxe proche de Blagnac : sur le ring de Boxing Center Toulouse Minimes, un entraîneur encadre deux boxeurs.", [480,960,1600]),
  fitness: photo("boxe-fitness-blagnac-sac", ".research/unlabelled/fitness.png", 2592, 1536,
    "Boxing fitness près de Blagnac : une pratiquante travaille sa frappe au sac dans une salle Boxing Center.", [480,960,1600]),
  kids: photo("cours-boxe-enfants-blagnac", "../club-de-boxe-blagnac/public/images/boxe-educative-blagnac-1600.webp", 1600, 1066,
    "Boxe enfants proche de Blagnac : deux jeunes boxeurs casqués lors d’un tournoi de boxe éducative Boxing Center.", [480,960,1600]),
  women: photo("boxe-femme-blagnac-technique", ".research/unlabelled/women.png", 2592, 1536,
    "Cours de boxe femme près de Blagnac : deux boxeuses gantées travaillent leur garde face à face.", [480,960,1600]),
  mma: photo("club-mma-blagnac-boxing-center-echauffement", ".research/unlabelled/mma.png", 2048, 1360,
    "Club MMA proche de Blagnac : échauffement à la corde dans une salle Boxing Center équipée d’une cage.", [480,960,1600]),
  team: photo("cours-boxe-collectif-blagnac-entrainement", ".research/unlabelled/team.png", 2048, 1360,
    "Cours de boxe collectif accessible depuis Blagnac : des pratiquants s’entraînent ensemble face aux sacs de frappe.", [480,960,1600]),
  event: photo("fight-event-4-ring", ".research/unlabelled/event.png", 2048, 1360,
    "Deux boxeurs en compétition sur un ring, sous les projecteurs de la soirée Fight Event 4 de Boxing Center.", [480,960,1600]),
  heroView: photo("club-boxe-blagnac-boxing-center-garde-angle", ".research/generated-images/club-boxe-blagnac-boxing-center-garde-angle.png", 2048, 1360,
    "Club de boxe proche de Blagnac : trois pratiquants Boxing Center en garde, en tenues crème, marine et olive.", [480,960,1600]),
  clubView: photo("salle-boxe-proche-blagnac-ring-coach-angle", ".research/generated-images/salle-boxe-proche-blagnac-ring-coach-angle.png", 2048, 1360,
    "Salle de boxe proche de Blagnac : un coach montrant la garde à deux pratiquants sur un ring, devant la fresque des boxeurs.", [480,960,1600]),
  boxingView: photo("boxe-anglaise-blagnac-pattes-ours-angle", ".research/generated-images/boxe-anglaise-blagnac-pattes-ours-angle.png", 2048, 1360,
    "Cours de boxe anglaise près de Blagnac : un coach aux pattes d’ours orange face à un jeune boxeur ganté de bleu.", [480,960,1600]),
  fitnessView: photo("boxe-fitness-blagnac-sac-garde-angle", ".research/generated-images/boxe-fitness-blagnac-sac-garde-angle.png", 2048, 1360,
    "Boxing fitness près de Blagnac : une pratiquante en garde au sac, avec des gants bordeaux et une tenue taupe et marine.", [480,960,1600]),
  kidsView: photo("cours-boxe-enfants-blagnac-garde-ring-angle", ".research/generated-images/cours-boxe-enfants-blagnac-garde-ring-angle.png", 2048, 1360,
    "Boxe enfants proche de Blagnac : deux jeunes boxeurs casqués en garde sur un ring, sous le regard d’un adulte.", [480,960,1600]),
  womenView: photo("boxe-femme-blagnac-duo-technique-angle", ".research/generated-images/boxe-femme-blagnac-duo-technique-angle.png", 2048, 1360,
    "Cours de boxe femme près de Blagnac : deux pratiquantes échangeant un geste technique ganté, en tenues olive et marine.", [480,960,1600]),
  mmaView: photo("club-mma-blagnac-boxing-center-corde-angle", ".research/generated-images/club-mma-blagnac-boxing-center-corde-angle.png", 2048, 1360,
    "Club MMA proche de Blagnac : des pratiquants tenant leurs cordes pendant une pause, devant une cage et sur des tapis bleus et rouges.", [480,960,1600]),
};

export default photos;

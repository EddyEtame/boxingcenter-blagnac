/**
 * Boxing Center photography and explicitly labelled AI illustrations derived
 * from it. Neither kind establishes a Blagnac venue.
 * File names follow the brief (§18): the local search phrase, in kebab-case.
 * ALT texts describe what is photographed AND carry the local phrase, the way the
 * brief asks ("Cours de boxe anglaise près de Blagnac"), without ever claiming that
 * the room is in Blagnac. Credits follow the visible watermark or the evidence registry.
 * Source paths are repository-relative inputs for scripts/prepare-images.mjs.
 */
const network = 'Photographie du réseau Boxing Center ; ne représente pas une salle à Blagnac.';

const entry = (name, source, width, height, alt, caption, credit, extra = {}) => {
  const maxWidth = Math.min(width, 1600);
  const widths = [...new Set([480, 960, maxWidth].filter((w) => w <= width))].sort((a, b) => a - b);
  return {
    base: `/images/${name}`,
    alt,
    caption,
    credit,
    source,
    width,
    height,
    widths,
    variants: widths.map((w) => ({ width: w, height: Math.round(height * w / width), src: `/images/${name}-${w}.webp` })),
    provenance: network,
    ...extra,
  };
};

export const photos = {
  hero: entry(
    'club-boxe-blagnac-boxing-center', '../bc-minimes/public/assets/img/photos/cours-assaut-1200.webp', 1200, 800,
    'Club de boxe proche de Blagnac : deux pratiquants gantés travaillent leur garde pendant un cours encadré Boxing Center.',
    'Entraînement dans le réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Visible watermark; inherited Minimes gallery identifies the pool as network photography, not a Minimes shoot.' },
  ),
  boxing: entry(
    'boxe-anglaise-blagnac', '../club-de-boxe-blagnac/public/images/boxe-ados-blagnac-1600.webp', 1600, 1066,
    'Cours de boxe anglaise près de Blagnac : un entraîneur Boxing Center guide un jeune boxeur aux pattes d’ours.',
    'Travail aux pattes d’ours dans le réseau Boxing Center.', 'Boxing Center',
    { evidence: 'Published unsigned by the Boxing Center network, recorded in the older photo registry.', publishedSource: 'https://boxingcenter.fr/wp-content/uploads/2026/09/valentin-tapia-mitaines-jeune-toulouse.jpeg' },
  ),
  ring: entry(
    'salle-boxe-proche-blagnac', '../club-de-boxe-blagnac/public/images/ring-encadrement-1600.webp', 1600, 1048,
    'Salle de boxe proche de Blagnac : sur le ring de Boxing Center Toulouse Minimes, un entraîneur encadre deux boxeurs.',
    'Sur le ring du Toulouse Minimes Boxing Club, membre du réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Older registry: BC-077, EXIF artist; visible wall inscription names Toulouse Minimes Boxing Club.', shotAt: 'Toulouse Minimes Boxing Club' },
  ),
  fitness: entry(
    'boxe-fitness-blagnac', '../club-de-boxe-blagnac/public/images/frappe-au-sac-1600.webp', 1600, 959,
    'Boxing fitness près de Blagnac : une pratiquante travaille sa frappe au sac dans une salle Boxing Center.',
    'Travail au sac dans le réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Older registry: BC-064, visible watermark, room unspecified.' },
  ),
  kids: entry(
    'cours-boxe-enfants-blagnac', '../club-de-boxe-blagnac/public/images/boxe-educative-blagnac-1600.webp', 1600, 1066,
    'Boxe enfants proche de Blagnac : deux jeunes boxeurs casqués lors d’un tournoi de boxe éducative Boxing Center.',
    'Tournoi de boxe éducative du réseau Boxing Center.', 'Boxing Center',
    {
      evidence: 'Published by the network on boxingcenter.fr; no signed photographer identified.',
      publishedSource: 'https://boxingcenter.fr/wp-content/uploads/2025/04/boxing-center-tournoi-boxing-trophy-youth-boxe-educative.webp',
      provenance: 'Photographie d’un tournoi de boxe éducative du réseau ; ne représente pas une séance à Blagnac.',
    },
  ),
  women: entry(
    'boxe-femme-blagnac', '../club-de-boxe-blagnac/public/images/boxe-corner-1600.webp', 1600, 984,
    'Cours de boxe femme près de Blagnac : deux boxeuses gantées travaillent leur garde face à face.',
    'Échange technique entre deux pratiquantes du réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Older registry: visible watermark, room unspecified.' },
  ),
  mma: entry(
    'club-mma-blagnac-boxing-center', '../boxing-center-cugnaux/public/photos/cage-mma-cugnaux-2000.webp', 2000, 1333,
    'Club MMA proche de Blagnac : échauffement à la corde dans une salle Boxing Center équipée d’une cage.',
    'Préparation physique dans une salle du réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Visible watermark. Source photograph reused from the Boxing Center network; no Minimes location claim.' },
  ),
  team: entry(
    'cours-boxe-collectif-blagnac', '../club-de-boxe-blagnac/public/images/cours-collectif-sacs-1600.webp', 1600, 1067,
    'Cours de boxe collectif accessible depuis Blagnac : des pratiquants s’entraînent ensemble face aux sacs de frappe.',
    'Cours collectif dans le réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Older registry: BC-063, visible watermark, room unspecified.' },
  ),
  event: entry(
    'fight-event-4', 'Fight Event 4 - Jefferson Vargas vs Valentin Guth-1-001.zip#Fight Event 4 - Jefferson Vargas vs Valentin Guth/DSC_6958-3.jpg', 4784, 3194,
    'Deux boxeurs en compétition sur un ring, sous les projecteurs de la soirée Fight Event 4 de Boxing Center.',
    'Fight Event 4 — Jefferson Vargas face à Valentin Guth. Archive fournie par le club.', 'B.M Photographie',
    {
      sourceArchive: 'Fight Event 4 - Jefferson Vargas vs Valentin Guth-1-001.zip',
      sourceEntry: 'Fight Event 4 - Jefferson Vargas vs Valentin Guth/DSC_6958-3.jpg',
      evidence: 'Visible B.M Photographie watermark retained. EXIF artist/copyright absent; no full photographer name inferred.',
      provenance: 'Photographie de Fight Event 4 ; ne représente pas une séance ou une salle à Blagnac.',
    },
  ),
};

// New camera views are illustrations, never documentary proof of a class or
// room. Keep original photos/credits intact and credit the reference separately.
const illustration = (name, referencePhoto, alt, caption) => entry(
  name, `.research/generated-images/${name}.png`, 2048, 1360,
  alt, `Illustration IA — ${caption}`, 'Boxing Center',
  {
    generated: true,
    referencePhoto,
    referenceCredit: photos[referencePhoto].credit,
    model: 'GPT Image 2.5',
    provider: 'Higgsfield',
    generatedOn: '2026-10-05',
    digitalSourceType: 'https://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia',
    provenance: 'Illustration IA dérivée d’une photographie du réseau Boxing Center ; personnes et décor pris pour références, angle, tenue et geste réinterprétés. Ne représente pas une séance photographiée à Blagnac.',
  },
);

Object.assign(photos, {
  heroView: illustration(
    'club-boxe-blagnac-boxing-center-garde-angle-ia', 'hero',
    'Club de boxe proche de Blagnac : illustration IA de trois pratiquants Boxing Center en garde, en tenues crème, marine et olive.',
    'Travail de garde inspiré du réseau Boxing Center.',
  ),
  clubView: illustration(
    'salle-boxe-proche-blagnac-ring-coach-angle-ia', 'ring',
    'Salle de boxe proche de Blagnac : illustration IA d’un coach montrant la garde à deux pratiquants sur un ring, devant la fresque des boxeurs.',
    'Démonstration de garde inspirée du ring des Minimes.',
  ),
  boxingView: illustration(
    'boxe-anglaise-blagnac-pattes-ours-angle-ia', 'boxing',
    'Cours de boxe anglaise près de Blagnac : illustration IA d’un coach aux pattes d’ours orange face à un jeune boxeur ganté de bleu.',
    'Travail aux pattes d’ours inspiré du réseau Boxing Center.',
  ),
  fitnessView: illustration(
    'boxe-fitness-blagnac-sac-garde-angle-ia', 'fitness',
    'Boxing fitness près de Blagnac : illustration IA d’une pratiquante en garde au sac, avec des gants bordeaux et une tenue taupe et marine.',
    'Travail au sac inspiré du réseau Boxing Center.',
  ),
  kidsView: illustration(
    'cours-boxe-enfants-blagnac-garde-ring-angle-ia', 'kids',
    'Boxe enfants proche de Blagnac : illustration IA de deux jeunes boxeurs casqués en garde sur un ring, sous le regard d’un adulte.',
    'Garde éducative inspirée d’un tournoi du réseau.',
  ),
  womenView: illustration(
    'boxe-femme-blagnac-duo-technique-angle-ia', 'women',
    'Cours de boxe femme près de Blagnac : illustration IA de deux pratiquantes échangeant un geste technique ganté, en tenues olive et marine.',
    'Échange technique inspiré du réseau Boxing Center.',
  ),
  mmaView: illustration(
    'club-mma-blagnac-boxing-center-corde-angle-ia', 'mma',
    'Club MMA proche de Blagnac : illustration IA de pratiquants tenant leurs cordes pendant une pause, devant une cage et sur des tapis bleus et rouges.',
    'Préparation physique inspirée d’une salle du réseau.',
  ),
});

export default photos;

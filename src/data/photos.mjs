/**
 * Real Boxing Center photography. None of these files establishes the Blagnac venue.
 * The inherited Minimes gallery explicitly describes its pool as network/Portet
 * placeholders. A local filename is not proof of the photographed location.
 * Credits follow the visible watermark or the older site's evidence registry.
 * Source paths are repository-relative inputs for scripts/prepare-images.mjs.
 */
const network = 'Photographie du réseau Boxing Center ; ne représente pas la salle de Blagnac.';

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
    'entrainement-boxe', '../bc-minimes/public/assets/img/photos/cours-assaut-1200.webp', 1200, 800,
    'Deux pratiquants gantés travaillent leur garde pendant un cours de boxe.',
    'Entraînement dans le réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Visible watermark; inherited Minimes gallery identifies the pool as network photography, not a Minimes shoot.' },
  ),
  boxing: entry(
    'travail-technique', '../club-de-boxe-blagnac/public/images/boxe-ados-blagnac-1600.webp', 1600, 1066,
    'Un entraîneur accompagne un jeune boxeur dans un exercice aux pattes d’ours.',
    'Travail aux pattes d’ours dans le réseau Boxing Center.', 'Boxing Center',
    { evidence: 'Published unsigned by the Boxing Center network, recorded in the older photo registry.', publishedSource: 'https://boxingcenter.fr/wp-content/uploads/2026/09/valentin-tapia-mitaines-jeune-toulouse.jpeg' },
  ),
  ring: entry(
    'ring-encadrement', '../club-de-boxe-blagnac/public/images/ring-encadrement-1600.webp', 1600, 1048,
    'Un entraîneur encadre le travail de deux boxeurs sur le ring.',
    'Sur le ring du Toulouse Minimes Boxing Club, membre du réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Older registry: BC-077, EXIF artist; visible wall inscription names Toulouse Minimes Boxing Club.', shotAt: 'Toulouse Minimes Boxing Club' },
  ),
  fitness: entry(
    'frappe-au-sac', '../club-de-boxe-blagnac/public/images/frappe-au-sac-1600.webp', 1600, 959,
    'Une pratiquante travaille sa frappe face à un sac de boxe.',
    'Travail au sac dans le réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Older registry: BC-064, visible watermark, room unspecified.' },
  ),
  kids: entry(
    'boxe-educative', '../club-de-boxe-blagnac/public/images/boxe-educative-blagnac-1600.webp', 1600, 1066,
    'Deux jeunes boxeurs casqués participent à un assaut de boxe éducative sur un ring.',
    'Tournoi de boxe éducative du réseau Boxing Center.', 'Boxing Center',
    {
      evidence: 'Published by the network on boxingcenter.fr; no signed photographer identified.',
      publishedSource: 'https://boxingcenter.fr/wp-content/uploads/2025/04/boxing-center-tournoi-boxing-trophy-youth-boxe-educative.webp',
      provenance: 'Photographie d’un tournoi de boxe éducative du réseau ; ne représente pas une séance à Blagnac.',
    },
  ),
  women: entry(
    'boxeuses-technique', '../club-de-boxe-blagnac/public/images/boxe-corner-1600.webp', 1600, 984,
    'Deux boxeuses travaillent leur garde et leurs gestes, gantées, face à face.',
    'Échange technique entre deux pratiquantes du réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Older registry: visible watermark, room unspecified.' },
  ),
  mma: entry(
    'preparation-sports-combat', '../boxing-center-cugnaux/public/photos/cage-mma-cugnaux-2000.webp', 2000, 1333,
    'Des pratiquants s’échauffent à la corde dans un espace du réseau Boxing Center équipé d’une cage.',
    'Préparation physique dans le réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Visible watermark. Source photograph reused from the Boxing Center network; no Minimes location claim.' },
  ),
  team: entry(
    'cours-collectif', '../club-de-boxe-blagnac/public/images/cours-collectif-sacs-1600.webp', 1600, 1067,
    'Des pratiquants s’entraînent ensemble dans un espace équipé de sacs de frappe.',
    'Cours collectif dans le réseau Boxing Center.', 'Axel Derewiany',
    { evidence: 'Older registry: BC-063, visible watermark, room unspecified.' },
  ),
  event: entry(
    'fight-event-4', 'Fight Event 4 - Jefferson Vargas vs Valentin Guth-1-001.zip#Fight Event 4 - Jefferson Vargas vs Valentin Guth/DSC_6958-3.jpg', 4784, 3194,
    'Deux boxeurs en compétition sur un ring, sous les projecteurs de Fight Event 4.',
    'Fight Event 4 — Jefferson Vargas face à Valentin Guth. Archive fournie par le club.', 'B.M Photographie',
    {
      sourceArchive: 'Fight Event 4 - Jefferson Vargas vs Valentin Guth-1-001.zip',
      sourceEntry: 'Fight Event 4 - Jefferson Vargas vs Valentin Guth/DSC_6958-3.jpg',
      evidence: 'Visible B.M Photographie watermark retained. EXIF artist/copyright absent; no full photographer name inferred.',
      provenance: 'Photographie de Fight Event 4 ; ne représente pas une séance ou la salle de Blagnac.',
    },
  ),
};

export default photos;

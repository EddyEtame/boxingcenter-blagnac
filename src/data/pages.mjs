import { CLUB, MMA_CLUB } from './site.mjs';

/**
 * Nine editorial destinations, each answering a different visitor question.
 * Titles and meta descriptions of the five discipline pages are the ones the brief
 * recommends (§17), reproduced verbatim. Every page carries its own search phrases
 * from brief §3 in visible text, checked at build (src/data/search-intents.mjs).
 * Voice: tutoiement, decided by Eddy on 4 October 2026 (respectful, concrete).
 * Verified facts and their limits are documented in docs/FACTS.md.
 * Commercial links stay on the official club sites.
 */
const trialCta = { ctaLabel: `Réserver ma séance d’essai · ${CLUB.trialPrice}`, ctaUrl: CLUB.trial };

export const pages = [
  {
    slug: 'club-boxe-blagnac',
    title: 'Club de boxe proche Blagnac — Salle de boxe Minimes',
    description: 'Salle de boxe proche Blagnac : Boxing Center Toulouse Minimes accueille les pratiquants de Blagnac. Cours encadrés, coachs diplômés, débutants bienvenus.',
    eyebrow: 'Le club · Toulouse Minimes',
    headline: ['Club de boxe', 'proche de Blagnac.'],
    context: 'Boxing Center Toulouse Minimes · pour les habitants de Blagnac',
    intro: 'Tu habites Blagnac et tu cherches un club de boxe à proximité ? Boxing Center Toulouse Minimes accueille les pratiquants de Blagnac qui veulent apprendre la boxe, progresser, se défouler ou reprendre une activité sportive dans un cadre sérieux. Le club propose des cours encadrés, une ambiance accessible et un accompagnement adapté aux débutants comme aux confirmés.',
    image: 'clubView',
    sections: [
      {
        title: 'Salle de boxe Blagnac : la réponse s’appelle Toulouse Minimes.',
        text: 'Club de boxe proche Blagnac, salle de boxe proche Blagnac, cours de boxe Blagnac : quel que soit le mot que tu as tapé, la réponse Boxing Center est la même. Le club n’est pas dans Blagnac même : il accueille les habitants de Blagnac dans sa salle de Toulouse Minimes, 12 rue de Fenouillet, à trois minutes à pied du métro B Barrière de Paris. Une vraie salle de boxe : plusieurs rings, douze sacs, un étage de préparation physique, ouverte du lundi au samedi de 10h à 21h30.',
      },
      {
        title: 'Des cours encadrés par des coachs diplômés.',
        text: 'Les cours sont encadrés par des coachs diplômés d’État et licenciés FFBoxe : un coach par cours, des consignes, des corrections, une progression suivie. Débutant ou confirmé, tu y trouves ta place, et l’accès libre te permet ensuite de reprendre ton travail en autonomie. Pour découvrir la boxe, commence par un cours encadré.',
      },
      {
        title: 'Loisir, enfants, femmes, compétition si tu le veux.',
        text: 'Boxe anglaise loisir, Boxing Camp, Boxing Lady, école de boxe pour les enfants et les ados, pieds-poings : chacun choisit sa pratique, et un seul abonnement ouvre les cinq clubs du réseau. Apprendre à boxer ne t’oblige pas à viser la compétition ; elle reste un choix, jamais une condition.',
      },
    ],
    facts: [
      { label: 'Le club', value: 'Boxing Center Toulouse Minimes' },
      { label: 'L’adresse', value: '12 rue de Fenouillet, 31200 Toulouse' },
      { label: 'Depuis Blagnac', value: 'Métro B · Barrière de Paris à 3 min' },
    ],
    faqs: [
      {
        question: 'Le club de boxe est-il à Blagnac ?',
        answer: 'Il est à Toulouse Minimes, 12 rue de Fenouillet, 31200 Toulouse, à trois minutes à pied du métro B Barrière de Paris. Boxing Center y accueille les habitants de Blagnac : c’est le club de boxe proche de Blagnac que ce site présente.',
      },
      {
        question: 'Je peux venir sans avoir jamais boxé ?',
        answer: 'Oui. Le club accueille les débutants : le premier cours commence par l’échauffement, la garde et le direct, avec un coach qui te corrige dès la première séance. Personne ne monte sur le ring sans l’avoir demandé.',
      },
      {
        question: 'Où vérifier les cours, les tarifs et réserver une séance d’essai ?',
        answer: `Sur boxe-toulouse.com, le site officiel de Boxing Center Toulouse Minimes : activités, plannings, tarifs et réservation de la première séance (${CLUB.trialPrice}) y sont à jour.`,
      },
    ],
    ctaLabel: 'Voir le club proche de Blagnac',
    ctaUrl: `${CLUB.url}le-club/`,
    related: ['boxe-anglaise-blagnac', 'plannings', 'contact'],
    sources: [CLUB.url, `${CLUB.url}le-club/`, CLUB.activities, CLUB.trial],
  },
  {
    slug: 'boxe-anglaise-blagnac',
    title: 'Boxe anglaise Blagnac — Cours de boxe proche Blagnac',
    description: 'Apprenez la boxe anglaise près de Blagnac avec Boxing Center Toulouse Minimes. Cours encadrés pour débutants, loisirs, femmes et confirmés.',
    eyebrow: 'La discipline · Boxe anglaise',
    headline: ['Boxe anglaise', 'près de Blagnac.'],
    context: 'Boxing Center Toulouse Minimes · pour les habitants de Blagnac',
    intro: 'Boxe anglaise Blagnac : les cours ont lieu chez Boxing Center Toulouse Minimes, le club du réseau qui accueille les habitants de Blagnac. Garde, appuis, déplacements, jab : tu apprends les gestes avec un coach, en loisir, sans objectif de compétition imposé. Débutants, adolescents, adultes et femmes y sont les bienvenus.',
    image: 'boxingView',
    sections: [
      {
        title: 'Le geste avant la puissance.',
        text: 'La boxe anglaise se pratique avec les poings. Mais un direct commence dans les appuis, et une défense commence par le placement. Le travail technique, les sacs et les pattes d’ours servent à construire ces repères, avec les corrections du coach, séance après séance.',
      },
      {
        title: 'Progresser sérieusement, sans obligation de compétition.',
        text: 'Tu peux venir pour apprendre, te dépenser et gagner en précision. Aux Minimes, la boxe anglaise loisir a ses propres créneaux, le midi et le soir en semaine, distincts du cours compétiteurs. Choisis d’abord la pratique que tu veux suivre ; l’envie de compétition peut venir plus tard, ou jamais.',
      },
      {
        title: 'Le premier cours se prépare simplement.',
        text: `Une tenue de sport, des chaussures propres et une bouteille d’eau : c’est tout. Gants et protections sont prêtés pendant l’essai à ${CLUB.trialPrice}, et il n’y a ni dossier ni certificat médical à fournir avant d’avoir essayé. Dis au coach que tu débutes : il place tes pieds, tes poings et ta garde dès la première séance.`,
      },
    ],
    facts: [
      { label: 'La pratique', value: 'Poings, garde et déplacements' },
      { label: 'Ton entrée', value: 'Boxe anglaise loisir, midi et soir' },
      { label: 'L’encadrement', value: 'Un coach diplômé pendant le cours' },
    ],
    faqs: [
      {
        question: 'Faut-il une expérience pour commencer la boxe anglaise ?',
        answer: 'Non. Les cours loisirs accueillent les débutants : tu peux découvrir la boxe anglaise sans connaître les gestes ni avoir déjà porté des gants. Le coach reprend un geste à la fois.',
      },
      {
        question: 'Est-on obligé de faire du sparring ?',
        answer: 'Non. L’opposition se demande, elle ne s’impose pas : personne ne monte sur le ring sans l’avoir voulu. Le sparring est réservé aux licenciés du cours compétiteurs.',
      },
      {
        question: 'Où choisir son premier créneau depuis Blagnac ?',
        answer: 'Sur le planning officiel de Toulouse Minimes : repère « Boxe anglaise (loisirs) », le midi ou le soir en semaine, puis réserve ta séance d’essai sur la page Première séance.',
      },
    ],
    ...trialCta,
    related: ['boxe-fitness-blagnac', 'plannings', 'tarifs'],
    sources: [CLUB.activities, CLUB.trial],
  },
  {
    slug: 'mma-blagnac',
    title: 'Club MMA Blagnac — Cours de MMA proche Blagnac',
    description: 'Découvrez les cours de MMA proches de Blagnac avec Boxing Center. Encadrement sérieux, cours progressifs et pratique adaptée aux débutants comme aux confirmés.',
    eyebrow: 'La discipline · MMA',
    headline: ['Club MMA', 'près de Blagnac.'],
    context: 'Boxing Center Toulouse États-Unis · pour les habitants de Blagnac',
    intro: `Club MMA Blagnac : chez Boxing Center, le MMA se pratique à la salle de Toulouse États-Unis, ${MMA_CLUB.address.replace(', 31200 Toulouse', '')}, au nord de Toulouse. Cage officielle, grappling, jiu-jitsu brésilien, boxe et préparation physique dans le même club, avec un coach qualifié pour chaque discipline et des cours ouverts aux débutants.`,
    image: 'mmaView',
    sections: [
      {
        title: 'Découvrir le MMA : debout, au sol, et tout ce qui relie les deux.',
        text: 'Le MMA associe le travail debout (percussion : poings, pieds) et le travail au sol (contrôles, projections, soumissions). Un cours de découverte te fait passer par les deux, à un rythme adapté aux débutants, avant d’approfondir ce qui t’attire.',
      },
      {
        title: 'Grappling, JJB, préparation physique : un club, toutes les pièces.',
        text: `La salle Boxing Center Toulouse États-Unis réunit une cage officielle, des cours de grappling et de jiu-jitsu brésilien, la boxe et un espace de préparation physique, dans ${MMA_CLUB.surface}. Le même abonnement ouvre les cinq clubs du réseau, dont Toulouse Minimes pour la boxe anglaise.`,
      },
      {
        title: 'Une progression adaptée, un encadrement qualifié.',
        text: 'Chaque discipline a son coach diplômé et spécialisé. Tu commences par un cours accessible, tu dis ce que tu veux apprendre, et la progression suit ton niveau : apprendre le contrôle au sol, commencer par les frappes, ou découvrir le MMA complet. La séance d’essai se réserve en ligne.',
      },
    ],
    facts: [
      { label: 'Le club MMA', value: MMA_CLUB.name },
      { label: 'L’adresse', value: MMA_CLUB.address },
      { label: 'Au programme', value: 'MMA, grappling, JJB, boxe, préparation physique' },
    ],
    faqs: [
      {
        question: 'Où pratiquer le MMA près de Blagnac avec Boxing Center ?',
        answer: `À la salle Boxing Center Toulouse États-Unis, ${MMA_CLUB.address} : cage officielle, grappling, jiu-jitsu brésilien et cours de MMA, y compris pour les jeunes. Le club de Toulouse Minimes, lui, est consacré à la boxe anglaise, au pieds-poings et aux formats fitness.`,
      },
      {
        question: 'Le MMA est-il accessible aux débutants ?',
        answer: 'Oui. Les cours accueillent les débutants : tu commences par les bases debout et au sol, sans combat imposé. Précise ton niveau et tes envies au coach lors de la première séance.',
      },
      {
        question: 'Quelle différence entre MMA, grappling et JJB ?',
        answer: 'Le MMA mêle percussion et combat au sol. Le grappling travaille les contrôles et les soumissions sans frappes. Le jiu-jitsu brésilien approfondit le sol, souvent en kimono. Les trois se pratiquent à Toulouse États-Unis ; choisis le cours qui correspond à l’expérience que tu cherches.',
      },
    ],
    ctaLabel: 'Découvrir le club MMA Boxing Center',
    ctaUrl: MMA_CLUB.url,
    secondary: { label: 'Poser ma question à Toulouse Minimes', url: '/contact/#formulaire' },
    related: ['boxe-anglaise-blagnac', 'club-boxe-blagnac', 'contact'],
    sources: [MMA_CLUB.url, CLUB.activities, CLUB.contact],
  },
  {
    slug: 'boxe-fitness-blagnac',
    title: 'Boxe Fitness Blagnac — Boxing Fitness proche Blagnac',
    description: 'Boxing fitness près de Blagnac : Boxing Camp encadré et cardio boxing sans contact à Boxing Center Toulouse Minimes. Se défouler, retrouver la forme, sans combat.',
    eyebrow: 'Ton énergie · Boxing fitness',
    headline: ['Boxe fitness', 'près de Blagnac.'],
    context: 'Boxing Center Toulouse Minimes · pour les habitants de Blagnac',
    intro: 'Boxe fitness Blagnac ou boxing fitness Blagnac : quel que soit le nom que tu cherches, la pratique se trouve chez Boxing Center Toulouse Minimes. Deux formats : le Boxing Camp, un cours collectif encadré au rythme soutenu, et le cardio boxing sans contact sur les sacs, en accès libre. Pour te défouler, améliorer ton cardio et te remettre en forme, sans combat.',
    image: 'fitnessView',
    sections: [
      {
        title: 'Le Boxing Camp : un cours encadré, une ambiance dynamique.',
        text: 'Plusieurs rendez-vous par semaine, le midi, le soir et le samedi matin : le Boxing Camp enchaîne exercices physiques et mouvements de boxe, avec un coach qui donne le rythme. Il s’adresse aux adultes sans aucun bagage technique. Tu viens pour transpirer, tu repars avec la sensation d’avoir vraiment travaillé.',
      },
      {
        title: 'Le cardio boxing : tout le geste, aucun coup reçu.',
        text: 'Tu frappes le sac, personne ne te frappe. Le cardio boxing sans contact donne tout le geste et toute la sueur de la boxe, sans combat ni opposition. Il se pratique en accès libre, dès que la salle est ouverte : tu organises ta séance à ton rythme.',
      },
      {
        title: 'Reprise sportive, remise en forme, premiers gestes de boxe.',
        text: 'Débutant, femme, adulte en reprise ou personne qui ne veut pas de compétition : commence par ce qui te motive. Si la technique t’attire ensuite, la boxe anglaise loisir t’attend dans la même salle, avec le même abonnement.',
      },
    ],
    facts: [
      { label: 'Cours encadré', value: 'Boxing Camp, plusieurs créneaux par semaine' },
      { label: 'En autonomie', value: 'Cardio boxing sans contact, en accès libre' },
      { label: 'Pour qui', value: 'Débutants, reprise sportive, sans compétition' },
    ],
    faqs: [
      {
        question: 'Faut-il savoir boxer pour le Boxing Camp ?',
        answer: 'Non. Le Boxing Camp ne demande aucune technique préalable : c’est un circuit de préparation physique autour des gestes de boxe, encadré par un coach. Viens en tenue de sport, le reste est prêté.',
      },
      {
        question: 'Peut-on faire du boxing fitness sans combat ?',
        answer: 'Oui. Le cardio boxing se pratique sans contact, sur les sacs, et le Boxing Camp ne comporte pas d’opposition. Tu travailles le cardio et le geste, jamais contre quelqu’un.',
      },
      {
        question: 'Quel format choisir pour retrouver la forme ?',
        answer: `Pour être guidé et porté par un groupe, le Boxing Camp. Pour organiser toi-même tes séances, le cardio boxing en accès libre. Les deux sont compris dans l’abonnement, et la séance d’essai à ${CLUB.trialPrice} permet de tester.`,
      },
    ],
    ...trialCta,
    related: ['boxe-anglaise-blagnac', 'boxe-femme-blagnac', 'plannings'],
    sources: [CLUB.activities, CLUB.planning, CLUB.trial],
  },
  {
    slug: 'boxe-enfants-blagnac',
    title: 'Boxe enfants Blagnac — Cours de boxe éducative proche Blagnac',
    description: 'Des cours de boxe enfants près de Blagnac dans un cadre éducatif, sécurisé et encadré. Baby Boxe, enfants, ados et pratique loisir.',
    eyebrow: 'L’école · Enfants et adolescents',
    headline: ['Boxe enfants', 'près de Blagnac.'],
    context: 'L’école de boxe de Toulouse Minimes · pour les enfants de Blagnac',
    intro: 'Boxe enfants Blagnac : l’école de boxe Boxing Center Toulouse Minimes accueille les enfants de Blagnac dès 3 ans, le mercredi et le samedi. Baby Boxe, boxe éducative, cours ados : un cadre sécurisé et encadré où l’on apprend la discipline, le respect, la coordination et la maîtrise de soi, et où la compétition n’est jamais obligatoire.',
    image: 'kidsView',
    sections: [
      {
        title: 'La boxe éducative : on touche, on ne frappe pas.',
        text: 'La règle de la boxe éducative est fédérale et stricte : l’opposition se fait en touche contrôlée, casque et gants fournis. Ton enfant apprend à écouter une consigne, à contrôler un geste et à respecter son partenaire. Il arrive en courant partout, il repart en marchant droit.',
      },
      {
        title: 'Confiance en soi, coordination, maîtrise de soi.',
        text: 'Déplacements, garde, enchaînements : la coordination se construit séance après séance. La confiance en soi vient avec les progrès, la maîtrise de soi avec les règles. Un coach encadre chaque groupe et adapte le cours à l’âge : Baby Boxe de 3 à 6 ans, enfants, adolescents.',
      },
      {
        title: 'Le loisir est un parcours à part entière.',
        text: 'Ton enfant peut pratiquer uniquement en loisir, progresser à son rythme et découvrir la boxe dans un cadre sérieux, éducatif et encadré. La compétition reste un choix de l’enfant et de ses parents ; elle n’est jamais une condition pour entrer à l’école de boxe.',
      },
    ],
    facts: [
      { label: 'L’école', value: 'Baby Boxe dès 3 ans, enfants, ados' },
      { label: 'Les jours', value: 'Mercredi et samedi' },
      { label: 'La compétition', value: 'Jamais obligatoire' },
    ],
    faqs: [
      {
        question: 'À partir de quel âge mon enfant peut-il commencer ?',
        answer: 'Dès 3 ans avec la Baby Boxe, puis les groupes enfants et adolescents. Donne son âge et son expérience au club : il t’indique le groupe et le créneau du mercredi ou du samedi.',
      },
      {
        question: 'Mon enfant devra-t-il faire de la compétition ?',
        answer: 'Non. La compétition est facultative : les enfants peuvent pratiquer uniquement en loisir et progresser à leur rythme. L’engagement en compétition, s’il vient un jour, vient de l’enfant et de ses parents.',
      },
      {
        question: 'Que prévoir pour une première séance ?',
        answer: `Une tenue de sport, des chaussures propres et de l’eau. Gants et protections sont fournis pour l’essai à ${CLUB.trialPrice}. Vérifie le groupe et le créneau sur le planning officiel avant de venir depuis Blagnac.`,
      },
    ],
    ctaLabel: 'Trouver le groupe de mon enfant',
    ctaUrl: '/contact/#formulaire',
    secondary: { label: 'Voir le planning de l’école', url: CLUB.planning },
    related: ['plannings', 'tarifs', 'contact'],
    sources: [CLUB.activities, CLUB.planning, 'https://boxingcenter.fr/'],
  },
  {
    slug: 'boxe-femme-blagnac',
    title: 'Boxe femme Blagnac — Cours de boxe féminine proche Blagnac',
    description: 'Cours de boxe femme près de Blagnac avec Boxing Center. Débutantes bienvenues, boxe loisir, remise en forme, confiance et encadrement sérieux.',
    eyebrow: 'Ta pratique · Boxe femme',
    headline: ['Boxe femme', 'près de Blagnac.'],
    context: 'Boxing Center Toulouse Minimes · pour les habitantes de Blagnac',
    intro: 'Boxe femme Blagnac : chez Boxing Center Toulouse Minimes, le Boxing Lady est un cours 100 % féminin, deux soirs par semaine, et tous les autres cours te sont ouverts. Boxe féminine en loisir, remise en forme, cardio, confiance en soi, dépassement de soi : tu peux débuter sans aucune expérience et progresser dans un cadre accessible et encadré.',
    image: 'womenView',
    sections: [
      {
        title: 'Le Boxing Lady, entre femmes.',
        text: 'Deux soirs par semaine, un cours réservé aux femmes de tous âges et de tous niveaux : cardio, technique, travail au sac et aux pattes d’ours. C’est le contenu d’un vrai cours de boxe, pas une version allégée. Beaucoup arrivent pour la remise en forme et restent pour la technique.',
      },
      {
        title: 'Cardio, confiance, dépassement de soi.',
        text: 'Le sac prend tout, et tu gagnes en souffle, en précision et en assurance séance après séance. Aucune opposition n’est obligatoire : tu décides si et quand tu veux un échange. Le même abonnement ouvre aussi la boxe anglaise loisir et le Boxing Camp.',
      },
      {
        title: 'Débuter sans expérience, dans un cadre encadré.',
        text: 'Dis au coach que tu découvres la boxe : il reprend la garde, le direct et le déplacement avec toi. Gants et protections sont prêtés pour la première séance, il n’y a rien à acheter pour venir voir. Une tenue de sport, des chaussures propres, de l’eau : tu es prête.',
      },
    ],
    facts: [
      { label: 'Entre femmes', value: 'Boxing Lady, deux soirs par semaine' },
      { label: 'Aussi ouverts', value: 'Tous les cours mixtes du club' },
      { label: 'Pour commencer', value: 'Débutantes bienvenues, matériel prêté' },
    ],
    faqs: [
      {
        question: 'Y a-t-il un cours de boxe réservé aux femmes ?',
        answer: 'Oui, le Boxing Lady de Toulouse Minimes, deux soirs par semaine, réservé aux femmes. Consulte le planning officiel pour les créneaux de la saison.',
      },
      {
        question: 'Je peux choisir un cours mixte ?',
        answer: 'Oui. Les autres disciplines du club restent ouvertes aux femmes : boxe anglaise loisir, Boxing Camp, cardio boxing. Le choix dépend de ton objectif et de l’ambiance que tu préfères.',
      },
      {
        question: 'Faut-il déjà être sportive ou savoir boxer ?',
        answer: 'Non. Le club accueille les débutantes complètes : ni condition physique, ni technique, ni matériel ne sont demandés pour la première séance. Tu viens en tenue de sport, on te prête le reste.',
      },
    ],
    ...trialCta,
    related: ['boxe-anglaise-blagnac', 'boxe-fitness-blagnac', 'plannings'],
    sources: [CLUB.activities, CLUB.trial],
  },
  {
    slug: 'plannings',
    title: 'Plannings des cours de boxe Blagnac — Toulouse Minimes',
    description: 'Les plannings des cours de boxe pour les habitants de Blagnac sont sur le site de Boxing Center Toulouse Minimes : anglaise, Boxing Lady, Boxing Camp, enfants.',
    eyebrow: 'Ta semaine · Plannings',
    headline: ['Les plannings.', 'Aux Minimes.'],
    context: 'Cours de boxe Blagnac · le planning officiel est sur boxe-toulouse.com',
    intro: 'Les plannings des cours Boxing Center proches de Blagnac sont disponibles sur le site du club Boxing Center Toulouse Minimes. Retrouve ta discipline, ton groupe et les horaires de la saison avant de prévoir ta venue.',
    image: 'boxing',
    sections: [
      {
        title: 'Commencer par le nom du cours.',
        text: 'Anglaise loisirs, Boxing Lady, Boxing Camp, pieds-poings ou école de boxe : le planning précise ce qui se pratique à chaque créneau. Pour un enfant, regarde aussi le groupe indiqué. Pour un premier cours, lis la page Première séance.',
      },
      {
        title: 'L’ouverture de la salle n’est pas un horaire de cours.',
        text: 'Le planning distingue les cours avec un coach et les périodes d’accès libre. Une salle ouverte ne signifie pas qu’un cours collectif commence. Cette différence compte si tu viens pour être guidé dès le premier entraînement.',
      },
      {
        title: 'Garder le planning officiel comme repère.',
        text: 'Les horaires évoluent au fil de la saison. Consulte la version publiée par les Minimes avant ton déplacement et appelle le club si ton sport ou ton groupe demande une précision.',
      },
    ],
    facts: [
      { label: 'Le planning', value: 'Publié par Toulouse Minimes' },
      { label: 'À distinguer', value: 'Cours et accès libre' },
      { label: 'Avant le trajet', value: 'Vérifier le créneau de la saison' },
    ],
    faqs: [
      {
        question: 'Où trouver le planning à jour ?',
        answer: 'Sur la page Plannings du site boxe-toulouse.com. Elle présente les cours de Toulouse Minimes et constitue le repère à consulter avant de venir.',
      },
      {
        question: 'Je peux venir à n’importe quelle heure pour un cours ?',
        answer: `Les cours ont des créneaux précis, le midi et le soir en semaine, le samedi pour l’école de boxe et le Boxing Camp. L’accès libre aux sacs et au cross training est possible dès que la salle est ouverte, ${CLUB.hours}.`,
      },
      {
        question: 'Où choisir un créneau pour débuter ?',
        answer: 'Lis la page Première séance, puis le planning des Minimes. En cas de doute sur le groupe ou la discipline, appelle le club avant ta venue.',
      },
    ],
    ctaLabel: 'Voir les plannings',
    ctaUrl: CLUB.planning,
    related: ['boxe-anglaise-blagnac', 'boxe-enfants-blagnac', 'contact'],
    sources: [CLUB.planning, CLUB.trial],
  },
  {
    slug: 'tarifs',
    title: 'Tarifs boxe Blagnac — Boxing Center Toulouse Minimes',
    description: 'Les tarifs et abonnements Boxing Center pour les pratiquants de Blagnac sont sur le site de Toulouse Minimes : séance d’essai, formules adultes, école de boxe.',
    eyebrow: 'Ton choix · Tarifs',
    headline: ['Les tarifs.', 'Aux Minimes.'],
    context: 'Boxe Blagnac · les montants de la saison sont sur boxe-toulouse.com',
    intro: `Les tarifs et offres d’abonnement Boxing Center pour les pratiquants de Blagnac sont disponibles sur le site du club Boxing Center Toulouse Minimes. La séance d’essai est à ${CLUB.trialPrice}, gants et protections prêtés, sans engagement. Abonnements adultes et école de boxe : les montants et les conditions de la saison sont sur la page Tarifs du club.`,
    image: 'ring',
    sections: [
      {
        title: 'L’essai répond à une première question.',
        text: `Le cours te plaît ? Avant de choisir un abonnement, la page Première séance présente le déroulé de l’essai à ${CLUB.trialPrice} et le matériel prêté. C’est le bon point de départ pour découvrir le club.`,
      },
      {
        title: 'Une formule se lit avec ses conditions.',
        text: 'Regarde la durée, la périodicité du paiement, les accès inclus et les modalités d’arrêt. Pour une offre promotionnelle, vérifie aussi ce qui se passe ensuite. La page Tarifs des Minimes rassemble les formules de la saison.',
      },
      {
        title: 'Pour un enfant, partir du groupe.',
        text: 'Les formules de l’école se distinguent des abonnements adultes. Une fois le groupe identifié, consulte les conditions qui lui correspondent et demande au club ce qu’il faut prévoir pour l’inscription.',
      },
    ],
    facts: [
      { label: 'Découvrir', value: `La séance d’essai, ${CLUB.trialPrice}` },
      { label: 'Comparer', value: 'Durée, paiement et accès' },
      { label: 'Le prix de la saison', value: 'Sur le site des Minimes' },
    ],
    faqs: [
      {
        question: 'Où consulter les prix de la saison ?',
        answer: 'Sur la page Tarifs de Boxing Center Toulouse Minimes : séance d’essai, formules adultes et école de boxe y sont présentées avec leurs conditions. Compare la durée, le paiement et les accès inclus.',
      },
      {
        question: 'La séance d’essai engage-t-elle sur un abonnement ?',
        answer: `Non. La séance d’essai est à ${CLUB.trialPrice}, sans engagement : tu paies ta séance, tu boxes, tu décides après. Rien à signer, pas de dossier.`,
      },
      {
        question: 'Les formules sont-elles valables dans les autres salles Boxing Center ?',
        answer: 'La formule saison ouvre l’accès libre aux cinq clubs du réseau, dont la salle MMA de Toulouse États-Unis. Le détail est sur la page Tarifs des Minimes.',
      },
    ],
    ctaLabel: 'Voir les tarifs',
    ctaUrl: CLUB.prices,
    related: ['plannings', 'boxe-enfants-blagnac', 'contact'],
    sources: [CLUB.prices, CLUB.trial],
  },
  {
    slug: 'contact',
    title: 'Contact — Club de boxe proche de Blagnac | Toulouse Minimes',
    description: `Contactez Boxing Center Toulouse Minimes, le club de boxe proche de Blagnac : ${CLUB.address}, ${CLUB.phone}. Plannings, tarifs, essai.`,
    eyebrow: 'Ta venue · Contact et accès',
    headline: ['Depuis Blagnac.', 'Aux Minimes.'],
    context: 'Boxing Center Toulouse Minimes · un coach te répond',
    intro: `Pour la boxe près de Blagnac, ton interlocuteur est Boxing Center Toulouse Minimes, ${CLUB.address}. Un coach répond au ${CLUB.phone}, ${CLUB.hours}, pour une question sur un créneau, un niveau ou l’inscription d’un enfant. Tu peux aussi écrire au club depuis cette page.`,
    image: 'team',
    sections: [
      {
        title: 'Ta question, avec les bons repères.',
        text: 'Indique la pratique recherchée, ton expérience et les périodes auxquelles tu peux venir. Pour un enfant, ajoute son âge. Ces informations permettent de discuter d’un cours précis, plutôt que de choisir au hasard dans le planning.',
      },
      {
        title: 'Un trajet depuis ton point de départ.',
        text: `Le lieu d’entraînement est à Toulouse Minimes, ${CLUB.transit}. En voiture, utilise l’adresse du club comme destination et ton adresse réelle comme départ : le bouton « Préparer mon trajet » ouvre l’itinéraire.`,
      },
      {
        title: 'Avant de pousser la porte.',
        text: `Lis la page Première séance : le déroulé, la tenue et le prêt de matériel y sont expliqués. Pour une question particulière, appelle directement le club au ${CLUB.phone}.`,
      },
    ],
    facts: [
      { label: 'La salle', value: 'Toulouse Minimes' },
      { label: 'L’adresse', value: CLUB.address },
      { label: 'Le téléphone', value: CLUB.phone },
    ],
    faqs: [
      {
        question: 'L’entraînement a-t-il lieu à Blagnac ?',
        answer: `Il a lieu à Toulouse Minimes, ${CLUB.address}, ${CLUB.transit}. Ce site accompagne les habitants de Blagnac vers ce club.`,
      },
      {
        question: 'Comment joindre le club ?',
        answer: `Par téléphone au ${CLUB.phone}, ${CLUB.hours} : un coach décroche. Ou par le formulaire de cette page : ta demande arrive directement au club.`,
      },
      {
        question: 'Comment se rendre au club depuis Blagnac ?',
        answer: `En voiture par la rocade, ou en transports en commun jusqu’au ${CLUB.transit} du club. Le bouton « Préparer mon trajet » ouvre l’itinéraire depuis l’adresse de ton choix.`,
      },
    ],
    ctaLabel: 'Écrire au club',
    ctaUrl: '/contact/#formulaire',
    related: ['club-boxe-blagnac', 'plannings', 'tarifs'],
    sources: [CLUB.contact, CLUB.trial],
  },
];

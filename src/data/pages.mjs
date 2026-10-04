/**
 * Nine editorial destinations, each answering a different visitor question.
 * Verified facts and their limits are documented in docs/FACTS.md.
 * Commercial links deliberately stay on the Toulouse Minimes website.
 */
export const pages = [
  {
    slug: 'club-boxe-blagnac',
    title: 'Club de boxe proche de Blagnac — Toulouse Minimes',
    description: 'Vous habitez Blagnac ? Découvrez Boxing Center Toulouse Minimes : boxe encadrée, pratique loisir et premiers pas au 12 rue de Fenouillet.',
    eyebrow: 'Le club · Toulouse Minimes',
    headline: ['Un club.', 'Votre nouveau rythme.'],
    intro: 'Un club de boxe proche de Blagnac se choisit aussi pour la façon dont on y apprend. La salle Boxing Center Toulouse Minimes réunit cours encadrés, pratique loisir et travail technique au 12 rue de Fenouillet, à Toulouse.',
    image: 'ring',
    sections: [
      {
        title: 'L’adresse fait partie du choix.',
        text: 'Votre entraînement se passe à Toulouse Minimes, au 12 rue de Fenouillet. Regardez le trajet depuis votre point de départ à Blagnac et le planning du cours qui vous intéresse : ce sont les deux repères pour trouver une pratique qui tient dans votre semaine.',
      },
      {
        title: 'Un cours pour apprendre. Des espaces pour travailler.',
        text: 'Les cours sont encadrés par des coachs diplômés. Les consignes, les corrections et la progression s’adaptent aux débutants comme aux pratiquants confirmés. L’accès libre permet ensuite de reprendre son travail en autonomie. Pour découvrir la boxe, commencez par un cours encadré.',
      },
      {
        title: 'Le loisir a toute sa place.',
        text: 'Apprendre à boxer ne vous oblige pas à viser la compétition. La boxe anglaise loisir, le Boxing Lady et le Boxing Camp répondent à des envies différentes. Le programme des Minimes permet de comprendre ce qui les distingue avant de choisir.',
      },
    ],
    facts: [
      { label: 'Le club', value: 'Toulouse Minimes' },
      { label: 'L’adresse', value: '12 rue de Fenouillet' },
      { label: 'Votre repère', value: 'Un cours encadré pour commencer' },
    ],
    faqs: [
      {
        question: 'Où se trouve le club pour les habitants de Blagnac ?',
        answer: 'Boxing Center Toulouse Minimes se trouve au 12 rue de Fenouillet, 31200 Toulouse. Ce site s’adresse aux habitants de Blagnac et les accompagne vers ce club toulousain.',
      },
      {
        question: 'Peut-on venir sans avoir déjà boxé ?',
        answer: 'Oui. Le club accueille les débutants. Consultez les disciplines et le déroulé de la première séance pour choisir une entrée adaptée à votre envie.',
      },
      {
        question: 'Où vérifier les cours et les conditions d’inscription ?',
        answer: 'Sur boxe-toulouse.com : le site des Minimes réunit les activités, les plannings, les tarifs et les informations de contact.',
      },
    ],
    ctaLabel: 'Découvrir le club des Minimes',
    ctaUrl: 'https://boxe-toulouse.com/le-club/',
    related: ['boxe-anglaise-blagnac', 'plannings', 'contact'],
    sources: ['https://boxe-toulouse.com/', 'https://boxe-toulouse.com/activites/', 'https://boxe-toulouse.com/contact/'],
  },
  {
    slug: 'boxe-anglaise-blagnac',
    title: 'Boxe anglaise près de Blagnac — Débuter et progresser',
    description: 'Apprendre la boxe anglaise près de Blagnac : garde, déplacements et technique aux Minimes. Découvrez la pratique loisir et préparez votre première séance.',
    eyebrow: 'La discipline · Boxe anglaise',
    headline: ['Les poings.', 'Les bons appuis.'],
    intro: 'La boxe anglaise près de Blagnac se découvre chez Boxing Center Toulouse Minimes : garde, appuis et déplacements. Le cours loisir vous laisse apprendre les gestes avec un coach, sans objectif de compétition.',
    image: 'boxing',
    sections: [
      {
        title: 'Le geste avant la puissance.',
        text: 'La boxe anglaise se pratique avec les poings. Mais un direct commence dans les appuis, et une défense commence par le placement. Le travail technique, les sacs et les pattes d’ours servent à construire ces repères, avec les corrections du coach.',
      },
      {
        title: 'Loisir ou compétition : deux envies distinctes.',
        text: 'Vous pouvez venir pour apprendre, vous dépenser et gagner en précision. Le programme des Minimes distingue la boxe anglaise loisir des cours compétiteurs. Choisissez d’abord la pratique que vous voulez suivre ; l’envie de compétition peut venir plus tard, ou jamais.',
      },
      {
        title: 'Le premier cours se prépare simplement.',
        text: 'Une tenue de sport, des chaussures propres et une bouteille d’eau constituent le point de départ. Le site du club précise le prêt de matériel et le déroulé de l’essai. Lisez-le avant de venir : vous saurez quoi mettre dans le sac et à qui vous adresser.',
      },
    ],
    facts: [
      { label: 'La pratique', value: 'Poings, garde et déplacements' },
      { label: 'Votre entrée', value: 'Boxe anglaise loisir' },
      { label: 'L’encadrement', value: 'Un coach pendant le cours' },
    ],
    faqs: [
      {
        question: 'Faut-il avoir une expérience pour commencer ?',
        answer: 'Les cours loisirs accueillent les débutants. Vous pouvez découvrir la boxe anglaise sans connaître les gestes ni avoir déjà porté des gants.',
      },
      {
        question: 'Est-on obligé de faire du sparring ?',
        answer: 'Le club précise que l’opposition n’est pas imposée. Dites au coach ce que vous souhaitez découvrir et consultez les informations de première séance.',
      },
      {
        question: 'Où choisir son premier créneau depuis Blagnac ?',
        answer: 'Sur le planning officiel de Toulouse Minimes. Repérez la boxe anglaise loisirs, puis vérifiez que le trajet et l’horaire vous conviennent.',
      },
    ],
    ctaLabel: 'Préparer ma première séance',
    ctaUrl: 'https://boxe-toulouse.com/premiere-seance/',
    related: ['boxe-fitness-blagnac', 'plannings', 'tarifs'],
    sources: ['https://boxe-toulouse.com/activites/', 'https://boxe-toulouse.com/premiere-seance/'],
  },
  {
    slug: 'mma-blagnac',
    title: 'MMA près de Blagnac — Choisir son cours Boxing Center',
    description: 'Vous cherchez un cours de MMA près de Blagnac ? Précisez votre projet et contactez Boxing Center Minimes pour identifier la salle et la pratique adaptées.',
    eyebrow: 'Votre projet · MMA',
    headline: ['Debout.', 'Au sol. Ensemble.'],
    intro: 'Envie de découvrir le MMA près de Blagnac ? Percussion, contrôle et travail au sol se complètent dans une même pratique. Avec Boxing Center, construisez votre projet : les Minimes vous orientent vers le cours adapté dans le réseau.',
    image: 'mma',
    sections: [
      {
        title: 'Dire ce que vous voulez apprendre.',
        text: 'Découvrir le MMA complet, apprendre le contrôle au sol ou commencer par les frappes : ces envies ne mènent pas toujours au même cours. Indiquez votre expérience, votre objectif et vos disponibilités lorsque vous contactez le club.',
      },
      {
        title: 'Le réseau a plusieurs spécialités.',
        text: 'Le MMA figure dans les programmes Boxing Center de Toulouse États-Unis et de Ramonville. Le programme des Minimes met notamment en avant la boxe anglaise et les pieds-poings. Vérifiez la discipline et la salle concernée avant de prévoir votre déplacement.',
      },
      {
        title: 'MMA, grappling et JJB : savoir ce que l’on choisit.',
        text: 'Le MMA associe des phases de percussion et de combat au sol. Le grappling se concentre sur les contrôles et les soumissions sans frappes ; le jiu-jitsu brésilien développe le travail au sol. Le nom du cours doit correspondre à l’expérience que vous cherchez.',
      },
    ],
    facts: [
      { label: 'Votre recherche', value: 'MMA, debout et au sol' },
      { label: 'Avant de venir', value: 'Vérifier la salle et le cours' },
      { label: 'Votre contact', value: 'L’équipe des Minimes' },
    ],
    faqs: [
      {
        question: 'Comment commencer le MMA près de Blagnac ?',
        answer: 'Pour commencer le MMA près de Blagnac, contactez l’équipe de Toulouse Minimes. Les programmes du réseau présentent le MMA à Toulouse États-Unis et à Ramonville. Vérifiez avec l’équipe le lieu, le cours et le créneau adaptés à votre niveau avant votre première venue.',
      },
      {
        question: 'Quelles informations donner pour être orienté ?',
        answer: 'Précisez que vous venez de Blagnac, si vous débutez, ce que vous voulez apprendre et les périodes auxquelles vous pouvez vous entraîner. Demandez ensuite la salle et le planning correspondants.',
      },
      {
        question: 'Un cours de boxe pieds-poings est-il un cours de MMA ?',
        answer: 'Les pieds-poings portent sur le travail de percussion debout. Un cours de MMA travaille aussi les phases au sol. Vérifiez le contenu du cours plutôt que de vous fier au seul terme « sport de combat ».',
      },
    ],
    ctaLabel: 'Parler de mon projet MMA',
    ctaUrl: 'https://boxe-toulouse.com/contact/',
    related: ['boxe-anglaise-blagnac', 'club-boxe-blagnac', 'contact'],
    sources: ['https://boxe-toulouse.com/activites/', 'https://boxe-toulouse.com/plannings/', 'https://clubmma.fr/', 'https://mmatoulouse.com/activites/'],
  },
  {
    slug: 'boxe-fitness-blagnac',
    title: 'Boxing fitness près de Blagnac — Cardio et Boxing Camp',
    description: 'Boxing fitness près de Blagnac : découvrez le Boxing Camp encadré et le cardio boxing en accès libre aux Minimes. Choisissez votre façon de vous entraîner.',
    eyebrow: 'Votre énergie · Boxing fitness',
    headline: ['Du souffle.', 'Du geste. Du rythme.'],
    intro: 'Pour le boxing fitness près de Blagnac, Boxing Center Toulouse Minimes propose deux formats : le Boxing Camp, un cours encadré, et le cardio boxing, une pratique sur les sacs en accès libre. Choisissez selon votre envie d’être guidé ou de travailler en autonomie.',
    image: 'fitness',
    sections: [
      {
        title: 'Le Boxing Camp : suivre le rythme du cours.',
        text: 'Le Boxing Camp associe exercices physiques et travail autour de la boxe. Il s’adresse aux adultes sans demander de bagage technique. Pour commencer avec des consignes et un groupe, repérez ce cours sur le planning des Minimes.',
      },
      {
        title: 'Le cardio boxing : travailler en autonomie.',
        text: 'Le programme des Minimes présente le cardio boxing sans contact sur les sacs, en accès libre. Ce format vous laisse organiser votre séance. Il se distingue d’un cours collectif : si vous cherchez un coach et un déroulé guidé, demandez le créneau encadré correspondant.',
      },
      {
        title: 'Votre objectif donne la direction.',
        text: 'Reprendre une activité, se dépenser ou découvrir les gestes de boxe : commencez par ce qui vous motive. Si vous voulez surtout apprendre la technique, regardez aussi la boxe anglaise loisirs. L’équipe peut vous aider à comparer les formats.',
      },
    ],
    facts: [
      { label: 'Cours encadré', value: 'Boxing Camp' },
      { label: 'En autonomie', value: 'Cardio boxing au sac' },
      { label: 'Votre choix', value: 'Un format selon votre objectif' },
    ],
    faqs: [
      {
        question: 'Faut-il savoir boxer pour le Boxing Camp ?',
        answer: 'Le programme des Minimes le présente comme accessible sans technique préalable. Consultez le cours et demandez au club comment débuter selon votre objectif.',
      },
      {
        question: 'Le cardio boxing est-il un cours à heure fixe ?',
        answer: 'Aux Minimes, le programme consulté décrit le cardio boxing en accès libre sur les sacs. Le Boxing Camp dispose de créneaux de cours encadrés. Vérifiez ces deux formats sur le site du club.',
      },
      {
        question: 'Peut-on travailler sans opposition ?',
        answer: 'Oui, le cardio boxing est présenté sans contact. Pour un cours collectif, expliquez aussi au coach que vous cherchez à vous entraîner sans opposition et demandez le format adapté.',
      },
    ],
    ctaLabel: 'Comparer les activités des Minimes',
    ctaUrl: 'https://boxe-toulouse.com/activites/',
    related: ['boxe-anglaise-blagnac', 'boxe-femme-blagnac', 'plannings'],
    sources: ['https://boxe-toulouse.com/activites/', 'https://boxe-toulouse.com/plannings/'],
  },
  {
    slug: 'boxe-enfants-blagnac',
    title: 'Boxe enfants près de Blagnac — Baby, enfants et ados',
    description: 'Boxe enfants près de Blagnac : découvrez l’école Boxing Center Toulouse Minimes, la pratique éducative et les questions à poser avant une première séance.',
    eyebrow: 'L’école · Enfants et adolescents',
    headline: ['Apprendre.', 'Grandir. Boxer.'],
    intro: 'La boxe enfants près de Blagnac peut se découvrir à l’école Boxing Center Toulouse Minimes. Baby Boxe, éducative et adolescents : la première question est celle du groupe adapté, puis celle de l’envie de votre enfant.',
    image: 'kids',
    sections: [
      {
        title: 'Choisir un groupe, pas seulement un horaire.',
        text: 'L’école distingue la Baby Boxe, les enfants, les adolescents et les jeunes compétiteurs. Donnez l’âge et l’expérience de votre enfant au club avant de choisir un cours. Le planning officiel précise les groupes et leurs créneaux.',
      },
      {
        title: 'La boxe éducative pose des règles.',
        text: 'Écouter une consigne, contrôler un geste, respecter son partenaire : la pratique éducative associe le mouvement à un cadre. Le programme du club décrit une opposition en touche contrôlée. Demandez au coach comment cela se passe dans le groupe concerné.',
      },
      {
        title: 'Le loisir est un parcours à part entière.',
        text: 'Votre enfant peut découvrir la boxe pour le plaisir d’apprendre. Le réseau précise que la compétition reste un choix de l’enfant et de ses parents. Elle ne constitue pas une condition pour entrer à l’école de boxe.',
      },
    ],
    facts: [
      { label: 'L’école', value: 'Baby Boxe, enfants et ados' },
      { label: 'Le cadre', value: 'Boxe éducative encadrée' },
      { label: 'La compétition', value: 'Un choix, avec les parents' },
    ],
    faqs: [
      {
        question: 'Comment trouver le groupe de mon enfant ?',
        answer: 'Consultez le planning des Minimes et contactez l’équipe avec son âge et son expérience. Le club distingue plusieurs groupes ; les conditions actuelles sont précisées sur son site.',
      },
      {
        question: 'Mon enfant devra-t-il faire de la compétition ?',
        answer: 'La compétition est facultative. Le réseau Boxing Center indique que les jeunes peuvent pratiquer en loisir et que l’engagement en compétition doit venir de l’enfant et de ses parents.',
      },
      {
        question: 'Que vérifier avant une première séance ?',
        answer: 'Le groupe, le créneau, la tenue, le matériel et les modalités de l’essai. Demandez ces informations aux Minimes avant de vous déplacer depuis Blagnac.',
      },
    ],
    ctaLabel: 'Trouver le groupe de mon enfant',
    ctaUrl: 'https://boxe-toulouse.com/contact/',
    related: ['plannings', 'tarifs', 'contact'],
    sources: ['https://boxe-toulouse.com/activites/', 'https://boxe-toulouse.com/plannings/', 'https://boxingcenter.fr/'],
  },
  {
    slug: 'boxe-femme-blagnac',
    title: 'Boxe femme près de Blagnac — Boxing Lady et cours mixtes',
    description: 'Boxe femme près de Blagnac : découvrez le Boxing Lady réservé aux femmes et les cours mixtes de Toulouse Minimes. Les débutantes sont les bienvenues.',
    eyebrow: 'Votre pratique · Boxe femme',
    headline: ['Votre garde.', 'Votre façon de boxer.'],
    intro: 'Pour la boxe femme près de Blagnac, Boxing Center Toulouse Minimes propose le Boxing Lady réservé aux femmes et des cours mixtes. Les débutantes sont accueillies : choisissez le cadre qui vous donne envie de revenir.',
    image: 'women',
    sections: [
      {
        title: 'Le Boxing Lady, entre femmes.',
        text: 'Ce cours réservé aux femmes travaille la technique, les sacs et la condition physique. Vous pouvez y découvrir la boxe ou poursuivre votre pratique. Le site des Minimes détaille le cours et son planning actuel.',
      },
      {
        title: 'Les autres cours vous sont aussi ouverts.',
        text: 'Le Boxing Lady est une possibilité, pas une obligation. La boxe anglaise loisirs et le Boxing Camp peuvent répondre à d’autres envies : construire sa technique, se dépenser ou varier son entraînement. Comparez les contenus avant de choisir.',
      },
      {
        title: 'Une première séance, sans niveau à prouver.',
        text: 'Les débutantes sont accueillies au club. Dites au coach que vous découvrez la boxe et précisez votre envie de pratiquer avec ou sans opposition. Le déroulé de la première séance explique aussi le matériel prêté et la tenue à prévoir.',
      },
    ],
    facts: [
      { label: 'Entre femmes', value: 'Boxing Lady' },
      { label: 'Autre possibilité', value: 'Les cours mixtes du club' },
      { label: 'Pour commencer', value: 'Débutantes bienvenues' },
    ],
    faqs: [
      {
        question: 'Y a-t-il un cours réservé aux femmes ?',
        answer: 'Oui, le Boxing Lady des Minimes est réservé aux femmes. Consultez le planning officiel pour les créneaux actuellement proposés.',
      },
      {
        question: 'Peut-on choisir un cours mixte ?',
        answer: 'Oui. Le programme des Minimes précise que les autres disciplines restent ouvertes aux femmes. Le choix dépend de votre objectif et du type de cours que vous préférez.',
      },
      {
        question: 'Faut-il déjà être sportive ou savoir boxer ?',
        answer: 'Le club accueille les personnes sans expérience préalable. Pour votre première séance, expliquez votre niveau au coach et consultez les informations pratiques du club.',
      },
    ],
    ctaLabel: 'Découvrir le Boxing Lady',
    ctaUrl: 'https://boxe-toulouse.com/activites/',
    related: ['boxe-anglaise-blagnac', 'boxe-fitness-blagnac', 'plannings'],
    sources: ['https://boxe-toulouse.com/activites/', 'https://boxe-toulouse.com/premiere-seance/'],
  },
  {
    slug: 'plannings',
    title: 'Plannings boxe près de Blagnac — Toulouse Minimes',
    description: 'Consultez les plannings officiels de Boxing Center Toulouse Minimes. Choisissez votre discipline et votre groupe avant de prévoir votre trajet depuis Blagnac.',
    eyebrow: 'Votre semaine · Plannings',
    headline: ['Le bon cours.', 'Dans votre semaine.'],
    intro: 'Les plannings des cours de boxe proches de Blagnac sont disponibles sur le site Boxing Center Toulouse Minimes. Retrouvez votre discipline, votre groupe et les horaires actuels avant de prévoir votre venue.',
    image: 'boxing',
    sections: [
      {
        title: 'Commencer par le nom du cours.',
        text: 'Anglaise loisirs, Boxing Lady, Boxing Camp, pieds-poings ou école de boxe : le planning précise ce qui se pratique à chaque créneau. Pour un enfant, regardez aussi le groupe indiqué. Pour un premier cours, vérifiez les informations de première séance.',
      },
      {
        title: 'L’ouverture de la salle n’est pas un horaire de cours.',
        text: 'Le planning distingue les cours avec un coach et les périodes d’accès libre. Une salle ouverte ne signifie pas qu’un cours collectif commence. Cette différence compte si vous venez pour être guidé dès le premier entraînement.',
      },
      {
        title: 'Garder le planning officiel comme repère.',
        text: 'Les horaires peuvent évoluer au fil de la saison. Consultez la version publiée par les Minimes avant votre déplacement et contactez le club si votre sport ou votre groupe demande une précision.',
      },
    ],
    facts: [
      { label: 'Le planning', value: 'Publié par Toulouse Minimes' },
      { label: 'À distinguer', value: 'Cours et accès libre' },
      { label: 'Avant le trajet', value: 'Vérifier le créneau actuel' },
    ],
    faqs: [
      {
        question: 'Où trouver le planning à jour ?',
        answer: 'Sur la page Plannings du site boxe-toulouse.com. Elle présente les cours de Toulouse Minimes et constitue le repère à consulter avant de venir.',
      },
      {
        question: 'Puis-je venir à n’importe quelle heure pour un cours ?',
        answer: 'Les cours suivent des créneaux précis. Les heures d’ouverture et l’accès libre sont des informations distinctes : vérifiez le nom du cours et son horaire sur le planning.',
      },
      {
        question: 'Où choisir un créneau pour débuter ?',
        answer: 'Consultez la page Première séance, puis le planning des Minimes. En cas de doute sur le groupe ou la discipline, demandez à l’équipe avant votre venue.',
      },
    ],
    ctaLabel: 'Voir le planning actuel des Minimes',
    ctaUrl: 'https://boxe-toulouse.com/plannings/',
    related: ['boxe-anglaise-blagnac', 'boxe-enfants-blagnac', 'contact'],
    sources: ['https://boxe-toulouse.com/plannings/', 'https://boxe-toulouse.com/premiere-seance/'],
  },
  {
    slug: 'tarifs',
    title: 'Tarifs boxe près de Blagnac — Formules Toulouse Minimes',
    description: 'Comparez les tarifs actuels de Boxing Center Toulouse Minimes : essai, formules adultes et école de boxe. Retrouvez les conditions sur le site du club.',
    eyebrow: 'Votre choix · Tarifs',
    headline: ['Votre pratique.', 'Votre formule.'],
    intro: 'Les tarifs Boxing Center pour les habitants de Blagnac sont disponibles sur le site de Toulouse Minimes. Séance d’essai, abonnements adultes et école de boxe : consultez les montants et les conditions actuels du club.',
    image: 'ring',
    sections: [
      {
        title: 'L’essai répond à une première question.',
        text: 'Le cours vous plaît-il ? Avant de choisir un abonnement, la page Première séance présente le déroulé de l’essai, son tarif et le matériel prévu. C’est un bon point de départ si vous voulez découvrir le club.',
      },
      {
        title: 'Une formule se lit avec ses conditions.',
        text: 'Regardez la durée, la périodicité du paiement, les accès inclus et les modalités d’arrêt. Pour une offre promotionnelle, vérifiez aussi ce qui se passe ensuite. La page Tarifs des Minimes rassemble les formules actuellement présentées.',
      },
      {
        title: 'Pour un enfant, partir du groupe.',
        text: 'Les formules de l’école se distinguent des abonnements adultes. Une fois le groupe identifié, consultez les conditions qui lui correspondent et demandez au club ce qu’il faut prévoir pour l’inscription.',
      },
    ],
    facts: [
      { label: 'Découvrir', value: 'La séance d’essai' },
      { label: 'Comparer', value: 'Durée, paiement et accès' },
      { label: 'Le prix actuel', value: 'Sur le site des Minimes' },
    ],
    faqs: [
      {
        question: 'Où consulter les prix actuels ?',
        answer: 'La page Tarifs de Boxing Center Toulouse Minimes présente les montants et les conditions actuels. Comparez la séance d’essai, les formules adultes et l’école de boxe selon votre groupe, puis vérifiez la durée, le paiement et les accès inclus.',
      },
      {
        question: 'La séance d’essai engage-t-elle sur un abonnement ?',
        answer: 'Le site des Minimes présente la séance d’essai sans engagement. Consultez le déroulé et les modalités actuelles sur sa page Première séance.',
      },
      {
        question: 'Les tarifs enfants sont-ils les mêmes que ceux des adultes ?',
        answer: 'Le club présente des formules propres à l’école de boxe. Identifiez le groupe de votre enfant, puis consultez les conditions correspondantes auprès des Minimes.',
      },
    ],
    ctaLabel: 'Consulter les tarifs actuels',
    ctaUrl: 'https://boxe-toulouse.com/tarifs/',
    related: ['plannings', 'boxe-enfants-blagnac', 'contact'],
    sources: ['https://boxe-toulouse.com/tarifs/', 'https://boxe-toulouse.com/premiere-seance/'],
  },
  {
    slug: 'contact',
    title: 'Contact et accès depuis Blagnac — Toulouse Minimes',
    description: 'Contactez Boxing Center Toulouse Minimes et préparez votre venue depuis Blagnac. Le club se trouve au 12 rue de Fenouillet, 31200 Toulouse.',
    eyebrow: 'Votre venue · Contact et accès',
    headline: ['Depuis Blagnac.', 'Aux Minimes.'],
    intro: 'Pour votre entraînement près de Blagnac, l’interlocuteur est Boxing Center Toulouse Minimes. Le club vous accueille au 12 rue de Fenouillet, 31200 Toulouse. Son équipe répond aux questions sur les cours et la première séance.',
    image: 'team',
    sections: [
      {
        title: 'Votre question, avec les bons repères.',
        text: 'Indiquez la pratique recherchée, votre expérience et les périodes auxquelles vous pouvez venir. Pour un enfant, ajoutez son âge. Ces informations permettent de discuter d’un cours précis, plutôt que de choisir au hasard dans le planning.',
      },
      {
        title: 'Un trajet depuis votre point de départ.',
        text: 'Le lieu d’entraînement est à Toulouse Minimes. Utilisez l’adresse du club comme destination et votre adresse réelle comme départ. Le temps de trajet dépend de votre itinéraire, du transport choisi et du moment de la journée.',
      },
      {
        title: 'Avant de pousser la porte.',
        text: 'Vérifiez le cours et ses conditions sur le site des Minimes. La page Première séance explique le déroulé, la tenue et le prêt de matériel. Pour une question particulière, contactez directement le club au 05 62 24 46 82.',
      },
    ],
    facts: [
      { label: 'La salle', value: 'Toulouse Minimes' },
      { label: 'L’adresse', value: '12 rue de Fenouillet, 31200 Toulouse' },
      { label: 'Le téléphone', value: '05 62 24 46 82' },
    ],
    faqs: [
      {
        question: 'L’entraînement a-t-il lieu à Blagnac ?',
        answer: 'Le club présenté ici se trouve à Toulouse Minimes, au 12 rue de Fenouillet, 31200 Toulouse. Ce site accompagne les habitants de Blagnac vers ce lieu d’entraînement.',
      },
      {
        question: 'Comment joindre le club ?',
        answer: 'Appelez le 05 62 24 46 82 ou consultez la page Contact de boxe-toulouse.com pour les informations pratiques actuelles.',
      },
      {
        question: 'Combien de temps faut-il depuis Blagnac ?',
        answer: 'Le trajet dépend de votre point de départ, de votre mode de transport et de la circulation. Calculez votre itinéraire vers le 12 rue de Fenouillet avant de choisir votre créneau.',
      },
    ],
    ctaLabel: 'Contacter le club des Minimes',
    ctaUrl: 'https://boxe-toulouse.com/contact/',
    related: ['club-boxe-blagnac', 'plannings', 'tarifs'],
    sources: ['https://boxe-toulouse.com/contact/', 'https://boxe-toulouse.com/premiere-seance/'],
  },
];

// Vercel construit aussi des aperçus (*.vercel.app) à chaque push. S'ils sont
// indexables, ils concurrencent le domaine réel avec un contenu identique.
// La variable est lue au build : un aperçu porte son noindex de façon définitive.
const env = import.meta.env?.VERCEL_ENV ?? process.env.VERCEL_ENV;
export const isProduction = env === 'production';
export const isLocal = env === undefined;
// En local, rien n'est publié : on n'ajoute rien, pour ne pas fausser l'audit du build.
export const blockRobots = !isProduction && !isLocal;

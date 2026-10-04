import { execFileSync } from 'node:child_process';

const cache = new Map();
// Seulement une date de commit des sources de contenu, jamais l'heure du build.
// Sans historique Git disponible (certains hébergements), la date est omise.
export function lastModified(slug) {
  if (cache.has(slug)) return cache.get(slug);
  const sources = ['src/layouts/Base.astro', 'src/data/site.mjs', 'src/data/seo.mjs', 'src/data/photos.mjs', 'src/components/FAQ.astro', 'src/components/Sources.astro'];
  if (!slug) sources.push('src/pages/index.astro', 'src/components/SessionCard.astro');
  else if (slug === 'confidentialite') sources.push('src/pages/confidentialite.astro');
  else sources.push('src/data/pages.mjs', 'src/pages/[slug].astro', 'src/components/SessionCard.astro');
  let date;
  try {
    const value = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...sources], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    if (/^\d{4}-\d{2}-\d{2}T/.test(value)) date = value;
  } catch { /* Le contenu reste indexable sans date non prouvée. */ }
  cache.set(slug, date);
  return date;
}

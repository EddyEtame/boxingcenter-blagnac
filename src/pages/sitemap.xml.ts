import { pages } from '../data/pages.mjs';
import { SITE } from '../data/site.mjs';
import { lastModified } from '../lib/revisions.mjs';
import { photos } from '../data/photos.mjs';
import { home } from '../data/site.mjs';
import { privacy, legal, canonicalOf } from '../data/seo.mjs';
const escapeXml = (value: string) => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]!));
export function GET() {
  const entries = [home, ...pages, privacy, legal];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries.map(page => {
    const modified = lastModified(page.slug);
    // Seules les photographies effectivement visibles sur cette page sont déclarées.
    const keys = !page.slug ? ['hero','ring','event', ...['boxing','fitness','kids','women','mma']] : ['plannings','tarifs','contact','confidentialite','mentions-legales'].includes(page.slug) ? [] : [page.image];
    return `<url><loc>${escapeXml(canonicalOf(page.slug))}</loc>${modified ? `<lastmod>${modified}</lastmod>` : ''}${keys.map(key => `<image:image><image:loc>${escapeXml(`${SITE}${photos[key].variants.at(-1).src}`)}</image:loc></image:image>`).join('')}</url>`;
  }).join('\n')}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

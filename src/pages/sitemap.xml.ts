import { pages } from '../data/pages.mjs';
import { SITE } from '../data/site.mjs';
export function GET() {
  const urls = ['', ...pages.map(p => p.slug), 'confidentialite'];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(slug => `<url><loc>${SITE}/${slug ? `${slug}/` : ''}</loc></url>`).join('\n')}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

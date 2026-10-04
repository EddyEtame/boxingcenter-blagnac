import { SITE } from '../data/site.mjs';
export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

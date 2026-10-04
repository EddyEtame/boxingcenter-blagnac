import { SITE } from '../data/site.mjs';
export function GET() {
  return new Response(`# Pages publiques accessibles aux moteurs et aux robots de recherche IA.\nUser-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

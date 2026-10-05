import { SITE } from '../data/site.mjs';
import { blockRobots } from '../lib/environment.mjs';
export function GET() {
  const body = blockRobots
    ? `# Aperçu de déploiement : seul le domaine canonique est indexable.\nUser-agent: *\nDisallow: /\n`
    : `# Pages publiques accessibles aux moteurs et aux robots de recherche.\nUser-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

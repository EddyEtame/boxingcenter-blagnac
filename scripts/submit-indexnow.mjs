import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
const OUT = existsSync('.vercel/output/static') ? '.vercel/output/static' : 'dist';
import { SITE } from '../src/data/site.mjs';

// Préparation hors réseau par défaut. La soumission attend le vrai domaine publié.
const submit = process.argv.includes('--submit');
const unknown = process.argv.slice(2).filter(arg => !['--submit', '--dry-run'].includes(arg));
if (unknown.length) throw new Error(`Unknown arguments: ${unknown.join(', ')}`);
const sitemap = await readFile(`${OUT}/sitemap.xml`, 'utf8');
const key = (await readFile(`${OUT}/indexnow-key.txt`, 'utf8')).trim();
if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error('Invalid IndexNow key.');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (!urlList.length || new Set(urlList).size !== urlList.length || urlList.some(url => new URL(url).origin !== SITE))
  throw new Error('The sitemap must contain unique URLs on the canonical domain.');
const payload = { host: new URL(SITE).host, key, keyLocation: `${SITE}/indexnow-key.txt`, urlList };
if (!submit) {
  console.log(`IndexNow ready: ${urlList.length} canonical URLs on ${SITE}. No network request sent.`);
  console.log('After deployment: npm run indexnow -- --submit');
} else {
  const get = url => fetch(url, {redirect:'error', signal:AbortSignal.timeout(15000)});
  const proof = await get(payload.keyLocation);
  if (!proof.ok || (await proof.text()).trim() !== key) throw new Error('Production key is not reachable or differs. Submission stopped.');
  // Ne pas notifier un domaine garé, un ancien site, une page protégée ou noindex.
  for (const url of urlList) {
    const response = await get(url);
    if (response.status !== 200 || /noindex/i.test(response.headers.get('x-robots-tag') || '')) throw new Error(`Production page is not indexable: ${url}`);
    const html = await response.text();
    const canonical = html.match(/<link\b(?=[^>]*rel="canonical")[^>]*href="([^"]+)"/)?.[1];
    if (canonical !== url || !html.includes('data-club-prompt') || /<meta\b(?=[^>]*name="robots")(?=[^>]*content="[^"]*noindex)/i.test(html))
      throw new Error(`Production content/canonical validation failed: ${url}`);
  }
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method:'POST', headers:{'Content-Type':'application/json; charset=utf-8'},
    body:JSON.stringify(payload), signal:AbortSignal.timeout(15000),
  });
  if (response.status === 200) console.log(`IndexNow received ${urlList.length} URLs. This confirms receipt, not indexing.`);
  else if (response.status === 202) console.log('IndexNow received the URLs; key validation is pending. Indexing is not confirmed.');
  else throw new Error(`IndexNow rejected the request (HTTP ${response.status}). See https://www.indexnow.org/documentation`);
}

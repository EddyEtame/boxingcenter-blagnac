import { readFile, readdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { pages } from '../src/data/pages.mjs';
import { home, SITE, CLUB } from '../src/data/site.mjs';
import { searchIntents } from '../src/data/search-intents.mjs';
import sharp from 'sharp';
import { developer, privacy, canonicalOf, socialFor } from '../src/data/seo.mjs';
const fail = [];
const assert = (condition,message) => { if (!condition) fail.push(message); };
const records = [home, ...pages, privacy];
const machineFiles = ['humans.txt','llms.txt','llms-full.txt','sitemap.xml','robots.txt'];
const unescape = text => text.replace(/&(?:amp|quot|apos|lt|gt|#39|#x27);/g, entity => ({'&amp;':'&','&quot;':'"','&apos;':"'",'&#39;':"'",'&#x27;':"'",'&lt;':'<','&gt;':'>'}[entity]));
const plain = html => unescape(html.replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
const titles = new Set(), descriptions = new Set(), images = new Set();
const routes = new Set(records.map(p=>`/${p.slug ? `${p.slug}/` : ''}`));
for (const page of records) {
  const file = `dist/${page.slug ? `${page.slug}/` : ''}index.html`;
  const html = await readFile(file,'utf8');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const desc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)?.[1];
  assert(title && !titles.has(title),`${file}: missing or duplicate title`); titles.add(title);
  assert(desc && !descriptions.has(desc),`${file}: missing or duplicate description`); descriptions.add(desc);
  assert((html.match(/<h1(?:\s|>)/g)||[]).length===1,`${file}: exactly one H1 required`);
  const canonical = html.match(/<link\b(?=[^>]*rel="canonical")[^>]*href="([^"]+)"/)?.[1];
  assert(canonical===canonicalOf(page.slug),`${file}: canonical mismatch`);
  assert(html.includes('index, follow'),`${file}: indexability missing`);
  assert(html.includes('https://boxe-toulouse.com/'),`${file}: commercial destination missing`);
  assert(html.includes('data-club-prompt'),`${file}: persistent club access missing`);
  for(const anchor of html.matchAll(/<a\b[^>]*>/g)) {
    const href=anchor[0].match(/href="([^"]*)"/)?.[1];
    if(href && !href.startsWith('#') && !href.startsWith('tel:'))
      assert(anchor[0].includes('target="_blank"') && anchor[0].includes('noopener noreferrer'),`${file}: navigation must open a safe new tab: ${href}`);
  }
  assert(html.includes('property="og:image:alt"') && html.includes('name="twitter:image:alt"'),`${file}: social image descriptions missing`);
  assert(html.includes(`content="${socialFor(page).url}"`),`${file}: social image URL mismatch`);
  assert(html.includes(`name="author" content="${developer.name}"`) && html.includes('href="/humans.txt"'),`${file}: developer discovery missing`);
  assert(!html.includes('name="keywords"'),`${file}: keyword stuffing metadata`);
  const mainText = plain(html.match(/<main\b[^>]*>(.*?)<\/main>/s)?.[1] || '');
  assert(!mainText.includes(developer.name),`${file}: technical credit must not replace club editorial content`);
  const structured = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
  assert(structured.length>0,`${file}: JSON-LD missing`);
  for(const match of structured) {
    const graph=JSON.parse(match[1])['@graph'];
    assert(!graph.some(n=>['SportsActivityLocation','LocalBusiness','SportsClub'].includes(n['@type'])),`${file}: invented physical club entity`);
    const venue = graph.find(n => n['@type'] === 'Place');
    assert(venue?.address?.addressLocality === 'Toulouse' && venue?.address?.postalCode === '31200',`${file}: destination must be Toulouse Minimes`);
    assert(venue?.['@id']===CLUB.entityId,`${file}: venue must reference the official Minimes entity`);
    const faq=graph.find(n=>n['@type']==='FAQPage');
    const person = graph.find(n => n['@type'] === 'Person');
    assert(person?.name===developer.name && person?.['@id']===developer.id && person?.jobTitle===developer.role,`${file}: developer entity mismatch`);
    const webpage = graph.find(n => ['WebPage','ContactPage'].includes(n['@type']) && n['@id']===`${canonical}#webpage`);
    const website = graph.find(n => n['@type']==='WebSite');
    assert(webpage?.creator?.['@id']===developer.id && website?.creator?.['@id']===developer.id,`${file}: creator references mismatch`);
    if (page.faqs?.length) {
      assert(faq?.mainEntity.length===page.faqs.length,`${file}: FAQ count parity`);
      for (const [index,q] of page.faqs.entries()) {
        assert(faq?.mainEntity[index]?.name===q.question && faq?.mainEntity[index]?.acceptedAnswer?.text===q.answer,`${file}: FAQ structured answer mismatch`);
        assert(mainText.includes(q.question) && mainText.includes(q.answer),`${file}: FAQ must be visible and match schema: ${q.question}`);
        assert(html.includes(`id="question-${index+1}"`) && html.includes(`id="answer-${index+1}"`),`${file}: FAQ citation anchors missing`);
      }
    }
    for (const url of page.sources || []) {
      assert(webpage?.citation?.some(c => c.url===url),`${file}: source missing from structured citations: ${url}`);
      assert(html.includes('class="source-notes"') && html.includes(`href="${url}"`),`${file}: visible official source missing: ${url}`);
    }
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    assert(/alt=".+?"/.test(match[0]),`${file}: image alt missing`);
    assert(/width="\d+"/.test(match[0]) && /height="\d+"/.test(match[0]),`${file}: image dimensions missing`);
    const src=match[0].match(/src="([^"]+)"/)?.[1];
    if(src?.startsWith('/')) assert((await stat(`dist${src}`).catch(()=>null))?.isFile(),`${file}: missing image ${src}`);
  }
  for(const match of html.matchAll(/href="([^"#]+)(?:#[^"]*)?"/g)) {
    const href=match[1];
    if(href.startsWith('/') && !href.startsWith('//')) {
      const isFile=!!(await stat(`dist${href}`).catch(()=>null))?.isFile();
      assert(routes.has(href) || isFile || machineFiles.some(name => href===`/${name}`),`${file}: broken internal link ${href}`);
    }
  }
  assert(!/notre salle (?:à|de) Blagnac|club situé à Blagnac|adresse[^<]{0,20}31700/.test(html),`${file}: false location`);
  assert(!/Co-Authored-By|made with (?:claude|openai)|generated by|créé par (?:Claude|ChatGPT)/i.test(html),`${file}: unwanted attribution`);
  const social=await readFile(`dist/social/${page.slug || 'accueil'}.png`);
  const size = await sharp(social).metadata();
  assert(size.width===1200 && size.height===630,`${file}: OG must be 1200×630`);
  const hash=createHash('sha256').update(social).digest('hex');
  assert(!images.has(hash),`${file}: duplicate social image`); images.add(hash);
}
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,' ').replace(/\s+/g,' ');
for(const intent of searchIntents) {
  const html = await readFile(`dist/${intent.slug ? `${intent.slug}/` : ''}index.html`,'utf8');
  const main = normalize(html.match(/<main\b[^>]*>(.*?)<\/main>/s)?.[1].replace(/<[^>]+>/g,' ') || '');
  for(const signal of intent.signals) assert(main.includes(signal),`${intent.slug || 'home'}: visible search intent missing: ${signal}`);
}
const sitemap=await readFile('dist/sitemap.xml','utf8');
const robots=await readFile('dist/robots.txt','utf8');
assert(robots.includes(`Sitemap: ${SITE}/sitemap.xml`) && !robots.includes('Disallow: /'), 'robots indexability');
for(const route of routes) assert(sitemap.includes(`<loc>${SITE}${route}</loc>`),`sitemap missing ${route}`);
for(const image of sitemap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)) {
  const url = new URL(unescape(image[1]));
  assert(url.origin===SITE && (await stat(`dist${url.pathname}`).catch(()=>null))?.isFile(),`sitemap image is unavailable: ${url}`);
}
assert((sitemap.match(/<loc>/g)||[]).length===routes.size,'sitemap route count');
assert((await readFile('dist/404.html','utf8').catch(()=>readFile('dist/404/index.html','utf8'))).includes('noindex, follow'),'404 must be noindex');
const card404 = await readFile('dist/social/404.png');
const size404 = await sharp(card404).metadata();
assert(size404.width===1200 && size404.height===630 && !images.has(createHash('sha256').update(card404).digest('hex')),'404 OG dimensions/uniqueness');
for (const file of machineFiles) {
  const body = await readFile(`dist/${file}`,'utf8');
  assert(body.includes(SITE),`${file}: canonical domain missing`);
  if (['humans.txt','llms.txt','llms-full.txt'].includes(file)) assert(body.includes(developer.name) && body.includes(developer.url),`${file}: attribution missing`);
  if (file.startsWith('llms')) {
    for (const page of [home,...pages]) assert(body.includes(canonicalOf(page.slug)),`${file}: missing canonical page ${page.slug}`);
  }
}
const full = await readFile('dist/llms-full.txt','utf8');
for (const page of [home,...pages]) for (const q of page.faqs) assert(full.includes(q.answer),`llms-full: missing FAQ answer for ${page.slug}`);
assert(/^[a-zA-Z0-9-]{8,128}$/.test((await readFile('dist/indexnow-key.txt','utf8')).trim()),'IndexNow key format');
if(fail.length) { console.error(fail.join('\n')); process.exit(1); }
console.log(`Audit passed: ${records.length} indexable pages, ${searchIntents.reduce((n,p)=>n+p.terms.length,0)} brief keywords mapped, unique OG 1200×630, canonical/image sitemap, exact FAQ parity, sources, developer attribution, AI files and IndexNow preparation.`);

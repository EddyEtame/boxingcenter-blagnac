import { mkdir, readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { pages } from '../src/data/pages.mjs';
import { home } from '../src/data/site.mjs';
import { photos } from '../src/data/photos.mjs';

await mkdir('public/social', { recursive: true });
const escape = s => s.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const entries = [home, ...pages, {slug:'confidentialite',title:'Vos choix restent les vôtres.',image:'team'}, {slug:'404',title:'Un pas de côté.',image:'event'}];
for (const page of entries) {
  const p = photos[page.image || 'hero'];
  const photo = await sharp(await readFile(`public${p.base}-${Math.min(960,p.widths.at(-1))}.webp`)).resize(540,630,{fit:'cover'}).png().toBuffer();
  const words = (page.slug ? page.title.split(' — ')[0] : 'Faites place à la boxe.').split(' ');
  const lines = []; let current = '';
  for (const word of words) { if (`${current} ${word}`.trim().length > 22 && current) { lines.push(current); current=word; } else current=`${current} ${word}`.trim(); }
  if(current) lines.push(current);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f2f0e8"/><image href="data:image/png;base64,${photo.toString('base64')}" x="660" width="540" height="630"/><rect x="660" y="480" width="540" height="150" fill="#6ee3c8"/><path d="M40 45h26v7H40zm6 12h26v7H46zm-6 12h26v7H40" fill="#192724"/><text x="90" y="70" font-family="sans-serif" font-weight="bold" font-size="24" fill="#192724">BOXING CENTER</text><text x="40" y="130" font-family="sans-serif" font-size="16" letter-spacing="2" fill="#52615a">POUR LES HABITANTS DE BLAGNAC</text>${lines.map((line,i)=>`<text x="40" y="${230+i*68}" font-family="sans-serif" font-weight="bold" font-size="55" fill="#192724">${escape(line)}</text>`).join('')}<path d="M40 510h550" stroke="#52615a"/><text x="40" y="557" font-family="sans-serif" font-size="22" fill="#192724">BLAGNAC → TOULOUSE MINIMES</text><text x="690" y="538" font-family="sans-serif" font-weight="bold" font-size="30" fill="#192724">LE PREMIER PAS.</text><text x="690" y="580" font-family="sans-serif" font-size="20" fill="#192724">boxingcenter-blagnac.fr</text></svg>`;
  await sharp(Buffer.from(svg)).png().toFile(`public/social/${page.slug || 'accueil'}.png`);
}
await sharp('public/favicon.svg').resize(180,180).png().toFile('public/apple-touch-icon.png');
console.log(`Generated ${entries.length} unique social images and touch icon.`);

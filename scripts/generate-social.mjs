import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { pages } from '../src/data/pages.mjs';
import { home, MMA_CLUB } from '../src/data/site.mjs';
import { photos } from '../src/data/photos.mjs';
import { socialFont, socialText } from './social-fonts.mjs';
import { privacy, legal, thanks, notFound, socialFor } from '../src/data/seo.mjs';
import { generateFavicons } from './favicons.mjs';

await mkdir('public/social', { recursive: true });
const titleFont = await socialFont(800), labelFont = await socialFont(600);
const entries = [home, ...pages, privacy, legal, thanks, notFound];
const logo = (await sharp('public/images/logo-boxing-center.webp').png().toBuffer()).toString('base64');
for (const page of entries) {
  const p = photos[page.image || 'hero'];
  const photo = await sharp(await readFile(`public${p.base}-${Math.min(960,p.widths.at(-1))}.webp`)).resize(480,330,{fit:'inside'}).png().toBuffer();
  const social = socialFor(page);
  const words = social.title.toLocaleUpperCase('fr-FR').split(' ');
  const lines = []; let current = '';
  for (const word of words) { if (`${current} ${word}`.trim().length > 18 && current) { lines.push(current); current=word; } else current=`${current} ${word}`.trim(); }
  if(current) lines.push(current);
  if(lines.length > 4) throw new Error(`Social title overflows: ${page.slug}`);
  const mma = page.slug === 'mma-blagnac';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#f4f1ea"/>
    <image href="data:image/png;base64,${logo}" x="42" y="28" width="200" height="94"/>
    ${socialText(labelFont, 'POUR LES HABITANTS DE BLAGNAC', { x:42, y:166, size:14, letterSpacing:1.5, fill:'#4b5468', width:560 })}
    ${lines.map((line,i)=>socialText(titleFont, line, { x:40, y:250+i*76, size:72, fill:'#0a1020', width:590 })).join('')}
    <rect x="652" width="548" height="630" fill="#0a1020"/>
    <rect x="680" y="36" width="480" height="56" fill="#f5a623"/>
    ${socialText(labelFont, mma ? 'MMA · RÉSEAU BOXING CENTER' : 'BOXING CENTER · TOULOUSE MINIMES', { x:704, y:72, size:23, fill:'#0a1020', width:432 })}
    <image href="data:image/png;base64,${photo.toString('base64')}" x="680" y="126" width="480" height="330" preserveAspectRatio="xMidYMid meet"/>
    <path d="M42 516h560" stroke="#cbc7bd"/>
    ${socialText(labelFont, 'BLAGNAC', { x:42, y:554, size:21, fill:'#0a1020', width:84 })}
    <path d="M128 546h22m-6-6 6 6-6 6" fill="none" stroke="#0a1020" stroke-width="1.5"/>
    ${socialText(labelFont, mma ? MMA_CLUB.short.toLocaleUpperCase('fr-FR') : 'TOULOUSE MINIMES', { x:162, y:554, size:21, fill:'#0a1020', width:440 })}
    ${socialText(labelFont, 'boxingcenter-blagnac.fr', { x:42, y:588, size:17, fill:'#4b5468', width:560 })}
    ${socialText(labelFont, social.promise, { x:680, y:548, size:25, fill:'#f5a623', width:480 })}
    ${socialText(labelFont, social.note, { x:680, y:587, size:16, fill:'#f4f1ea', width:480 })}
  </svg>`;
  await writeFile(`public/social/${page.slug || 'accueil'}.png`, await sharp(Buffer.from(svg)).png().toBuffer());
}
await generateFavicons();
console.log(`Generated ${entries.length} unique social images and the favicon set.`);

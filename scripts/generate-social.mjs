import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { pages } from '../src/data/pages.mjs';
import { home } from '../src/data/site.mjs';
import { photos } from '../src/data/photos.mjs';
import { socialFont } from './social-fonts.mjs';

await mkdir('public/social', { recursive: true });
const titleFont = await socialFont(800), labelFont = await socialFont(600);
for (const [font,fontfile] of [['Barlow Condensed ExtraBold',titleFont],['Barlow Condensed SemiBold',labelFont]])
  await sharp({text:{text:'BC',font,fontfile,rgba:true}}).png().toBuffer();
const escape = s => s.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const entries = [home, ...pages, {slug:'confidentialite',title:'Vos choix restent les vôtres.',image:'team'}, {slug:'404',title:'Un pas de côté.',image:'event'}];
const logo = (await sharp('public/images/logo-boxing-center.webp').png().toBuffer()).toString('base64');
for (const page of entries) {
  const p = photos[page.image || 'hero'];
  const photo = await sharp(await readFile(`public${p.base}-${Math.min(960,p.widths.at(-1))}.webp`)).resize(480,330,{fit:'inside'}).png().toBuffer();
  const words = (page.slug ? page.title.split(' — ')[0] : 'La boxe proche de Blagnac.').toLocaleUpperCase('fr-FR').split(' ');
  const lines = []; let current = '';
  for (const word of words) { if (`${current} ${word}`.trim().length > 18 && current) { lines.push(current); current=word; } else current=`${current} ${word}`.trim(); }
  if(current) lines.push(current);
  if(lines.length > 4) throw new Error(`Social title overflows: ${page.slug}`);
  for(const line of lines) {
    const measured=await sharp({text:{text:escape(line),font:'Barlow Condensed ExtraBold 72',fontfile:titleFont,rgba:true}}).metadata();
    if(measured.width > 590) throw new Error(`Social title exceeds its column: ${page.slug}: ${line}`);
  }
  const mma = page.slug === 'mma-blagnac';
  const credit = p.credit === 'Boxing Center' ? 'Photographie : réseau Boxing Center' : `Photographie : © ${p.credit}`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#f2f0e8"/>
    <image href="data:image/png;base64,${logo}" x="42" y="28" width="200" height="94"/>
    <text x="42" y="166" font-family="Barlow Condensed SemiBold" font-size="14" font-weight="bold" letter-spacing="1.5" fill="#52615a">POUR LES HABITANTS DE BLAGNAC</text>
    ${lines.map((line,i)=>`<text x="40" y="${250+i*76}" font-family="Barlow Condensed ExtraBold" font-weight="800" font-size="72" fill="#192724">${escape(line)}</text>`).join('')}
    <rect x="652" width="548" height="630" fill="#192724"/>
    <rect x="680" y="36" width="480" height="56" fill="#6ee3c8"/>
    <text x="704" y="72" font-family="Barlow Condensed SemiBold" font-weight="bold" font-size="23" fill="#192724">${mma ? 'MMA · RÉSEAU BOXING CENTER' : 'BOXING CENTER · TOULOUSE MINIMES'}</text>
    <image href="data:image/png;base64,${photo.toString('base64')}" x="680" y="126" width="480" height="330" preserveAspectRatio="xMidYMid meet"/>
    <text x="680" y="479" font-family="Barlow Condensed SemiBold" font-size="12" fill="#d4dbd3">${escape(credit)}</text>
    <path d="M42 516h560" stroke="#c3c8bd"/>
    <text x="42" y="554" font-family="Barlow Condensed SemiBold" font-size="21" font-weight="bold" fill="#192724">BLAGNAC → TOULOUSE MINIMES</text>
    <text x="42" y="588" font-family="Barlow Condensed SemiBold" font-size="17" fill="#52615a">boxingcenter-blagnac.fr</text>
    <text x="680" y="548" font-family="Barlow Condensed SemiBold" font-weight="bold" font-size="25" fill="#6ee3c8">${mma ? 'CHOISIR LE COURS ET LE LIEU.' : 'PRÉPARER VOTRE PREMIER PAS.'}</text>
    <text x="680" y="587" font-family="Barlow Condensed SemiBold" font-size="16" fill="#f2f0e8">${mma ? 'Votre point de contact : Toulouse Minimes.' : 'Le club est à Toulouse, proche de Blagnac.'}</text>
  </svg>`;
  await writeFile(`public/social/${page.slug || 'accueil'}.png`, await sharp(Buffer.from(svg)).png().toBuffer());
}
await sharp('public/favicon.svg').resize(180,180).png().toFile('public/apple-touch-icon.png');
console.log(`Generated ${entries.length} unique social images and touch icon.`);

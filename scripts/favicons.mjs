import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { socialFont } from './social-fonts.mjs';

/**
 * Les icônes du site, dérivées de la marque et non d'un motif abstrait :
 * un fond encre, l'anneau des cordes du ring à la couleur du site, et la lettre
 * de la ville de départ. Le « B » est dessiné depuis les contours de Barlow
 * Condensed livrée avec le dépôt, donc le rendu ne dépend d'aucune police système.
 * Produit : favicon.svg, favicon.ico (16/32/48), favicon-{32,96,192,512}.png,
 * apple-touch-icon.png (180) et site.webmanifest.
 */
const ink = '#192724', mint = '#6ee3c8', paper = '#f2f0e8';

export async function generateFavicons() {
  const font = await socialFont(800);
  const glyph = font.getPath('B', 0, 0, 300);
  const box = glyph.getBoundingBox();
  // Centre optique du glyphe dans la pastille de 512.
  const x = 256 - (box.x1 + box.x2) / 2, y = 256 - (box.y1 + box.y2) / 2;
  const letter = font.getPath('B', x, y, 300).toPathData(2);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" rx="96" fill="${ink}"/><circle cx="256" cy="256" r="206" fill="none" stroke="${mint}" stroke-width="28"/><path d="${letter}" fill="${paper}"/></svg>`;
  await writeFile('public/favicon.svg', svg);
  const png512 = await sharp(Buffer.from(svg)).png().toBuffer();
  const sizes = [16, 32, 48, 96, 192, 512];
  const pngs = {};
  for (const size of sizes) pngs[size] = await sharp(png512).resize(size, size, { kernel: 'lanczos3' }).png({ compressionLevel: 9 }).toBuffer();
  for (const size of [32, 96, 192, 512]) await writeFile(`public/favicon-${size}.png`, pngs[size]);
  await writeFile('public/apple-touch-icon.png', await sharp(png512).resize(180, 180).png().toBuffer());
  // favicon.ico : les PNG 16/32/48 empilés dans un conteneur ICO.
  const entries = [16, 32, 48];
  const header = Buffer.alloc(6 + 16 * entries.length);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(entries.length, 4);
  let offset = header.length;
  entries.forEach((size, i) => {
    const o = 6 + i * 16;
    header.writeUInt8(size, o); header.writeUInt8(size, o + 1); header.writeUInt8(0, o + 2); header.writeUInt8(0, o + 3);
    header.writeUInt16LE(1, o + 4); header.writeUInt16LE(32, o + 6);
    header.writeUInt32LE(pngs[size].length, o + 8); header.writeUInt32LE(offset, o + 12);
    offset += pngs[size].length;
  });
  await writeFile('public/favicon.ico', Buffer.concat([header, ...entries.map(size => pngs[size])]));
  await writeFile('public/site.webmanifest', JSON.stringify({
    name: 'Boxing Center — depuis Blagnac',
    short_name: 'Boxing Center Blagnac',
    icons: [{ src: '/favicon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/favicon-512.png', sizes: '512x512', type: 'image/png' }],
    theme_color: ink, background_color: paper, display: 'browser',
  }, null, 2) + '\n');
}

if (process.argv[1] && process.argv[1].endsWith('favicons.mjs')) {
  await generateFavicons();
  console.log('favicons : svg, ico, 4 png, apple-touch, manifest');
}

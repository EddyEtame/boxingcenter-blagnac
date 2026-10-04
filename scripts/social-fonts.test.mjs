import assert from 'node:assert/strict';
import test from 'node:test';
import sharp from 'sharp';
import { socialFont, socialText } from './social-fonts.mjs';

test('the Vercel headline rasterizes completely from bundled outlines', async () => {
  const font = await socialFont(800);
  const text = socialText(font, 'LA BOXE PROCHE DE', { x:10, y:80, size:72, fill:'#192724', width:590 });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="100">${text}</svg>`;
  const { data, info } = await sharp(Buffer.from(svg)).ensureAlpha().raw().toBuffer({ resolveWithObject:true });
  let first = info.width, last = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * info.channels + 3] > 128) {
        first = Math.min(first, x);
        last = Math.max(last, x);
      }
    }
  }
  // Assert the actual raster spans the full sentence, catching truncated SVG
  // output even when font bounding-box measurements claim the text fits.
  assert.ok(first >= 10 && first <= 15, `Unexpected first ink column: ${first}`);
  assert.ok(last >= 522 && last <= 527, `Headline is incomplete or displaced: ${last}`);
});

import { readFile } from 'node:fs/promises';
import opentype from 'opentype.js';

// Read the bundled outlines directly. Native font registration and fallback
// differ between Windows and Linux and must not determine social-card layout.
export async function socialFont(weight) {
  const source = await readFile(`node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-${weight}-normal.woff`);
  return opentype.parse(source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength));
}

export function socialText(font, text, { x, y, size, fill, width, letterSpacing = 0 }) {
  for (const character of text) {
    if (font.charToGlyph(character).index === 0) {
      throw new Error(`Social font has no glyph for ${JSON.stringify(character)} in: ${text}`);
    }
  }
  const path = font.getPath(text, x, y, size, { letterSpacing: letterSpacing / size });
  if (path.commands.some(command => Object.entries(command).some(([key, value]) => key !== 'type' && !Number.isFinite(value)))) {
    throw new Error(`Social font produced invalid path coordinates for: ${text}`);
  }
  const box = path.getBoundingBox();
  if (![box.x1, box.y1, box.x2, box.y2].every(Number.isFinite)
    || box.x1 < x - 2 || box.x2 > x + width
    || box.x1 < 0 || box.x2 > 1200 || box.y1 < 0 || box.y2 > 630) {
    throw new Error(`Social text exceeds its bounds: ${text} (${JSON.stringify(box)})`);
  }
  // getPath already positions SVG coordinates around the requested baseline.
  return `<path fill="${fill}" d="${path.toPathData(3)}"/>`;
}

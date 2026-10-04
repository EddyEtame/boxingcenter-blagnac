import { open, readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import { inflateRawSync } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { photos } from '../src/data/photos.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destination = path.join(root, 'public', 'images');

/** Read one named archive image without loading the complete 313 MB ZIP. */
async function archiveImage(archivePath, requestedEntry) {
  const handle = await open(archivePath, 'r');
  try {
    const { size } = await handle.stat();
    const tail = Buffer.alloc(Math.min(size, 65557));
    await handle.read(tail, 0, tail.length, size - tail.length);
    let end = -1;
    for (let i = tail.length - 22; i >= 0; i--) {
      if (tail.readUInt32LE(i) === 0x06054b50) { end = i; break; }
    }
    if (end < 0) throw new Error('ZIP central directory not found');
    const directory = Buffer.alloc(tail.readUInt32LE(end + 12));
    await handle.read(directory, 0, directory.length, tail.readUInt32LE(end + 16));
    for (let at = 0; at + 46 <= directory.length;) {
      if (directory.readUInt32LE(at) !== 0x02014b50) throw new Error('Invalid ZIP central directory');
      const nameLength = directory.readUInt16LE(at + 28);
      const extraLength = directory.readUInt16LE(at + 30);
      const commentLength = directory.readUInt16LE(at + 32);
      const name = directory.subarray(at + 46, at + 46 + nameLength).toString('utf8');
      if (name === requestedEntry) {
        const method = directory.readUInt16LE(at + 10);
        const compressedSize = directory.readUInt32LE(at + 20);
        const offset = directory.readUInt32LE(at + 42);
        const localHeader = Buffer.alloc(30);
        await handle.read(localHeader, 0, 30, offset);
        if (localHeader.readUInt32LE(0) !== 0x04034b50) throw new Error('Invalid ZIP local header');
        const dataOffset = offset + 30 + localHeader.readUInt16LE(26) + localHeader.readUInt16LE(28);
        const data = Buffer.alloc(compressedSize);
        await handle.read(data, 0, data.length, dataOffset);
        if (method === 0) return data;
        if (method === 8) return inflateRawSync(data);
        throw new Error(`Unsupported ZIP compression method: ${method}`);
      }
      at += 46 + nameLength + extraLength + commentLength;
    }
    throw new Error(`Image absent from ZIP: ${requestedEntry}`);
  } finally {
    await handle.close();
  }
}

await mkdir(destination, { recursive: true });
const records = [];
for (const [key, photo] of Object.entries(photos)) {
  let input;
  try {
    input = photo.sourceArchive
      ? await archiveImage(path.resolve(root, photo.sourceArchive), photo.sourceEntry)
      : await readFile(path.resolve(root, photo.source));
  } catch (error) {
    // Source photos live outside this repository and ZIPs are intentionally ignored.
    // A fresh checkout remains buildable from the committed optimized variants.
    const existing = await Promise.all(photo.variants.map(async ({ src }) => {
      try { return (await stat(path.join(root, 'public', src))).isFile(); } catch { return false; }
    }));
    if (existing.every(Boolean)) { console.log(`${key}: existing optimized images retained (source unavailable)`); continue; }
    throw new Error(`${key}: ${error.message}`);
  }
  const metadata = await sharp(input).metadata();
  if (metadata.width !== photo.width || metadata.height !== photo.height) {
    throw new Error(`${key}: source dimensions changed (${metadata.width}×${metadata.height})`);
  }
  for (const variant of photo.variants) {
    const filename = path.join(root, 'public', variant.src);
    // Resize the entire frame; do not crop faces or the photographer's watermark.
    // Sharp strips EXIF and other embedded metadata by default.
    const result = await sharp(input).rotate().resize({ width: variant.width, withoutEnlargement: true })
      .webp({ quality: 84, effort: 5 }).toFile(filename);
    records.push({ key, file: variant.src, width: result.width, height: result.height, bytes: result.size, credit: photo.credit });
  }
  console.log(`${key}: ${photo.variants.map((v) => `${v.width}w`).join(', ')} · ${photo.credit}`);
}
await mkdir(path.join(root, '.research', 'photo-curation'), { recursive: true });
await writeFile(path.join(root, '.research', 'photo-curation', 'optimized-images.json'), JSON.stringify(records, null, 2));
console.log(`${records.length} responsive WebP files generated; visual watermarks preserved.`);

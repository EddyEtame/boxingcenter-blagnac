import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { inflateSync } from 'node:zlib';
import { resolve } from 'node:path';

// Pango on Windows does not load the bundled WOFF containers. Repackage their
// existing OpenType tables as SFNT; outlines and names remain unchanged.
export async function socialFont(weight) {
  const source = await readFile(`node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-${weight}-normal.woff`);
  if(source.toString('ascii',0,4) !== 'wOFF') throw new Error('Expected a WOFF 1 font');
  const count = source.readUInt16BE(12), power = Math.floor(Math.log2(count));
  const tables = Array.from({length:count},(_,i)=>{
    const at=44+i*20, offset=source.readUInt32BE(at+4), compressed=source.readUInt32BE(at+8), length=source.readUInt32BE(at+12);
    const data=source.subarray(offset,offset+compressed);
    return {tag:source.toString('ascii',at,at+4),checksum:source.readUInt32BE(at+16),data:compressed < length ? inflateSync(data) : data};
  }).sort((a,b)=>Buffer.compare(Buffer.from(a.tag),Buffer.from(b.tag)));
  const size=12+count*16+tables.reduce((sum,t)=>sum+Math.ceil(t.data.length/4)*4,0);
  const font=Buffer.alloc(size);
  source.copy(font,0,4,8); font.writeUInt16BE(count,4); font.writeUInt16BE(2**power*16,6); font.writeUInt16BE(power,8); font.writeUInt16BE(count*16-2**power*16,10);
  let offset=12+count*16, head;
  tables.forEach((t,i)=>{
    const at=12+i*16;
    font.write(t.tag,at,4,'ascii'); font.writeUInt32BE(t.checksum,at+4); font.writeUInt32BE(offset,at+8); font.writeUInt32BE(t.data.length,at+12); t.data.copy(font,offset);
    if(t.tag==='head') { head=offset; font.writeUInt32BE(0,head+8); }
    offset+=Math.ceil(t.data.length/4)*4;
  });
  if(head===undefined) throw new Error('Font head table missing');
  let checksum=0; for(let at=0;at<size;at+=4) checksum=(checksum+font.readUInt32BE(at))>>>0;
  font.writeUInt32BE((0xb1b0afba-checksum)>>>0,head+8);
  await mkdir('.astro/social-fonts',{recursive:true});
  const path=resolve(`.astro/social-fonts/barlow-${weight}.ttf`);
  await writeFile(path,font); return path;
}

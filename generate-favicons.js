import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const svgPath = path.join(publicDir, 'favicon.svg');

async function main() {
  if (!fs.existsSync(svgPath)) {
    console.error('Error: favicon.svg not found in public directory');
    process.exit(1);
  }

  console.log('Generating PNG favicons from SVG...');

  const sizes = [16, 32, 48, 96, 192, 512];
  const pngBuffers = {};

  for (const size of sizes) {
    const pngBuffer = await sharp(svgPath)
      .resize(size, size)
      .png()
      .toBuffer();
    
    pngBuffers[size] = pngBuffer;

    // Save specific sizes directly as files
    if (size === 32) {
      fs.writeFileSync(path.join(publicDir, 'favicon.png'), pngBuffer);
      console.log(`- Created public/favicon.png (${size}x${size})`);
    } else {
      fs.writeFileSync(path.join(publicDir, `favicon-${size}x${size}.png`), pngBuffer);
      console.log(`- Created public/favicon-${size}x${size}.png`);
    }
  }

  console.log('Packaging favicon.ico (containing 16x16, 32x32, 48x48)...');
  const icoSizes = [16, 32, 48];
  const icoBuffers = icoSizes.map(size => pngBuffers[size]);
  
  const icoData = createIco(icoBuffers, icoSizes);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoData);
  console.log('- Created public/favicon.ico');

  console.log('Favicon generation completed successfully!');
}

function createIco(pngBuffers, dimensions) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type (1 = ICO)
  header.writeUInt16LE(count, 4); // Count

  const entries = [];
  let currentOffset = 6 + count * 16;

  for (let i = 0; i < count; i++) {
    const pngBuffer = pngBuffers[i];
    const size = dimensions[i];
    const entry = Buffer.alloc(16);
    
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // Width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // Height
    entry.writeUInt8(0, 2); // Color count
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Planes
    entry.writeUInt16LE(32, 6); // Bit count (32 bits)
    entry.writeUInt32LE(pngBuffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(currentOffset, 12); // Image data offset

    entries.push(entry);
    currentOffset += pngBuffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

main().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});

const fs = require('fs');
const path = require('path');

// Files to copy from public to dist
const filesToCopy = [
  'map.html',
  'map-data.json',
  'dam-battlegrounds-2k.webp',
  'dam-battlegrounds-4k.webp',
  '404.html',
  'robots.txt',
  'sitemap.xml'
];

const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy each file
filesToCopy.forEach(file => {
  const src = path.join(publicDir, file);
  const dest = path.join(distDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file}`);
  } else {
    console.log(`⚠ File not found: ${file}`);
  }
});

console.log('✓ All public files copied to dist/');

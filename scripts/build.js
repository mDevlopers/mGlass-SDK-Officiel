/**
 * mGlass SDK Build Script v1.0.0
 * Concatenates modular CSS files from the new directory structure.
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');
const DIST_DIR = path.join(__dirname, '..', 'dist');
const OUTPUT_FILE = path.join(DIST_DIR, 'mglass.css');

// Order of directories to ensure correct CSS cascade
const DIR_ORDER = [
  'core',
  'animations',
  'components',
  'effects',
  'themes'
];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.css')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

function build() {
  console.log('🧊 mGlass SDK — Building v1.0.0...\n');

  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const banner = `/*!
 * mGlass SDK — Liquid Glass UI Kit v1.0.0
 * https://github.com/mcompany/mglass-sdk
 * (c) ${new Date().getFullYear()} mCompany — MIT License
 */\n\n`;

  let output = banner;

  // Process files by directory order
  for (const dir of DIR_ORDER) {
    const dirPath = path.join(SRC_DIR, dir);
    if (fs.existsSync(dirPath)) {
      console.log(`📦 Processing segment: ${dir}`);
      const files = getAllFiles(dirPath);

      // Sort files within directory to ensure stability (e.g. base.css first)
      files.sort((a, b) => {
        const baseA = path.basename(a);
        const baseB = path.basename(b);
        // Core specials
        if (dir === 'core') {
          if (baseA === 'base.css') return -1;
          if (baseB === 'base.css') return 1;
          if (baseA === 'glass.css') return -1;
          if (baseB === 'glass.css') return 1;
        }
        return baseA.localeCompare(baseB);
      });

      for (const file of files) {
        const relativePath = path.relative(SRC_DIR, file);
        const content = fs.readFileSync(file, 'utf-8');
        output += `/* ── ${relativePath} ── */\n${content}\n\n`;
        console.log(`  ✅ ${relativePath}`);
      }
    }
  }

  fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');

  const sizeKB = (Buffer.byteLength(output, 'utf-8') / 1024).toFixed(1);
  console.log(`\n🎉 Build complete → dist/mglass.css (${sizeKB} KB)\n`);
}

build();

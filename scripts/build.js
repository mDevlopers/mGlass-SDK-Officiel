/**
 * mGlass SDK Build Script
 * Concatenates all CSS source files into dist/mglass.css
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');
const DIST_DIR = path.join(__dirname, '..', 'dist');
const OUTPUT_FILE = path.join(DIST_DIR, 'mglass.css');

// Order matters — base must come first, themes last
const FILES_ORDER = [
  'base.css',
  'glass.css',
  'buttons.css',
  'cards.css',
  'navbar.css',
  'components.css',
  'animations.css',
  'themes.css',
];

function build() {
  console.log('🧊 mGlass SDK — Building...\n');

  // Ensure dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const banner = `/*!
 * mGlass SDK v1.0.0 — Liquid Glass UI Kit
 * https://github.com/mcompany/mglass-sdk
 * (c) ${new Date().getFullYear()} mCompany — MIT License
 */\n\n`;

  let output = banner;

  for (const file of FILES_ORDER) {
    const filePath = path.join(SRC_DIR, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      output += `/* ── ${file} ── */\n${content}\n\n`;
      console.log(`  ✅ ${file}`);
    } else {
      console.log(`  ⚠️  ${file} not found, skipping`);
    }
  }

  fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');

  const sizeKB = (Buffer.byteLength(output, 'utf-8') / 1024).toFixed(1);
  console.log(`\n🎉 Build complete → dist/mglass.css (${sizeKB} KB)\n`);
}

build();

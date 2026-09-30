const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const publicDir = path.join(rootDir, 'public');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

const srcFiles = walk(srcDir);
const assetRegex = /['"`](\/(images|videos)\/[^'"`\s\)\},]+)['"`]/g;
const foundPaths = new Set();
const fileReferences = {};

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = assetRegex.exec(content)) !== null) {
    const ref = match[1];
    foundPaths.add(ref);
    if (!fileReferences[ref]) fileReferences[ref] = [];
    fileReferences[ref].push(path.relative(rootDir, file));
  }
});

console.log(`\n=== CHECKING ASSET REFERENCES IN SRC/ (Total unique: ${foundPaths.size}) ===`);

const missing = [];
const existing = [];

for (const ref of foundPaths) {
  const localPath = path.join(publicDir, ref.replace(/^\//, ''));
  if (!fs.existsSync(localPath)) {
    missing.push({ ref, localPath, usedIn: fileReferences[ref] });
  } else {
    const stats = fs.statSync(localPath);
    existing.push({ ref, size: stats.size });
  }
}

console.log(`Existing in public/: ${existing.length}`);
console.log(`Missing in public/: ${missing.length}`);

if (missing.length > 0) {
  console.log('\n--- LIST OF MISSING ASSETS ---');
  missing.forEach(m => {
    console.log(`MISSING: ${m.ref}`);
    console.log(`   Used in: ${m.usedIn.join(', ')}`);
  });
} else {
  console.log('\nAll referenced assets in src/ exist in public/!');
}

const fs = require('fs-extra');
const path = require('path');

// Source and destination directories
const sourceDir = path.join(__dirname, '../../yunni-vanilla');
const destDir = path.join(__dirname, '../public');

// Assets to copy
const assets = [
  { src: 'images', dest: 'images' },
  { src: 'futura', dest: 'futura' },
];

// Copy assets
async function copyAssets() {
  try {
    // Create destination directories if they don't exist
    await fs.ensureDir(destDir);

    // Copy each asset
    for (const asset of assets) {
      const sourcePath = path.join(sourceDir, asset.src);
      const destPath = path.join(destDir, asset.dest);

      console.log(`Copying ${asset.src} to ${asset.dest}...`);
      await fs.copy(sourcePath, destPath);
      console.log(`Successfully copied ${asset.src}`);
    }

    console.log('All assets copied successfully!');
  } catch (err) {
    console.error('Error copying assets:', err);
  }
}

// Run the script
copyAssets(); 
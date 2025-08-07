// scripts/sync-agent-files.js
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ LIVE and working file
const FILES_TO_SYNC = [
  {
    name: 'drukhari.json',
    url: 'https://raw.githubusercontent.com/arcadekind/grimforge-files/main/public/data/drukhari.json',
    targetPath: '../public/data/drukhari.json'
  }
];

FILES_TO_SYNC.forEach(file => {
  const destPath = path.resolve(__dirname, file.targetPath);
  const dir = path.dirname(destPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log(`Downloading ${file.name}...`);
  const fileStream = fs.createWriteStream(destPath);

  https.get(file.url, (res) => {
    if (res.statusCode !== 200) {
      console.error(`❌ Failed to download ${file.name}: ${res.statusCode}`);
      return;
    }

    res.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`✅ Synced: ${file.name}`);
    });
  }).on('error', (err) => {
    console.error(`❌ Error downloading ${file.name}:`, err.message);
  });
});


import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'src/assets/events/ACD_2025');
const outputDir = path.join(__dirname, 'src/assets/events/ACD_2025_optimized');

async function compressImages() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Read all files from input directory
    const files = await fs.readdir(inputDir);
    
    console.log('Starting image compression...\n');

    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

      console.log(`Compressing ${file}...`);

      await sharp(inputPath)
        .resize(1920, 1080, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({
          quality: 80,
          effort: 6
        })
        .toFile(outputPath);

      const inputStats = await fs.stat(inputPath);
      const outputStats = await fs.stat(outputPath);
      
      console.log(`  Original: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);
      console.log(`  Compressed: ${(outputStats.size / 1024).toFixed(2)} KB`);
      console.log(`  Saved: ${((1 - outputStats.size / inputStats.size) * 100).toFixed(1)}%\n`);
    }

    console.log('✅ Image compression completed!');
    console.log(`Optimized images saved to: ${outputDir}`);
  } catch (error) {
    console.error('Error compressing images:', error);
  }
}

compressImages();

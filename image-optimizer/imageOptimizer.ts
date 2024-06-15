import axios from 'axios';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';


const downloadImage = async (url:string, filepath:string) => {
  try {
    const response = await axios({
      url,
      responseType: 'stream',
    });
    const writer = fs.createWriteStream(filepath);
    const pipelineAsync = promisify(pipeline);
    await pipelineAsync(response.data, writer);
    response.data.pipe(writer);
  } catch (error) {
    console.error(`Failed to download ${url}: ${error}`);
  }
};

const optimizeImage = async (filepath:string, outputDir:string, name:string, index:number) => {
    const image = sharp(filepath);
    const metadata = await image.metadata();
    if(metadata.width === undefined || metadata.height === undefined) { 
        return;
    }
    const isHorizontal = metadata.width >= metadata.height;
    const outputPath = path.join(outputDir, `${name}_${index}.jpg`);
    const tempOutputPath = path.join(outputDir, `${name}_${index}_temp.jpg`);
  if (isHorizontal) {
    await image.resize(800).toFile(tempOutputPath); // Resize to width of 800px
  } else {
    await image.resize(null, 800).toFile(tempOutputPath); // Resize to height of 800px
  }
  await sharp(tempOutputPath).jpeg({ quality: 80 }).toFile(outputPath); // Adjust quality as needed
  fs.unlinkSync(tempOutputPath);
};

const processImages = async (people_imageUrls:Map<string,string[]>, outputDir:string) => {
  for (const [people, images] of people_imageUrls) {
    for(const [i, image] of images.entries()){
      const filename = `${people}_${i}.jpg`;
      const filepath = path.join(outputDir, filename);
      try {
        console.log(`Downloading ${filename}...`);
        await downloadImage(image, filepath);
        console.log(`Optimizing ${filename}...`);
        await optimizeImage(filepath, outputDir, people, i);
        // Remove the original downloaded file
        console.log(`${filename} processed.`);
      } catch (error) {
        console.error(`Failed to process ${filename}: ${error}`);
      }
    }
  }
};

const main = async() => {
  try {
    const people_imageUrls = new Map<string, string[]>([
      ['sandra', ["https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/sandra1.PNG?alt=media&token=2ad3cc36-47e2-41ce-816b-0768f138fd36", "https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/sandra2.PNG?alt=media&token=5388cc74-9441-4730-88c7-7cee69635f56", "https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/sandra3.PNG?alt=media&token=c273165b-8ab3-472f-9222-41aea90bd209"]],
      ['your_justin', ["https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/dim.jpg?alt=media&token=089b0ee7-9455-4ec9-aeaa-93c49abd54fe", "https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/icscover.jpg?alt=media&token=87bed1cc-1ca4-4c46-a7ca-c697bedede4b"]],
      ['jose', ["https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/jose.png?alt=media&token=eb7e1b18-f9d4-46ae-b402-1e8dee68084d"]],
    ]);
    
    // Create output directories
    const outputDir = 'images';
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    await processImages(people_imageUrls, outputDir);
  } catch (error) {
    console.error(error);
  }
}
main();
import fs from 'fs';
import zlib from 'zlib';
import { BROTLI_ACTIONS } from '../constants/brotliActions.js';
import { colorText } from './colorText.js';
import { COLORS } from '../constants/colors.js';

export const brotli = async (readFile, writeFile, action) => {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(readFile, { flags: 'r' });
    const writeStream = fs.createWriteStream(writeFile, { flags: 'wx' });

    const brotli = action === BROTLI_ACTIONS.compress ? zlib.createBrotliCompress() : zlib.createBrotliDecompress();

    const stream = readStream.pipe(brotli).pipe(writeStream);

    readStream.on('error', reject);
    writeStream.on('error', reject);
    stream.on('error', reject);
    brotli.on('error', reject);

    stream.on('finish', () => {
      const doneText = action === BROTLI_ACTIONS.compress ? 'Compress done' : 'Decompress done';
      console.log(colorText(doneText, COLORS.fg.green));
      resolve();
    });
  });
};

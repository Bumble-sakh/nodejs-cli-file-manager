import crypto from 'crypto';
import fs from 'fs';
import { correctPath } from '../../helpers/correctPath.js';
import { colorText } from '../../helpers/colorText.js';
import { COLORS } from '../../constants/colors.js';
import { stdin } from 'process';

const getChecksum = (destinationPath) => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream(destinationPath);

    input.on('error', reject);

    input.on('data', (chunk) => {
      hash.update(chunk);
    });

    input.on('close', () => {
      resolve(hash.digest('hex'));
    });
  });
};

export const hash = async (filePath) => {
  const destinationPath = correctPath(filePath);

  try {
    const hash = await getChecksum(destinationPath);
    console.log(colorText('Hash: ', COLORS.fg.green), colorText(hash, COLORS.fg.blue));
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

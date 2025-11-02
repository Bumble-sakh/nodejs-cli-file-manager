import fs from 'fs';
import { stdin, stdout } from 'process';
import { correctPath } from '../../helpers/correctPath.js';
import { colorText } from '../../helpers/colorText.js';
import { COLORS } from '../../constants/colors.js';

const readFile = (destinationPath) => {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(destinationPath, { flags: 'r', encoding: 'utf-8' });

    input.on('error', reject);

    input.on('open', () => {
      stdout.write(COLORS.fg.cyan);
    });

    input.on('data', (data) => {
      stdout.write(data);
    });

    input.on('close', () => {
      stdout.write(COLORS.reset);
      stdout.write('\n');
      resolve();
    });
  });
};

export const cat = async (filePath) => {
  const destinationPath = correctPath(filePath);

  try {
    await readFile(destinationPath);
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

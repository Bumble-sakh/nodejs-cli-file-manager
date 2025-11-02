import { open } from 'fs/promises';
import { BROTLI_ACTIONS } from '../../constants/brotliActions.js';
import { brotli } from '../../helpers/brotli.js';
import { correctPath } from '../../helpers/correctPath.js';
import { colorText } from '../../helpers/colorText.js';
import { COLORS } from '../../constants/colors.js';
import { stdin } from 'process';

export const decompress = async (filePath, destinationPath) => {
  const readFile = correctPath(filePath);
  const writeFile = correctPath(destinationPath);

  try {
    const file = await open(readFile, 'r');
    file.close();
    await brotli(readFile, writeFile, BROTLI_ACTIONS.decompress);
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

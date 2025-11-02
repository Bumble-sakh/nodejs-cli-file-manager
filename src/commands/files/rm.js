import { unlink } from 'fs/promises';
import { correctPath } from '../../helpers/correctPath.js';
import { colorText } from '../../helpers/colorText.js';
import { COLORS } from '../../constants/colors.js';
import { parse } from 'path';
import { stdin } from 'process';

export const rm = async (pathToFile) => {
  const sourcePath = correctPath(pathToFile);
  const fileName = parse(sourcePath).base;

  try {
    await unlink(sourcePath);
    console.log(colorText(fileName, COLORS.fg.cyan), colorText('deleted.', COLORS.fg.green));
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

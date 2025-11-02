import { parse, resolve } from 'path';
import { open, unlink } from 'fs/promises';
import { copyFile } from '../../helpers/copyFile.js';
import { correctPath } from '../../helpers/correctPath.js';
import { colorText } from '../../helpers/colorText.js';
import { COLORS } from '../../constants/colors.js';
import { stdin } from 'process';

export const mv = async (pathToFile, pathToNewDir) => {
  const sourcePath = correctPath(pathToFile);
  const fileName = parse(sourcePath).base;
  const destinationPath = resolve(correctPath(pathToNewDir), fileName);

  try {
    const file = await open(sourcePath, 'r');
    file.close();
    await copyFile(sourcePath, destinationPath);
    await unlink(sourcePath);
    console.log(colorText(fileName, COLORS.fg.cyan), colorText('moved.', COLORS.fg.green));
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

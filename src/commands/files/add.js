import { open } from 'fs/promises';
import { correctPath } from '../../helpers/correctPath.js';
import { colorText } from '../../helpers/colorText.js';
import { COLORS } from '../../constants/colors.js';
import { stdin } from 'process';

export const add = async (fileName) => {
  const destinationPath = correctPath(fileName);

  try {
    const file = await open(destinationPath, 'wx');
    file.close();
    console.log(colorText(fileName, COLORS.fg.cyan), colorText('created.', COLORS.fg.green));
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

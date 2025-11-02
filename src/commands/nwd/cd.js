import { access, constants } from 'fs/promises';
import store from '../../store/store.js';
import { correctPath } from '../../helpers/correctPath.js';
import { colorText } from '../../helpers/colorText.js';
import { COLORS } from '../../constants/colors.js';
import { stdin } from 'process';

export const cd = async (destinationPath) => {
  const currentPath = correctPath(destinationPath);

  try {
    await access(currentPath, constants.R_OK);
    store.currentPath = currentPath;
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

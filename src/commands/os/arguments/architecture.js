import os from 'os';
import { colorText } from '../../../helpers/colorText.js';
import { COLORS } from '../../../constants/colors.js';
import { stdin } from 'process';

export const architecture = () => {
  try {
    console.log(`${colorText('Architecture: ', COLORS.fg.green)}${colorText(os.arch(), COLORS.fg.blue)}`);
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

import os from 'os';
import { colorText } from '../../../helpers/colorText.js';
import { COLORS } from '../../../constants/colors.js';
import { stdin } from 'process';

export const eol = () => {
  try {
    console.log(`${colorText('EOL: ', COLORS.fg.green)}${colorText(JSON.stringify(os.EOL), COLORS.fg.blue)}`);
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

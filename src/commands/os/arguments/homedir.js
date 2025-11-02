import os from 'os';
import { colorText } from '../../../helpers/colorText.js';
import { COLORS } from '../../../constants/colors.js';
import { stdin } from 'process';

export const homedir = () => {
  try {
    const userInfo = os.userInfo();

    console.log(`${colorText('Homedir: ', COLORS.fg.green)}${colorText(userInfo.homedir, COLORS.fg.blue)}`);
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

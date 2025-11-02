import os from 'os';
import { colorText } from '../../../helpers/colorText.js';
import { COLORS } from '../../../constants/colors.js';
import { stdin } from 'process';

export const username = () => {
  try {
    const userInfo = os.userInfo();

    console.log(`${colorText('Username: ', COLORS.fg.green)}${colorText(userInfo.username, COLORS.fg.blue)}`);
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

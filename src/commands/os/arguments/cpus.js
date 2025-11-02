import os from 'os';
import { colorText } from '../../../helpers/colorText.js';
import { COLORS } from '../../../constants/colors.js';
import { stdin } from 'process';

export const cpus = () => {
  try {
    const cpu = os.cpus();

    console.log(`${colorText('Core(s): ', COLORS.fg.cyan)}${colorText(cpu.length, COLORS.fg.yellow)}\n`);
    cpu.forEach((core, idx) => {
      console.log(`${colorText('Core ', COLORS.fg.green)}${colorText(idx + 1, COLORS.fg.green)}`);
      console.log(`${colorText('Model: ', COLORS.fg.cyan)}${colorText(core.model, COLORS.fg.yellow)}`);
      console.log(
        `${colorText('Speed: ', COLORS.fg.cyan)}${colorText(core.speed / 1000, COLORS.fg.yellow)}${colorText(
          'GHz\n',
          COLORS.fg.yellow
        )}`
      );
    });
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};

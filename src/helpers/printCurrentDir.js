import { COLORS } from '../constants/colors.js';
import { colorText } from './colorText.js';
import store from '../store/store.js';

export const printCurrentDir = () => {
  console.log(
    `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
  );
};

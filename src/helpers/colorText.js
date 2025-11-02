import { COLORS } from '../constants/colors.js';

export const colorText = (str, color) => {
  return `${color}${str}${COLORS.reset}`;
};

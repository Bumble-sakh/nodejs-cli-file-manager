import store from './store/store.js';

import { stdin } from 'process';
import { commandReducer } from './commandsReducer.js';
import { COMMANDS } from './constants/commands.js';
import { parseInput } from './helpers/parseInput.js';
import { colorText } from './helpers/colorText.js';
import { COLORS } from './constants/colors.js';
import { printCurrentDir } from './helpers/printCurrentDir.js';

export const app = (userName) => {
  console.log(`Welcome to the File Manager, ${colorText(userName, COLORS.fg.blue)}!`);
  printCurrentDir();

  stdin.read();

  stdin.on('command', async (command) => {
    await commandReducer(command);

    stdin.resume();
  });

  stdin.on('operationFailed', () => {
    console.error(colorText('Operation failed', COLORS.fg.red));
  });

  stdin.on('invalidInput', () => {
    console.error(colorText('Invalid input', COLORS.fg.red));
    printCurrentDir();
  });

  stdin.on('data', (data) => {
    stdin.pause();

    const [command, ...payload] = parseInput(data);

    stdin.emit('command', { command: COMMANDS[command], payload });
  });

  process.on('SIGINT', () => {
    process.exit(0);
  });

  process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${colorText(userName, COLORS.fg.blue)}, goodbye!`);
  });
};

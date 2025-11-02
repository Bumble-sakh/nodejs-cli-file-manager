import { stdin } from 'process';
import { architecture, cpus, eol, homedir, username } from './arguments/index.js';

import { OS_ARGUMENTS } from '../../constants/osArguments.js';

export const os = (osArgument) => {
  switch (osArgument) {
    case OS_ARGUMENTS.eol:
      eol();
      break;

    case OS_ARGUMENTS.cpus:
      cpus();
      break;

    case OS_ARGUMENTS.homedir:
      homedir();
      break;

    case OS_ARGUMENTS.username:
      username();
      break;

    case OS_ARGUMENTS.architecture:
      architecture();
      break;

    default:
      throw new Error('Invalid input');
      break;
  }
};

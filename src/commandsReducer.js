import { stdin } from "process";
import { up, cd, ls } from "./commands/nwd/index.js";
import {
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
  mkdir,
  rmdir,
} from "./commands/files/index.js";
import { os } from "./commands/os/index.js";
import { hash } from "./commands/hash/index.js";
import { compress, decompress } from "./commands/brotli/index.js";
import { COMMANDS } from "./constants/commands.js";
import { OS_ARGUMENTS } from "./constants/osArguments.js";
import { printCurrentDir } from "./helpers/printCurrentDir.js";
import { isFileName } from "./helpers/isFileName.js";

export const commandReducer = async ({ command, payload }) => {
  switch (command) {
    case COMMANDS[".exit"]:
      if (payload.length > 0) {
        stdin.emit("invalidInput");
        break;
      }

      process.exit(0);
      break;

    case COMMANDS[".clear"]:
      if (payload.length > 0) {
        stdin.emit("invalidInput");
        break;
      }

      process.stdout.write("\x1Bc");

      printCurrentDir();
      break;

    case COMMANDS.up:
      if (payload.length > 0) {
        stdin.emit("invalidInput");
        break;
      }

      up();

      printCurrentDir();
      break;

    case COMMANDS.cd:
      if (payload.length !== 1) {
        stdin.emit("invalidInput");
        break;
      }

      const [destinationPath] = payload;
      await cd(destinationPath);

      printCurrentDir();
      break;

    case COMMANDS.ls:
      if (payload.length > 0) {
        stdin.emit("invalidInput");
        break;
      }

      await ls();

      printCurrentDir();
      break;

    case COMMANDS.os:
      if (payload.length !== 1) {
        stdin.emit("invalidInput");
        break;
      }

      const argument = payload[0].slice(2);
      const osArgument = OS_ARGUMENTS[argument];

      try {
        os(osArgument);
        printCurrentDir();
      } catch (error) {
        stdin.emit("invalidInput");
      }

      break;

    case COMMANDS.hash:
      if (payload.length !== 1) {
        stdin.emit("invalidInput");
        break;
      }

      await hash(...payload);

      printCurrentDir();
      break;

    case COMMANDS.compress:
      if (payload.length !== 2) {
        stdin.emit("invalidInput");
        break;
      }

      await compress(...payload);

      printCurrentDir();
      break;

    case COMMANDS.decompress:
      if (payload.length !== 2) {
        stdin.emit("invalidInput");
        break;
      }

      await decompress(...payload);

      printCurrentDir();
      break;

    case COMMANDS.cat:
      if (payload.length !== 1) {
        stdin.emit("invalidInput");
        break;
      }

      await cat(...payload);

      printCurrentDir();
      break;

    case COMMANDS.add:
      if (payload.length !== 1) {
        stdin.emit("invalidInput");
        break;
      }

      if (!isFileName(payload[0])) {
        stdin.emit("invalidInput");
        break;
      }

      await add(...payload);

      printCurrentDir();
      break;

    case COMMANDS.rn:
      if (payload.length !== 2) {
        stdin.emit("invalidInput");
        break;
      }

      if (!isFileName(payload[1])) {
        stdin.emit("invalidInput");
        break;
      }

      await rn(...payload);

      printCurrentDir();
      break;

    case COMMANDS.cp:
      if (payload.length !== 2) {
        stdin.emit("invalidInput");
        break;
      }

      await cp(...payload);

      printCurrentDir();
      break;

    case COMMANDS.mv:
      if (payload.length !== 2) {
        stdin.emit("invalidInput");
        break;
      }

      await mv(...payload);

      printCurrentDir();
      break;

    case COMMANDS.rm:
      if (payload.length !== 1) {
        stdin.emit("invalidInput");
        break;
      }

      await rm(...payload);

      printCurrentDir();
      break;

    case COMMANDS.mkdir:
      if (payload.length !== 1) {
        stdin.emit("invalidInput");
        break;
      }

      await mkdir(...payload);

      printCurrentDir();
      break;

    case COMMANDS.rmdir:
      if (payload.length !== 1) {
        stdin.emit("invalidInput");
        break;
      }

      await rmdir(...payload);

      printCurrentDir();
      break;

    default:
      stdin.emit("invalidInput");
      break;
  }
};

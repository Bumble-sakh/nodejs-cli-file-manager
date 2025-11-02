import { rm as removeDirectory } from "fs/promises";
import { correctPath } from "../../helpers/correctPath.js";
import { colorText } from "../../helpers/colorText.js";
import { COLORS } from "../../constants/colors.js";
import { stdin } from "process";

export const rmdir = async (dirName) => {
  const sourcePath = correctPath(dirName);

  try {
    await removeDirectory(sourcePath, { recursive: true });
    console.log(
      colorText(dirName, COLORS.fg.cyan),
      colorText("removed.", COLORS.fg.green)
    );
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit("operationFailed");
  }
};

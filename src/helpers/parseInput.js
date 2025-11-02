const parseArgs = (str, args = []) => {
  const regex = /^("|')(.*?)\1/gm;

  if (str.length === 0) return args;

  if (str[0] === '"' || str[0] === "'") {
    const arg = str.match(regex)[0];
    args.push(arg.slice(1, -1));
    const newStr = str.replace(arg, '').trim();
    parseArgs(newStr, args);
  } else {
    const arg = str.split(' ')[0];
    args.push(arg);
    const newStr = str.replace(arg, '').trim();
    parseArgs(newStr, args);
  }

  return args;
};

export const parseInput = (data) => {
  const str = data.toString().trim();
  const commandIdx = str.indexOf(' ');
  const command = commandIdx === -1 ? str : str.slice(0, commandIdx);
  const argsRow = commandIdx === -1 ? '' : str.slice(commandIdx).trim();

  const args = parseArgs(argsRow);

  return [command, ...args];
};

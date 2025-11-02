import fs from 'fs';

export const copyFile = (sourcePath, destinationPath) => {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(sourcePath);
    const output = fs.createWriteStream(destinationPath);
    input.on('error', reject);
    output.on('error', reject);

    input.pipe(output);

    output.on('close', resolve);
  });
};

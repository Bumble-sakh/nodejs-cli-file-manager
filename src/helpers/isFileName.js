import { parse } from 'path';

export const isFileName = (path) => {
  const fileName = parse(path).base;
  return path === fileName;
};

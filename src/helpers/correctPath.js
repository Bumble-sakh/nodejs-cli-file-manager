import { parse, resolve } from 'path';
import store from '../store/store.js';

export const correctPath = (path) => {
  const parsedPath = parse(path);

  if (parsedPath.root) {
    return resolve(path);
  }

  return resolve(store.currentPath, path);
};

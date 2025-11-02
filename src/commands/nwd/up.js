import path from 'path';
import store from '../../store/store.js';

export const up = () => {
  store.currentPath = path.resolve(store.currentPath, '../');
};

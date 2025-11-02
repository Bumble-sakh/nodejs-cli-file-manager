import { homedir } from 'os';

const store = {
  startPath: '',
  currentPath: '',
};

const initialStore = () => {
  store.startPath = homedir();
  store.currentPath = store.startPath;
};

initialStore();

export default store;

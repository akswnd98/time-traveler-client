import { atom } from 'recoil';

const drawer = atom<boolean>({
  key: 'drawer',
  default: false,
});

export default drawer;

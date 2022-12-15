import { atom } from 'recoil';

const profileCropPopup = atom<boolean>({
  key: 'profileCropPopupState',
  default: false,
});

export default profileCropPopup;

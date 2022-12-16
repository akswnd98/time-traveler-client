import { getMyProfileApi } from '@src/api/BaseApi/GetApi/user/GetMyProfile';
import { atom, useRecoilState } from 'recoil';

export default class Controller {
  protected static profileCropPopupAtom = atom<boolean>({
    key: 'profileCropPopupState',
    default: false,
  });
  readonly profileCropPopup: boolean;
  protected setProfileCropPopupState: ReturnType<typeof useRecoilState<boolean>>[1];

  protected static profileImageAtom = atom<string>({
    key: 'profileImageState',
    default: '',
  });
  readonly profileImage: string;
  protected setProfileImageState: ReturnType<typeof useRecoilState<string>>[1];

  protected static croppedImageAtom = atom<string>({
    key: 'croppedImageState',
    default: '',
  });
  readonly croppedImage: string;
  protected setCroppedImageState: ReturnType<typeof useRecoilState<string>>[1];

  constructor () {
    [this.profileCropPopup, this.setProfileCropPopupState] = useRecoilState<boolean>(Controller.profileCropPopupAtom);
    [this.profileImage, this.setProfileImageState] = useRecoilState<string>(Controller.profileImageAtom);
    [this.croppedImage, this.setCroppedImageState] = useRecoilState<string>(Controller.croppedImageAtom);
  }

  async initializeProfileImage () {
    const profile = await getMyProfileApi.getMyProfile();
    this.setCroppedImageState(profile.profileImageUrl);
  }

  open (profileImage: string) {
    this.setProfileImageState(profileImage);
    this.setProfileCropPopupState(true);
  }

  applyCrop (croppedImage: string) {
    this.setCroppedImageState(croppedImage);
    this.setProfileCropPopupState(false);
  }

  closeWithoutApply () {
    this.setProfileCropPopupState(false);
  }
}

export function useController () {
  return new Controller();
}

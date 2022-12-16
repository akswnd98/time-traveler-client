import { EventType } from '..';
import Observer from '@src/data-binding/Observer';
import { atom, useRecoilState } from 'recoil';

export default class Profile extends Observer<EventType> {
  protected static profileAtom = atom<EventType>({
    key: 'profileAtom',
    default: {
      id: -1,
      email: '',
      nickname: '',
      profileImageUrl: '',
    },
  });
  public readonly profile: EventType;
  protected setProfileState: ReturnType<typeof useRecoilState<EventType>>[1];

  constructor () {
    super();
    [this.profile, this.setProfileState] = useRecoilState<EventType>(Profile.profileAtom);
  }

  async update (e: EventType) {
    this.setProfileState(e);
  }
}

export function useProfile () {
  return new Profile();
}

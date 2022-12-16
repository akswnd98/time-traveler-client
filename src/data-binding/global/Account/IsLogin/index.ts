import { EventType } from '@src/data-binding/model/Account';
import Observer from '@src/data-binding/Observer';
import { atom, useRecoilState } from 'recoil';

export default class IsLogin extends Observer<EventType> {
  protected static isLoginAtom = atom<boolean>({
    key: 'isLoginAtom',
    default: false,
  });
  public readonly isLogin: boolean;
  protected setIsLoginState: ReturnType<typeof useRecoilState<boolean>>[1];
  

  constructor () {
    super();
    [this.isLogin, this.setIsLoginState] = useRecoilState<boolean>(IsLogin.isLoginAtom);
  }

  async update (e: EventType) {
    this.setIsLoginState(true);
  }
}

export function useIsLogin () {
  return new IsLogin();
}
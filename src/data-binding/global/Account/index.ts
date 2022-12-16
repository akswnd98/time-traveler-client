import { useIsLogin } from './IsLogin';
import { useProfile } from './Profile';
import Notifier from '@src/data-binding/Notifier';

export type EventType = {
  id: number;
  nickname: string;
  email: string;
  profileImageUrl: string;
};

export default class Account extends Notifier<EventType> {
  async updateAccount (profile: EventType) {
    await this.notify(profile);
  }
}


export function useAccount () {
  const isLogin = useIsLogin();
  const profile = useProfile();

  return new Account({
    observers: [
      isLogin,
      profile,
    ],
  });
}

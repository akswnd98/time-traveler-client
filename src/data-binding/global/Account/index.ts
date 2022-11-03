import Account from '@src/data-binding/model/Account';
import useIsLogin from './IsLogin';
import useProfile from './Profile';

export let account: Account | undefined = undefined;

export default function useAccount () {
  const isLogin = useIsLogin();
  const profile = useProfile();

  return (account = new Account({
    observers: [
      isLogin,
      profile,
    ],
  }));
}

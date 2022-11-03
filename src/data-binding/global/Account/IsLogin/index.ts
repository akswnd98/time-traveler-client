import IsLogin from '@src/data-binding/model-observer/IsLogin';

export let isLogin: IsLogin | undefined = undefined;

export default function useIsLogin () {
  return (isLogin = new IsLogin());
};

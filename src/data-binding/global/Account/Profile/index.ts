import Profile from '@src/data-binding/model-observer/Profile';

export let profile: Profile | undefined = undefined;

export default function useProfile () {
  return (profile = new Profile());
}

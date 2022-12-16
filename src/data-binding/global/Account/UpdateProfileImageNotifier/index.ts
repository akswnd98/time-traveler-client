import Notifier from '@src/data-binding/Notifier';
import { EventType } from '..';
import { useProfile } from '../Profile';

export default class UpdateProfileImageNotifier extends Notifier<EventType> {

  async updateProfileImage (imageUrl: string) {
    await this.notify({
      id: -1,
      nickname: '',
      email: '',
      profileImageUrl: imageUrl,
    });
  }
}

export function useUpdateProfileImageNotifier () {
  const profile = useProfile();
  return new UpdateProfileImageNotifier({
    observers: [
      profile,
    ],
  });
}

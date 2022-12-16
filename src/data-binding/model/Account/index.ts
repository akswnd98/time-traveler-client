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

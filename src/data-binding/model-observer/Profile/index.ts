import { EventType } from '@src/data-binding/model/Account';
import Observer from '@src/data-binding/Observer';
import { useState } from 'react';

export default class Profile extends Observer<EventType> {
  public readonly profile: EventType;
  private setProfile: React.Dispatch<React.SetStateAction<EventType>>;

  constructor () {
    super();
    [this.profile, this.setProfile] = useState<EventType>({
      id: -1,
      email: '',
      nickname: '',
    });
  }

  async update (e: EventType) {
    this.setProfile(e);
  }
}

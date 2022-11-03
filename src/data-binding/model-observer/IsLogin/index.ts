import { EventType } from '@src/data-binding/model/Account';
import Observer from '@src/data-binding/Observer';
import { useState } from 'react';

export default class IsLogin extends Observer<EventType> {
  public readonly isLogin: boolean;
  private setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;

  constructor () {
    super();
    [this.isLogin, this.setIsLogin] = useState<boolean>(false);
  }

  async update (e: EventType) {
    this.setIsLogin(true);
  }
}

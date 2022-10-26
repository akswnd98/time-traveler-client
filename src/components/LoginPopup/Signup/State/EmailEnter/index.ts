import State from '..';
import axios from 'axios';
import { validateEmailApi } from '@src/api/BaseApi/GetApi/signup/ValidateEmail';

export type ConstructorParam = {
  getEmail: () => string;
  handleEmailValidationFailed: () => Promise<void>;
  enterNextStage: () => void;
  enterPrevStage: () => void;
};

export default class EmailEnter extends State {
  getEmail: () => string;
  enterNextStage: () => void;
  enterPrevStage: () => void;
  handleEmailValidationFailed: () => Promise<void>;

  constructor (payload: ConstructorParam) {
    super();
    this.getEmail = payload.getEmail;
    this.enterNextStage = payload.enterNextStage;
    this.enterPrevStage = payload.enterPrevStage;
    this.handleEmailValidationFailed = payload.handleEmailValidationFailed;
  }

  async enterNextState () {
    try {
      await validateEmailApi.validateEmail({ email: this.getEmail() });
      this.enterNextStage();
    } catch (e) {
      await this.handleEmailValidationFailed();
      throw Error('EmailEnter.enterNextState failed');
    }
  }

  async enterPrevState () {
    this.enterPrevStage();
  }
}

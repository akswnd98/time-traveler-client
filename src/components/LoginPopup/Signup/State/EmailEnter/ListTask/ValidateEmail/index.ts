import Task from '../../../Task';
import axios from 'axios';
import { validateEmailApi } from '@src/api/BaseApi/GetApi/signup/ValidateEmail';

export type ConstructorParam = {
  handleEmailValidationFailed: () => Promise<void>;
};

export default class ValidateEmail extends Task<string> {
  handleEmailValidationFailed: () => Promise<void>;

  constructor (payload: ConstructorParam) {
    super();
    this.handleEmailValidationFailed = payload.handleEmailValidationFailed;
  }

  async execute (payload: string) {
    try {
      this.validateEmail(payload);
    } catch (e) {
      this.handleEmailValidationFailed();
    }
  }

  async validateEmail (email: string) {
    await validateEmailApi.validateEmail({ email });
  }
}

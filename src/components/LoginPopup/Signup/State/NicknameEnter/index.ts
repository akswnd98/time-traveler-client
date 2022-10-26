import { requestCertificationApi } from '@src/api/BaseApi/GetApi/signup/RequestCertification';
import { validateEmailApi } from '@src/api/BaseApi/GetApi/signup/ValidateEmail';
import { validateNicknameApi } from '@src/api/BaseApi/GetApi/signup/ValidateNickname';
import axios from 'axios';
import State from '..';

export type ConstructorParam = {
  getEmail: () => string;
  getNickname: () => string;
  handleNicknameValidationFailed: () => void;
  enterNextStage: () => void;
  enterPrevStage: () => void;
};

export default class NicknameEnter extends State {
  getEmail: () => string;
  getNickname: () => string;
  handleNicknameValidationFailed: () => void;
  enterNextStage: () => void;
  enterPrevStage: () => void;

  constructor (payload: ConstructorParam) {
    super();
    this.getEmail = payload.getEmail;
    this.getNickname = payload.getNickname;
    this.handleNicknameValidationFailed = payload.handleNicknameValidationFailed;
    this.enterNextStage = payload.enterNextStage;
    this.enterPrevStage = payload.enterPrevStage;
  }

  async enterNextState () {
    try {
      await validateNicknameApi.validateNickname({ nickname: this.getNickname() });
      await requestCertificationApi.requestCertification({ email: this.getEmail(), nickname: this.getNickname() });
      this.enterNextStage();
    } catch (e) {
      this.handleNicknameValidationFailed();
    }
  }

  async enterPrevState () {
    try {
      this.enterPrevStage();
    } catch (e) {
    }
  }
}

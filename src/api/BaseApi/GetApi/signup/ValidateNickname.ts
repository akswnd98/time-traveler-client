import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  nickname: string;
};

export default class ValidateNickname extends GetApi<RequestParam> {
  async validateNickname (req: RequestParam) {
    await this.get('/signup/validateNickname', { params: req });
  }
}

export const validateNicknameApi = new ValidateNickname({ instance: defaultAxiosInstance });

import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  email: string;
};

export default class ValidateEmail extends GetApi<RequestParam> {
  async validateEmail (req: RequestParam) {
    await this.get('/signup/validateEmail', { params: req });
  }
}

export const validateEmailApi = new ValidateEmail({ instance: defaultAxiosInstance });

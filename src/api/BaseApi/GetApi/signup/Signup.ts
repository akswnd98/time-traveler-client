import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  uuid: string;
};

export class Signup extends GetApi<RequestParam> {
  async signup (req: RequestParam) {
    await this.get('/signup', { params: req });
  }
}

export const signupApi = new Signup({ instance: defaultAxiosInstance });

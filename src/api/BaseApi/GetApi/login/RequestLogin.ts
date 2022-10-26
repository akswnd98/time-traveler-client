import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  email: string;
};

export default class RequestLogin extends GetApi<RequestParam> {
  async requestLogin (req: RequestParam) {
    await this.get('/login/requestLogin', { params: req });
  }
}

export const requestLoginApi = new RequestLogin({ instance: defaultAxiosInstance });

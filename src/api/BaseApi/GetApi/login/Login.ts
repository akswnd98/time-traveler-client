import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  uuid: string;
};

export type ResponseParam = {
  accessToken: string;
  refreshToken: string;
};

export default class Login extends GetApi<RequestParam, ResponseParam> {
  async login (req: RequestParam) {
    return await this.get('/login', { params: req });
  }
}

export const loginApi = new Login({ instance: defaultAxiosInstance });

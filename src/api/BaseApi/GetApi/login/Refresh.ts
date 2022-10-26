import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  refreshToken: string;
};

export type ResponseParam = {
  accessToken: string;
  refreshToken: string;
};

export default class Refresh extends GetApi<RequestParam, ResponseParam> {
  async refresh (req: RequestParam) {
    return await this.get('/login/refresh', { params: req });
  }
}

export const refreshApi = new Refresh({ instance: defaultAxiosInstance });

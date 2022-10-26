import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  email: string;
  nickname: string;
};

export default class RequestCertification extends GetApi<RequestParam> {
  async requestCertification (req: RequestParam) {
    await this.get('/signup/requestCertification', { params: req });
  }
}

export const requestCertificationApi = new RequestCertification({ instance: defaultAxiosInstance });

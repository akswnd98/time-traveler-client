import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type ResponseParam = {
  id: number;
  email: string;
  nickname: string;
};

export default class GetProfile extends GetApi<void, ResponseParam> {
  async getProfile () {
    return await this.get('/user/getProfile', { params: undefined });
  }
}

export const getProfileApi = new GetProfile({ instance: defaultAxiosInstance });

import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type ResponseParam = {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
};

export default class GetMyProfile extends GetApi<void, ResponseParam> {
  async getMyProfile () {
    return await this.get('/user/getMyProfile', { params: undefined });
  }
}

export const getMyProfileApi = new GetMyProfile({ instance: defaultAxiosInstance });

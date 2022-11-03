import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import PostApi from '..';

export type RequestParam = {
  refreshToken: string;
};

export default class Logout extends PostApi<RequestParam> {
  async logout () {
    await this.post('/logout', { refreshToken: window.localStorage.getItem('refresh-token')! }, {});
  }
}

export const logoutApi = new Logout({ instance: defaultAxiosInstance });

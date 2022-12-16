import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import PostApi from '..';

export default class ClearProfileImage extends PostApi<void> {
  async clearProfileImage () {
    return await this.post('/user/clearProfileImage', undefined, {});
  }
}

export const clearProfileImageApi = new ClearProfileImage({ instance: defaultAxiosInstance });

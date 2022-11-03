import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import PostApi from '..';

export type RequestParam = {
  title: string;
  body: string;
};

export default class UploadPost extends PostApi<RequestParam> {
  async uploadPost (req: RequestParam) {
    await this.post('/post/uploadPost', req, {});
  }
}

export const uploadPostApi = new UploadPost({ instance: defaultAxiosInstance });

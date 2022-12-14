import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import PostApi from '..';

export type RequestParam = {
  id: number;
  title: string;
  body: string;
};

export default class UpdatePost extends PostApi<RequestParam> {
  async updatePost (req: RequestParam) {
    await this.post('/post/updatePost', req, {});
  }
}

export const updatePostApi = new UpdatePost({ instance: defaultAxiosInstance });

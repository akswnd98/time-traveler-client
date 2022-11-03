import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  page: number;
};

export type LatestPost = {
  id: number;
  writer: string;
  title: string;
  firstUpload: string;
};

export type ResponseParam = {
  posts: LatestPost[];
}

export default class GetLatestPosts extends GetApi<RequestParam, ResponseParam> {
  async getLastestPosts (req: RequestParam) {
    return await this.get('/post/getLatestPosts', { params: req });
  }
}

export const getLatestPostsApi = new GetLatestPosts({ instance: defaultAxiosInstance });

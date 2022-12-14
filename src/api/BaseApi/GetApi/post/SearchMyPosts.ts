import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  lastIdx: number;
  keyword: string;
};

export type ResponseParam = {
  lastIdx: number;
  posts: MyPostSearched[];
};

export type MyPostSearched = {
  id: number;
  title: string;
  bodyPart: string;
  firstUpload: string;
  lastUpdate: string;
};

export default class SearchMyPosts extends GetApi<RequestParam, ResponseParam> {
  async searchMyPosts (req: RequestParam) {
    return await this.get('/post/searchMyPosts', { params: req });
  }
}

export const searchMyPostsApi = new SearchMyPosts({ instance: defaultAxiosInstance });

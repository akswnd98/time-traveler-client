import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  id: number;
};

export type ResponseParam = {
  id: number;
  writer: string;
  title: string;
  body: string;
  firstUpload: string;
  lastUpdate: string;
};

export default class GetPost extends GetApi<RequestParam, ResponseParam> {
  async getPost (req: RequestParam) {
    return await this.get('/post/getPost', { params: req });
  }
}

export const getPostApi = new GetPost({ instance: defaultAxiosInstance });

import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type ResponseParam = {
  num: number;
};

export default class GetTotalLatestPageNum extends GetApi<void, ResponseParam> {
  async getTotalPageNum () {
    return await this.get('/post/getTotalLatestPageNum', { params: undefined });
  }
}

export const getTotalLatestPageNumApi = new GetTotalLatestPageNum({ instance: defaultAxiosInstance });

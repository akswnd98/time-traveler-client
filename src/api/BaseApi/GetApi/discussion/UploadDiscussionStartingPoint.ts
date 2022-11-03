import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import PostApi from '../../PostApi';

export type RequestParam = {
  postId: number;
  body: string;
};

export type ResponseParam = {
  id: number;
};

export default class UploadDiscussionStartingPoint extends PostApi<RequestParam, ResponseParam> {
  async uploadDiscussionStartingPoint (req: RequestParam) {
    return await this.post('/discussion/uploadStartingPoint', req, {});
  }
}

export const uploadDiscussionStartingPoint = new UploadDiscussionStartingPoint({ instance: defaultAxiosInstance });

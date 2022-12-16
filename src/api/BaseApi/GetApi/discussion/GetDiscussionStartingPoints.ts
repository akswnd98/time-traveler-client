import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import GetApi from '..';

export type RequestParam = {
  postId: number;
};

export type ResponseParam = {
  startingPoints: {
    id: number;
    body: string;
    writerId: number;
    writer: string;
    writerProfileImageUrl: string;
    firstUpload: string;
    isEdited: boolean;
  }[]
};

export default class GetDiscussionStartingPoints extends GetApi<RequestParam, ResponseParam> {
  async getDiscussionStartingPoints (req: RequestParam) {
    return await this.get('/discussion/getStartingPoints', { params: req });
  }
}

export const getDiscussionStartingPointsApi = new GetDiscussionStartingPoints({ instance: defaultAxiosInstance });

import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import PostApi from '..';

export type RequestParam = {
  id: number;
};

export type ResponseParam = {
  startingPoints: {
    id: number;
    body: string;
    writerId: number;
    writer: string;
    firstUpload: string;
    isEdited: boolean;
  }[]
};

export default class DeleteDiscussionStartingPoint extends PostApi<RequestParam, ResponseParam> {
  async deleteDiscussionStartingPoints (req: RequestParam) {
    return await this.post('/discussion/deleteStartingPoint', req, {});
  }
}

export const deleteDiscussionStartingPointApi = new DeleteDiscussionStartingPoint({ instance: defaultAxiosInstance });

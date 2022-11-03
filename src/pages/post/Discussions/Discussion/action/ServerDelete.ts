import Action from '@src/action';
import { deleteDiscussionStartingPointApi } from '@src/api/BaseApi/PostApi/discussion/DeleteDiscussionStartingPoint';

export type ConstructorParam = {
  id: number
};

export default class ServerDelete extends Action<void> {
  private id: number;

  constructor (payload: ConstructorParam) {
    super();
    this.id = payload.id;
  }

  async doAction () {
    await deleteDiscussionStartingPointApi.deleteDiscussionStartingPoints({ id: this.id })
  }
}

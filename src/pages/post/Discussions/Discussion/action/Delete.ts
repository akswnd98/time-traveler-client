import Action from '@src/action';
import { discussionStartingPoints } from '@src/data-binding/global/DiscussionStartingPoints';
import { DiscussionStartingPoint } from '@src/data-binding/model/DiscussionStartingPoints';

export type ConstructorParam = {
  id: number;
};

export default class Delete extends Action<void> {
  id: number;

  constructor (payload: ConstructorParam) {
    super();
    this.id = payload.id;
  }

  async doAction () {
    discussionStartingPoints?.update(this.deleteOne(discussionStartingPoints!.discussionStartingPoints, this.id));
  }

  private deleteOne (ar: DiscussionStartingPoint[], id: number) {
    return ar.filter((v) => v.id !== id);
  }
}

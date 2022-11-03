import Action from '@src/action';
import { uploadDiscussionStartingPoint } from '@src/api/BaseApi/GetApi/discussion/UploadDiscussionStartingPoint';
import { profile } from '@src/data-binding/global/Account/Profile';
import { discussionStartingPoints } from '@src/data-binding/global/DiscussionStartingPoints';
import moment from 'moment';
import { useSearchParams } from 'react-router-dom';

export type ConstructorParam = {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
};

export default class UploadAndAppend extends Action<void> {
  private searchParams: URLSearchParams;
  readonly textareaRef: React.RefObject<HTMLTextAreaElement>;

  constructor (payload: ConstructorParam) {
    super();
    [this.searchParams] = useSearchParams();
    this.textareaRef = payload.textareaRef;
  }

  async doAction () {
    const id = (await uploadDiscussionStartingPoint.uploadDiscussionStartingPoint({
      postId: parseInt(this.searchParams.get('no')!),
      body: this.textareaRef.current!.value,
    })).id;
    discussionStartingPoints?.update(discussionStartingPoints!.discussionStartingPoints.concat({
      id,
      writerId: profile!.profile.id,
      writer: profile!.profile.nickname,
      body: this.textareaRef.current!.value,
      firstUpload: moment(moment.now()).format(),
    }));
  }
}

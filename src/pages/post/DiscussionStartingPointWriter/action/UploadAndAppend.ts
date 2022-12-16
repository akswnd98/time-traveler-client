import Action from '@src/action';
import { uploadDiscussionStartingPoint } from '@src/api/BaseApi/GetApi/discussion/UploadDiscussionStartingPoint';
import Profile, { useProfile } from '@src/data-binding/global/Account/Profile';
import { discussionStartingPoints } from '@src/data-binding/global/DiscussionStartingPoints';
import moment from 'moment';
import { useSearchParams } from 'react-router-dom';

export type ConstructorParam = {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
};

export default class UploadAndAppend extends Action<void> {
  private searchParams: URLSearchParams;
  readonly textareaRef: React.RefObject<HTMLTextAreaElement>;
  protected profile: Profile

  constructor (payload: ConstructorParam) {
    super();
    [this.searchParams] = useSearchParams();
    this.profile = useProfile();
    this.textareaRef = payload.textareaRef;
  }

  async doAction () {
    const id = (await uploadDiscussionStartingPoint.uploadDiscussionStartingPoint({
      postId: parseInt(this.searchParams.get('no')!),
      body: this.textareaRef.current!.value,
    })).id;
    discussionStartingPoints?.update(discussionStartingPoints!.discussionStartingPoints.concat({
      id,
      writerId: this.profile.profile.id,
      writer: this.profile.profile.nickname,
      writerProfileImageUrl: this.profile.profile.profileImageUrl,
      body: this.textareaRef.current!.value,
      firstUpload: moment(moment.now()).format(),
    }));
  }
}

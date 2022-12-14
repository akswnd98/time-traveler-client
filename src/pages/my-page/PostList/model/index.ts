import { MyPostSearched, searchMyPostsApi } from '@src/api/BaseApi/GetApi/post/SearchMyPosts';
import { atom, useRecoilState } from 'recoil';

export default class PostListModel {
  protected static myPostSearchedAtom = atom<MyPostSearched[]>({
    key: 'myPostSearchedAtom',
    default: [],
  });
  readonly posts: MyPostSearched[];
  protected setPostsState: ReturnType<typeof useRecoilState<MyPostSearched[]>>[1];

  protected static lastIdx: number = 0;

  protected static keyword: string = '';

  constructor () {
    [this.posts, this.setPostsState] = useRecoilState<MyPostSearched[]>(PostListModel.myPostSearchedAtom);
  }

  async expand () {
    const ret = await searchMyPostsApi.searchMyPosts({
      lastIdx: PostListModel.lastIdx,
      keyword: PostListModel.keyword,
    });
    PostListModel.lastIdx = ret.lastIdx;
    this.setPostsState((cur) => {
      return [...cur, ...ret.posts];
    });
    console.log(this.posts);
  }

  async updateKeyword (keyword: string) {
    PostListModel.lastIdx = 0;
    PostListModel.keyword = keyword;
    await this.expand();
  }
}

export function usePostListModel () {
  return new PostListModel();
}

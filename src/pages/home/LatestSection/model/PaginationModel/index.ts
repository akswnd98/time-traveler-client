import React, { useState } from 'react';
import { getLatestPostsApi, ResponseParam } from '@src/api/BaseApi/GetApi/post/GetLatestPosts';

export default class PaginationModel {
  readonly page: number;
  protected setPageAction: React.Dispatch<React.SetStateAction<number>>
  readonly posts: ResponseParam['posts'];
  protected setPosts: React.Dispatch<React.SetStateAction<ResponseParam['posts']>>

  constructor () {
    [this.page, this.setPageAction] = useState(1);
    [this.posts, this.setPosts] = useState<ResponseParam['posts']>([]);
  }

  async setPage (payload: number) {
    this.setPageAction(payload);
    this.setPosts((await getLatestPostsApi.getLastestPosts({ page: payload })).posts);
  }
}

export function usePaginationModel () {
  return new PaginationModel();
}

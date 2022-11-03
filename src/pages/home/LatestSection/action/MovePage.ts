import Action from '@src/action';
import React, { useState } from 'react';
import { getLatestPostsApi, ResponseParam } from '@src/api/BaseApi/GetApi/post/GetLatestPosts';

export default class MovePage extends Action<number> {
  readonly page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
  readonly posts: ResponseParam['posts'];
  setPosts: React.Dispatch<React.SetStateAction<ResponseParam['posts']>>

  constructor () {
    super();
    [this.page, this.setPage] = useState(1);
    [this.posts, this.setPosts] = useState<ResponseParam['posts']>([]);
  }

  async doAction (payload: number) {
    this.setPage(payload);
    this.setPosts((await getLatestPostsApi.getLastestPosts({ page: payload })).posts);
  }
}

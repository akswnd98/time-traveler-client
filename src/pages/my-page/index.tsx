import { styled } from '@mui/material';
import Footer from '@src/components/Footer';
import Navigation from '@src/components/Navigation';
import { useEffect, useRef } from 'react';
import PostList from './PostList';
import Tab from './Tab';

export default function MyPage () {
  return (
    <Root>
      <Navigation />
      <TabWrapper>
        <Tab isSelected={true} text='글' />
        {/* <Tab isSelected={false} text='소개' /> */}
      </TabWrapper>
      <PostListWrapper>
        <PostList />
      </PostListWrapper>
      <Footer />
    </Root>
  );
}

const Root = styled('div')`
`;

const TabWrapper = styled('div')`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: top;
`;

const PostListWrapper = styled('div')`
  margin-top: 100px;
  margin-left: 30%;
  width: 40%;
  margin-bottom: 150px;
`;

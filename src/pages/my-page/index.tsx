import { styled } from '@mui/material';
import PostList from './PostList';
import Tab from './Tab';

export default function MyPage () {
  return (
    <Root>
      <TabWrapper>
        <Tab isSelected={true} text='글' />
        <Tab isSelected={false} text='소개' />
      </TabWrapper>
      <PostListWrapper>
        <PostList />
      </PostListWrapper>
    </Root>
  );
}

const Root = styled('div')`

`;

const TabWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: top;
  margin-top: 150px;
`;

const PostListWrapper = styled('div')`
  margin-top: 100px;
  margin-left: 420px;
  width: calc(100% - 420px * 2);
`;

import { styled } from '@mui/material';
import Post from './Post';

export default function PostList () {
  return (
    <Root>
      <Post />
      <Seperator />
      <Post />
      <Seperator />
      <Post />
    </Root>
  );
}

const Root = styled('div')`

`;

const Seperator = styled('div')`
  width: 600px;
  height: 4px;
  background-color: #d9d9d9;
  margin-top: 20px;
  margin-bottom: 20px;
`;

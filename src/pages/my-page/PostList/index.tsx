import { Button, styled } from '@mui/material';
import { useEffect } from 'react';
import Post from './Post';
import { usePostListModel } from './model';
import theme from '@src/theme';
import Footer from '@src/components/Footer';

export default function PostList () {
  const postListModel = usePostListModel();

  useEffect(() => {
    postListModel.expand();
  }, []);

  return (
    <Root>
      {
        postListModel.posts.map((post, i) => (
          <div key={i}>
            <Post
              id={post.id}
              title={post.title}
              bodyPart={post.bodyPart}
              firstUpload={post.firstUpload}
              lastUpdate={post.lastUpdate}
            />
            <Seperator />
          </div>
        ))
      }
      <ButtonWrapper>
        <MoreButton onClick={() => postListModel.expand()}>더보기</MoreButton>
      </ButtonWrapper>
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

const ButtonWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const MoreButton = styled(Button)`
  color: ${theme.palette.main};
  font-family: NotoSansKR;
  font-size: 16px;
  width: 500px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  border-radius: 10px;
  .MuiButtonBase-root {
    
  }
`;

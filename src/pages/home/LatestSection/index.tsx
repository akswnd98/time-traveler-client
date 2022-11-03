import styled from '@emotion/styled';
import Header from './Header';
import Item from './Item';
import { useEffect } from 'react';
import MovePage from './action/MovePage';
import Pagenation from './Pagenation';

const Root = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  display: flex:
`;

const PagenationWrapper = styled.div`
  margin-top: 40px;
`;

const EmptySpace = styled.div`
  width: 100%;
  height: 40px;
`;

export default function LatestSection () {
  const action = new MovePage();

  useEffect(() => {
    action.doAction(1);
  }, []);

  return (
    <Root>
      <Header />
      {
        action.posts.map((v, i) => (
          <Item
            key={i}
            no={v.id}
            title={v.title}
            writer={v.writer}
            writeDate={v.firstUpload}
            // views={v.views}
            // recommand={v.recommand}
          />
        ))
      }
      <PagenationWrapper>
        <Pagenation action={action} />
      </PagenationWrapper>
      <EmptySpace />
    </Root>
  );
}

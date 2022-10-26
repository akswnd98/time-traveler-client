import styled from '@emotion/styled';
import Item from './Item';
import datas from './demoDatas';

const Root = styled.div`
  width: 100%;
`;

const BestList = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const BestItem = styled(Item)``;

export default function BestSection () {

  return (
    <Root>
      <BestList>
        {
          datas.map((v, i) => (
            <BestItem key={i} thumbnail={v.thumbnail} title={v.title} />
          ))
        }
      </BestList>
    </Root>
  );
}

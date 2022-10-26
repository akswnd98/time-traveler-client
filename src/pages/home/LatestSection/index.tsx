import styled from '@emotion/styled';
import Header from './Header';
import demoDatas from './demoDatas';
import Item from './Item';

const Root = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  display: flex:
`;

export default function LatestSection () {
  return (
    <Root>
      <Header />
      {
        demoDatas.map((v, i) => (
          <Item
            key={i}
            no={v.no}
            title={v.title}
            writer={v.writer}
            writeDate={v.writeDate}
            views={v.views}
            recommand={v.recommand}
          />
        ))
      }
    </Root>
  );
}

import styled from '@emotion/styled';
import columnWidth from '../columnWidth';
import Column from './Column';

const Root = styled.div`
  width: 100%;
  height: 110px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  display: flex;
  justify-content: left;
  align-items: center;
`;

export default function LatestSection () {
  return (
    <Root>
      <Column text='번호' width={columnWidth.no} />
      <Column text='제목' width={columnWidth.title} />
      <Column text='글쓴이' width={columnWidth.writer} />
      <Column text='작성일' width={columnWidth.writeDate} />
      <Column text='조회' width={columnWidth.views} />
      <Column text='추천' width={columnWidth.recommand} />
    </Root>
  );
}

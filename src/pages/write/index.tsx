import styled from '@emotion/styled';

const Root = styled.div`
  width: 100%;
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  gap: 20px;
`;

export default function Write () {
  return (
    <Root>
      <div>글쓰기 페이지 입니다.</div>
    </Root>
  );
}

import { styled } from '@mui/material';

export default function Post () {
  return (
    <Root>
      <Title>이것은 글이다</Title>
      <BodyPart>
        팬픽시브(FanFixiv)
        <br />
        팬픽시브는 2차창작물 번역 커뮤니티입니다.
        <br />
        기획의도
      </BodyPart>
      <Meta>2022년 3월 23일</Meta>
    </Root>
  );
}

const Root = styled('div')`

`;

const Title = styled('div')`
  font-family: NotoSansKR;
  font-weight: bold;
  font-size: 24px;
`;

const BodyPart = styled('div')`
  font-family: NotoSansKR;
  font-size: 16px;
  color: gray;
  margin-top: 8px;
`;

const Meta = styled('div')`
  font-family: NotoSansKR;
  font-size: 14px;
  color: gray;
  margin-top: 20px;
`;
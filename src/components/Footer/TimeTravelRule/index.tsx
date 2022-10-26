import styled from '@emotion/styled';
import Divergence from './Divergence';

const Root = styled.div`
  color: white;
`;

const Title = styled.div`
  font-size: 48px;
`;

const Body = styled.div`
  margin-top: 40px;
  font-size: 24px;
`;

const DivergenceWrapper = styled.div`
  margin-top: 100px;
`;

export default function TimeTravelRule () {
  return (
    <Root>
      <Title>시간여행 규약</Title>
      <Body>
        누구라도 시간여행에 성공한다면 이 사이트 맨 상단의 lotto 번호 적기로 가서
        <br />
        로또의 종류, 날짜, 번호를 미래에서 온 날의 다이버전스와 함께 적어주세요.
        <br />
        <br />
        당첨금은 워프기술 개발에 사용될 것 입니다.
      </Body>
      <DivergenceWrapper>
        <Divergence digits={4409031} />
      </DivergenceWrapper>
    </Root>
  );
}

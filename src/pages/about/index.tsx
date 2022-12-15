import { styled } from '@mui/material';
import Footer from '@src/components/Footer';
import Navigation from '@src/components/Navigation';
import blackholeQhd from '@assets/blackhole-qhd.png';

export default function About () {
  return (
    <Root>
      <Navigation />
      <Main>
        <Background src={blackholeQhd} />
        <Foreground>
          <Intros>
            <Intro>
              Time Traveler는 다양한 분들의
              <br />
              시간여행에 대한 아이디어나 인사이트를
              <br />
              공유하기 위해 만들어진 사이트입니다.
            </Intro>
            <Intro>
              SF, 타임리프, 물리학, 수학 등 다양한 분야의
              <br />
              덕후, 전문가 분들 환영합니다.
            </Intro>
            <Intro>
              그 외에도 관련 코드, 교육 자료 등
              <br />
              다양한 성과를 기대하고 있습니다.
            </Intro>
            <Intro>
              엘 프사이 콩구르
            </Intro>
          </Intros>
        </Foreground>
      </Main>
      <Footer />
    </Root>
  );
}

const Root = styled('div')`
  width: 100%;
`;

const Main = styled('div')`
  position: relative;
  z-index: 0;
  height: 0;
  padding-bottom: max(1080px, calc(1440 / 2560 * 100%));
  background-color: black;
`;

const Background = styled('img')`
  width: 100%;
`;

const Foreground = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  color: white;
`;

const Intros = styled('div')`
  margin-top: 150px;
  margin-left: 320px;
  width: calc(100% - 320px);
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: top;
`;

const Intro = styled('div')`
  width: fit-content;
  background-color: #01275980;
  padding: 40px 20px;
  color: white;
  font-family: NotoSansKR;
  font-size: 20px;
  border-radius: 10px;
  :not(&:first-child) {
    margin-top: 40px;
  }
`;

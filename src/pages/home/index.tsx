import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import BestSection from './BestSection';
import changeCircleSvg from '@assets/change-circle.svg';
import { Button } from '@mui/material';
import LatestSection from './LatestSection';
import theme from '@src/theme';
import { useNavigate } from 'react-router-dom';
import Navigation from '@src/components/Navigation';
import LoginPopup from '@src/components/LoginPopup';
import Footer from '@src/components/Footer';
import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import { useProfile } from '@src/data-binding/global/Account/Profile';
import { useIsLogin } from '@src/data-binding/global/Account/IsLogin';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  width: calc(100% / 6 * 4);
  margin-left: calc(100% / 6);
  margin-top: 150px;
  padding-bottom: 150px;
  position: relative;
  z-index: 0;
`;

const HeaderLabel = styled(Button)`
  display: flex;
  justify-content: left;
  align-items: center;
  color: black;
  font-family: NotoSansKR;
`;

const MajorLabel = styled.div`
  font-weight: bold;
  font-size: 48px;
`;

const MinorLabel = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-left: 8px;
`;

const ChangeCircle = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 8px;
`;

const WriteButtonWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 8px;
`;
const WriteButton = styled(Button)`
  width: 75px;
  height: 40px;
  font-family: NotoSansKR;
  font-size: 16px;
  background-color: ${theme.palette.main};
  color: white;
`;

export default function Home () {
  const [viewMode, setViewMode] = useState<'latest' | 'best'>('latest');
  const navigate = useNavigate();
  const isLogin = useIsLogin();

  return (
    <Root>
      <Navigation />
      <Main>
        {
//          viewMode === 'latest' ? (
//            <HeaderLabel onClick={() => setViewMode('best')}>
//              <MajorLabel>??????</MajorLabel>
//              <ChangeCircle alt='change-circle' src={changeCircleSvg} />
//              <MinorLabel>?????????</MinorLabel>
//            </HeaderLabel>
//          ) : (
//            <HeaderLabel onClick={() => setViewMode('latest')}>
//              <MajorLabel>?????????</MajorLabel>
//              <ChangeCircle alt='change-circle' src={changeCircleSvg} />
//              <MinorLabel>??????</MinorLabel>
//            </HeaderLabel>
//          )
        }
        <HeaderLabel>
          <MajorLabel>??????</MajorLabel>
        </HeaderLabel>
        <WriteButtonWrapper>
          {
            isLogin.isLogin ??
              <WriteButton onClick={() => {
                navigate(`${process.env.REACT_APP_PUBLIC_URL}/write`);
              }}>
                ?????????
              </WriteButton>
          }
        </WriteButtonWrapper>
        {
          viewMode === 'latest' ? (
            <LatestSection />
          ) : (
            <BestSection />
          )
        }
      </Main>
      <LoginPopup />
      <Footer />
    </Root>
  );
}

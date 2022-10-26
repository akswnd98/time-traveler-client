import styled from '@emotion/styled';
import { useState } from 'react';
import BestSection from './BestSection';
import changeCircleSvg from '@assets/change-circle.svg';
import { Button } from '@mui/material';
import LatestSection from './LatestSection';
import theme from '@src/theme';
import { useNavigate } from 'react-router-dom';

const Root = styled.div`
  width: calc(100% / 6 * 4);
  margin-left: calc(100% / 6);
  padding-top: 40px;
  padding-bottom: 150px;
`;

const HeaderLabel = styled(Button)`
  display: flex;
  justify-content: left;
  align-items: center;
  color: black;
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
  font-size: 16px;
  background-color: ${theme.palette.main};
  color: white;
`;

export default function Home () {
  const [viewMode, setViewMode] = useState<'latest' | 'best'>('latest');
  const navigate = useNavigate();

  return (
    <Root>
        {
          viewMode === 'latest' ? (
            <HeaderLabel onClick={() => setViewMode('best')}>
              <MajorLabel>최근</MajorLabel>
              <ChangeCircle alt='change-circle' src={changeCircleSvg} />
              <MinorLabel>베스트</MinorLabel>
            </HeaderLabel>
          ) : (
            <HeaderLabel onClick={() => setViewMode('latest')}>
              <MajorLabel>베스트</MajorLabel>
              <ChangeCircle alt='change-circle' src={changeCircleSvg} />
              <MinorLabel>최근</MinorLabel>
            </HeaderLabel>
          )
        }
        <WriteButtonWrapper>
          <WriteButton onClick={() => {
            navigate('/write');
          }}>글쓰기</WriteButton>
        </WriteButtonWrapper>
        {
          viewMode === 'latest' ? (
            <LatestSection />
          ) : (
            <BestSection />
          )
        }
    </Root>
  );
}

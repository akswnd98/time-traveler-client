import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import BestSection from './BestSection';
import changeCircleSvg from '@assets/change-circle.svg';
import { Button } from '@mui/material';
import LatestSection from './LatestSection';

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

export default function Home () {
  const [viewMode, setViewMode] = useState<'latest' | 'best'>('latest');

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

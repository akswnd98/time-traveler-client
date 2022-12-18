import styled from '@emotion/styled';
import { Button } from '@mui/material';
import logoSvg from '@src/assets/logo.svg';
import theme from '@src/theme';

const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoButton = styled(Button)`
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
  color: white;
  text-transform: none;
  color: ${theme.palette.main};
`;

const LogoImg = styled.img`
  width: 82px;
  height: 30px;
`;

export default function Logo () {
  return (
    <Root>
      <LogoButton
        startIcon={<LogoImg alt="logo" src={logoSvg} />}
        onClick={() => location.href = `${process.env.REACT_APP_PUBLIC_URL}/`}
      >
        Time Traveler
      </LogoButton>
    </Root>
  )
}

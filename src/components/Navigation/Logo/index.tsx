import styled from '@emotion/styled';
import logoSvg from '@src/assets/logo.svg';

const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 82px;
  height: 30px;
`;

const Text = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
  color: white;
`;

export default function Logo () {
  return (
    <Root>
      <LogoImg src={logoSvg} />
      <Text>Time Traveler</Text>
    </Root>
  )
}

import styled from '@emotion/styled';
import githubSvg from '@assets/github.svg';
import { Button, IconButton } from '@mui/material';

const Root = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const GithubLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const TextButton = styled(Button)`
  margin-left: 20px;
  font-family: NotoSansKR;
  font-weight: bold;
  font-size: 16px;
  color: white;
  text-transform: none;
`;

export default function Buttons () {
  return (
    <Root>
      <IconButton><GithubLogo src={githubSvg} /></IconButton>
      <TextButton>Lotto 번호 적기</TextButton>
      <TextButton>About</TextButton>
      <TextButton>Login</TextButton>
    </Root>
  )
}
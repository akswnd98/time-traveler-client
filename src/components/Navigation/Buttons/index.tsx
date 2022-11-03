import styled from '@emotion/styled';
import githubSvg from '@assets/github.svg';
import { Avatar, Button, IconButton } from '@mui/material';
import { useRecoilState } from 'recoil';
import loginPopupState from '@src/states/loginPopup';
import drawerState from '@src/states/drawer';
import { isLogin } from '@src/data-binding/global/Account/IsLogin';

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

const AvatarButton = styled(IconButton)`
  margin-left: 20px;
`;

export default function Buttons () {
  const [loginPopup, setLoginPopup] = useRecoilState(loginPopupState);
  const [drawer, setDrawer] = useRecoilState(drawerState);

  return (
    <Root>
      <IconButton><GithubLogo src={githubSvg} /></IconButton>
      <TextButton>Lotto 번호 적기</TextButton>
      <TextButton>About</TextButton>
      {
        isLogin?.isLogin ? (
          <AvatarButton
            onClick={() => { setDrawer(!drawer) }}
          >
            <Avatar />
          </AvatarButton>
        ) : (
          <TextButton onClick={() => setLoginPopup(!loginPopup)}>Login</TextButton>
        )
      }
    </Root>
  )
}
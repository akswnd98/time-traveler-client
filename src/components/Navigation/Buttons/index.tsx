import styled from '@emotion/styled';
import { Avatar, Button, IconButton, SvgIcon } from '@mui/material';
import { useRecoilState } from 'recoil';
import loginPopupState from '@src/states/loginPopup';
import drawerState from '@src/states/drawer';
import theme from '@src/theme';
import Github from '@src/assets/icons/Github';
import { useProfile } from '@src/data-binding/global/Account/Profile';
import { useIsLogin } from '@src/data-binding/global/Account/IsLogin';

export default function Buttons () {
  const [loginPopup, setLoginPopup] = useRecoilState(loginPopupState);
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const profile = useProfile();
  const isLogin = useIsLogin();

  return (
    <Root>
      {/* <IconButton><GithubLogo src={githubSvg} /></IconButton> */}
      <IconButton onClick={() => location.href = 'https://github.com/akswnd98/time-traveler-client'}><SvgIcon sx={{ width: 40, height: 40 }} viewBox="0 0 40 40" component={Github} /></IconButton>
      {/* <TextButton>Lotto 번호 적기</TextButton> */}
      <TextButton onClick={() => location.href = `${process.env.REACT_APP_PUBLIC_URL}/about`}>About</TextButton>
      {
        isLogin?.isLogin ? (
          <AvatarButton
            onClick={() => { setDrawer(!drawer) }}
          >
            <Avatar src={profile.profile.profileImageUrl} />
          </AvatarButton>
        ) : (
          <TextButton onClick={() => setLoginPopup(!loginPopup)}>Login</TextButton>
        )
      }
    </Root>
  )
}

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
  color: ${theme.palette.main};
`;

const AvatarButton = styled(IconButton)`
  margin-left: 20px;
`;

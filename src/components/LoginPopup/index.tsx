import { Dialog } from '@mui/material';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import loginPopupState from '@src/states/loginPopup';
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';
import { css } from '@emotion/react';

const Root = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 10px;
    border-color: white;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
    width: 360px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default function LoginPopup () {
  const [loginPopup, setLoginPopup] = useRecoilState(loginPopupState);
  const [popupMode, setPopupMode] = useState<'login' | 'signup'>('login');

  return (
    <Root open={loginPopup} onClose={() => setLoginPopup(!loginPopup)}>
      <div
        css={css`
          display: ${popupMode === 'login' ? 'block' : 'none'};
        `}
      >
        <Login
          setPopupMode={setPopupMode}
        />
      </div>
      <div
        css={css`
          display: ${popupMode === 'signup' ? 'block' : 'none'};
        `}
      >
        <Signup
          setPopupMode={setPopupMode}
        />
      </div>
    </Root>
  );
}

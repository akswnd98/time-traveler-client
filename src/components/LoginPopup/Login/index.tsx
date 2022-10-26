import { Button, OutlinedInput } from '@mui/material';
import styled from '@emotion/styled';
import eastSvg from '@assets/east.svg';
import googleSocialLoginSvg from '@assets/google-social-login.svg';
import githubSocialLoginSvg from '@assets/github-social-login.svg';
import { requestLoginApi } from '@src/api/BaseApi/GetApi/login/RequestLogin';
import { useRef } from 'react';

const Root = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const East = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 8px;
`;

const EmailInput = styled(OutlinedInput)`
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  border-radius: 10px;
  margin-top: 60px;
  padding: 0;
  width: 100%;
  height: 40px;
  .MuiOutlinedInput-root {
    padding: 0;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
    padding: 0px;
  }
`;

const TinyTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
const TinyTitle = styled.div`
  font-size: 24px;
`;

const SocialLoginButtons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLoginButton = styled(Button)``;

const SocialLoginImg = styled.img`
  width: 48px;
  height: 48px;
  &:not(:first-child) {
    margin-left: 20px;
  }
  cursor: pointer;
`;

const GoogleSocialLoginImg = styled(SocialLoginImg)`
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 10%);
`;

const SignupButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 60px;
`;

const SignupButton = styled(Button)`
  color: gray;
  font-size: 24px;
`;

export type PropsType = {
  setPopupMode: (mode: 'login' | 'signup') => void;
};

export default function Login (props: PropsType) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Root>
      <Title>로그인</Title>
      <EmailInput
        inputRef={inputRef}
        endAdornment={
          <East
            src={eastSvg}
            onClick={async () => await requestLoginApi.requestLogin({ email: inputRef.current!.value })}
          />
        }
        onKeyDown={async (e) => {
          if (e.key === 'Enter') {
            await requestLoginApi.requestLogin({ email: inputRef.current!.value });
          }
        }}
      />
      <TinyTitleWrapper>
        <TinyTitle>소셜 로그인</TinyTitle>
      </TinyTitleWrapper>
      <SocialLoginButtons>
        <SocialLoginButton>
          <GoogleSocialLoginImg src={googleSocialLoginSvg} />
        </SocialLoginButton>
        <SocialLoginButton>
          <SocialLoginImg src={githubSocialLoginSvg} />
        </SocialLoginButton>
      </SocialLoginButtons>
      <SignupButtonWrapper>
        <SignupButton onClick={() => props.setPopupMode('signup')}>회원가입</SignupButton>
      </SignupButtonWrapper>
    </Root>
  );
}

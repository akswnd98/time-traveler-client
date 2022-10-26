import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import InputSet from './InputSet';

const Root = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

const Slides = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  position: absolute;
  transition-duration: 0.5s;
`;

const Main = styled.div`
  width: 100%;
  margin-right: 40px;
  flex-shrink: 0;
`;

const Welcome = styled.div`
  width: 100%;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const WelcomeMessage = styled.div`
  font-size: 48px;
  font-weight: bold;
  z-index: 100;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const FailedMessage = styled.div`
  font-size: 14px;
  color: red;
  margin-top: 8px;
  margin-left: 20px;
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

export default function Signup (props: PropsType) {
  const slidesRef = useRef<HTMLDivElement>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    
  }, []);

  return (
    <Root>
      <Slides
        ref={slidesRef}
      >
        <Main>
          <Title>회원가입</Title>
          <InputSet
            enterPleaseCheckEmailStage={() => {
              slidesRef.current!.style.transform = 'translateX(-400px)';
            }}
            setErrorMessage={setErrorMessage}
          />
          <FailedMessage>{errorMessage}</FailedMessage>
          <SignupButtonWrapper>
            <SignupButton onClick={() => props.setPopupMode('login')}>로그인</SignupButton>
          </SignupButtonWrapper>
        </Main>
        <Welcome>
          <WelcomeMessage>인증 메일을<br />확인 해주세요!</WelcomeMessage>
        </Welcome>
      </Slides>
    </Root>
  );
}

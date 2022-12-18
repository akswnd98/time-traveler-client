import { useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { signupApi } from '@src/api/BaseApi/GetApi/signup/Signup';

async function doAsyncTask () {
  await signup();
  await login();
  window.location.href = `${process.env.REACT_APP_PUBLIC_URL}`;
}

async function signup () {
  try {
    const queryParams = new URLSearchParams(window.location.search);
    const uuid = queryParams.get('uuid')!;
    await signupApi.signup({ uuid });
  } catch (e) {
  }
}

async function login () {
  try {

  } catch (e) {
  }
}

const Root = styled.div`
  width: 100%;
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  gap: 20px;
`;

export default function Signup () {
  useEffect(() => {
    doAsyncTask();
  }, []);
  return (
    <Root>
      <div>회원가입이 진행 중입니다.</div>
      <div>회원가입 후 자동로그인 됩니다.</div>
    </Root>
  );
}

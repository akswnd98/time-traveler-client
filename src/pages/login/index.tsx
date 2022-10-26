import { useEffect } from 'react';
import styled from '@emotion/styled';
import { loginApi } from '@src/api/BaseApi/GetApi/login/Login';

async function doAsyncTask (uuid: string) {
  await login (uuid);
  window.location.href = '/';
}

async function login (uuid: string) {
  const tokens = await loginApi.login({ uuid });
  window.localStorage.setItem('access-token', tokens.accessToken);
  window.localStorage.setItem('refresh-token', tokens.refreshToken);
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

export default function Login () {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams.get('uuid'));
    doAsyncTask(queryParams.get('uuid')!);
  }, []);
  return (
    <Root>
      <div>로그인이 진행 중입니다.</div>
    </Root>
  );
}

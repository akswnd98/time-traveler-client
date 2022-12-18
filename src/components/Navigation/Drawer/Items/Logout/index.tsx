import styled from '@emotion/styled';
import { SvgIcon } from '@mui/material';
import { logoutApi } from '@src/api/BaseApi/PostApi/logout/Logout';
import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import LogoutSvg from '@src/assets/icons/Logout';

import Item from '..';

const Root = styled.div``;

export default function Logout() {
  return (
    <Root
      onClick={async () => {
        await logoutApi.logout();
        window.localStorage.setItem('access-token', '');
        window.localStorage.setItem('refresh-token', '');
        defaultAxiosInstance.defaults.headers.common['Authorization'] = false;
        location.href = `${process.env.REACT_APP_PUBLIC_URL}`;
      }}
    >
      <Item
        icon={<SvgIcon viewBox="0 0 48 48" component={LogoutSvg} />}
        text="로그아웃"
      />
    </Root>
  );
}

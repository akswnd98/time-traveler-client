import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from '@src/theme';

import MyPage from './Items/MyPage';
import Alarm from './Items/Alarm';
import Empty from './Items/Empty';
import Logout from './Items/Logout';
import MyLike from './Items/MyLike';
import ProfileEdit from './Items/ProfileEdit';
import Settings from './Items/Settings';

const Root = styled(Box)`
  width: 165px;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  user-select: none;
  position: absolute;
  right: calc(100% / 6);
  z-index: 200;
  color: white;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
`;

export default function Drawer() {
  return (
    <Root>
      <MyPage />
      <ProfileEdit />
      <Alarm />
      <MyLike />
      <Empty />
      <Settings />
      <Logout />
    </Root>
  );
}

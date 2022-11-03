import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from '@src/theme';

import Alarm from './Items/Alarm';
import Empty from './Items/Empty';
import Logout from './Items/Logout';
import MyLike from './Items/MyLike';
import ProfileEdit from './Items/ProfileEdit';
import Settings from './Items/Settings';

const Root = styled(Box)`
  width: 165px;
  border-radius: 10px;
  background-color: ${theme.palette.main};
  padding-top: 10px;
  padding-bottom: 10px;
  user-select: none;
  position: absolute;
  right: calc(100% / 6);
  z-index: 200;
  color: white;
`;

export default function Drawer() {
  return (
    <Root>
      <ProfileEdit />
      <Alarm />
      <MyLike />
      <Empty />
      <Settings />
      <Logout />
    </Root>
  );
}

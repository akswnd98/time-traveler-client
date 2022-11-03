import Notification from '@src/assets/icons/Notification';

import Item from '..';
import { SvgIcon } from '@mui/material';

export default function Alarm() {
  return (
    <Item
      icon={<SvgIcon viewBox="0 0 48 48" component={Notification} />}
      text="알람"
    />
  );
}

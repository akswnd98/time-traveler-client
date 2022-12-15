import { SvgIcon } from '@mui/material';
import SettingsSvg from '@src/assets/icons/Settings';

import Item from '..';

export default function Settings() {
  return (
    <Item
      icon={<SvgIcon viewBox="0 0 48 48" component={SettingsSvg} />}
      text="설정"
      onClick={() => location.href = '/settings'}
    />
  );
}

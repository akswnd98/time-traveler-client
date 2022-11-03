import { SvgIcon } from '@mui/material';
import Pencil from '@src/assets/icons/Pencil';

import Item from '..';

export default function ProfileEdit() {
  return (
    <Item
      icon={<SvgIcon viewBox="0 0 48 48" component={Pencil} /> }
      text="프로필 수정"
    />
  );
}

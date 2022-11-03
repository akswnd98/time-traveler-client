import Heart from '@src/assets/icons/Heart';

import Item from '..';
import { SvgIcon } from '@mui/material';

export default function MyLike() {
  return (
    <Item
      icon={<SvgIcon viewBox="0 0 48 48" component={Heart} />}
      text="나의 좋아요"
    />
  );
}

import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { ItemsProps } from './interface';

const Root = styled(Button)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: NotoSansKR;
  font-size: 16px;
  color: white;
  padding-left: 15px;
`;

export default function Item(props: ItemsProps) {
  return (
    <Root startIcon={props.icon}>
      {props.text}
    </Root>
  );
}

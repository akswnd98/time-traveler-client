import styled from '@emotion/styled';
import { Button } from '@mui/material';
import theme from '@src/theme';

import { ItemsProps } from './interface';

const Root = styled(Button)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: NotoSansKR;
  font-size: 16px;
  color: ${theme.palette.main};
  padding-left: 15px;
`;

export default function Item(props: ItemsProps) {
  return (
    <Root
      onClick={props.onClick}
      startIcon={props.icon}
    >
      {props.text}
    </Root>
  );
}

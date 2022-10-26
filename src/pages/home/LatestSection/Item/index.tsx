import styled from '@emotion/styled';
import Column from './Column';
import columnWidth from '../columnWidth';
import { Button } from '@mui/material';

export type PropsType = {
  no: number;
  title: string;
  writer: string;
  writeDate: string;
  views: number;
  recommand: number;
};

const Root = styled(Button)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  text-transform: none;
  color: black;
`;

export default function Item (props: PropsType) {
  return (
    <Root>
      <Column text={`${props.no}`} width={columnWidth.no} />
      <Column text={props.title} width={columnWidth.title} />
      <Column text={props.writer} width={columnWidth.writer} />
      <Column text={props.writeDate} width={columnWidth.writeDate} />
      <Column text={`${props.views}`} width={columnWidth.views} />
      <Column text={`${props.recommand}`} width={columnWidth.recommand} />
    </Root>
  )
}

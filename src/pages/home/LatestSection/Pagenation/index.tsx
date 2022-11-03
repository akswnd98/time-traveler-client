import styled from '@emotion/styled';
import { Action } from '@remix-run/router';
import theme from '@src/theme';
import { useEffect } from 'react';
import MovePage from '../action/MovePage';

export type PropsType = {
  action: MovePage;
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Number = styled.div`
  font-size: 16px;
  font-family: NotoSansKR;
  :not(&:first-child) {
    margin-left: 8px;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const NumberSelected = styled(Number)`
  color: ${theme.palette.main};
  text-decoration: underline;
`;

export default function Pagenation (props: PropsType) {
  return (
    <Root>
      {
        Array(10).fill(Math.floor((props.action.page - 1) / 10) * 10 + 1).map((v, i) => v + i).map((v) => (
          props.action.page === v ? (
            <NumberSelected>{v}</NumberSelected>
          ) : (
            <Number onClick={() => props.action.doAction(v)}>{v}</Number>
          )
        ))
      }
    </Root>
  );
}

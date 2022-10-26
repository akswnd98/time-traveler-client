import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type PropsType = {
  width: string;
  text: string;
};

const Root = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

export default function Column (props: PropsType) {
  return (
    <Root css={css`
      width: ${props.width};
    `}>
      {props.text}
    </Root>
  );
}

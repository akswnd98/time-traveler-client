import styled from '@emotion/styled';
import theme from '@src/theme';
import TimeTravelRule from './TimeTravelRule';

const Root = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.main};
`;

export default function Footer () {
  return (
    <Root>
      <TimeTravelRule />
    </Root>
  );
}

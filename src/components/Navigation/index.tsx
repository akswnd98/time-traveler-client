import styled from '@emotion/styled';
import theme from '@src/theme';
import { useRecoilState } from 'recoil';
import drawerState from '@src/states/drawer';
import Buttons from './Buttons';
import Logo from './Logo';
import Search from './Search';
import Drawer from './Drawer';

const Root = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${theme.palette.main};
`;

const Main = styled.div`
  width: calc(100% / 6 * 4);
  height: 100%;
  margin-left: calc(100% / 6);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Navigation() {
  const [drawer] = useRecoilState(drawerState);

  return (
    <Root>
      <Main>
        <Logo />
        <Search />
        <Buttons />
      </Main>
      {drawer ? <Drawer /> : false}
    </Root>
  )
}

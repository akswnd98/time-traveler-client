import styled from '@emotion/styled';
import Navigation from './components/Navigation';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Root>
      <Navigation />
    </Root>
  );
}

export default App;

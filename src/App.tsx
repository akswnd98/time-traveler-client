import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/home';
import { RecoilRoot } from 'recoil';
import LoginPopup from './components/LoginPopup';
import Signup from './pages/signup';
import Login from './pages/login';
import Write from './pages/write';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <RecoilRoot>
      <Root>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/write' element={<Write />} />
        </Routes>
        <LoginPopup />
        <Footer />
      </Root>
    </RecoilRoot>
  );
}

export default App;

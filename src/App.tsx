import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { RecoilRoot } from 'recoil';
import Signup from './pages/signup';
import Login from './pages/login';
import Write from './pages/write';
import Post from './pages/post';
import { useEffect } from 'react';
import { getMyProfileApi } from './api/BaseApi/GetApi/user/GetMyProfile';
import useAccount from './data-binding/global/Account';
import MyPage from './pages/my-page';
import About from './pages/about';
import Settings from './pages/settings';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

function App () {
  const account = useAccount();

  useEffect(() => {
    (async () => {
      await account.updateAccount(await getMyProfileApi.getMyProfile());
    })();
  }, []);

  return (
    <RecoilRoot>
      <Root>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/write' element={<Write />} />
          <Route path='/post' element={<Post />} />
          <Route path='/my-page' element={<MyPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Root>
    </RecoilRoot>
  );
}

export default App;

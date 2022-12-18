import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Write from './pages/write';
import Post from './pages/post';
import { useEffect } from 'react';
import { getMyProfileApi } from './api/BaseApi/GetApi/user/GetMyProfile';
import { useAccount } from './data-binding/global/Account';
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
    <Root>
      <Routes>
        <Route path={`${process.env.REACT_APP_PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.REACT_APP_PUBLIC_URL}/signup`} element={<Signup />} />
        <Route path={`${process.env.REACT_APP_PUBLIC_URL}/login`} element={<Login />} />
        <Route path={`${process.env.REACT_APP_PUBLIC_URL}/write`} element={<Write />} />
        <Route path={`${process.env.REACT_APP_PUBLIC_URL}/post`} element={<Post />} />
        <Route path={`${process.env.REACT_APP_PUBLIC_URL}/my-page`} element={<MyPage />} />
        <Route path={`${process.env.REACT_APP_PUBLIC_URL}/about`} element={<About />} />
        <Route path={`${process.env.REACT_APP_PUBLIC_URL}/settings`} element={<Settings />} />
      </Routes>
    </Root>
  );
}

export default App;

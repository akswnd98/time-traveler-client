import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { refreshApi } from './api/BaseApi/GetApi/login/Refresh';

async function asyncTask () {
  await refresh();
}

async function refresh () {
  try {
    let refreshToken = window.localStorage.getItem('refresh-token');
    refreshToken = refreshToken !== null ? refreshToken : '';
    const result = await refreshApi.refresh({ refreshToken });
    window.localStorage.setItem('access-token', result.accessToken);
    window.localStorage.setItem('refresh-token', result.refreshToken);
  } catch (e) {}
}

(async () => {
  await asyncTask();

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

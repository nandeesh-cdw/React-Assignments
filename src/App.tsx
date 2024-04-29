import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './services/AuthContext';
import PrivateRoute from './components/HOC/PrivateRoute';
import { APP_CONSTANTS } from './constants/APP_CONSTANTS';
import Spinner from './components/Spinner/Spinner';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Movies = React.lazy(() => import('./pages/Movies/Movies'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const NowShowing = React.lazy(() => import('./containers/NowShowing/NowShowing'));

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path={APP_CONSTANTS.ROUTES.LOGIN} element={<Login />} />
              <Route path={APP_CONSTANTS.ROUTES.ALLMOVIES} element={<Movies />} />
              <Route path={APP_CONSTANTS.ROUTES.HOME} element={<Home />} />
              <Route element={<PrivateRoute />}>
                <Route path={APP_CONSTANTS.ROUTES.NOWSHOWING} element={<NowShowing />} />
              </Route>
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

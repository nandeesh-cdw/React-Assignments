import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './pages/Movies/Movies';
import Login from './pages/Login/Login';
import { AuthProvider } from './services/AuthContext';
import PrivateRoute from './components/HOC/PrivateRoute';
import NowShowing from './containers/NowShowing/NowShowing';

function App() {
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/allMovies' element={<Movies/>}/>
          <Route path='/' element={<Home/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='/nowShowing' element={<NowShowing/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;

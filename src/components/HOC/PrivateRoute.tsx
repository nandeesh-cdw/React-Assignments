import React from 'react'
import { useAuth } from '../../services/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
import { APP_CONSTANTS } from '../../constants/APP_CONSTANTS';

function PrivateRoute() {
    const { isLoggedIn } = useAuth();
  return (
    isLoggedIn ? <Outlet/> : <Navigate to={APP_CONSTANTS.ROUTES.LOGIN}/>
  )
}

export default PrivateRoute
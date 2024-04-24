import React from 'react'
import { useAuth } from '../../services/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
    const { isLoggedIn } = useAuth();
  return (
    isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoute
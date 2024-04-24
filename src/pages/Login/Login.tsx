import React from 'react'
import styles from './Login.module.scss'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useAuth } from '../../services/AuthContext'
import Banner from '../../components/Banner/Banner'
function Login() {
  
  return (
      <Banner>
        <LoginForm/>    
      </Banner>
  )
}

export default Login
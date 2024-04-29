import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Links from '../Links/Links'
import { useAuth } from '../../services/AuthContext'
import Button from '../Button/Button'
import { APP_CONSTANTS } from '../../constants/APP_CONSTANTS'
import APP_MESSAGES from '../../constants/APP_MESSAGES'

function Header(props) {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const navigateHome = () => { 
    navigate(APP_CONSTANTS.ROUTES.HOME);
  }
  return (
    <header>
        <div className={styles.logo_wrapper}>
            <img src={logo} className={styles.logo} onClick={navigateHome}/>
        </div>
        <div className={styles.nav_wrapper}>
          <Links path={APP_CONSTANTS.ROUTES.HOME} label={APP_MESSAGES.HEADER_MESSAGES.HOME}/>
          <Links path={APP_CONSTANTS.ROUTES.ALLMOVIES} label={APP_MESSAGES.HEADER_MESSAGES.ALLMOVIES}/>
          {isLoggedIn && (<Links path={APP_CONSTANTS.ROUTES.NOWSHOWING} label={APP_MESSAGES.HEADER_MESSAGES.NOWSHOWING}/>)}
        </div>
        <div className={styles.user_wrapper}>
          { !isLoggedIn && (<Links path={APP_CONSTANTS.ROUTES.LOGIN} label={APP_MESSAGES.HEADER_MESSAGES.LOGIN}/>)}
          { isLoggedIn && (<Button label={APP_MESSAGES.HEADER_MESSAGES.LOGGEDIN} onClick={logout} isUser={true}/>)}
        </div>
    </header>
  )
}

export default Header 
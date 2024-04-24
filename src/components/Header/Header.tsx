import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import Links from '../Links/Links'
import { useAuth } from '../../services/AuthContext'
import Button from '../Button/Button'
function Header() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <header>
        <div className={styles.logo_wrapper}>
            <img src={logo} className={styles.logo}/>
        </div>
        <div className={styles.nav_wrapper}>
          <Links path='/' label='HOME'/>
          <Links path='/allMovies' label="ALL MOVIES"/>
          {isLoggedIn && (<Links path='/nowshowing' label='NOW SHOWING' isNowShowing={true}/>)}
        </div>
        <div className={styles.user_wrapper}>
          { !isLoggedIn && (<Links path='/login' label="LOGIN"/>)}
          { isLoggedIn && (<Button label="Hi Nijin | Logout" onClick={logout} isUser={true}/>)}
        </div>
    </header>
  )
}

export default Header 
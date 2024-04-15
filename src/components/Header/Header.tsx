import React from 'react'
import styles from './Header.module.scss';
import Navlink from '../Navlink/Navlink'
import User from '../User/User';
import { Link } from 'react-router-dom';
import {HEADER_MESSAGES} from '../../constants/Messages';
const navLinks = [
    {
        label:"COUCHES",
        path:"/categories/couches"
    },
    {
        label:"CHAIRS",
        path:'/categories/chairs'
    },
    {
        label:"DINING",
        path:'/categories/dining'
    }
]
function Header() {
  return (
    <header>
        <Link className={styles.logo} to='/' replace={true}> {HEADER_MESSAGES.title}</Link>
        <div className={styles.nav_bar}>
            {navLinks.map((navLink) => <Navlink label={navLink.label} path={navLink.path}/>)}
        </div>
        <div className={styles.nav_bar_account_section}>
            <User username={HEADER_MESSAGES.user}/>
        </div>
</header>
  )
}

export default Header
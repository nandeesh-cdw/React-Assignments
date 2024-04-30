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
        <ul className={styles.nav_bar}>
            {navLinks.map((navLink,index) => <li key={index}><Navlink label={navLink.label} path={navLink.path}/></li>)}
        </ul>
        <div className={styles.nav_bar_account_section}>
            <User username={HEADER_MESSAGES.user}/>
        </div>
</header>
  )
}

export default Header
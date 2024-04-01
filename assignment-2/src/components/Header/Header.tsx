import React from 'react';
import styles from './Header.module.scss';
import { APP_MESSAGES } from '../../constants/Constants';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/logo.png';
import HeaderLink from '../HeaderLink/HeaderLink';
const headerMesages = APP_MESSAGES.HEADER_MESSAGES;
const navLinks = APP_MESSAGES.HEADER_MESSAGES.NAV_LINKS
function Header() {
  console.log(navLinks);
  return (
    <header className={styles.header}>
        <div className={styles.logo_wrapper}>
            <Link to='/'>
              <img className={styles.logo}  src={logo} alt="logo" />
            </Link>
        </div>
        <ul className={styles.nav_link_wrapper}>
        {
        navLinks.map(link => (
          <HeaderLink link={link.path} name={link.name}/>
        ))
        }
        </ul>
    </header>
  )
}

export default Header
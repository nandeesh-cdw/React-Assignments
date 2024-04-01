import React from 'react'
import { Link } from 'react-router-dom';
import styles from './HeaderLink.module.scss';

function HeaderLink(props:any) {
  return (
    <li className={styles.nav_link}><Link className={styles.nav_link}to={props.link}>{props.name}</Link></li>
  )
}

export default HeaderLink
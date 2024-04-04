import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styles from './HeaderLink.module.scss';

function HeaderLink(props:any) {
  return (
    <li className={styles.nav_link_wrapper}><NavLink className={styles.nav_link} to={props.link}>{props.name}</NavLink></li>
  )
}

export default HeaderLink
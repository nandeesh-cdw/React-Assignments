import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Links.module.scss'
function Links(props:any) {
  return (
    <NavLink to={props.path} className={({isActive}) => isActive ? (`${styles.active_link} ${styles.links}`): styles.links }>
            {props.label}
    </NavLink>
  )
}

export default Links
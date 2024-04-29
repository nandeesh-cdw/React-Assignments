import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Links.module.scss'
import { PathProps } from '../../models/models'
function Links(props:PathProps) {
  return (
    <NavLink to={props.path} className={({isActive}) => isActive ? (`${styles.active_link} ${styles.links}`): styles.links }>
            {props.label}
    </NavLink>
  )
}

export default Links
import React from 'react'
import styles from './User.module.scss'
import caret from '../../assets/caret-down.svg';

function User(props:any) {
  return (
    <div className={styles.user}>
        <h3 className={styles.username}>{ props.username }</h3>
        <img className={styles.icon} src={caret} alt="caret" />
    </div>
  )
}

export default User
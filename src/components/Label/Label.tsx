import React from 'react'
import styles from './Label.module.scss'
function Label(props:any) {
  return (
    <label className={styles.default}>{props.label}</label>
  )
}

export default Label
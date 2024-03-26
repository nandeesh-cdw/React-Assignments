import React from 'react'
import styles from './Button.module.scss'
export const Button = ({name , selected}) => {
  return (
    <button className={`${styles.button} ${selected ? styles.selected : ''}`}>{name}</button>
  )
}

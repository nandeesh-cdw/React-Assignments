import React from 'react'
import styles from './Button.module.scss'
export const Button = ({name , isSelected}) => {
  return (
    <button className={`${styles.button} ${isSelected ? styles.selected : ''}`}>{name}</button>
  )
}

import React from 'react'
import styles from './Button.module.scss';

function Button({name,onButtonClick,disabled=false}) {
  return (
    <button className={`${styles.button} ${disabled ? styles.disabled : ''}`}onClick={onButtonClick} disabled={disabled}>{name}</button>
  )
}

export default Button
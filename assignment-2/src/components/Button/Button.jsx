import React from 'react'
import styles from './Button.module.scss';

function Button({name,onButtonClick }) {
  return (
    <button className={styles.button}onClick={onButtonClick}>{name}</button>
  )
}

export default Button
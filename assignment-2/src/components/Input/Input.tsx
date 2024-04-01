import React from 'react'
import styles from './Input.module.scss';
function Input({value, onChange}) {
  return (
    <input  value={value} onChange={(e) => onChange(e.target.value)} className={styles.input}/>
  )
}

export default Input
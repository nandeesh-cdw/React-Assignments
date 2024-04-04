import React from 'react'
import styles from './Input.module.scss';
function Input({value, onChange, type='text', max=10, min=5}) {
  const maskCharacters = (e) => {
    if (e.target.value > max) e.target.value = e.target.value.slice(0,max);
    onChange(e.target.value)
  }
  return (
    <input type={type} max={max} min={min} value={value} onChange={(e) => maskCharacters(e)} className={styles.input}/>
  )
}

export default Input
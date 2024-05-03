import React, { useState } from 'react'
import styles from './Checkbox.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../models/models';
function Checkbox(props:any) {
    const handleChange = () => {
        props.onChange(props.id);
    }
    const dark_mode = useSelector((state:RootState) => state.navbar.darkMode);
  return (
    <div className={styles.input_wrapper}>
        <input className={`${styles.checkbox} ${dark_mode?styles.dark_mode:""}`} type='checkbox' checked={props?.isChecked} onChange={handleChange}/>
        <label className={`${styles.label} ${dark_mode?styles.light_text:""}`}>{props.label}</label>
    </div>
  )
}

export default Checkbox
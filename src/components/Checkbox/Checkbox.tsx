import React, { useState } from 'react'
import styles from './Checkbox.module.scss'
import { useSelector } from 'react-redux';
import { CheckBoxProps, RootState } from '../../models/models';
import { APP_CONSTANTS } from '../constants/APP_CONSTANTS';
function Checkbox(props: CheckBoxProps) {
  const handleChange = () => {
    props.onChange(props.id);
  }
  const dark_mode = useSelector((state: RootState) => state.navbar.darkMode);
  return (
    <div className={styles.input_wrapper}>
      <input className={`${styles.checkbox} ${dark_mode ? styles.dark_mode : ""}`} type={APP_CONSTANTS.INPUT_TYPES.CHECKBOX} checked={props?.isChecked} onChange={handleChange} />
      <label className={`${styles.label} ${dark_mode ? styles.light_text : ""}`}>{props.label}</label>
    </div>
  )
}

export default Checkbox
import React from 'react'
import PropTypes from 'prop-types';
import { MODELS } from '../../models/Model';
import styles from './Dropdown.module.scss';
import caret from '../../assets/caret-down-solid.svg';
import { useState } from 'react';
function Dropdown({ options, onValueSelected, placeholder , value, isFormInput=false}: MODELS["DROPDOWNPROPS"]) {


  return (
        <>
        {/* <img */}
        {/* <img src={caret} /> */}
        <select className={`${styles.dropdown} ${isFormInput? styles.form_input : ""}`} value={value} onChange={(event)=>onValueSelected(event.target.value)}>
            <img src={caret} />
            <option value="" disabled={value !== ''}>{placeholder}</option>
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        </>
        
  )
}  

export default Dropdown
import React from 'react'
import PropTypes from 'prop-types';
import { MODELS } from '../../models/Model';
import styles from './Dropdown.module.scss';

import { useState } from 'react';
function Dropdown({ options, onValueSelected, placeholder , value, isFormInput=false}: MODELS["DROPDOWNPROPS"]) {


  return (
        <select className={`${styles.dropdown} ${isFormInput? styles.form_input : ""}`} value={value} onChange={(event)=>onValueSelected(event.target.value)}>
            <option value="" disabled={value !== ''}>{placeholder}</option>
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
  )
}  

export default Dropdown
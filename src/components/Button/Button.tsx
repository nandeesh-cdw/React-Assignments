import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { ButtonProps, RootState } from '../../models/models'
function Button(props:ButtonProps) {
    const dark_mode = useSelector((state:RootState) => state.navbar.darkMode)
    const buttonStyles = classNames({
        [styles.purple_button]:props.purpleButton,
        [styles.cyan_button]:props.cyanButton,
        [styles.transparent_Button]:props.transparentButton,
        [styles.light_text]:(props.transparentButton && dark_mode)
    })
  return (
    <button className={buttonStyles} onClick={()=>props.onClick(props.id)}>
        {props.label}
    </button>
  )
}

export default Button
import classNames from 'classnames'
import React from 'react'
import styles from './Button.module.scss'
function Button(props:any) {
    const classnames = classNames(styles.yellow_btn,{
        [styles.user_btn]: props.isUser,
        [styles.lottery_btn]: props.isLottery
    })
  return (
    <button className={classnames} onClick={props.onClick}>{props.label}</button>
  )
}

export default Button
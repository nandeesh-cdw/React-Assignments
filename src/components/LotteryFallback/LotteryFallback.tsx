import React from 'react'
import styles from './LotteryFallback.module.scss'
import { LotteryFallbackProps } from '../../models/models'
function LotteryFallback(props:LotteryFallbackProps) {
  return (
    <div className={styles.lottery_container}>
        <h3 className={styles.error_message}>{props.errorMessage}</h3>
    </div>
  )
}

export default LotteryFallback
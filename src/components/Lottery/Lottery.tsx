import React, { useState } from 'react'
import styles from './Lottery.module.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
function Lottery() {
    const [phoneNumber, setPhoneNumber] = useState();
    const inputHandler = (value) => {
        setPhoneNumber(value);
    }
  return (
    <div className={styles.lottery_container}>
        <div className={styles.lottery_wrapper}>
            <div className={styles.lottery_message_wrapper}>
                Your Mobile Number can win you exciting prizes 
            </div>
            <div className={styles.input_wrapper}>
                <Input onChange={inputHandler} type="number" value={phoneNumber} placeholder="Enter your number" isLottery={true}/>
            </div>
            <div className={styles.button_wrapper}>
                <Button isLottery={true} label="I'm Feeling Lucky" />
            </div>
        </div>
    </div>
  )
}

export default Lottery
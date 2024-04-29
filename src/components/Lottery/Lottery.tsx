import React, { useEffect, useState } from 'react'
import styles from './Lottery.module.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
import classNames from 'classnames';
import APP_MESSAGES from '../../constants/APP_MESSAGES';
import { APP_CONSTANTS } from '../../constants/APP_CONSTANTS';
function Lottery() {
    const [phoneNumber, setPhoneNumber] = useState(undefined);
    const [isError, setIsError] = useState(false);
    const [winner, setWinner] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);
    useEffect(() => {
        if (invalidNumber) {
            throw new Error(APP_MESSAGES.ERROR_MESSAGES.LOTTERY.TRY_AGAIN);
        }
    }, [invalidNumber]);
    const inputHandler = (value) => {
        setPhoneNumber(value);
        setIsError(false);
    }
    const inputStyleClasses = classNames(styles.input_wrapper, {
        [styles.is_error]: isError
    })
    const handleLotteryWinner = () => {
        if (phoneNumber) {
            const cleanedPhoneNumber = phoneNumber.toString().replace(/\D/g, '');

            if (cleanedPhoneNumber.length !== 10) {
                setIsError(true);
                return;
            }
            const lastDigit = parseInt(cleanedPhoneNumber[cleanedPhoneNumber.length - 1], 10);
            if (lastDigit % 2 === 0) {
                setWinner(true);
            } else {
                setInvalidNumber(true);
            }
            return 
        }
        setIsError(true);
    }
    return (
        <div className={styles.lottery_container}>
            {
                !winner && (<div className={styles.lottery_wrapper}>
                    <div className={styles.lottery_message_wrapper}>
                        {APP_MESSAGES.LOTTERY_MESSAGES.ENTER_MOBILE_NUMBER}
                    </div>
                    <div className={inputStyleClasses}>
                        <Input onChange={inputHandler} type={APP_CONSTANTS.INPUT_TYPE.NUMBER} value={phoneNumber} placeholder={APP_MESSAGES.LOTTERY_MESSAGES.INPUT_PLACEHOLDER} isLottery={true} />
                    </div>
                    <div className={styles.button_wrapper}>
                        <Button isLottery={true} label={APP_MESSAGES.LOTTERY_MESSAGES.FEELING_LUCKY} onClick={handleLotteryWinner} />
                    </div>
                </div>)
            }
            {
                winner && <h4 className={styles.winner}>{APP_MESSAGES.LOTTERY_MESSAGES.WINNER}</h4>
            }
        </div>
    )
}

export default Lottery
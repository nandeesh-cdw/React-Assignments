import React from 'react'
import styles from './Modal.module.scss'
import { MODELS } from '../../models/Model'
function Modal({userData}:any) {
  return (
    <div className={styles.modal_wrapper}>
        <div className={styles.modal_text}>
            Thank you <span className={styles.bold_text}>{userData.name}</span> for expressing your interest in travelling with us . Our Sales team will
            get back to you with the best package from <span className={styles.bold_text}>{userData.home_town}</span> to <span className={styles.bold_text}>{userData.destination}</span>
        </div>
    </div>
  )
}

export default Modal
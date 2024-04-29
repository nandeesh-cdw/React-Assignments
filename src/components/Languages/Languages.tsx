import React from 'react'
import styles from './Languages.module.scss'
import { APP_CONSTANTS } from '../../constants/APP_CONSTANTS'
import APP_MESSAGES from '../../constants/APP_MESSAGES'
function Languages() {
    const languages = APP_CONSTANTS.LANGUAGES_LIST
  return (
    <div className={styles.languages_container}>
        <div className={styles.title_wrapper}>
            <div className={styles.title}>
                {APP_MESSAGES.LANGUAGES_MESSAGES.LANGUAGES} 
            </div>
        </div>
        <ul className={styles.languages_wrapper}>
            { 
                languages.map((language) => {return <li className={styles.language} key={language}>{language}</li>})
            }
        </ul>
    </div>
  )
}

export default Languages
import React from 'react'
import styles from './Cover.module.scss'
function Cover({imagePath}) {
  return (
    <img className={styles.promo_image} src={imagePath} alt="promo" />
  )
}

export default Cover
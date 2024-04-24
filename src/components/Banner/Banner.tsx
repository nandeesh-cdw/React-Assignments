import React from 'react'
import styles from './Banner.module.scss'
function Banner(props) {
  return (
    <div className={styles.banner_container}>
        {props?.children}
    </div>
  )
}

export default Banner
import React from 'react'
import styles from './Spinner.module.scss';
function Spinner() {
  return (
    <div className={styles.lds_dual_ring}></div>
  )
}

export default Spinner
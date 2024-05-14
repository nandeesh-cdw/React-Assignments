import React from 'react'
import styles from './Loader.module.scss';
function Loader() {
  return (
    <div className={styles.lds_dual_ring}></div>
  )
}

export default Loader
import React from 'react'
import styles from '../Tag/Tag.module.scss';
export const Tag = ({tagName}) => {
  return (
    <div className={styles.tag}>{tagName}</div>
  )
}

import React from 'react'
import like from '../../assets/thumbs-up-solid.svg'
import styles from './Like.module.scss'
function Like(props:any) {
  return (
    <img className={styles.img} src={like} onClick={props.onclick}/>
  )
}

export default Like
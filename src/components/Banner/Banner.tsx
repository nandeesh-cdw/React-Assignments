import React from 'react'
import styles from './Banner.module.scss'
import classNames from 'classnames'
function Banner(props) {
  const className = classNames(styles.banner_container,{
    [styles.home_page]: props.isHomePage
  })
  return (
    <div className={className}>
        {props.children}
    </div>
  )
}

export default Banner
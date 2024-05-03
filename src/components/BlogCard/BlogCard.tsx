import React from 'react'
import styles from './BlogCard.module.scss'
import { BlogProps, RootState } from '../../models/models'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
function BlogCard(props:BlogProps) {
  const dark_mode = useSelector((state:RootState) => state.navbar.darkMode)
  const cardContainerStyles = classNames(styles.card_wrapper , {
    [styles.dark_background]: dark_mode,
    [styles.is_selected]: props.isSelected
  })
  return (
    <div className={cardContainerStyles}>
        <div className={styles.title_wrapper}>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
        <div className={styles.tag_wrapper}>
            <h3 className={styles.tag}>{props.tag}</h3>
        </div>
        <div className={styles.description_wrapper}>
            <h4 className={styles.description}>{props.description}</h4>
        </div>
    </div>
  )
}

export default BlogCard
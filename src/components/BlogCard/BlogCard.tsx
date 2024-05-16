import classNames from 'classnames'
import { useSelector } from 'react-redux'
import styles from './BlogCard.module.scss'
import { BlogProps, RootState } from '../../models/models'
function BlogCard(props: BlogProps) {
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode);

  const cardContainerStyles = classNames(styles.card_wrapper, {
    [styles.dark_background_card]: darkMode,
    [styles.is_selected]: props.isSelected,
    [styles.is_selected_dark]: props.isSelected && darkMode
  })

  const titleStyles = classNames(styles.title, {
    [styles.light_text]: darkMode
  })

  const descriptionStyles = classNames(styles.description, {
    [styles.light_text]: darkMode
  })

  return (
    <div className={cardContainerStyles} data-testid="blog-card">
      <div className={styles.title_wrapper}>
        <h2 className={titleStyles}>{props.title}</h2>
      </div>
      <div className={styles.tag_wrapper}>
        <h3 className={styles.tag}>{props.type}</h3>
      </div>
      <div className={styles.description_wrapper}>
        <h4 className={descriptionStyles}>{props.description}</h4>
      </div>
    </div>
  )
}

export default BlogCard
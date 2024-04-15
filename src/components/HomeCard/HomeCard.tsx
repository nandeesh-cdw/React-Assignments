import Button from '../Button/Button'
import styles from './HomeCard.module.scss';

function HomeCard(props: any) {
  return (
    <li>
        <div className={styles.card}>
        <img className={styles.category_image} src={props.category.photo} alt={props.category.id} />
        <div className={styles.category_title}>{ props.category.id }</div>
        <div className={styles.category_description}>{ props.category.description }</div>
            <Button label='Shop Now' onClick={() => props.onShopNow(props.category)}/>
        </div>

    </li>
    
  )
}

export default HomeCard
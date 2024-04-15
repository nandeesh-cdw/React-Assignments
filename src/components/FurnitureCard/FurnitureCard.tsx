import styles from './FurnitureCard.module.scss'
import Button from '../Button/Button'
import shield from '../../assets/shield.svg'
import fallback from '../../assets/furniture_fallback.jpeg'
import { formatPriceToINR } from '../../utils/utils'
import { SHOPPING_MESSAGES } from '../../constants/Messages'
import { FurnitureCardProp } from '../../models/models'
function FurnitureCard({product,productType, onAddToCart, onClickWishlist}:FurnitureCardProp) {
  return (
        <ul>
            <div className={styles.card}>
                <img className={styles.furniture_image} src={ product.photo } alt={ product.id } onError={(error)=>{ error.currentTarget.src=fallback}}/>
                <div className={styles.furniture_details}>
                    <div className={styles.furniture_name}>{ product.name }</div>
                    <div className={styles.furniture_price}>
                    { formatPriceToINR(product.price) }
                    </div>
                </div>
                {
                    productType === 'order' ? (
                        <div className={styles.furniture_quantity}>{SHOPPING_MESSAGES.quantity} { product.quantity }</div>
                    ) : (
                    <></>
                    )
                }
                <div className={styles.furniture_description}>{ product.description }</div>
                {
                    productType === 'product' ? (
                    <>
                        <div className={styles.guarantee}>
                            <img className={styles.icon} src={shield} alt="guarantee" />
                            { product.guarantee }
                            <span> { product.guarantee <= 1 ? "YEAR" : "YEARS" }</span>{SHOPPING_MESSAGES.gurantee}
                        </div>
                        <div className={styles.button_section}>
                            <Button label={SHOPPING_MESSAGES.wishlist_label} isWishlist={true} onClick={() => onClickWishlist(product)}/>
                            <Button label={SHOPPING_MESSAGES.cart_label} onClick={() => onAddToCart(product)}/>
                        </div>
                    </>
                    ) : (
                        <></>
                        )
                }
                
            </div>
        </ul>
  )
}

export default FurnitureCard
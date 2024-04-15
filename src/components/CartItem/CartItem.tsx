import React from 'react'
import styles from './CartItem.module.scss'
import Button from '../Button/Button'
import { formatPriceToINR } from '../../utils/utils'
import fallback from '../../assets/furniture_fallback.jpeg';
import { CartItemProp } from '../../models/models';
function CartItem(props:CartItemProp) {
  return (
    <>
        <div className={styles.item}>
            <div className={styles.product_image}>
                <img className={styles.order_image} src={props.product.photo} alt="props.product.name" onError={(error)=>{ error.currentTarget.src=fallback}} />
            </div>
            <div className={styles.order_details}>
                <div className={styles.order_title}> { props.product.name } </div>
                <div className={styles.order_price}> { formatPriceToINR(props.product.price) }</div>
                { props?.isCartItem && (<>
                    <div className={styles.order_item_count}>
                        <Button label="-" onClick={() => props?.onDecrement(props.product)}
                        isItem={true} isItemCounter={true}/>
                        <div className={styles.quantity}>{ props.product.quantity }</div>
                        <Button label="+" onClick={() => props?.onIncrement(props.product)}
                        isItem={true} isItemCounter={true}/>
                    </div>
                    </>)}
                { props?.isWishlistItem && (
                    <div className={styles.place_order}>
                        <Button onClick={() => props.addToCart(props.product)} label='ADD TO CART'/>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default CartItem
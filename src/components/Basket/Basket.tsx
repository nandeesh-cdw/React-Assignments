import React, { useEffect, useState } from 'react'
import CartItem from '../CartItem/CartItem'
import Button from '../Button/Button'
import styles from './Basket.module.scss';
import { formatPriceToINR } from '../../utils/utils'
import { BASKING_MESSAGES } from '../../constants/Messages'
import { BasketProp } from '../../models/models';
function Basket(props:BasketProp) {
    const [cartSelected, setCartSelected] = useState(props.categorySelected === 'cart');

    const onClickCart = () => {
        setCartSelected(true);
        props.onCategorySelection('cart');
    }

    const onClickWishlist = () => {
        setCartSelected(false);
        props.onCategorySelection('wishlist');
    }

    useEffect(() => {
        setCartSelected(props.categorySelected === 'cart');
    },[props.categorySelected])

    useEffect(()=>{
        if (!(props.cartItems.length > 0)) {
            if (props.wishlistItems.length > 0){
                onClickWishlist();
            }
        }
    },[props.cartItems.length])

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        props.cartItems.forEach((item: any) => {
            totalAmount += item.price * item.quantity;
        });
        return formatPriceToINR(totalAmount);
    }

  return (
    <div className={styles.basket}>
      <div className={styles.orders_section}>
            <div className={styles.list_categories}>
                <Button isSelected={cartSelected}  onClick={onClickCart} label={BASKING_MESSAGES.my_cart} isCategoryList={true} isDisabled={!(props?.cartItems.length > 0)} />
                <Button isSelected={!cartSelected} onClick={onClickWishlist} label={BASKING_MESSAGES.my_wishlist} isCategoryList={true} isDisabled={!(props?.wishlistItems.length > 0)}/>
            </div>
            <div className={styles.order_items}>
                { 
                    cartSelected && (<div className={styles.cart_item} >
                    {props?.cartItems.map((cart:any, index:number) => (
                    <CartItem key={index} product={cart} isCartItem={true} onDecrement={(product:any) => props.onDecrement(product)} onIncrement={(product:any) => props.onIncrement(product)}/>
                    ))}
                    </div>)
                }
                {
                    !cartSelected && (<div className={styles.wishlist_item}>
                    {props?.wishlistItems.map((wish:any, index:number) => (
                    <CartItem key={index} product={wish} isWishlistItem={true} addToCart={(product:any) => props.onClickCart(product)} />
                    ))}
                    </div>)
                }   
            </div>
      </div>
      { (props.cartItems.length > 0) && (<div className={styles.payment_section}>
            <div className={styles.price_details}>
                <div className={styles.total}>{BASKING_MESSAGES.total_amount}</div>
                <div className={styles.order_price}>{calculateTotalAmount()}</div>
            </div>
            <Button onClick={props.onPlaceOrder} label={BASKING_MESSAGES.place_order} isPlaceOrder={true}/> 
      </div>)}
    </div>
  )
}

export default Basket
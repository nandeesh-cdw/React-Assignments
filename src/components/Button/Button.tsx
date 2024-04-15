import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames';
import { ButtonProp } from '../../models/models';
function Button(props: ButtonProp) {
  const btnClass = classNames(styles.btn_dark,{
    [styles.btn_wishlist]: props?.isWishlist,
    [styles.selected]: props?.isSelected,
    [styles.category_list]: props?.isCategoryList,
    [styles.item_counter]: props?.isItemCounter,
    [styles.place_order]: props?.isPlaceOrder,
    [styles.disabled]: props?.isDisabled
  })
  return (
    <button className={btnClass} onClick={props?.onClick} disabled={props.isDisabled}>{ props?.label }</button>
  )
}

export default Button
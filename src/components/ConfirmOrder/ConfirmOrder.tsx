import React from 'react'
import FurnitureCard from '../FurnitureCard/FurnitureCard'
import styles from './ConfirmOrder.module.scss';
import {CONFIRM_ORDER_MESSAGES} from '../../constants/Messages';
function ConfirmOrder(props) {
    return (
        <div className={styles.confirmation_container}>
          <div className={styles.confirm_title}>{CONFIRM_ORDER_MESSAGES.order}</div>
          <div className={styles.confirm_message}>{CONFIRM_ORDER_MESSAGES.confirm_message}</div>
          <div className={styles.ordered_items}>
            {props.orderedItems?.map((order, index) => (
              <FurnitureCard key={index} isOrderedItem={true} product={order} productType='order'/>
            ))}
          </div>
        </div>
    )
}

export default ConfirmOrder
import React, { Component } from 'react';
import styles from './Card.module.scss';
import { Tag } from '../Tag/Tag';
export const  Card = ({user}) => {
    return (
      <div className={styles.card_wrapper}>
        <div className={styles.image_wrapper}>
            <img className={styles.user_image} src={user.imgUrl} alt="user"/>
        </div>
        <div className={styles.user_details_wrapper}>
            <div className={styles.username}>
                {user.name}
            </div>
            <div className={styles.user_location}>
                {user.location}
            </div>
            <div className={styles.user_tags_wrapper}>
                {user.tags.map(tag =>(<Tag key={tag} tagName={tag}/>))}
            </div>
        </div>
      </div>
    )
}

export default Card
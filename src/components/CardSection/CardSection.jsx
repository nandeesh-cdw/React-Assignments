import React from 'react';
import styles from '../CardSection/CardSection.module.scss';
import Card from '../Card/Card';

function CardSection({users}) {
  return (
    <ul className={styles.card_container}>
    {users.map( (user) => <li><Card key={user.id} user={user}/></li>)}
    </ul>
  )
}

export default CardSection
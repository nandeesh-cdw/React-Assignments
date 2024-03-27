import React from 'react';
import styles from '../CardSection/CardSection.module.scss';
import Card from '../Card/Card';

function CardSection({users}) {
  return (
    <section className={styles.card_container}>
    {users.map( (user) => <Card key={user.id} user={user}/>)}
    </section>
  )
}

export default CardSection
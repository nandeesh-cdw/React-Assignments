import React from 'react';
import styles from '../CardSection/CardSection.module.scss';
import Card from '../Card/Card';

function CardSection({users}) {
  return (
    <section className={styles.card_container}>
    {users.map( (user) => <Card user={user}></Card>)}
    </section>
  )
}

export default CardSection
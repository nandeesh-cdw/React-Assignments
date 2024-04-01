import React from 'react'
import Promo from '../../components/Promo/Promo';
import styles from './Home.module.scss';
import Destinations from '../../components/Destinations/Destinations';
import places from '../../assets/places/places.json';
function Home() {
  return (
    <div className={styles.container}>
        <Promo/>
        <Destinations places={places}/>
    </div>
  )
}

export default Home
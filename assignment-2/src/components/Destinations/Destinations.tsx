import React from 'react'
import styles from './Destinations.module.scss';
import Card from '../Card/Card';
import { MODELS } from '../../models/Model';
const LOCATION_IMAGES = {
    Pollachi: '../../assets/pollachi.png',
    Thanjavur: '/Users/nandeesh/Documents/GitHub/React-Assignments/assignment-2/src/assets/thanjavur.png',
    Chidambaram: '/Users/nandeesh/Documents/GitHub/React-Assignments/assignment-2/src/assets/chidambaram.png',
    Masinagudi: '/Users/nandeesh/Documents/GitHub/React-Assignments/assignment-2/src/assets/masangudi.png',
    Kumbakonam: '/Users/nandeesh/Documents/GitHub/React-Assignments/assignment-2/src/assets/kumbakonam.png',
    Tirunelveli: '/Users/nandeesh/Documents/GitHub/React-Assignments/assignment-2/src/assets/tirunelveli.png',
}
function Destinations({places}:MODELS['PLACE_LIST']) {
  return (
    <section className={styles.container}>
        <div className={styles.page_title_wrapper}>
            <div className={styles.title}>
                Destinations 
            </div>
            <div className={styles.tagline}>
                Just for you. Because you and your bike are special to us!
            </div>
        </div>
        <ul className={styles.cards_section}>
            {
                places.map(place => {
                    return <Card key={place.place} place={place}/>;
                })
            }
        </ul>
    </section>
  )
}

export default Destinations
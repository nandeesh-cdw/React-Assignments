import React from 'react'
import styles from './HomeBottomSection.module.scss'
import Trailers from '../Trailers/Trailers'
import ShortTeaser from '../ShortTeaser/ShortTeaser'
import Languages from '../../components/Languages/Languages'
function HomeBottomSection() {
  return (
    <div className={styles.container}>
        <Trailers/>
        <ShortTeaser/>
        <Languages/>
    </div>
  )
}

export default HomeBottomSection
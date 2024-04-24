import React from 'react'
import styles from './Home.module.scss'
import Banner from '../../components/Banner/Banner'
import Lottery from '../../components/Lottery/Lottery'
function Home() {
  return (
    <>
    <div className={styles.container}>
      <Banner/>
      <Lottery/>
      
    </div>
    </>
  )
}

export default Home
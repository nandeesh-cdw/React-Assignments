import React from 'react'
import styles from './Home.module.scss'
import Banner from '../../components/Banner/Banner'
import Lottery from '../../components/Lottery/Lottery'
import HomeBottomSection from '../../containers/HomeBottomSection/HomeBottomSection'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import LotteryFallback from '../../components/LotteryFallback/LotteryFallback'
function Home() {
  return (
    <>
    <div className={styles.container}>
      <Banner/>
      <ErrorBoundary fallback={<LotteryFallback/>}>
        <Lottery/>
      </ErrorBoundary>
      <HomeBottomSection/>
    </div>
    </>
  )
}

export default Home
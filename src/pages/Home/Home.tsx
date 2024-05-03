import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import BlogSection from '../../components/BlogSection/BlogSection'
import styles from './Home.module.scss'
function Home() {
  return (
    <div className={styles.container}>
        <NavBar/>
        <BlogSection/>
    </div>
  )
}

export default Home
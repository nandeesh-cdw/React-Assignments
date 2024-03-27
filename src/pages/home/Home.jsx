import React from 'react'
import styles from '../home/Home.module.scss';
import { Button } from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { Search } from '../../components/Search/Search';
import users from '../../assets/users.json';
import Navbar from '../../components/Navbar/Navbar';
import Cardsection from '../../components/CardSection/CardSection';
import Header from '../../components/Header/Header';
export default function Home() {
  return (
    <div className={styles.container}>
        <Header/>
        <Navbar/>
        <Cardsection users={users}/>
    </div>
  ) 
}

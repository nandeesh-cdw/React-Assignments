import React from 'react'
import styles from '../home/Home.module.scss';
import { Button } from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { Search } from '../../shared components/search/Search';
import users from '../../assets/users.json';
export default function Home() {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.header_title}>Users</div>
        </header>
        <section className={styles.navbar}>
            <Search searchText="Search Users"></Search>
            {/* <input type="text" className={styles.input_box} searchText="Search Users"></input> */}
            <div className="nav_buttons">
                <Button name='Reputation'></Button>
                <Button name='New Users' selected={true}></Button>
                <Button name='Voters'></Button>
                <Button name='Editors'></Button>
                <Button name='Moderators'></Button>
            </div>
        </section>
        <section className={styles.card_container}>
            {users.map( (user) => <Card user={user}></Card>)}
        </section>
    </div>
  ) 
}

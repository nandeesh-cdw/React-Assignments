import React from 'react';
import { Search } from '../search/Search';
import { Button } from '../Button/Button';
import styles from './Navbar.module.scss';
function Navbar() {
  return (
    <section className={styles.navbar}>
            <Search searchText="Search Users"></Search>
            <div className={styles.navbar_buttons}>
                <Button name='Reputation'></Button>
                <Button name='New Users' selected={true}></Button>
                <Button name='Voters'></Button>
                <Button name='Editors'></Button>
                <Button name='Moderators'></Button>
            </div>
    </section>
  )
}

export default Navbar
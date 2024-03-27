import React from 'react';
import { Search } from '../Search/Search';
import { Button } from '../Button/Button';
import styles from './Navbar.module.scss';
const buttons = [
  {
    name:'Reputation',
    isSelected: false,
  },
  {
    name:'New Users',
    isSelected: true,
  },
  {
    name:'Voters',
    isSelected: false,
  },
  {
    name:'Editors',
    isSelected: false,
  },
  {
    name:'Moderators',
    isSelected: false,
  }
]

function Navbar() {
  return (
    <section className={styles.navbar}>
            <Search searchText="Search Users"/>
            <div className={styles.navbar_buttons}>
                {buttons.map(button => <Button name={button.name} isSelected={button.isSelected}/>)}
            </div>
    </section>
  )
}

export default Navbar
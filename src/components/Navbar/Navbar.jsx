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
            <ul className={styles.navbar_buttons}>
                {buttons.map(button => <li><Button  key={button.name} name={button.name} isSelected={button.isSelected}/></li>)}
            </ul>
    </section>
  )
}

export default Navbar
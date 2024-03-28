import React from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export  function Search({searchText}) {
   return ( 
    <div className={styles.search_wrapper}>
        
        <input type="search" className={styles.search} placeholder={searchText}/>
        <FontAwesomeIcon  className={styles.search_icon} icon={faMagnifyingGlass} />
    </div>
    );
}

import React, { useEffect } from 'react'
import styles from './NavBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../models/models';
import Filter from '../Filter/Filter';
import { navbarActions } from '../../store/store';
import Button from '../Button/Button';
import { APP_MESSAGES } from '../constants/APP_MESSAGES';

function NavBar() {
  const navBarState = useSelector((state: RootState) => state.navbar)
  const dark_mode = useSelector((state: RootState) => state.navbar.darkMode)
  const switchThemeButtonLabel = dark_mode ? APP_MESSAGES.NAVBAR.SWITCH_LIGHT_MODE: APP_MESSAGES.NAVBAR.SWITCH_DARK_MODE;
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(navbarActions.toggleDarkMode());
  }

  const handleViewMembers = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Stop event propagation
    dispatch(navbarActions.toggleMembers());
  }

  return (
    <div className={`${styles.container} ${navBarState.darkMode ? styles.dark_mode : ""}`}>
      <div className={styles.title_wrapper}>
        <h1 className={`${styles.title} ${navBarState.darkMode ? styles.dark_text : ""}`}>{APP_MESSAGES.NAVBAR.LITTLE} <span className={`${styles.title_text} ${navBarState.darkMode ? styles.dark_text : ""}`}>{APP_MESSAGES.NAVBAR.BOOK}</span></h1>
      </div>
      <div className={styles.filter_wrapper}>
        <Filter />
      </div>
      <div className={styles.button_wrapper}>
        <Button label={APP_MESSAGES.NAVBAR.VIEW_MEMBERS} onClick={handleViewMembers} transparentButton={true} />
        <Button label={switchThemeButtonLabel} onClick={handleThemeChange} transparentButton={true} />
      </div>
    </div>
  )
}

export default NavBar

import React from 'react'
import styles from './Filter.module.scss'
import Checkbox from '../Checkbox/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { navbarActions } from '../../store/store';
import { RootState } from '../../models/models';
import { APP_CONSTANTS } from '../constants/APP_CONSTANTS';
import { APP_MESSAGES } from '../constants/APP_MESSAGES';
function Filter() {
  const { isRegional, isNational, isInternational, isLocal } = useSelector((state: RootState) => state.navbar.filterState);
  const dark_mode = useSelector((state: RootState) => state.navbar.darkMode);
  const dispatch = useDispatch();
  const handleFilterChange = (id) => {
    dispatch(navbarActions.toggleFilter(id.toLowerCase()));
  }

  return (
    <div className={styles.container}>
      <div className={styles.title_wrapper}>
        <h4 className={`${styles.title} ${dark_mode ? styles.light_text : ""}`}>
          {APP_MESSAGES.NAVBAR.FILTERS.FILTER}
        </h4>
      </div>
      <ul className={styles.checkbox_wrapper}>
        <Checkbox label={APP_MESSAGES.NAVBAR.FILTERS.REGIONAL} id={APP_MESSAGES.NAVBAR.FILTERS.REGIONAL} onChange={handleFilterChange} isChecked={isRegional} />
        <Checkbox label={APP_MESSAGES.NAVBAR.FILTERS.NATIONAL} id={APP_MESSAGES.NAVBAR.FILTERS.NATIONAL} onChange={handleFilterChange} isChecked={isNational} />
        <Checkbox label={APP_MESSAGES.NAVBAR.FILTERS.LOCAL} id={APP_MESSAGES.NAVBAR.FILTERS.LOCAL} onChange={handleFilterChange} isChecked={isLocal} />
        <Checkbox label={APP_MESSAGES.NAVBAR.FILTERS.INTERNATIONAL} id={APP_MESSAGES.NAVBAR.FILTERS.INTERNATIONAL} onChange={handleFilterChange} isChecked={isInternational} />
      </ul>
    </div>
  )
}

export default Filter
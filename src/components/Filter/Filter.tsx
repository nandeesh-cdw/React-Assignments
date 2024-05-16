import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import { navbarActions } from '../../store/store';
import { RootState } from '../../models/models';
import { APP_MESSAGES } from '../constants/APP_MESSAGES';

function Filter() {
  const filterState = useSelector((state: RootState) => state.navbar.filterState);
  const dark_mode = useSelector((state: RootState) => state.navbar.darkMode);
  const dispatch = useDispatch();

  const handleFilterChange = (id) => {
    dispatch(navbarActions.toggleFilter(id));
  };

  const sortedKeys = Object.keys(filterState).sort().reverse();
  return (
    <div className={styles.container}>
      <div className={styles.title_wrapper}>
        <h4 className={`${styles.title} ${dark_mode ? styles.light_text : ""}`}>
          {APP_MESSAGES.NAVBAR.FILTERS.FILTER}
        </h4>
      </div>
      <ul className={styles.checkbox_wrapper}>
        {sortedKeys.map((type) => (
          <Checkbox
            key={type}
            label={`${type.replace(/\b\w/g, l => l.toUpperCase())} Blogs`}
            id={type}
            onChange={() => handleFilterChange(type)}
            isChecked={filterState[type]}
          />
        ))}
      </ul>
    </div>
  );
}

export default Filter;

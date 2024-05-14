import React, { useEffect, useRef } from 'react';
import styles from './SideModalContainer.module.scss';
import { useDispatch } from 'react-redux';
import { navbarActions } from '../../store/store';

function SideModalContainer(props: any) {

  return (
    <div  className={styles.container}>
        {props.children}
    </div>
  );
}

export default SideModalContainer;

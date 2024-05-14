import React, { useEffect, useRef, useState } from 'react';
import SideModalContainer from '../../containers/SideModalContainer/SideModalContainer';
import styles from './MembersModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { navbarActions } from '../../store/store';
import useClickOutside from '../../hooks/useClickOutside';
import MemberCard from '../../components/MemberCard/MemberCard';
import { RootState } from '../../models/models';
import classNames from 'classnames';

function MembersModal() {
  const [showModal, setShowModal] =useState(true);
  const darkMode = useSelector((state:RootState) => state.navbar.darkMode)
  const membersList = useSelector((state:RootState) => state.member.membersData)
  const dispatch = useDispatch();
  const containerRef = useClickOutside(()=>{
    setShowModal(false);
    setTimeout(()=>{
      dispatch(navbarActions.toggleMembers());
    },500)
  })
  
  const containerStyle = classNames(styles.container,{
    [styles.black_mode] : darkMode,
    [styles.fade] : !showModal
  })
  const titleStyles = classNames(styles.title,{
    [styles.light_text] :darkMode
  })
  return (
    <SideModalContainer>
      <div className={containerStyle} ref={containerRef}>
        <div className={styles.members_title}>
          <div className={titleStyles}>
            Members
          </div>
        </div>
        <div className={styles.members_wrapper} >
          <ul className={styles.members_wrapper}>
            {membersList.map((member) => <li key={member.id}> <MemberCard member={member}/></li>)}
          </ul>
        </div>
      </div>
    </SideModalContainer>
  );
}

export default MembersModal;

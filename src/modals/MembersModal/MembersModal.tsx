import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import SideModalContainer from '../../containers/SideModalContainer/SideModalContainer';
import styles from './MembersModal.module.scss';

import { navbarActions } from '../../store/store';
import useClickOutside from '../../hooks/useClickOutside';
import MemberCard from '../../components/MemberCard/MemberCard';
import { RootState } from '../../models/models';
import { APP_MESSAGES } from '../../components/constants/APP_MESSAGES';


function MembersModal() {
  const [showModal, setShowModal] = useState(true);
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode)
  const membersList = useSelector((state: RootState) => state.member.membersData)
  const dispatch = useDispatch();
  let timeoutID;
  const containerRef = useClickOutside(() => {
    setShowModal(false);
    timeoutID = setTimeout(() => {
      dispatch(navbarActions.toggleMembers());
    }, 500)
  })
  useEffect(() =>{
    return () => {
      clearTimeout(timeoutID);
    }
  },[])
  const containerStyle = classNames(styles.container, {
    [styles.black_mode]: darkMode,
    [styles.fade]: !showModal
  })
  const titleStyles = classNames(styles.title, {
    [styles.light_text]: darkMode
  })
  return (
    <SideModalContainer>
      <div className={containerStyle} ref={containerRef}>
        <div className={styles.members_title}>
          <div className={titleStyles}>
            {APP_MESSAGES.MEMBERS_MODAL.MEMBERS}
          </div>
        </div>
        <div className={styles.members_wrapper} >
          <ul className={styles.members_wrapper}>
            {membersList.map((member) => <li key={member.id}> <MemberCard member={member} /></li>)}
          </ul>
        </div>
      </div>
    </SideModalContainer>
  );
}

export default MembersModal;

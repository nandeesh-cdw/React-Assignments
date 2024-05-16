import { useDispatch, useSelector } from 'react-redux';
import styles from './WarningModal.module.scss';
import Button from '../../components/Button/Button';
import { RootState } from '../../models/models';
import SideModalContainer from '../../containers/SideModalContainer/SideModalContainer';
import { APP_MESSAGES } from '../../components/constants/APP_MESSAGES';

function WarningModal(props:any) {
    const dispatch = useDispatch();

    const onCancel = (event) => {
        event.stopPropagation();
        props.onCancel();
    }
    const onExit = (event) => {
        event.stopPropagation();
        props.onExit();
    }
    return (
        <SideModalContainer>
            <div className={styles.container}>
                <div className={styles.modal_wrapper}>
                    <div className={styles.message_wrapper}>
                        <div className={styles.message}>{APP_MESSAGES.MODAL.EDIT_WARNING}</div>
                    </div>
                    <div className={styles.button_wrapper}>
                        <Button label={APP_MESSAGES.BUTTON.CANCEL} onClick={onCancel} cyanButton />
                        <Button label={APP_MESSAGES.BUTTON.EXIT} onClick={onExit} purpleButton />
                    </div>
                </div>
            </div>
        </SideModalContainer>

    )
}

export default WarningModal
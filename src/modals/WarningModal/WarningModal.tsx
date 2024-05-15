import React from 'react'
import styles from './WarningModal.module.scss';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { blogActions, modalActions } from '../../store/store';
import { RootState } from '../../models/models';
import SideModalContainer from '../../containers/SideModalContainer/SideModalContainer';

function WarningModal() {
    const editMode = useSelector((state: RootState) => state.blog.editable);
    const newBlog = useSelector((state: RootState) => state.blog.newBlog);
    const modalOpen = useSelector((state: RootState) => state.modal.toggleWarningModal);
    const dispatch = useDispatch();

    const onCancel = (event) => {
        event.stopPropagation();
        dispatch(modalActions.showWarningModal(false));
        console.log(modalOpen);
    }
    const onExit = (event) => {
        event.stopPropagation();
        if (editMode) {
            dispatch(blogActions.toggleEditMode(false))
        }
        if (newBlog) {
            dispatch(blogActions.toggleNewBlog());
        }
        dispatch(modalActions.showWarningModal(false));
        console.log(modalOpen);
    }
    return (
        <SideModalContainer>
            <div className={styles.container}>
                <div className={styles.modal_wrapper}>
                    <div className="message_wrapper">
                        <div className="message">Seems like you're editing, Do you want to exit?</div>
                    </div>
                    <div className={styles.button_wrapper}>
                        <Button label='Cancel' onClick={onCancel} cyanButton />
                        <Button label='Exit' onClick={onExit} purpleButton />
                    </div>
                </div>
            </div>
        </SideModalContainer>

    )
}

export default WarningModal
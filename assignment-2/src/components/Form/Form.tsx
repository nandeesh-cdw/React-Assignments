import React, { useState } from 'react'
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import { APP_MESSAGES } from '../../constants/Constants';
import Modal from '../Modal/Modal';
import { MODELS } from '../../models/Model';
import { APP_DATA } from '../../constants/Constants';
function Form() {
    const [formData, setFormData] = useState({
        name: '',
        home_town: '',
        destination:'',
        contact: ''
    });
    const [submittedData, setSubmittedData] = useState({});

    const [showModal, setShowModal] = useState(false);
    let userData: MODELS['USER_DATA'] = {
        name: '',
        home_town: '',
        destination:'',
        contact: ''
    } ;

    const handleFormSubmission = (e) => {
        console.log("Button submission");
        e.preventDefault();
        const isEmpty = Object.values(formData).some(value => value === '' || value === null);
        if (!isEmpty) {
            if(formData.contact.length < 10){
                return;
            }
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
            }, 5000); // 10 seconds
            setFormData({
                name: '',
                home_town: '',
                destination:'',
                contact: ''
            })
            setSubmittedData({...formData});
        }
    }

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const isFormValid = Object.values(formData).every(value => value !== '');

    return (
        <div className={styles.form_container}>
            <form className={styles.form} onSubmit={handleFormSubmission}>
                <div className={styles.form_title_wrapper}>
                    <h3 className={styles.heading}>{APP_MESSAGES.FORM_MESSAGES.HEADING}</h3>
                    <h4 className={styles.sub_heading}>{APP_MESSAGES.FORM_MESSAGES.SUB_HEADING}</h4>
                </div>
                <div className={styles.input_wrapper}>
                    <label className={styles.label}>{APP_MESSAGES.FORM_MESSAGES.INPUT_LABELS.NAME}</label>
                    <Input value={formData.name} onChange={(value) => handleInputChange('name', value)}/>
                </div>
                <div className={styles.input_wrapper}>
                    <label className={styles.label}>{APP_MESSAGES.FORM_MESSAGES.INPUT_LABELS.HOME_TOWN}</label>
                    <Dropdown options={APP_DATA.HOME_TOWN} placeholder='Choose' onValueSelected={(value) => handleInputChange('home_town', value)} value={formData.home_town} isFormInput={true}/>
                </div>
                <div className={styles.input_wrapper}>
                    <label className={styles.label}>{APP_MESSAGES.FORM_MESSAGES.INPUT_LABELS.WHERE_TO_GO}</label>
                    <Dropdown options={APP_DATA.DESTINATIONS} placeholder='Choose' onValueSelected={(value) => handleInputChange('destination', value)} value={formData.destination} isFormInput={true}/>
                </div>
                <div className={styles.input_wrapper}>
                    <label className={styles.label}>{APP_MESSAGES.FORM_MESSAGES.INPUT_LABELS.CONTACT}</label>
                    <Input type='number' min={10} max={10} value={formData.contact} onChange={(value) => handleInputChange('contact', value)}/>
                </div>
                <div className={styles.button_wrapper}>
                    <Button name={APP_MESSAGES.FORM_MESSAGES.SUBMIT}  onButtonClick={handleFormSubmission} disabled={!isFormValid}></Button>
                </div>
            </form>
            {showModal && <Modal userData={submittedData}/>}
        </div>
    );
}

export default Form;

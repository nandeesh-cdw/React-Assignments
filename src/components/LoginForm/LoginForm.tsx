import React, { useState } from 'react'
import Input from '../Input/Input';
import Label from '../Label/Label';
import APP_MESSAGES from '../../constants/APP_MESSAGES';
import Button from '../Button/Button';
import styles from './LoginForm.module.scss'
import { useAuth } from '../../services/AuthContext';
import { useNavigate } from 'react-router-dom';
import { APP_CONSTANTS } from '../../constants/APP_CONSTANTS';
function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { isLoggedIn, login, logout } = useAuth();
    const Navigate = useNavigate();


    const handleSubmit = (event) => {
      event.preventDefault();
      if(username === '' ||  password === '') {
        setErrorMessage(APP_MESSAGES.ERROR_MESSAGES.LOGIN_FORM.REQUIRED);
        return
      }
      const isSuccess = login(username,password);
      setErrorMessage("");
      setUsername("");
      setPassword("");
      isSuccess ? Navigate(APP_CONSTANTS.ROUTES.HOME ,{replace: true}) : window.alert(APP_MESSAGES.ERROR_MESSAGES.LOGIN_FORM.WRONG_CREDS);
    };
  
    return (
      <div className={styles.form_container}>
        <div className={styles.form_title_wrapper}>
          <h2 className={styles.form_title}>{APP_MESSAGES.LOGIN_PAGE.LOGIN}</h2>
          <h3 className={styles.form_description}>{APP_MESSAGES.LOGIN_PAGE.DESCRIPTION}</h3>
        </div>
        <form onSubmit={handleSubmit} className={styles.form_wrapper}> 
          <div className={styles.input_wrapper}>
              <Label label={APP_MESSAGES.LOGIN_PAGE.EMAIL}/>
              <Input
                type={APP_CONSTANTS.INPUT_TYPE.TEXT}
                value={username}
                onChange={(name) => setUsername(name)}
                isLogin = {true}
              />
          </div>
          <div className={styles.input_wrapper}>
            <Label label={APP_MESSAGES.LOGIN_PAGE.PASSWORD}/>
              <Input
                type={APP_CONSTANTS.INPUT_TYPE.PASSWORD}
                value={password}
                onChange={(password) => setPassword(password)}
                isLogin = {true}
              />
          </div>
          {errorMessage && 
            (<div className={styles.error_message}>
              {errorMessage}
            </div>)
          }
          <div className={styles.button_wrapper}>
            <Button onClick={handleSubmit} label={APP_MESSAGES.LOGIN_PAGE.LOGIN}/>
          </div>
        </form>
      </div>
    );
}

export default LoginForm
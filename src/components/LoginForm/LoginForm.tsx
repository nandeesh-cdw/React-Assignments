import React, { useState } from 'react'
import Input from '../Input/Input';
import Label from '../Label/Label';
import APP_MESSAGES from '../../constants/APP_MESSAGES';
import Button from '../Button/Button';
import styles from './LoginForm.module.scss'
import { useAuth } from '../../services/AuthContext';
import { useNavigate } from 'react-router-dom';
function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { isLoggedIn, login, logout } = useAuth();
    const Navigate = useNavigate();
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      if(username === '' ||  password === '') {
        setErrorMessage("Please enter both username and password");
        return
      }
      const isSuccess = login(username,password);
      setErrorMessage("");
      setUsername("");
      setPassword("");
      isSuccess ? Navigate('/home' ,{replace: true}) : window.alert("wrong credentials");
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
                type="text"
                value={username}
                onChange={(name) => setUsername(name)}
                isLogin = {true}
              />
          </div>
          <div className={styles.input_wrapper}>
            <Label label={APP_MESSAGES.LOGIN_PAGE.PASSWORD}/>
              <Input
                type="password"
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
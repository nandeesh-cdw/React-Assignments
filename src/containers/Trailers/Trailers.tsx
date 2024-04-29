import React, { useContext } from 'react'
import styles from './Trailers.module.scss'
import { useNavigate } from 'react-router-dom'
import Poster from '../../components/Poster/Poster';
import trailerPoster from '../../assets/sindel-background.png'
import Button from '../../components/Button/Button';
import { useAuth } from '../../services/AuthContext';
import { APP_CONSTANTS } from '../../constants/APP_CONSTANTS';
import APP_MESSAGES from '../../constants/APP_MESSAGES';
function Trailers(props:any) {

    const {isLoggedIn} = useAuth();
    const navigate = useNavigate();
    const onWatchNow = () => {
        isLoggedIn ? navigate(APP_CONSTANTS.ROUTES.NOWSHOWING) : navigate(APP_CONSTANTS.ROUTES.LOGIN);
    }
    const onSignIn = () => {
        navigate(APP_CONSTANTS.ROUTES.LOGIN);
    }
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.title_section}>
                <div className={styles.title_wrapper}>
                    <div className={styles.title}>
                        {APP_MESSAGES.TRAILERS.TRAILERS}
                    </div>
                </div>
                {    !isLoggedIn && (<div className={styles.sign_in_wrapper}>
                    <div className={styles.sign_in_description}>
                        {APP_MESSAGES.TRAILERS.SIGN_IN_REQUIRED} <span className={styles.sign_in} onClick={onSignIn}>{APP_MESSAGES.TRAILERS.SIGN_IN_NOW}</span>
                    </div>  
                </div>)
                }
            </div>
            <div className={styles.trailer_card_wrapper}>
                <div className={styles.poster_wrapper}>
                    <Poster image={trailerPoster} isTrailerCard={true} alt={APP_MESSAGES.TRAILERS.TRAILERS}/>
                </div>
                <div className={styles.description_container}>
                    <div className={styles.title_wrapper}>
                        <div className={styles.title}>{APP_MESSAGES.TRAILERS.SINTEL}</div>
                    </div>
                    <div className={styles.description_wrapper}>
                        <h4 className={styles.description}>
                        {APP_MESSAGES.TRAILERS.SINTEL_DESCRIPTION}
                        </h4>
                    </div>
                    <div className={styles.button_wrapper}>
                        <Button label={APP_MESSAGES.TRAILERS.WATCH_NOW} onClick={onWatchNow}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trailers
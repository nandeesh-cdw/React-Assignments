import React from 'react'
import styles from './Card.module.scss';
import Button from '../Button/Button';
import image from '../../assets/pollachi.png';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/Constants';
import { APP_MESSAGES } from '../../constants/Constants';

function Card({place}) {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/${place.city.toLowerCase()}`);
    }
  return (
    <li>
        <div className={styles.card_wrapper}>
            <img className={styles.location_image} src={`images/${place.city.toLowerCase()}.png`} alt="" />
            <div className={styles.title}>
               {place.place}
            </div>
            <div className={styles.location}>
                {place.city}
            </div>
            <div className={styles.description}>
            {APP_MESSAGES.LOREM}
            </div>
            <div className={styles.button_wrapper}>
            <Button name='READ MORE' onButtonClick={onClick}></Button>
            </div>
        </div>
    </li>
  )
}

export default Card
import React, { useState } from 'react';
import styles from './Promo.module.scss';
import Button from '../Button/Button';
import cover from '../../assets/cover.png';
import Dropdown from '../Dropdown/Dropdown';
import { useNavigate } from 'react-router';
import Cover from '../Cover/Cover';
import { APP_DATA } from '../../constants/Constants';


const options = [
    {
    name:'chidambaram',
    path:'/chidambaram'
    },
    {
        name:'kumbakonam',
        path:'/kumbakonam'
    },
    {
        name:'masinagudi',
        path:'/masinagudi'
    },
    {
        name:'pollachi',
        path:'/pollachi'
    },
    {
        name:'thanjavur',
        path:'/pollachi'
    },
    {
        name:'tirunelveli',
        path:'/tirunelveli'
    },
] 

function Promo(props:any) {
    const [location , setLocation] = useState("");
    const navigation = useNavigate();
    const onLocationSelected = (valueSelected) => {
        setLocation(valueSelected);
    }

    const onButtonClick = () => {
        const selectedPath = options.find(option => option.name === location)?.path;
        navigation(`${selectedPath}`);
    };

  return (
    <div className={styles.promo_wrapper}>
        <div className={styles.promo_text_wrapper}>
                <div className={styles.title_text_wrapper}>
                    <h1 className={styles.title_text}>WELCOME TO EXPLORER</h1>
                </div>
                <div className={styles.tag_line_wrapper}>
                    <h2 className={styles.tag_line}>
                        Your Adventure Travel Expert in the <span className={styles.emphasised_text}>SOUTH</span>
                    </h2>
                </div>
                <div className={styles.location_selection_wrapper}>
                    <div className={styles.dropdown_wrapper}>
                        <Dropdown options={APP_DATA.DESTINATIONS} onValueSelected={onLocationSelected} placeholder='Choose' value={location} isFormInput={false}/>
                    </div>
                    <div className={styles.button_wrapper}>
                        <Button name='EXPLORE' onButtonClick={onButtonClick}/>
                    </div>
                </div>
        </div>
        <div className={styles.promo_image_wrapper}>
            <Cover imagePath={cover}/>
        </div>
    </div>
  )
}

export default Promo
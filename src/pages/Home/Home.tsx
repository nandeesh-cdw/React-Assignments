import React, { useEffect, useState } from 'react';
import HomeCard from '../../components/HomeCard/HomeCard';
import axios from 'axios';
import styles from './Home.module.scss';
import Spinner from '../../components/Spinner/Spinner';
import { useLocation, useNavigate, useParams } from 'react-router';
import ConfirmOrder from '../../components/ConfirmOrder/ConfirmOrder';
import { getOrderedItems } from '../../utils/utils';
import { HOME_MESSAGES } from '../../constants/Messages';
import Footer from '../../components/Footer/Footer';
function Home() {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replaceUrl , setReplaceUrl] = useState(false);
  const location = useLocation();
  const isConfirmOrder = location.pathname === '/confirmOrder' ? true : false;
  useEffect(() => {

    try {
      axios.get('https://jsonmockserver.vercel.app/api/shopping/furniture/categories').then(response => {
        setCategoryData(response.data);
        setLoading(false); 
      });
    } catch (err) {
      console.log(err);
      setLoading(false); 
    }
  }, []);

  const onShop = (category) =>{
    if (isConfirmOrder) {
      navigate(`/categories/${category.id}`, { replace: true })
    } else {
      navigate(`/categories/${category.id}`)
    }
  }
  
  return (
    <>
      {isConfirmOrder && <ConfirmOrder orderedItems={getOrderedItems()}/>}
      <div className={styles.container}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.heading}>{HOME_MESSAGES.heading}</h1>
          <h2 className={styles.sub_heading}>{HOME_MESSAGES.sub_heading}</h2>
        </div>
        <ul className={styles.card_wrapper}>
          { loading ? (
            <Spinner />
          ) : categoryData.length > 0 ? (
            categoryData.map((category,index) => <HomeCard category={category} onShopNow={onShop} key={index}/>)
          ) : (
            <p> { HOME_MESSAGES.not_found }</p>
          )}
        </ul>
      </div>
      <Footer/>
    </>
  );
}

export default Home;

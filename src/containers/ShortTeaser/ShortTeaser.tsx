import React, { useEffect, useState } from 'react'
import styles from './ShortTeaser.module.scss'
import Teaser from '../../components/Teaser/Teaser'
import { movieService } from '../../services/MovieService'
import Spinner from '../../components/Spinner/Spinner';
import APP_MESSAGES from '../../constants/APP_MESSAGES';
function ShortTeaser(props:any) {
  const [teasers , setTeasers] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchShortTeasers = async () => {
      try{
        setLoading(true);
        const teasersData = await movieService.getShortTeasers();
        setTeasers(teasersData);
      } catch (err) {
        alert(err.message);
      }
      setLoading(false);
    }
    fetchShortTeasers();
  },[])
  return (
    <div className={styles.container}>
        <div className={styles.title_wrapper}>
            <h3 className={styles.title}>{APP_MESSAGES.SHORT_TEASERS.SHORT_TEASERS}</h3>
        </div>
        <div className={styles.short_teasers_container}>
          {
            loading ? <Spinner/> : teasers?.map((teaser,index) => {return (<Teaser teaser={teaser} key={index}/>)})
          }
        </div>
    </div>
  )
}

export default ShortTeaser
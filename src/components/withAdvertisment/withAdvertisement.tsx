import React, { useState, useEffect } from 'react';
import styles from './withAdvertisement.module.scss';
import smallPromo1 from '../../assets/small_promo/AdvertisementSmall1.png';
import smallPromo2 from '../../assets/small_promo/AdvertisementSmall2.png';
import largePromo1 from '../../assets/large_promo/adv1.png';
import largePromo2 from '../../assets/large_promo/adv-2.png';
import Poster from '../Poster/Poster';


const withAdvertisement = (WrappedComponent, adDuration, timeoutDuration, isSmallPromo=false, isLargePromo=false , isVideo=false) => {
  return (props) => {
    const [showAd, setShowAd] = useState(false);
    const [isVideoCliked , setisVideoCliked] = useState(false);
    const [seekTime, setSeekTime] = useState(0);
    const [videoTime, setVideoTime] = useState(0);
    // useEffect(() => {
    //   setShowAd(false);
    //   const timer = setTimeout(() => {
    //     setShowAd(true);
    //   }, timeoutDuration * 1000); 

    //   return () => clearTimeout(timer);
    // }, [props.movie]);

    // useEffect(() =>{
    //   setShowAd(false);
    //   setIsPlaying(true);
    //   const timer = setTimeout(() => {
    //     setShowAd(true);
    //     setIsPlaying(false);
    //   }, timeoutDuration * 1000); 

    //   return () => clearTimeout(timer);
    // },[isVideo]);

    useEffect(() => {
      if (showAd) {
        const adTimer = setTimeout(() => {
          setShowAd(false);
          // setIsPlaying(true);
        }, adDuration * 1000);

        return () => clearTimeout(adTimer);
      }
    }, [showAd]);

    const handleVideoAd = () => {
      if(!isVideoCliked){
        setShowAd(false);
        const timer = setTimeout(() => {
          setShowAd(true);
        }, timeoutDuration * 1000);
      }
      setisVideoCliked(true);
    }
    return (
      <div>
        {showAd ? (
          <div className={styles.advertisement_wrapper}>
            { isLargePromo && (<Poster isLargePromo={true} image={largePromo1} alt="large promo"/>) } 
            <div className={styles.advertisement_title}>
              {/*  { !showAd && (<p>Advertisement  in {timeoutDuration} seconds</p>)}  */}
              { showAd && (<p>Video resumes in  {adDuration} seconds</p>)}
            </div>
          </div>
        ) : (
          <WrappedComponent {...props} showAd={showAd} shouldDisplayAd={handleVideoAd} seekTime={seekTime} videoTime={(time) => {
            setSeekTime(time);
          }}/>
        )}
      </div>
    );
  };
};

export default withAdvertisement
import React, { useState, useEffect } from 'react';
import styles from './withAdvertisement.module.scss';
import smallPromo1 from '../../assets/small_promo/AdvertisementSmall1.png';
import smallPromo2 from '../../assets/small_promo/AdvertisementSmall2.png';
import largePromo1 from '../../assets/large_promo/adv1.png';
import largePromo2 from '../../assets/large_promo/adv-2.png';
import Poster from '../Poster/Poster';
import classNames from 'classnames';


const withAdvertisement = (WrappedComponent, adDuration, timeoutDuration, isSmallPromo=false, isLargePromo=false , isVideo=false) => {
  return (props) => {
    const [showAd, setShowAd] = useState(false);
    const [isVideoCliked , setisVideoCliked] = useState(false);
    const [stopPlaying, setStopPlaying] = useState(null);
    const [timeRemainining, setTimeRemainining] = useState(timeoutDuration);
    const toggleComponent = classNames({
      [styles.hide_element]: showAd
    })
    const toggleAd = classNames(styles.advertisement_wrapper,{
      [styles.hide_element]: !showAd
    })
    useEffect(() => {
      if(!isVideo){
        setShowAd(false);
        setTimeRemainining(timeoutDuration);
        const timeRemainining = setInterval(() =>{
          setTimeRemainining( prevState => prevState - 1)
        } , 1000);
        const timer = setTimeout(() => {
          setShowAd(true);
          setTimeRemainining(0);
          clearInterval(timeRemainining);
        }, timeoutDuration * 1000); 
  
        return () => {
          clearInterval(timeRemainining);
          clearTimeout(timer);
        }
      }
    }, [props.movie]);

    useEffect(() => {
      if (showAd) {
        setTimeRemainining(adDuration);
        const timeRemainining = setInterval(() =>{
          setTimeRemainining(prevState => prevState -1 );
        },1000);
        const adTimer = setTimeout(() => {
          setShowAd(false);
          setStopPlaying(false);
          setTimeRemainining(0);
          clearInterval(timeRemainining);
        }, adDuration * 1000);

        return () => {
          clearInterval(timeRemainining);
          clearTimeout(adTimer);
        }
      }
    }, [showAd]);

    const handleVideoAd = () => {
      if(!isVideoCliked){
        setShowAd(false);
        const timeRemainining = setInterval(() =>{
          setTimeRemainining( prevState => prevState - 1)
        } , 1000);
        const timer = setTimeout(() => {
          setShowAd(true);
          setStopPlaying(true);
          setTimeRemainining(0);
          clearInterval(timeRemainining);
        }, timeoutDuration * 1000);
      }
      setisVideoCliked(true);
    }
    return (
      // Different implementation for rednering ad and wrapped component 
      // <div>
      //   {showAd ? (
      //     <div className={styles.advertisement_wrapper}>
      //       { isLargePromo && (<Poster isLargePromo={true} image={largePromo1} alt="large promo"/>) } 
      //       <div className={styles.advertisement_title}>
      //         {/*  { !showAd && (<p>Advertisement  in {timeoutDuration} seconds</p>)}  */}
      //         { showAd && (<p>Video resumes in  {adDuration} seconds</p>)}
      //       </div>
      //     </div>
      //   ) : (
      //     <WrappedComponent {...props} showAd={showAd} shouldDisplayAd={handleVideoAd} seekTime={seekTime} videoTime={(time) => {
      //       setSeekTime(time);
      //     }}/>
      //   )}
      // </div>
      <div>
        <div className={toggleAd}>
          { 
          isLargePromo && (<div className={styles.poster_wrapper_large}>
              <Poster isLargePromo={true} image={largePromo1} alt="large promo"/>
            </div>) 
          } 
          { 
          isSmallPromo && (<div className={styles.poster_wrapper_small}>
            <Poster isSmallPromo={true} image={smallPromo1} alt="small_promo"/>
            </div>)
          }
          <div className={styles.advertisement_wrapper}>
            { showAd && (<p className={styles.advertisement_title}>Video resumes in {timeRemainining} seconds</p>)}
          </div>
        </div>
        <div className={toggleComponent}>
          <WrappedComponent {...props} showAd={showAd} shouldDisplayAd={handleVideoAd} stopPlaying={stopPlaying} remainingTime={timeRemainining}/>
        </div>
      </div>
    );
  };
};

export default withAdvertisement
import React, { useEffect, useRef, useState } from 'react'
import styles from './Video.module.scss'
import classNames from 'classnames'
import playButton from '../../assets/play-solid.svg'
import withAdvertisement from '../withAdvertisment/withAdvertisement';
function Video(props:any) {
  const classnames = classNames({
    [styles.now_showing]: props.nowShowing,
    [styles.shortTeasers]: props.shortTeasers
  });
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoClicked, setVideoClicked] = useState(false);
  const handleVideoClick = () => {   
    if(!videoClicked) {
      console.log("Video clicked");
      props.shouldDisplayAd();
      setVideoClicked(true);
    }
    props.videoTime(videoRef.current.currentTime);
    setIsPlaying( prevState => !prevState);
    isPlaying ? videoRef?.current.pause() : videoRef?.current.play();
  }

  useEffect(() => {
    const seekTime = videoRef.current.currentTime;
    videoRef.current.currentTime = props.seekTime;
    return () => {
      console.log("seeeeek time " +seekTime);
      props.videoTime(seekTime);
    };
  },[])

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        props.videoTime(videoRef.current.currentTime);
      }
    };
  }, []);

  // useEffect(() => {
  //   props.shouldPlay ? videoRef?.current.pause() : videoRef?.current.play();
  // },[props.shouldPlay])

  return (
    <>
      { !isPlaying && (<img className={styles.play_pause} src={playButton}/>)}
      <video className={classnames}  poster={props.poster} controls={false} onClick={handleVideoClick} ref={videoRef}>
          <source src={props.src} type="video/mp4"></source>
      </video>
    </>
  )
}

export default withAdvertisement(Video ,5 , 5 , false, true , true)
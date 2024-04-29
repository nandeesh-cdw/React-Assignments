import React, { useEffect, useRef, useState } from 'react'
import styles from './Video.module.scss'
import classNames from 'classnames'
import playButton from '../../assets/play-solid.svg'
import withAdvertisement from '../withAdvertisment/withAdvertisement';
import { VideoProps } from '../../models/models';
function Video(props:VideoProps) {
  const classnames = classNames({
    [styles.now_showing]: props.nowShowing,
    [styles.shortTeasers]: props.shortTeasers
  });
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoClicked, setVideoClicked] = useState(false);
  
  const handleVideoClick = () => {   
    if(!videoClicked) {
      props.shouldDisplayAd?.();
      setVideoClicked(true);
    }
    setIsPlaying( prevState => !prevState);
    isPlaying ? videoRef?.current.pause() : videoRef?.current.play();
  }

  // Different implementation
  // useEffect(() => {
  //   const seekTime = videoRef.current.currentTime;
  //   videoRef.current.currentTime = props.seekTime;
  //   return () => {
  //     props.videoTime(seekTime);
  //   };
  // },[])

  useEffect(() =>{

    if (props.stopPlaying) {
      videoRef?.current.pause()
      setIsPlaying(false);
    }
    if(videoRef.current.currentTime > 0) {
      if (!props.stopPlaying) {
        videoRef?.current.play();
        setIsPlaying(true);
      }
    }
  }, [props.stopPlaying])

  return (
    <>
    <div className={styles.video_wrapper}>
      {/* { !isPlaying && (<img className={styles.play_pause} src={playButton}/>)} */}
        <video className={classnames}  poster={props.poster} controls={false} onClick={handleVideoClick} ref={videoRef} >
            <source src={props.src} type="video/mp4"></source>
        </video>
    </div>
      
    </>
  )
}

export default Video;
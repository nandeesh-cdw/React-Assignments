import React from 'react'
import styles from './Teaser.module.scss'
import Video from '../Video/Video'
import withAdvertisement from '../withAdvertisment/withAdvertisement'

function Teaser(props:any) {
    const VideoWithAds = withAdvertisement(Video, 5, 3, true, false, true);
  return (
    <div className={styles.teaser_wrapper}>
        <div className={styles.video_wrapper}>
            <VideoWithAds src={props.teaser.videoUrl} poster={props.teaser.posterImg} shortTeasers={true}/>
        </div>
        <div className={styles.title_wrapper}>
          <h3 className={styles.title}>{props.teaser.movieName}</h3>
        </div>
    </div>
  )
}

export default Teaser
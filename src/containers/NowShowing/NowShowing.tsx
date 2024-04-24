import React from 'react'
import styles from './NowShowing.module.scss'
import APP_MESSAGES from '../../constants/APP_MESSAGES'
import Video from '../../components/Video/Video'
import poster from '../../assets/sindel-background.png'
function NowShowing() {
  return (
    <div className={styles.container}>
        <div className={styles.video_container}>
            <div className={styles.title}>{APP_MESSAGES.NOW_SHOWING_PAGE.NOW_SHOWING}</div>
            <div className={styles.video_wrapper}>
                <div className={styles.video_title_wrapper}>
                    <h2 className={styles.video_title}>
                        {APP_MESSAGES.NOW_SHOWING_PAGE.VIDEO_TITLE}
                    </h2>
                </div>
                <div className={styles.movie_wrapper}>
                    <Video src='https://tympanus.net/Development/SeatPreview/media/sintel.mp4' poster={poster} nowShowing={true} />
                </div>
                <div className={styles.movie_description_wrapper}>
                    <h4 className={styles.movie_description}>{APP_MESSAGES.NOW_SHOWING_PAGE.VIDEO_DESCRIPTION}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NowShowing
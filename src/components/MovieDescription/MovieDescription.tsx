import React, { useState } from 'react'
import styles from './MovieDescription.module.scss'
import Like from '../Like/Like'
import Poster from '../Poster/Poster'
import withAdvertisement from '../withAdvertisment/withAdvertisement'
import { MovieDescriptionProps } from '../../models/models'
import APP_MESSAGES from '../../constants/APP_MESSAGES'
function MovieDescription(props:MovieDescriptionProps) {
  return (
    <div className={styles.movie_description_wrapper}>
        <div className={styles.title_wrapper}>
            <h3 className={styles.title}>{props?.movie?.name}</h3>
            <div className={styles.like_wrapper}>
                <Like onclick={() => {props.onLiked(props.movie)}}/>
            </div>
        </div>
        <div className={styles.like_count_wrapper}>
            <h4 className={styles.like_count}>
                {props?.movie?.likes} {APP_MESSAGES.MOVIE_DESCRIPTION.LIKES}
            </h4>
        </div>
        <div className={styles.image_wrapper}>
            <Poster image={props?.movie?.imgUrl} isMovieDescription={true} alt={props?.movie?.name}/>
        </div>
        <div className={styles.description_wrapper}>
            <p className={styles.description}>
            {props?.movie?.description}
            </p>
        </div>
        <div className={styles.actors_wrapper}>
            <h3 className={styles.actor_title}>
                {APP_MESSAGES.MOVIE_DESCRIPTION.ACTORS}
            </h3>
            <ul className={styles.actors_list}>
                {props?.movie?.actors?.map( actor => { return<li className={styles.actor} key={actor}>{actor}</li>})}
            </ul>
        </div>
        {!props.showAd && props.remainingTime && (
        <div className={styles.advertisment_wrapper}>
            <div className={styles.advertisement_title}>
                {APP_MESSAGES.MOVIE_DESCRIPTION.ADVERTISEMENT} {props.remainingTime} {APP_MESSAGES.MOVIE_DESCRIPTION.SECONDS}
            </div>
        </div>)
        }
    </div>
  )
}

export default React.memo(withAdvertisement(MovieDescription , 5 , 5, false , true , false))
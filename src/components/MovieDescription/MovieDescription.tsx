import React, { useState } from 'react'
import styles from './MovieDescription.module.scss'
import Like from '../Like/Like'
import Poster from '../Poster/Poster'
import withAdvertisement from '../withAdvertisment/withAdvertisement'
function MovieDescription(props:any) {
    const { isLiked, setLiked } = props;
  return (
    <div className={styles.movie_description_wrapper}>
        <div className={styles.title_wrapper}>
            <h3 className={styles.title}>{props?.movie?.name}</h3>
            <div className={styles.like_wrapper}>
                <Like onclick={() => {
                        setLiked(prevLiked => !prevLiked);
                        props.onLiked(props.movie,isLiked);
                        }}/>
            </div>
        </div>
        <div className={styles.like_count_wrapper}>
            <h4 className={styles.like_count}>
                {props?.movie?.likes} likes
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
                ACTORS
            </h3>
            <ul className={styles.actors_list}>
                {props?.movie?.actors?.map( actor => { return<li className={styles.actor}>{actor}</li>})}
            </ul>
        </div>
        {!props.showAd && (
        <div className={styles.advertisment_wrapper}>
            <div className={styles.advertisement_title}>
                Advertisement in 15 seconds
            </div>
        </div>)
        }
        
    </div>
  )
}

export default withAdvertisement(MovieDescription , 5 , 5, false , true );
import React, { useState } from 'react'
import styles from './MovieCard.module.scss'
import Poster from '../Poster/Poster'
import Like from '../Like/Like'
function MovieCard(props:any) {
    const [liked, setLiked] = useState(false);
  return (
    <div className={styles.movie_card_wrapper}>
        <div className={styles.image_wrapper} onClick={() => props.onMovieClick(props.movie)}>
            <Poster image={props?.movie?.imgUrl} alt={props?.movie?.name} isMovieCard={true}/>
        </div>
        <div className={styles.movie_description}>
            <div className={styles.title_wrapper}>
                <h3 className={styles.title}>
                {props?.movie?.name}
                </h3>
                <h4 className={styles.like_counts}>
                    {props?.movie?.likes} Likes 
                </h4>
            </div>
            <div className={styles.like_wrapper}>
                <Like onclick={() => {
                    setLiked(prevLiked => !prevLiked);
                    props.onLiked(props.movie,liked);
                    }}/>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
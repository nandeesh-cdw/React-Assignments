import React, { useEffect, useRef, useState } from 'react'
import styles from './AllMovies.module.scss'
import MovieCard from '../../components/MovieCard/MovieCard'
import Button from '../../components/Button/Button'
import APP_MESSAGES from '../../constants/APP_MESSAGES';
function AllMovies(props:any) {
  const container = useRef(null);
  const handleButtonClick = () => {
    container.current?.lastElementChild?.scrollIntoView()
    props.onLoadMore();
  }
  useEffect(() => {
    if (container.current) {
      container.current.scrollTo({
        top: container.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [props.movies]);
  return (
    <div className={styles.container}>
        <div className={styles.title_wrapper}> 
            <h2 className={styles.title}>{APP_MESSAGES.ALL_MOVIES.ALL_MOVIES}</h2>
        </div>
        <ul className={styles.movies_list_wrapper} ref={container}>
            {props.movies.map((movie , index) => <li key={index}><MovieCard movie={movie} onLiked={(movie)=>props.onLiked(movie)} onMovieClick={(movie)=>props.onMovieClick(movie)} /> </li>)}
        </ul>
        <div className={styles.button_wrapper}>
          {props.showLoadMore && (<Button label={APP_MESSAGES.ALL_MOVIES.BUTTON_LABEL}  onClick={handleButtonClick}/>)}
        </div>
    </div>
  )
}

export default React.memo(AllMovies)
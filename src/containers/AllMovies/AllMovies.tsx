import React from 'react'
import styles from './AllMovies.module.scss'
import MovieCard from '../../components/MovieCard/MovieCard'
import Button from '../../components/Button/Button'
function AllMovies(props:any) {
  return (
    <div className={styles.container}>
        <div className={styles.title_wrapper}> 
            <h2 className={styles.title}>All Movies</h2>
        </div>
        <div className={styles.movies_list_wrapper}>
            {props.movies.map(movie => <MovieCard movie={movie} onLiked={(movie,isLiked)=>props.onLiked(movie,isLiked)} onMovieClick={(movie)=>props.onMovieClick(movie)} />)}
        </div>
        <div className={styles.button_wrapper}>
          {props.showLoadMore && (<Button label="LOAD MORE" isLoadmore={true} onClick={props.onLoadMore}/>)}
        </div>
    </div>
  )
}

export default AllMovies
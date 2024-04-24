import React, { useEffect, useState } from 'react'
import styles from './Movies.module.scss'
import MovieDescription from '../../components/MovieDescription/MovieDescription'
import AllMovies from '../../containers/AllMovies/AllMovies'
import {movieService} from '../../services/MovieService';
import Spinner from '../../components/Spinner/Spinner';
function Movies() {
  const [moviesData, setMoviesData] = useState([{}]);
  const [movie, setMovie] = useState(null);
  const [displayedMoviesCount, setDisplayedMoviesCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    async function fetchMovies () {
      try {
        const movies = await movieService.getMovies();
        setMoviesData(movies);
        setLoading(false);
      } catch (error) { 
        console.log(error);
        setLoading(false);
      }
    }
    fetchMovies();
  },[]);

  const handleLikeClick = (selectedMovie, isLiked) => {
    const updatedMovieList = moviesData.map((movie:any) => {
      if (movie.id === selectedMovie.id) {
        return { ...movie, likes: isLiked ? movie.likes - 1 : movie.likes + 1 };
      }
      return movie;
    });
    setMoviesData(updatedMovieList);
    if (movie && movie.id === selectedMovie.id) {
      setLiked(!isLiked);
      setMovie(prevMovie => ({
        ...prevMovie,
        likes: isLiked ? prevMovie.likes - 1 : prevMovie.likes + 1
      }));
    }
  };

  const handleMovieClick = (movie) => {

    setMovie(movie);
  }
  const handleLoadMore = () => {
    setDisplayedMoviesCount(prevCount =>
      Math.min(prevCount + 6, moviesData.length)
    );
  };
  const showLoadMoreButton = displayedMoviesCount < moviesData.length;
  console.log("Show more "+showLoadMoreButton);
  
  return (
    <div className={styles.container} >
      <div className={styles.movies_container}>
      {loading && <Spinner/>}
      {!loading && (<AllMovies movies={moviesData.slice(0, displayedMoviesCount)} onLiked={(movie, isLiked)=>handleLikeClick(movie , isLiked)} 
      onMovieClick={(movie)=>handleMovieClick(movie)} onLoadMore={handleLoadMore} showLoadMore={showLoadMoreButton}/>)}
      </div>
      <div className={styles.movie_description_container}>
      {movie && (<MovieDescription movie={movie} isLiked={liked} onLiked={(movie, isLiked) => handleLikeClick(movie, isLiked)} setLiked={setLiked}/> )}
      </div>
    </div>
  )
}

export default Movies
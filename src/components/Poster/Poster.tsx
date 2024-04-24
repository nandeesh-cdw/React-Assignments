import React from 'react'
import styles from './Poster.module.scss'
import classNames from 'classnames'
function Poster(props:any) {
    const classnames = classNames({
        [styles.movie_description]: props?.isMovieDescription,
        [styles.movie_card]: props?.isMovieCard,
        [styles.large_promo]: props?.isLargePromo

    })
  return (
    <img className={classnames} src={props?.image} alt={props?.alt}/>
  )
}

export default Poster
import React from 'react'
import styles from './Poster.module.scss'
import classNames from 'classnames'
import { PosterProps } from '../../models/models'
function Poster(props:PosterProps) {
    const classnames = classNames({
        [styles.movie_description]: props?.isMovieDescription,
        [styles.movie_card]: props?.isMovieCard,
        [styles.large_promo]: props?.isLargePromo,
        [styles.trailer_card]: props.isTrailerCard,
        [styles.small_promo]: props?.isSmallPromo

    })
  return (
    <img className={classnames} src={props?.image} alt={props?.alt}/>
  )
}

export default Poster
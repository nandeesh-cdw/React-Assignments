import React, { useState } from 'react'
import styles from './Image.module.scss'
import classNames from 'classnames'
import placeholderImage from '../../assets/placeholder.jpeg';

function Image(props:any) {
  const [imageSrc, setImageSrc] = useState(props.src); // Initialize the image source state

  const handleImageError = () => {
    // If the main image fails to load, update the image source to the placeholder image
    setImageSrc(placeholderImage);
  };
    const imageStyles = classNames({
        [styles.card_image]: props.isCardImage,
        [styles.member_image]: props.isMemberImage
    })
  return (
    <img className={imageStyles} src={imageSrc} alt={props.alt} onError={handleImageError} />
  )
}

export default Image
import React, { useEffect, useState } from 'react'
import styles from './Image.module.scss'
import classNames from 'classnames'
import placeholderImage from '../../assets/card_placeholder.jpeg';
import { ImageProps } from '../../models/models';

function Image(props: ImageProps) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (props.src) {
      setImageSrc(props.src);
    }

  }, [props.src])
  const handleImageError = () => {
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
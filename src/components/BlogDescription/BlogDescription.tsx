import React, { useEffect, useRef, useState } from 'react'
import styles from './BlogDescription.module.scss'
import Image from '../Image/Image'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Blog, RootState } from '../../models/models'
import Button from '../Button/Button'
import { blogActions } from '../../store/store'
import { APP_MESSAGES } from '../constants/APP_MESSAGES'
import Textarea from '../Textarea/Textarea'
function BlogDescription(props: any) {
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode)
  const editable = useSelector((state: RootState) => state.blog.editable)
  const currentBlog = props.blog
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [photo, setPhoto] = useState("")
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setTitle(props.blog.title);
    setDetails(props.blog.details);
    setPhoto(props.blog.photo);
    setFocus(false);
  }, [props.blog])
  const containerStyles = classNames(styles.container, {
    [styles.dark_background]: darkMode
  });
  const titleWrapperStyles = classNames(styles.title_wrapper, {
    [styles.error]: titleError
  });
  const descriptionWrapperStyles = classNames(styles.description_wrapper, {
    [styles.error]: detailsError
  })

  const handleDetailsChange = (value) => {
    if (detailsError) {
      setDetailsError(false);
    }

    setDetails(value)
  }

  const handleTitleChange = (value) => {
    if (titleError) {
      setTitleError(false);
    }
    setTitle(value);
  }

  const onEditContent = () => {
    dispatch(blogActions.toggleEditMode(true));
    setFocus(true);
  }
  const onCancel = () => {
    setFocus(false);
    setDetails(currentBlog.details);
    setTitle(currentBlog.title);
    dispatch(blogActions.toggleEditMode(false));
  }

  const onSave = () => {
    if (title.length > 3 && details.length > 10) {
      const newBlog = { ...currentBlog, title: title, details: details, id: currentBlog.id };
      dispatch(blogActions.updateBlog(newBlog));
      dispatch(blogActions.currentSelectedBlog(newBlog));
      dispatch(blogActions.toggleEditMode(false));
    }
    if (!(title.length > 3)) {
      setTitleError(true);
    }
    if (!(details.length > 10)) {
      setDetailsError(true);
    }
    setFocus(false);
  }
  return (

    <div className={containerStyles}>
      <div className={styles.blog_description_wrapper}>
        <div className={styles.image_wrapper}>
          {props.blog && <Image src={photo} alt={props.title} isCardImage={true} />}
        </div>
        <div className={titleWrapperStyles}>
          <Textarea blogTitle editable={editable} onChange={handleTitleChange} value={title} focus={focus}/>
        </div>
        <div className={descriptionWrapperStyles}>
          <Textarea blogDescription editable={editable} onChange={handleDetailsChange} value={details} />
        </div>
      </div>
      {props.blog && <div className={styles.button_wrapper}>
        {!editable && <Button label={APP_MESSAGES.BUTTON.EDIT} onClick={onEditContent} cyanButton={true} />}
        {editable && (
          <>
            <Button label={APP_MESSAGES.BUTTON.CANCEL} onClick={onCancel} cyanButton={true} />
            <Button label={APP_MESSAGES.BUTTON.SAVE} onClick={onSave} purpleButton={true} />
          </>
        )}
      </div>}
    </div>
  )
}

export default BlogDescription
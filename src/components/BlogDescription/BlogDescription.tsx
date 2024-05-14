import React, { useEffect, useState } from 'react'
import styles from './BlogDescription.module.scss'
import Image from '../Image/Image'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Blog, RootState } from '../../models/models'
import Button from '../Button/Button'
import { blogActions } from '../../store/store'
function BlogDescription(props:any) {
  
  const darkMode = useSelector((state:RootState) => state.navbar.darkMode)
  const editable = useSelector((state:RootState) => state.blog.editable)
  const currentBlog:Blog = useSelector((state:RootState) => state.blog.currentBlog);
  const [blog, setBlog] = useState(currentBlog);
  
  const dispatch = useDispatch();

  const containerStyles = classNames(styles.container,{
    [styles.dark_background]: darkMode
  });
  const descriptionStyles = classNames(styles.description,{
    [styles.light_text]: darkMode
  });
  const titleStyles = classNames(styles.title,{
    [styles.light_text]: darkMode
  })

  

  const onEditContent = () => {
    // dispatch(blogActions.toggleEditMode());
  }
  const onCancel = () => {
    // dispatch(blogActions.toggleEditMode());
  }

  const onSave = () => {
    // dispatch(blogActions.toggleEditMode());
  }
  return (
    <div className={containerStyles}>
        <div className={styles.blog_description_wrapper}>
          <div className={styles.image_wrapper}>
            <Image src={blog?.photo} alt={props.title} isCardImage={true}/>
          </div>
          <div className={styles.title_wrapper}>
            <textarea className={titleStyles} readOnly={!editable}>
              {blog?.title}
            </textarea>
          </div>
          <div className={styles.description_wrapper}>
            <textarea className={descriptionStyles} readOnly={!editable}>
              {blog?.details}
            </textarea>
          </div>
        </div>
        <div className={styles.button_wrapper}>
          { !editable && <Button label="EDIT CONTENT" onClick={onEditContent} cyanButton={true}/>}
          { editable && (
            <>
            <Button label="CANCEL" onClick={onCancel} cyanButton={true}/>
            <Button label="SAVE CONTENT" onClick={onSave} purpleButton={true}/>
            </>
          )}
        </div>
    </div>
  )
}

export default BlogDescription
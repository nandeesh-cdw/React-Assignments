import React, { useState } from 'react'
import styles from './NewBlog.module.scss'
import SideModalContainer from '../../containers/SideModalContainer/SideModalContainer'
import { APP_MESSAGES } from '../../components/constants/APP_MESSAGES'
import useClickOutside from '../../hooks/useClickOutside'
import { useDispatch, useSelector } from 'react-redux'
import { blogActions, modalActions } from '../../store/store'
import { Blog, RootState } from '../../models/models'
import classNames from 'classnames'
import { APP_CONSTANTS } from '../../components/constants/APP_CONSTANTS'

function NewBlog() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);
  const [blogDetails, setBlogDetails] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [focus, setFocus] = useState(true);
  const editMode = useSelector((state: RootState) => state.blog.editable);
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode);
  const blogId = useSelector((state: RootState) => state.blog.id);

  const containerStyles = classNames(styles.container, {
    [styles.black_mode]: darkMode,
    [styles.fade]: !showModal
  })
  const titleStyles = classNames(styles.title, {
    [styles.light_text]: darkMode
  })

  const containerRef = useClickOutside(() => {
    if (editMode) {
      dispatch(modalActions.showWarningModal(true));
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      dispatch(blogActions.toggleNewBlog());
    }, 500)
  })

  if (blogDetails.length > 0 || blogTitle.length > 0) {
    dispatch(blogActions.toggleEditMode(true));
  } else {
    dispatch(blogActions.toggleEditMode(false));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (blogTitle.length > 3 && blogDetails.length > 10) {
      const newBlog: Blog = {
        id: blogId,
        title: blogTitle,
        photo: APP_CONSTANTS.FALLBACK_IMAGE_URL,
        details: blogDetails,
        type: "Local"
      }
      dispatch(blogActions.setId(blogId + 1));
      dispatch(blogActions.addNewBlog(newBlog));
      dispatch(blogActions.toggleEditMode(false));
      setShowModal(false);
      setTimeout(() => {
        dispatch(blogActions.toggleNewBlog());
      }, 500)
    }
  }

  return (
    <SideModalContainer>
      <div className={containerStyles} ref={containerRef}>
        <div className={styles.title_wrapper}>
          <div className={titleStyles}>
            {APP_MESSAGES.BLOG.TITLE}
          </div>
        </div>
        <form className={styles.blog_details} onSubmit={handleSubmit}>
          <div className={styles.blog_title_wrapper}>
            <input
              type='text'
              placeholder={APP_MESSAGES.BLOG.BLOG_TITLE_PLACEHOLDER}
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              className={styles.blog_title_input}
              autoFocus={focus}
            />
          </div>
          <div className={styles.blog_details_wrapper}>
            <textarea
              placeholder={APP_MESSAGES.BLOG.BLOG_DETAILS_PLACEHOLDER}
              value={blogDetails}
              onChange={(e) => setBlogDetails(e.target.value)}
              className={styles.blog_details_textarea}
            />
          </div>
          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.add_blog_button}>
              ADD
            </button>
          </div>
        </form>
      </div>
    </SideModalContainer>
  )
}

export default NewBlog
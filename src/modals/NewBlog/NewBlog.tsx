import React, { useState } from 'react'
import styles from './NewBlog.module.scss'
import SideModalContainer from '../../containers/SideModalContainer/SideModalContainer'
import { APP_MESSAGES } from '../../components/constants/APP_MESSAGES'
import Input from '../../components/Input/Input'
import useClickOutside from '../../hooks/useClickOutside'
import { useDispatch, useSelector } from 'react-redux'
import { blogActions, modalActions } from '../../store/store'
import Button from '../../components/Button/Button'
import { Blog, RootState } from '../../models/models'
import classNames from 'classnames'
import card_image from '../../assets/card_placeholder.jpeg'
import Textarea from '../../components/Textarea/Textarea'
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

  const onBlogDetailsChange = (value) => {
    setBlogDetails(value);
  }
  const onBlogTitleChange = (value) => {
    setBlogTitle(value);
  }
  const onAddBlog = () => {
    if (blogTitle.length > 3 && blogDetails.length > 10) {
      const newBlog: Blog = {
        id: blogId,
        title: blogTitle,
        photo: "https://images.unsplash.com/photo-1715090039874-cf28b78a9f08?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: blogDetails,
        type: "Local"
      }
      dispatch(blogActions.setId(blogId + 1));
      dispatch(blogActions.addNewBlog(newBlog));
      dispatch(blogActions.toggleEditMode(false));
      dispatch(blogActions.toggleNewBlog());
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
        <div className={styles.blog_details}>
          <div className={styles.blog_title_wrapper}>
            <Input type='text' placeholder={APP_MESSAGES.BLOG.BLOG_TITLE_PLACEHOLDER} onChange={onBlogTitleChange} value={blogTitle} blogTitle focus={focus}/>
          </div>
          <div className={styles.blog_details_wrapper}>
            <Textarea placeholder={APP_MESSAGES.BLOG.BLOG_DETAILS_PLACEHOLDER} onChange={onBlogDetailsChange} value={blogDetails} blogDetail editable={true} />
          </div>
          <div className={styles.button_wrapper}>
            <Button label="ADD" onClick={onAddBlog} purpleButtonBig></Button>
          </div>
        </div>
      </div>
    </SideModalContainer>
  )
}

export default NewBlog
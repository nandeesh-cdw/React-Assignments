import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import styles from './NewBlog.module.scss'
import SideModalContainer from '../../containers/SideModalContainer/SideModalContainer'
import { APP_MESSAGES } from '../../components/constants/APP_MESSAGES'
import useClickOutside from '../../hooks/useClickOutside'
import { blogActions, navbarActions } from '../../store/store'
import { Blog, RootState } from '../../models/models'
import { APP_CONSTANTS } from '../../components/constants/APP_CONSTANTS'
import Textarea from '../../components/Textarea/Textarea'
import Input from '../../components/Input/Input'
import WarningModal from '../WarningModal/WarningModal'

function NewBlog() {
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.navbar.filterState);
  const [showWarningModal, setShowWarningModal] =useState(false);
  const [showModal, setShowModal] = useState(true);
  const [blogDetails, setBlogDetails] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const editMode = useSelector((state: RootState) => state.blog.editable);
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode);
  const blogId = useSelector((state: RootState) => state.blog.id);
  let timeoutID;

  const containerStyles = classNames(styles.container, {
    [styles.black_mode]: darkMode,
    [styles.fade]: !showModal
  })
  const titleStyles = classNames(styles.title, {
    [styles.light_text]: darkMode
  })
  
  useEffect(() =>{
    dispatch(blogActions.toggleEditMode(true));
    return () =>{
      clearTimeout(timeoutID)
    }
  },[])
  const onCancel = () =>{
    setShowWarningModal(false);
  }

  const onExit = () =>{
    setShowWarningModal(false);
    dispatch(blogActions.toggleEditMode(false));
    setShowModal(false);
      timeoutID = setTimeout(() => {
        dispatch(blogActions.toggleNewBlog());
      }, 500)
  }
  const containerRef = useClickOutside(() => {
    if (editMode) {
      setShowWarningModal(true);
      return;
    }
    setShowModal(false);
    timeoutID = setTimeout(() => {
      dispatch(blogActions.toggleNewBlog());
    }, 500)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (blogTitle.length > APP_CONSTANTS.BLOG_CONSTRAINTS.TITLE_MIN_LENGTH && blogDetails.length > APP_CONSTANTS.BLOG_CONSTRAINTS.DETAILS_MIN_LENGTH) {
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
      if(!filterState[newBlog.type]){
        dispatch(navbarActions.addFilter(newBlog.type.toLowerCase()));
      }
      setShowModal(false);
      timeoutID = setTimeout(() => {
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
            <Input placeholder={APP_MESSAGES.BLOG.BLOG_TITLE_PLACEHOLDER} value={blogTitle} type='text' onChange={(value)=> setBlogTitle(value)} blogTitle focus/>
          </div>
          <div className={styles.blog_details_wrapper}>
            <Textarea value={blogDetails} placeholder={APP_MESSAGES.BLOG.BLOG_DETAILS_PLACEHOLDER} onChange={(value)=> setBlogDetails(value)} blogDetail editable={true}/>
          </div>
          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.purple_button_big}>
              {APP_MESSAGES.BUTTON.ADD}
            </button>
          </div>
        </form>
      </div>
      {showWarningModal && <WarningModal onCancel={onCancel} onExit={onExit}/>}
    </SideModalContainer>
  )
}

export default NewBlog
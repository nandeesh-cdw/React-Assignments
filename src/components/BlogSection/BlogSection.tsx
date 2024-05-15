import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './BlogSection.module.scss'
import BlogCard from '../BlogCard/BlogCard'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Blog, RootState } from '../../models/models'
import { blogActions, modalActions } from '../../store/store'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'
import { APP_MESSAGES } from '../constants/APP_MESSAGES'
import { APP_CONSTANTS } from '../constants/APP_CONSTANTS'
function BlogSection() {
  const [searchText, setSearchText] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.navbar.filterState);
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode);
  const blogData = useSelector((state: RootState) => state.blog.blogData);
  const showLoader = useSelector((state: RootState) => state.blog.showLoader);
  const editable = useSelector((state: RootState) => state.blog.editable);
  const currentBlog = useSelector((state: RootState) => state.blog.currentBlog);
  const modalOpen = useSelector((state: RootState) => state.modal.toggleWarningModal);

  const filteredBlogData = useMemo(() => {
    let filteredData = blogData;
    if (!filterState.isRegional) {
      filteredData = filteredData.filter(blog => !blog.type.includes('Regional'));
    }
    if (!filterState.isNational) {
      filteredData = filteredData.filter(blog => !blog.type.includes('National'));
    }
    if (!filterState.isInternational) {
      filteredData = filteredData.filter(blog => !blog.type.includes('International'));
    }
    if (!filterState.isLocal) {
      filteredData = filteredData.filter(blog => !blog.type.includes('Local'));
    }
    if (searchText.length >= 3) {
      filteredData = filteredData.filter(blog =>
        blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
        blog.type.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return filteredData;
  }, [blogData, filterState, searchText]);


  const containerStyle = classNames(styles.container, {
    [styles.black_mode]: darkMode
  })
  const placeholderStyles = classNames(styles.placeholder_text, {
    [styles.light_text]: darkMode
  })
  const onCardSelected = useCallback((blog) => {
    if (!editable) {
      dispatch(blogActions.currentSelectedBlog(blog));
      setSelectedBlog(currentBlog);
    } else {
      dispatch(modalActions.showWarningModal(true));
    }

  }, [dispatch, editable,]);


  useEffect(() => {
    setSelectedBlog(currentBlog);
  }, [currentBlog])

  const onSearchInputChange = (value) => {
    setSearchText(value)
  }
  const onButtonClick = (event) => {
    event.stopPropagation();
    dispatch(blogActions.toggleNewBlog());
  }

  return (
    <div className={containerStyle}>
      <div className={styles.search_wrapper}>
        <Input type={APP_CONSTANTS.INPUT_TYPES.TEXT} placeholder={APP_MESSAGES.BLOG.SEARCH_TERM} onChange={onSearchInputChange} value={searchText} search />
        <Button label={APP_MESSAGES.BUTTON.NEW} onClick={onButtonClick} purpleButtonBig />
      </div>
      <ul className={styles.blogs_wrapper}>
        {showLoader && <Loader />}
        {!showLoader && filteredBlogData.map((blog: any, index) => <li key={index} onClick={() => onCardSelected(blog)}> <BlogCard title={blog.title} tag={blog.tag} description={blog.details} type={blog.type} isSelected={selectedBlog === blog} /> </li>)}
        {!(filteredBlogData.length > 0) && <div className={placeholderStyles}>{APP_MESSAGES.BLOG.NO_BLOGS_FOUND}</div>}
      </ul>
    </div>
  )
}

export default BlogSection
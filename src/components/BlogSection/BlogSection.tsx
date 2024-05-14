import React, { useCallback, useMemo, useState } from 'react'
import styles from './BlogSection.module.scss'
import BlogCard from '../BlogCard/BlogCard'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Blog, RootState } from '../../models/models'
import { blogActions } from '../../store/store'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'
function BlogSection() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.navbar.filterState);
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode);
  const blogData = useSelector((state: RootState) => state.blog.blogData);
  const showLoader = useSelector((state: RootState) => state.blog.showLoader);
  const currentBlog: Blog = useSelector((state: RootState) => state.blog.currentBlog);

  const filteredBlogData = useMemo(() => {
    let filteredData = blogData;
    const allFiltersOff = !filterState.isRegional && !filterState.isNational && !filterState.isInternational;
    if (allFiltersOff && searchText.length < 3) {
      return filteredData;
    }
    if (!allFiltersOff) {
      if (!filterState.isRegional) {
        filteredData = filteredData.filter(blog => !blog.type.includes('Regional'));
      }
      if (!filterState.isNational) {
        filteredData = filteredData.filter(blog => !blog.type.includes('National'));
      }
      if (!filterState.isInternational) {
        filteredData = filteredData.filter(blog => !blog.type.includes('International'));
      }
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
  const onCardSelected = useCallback((blog) => {
    dispatch(blogActions.currentSelectedBlog(blog));
  }, [dispatch]);

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
        <Input type='text' placeholder='' onChange={onSearchInputChange} value={searchText} />
        <Button label="New" onClick={onButtonClick} purpleButtonBig />
      </div>
      <ul className={styles.blogs_wrapper}>
        {showLoader && <Loader/> }
        {!showLoader && filteredBlogData.map((blog: any, index) => <li key={index} onClick={() => onCardSelected(blog)}> <BlogCard title={blog.title} tag={blog.tag} description={blog.details} type={blog.type}/> </li>)}
      </ul>
    </div>
  )
}

export default BlogSection
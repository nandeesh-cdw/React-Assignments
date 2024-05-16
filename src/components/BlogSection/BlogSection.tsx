import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './BlogSection.module.scss';
import BlogCard from '../BlogCard/BlogCard';
import { RootState } from '../../models/models';
import { blogActions, fetchBlogs, useAppDispatch } from '../../store/store';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import { APP_MESSAGES } from '../constants/APP_MESSAGES';
import { APP_CONSTANTS } from '../constants/APP_CONSTANTS';
import WarningModal from '../../modals/WarningModal/WarningModal';

function BlogSection() {
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const dispatch = useAppDispatch();
  const filterState = useSelector((state: RootState) => state.navbar.filterState);
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode);
  const blogData = useSelector((state: RootState) => state.blog.blogData);
  const showLoader = useSelector((state: RootState) => state.blog.showLoader);
  const editable = useSelector((state: RootState) => state.blog.editable);
  const currentBlog = useSelector((state: RootState) => state.blog.currentBlog);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        await dispatch(fetchBlogs());
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogsData();
  }, [dispatch]);

  const filteredBlogData = useMemo(() => {
    let filteredData = blogData;

    Object.keys(filterState).forEach((filter) => {
      if (!filterState[filter]) {
        filteredData = filteredData.filter(blog => blog.type.toLowerCase() !== filter.toLowerCase());
      }
    });

    if (searchText.length >= 3) {
      filteredData = filteredData.filter(blog =>
        blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
        blog.type.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return filteredData;
  }, [blogData, filterState, searchText]);

  const containerStyles = classNames(styles.container, {
    [styles.black_mode]: darkMode,
  });
  const placeholderStyles = classNames(styles.placeholder_text, {
    [styles.light_text]: darkMode,
  });
  const searchContainerStyles = classNames(styles.search_container, {
    [styles.black_mode]: darkMode,
  });

  const onCardSelected = useCallback(
    (blog) => {
      if (!editable) {
        dispatch(blogActions.currentSelectedBlog(blog));
        setSelectedBlog(currentBlog);
      } else {
        setShowWarningModal(true);
      }
    },
    [dispatch, editable, currentBlog]
  );

  const onExit = () => {
    setShowWarningModal(false);
    dispatch(blogActions.toggleEditMode(false));
  }
  useEffect(() => {
    setSelectedBlog(currentBlog);
  }, [currentBlog]);

  const onSearchInputChange = (value) => {
    setSearchText(value);
  };

  const onButtonClick = (event) => {
    event.stopPropagation();
    dispatch(blogActions.toggleNewBlog());
  };

  return (
    <>
      <div className={containerStyles}>
        <div className={searchContainerStyles}>
          <div className={styles.search_wrapper}>
            <Input
              type={APP_CONSTANTS.INPUT_TYPES.TEXT}
              placeholder={APP_MESSAGES.BLOG.SEARCH_TERM}
              onChange={onSearchInputChange}
              value={searchText}
              search
            />
          </div>
          <div className={styles.button_wrapper}>
            <Button label={APP_MESSAGES.BUTTON.NEW} onClick={onButtonClick} purpleButtonBig />
          </div>
        </div>
        <ul className={styles.blogs_wrapper}>
          {showLoader && <Loader />}
          {!showLoader &&
            filteredBlogData.map((blog, index) => (
              <li key={index} onClick={() => onCardSelected(blog)}>
                <BlogCard
                  title={blog.title}
                  tag={blog.type}
                  description={blog.details}
                  type={blog.type}
                  isSelected={selectedBlog === blog}
                />
              </li>
            ))}
          {!(filteredBlogData.length > 0) && (
            <div className={placeholderStyles}>{APP_MESSAGES.BLOG.NO_BLOGS_FOUND}</div>
          )}
        </ul>
      </div>
      {showWarningModal && <WarningModal onExit={onExit} onCancel={onExit} />} 
    </>
    
  );
}

export default BlogSection;

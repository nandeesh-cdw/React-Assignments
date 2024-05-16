import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import BlogSection from '../../components/BlogSection/BlogSection'
import styles from './Home.module.scss'
import BlogDescription from '../../components/BlogDescription/BlogDescription'
import { fetchBlogs } from '../../components/services/BlogService'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../models/models'
import { fetchMembers } from '../../components/services/MemberService'
import MembersModal from '../../modals/MembersModal/MembersModal'
import NewBlog from '../../modals/NewBlog/NewBlog'
import WarningModal from '../../modals/WarningModal/WarningModal'
function Home() {
  const dispatch = useDispatch();
  const isMembersModalVisible = useSelector((state: RootState) => state.navbar.viewMembers)
  const isNewBlogModalVisible = useSelector((state: RootState) => state.blog.newBlog)
  const isWarningModalVisible = useSelector((state: RootState) => state.modal.toggleWarningModal)
  useEffect(() => {
    fetchBlogs(dispatch);
    fetchMembers(dispatch);
  }, [])
  const currentBlog = useSelector((state: RootState) => state.blog.currentBlog)
  return (
    <div className={styles.container}>
      <NavBar />
      <BlogSection />
      <BlogDescription blog={currentBlog} />
      {isMembersModalVisible && <MembersModal />}
      {isNewBlogModalVisible && <NewBlog />}
      {isWarningModalVisible && <WarningModal />}

    </div>
  )
}

export default Home
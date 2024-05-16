import { blogActions } from "../../store/store";

export const fetchBlogs = async (dispatch) => {
    let nextId = 1;
  try {
    const response = await fetch("https://jsonmockserver.vercel.app/api/blogs");
    if (!response.ok) {
      console.log("Error fetching blogs");
      return;
    }
    const blogData = await response.json();

    const blogsWithId = blogData.map((blog, index) => ({
      ...blog,
      id: nextId++,
    }));
    dispatch(blogActions.setId(nextId))
    dispatch(blogActions.setLoaderState(false));
    dispatch(blogActions.setBlogData(blogsWithId));
    dispatch(blogActions.currentSelectedBlog(blogsWithId[0]));
  } catch (err) {
    console.log("Error fetching blogs: " + err.message);
  }
};

import { blogActions } from "../../store/store";

export const fetchBlogs = async (dispatch) => {
    try{
        const response = await fetch('https://jsonmockserver.vercel.app/api/blogs');
        if(!response.ok){
            console.log("Error fetching blogs")
        }
        const blogData = await response.json();
        dispatch(blogActions.setLoaderState(false));
        dispatch(blogActions.setBlogData(blogData));
        dispatch(blogActions.currentSelectedBlog(blogData[0]));
    } catch(err){
        console.log("Error fetching blogs" + err.message);
    }
}


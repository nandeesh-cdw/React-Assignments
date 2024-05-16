import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { Blog } from "../models/models";
import { useDispatch } from "react-redux";

const initialNavbarState = {
  filterState: {},
  viewMembers: false,
  darkMode: false,
};

const initialBlogsState = {
  editable: false,
  blogData: [{}],
  currentBlog: {},
  newBlog: false,
  showLoader: true,
  id: 0,
};

const initialMembersState = {
  membersData: [{}],
};

const fetchBlogsFromApi = createAsyncThunk(
  "blog/fetchBlogsFromApi",
  async (_, { dispatch }) => {
    const response = await fetch("https://jsonmockserver.vercel.app/api/blogs");
    const blogData = await response.json();

    // Dispatch action to initialize filters
    const blogTypes = Array.from(new Set(blogData.map(blog => blog.type.toLowerCase())));
    dispatch(navbarActions.initializeFilters(blogTypes));

    return blogData;
  }
);

const navBarSlice = createSlice({
  name: "navBar",
  initialState: initialNavbarState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    toggleMembers(state) {
      state.viewMembers = !state.viewMembers;
    },
    toggleFilter(state, action) {
      const filter = action.payload;
      state.filterState[filter] = !state.filterState[filter];
    },
    addFilter(state, action) {
      state.filterState[action.payload] = true;
    },
    initializeFilters(state, action) {
      const blogTypes = action.payload;
      const initialFilters = blogTypes.reduce((filters, type) => {
        filters[type] = true;
        return filters;
      }, {});
      state.filterState = initialFilters;
    },
  },
});

const blogSlice = createSlice({
  name: "blogSlice",
  initialState: initialBlogsState,
  reducers: {
    toggleEditMode(state, action) {
      state.editable = action.payload;
    },
    setBlogData(state, action) {
      state.blogData = action.payload;
    },
    currentSelectedBlog(state, action) {
      state.currentBlog = action.payload;
    },
    toggleNewBlog(state) {
      state.newBlog = !state.newBlog;
    },
    setLoaderState(state, action) {
      state.showLoader = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    },
    addNewBlog(state, action) {
      state.blogData.unshift(action.payload);
      state.currentBlog = action.payload;
    },
    updateBlog(state, action) {
      const updatedBlog = action.payload;
      const blogIndex = state.blogData.findIndex(
        (blog: Blog) => blog.id === updatedBlog.id
      );
      if (blogIndex !== -1) {
        state.blogData.splice(blogIndex, 1);
        state.blogData.unshift(updatedBlog);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsFromApi.pending, (state) => {
        state.showLoader = true;
      })
      .addCase(fetchBlogsFromApi.fulfilled, (state, action) => {
        let nextId = 1;
        const blogsWithId = action.payload.map((blog) => ({
          ...blog,
          id: nextId++,
        }));
        state.id = nextId;
        state.blogData = blogsWithId;
        state.currentBlog = blogsWithId[0];
        state.showLoader = false;
      })
      .addCase(fetchBlogsFromApi.rejected, (state) => {
        state.showLoader = false;
      });
  },
});

const memberSlice = createSlice({
  name: "memberSlice",
  initialState: initialMembersState,
  reducers: {
    setMembersData(state, action) {
      state.membersData = action.payload;
    },
  },
});


const store = configureStore({
  reducer: {
    navbar: navBarSlice.reducer,
    blog: blogSlice.reducer,
    member: memberSlice.reducer,
  },
});

export default store;
export const memberActions = memberSlice.actions;
export const navbarActions = navBarSlice.actions;
export const blogActions = blogSlice.actions;
export const fetchBlogs = fetchBlogsFromApi;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Blog } from "../models/models";
const initialNavbarState = {
  filterState: {
    isRegional: true,
    isNational: true,
    isInternational: true,
    isLocal: true,
  },
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

const initialModalState = {
  toggleWarningModal: false,
};

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
      switch (action.payload) {
        case "regional blogs":
          state.filterState.isRegional = !state.filterState.isRegional;
          break;
        case "national blogs":
          state.filterState.isNational = !state.filterState.isNational;
          break;
        case "international blogs":
          state.filterState.isInternational =
            !state.filterState.isInternational;
          break;
        case "local blogs":
          state.filterState.isLocal = !state.filterState.isLocal;
          break;
      }
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

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showWarningModal(state, action) {
      state.toggleWarningModal = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    navbar: navBarSlice.reducer,
    blog: blogSlice.reducer,
    member: memberSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;

export const modalActions = modalSlice.actions;
export const memberActions = memberSlice.actions;
export const navbarActions = navBarSlice.actions;
export const blogActions = blogSlice.actions;

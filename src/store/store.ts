import { createSlice, configureStore } from '@reduxjs/toolkit'
const initialNavbarState = {
    filterState:{
        isRegional:true,
        isNational:true,
        isInternational:true,
    },
    viewMembers:false,
    darkMode:false,
}

const initialBlogsState = {
    editable:false,
    blogData:[{}],
    currentBlog:{},
    newBlog:false,
    showLoader:true,
    
}

const initialMembersState = {
    membersData:[{}]
}

const initialModalState = {
    toggleWarningModal:false,
}


const navBarSlice = createSlice({
    name:'navBar',
    initialState:initialNavbarState,
    reducers:{
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode
        },
        toggleMembers(state) {
            state.viewMembers = !state.viewMembers
            console.log(state.viewMembers);
        },
        toggleFilter(state,action) {
            switch(action.payload) {
                case "regional blogs":
                    state.filterState.isRegional = !state.filterState.isRegional
                    break;
                case "national blogs":
                    state.filterState.isNational = !state.filterState.isNational
                    break;
                case "international blogs":
                    state.filterState.isInternational = !state.filterState.isInternational
                    break;
            }
        },
        
    }
})

const blogSlice = createSlice({
    name:'blogSlice',
    initialState:initialBlogsState,
    reducers:{
        toggleEditMode(state,action) {
            state.editable = action.payload;
        },
        setBlogData(state,action) {
            state.blogData = action.payload;
        },
        currentSelectedBlog(state,action){
            console.log("current blog" );
            console.log(action.payload);
            state.currentBlog = action.payload
        },
        toggleNewBlog(state) {
            state.newBlog = !state.newBlog
        },
        setLoaderState(state,action) {
            state.showLoader = action.payload;
        }
    }
})

const  memberSlice = createSlice({
    name:'memberSlice',
    initialState:initialMembersState,
    reducers:{
        setMembersData(state,action) {
            state.membersData = action.payload;
        }
    }
});

const modalSlice = createSlice(
    {
        name:'modal',
        initialState:initialModalState,
        reducers:{
            toggleWarningModal(state){
                state.toggleWarningModal = !state.toggleWarningModal;
            }
        }
    }
    )

const store = configureStore({
    reducer: { navbar: navBarSlice.reducer, blog: blogSlice.reducer , member:memberSlice.reducer, modal:modalSlice.reducer} 
})

export default store ;

export const modalActions = modalSlice.actions;
export const memberActions = memberSlice.actions;
export const navbarActions = navBarSlice.actions;
export const blogActions = blogSlice.actions;
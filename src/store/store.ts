import { createSlice, configureStore } from '@reduxjs/toolkit'
import { stat } from 'fs'
const initialNavbarState = {
    filterState:{
        isRegional:true,
        isNational:true,
        isInternational:true,
    },
    viewMembers:false,
    darkMode:false,
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
        } 
    }
})

const store = configureStore({
    reducer: { navbar: navBarSlice.reducer}
})

export default store ;

export const navbarActions = navBarSlice.actions;
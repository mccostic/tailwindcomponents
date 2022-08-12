import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: false,
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        showSideBar: (state) => {
            state.sidebar = true
        },
        hideSideBar: (state) => {
            state.sidebar = false
        }
    }
})

export const {showSideBar, hideSideBar} = dashboardSlice.actions

export default dashboardSlice.reducer
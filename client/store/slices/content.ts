import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type Content = {
    visibleNavigation : boolean;
    visibleComments: boolean;
}

const initialState: Content = {
    visibleNavigation: true,
    visibleComments: true
}

const navigationSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        toggleVisibleNavigation(state){
            state.visibleNavigation = !state.visibleNavigation
        },
        toggleVisibleComments(state){
            state.visibleComments = !state.visibleComments
        }
    }
})

export const {toggleVisibleNavigation,toggleVisibleComments} = navigationSlice.actions

export default navigationSlice.reducer
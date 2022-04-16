import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hiddenStatus: true
}

const hiddenSlice = createSlice({
    name: 'hidden',
    initialState: INITIAL_STATE,
    reducers: {
        toggleHidden: (state) => {
            state.hiddenStatus = !state.hiddenStatus
        }
    }
})

export const {toggleHidden} = hiddenSlice.actions

export default hiddenSlice.reducer
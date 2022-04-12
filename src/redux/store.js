import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../redux/user/user.reducer'


export const store = configureStore({
    reducer: {
        user: userReducer
    }
})


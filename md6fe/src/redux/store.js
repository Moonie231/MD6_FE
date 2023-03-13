import {configureStore} from "@reduxjs/toolkit";
// import usersReducer from "./users/usersSlice";
import foodsReducer from "./foods/foodsSlice"


export const Store = configureStore({
    reducer: {
        // users: usersReducer,
        foods: foodsReducer,
    }
})
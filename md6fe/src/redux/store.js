
import {configureStore} from "@reduxjs/toolkit";
import foodsReducer from "./foods/foodsSlice"
import userReducer from "./slices/userSlice";
import merchantReducer from "./slices/userSlice";



const store = configureStore({
    reducer: {
        user: userReducer,
        merchant: merchantReducer,
        foods: foodsReducer,
    },
});
export default store;


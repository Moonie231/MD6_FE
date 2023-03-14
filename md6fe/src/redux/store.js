import {configureStore} from "@reduxjs/toolkit";
import foodsReducer from "./foods/foodsSlice"
import userReducer from "./slices/userSlice";
import merchantReducer from "./slices/merchantSlice";
import categoryReducer from "./slices/categorySlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        merchant: merchantReducer,
        foods: foodsReducer,
        categories: categoryReducer,
    },
});
export default store;


import {configureStore} from "@reduxjs/toolkit";
import foodsReducer from "./foods/foodsSlice"
import userReducer from "./slices/userSlice";
import merchantReducer from "./slices/merchantSlice";
import categoryReducer from "./slices/categorySlice"
import ordersReducer from "./slices/orderSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        merchant: merchantReducer,
        foods: foodsReducer,
        categories: categoryReducer,
        orders: ordersReducer
    },
});
export default store;


import {configureStore} from "@reduxjs/toolkit";
import foodsReducer from "./foods/foodsSlice"
import userReducer from "./slices/userSlice";
import merchantReducer from "./slices/merchantSlice";
import categoryReducer from "./slices/categorySlice"
import orderReducer from "./slices/orderSlice"
import couponReducer from "./slices/couponSlice";
import notificationsReducer from "./slices/notificationSlice"


const store = configureStore({
    reducer: {
        user: userReducer,
        merchant: merchantReducer,
        foods: foodsReducer,
        categories: categoryReducer,
        orders: orderReducer,
        coupons: couponReducer,
        notifications: notificationsReducer
    },
});
export default store;


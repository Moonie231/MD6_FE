import userReducer from "./slices/userSlice";
import merchantReducer from "./slices/merchantSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        user: userReducer,
        merchant: merchantReducer
    },
});

export default store;
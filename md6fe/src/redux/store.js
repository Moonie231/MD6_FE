
import {configureStore} from "@reduxjs/toolkit";
import foodsReducer from "./foods/foodsSlice"
import userReducer from "./slices/userSlice";
<<<<<<< HEAD
import merchantReducer from "./slices/userSlice";
=======
import merchantReducer from "./slices/merchantSlice";

import { configureStore } from "@reduxjs/toolkit";

>>>>>>> 5376cbafe58be6921cf1d776cf8163ba29dcbb07
const store = configureStore({
    reducer: {
        user: userReducer,
        merchant: merchantReducer,
        foods: foodsReducer,
    },
});
export default store;


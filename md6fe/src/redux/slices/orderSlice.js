import { createSlice } from "@reduxjs/toolkit";
import {addToCart, editOrder, showCart} from "../../service/orderService";

const initialState = {
    order: [],
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.order.push(action.payload)
        });
        builder.addCase(showCart.fulfilled, (state, action) => {
            state.order=action.payload
        });
        builder.addCase(editOrder.fulfilled, (state, action) => {
        });
    },
});

export default orderSlice.reducer;

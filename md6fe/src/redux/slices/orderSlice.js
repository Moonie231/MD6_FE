import { createSlice } from "@reduxjs/toolkit";
import {addToCart, editOrder, getOrder, showCart} from "../../service/orderService";

const initialState = {
    order: [],
    orderMerchant: [],
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
            console.log(action.payload)
            localStorage.setItem("idOrder", action.payload.idOrder);
        });
        builder.addCase(getOrder.fulfilled, (state, action) => {
            state.order = action.payload
        });

    },
});

export default orderSlice.reducer;

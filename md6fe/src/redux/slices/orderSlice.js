import { createSlice } from "@reduxjs/toolkit";
import {addToCart, deleteOrderDetail, editOrder, myOrder, orderFood, showCart} from "../../service/orderService";

const initialState = {
    order: [],
    orders: [],
    food: [],
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
            localStorage.setItem("idOrder", action.payload.idOrder);
        });
        builder.addCase(deleteOrderDetail.fulfilled, (state, action) => {
        });
        builder.addCase(myOrder.fulfilled, (state, action) => {
            state.orders=action.payload
        });
        builder.addCase(orderFood.fulfilled, (state, action) => {
            state.food=action.payload
        });
    },
});

export default orderSlice.reducer;

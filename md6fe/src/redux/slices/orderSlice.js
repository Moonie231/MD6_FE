import { createSlice } from "@reduxjs/toolkit";
import {
    addToCart,
    deleteOrderDetail,
    editOrder,
    findByIdOrder, getOrder,
    myOrder,
    orderFood, searchOrder, setStatusCancelled, setStatusConfirm, setStatusSuccess,
    showCart
} from "../../service/orderService";
import {getFoods} from "../../service/foodsService";

const initialState = {
    order: [],
    orders: [],
    food: [],
    orderMerchant: [],
    search:[]
}

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

        builder.addCase(getOrder.fulfilled, (state, action) => {
            state.order = action.payload
        });
        builder.addCase(findByIdOrder.fulfilled, (state, action) => {
            state.order = action.payload
        })
        builder.addCase(myOrder.fulfilled, (state, action) => {
            state.orders=action.payload
        });
        builder.addCase(orderFood.fulfilled, (state, action) => {
            state.order=action.payload
        });
        builder.addCase(deleteOrderDetail.fulfilled, (state, action) => {
        });
        builder.addCase(setStatusConfirm.fulfilled, (state, action) => {
        });
        builder.addCase(setStatusCancelled.fulfilled, (state, action) => {
        });
        builder.addCase(setStatusSuccess.fulfilled, (state, action) => {
        });
        builder.addCase(searchOrder.fulfilled, (state, action) => {
            state.order = action.payload.order;
        });
    },
});

export default orderSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
    addToCart, count,
    deleteOrderDetail,
    editOrder,
    findByIdOrder, getOrder,
    myOrder, orderDetail,
    orderFood, searchOrder, setStatusCancelled, setStatusConfirm, setStatusSuccess,
    showCart, updateQuantity
} from "../../service/orderService";

const initialState = {
    order: [],
    orders: [],
    orderDetail: {},
    food: [],
    orderMerchant: [],
    search:[],
    count:0
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
            localStorage.setItem("idMerchant", null);
        });
        builder.addCase(getOrder.fulfilled, (state, action) => {
            state.orders = action.payload
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
        builder.addCase(orderDetail.fulfilled, (state, action) => {
            state.orderDetail=action.payload
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
            state.orders = action.payload;
        })
        builder.addCase(count.fulfilled, (state, action) => {
            state.count=action.payload
        });
        builder.addCase(updateQuantity.fulfilled, (state, action) => {
        });
    },
});

export default orderSlice.reducer;

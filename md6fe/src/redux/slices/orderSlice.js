import { createSlice } from "@reduxjs/toolkit";
import {
    addToCart, count, countOrderByCancelled, countOrderByDelivery, countOrderByPending, countOrderBySuccess,
    deleteOrderDetail,
    editOrder,
    findByIdOrder, findOrderByCancelled, findOrderByDelivery, findOrderByPending, findOrderSuccess, getOrder,
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
    count:0,
    countPending:0,
    countSuccess:0,
    countDelivery:0,
    countCancelled:0,
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
        builder.addCase(countOrderByDelivery.fulfilled, (state, action) => {
            state.countDelivery = action.payload
        });
        builder.addCase(countOrderByCancelled.fulfilled, (state, action) => {
            state.countCancelled = action.payload
        });
        builder.addCase(countOrderBySuccess.fulfilled, (state, action) => {
            state.countSuccess = action.payload
        });
        builder.addCase(countOrderByPending.fulfilled, (state, action) => {
            state.countPending = action.payload
        });
        builder.addCase(findOrderByCancelled.fulfilled, (state, action) => {
            state.orders = action.payload
        });
        builder.addCase(findOrderSuccess.fulfilled, (state, action) => {
            state.orders = action.payload
        });
        builder.addCase(findOrderByDelivery.fulfilled, (state, action) => {
            state.orders = action.payload
        });
        builder.addCase(findOrderByPending.fulfilled, (state, action) => {
            state.orders = action.payload
        });
    },
});

export default orderSlice.reducer;

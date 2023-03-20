import { createSlice } from "@reduxjs/toolkit";
import {
    addToCart,
    deleteOrderDetail,
    editOrder, findByIdOrder,
    getOrder, setStatusCancelled,
    setStatusConfirm,
    showCart
} from "../../service/orderService";
import {setStatus} from "../../service/merchantService";
import {findByIdFood} from "../../service/foodsService";


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
            localStorage.setItem("idOrder", action.payload.idOrder);
        });

        builder.addCase(getOrder.fulfilled, (state, action) => {
            state.order = action.payload
        });
        builder.addCase(findByIdOrder.fulfilled, (state, action) => {
            state.order = action.payload
        })

        builder.addCase(deleteOrderDetail.fulfilled, (state, action) => {
        });
        builder.addCase(setStatusConfirm.fulfilled, (state, action) => {
        });
        builder.addCase(setStatusCancelled.fulfilled, (state, action) => {
        });


    },
});

export default orderSlice.reducer;

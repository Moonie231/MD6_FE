import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";


export const addToCart = createAsyncThunk(
    'orders/addToCart',
    async (data) => {
        const res = await customAxios.post('orders/addCart', data);
        return res.data;
    }
)
export const showCart = createAsyncThunk(
    'orders/showCart',
    async (data) => {
        const res = await customAxios.get('orders/show-cart/' + data);
        return res.data;
    }
)
export const editOrder = createAsyncThunk(
    'orders/editOrder',
    async (data) => {
        const res = await customAxios.put('orders/editOrder/' + data[1], data[0]);
        return res.data;
    }
)

export const getOrder = createAsyncThunk(
    'order/getOrder',
    async (data) => {
        const res = await customAxios.get(`orders/getOrder/` + data);
        return res.data;
    }
)
export const findByIdOrder = createAsyncThunk(
    'orders/findByIdOrder',
    async (data) => {
        const res = await customAxios.get('/orders/find-by-idOrder/' + data);
        return res.data
    }
)

export const deleteOrderDetail = createAsyncThunk(
    'orders/deleteOrderDetail',
    async (data) => {
        const res = await customAxios.delete('orders/delete-cart/' + data);
        return res.data;
    }
)

export const myOrder = createAsyncThunk(
    'orders/myOrder',
    async (data) => {
        const res = await customAxios.get('orders/my-order/' + data)
        return res.data
    }
)

export const orderFood = createAsyncThunk(
    'orders/orderFood',
    async (data) => {
        const res = await customAxios.get(`orders/my-order-food/${data[1]}/${data[0]}`)
        console.log(res.data)
        return res.data
    }
)

export const setStatusConfirm = createAsyncThunk(
    'order/orderConfirm',
    async (data) => {
        const res = await customAxios.put('orders/statusConfirm/' + data)
        return res.data
    })
export const setStatusCancelled = createAsyncThunk(
    'order/orderCancelled',
    async (data) => {
        const res = await customAxios.put('orders/statusCancelled/' + data)
        return res.data
    })

export const setStatusSuccess = createAsyncThunk(
    'order/orderSuccess',
    async (data) => {
        const res = await customAxios.put('orders/statusSuccess/' + data)
        return res.data
    })
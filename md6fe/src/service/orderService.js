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
        if (res.data.length === 0) {
            localStorage.setItem('idMerchant', null)
        }
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
        console.log(data)
        const res = await customAxios.delete('orders/delete-cart/' +data);
        return res.data;
    }
)

export const myOrder = createAsyncThunk(
    'orders/myOrder',
    async (data) => {
        console.log(data)
        const res = await customAxios.get('orders/my-order/' + data[0]+'?page='+data[1])
        return res.data
    }
)

export const orderDetail = createAsyncThunk(
    'orders/orderDetail',
    async (data) => {
        const res = await customAxios.get('orders/orderDetail/' + data)
        return res.data
    }
)

export const orderFood = createAsyncThunk(
    'orders/orderFood',
    async (data) => {
        const res = await customAxios.get(`orders/my-order-food/${data}`)
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

export const searchOrder = createAsyncThunk(
    "orders/searchOrder",
    async (data) => {
        console.log(1)
        const res = await customAxios.get('/orders/find-by-order/' + data[1] + '?value='+data[0])
        return res.data;
    })

export const count = createAsyncThunk(
    'order/count',
    async (data) => {
        const res = await customAxios.get('orders/countCart/' + data)
        return res.data
    })

export const updateQuantity = createAsyncThunk(
    'order/updateQuantity',
    async (data) => {
        const res = await customAxios.put('foods/quantity/' + data)
        return res.data
    })
export const findOrderByPending = createAsyncThunk(
    'order/findOrderByPending',
    async (data) => {
        const res = await customAxios.get('orders/find-by-order-pending/' + data)
        return res.data
    })
export const findOrderSuccess = createAsyncThunk(
    'order/findOrderSuccess',
    async (data) => {
        const res = await customAxios.get('orders/find-by-order-success/' + data)
        return res.data
    })
export const findOrderByCancelled = createAsyncThunk(
    'order/findOrderByCancelled',
    async (data) => {
        const res = await customAxios.get('orders/find-by-order-cancelled/' + data)
        return res.data
    })
export const findOrderByDelivery= createAsyncThunk(
    'order/findOrderByDelivery',
    async (data) => {
        const res = await customAxios.get('orders/find-by-order-delivery/' + data)
        return res.data
    })
export const countOrderByDelivery= createAsyncThunk(
    'order/CountOrderByDelivery',
    async (data) => {
        const res = await customAxios.get('orders/count-order-delivery/' + data)
        return res.data
    })
export const countOrderByPending= createAsyncThunk(
    'order/CountOrderByPending',
    async (data) => {
        const res = await customAxios.get('orders/count-order-pending/' + data)
        return res.data
    })
export const countOrderBySuccess= createAsyncThunk(
    'order/CountOrderBySuccess',
    async (data) => {
        const res = await customAxios.get('orders/count-order-success/' + data)
        return res.data
    })
export const countOrderByCancelled= createAsyncThunk(
    'order/CountOrderByCancelled',
    async (data) => {
        const res = await customAxios.get('orders/count-order-cancelled/' + data)
        return res.data
    })
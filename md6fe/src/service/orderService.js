import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getOrder = createAsyncThunk(
    'order/getOrder',
    async (data)=>{
        const res = await customAxios.get(`orders/getOrder`);
        return res.data;
    }
)
export const countCart = createAsyncThunk(
    'order/countCart',
    async (data)=>{
        const res = await customAxios.get(`orders/countCart/${data}`);
        return res.data;
    }
)

export const addOrder = createAsyncThunk(
    'order/addOrder',
    async (data)=>{
        const res = await customAxios.post('orders/addOrder',data);
        return res.data;
    }
)
export const editOrder = createAsyncThunk(
    'order/editOrder',
    async (data)=>{
        await customAxios.put('orders/editOrder/'+data.idOrder,data);
        const res = await customAxios.get(`orders/getOrder`);
        return res.data;
    }
)

export const findByStatus = createAsyncThunk(
    'order/findByStatus',
    async (data)=>{
        const res = await customAxios.get(`orders/find-by-status/${data}`);
        return res.data[0];
    }
)

export const findByIdUser = createAsyncThunk(
    'order/findById',
    async (data)=>{
        const res = await customAxios.get(`orders/find-by-idUser/${data}`);
        return res.data;
    }
)

export const addCart = createAsyncThunk(
    'order/addCart',
    async (data)=>{
        const res = await customAxios.post(`orders/addCart`,data);
        return res.data;
    }
)

export const showCart = createAsyncThunk(
    'order/showCart',
    async (data)=>{
        const res = await customAxios.get(`orders/show-cart/${data}`);
        return res.data;
    }
)

export const deleteCart = createAsyncThunk(
    'order/deleteCart',
    async (data)=>{
        const res = await customAxios.delete(`orders/delete-cart/${data}`);
        return res.data;
    }
)
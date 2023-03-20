import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
export const addToCart = createAsyncThunk(
    'orders/addToCart',
    async (data)=>{
        const res = await customAxios.post('orders/addCart',data);
        return res.data;
    }
)
export const showCart = createAsyncThunk(
    'orders/showCart',
    async (data)=>{
        const res = await customAxios.get('orders/show-cart/'+data);
        return res.data;
    }
)
export const editOrder = createAsyncThunk(
    'orders/editOrder',
    async (data)=>{
        console.log(data)
        const res = await customAxios.put('orders/editOrder/'+data[1],data[0]);
        return res.data;
    }
)
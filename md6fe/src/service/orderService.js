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

    'order/editOrder',
    async (data)=>{
        await customAxios.put('orders/editOrder/'+data.idOrder,data);
        const res = await customAxios.get(`orders/getOrder`);
        return res.data;
    }
)

import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
import {create} from "axios";

export const myCoupon = createAsyncThunk(
    "coupon/myCoupon",
    async (data) => {
        const res = await customAxios.get("/coupons/"+ data);
        return res.data;
    }
);

export const createCoupon = createAsyncThunk(
    'coupon/createCoupon',
    async (data) =>{
        const res = await customAxios.post("/coupons/", data);
        return res.data;
    }
)

export const deleteCoupon = createAsyncThunk(
    'coupon/deleteCoupon',
    async (data) =>{
        const res = await customAxios.delete("/coupons/" + data)
        return res.data;
    }
)

export const updateCoupon = createAsyncThunk(
    'coupon/updateCoupon',
    async (data) =>{
        const res = await customAxios.put("/coupons/" + data[1], data[0])
        return res.data;
    }
)

export const getCoupon = createAsyncThunk(
    'coupon/getCoupon',
    async () => {
        const res = await customAxios.get("/coupons")
        return res.data
    }
)
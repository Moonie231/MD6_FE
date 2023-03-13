import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const login = createAsyncThunk("merchant/login", async (data) => {
    const res = await customAxios.post("merchants/login", data);
    console.log(res.data)
    return res.data;
});

export const register = createAsyncThunk("merchant/register", async (data) => {
    const res = await customAxios.post("merchants/register", data);
    return res.data;
});

export const editProfile = createAsyncThunk(
    "merchant/editProfile",
    async (data) => {
        const res = await customAxios.put('/merchants/' + data[1], data[0])
        return res.data
    }
)

export const getProfile = createAsyncThunk(
    'merchant/getProfile',
    async (data) => {
        const res = await customAxios.get('/merchants/my-profile/' + data)
        console.log(res.data)
        return res.data
    }
)

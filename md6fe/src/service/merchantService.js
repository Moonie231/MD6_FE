import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
import {create} from "axios";

export const login = createAsyncThunk("merchant/login", async (data) => {
    const res = await customAxios.post("merchants/login", data);
    return res.data;
});

export const register = createAsyncThunk("merchant/register", async (data) => {
    const res = await customAxios.post("merchants/register", data);
    return res.data;
});

export const editProfile = createAsyncThunk(
    "merchant/editProfile",
    async (data) => {
       await customAxios.put('merchants/edit/' + data[1], data[0])
        const response = await customAxios.get('merchants/my-profile/'+data[1]);
        console.log(response.data)
        return response.data;
    }
)

export const getProfile = createAsyncThunk(
    'merchant/getProfile',
    async (data) => {
        const res = await customAxios.get('merchants/my-profile/' + data)
        return res.data
    }
)

export const getMerchantActive = createAsyncThunk(
    'merchant/getActive',
    async () => {
        const res = await customAxios.get('admin')
        return res.data
    }
)

export const getMerchantPending = createAsyncThunk(
    'merchant/getPending',
    async () => {
        const res = await customAxios.get('admin/pending')
        return res.data
    }
)

export const setStatus = createAsyncThunk(
    'merchant/lockMerchant',
    async (data) => {
        const res = await customAxios.put('admin/status/' + data)
        return res.data
})

export const logout = createAsyncThunk (
    'merchant/logout',
    async () => {
        return false
    }
)


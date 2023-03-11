import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const login = createAsyncThunk("user/login", async (data) => {
    const res = await customAxios.post("users/login", data);
    return res.data;
});

export const register = createAsyncThunk("user/register", async (data) => {
    const res = await customAxios.post("users/register", data);
    return res.data;
});

export const editProfile = createAsyncThunk(
    "user/editProfile",
    async (data) => {
        const res = await customAxios.put('/users/' + data[1], data[0])
        return res.data
    }
)

export const getProfile = createAsyncThunk(
    'user/getProfile',
    async (data) => {
        const res = await customAxios.get('/users/my-profile/' + data)
        console.log(res.data)
        return res.data
    }
)
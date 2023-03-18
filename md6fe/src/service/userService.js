import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const login = createAsyncThunk("user/login", async (data) => {
    try {
        const res = await customAxios.post("users/login", data);
        return res.data;
    } catch (e) {
        console.log(e)
    }

});

export const register = createAsyncThunk("user/register", async (data) => {
    const res = await customAxios.post("users/register", data);
    return res.data;
});
export const verifyEmail = createAsyncThunk("user/verifyEmail", async () => {
    console.log(1)
    let data = {
        tokenEmail: localStorage.getItem('email-token')
    }
    const res = await customAxios.post("users/verify-email", data);
    return res.data;
});

export const editProfile = createAsyncThunk("users/editProfile", async (data) => {
    console.log(data)
    await customAxios.put('users/' + data[1], data[0])
    const res = await customAxios.get('users/my-profile/' + data[1])
    return res.data
})

export const getProfile = createAsyncThunk('users/getProfile', async (data) => {
    const res = await customAxios.get('users/my-profile/' + data)
    console.log(res.data)
    return res.data
})
export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async () => {
        return false
    }
)

export const getAddress = createAsyncThunk(
    "users/address",
    async (data) => {
        const res = await customAxios.get('users/address/' + data)
        return res.data
    }
)

export const addAddress = createAsyncThunk(
    'users/addAddress',
    async (data) => {
        const res = await customAxios.post('users/address/add', data)
        return res.data
    }
)

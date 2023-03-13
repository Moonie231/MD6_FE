import { createSlice } from "@reduxjs/toolkit";
import {
    editProfile,
    getMerchantActive,
    getMerchantPending,
    getProfile, lockMerchant,
    login,
    register
} from "../../service/merchantService";

const initialState = {
    currentMerchant: JSON.parse(localStorage.getItem('merchant')) ,
    merchant: [],
    profile: {},
}

const merchantSlice = createSlice({
    name: 'merchant',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentMerchant = action.payload
            localStorage.setItem("merchant", JSON.stringify(action.payload))
            console.log(localStorage.getItem('merchant'))
            console.log(1)
            localStorage.setItem("access-token", action.payload.token)
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.merchant.push(action.payload)
        });
        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.currentMerchant = action.payload;
        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
            console.log(action.payload)
        });
        builder.addCase(getMerchantActive.fulfilled, (state, action) => {
            console.log(1)
            state.merchant = action.payload;
        });
        builder.addCase(getMerchantPending.fulfilled, (state, action) => {
            state.merchant = action.payload;
        });
        builder.addCase(lockMerchant.fulfilled, (state, action) => {
        });
    }
})

export default merchantSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import {
    editProfile,
    getMerchantActive,
    getMerchantPending,
    getProfile, lockMerchant,
    login, logout 
    register
} from "../../service/merchantService";

const initialState = {
    currentMerchant: JSON.parse(localStorage.getItem('merchant')) ,
    merchant: [],
    profile: {},
    status:false
}

const merchantSlice = createSlice({
    name: 'merchant',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentMerchant = action.payload
            state.status=true
            localStorage.setItem("merchant", JSON.stringify(action.payload))
            localStorage.setItem("access-token", action.payload.token)
            localStorage.setItem("NameStatus",state.status )
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.merchant.push(action.payload)
        });
        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.currentMerchant = action.payload;
        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
            localStorage.setItem("merchant", JSON.stringify(action.payload))
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.status=false
            localStorage.clear()
            localStorage.setItem('NameStatus',state.status)
        });
        builder.addCase(getMerchantActive.fulfilled, (state, action) => {
            console.log(1)
            state.merchant = action.payload;
        });
        builder.addCase(getMerchantPending.fulfilled, (state, action) => {
            state.merchant = action.payload;
        });
        builder.addCase(setStatus.fulfilled, (state, action) => {
        });
    }
})

export default merchantSlice.reducer;
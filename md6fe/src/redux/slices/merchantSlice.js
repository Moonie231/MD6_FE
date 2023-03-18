import { createSlice } from "@reduxjs/toolkit";
import {
    editProfile,
    getMerchantActive,
    getMerchantPending,
    getProfile, setStatus,
    login, logout,
    register, statisticsByUser, statisticsByStatus, statisticsByFood
} from "../../service/merchantService";

const initialState = {
    currentMerchant: JSON.parse(localStorage.getItem('merchant')) ,
    merchant: [],
    profile: {},
    status:false,
    statisticsByUser:[],
    statisticsByStatus:[],
    statisticsByFood:[]
}

const merchantSlice = createSlice({
    name: 'merchant',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentMerchant = action.payload
            console.log(typeof action.payload)
            localStorage.setItem("access-token", action.payload.token)
            localStorage.setItem("idMerchant",action.payload.idMerchant)
            localStorage.setItem("merchant", JSON.stringify(action.payload))
            if(typeof action.payload !=='string'){
                state.status=true
                console.log(1)
                localStorage.setItem("NameStatus",state.status )
            }
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.merchant.push(action.payload)
        });
        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.currentMerchant = action.payload
            localStorage.setItem("merchant", JSON.stringify(action.payload))
        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
            localStorage.setItem("merchant", JSON.stringify(action.payload))
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.status=false
            localStorage.clear()
        });
        builder.addCase(getMerchantActive.fulfilled, (state, action) => {
            console.log(1)
            state.merchant = action.payload;
        });
        builder.addCase(getMerchantPending.fulfilled, (state, action) => {
            state.merchant = action.payload;
        });
        builder.addCase(statisticsByUser.fulfilled, (state, action) => {
            state.statisticsByUser = action.payload;
        });
        builder.addCase(statisticsByStatus.fulfilled, (state, action) => {
            state.statisticsByStatus = action.payload;
        });
        builder.addCase(statisticsByFood.fulfilled, (state, action) => {
            state.statisticsByFood = action.payload;
        });
        builder.addCase(setStatus.fulfilled, (state, action) => {
        });
    }
})

export default merchantSlice.reducer;
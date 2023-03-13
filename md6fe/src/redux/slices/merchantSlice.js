import { createSlice } from "@reduxjs/toolkit";
import { editProfile, getProfile, login, register} from "../../service/merchantService";

const initialState = {
    currentMerchant: JSON.parse(localStorage.getItem('merchant')),
    merchant: [],
    profile: [],
}

const merchantSlice = createSlice({
    name: 'merchant',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentMerchant = action.payload;
            localStorage.setItem("merchant", JSON.stringify(action.payload))
            localStorage.setItem("access-token", action.payload.token)
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.merchant.push(action.payload)
        });
        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.currentMerchant = action.payload;
            localStorage.setItem("merchant", JSON.stringify(action.payload))
            localStorage.setItem("access-token", action.payload.token)
        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
        });
    }
})

export default merchantSlice.reducer;
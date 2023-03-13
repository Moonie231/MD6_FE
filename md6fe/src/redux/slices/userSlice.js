import { createSlice } from "@reduxjs/toolkit";
import {editProfile, getProfile, login, register, verifyEmail} from "../../service/userService";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')),
    user: [],
    profile: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem("username", action.payload.username);
            localStorage.setItem("idUser", action.payload.idUser);
            localStorage.setItem("access-token", action.payload.token)
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.user.push(action.payload)
            localStorage.setItem("email-token", action.payload.tokenEmail)
            localStorage.setItem("name", action.payload.username)
        });
        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
        });
        builder.addCase(verifyEmail.fulfilled, (state, action) => {

        })
    }
})

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import {
    addAddress,
    editProfile,
    getAddress,
    getProfile,
    login,
    logoutUser,
    register,
    verifyEmail
} from "../../service/userService";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')),
    user: [],
    address:[],
    profile: {},
    role:false,
    status:false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("idOrder", action.payload.id_Order);
            localStorage.setItem("idUser", action.payload.idUser);
            localStorage.setItem("access-token", action.payload.token)
            state.status = true
            localStorage.setItem("status", state.status)
            if(action.payload.role===2||action.payload.role==='2'){
                state.role=true
                localStorage.setItem("role", state.role)
            }
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.user.push(action.payload)
            console.log(1)
            localStorage.setItem("email-token", action.payload.tokenEmail)
            localStorage.setItem("name", action.payload.username)
        });
        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));

        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));

        });
        builder.addCase(verifyEmail.fulfilled, (state, action) => {

        })
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            localStorage.clear()
            state.role=false
            state.status = false
        });
        builder.addCase(getAddress.fulfilled, (state, action) => {
            state.address = action.payload;
        });
        builder.addCase(addAddress.fulfilled, (state, action) => {
            state.user.push(action.payload)
        })
    }
})

export default userSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";
import {
    addAddress, deleteAddress, editAddress,
    editProfile,
    getAddress,
    getProfile,
    login,
    logoutUser,
    register,
    verifyEmail
} from "../../service/userService";
import {deleteFood, editFood} from "../../service/foodsService";

const initialState = {
    currentUser: localStorage.getItem('user') == 'undefined' ? {username: ''} : JSON.parse(localStorage.getItem('user')),
    user: [],
    address: [],
    profile: {},
    role: false,
    status: false
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
            localStorage.setItem("idMerchant", action.payload.idMerchantByOrder);
            localStorage.setItem("idUser", action.payload.idUser);
            localStorage.setItem("access-token", action.payload.token)
            localStorage.getItem('idMerchant')
            state.status = true
            localStorage.setItem("status", state.status)
            if (action.payload.role === 2 || action.payload.role === '2') {
                state.role = true
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
            state.role = false
            state.status = false
        });
        builder.addCase(getAddress.fulfilled, (state, action) => {
            state.address = action.payload;
        });
        builder.addCase(addAddress.fulfilled, (state, action) => {
            state.user.push(action.payload)
        })
        builder.addCase(editAddress.fulfilled, (state, action) => {
            for (let i = 0; i < state.user.length; i++) {
                if (action.payload.idAddress == state.user[i].idAddress) {
                    state.user[i] = action.payload;
                }
            }
        })
        builder.addCase(deleteAddress.fulfilled, (state, action) => {
            state.address.splice(action.payload)
        })
    }
})

export default userSlice.reducer;
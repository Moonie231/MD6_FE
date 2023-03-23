import {createSlice} from "@reduxjs/toolkit";
import {
    countMerchantNotification,
    countUserNotification,
    getNotificationMerchant,
    getNotificationUser,
    saveNotification, seenNotificationMerchant, seenNotificationUser
} from "../../service/notificationService";

const initialState = {
    notificationsUser: [],
    notificationsMerchant: [],
    countUser: 0,
    countMerchant: 0,
};

const notifications = createSlice({
    name: "notifications",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNotificationMerchant.fulfilled, (state, action) => {
            state.notificationsMerchant = action.payload;
        });
        builder.addCase(getNotificationUser.fulfilled, (state, action) => {
            state.notificationsUser = action.payload;
        });
        builder.addCase(countUserNotification.fulfilled, (state, action) => {
            state.countUser = action.payload;
        });
        builder.addCase(countMerchantNotification.fulfilled, (state, action) => {
            state.countMerchant = action.payload;
        });
        builder.addCase(seenNotificationUser.fulfilled, (state, action) => {
        });
        builder.addCase(seenNotificationMerchant.fulfilled, (state, action) => {
        });
        builder.addCase(saveNotification.fulfilled, (state, action) => {
            state.notificationsUser.push(action.payload);
            state.notificationsMerchant.push(action.payload);
        });
    },
});

export default notifications.reducer;

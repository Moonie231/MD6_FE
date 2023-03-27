import { createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from "./api";

export const getNotificationMerchant = createAsyncThunk(
    "notifications/getNotificationMerchant",
    async (data) => {
        const res = await customAxios.get("notifications/merchants/"+data);
        return res.data;
    }
);
export const getNotificationUser = createAsyncThunk(
    "notifications/getNotificationUser",
    async (data) => {
        const res = await customAxios.get("notifications/user/"+data);
        return res.data;
    }
);
export const saveNotification = createAsyncThunk(
    "notifications/saveNotification",
    async (data) => {
        const res = await customAxios.post("notifications",data);
        return res.data;
    }
);
export const countMerchantNotification = createAsyncThunk(
    "notifications/countMerchantNotification",
    async (data) => {
        const res = await customAxios.get("notifications/count-merchant/"+data);
        return res.data;
    }
);
export const countUserNotification = createAsyncThunk(
    "notifications/countUserNotification",
    async (data) => {
        const res = await customAxios.get("notifications/count-user/"+data);
        return res.data;
    }
);
export const seenNotificationMerchant = createAsyncThunk(
    "notifications/seenNotificationMerchant",
    async (data) => {
        const res = await customAxios.put("notifications/merchant-seen/"+data);
        return res.data;
    }
);
export const seenNotificationUser = createAsyncThunk(
    "notifications/seenNotificationUser",
    async (data) => {
        const res = await customAxios.put("notifications/user-seen/"+data);
        return res.data;
    }
);
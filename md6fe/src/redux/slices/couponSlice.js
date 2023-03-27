import {createSlice} from "@reduxjs/toolkit";
import {
    adminCoupon,
    createCoupon,
    createCouponDetail,
    deleteCoupon,
    getCoupon,
    myCoupon,
    updateCoupon
} from "../../service/couponService";

const initialState = {
    coupons: [],
    couponDetails:[]
};

const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(myCoupon.fulfilled, (state, action) => {
            state.coupons = action.payload;
        });
        builder.addCase(createCoupon.fulfilled, (state, action) => {
            state.coupons.push(action.payload)
        });
        builder.addCase(createCouponDetail.fulfilled, (state, action) => {
            state.couponDetails.push(action.payload)
        });
        builder.addCase(updateCoupon.fulfilled, (state, action) => {
            for (let i = 0; i < state.coupons.length; i++) {
                if (action.payload.idCoupon == state.coupons[i].idCoupon) {
                    state.coupons[i] = action.payload;
                }
            }
        });
        builder.addCase(getCoupon.fulfilled, (state, action) => {
            state.coupons = action.payload;
        });
        builder.addCase(adminCoupon.fulfilled, (state, action) => {
            state.coupons = action.payload;
        });
    },
});

export default couponSlice.reducer;
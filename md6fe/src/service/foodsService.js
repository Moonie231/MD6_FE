import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getFood = createAsyncThunk(
    'foods/getFoods',
    async ()=>{
        const res = await customAxios.get('foods/merchants');
        return res.data;
    }
)
export const findByIdFood = createAsyncThunk(
    'foods/findByIdFood',
    async (data)=>{
        const res = await customAxios.get('foods/find-by-id/'+data);
        return res.data
    }
)

export const addFood = createAsyncThunk(
    'foods/addFood',
    async (data)=>{
        await customAxios.post('foods',data);
        const res = await customAxios.get('foods');
        return res.data;
    }
)
export const deleteFood = createAsyncThunk(
    'foods/removeFood',
    async (data)=>{
        const res = await customAxios.delete('foods/'+data);
        return data
    }
)
export const editFood = createAsyncThunk(
    "foods/editFood",
    async (data) => {
        const res = await customAxios.put("foods/" + data[1], data[0]);
        return res.data;
    });
export const searchNameFood = createAsyncThunk(
    "foods/searchNameFood",
    async (data) => {
        const res = await customAxios.get('/foods/find-by-nameFood?nameFood' + data)
        return res.data;
    })


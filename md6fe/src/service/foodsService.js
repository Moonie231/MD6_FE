import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getFood = createAsyncThunk(
    'foods/getFood',
    async ()=>{
        const res = await customAxios.get('foods/merchants');
        return res.data;
    }
)
export const getFoods = createAsyncThunk(
    'foods/getFoods',
    async (data)=>{
        const res = await customAxios.get('foods?page='+data);
        return res.data;
    }
)
export const myFood = createAsyncThunk(
    'foods/myFoods',
    async (id)=>{
        const res = await customAxios.get('foods/my-foods/'+id);
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
          await customAxios.delete('foods/'+data[0]);
        const res = await customAxios.get('foods/my-foods/'+data[1]);
        return res.data;
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
        const res = await customAxios.post('/foods/find-by-nameFood' ,data)
        return res.data;
    })


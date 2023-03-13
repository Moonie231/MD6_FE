import {createSlice} from "@reduxjs/toolkit";
import {
    addFood,
    deleteFood,
    editFood,
    findByIdFood,
    getFood,
    searchNameFood
} from "../../service/foodsService";

const initialState = {
    foods: [],
    food: {}
}
const foodsSlice = createSlice({
        name: 'foods',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getFood.fulfilled, (state, action) => {
                state.foods = action.payload;
            });
            builder.addCase(addFood.fulfilled, (state, action) => {
                state.foods = action.payload
            })
            builder.addCase(findByIdFood.fulfilled, (state, action) => {
                state.food = action.payload
            })

            builder.addCase(deleteFood.fulfilled, (state, action) => {
                state.foods.splice(action.payload)
            })
            builder.addCase(editFood.fulfilled, (state, action) => {
                for (let i =0; i<state.foods.length; i++) {
                    if(action.payload.idFood == state.foods[i].idFood) {
                        state.foods[i] = action.payload;
                    }
                }
            })
            builder.addCase(searchNameFood.fulfilled, (state, action) => {
                state.search = action.payload;
            });

        }
    }
)

export default foodsSlice.reducer;
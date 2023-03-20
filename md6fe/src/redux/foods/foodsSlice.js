import {createSlice} from "@reduxjs/toolkit";
import {
    addFood,
    deleteFood,
    editFood,
    findByIdFood,
    getFood, getFoods, myFood,
    searchNameFood
} from "../../service/foodsService";

const initialState = {
    foods: [],
    myFood: [],
    food: {},
    search:[]
}
const foodsSlice = createSlice({
        name: 'foods',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getFood.fulfilled, (state, action) => {
                state.foods = action.payload;
            });
            builder.addCase(myFood.fulfilled, (state, action) => {
                state.myFood = action.payload;
            });
            builder.addCase(addFood.fulfilled, (state, action) => {
                state.foods.push(action.payload)
            })
            builder.addCase(findByIdFood.fulfilled, (state, action) => {
                console.log(action.payload)
                state.food = action.payload
            })

            builder.addCase(deleteFood.fulfilled, (state, action) => {
                state.myFood.splice(action.payload)
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
            builder.addCase(getFoods.fulfilled, (state, action) => {
                state.search = action.payload;
            });

        }
    }
)

export default foodsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: [],
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addrecipe: (state, action) => {
            state.recipes = action.payload;
        },
    },
});

export const { addrecipe } = counterSlice.actions;

export default counterSlice.reducer;
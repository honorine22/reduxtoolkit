import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: "blue" };
export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialState },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        },
        resetColor: (state) => {
            state.value = initialState
        }
    }
})

export default themeSlice.reducer;
export const { changeColor, resetColor } = themeSlice.actions;
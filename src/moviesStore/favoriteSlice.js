import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'favorite',
    initialState: [],
    // DESC favorite movie structure
    reducers: {
        addFavorite: (favorites, action) => {
            favorites.push(action.payload)
        },
        removeFavorite: (favorites, action) =>
            favorites.filter(favorite => favorite.id !== action.payload.id),
    }
})

export const { addFavorite, removeFavorite } = slice.actions;
export default slice.reducer;
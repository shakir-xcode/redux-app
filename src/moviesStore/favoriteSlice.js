import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'favorite',
    initialState: {
        list: [],
        idList: [],
    },
    // DESC favorite movie structure
    reducers: {
        addFavorite: (favorites, action) => {
            favorites.list.push(action.payload)
            favorites.idList.push(action.payload.id)
        },
        removeFavorite: (favorites, action) => {
            const index = favorites.list.findIndex(movie => movie.id === action.payload.id)
            favorites.list.splice(index, 1)
            favorites.idList.splice(index, 1)
        },
    }
})

export const { addFavorite, removeFavorite } = slice.actions;
export default slice.reducer;
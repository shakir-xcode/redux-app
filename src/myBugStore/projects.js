import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded: (state, action) => {
            state.push({
                id: ++id,
                name: action.payload.name,
            })
        },
        projectRemoved: (state, action) => {
            const index = state.findIndex(project => project.id === action.payload.id);
            state.splice(index, 1)
        },
    }
})
export const { projectAdded, projectRemoved } = slice.actions;
export default slice.reducer;

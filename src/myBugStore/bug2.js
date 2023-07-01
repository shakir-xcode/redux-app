import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (state, action) => {
            state.push({
                id: ++id,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (state, action) => {
            const index = state.findIndex(bug => bug.id === action.payload.id);
            state[index].resolved = true;
        },
        bugRemoved: (state, action) => {
            const index = state.findIndex(bug => bug.id === action.payload.id);
            state.splice(index, 1)
        },
    }
})

export const { bugAdded, bugResolved, bugRemoved } = slice.actions;
export default slice.reducer;

//     SELECTOR
const memoizeUnresolvedBugs = () => {
    let previousState;
    let result;
    return (state) => {
        if (state === previousState) {
            console.log('cached...')
            return result
        };
        previousState = state;
        result = state.entites.bugs.filter(bug => !bug.resolved)
        console.log('computed...')
        return result;
    }
}

export const selectUnresolvedBugs = memoizeUnresolvedBugs();





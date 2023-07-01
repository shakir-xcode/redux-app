import { createAction, createReducer } from "@reduxjs/toolkit";

// Aciton Creators
export const bugAdded = createAction('bugAdded');
export const bugRemoved = createAction('bugRemoved');
export const bugResolved = createAction('bugResolved');


// Reducer

let id = 0;

const createStateObj = description => ({
    id: ++id,
    description: description,
    resolved: false
})


export default createReducer([], {
    [bugAdded.type]: (state, action) => {
        state.push({
            id: ++id,
            description: action.payload.description,
            resolved: false
        })
    },

    [bugRemoved.type]: (state, action) => {
        const index = state.findIndex(bug => bug.id === action.payload.id);
        state.splice(index, 1)
    },

    [bugResolved.type]: (state, action) => {
        const index = state.findIndex(bug => bug.id === action.payload.id);
        state[index].resolved = true;
    },
})

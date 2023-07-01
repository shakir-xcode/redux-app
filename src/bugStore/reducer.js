import * as actions from "./actionTypes";
import { createReducer } from "@reduxjs/toolkit";

let lastId = 0;

createReducer([], {
    bugAdded: (state, action) => {
        state.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false,
        })
    },

    bugResolved: (state, action) => {
        const index = state.findIndex(bug => bug.id === action.payload.id);
        state[index].resolved = true;
    },
})


export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false,
                }
            ];

        case actions.BUG_RESOLVED:
            return state.map(bug => bug.id === action.payload.id ? { ...bug, resolved: true } : bug
            );

        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);

        default:
            return state;
    }
}
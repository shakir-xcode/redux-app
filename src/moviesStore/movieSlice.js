import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiActions";
import { TEN_MINUTES, url } from "../moviesConfig";


const slice = createSlice({
    name: 'movies',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },
    reducers: {
        moviesRequested: (state, action) => {
            state.loading = true;
        },
        requestEnded: (state, aciton) => {
            state.loading = false;
        },
        moviesDataReceived: (state, action) => {
            state.list.push(...action.payload);
            state.lastFetch = Date.now();
        },
    }
})

export const { moviesRequested, requestEnded, moviesDataReceived } = slice.actions;
export default slice.reducer;


// Action Creators
export const loadMovies = () => (dispatch, getState) => {
    const { lastFetch } = getState()
    const now = Date.now();

    // if next request is made within ten minutes
    // then action is not dispatched again 
    if (now - lastFetch < TEN_MINUTES) return;

    // TODO:  multiple urls are to be fetched      
    dispatch(apiCallBegan({
        url,
        onStart: moviesRequested.type,
        onEnd: requestEnded.type,
        onSuccess: moviesDataReceived.type,
    }))

}
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from './api';

const TEN_MINUTES = 600000;         //milliseconds in ten minutes

const slice = createSlice({
    name: 'movie',
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
        movieAdded: (state, action) => {
            state.list.push({
                id: action.payload.id,
                name: action.payload.name,
            })
        },
        movieRemoved: (state, action) => { return state.list.filter(movie => movie.id !== action.payload.id) },

        dataReceived: (state, action) => {
            state.list.push(...action.payload);
            state.lastFetch = Date.now();
        },
    },
})

export const { movieAdded, movieRemoved, dataReceived, moviesRequested, requestEnded } = slice.actions;
export default slice.reducer;


// Action Creators

export const loadMovies = () => (dispatch, getState) => {
    const { lastFetch } = getState()
    const now = Date.now();

    // if next request is made within ten minutes
    // then action is not dispatched again 
    if (now - lastFetch < TEN_MINUTES) return;

    dispatch(apiCallBegan({
        url: 'http://localhost:4000',
        onStart: moviesRequested.type,
        onEnd: requestEnded.type,
        onSuccess: dataReceived.type,
    }))
}

// export const loadMovies = () => apiCallBegan({
//     url: 'http://localhost:4000',
//     onStart: moviesRequested.type,
//     onEnd: requestEnded.type,
//     onSuccess: dataReceived.type,
// })

// SELECTORS


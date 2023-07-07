import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./appActions";
import { TEN_MINUTES, url } from "../moviesConfig";


const slice = createSlice({
    name: 'movies',
    initialState: {
        list: [],
        popularList: [],
        topRatedList: [],
        upcommingList: [],
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
        setTimestamp: (state, action) => {
            state.lastFetch = Date.now();
        },
        // moviesDataReceived: (state, action) => {
        //     state.list.push(...action.payload);
        // },
        popularMoviesReceived: (state, action) => {
            state.popularList.push(...action.payload);
            // state.lastFetch = Date.now();
        },
        topRatedMoviesReceived: (state, action) => {
            state.topRatedList.push(...action.payload);
            // state.lastFetch = Date.now();
        },
        upcomingMoviesReceived: (state, action) => {
            state.upcommingList.push(...action.payload);
            // state.lastFetch = Date.now();
        },
        addMovie: (state, action) => {
            state.list.push(action.payload)
        },
    }
})

const {
    moviesRequested,
    requestEnded,
    setTimestamp,
    popularMoviesReceived,
    topRatedMoviesReceived,
    upcomingMoviesReceived,
} = slice.actions;
export default slice.reducer;


// Action Creators
export const loadMovies = () => (dispatch, getState) => {
    const { lastFetch } = getState().movies
    const timeDiff = Date.now() - lastFetch;

    // if next request is made within ten minutes
    // then action is not dispatched again 
    if (timeDiff < TEN_MINUTES) return;

    // TODO:  multiple urls are to be fetched      
    dispatch(apiCallBegan({
        url,
        onStart: moviesRequested.type,
        onEnd: requestEnded.type,
        setTimestamp: setTimestamp.type,
        onSuccess: {
            popularMoviesReceived: popularMoviesReceived.type,
            topRatedMoviesReceived: topRatedMoviesReceived.type,
            upcomingMoviesReceived: upcomingMoviesReceived.type,
        },
    }))

}

// SELECTORS
export const getMovie = (state) => state.movies.popularList[2]
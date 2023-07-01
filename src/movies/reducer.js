import { createAction, createReducer } from "@reduxjs/toolkit";


// action types
const MOVIE_ADDED = 'movieAdded';
const MOVIE_REMOVED = 'movieRemoved';
const ADD_ALL_MOVIES = 'addAllMovies';

//actions creators
export const movieAdded = createAction(MOVIE_ADDED)
export const movieRemoved = createAction(MOVIE_REMOVED)
const addAllMovies = createAction(ADD_ALL_MOVIES)

// MY REDUCER
function reducer(state = [], action) {
    switch (action.type) {
        case MOVIE_ADDED: return [
            ...state,
            {
                id: action.payload.id,
                name: action.payload.name,
            }
        ];

        case MOVIE_REMOVED: return state.filter(movie => movie.id !== action.payload.id)

        default: return state;
    }
}

export default createReducer([], {
    [movieAdded.type]: (state, action) => {
        state.push({ id: action.payload.id, name: action.payload.name })
    },
    [movieRemoved.type]: (state, action) =>
        state.filter(movie => movie.id !== action.payload.id),

    [addAllMovies.type]: (state, action) => state.concat(action.payload)

})
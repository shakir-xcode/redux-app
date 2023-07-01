import { configureStore } from "@reduxjs/toolkit";
import reducer from "./movieSlice";
import logger from "./middleware/logger";
import api from "./middleware/api";

// custom store
const createStore = (reducer) => {
    let state = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action)
    }

    return {
        getState,
        dispatch,
    }
}

// configureStore() from redux toolkit
export default configureStore({
    reducer,
    middleware: (dm) => dm().concat(api, logger),
})
